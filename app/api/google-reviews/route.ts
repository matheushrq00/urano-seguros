export const revalidate = 21600; // 6 horas (cache no Vercel)
export const runtime = "nodejs";

import { NextResponse } from "next/server";

type GooglePlaceSearchResponse = {
  places?: Array<{
    id: string;
    displayName?: { text?: string };
    formattedAddress?: string;
  }>;
};

type GooglePlaceDetailsResponse = {
  id?: string;
  displayName?: { text?: string };
  rating?: number;
  userRatingCount?: number;

  // Nem sempre vem, mas quando vem é o link direto do Maps:
  googleMapsUri?: string;

  reviews?: Array<{
    relativePublishTimeDescription?: string;
    rating?: number;
    text?: { text?: string; languageCode?: string };
    authorAttribution?: {
      displayName?: string;
      uri?: string;
      photoUri?: string;
    };
  }>;
};

function mustEnv(name: string) {
  const v = process.env[name];
  if (!v) throw new Error(`Missing env: ${name}`);
  return v;
}

export async function GET() {
  try {
    const apiKey = mustEnv("GOOGLE_PLACES_API_KEY");
    const lat = Number(mustEnv("GOOGLE_REVIEWS_LAT"));
    const lng = Number(mustEnv("GOOGLE_REVIEWS_LNG"));

    // 1) Encontrar o place id
    const searchRes = await fetch("https://places.googleapis.com/v1/places:searchText", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Goog-Api-Key": apiKey,
        "X-Goog-FieldMask": "places.id,places.displayName,places.formattedAddress",
      },
      body: JSON.stringify({
        textQuery: "Urano Seguros",
        languageCode: "pt-BR",
        locationBias: {
          circle: {
            center: { latitude: lat, longitude: lng },
            radius: 3000,
          },
        },
      }),
    });

    if (!searchRes.ok) {
      const errText = await searchRes.text();
      return NextResponse.json(
        { ok: false, message: "Erro no searchText", details: errText },
        { status: 500 }
      );
    }

    const searchJson = (await searchRes.json()) as GooglePlaceSearchResponse;
    const placeId = searchJson.places?.[0]?.id;

    if (!placeId) {
      return NextResponse.json(
        { ok: false, message: "Place não encontrado (searchText vazio)" },
        { status: 404 }
      );
    }

    // 2) Detalhes + reviews
    // IMPORTANTE: pedimos googleMapsUri quando disponível
    const detailsRes = await fetch(`https://places.googleapis.com/v1/places/${placeId}`, {
      method: "GET",
      headers: {
        "X-Goog-Api-Key": apiKey,
        "X-Goog-FieldMask": "id,displayName,rating,userRatingCount,googleMapsUri,reviews",
      },
    });

    if (!detailsRes.ok) {
      const errText = await detailsRes.text();
      return NextResponse.json(
        { ok: false, message: "Erro no place details", details: errText },
        { status: 500 }
      );
    }

    const detailsJson = (await detailsRes.json()) as GooglePlaceDetailsResponse;

    // ✅ mapsUrl (link do Google Maps)
    // - se vier googleMapsUri, usa ele
    // - senão, cai no fallback por place_id (funciona sempre)
    const mapsUrl =
      detailsJson.googleMapsUri ||
      (placeId ? `https://www.google.com/maps/place/?q=place_id:${placeId}` : null);

    const reviews =
      (detailsJson.reviews || [])
        .filter((r) => (r.rating ?? 0) >= 4)
        .slice(0, 8)
        .map((r) => ({
          author: r.authorAttribution?.displayName || "Cliente",
          authorUrl: r.authorAttribution?.uri || null,
          photoUrl: r.authorAttribution?.photoUri || null,
          rating: r.rating ?? null,
          text: r.text?.text || "",
          when: r.relativePublishTimeDescription || "",
        }));

    const payload = {
      ok: true,
      place: {
        id: detailsJson.id || placeId,
        name: detailsJson.displayName?.text || "Urano Seguros",
        rating: detailsJson.rating ?? null,
        userRatingCount: detailsJson.userRatingCount ?? null,
        mapsUrl, // 👈 AQUI está o novo campo
      },
      reviews,
    };

    return new NextResponse(JSON.stringify(payload), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        // cache edge + revalidate (rápido + econômico)
        "Cache-Control": "s-maxage=21600, stale-while-revalidate=86400",
      },
    });
  } catch (e: any) {
    return NextResponse.json(
      { ok: false, message: e?.message || "Erro interno" },
      { status: 500 }
    );
  }
}
