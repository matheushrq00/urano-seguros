"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";

const fallbackTestimonials = [
  { name: "Danila Fernanda de Souza", text: "Excelente, o corretor é atencioso, o processo foi simples e rápido." },
  { name: "Maurício Maquetas", text: "Boa prestação de serviço!! Grato" },
  { name: "Eziel Ferreira", text: "Fiz meu seguro com eles e nunca tive problemas, recomendo a Urano Seguros" },
  { name: "Marcel Hailer", text: "Bom atendimento, profissionalismo, rapidez e agilidade. Recomendo a todos!" },
  { name: "Matheus Ossame", text: "Super atenciosos" },
  { name: "Guilherme Trevisol", text: "Sou cliente há anos e só consigo pensar em elogios a Urano Seguros. Sinto-me completamente assegurado!" },
  { name: "Raphael Henrique", text: "Bons planos e ótimas recomendações" },
];

type ApiReview = {
  author: string;
  authorUrl: string | null;
  photoUrl: string | null;
  rating: number | null;
  text: string;
  when: string;
};

type ApiPlace = {
  id?: string | null;
  name?: string | null;
  rating?: number | null;
  userRatingCount?: number | null;
  mapsUrl?: string | null;
};

function initials(name: string) {
  const parts = name.trim().split(/\s+/);
  const first = parts[0]?.[0] ?? "";
  const last = parts.length > 1 ? parts[parts.length - 1][0] : "";
  return (first + last).toUpperCase();
}

function Stars({ value = 5 }: { value?: number }) {
  const v = Math.max(0, Math.min(5, Math.round(value)));
  return (
    <div className="tStars" aria-label={`${v} de 5 estrelas`}>
      {"★★★★★".slice(0, v)}
      <span aria-hidden="true" style={{ opacity: 0.25 }}>
        {"★★★★★".slice(v)}
      </span>
    </div>
  );
}

export default function Testimonials() {
  const [paused, setPaused] = useState(false);

  const [googleReviews, setGoogleReviews] = useState<ApiReview[] | null>(null);
  const [place, setPlace] = useState<ApiPlace | null>(null);

  // slider state
  const [active, setActive] = useState(0);
  const isAnimatingRef = useRef(false);

  // 🔥 Carrega reviews reais
  useEffect(() => {
    let alive = true;

    fetch("/api/google-reviews", { cache: "no-store" })
      .then((r) => r.json())
      .then((data: any) => {
        if (!alive) return;

        if (data?.ok && Array.isArray(data.reviews)) {
          const cleaned = data.reviews
            .filter((x: any) => (x?.text || "").trim().length > 0)
            .slice(0, 8);

          if (cleaned.length > 0) setGoogleReviews(cleaned);
          if (data.place) setPlace(data.place);
        }
      })
      .catch(() => {});

    return () => {
      alive = false;
    };
  }, []);

  const items = useMemo(() => {
    if (googleReviews && googleReviews.length > 0) {
      return googleReviews.map((r) => ({
        name: r.author || "Cliente",
        text: r.text || "",
        rating: r.rating ?? 5,
        photoUrl: r.photoUrl,
        when: r.when,
        authorUrl: r.authorUrl,
      }));
    }

    return fallbackTestimonials.map((t) => ({
      name: t.name,
      text: t.text,
      rating: 5,
      photoUrl: null as string | null,
      when: "",
      authorUrl: null as string | null,
    }));
  }, [googleReviews]);

  // mantém active válido quando items muda (ex: quando chega do Google)
  useEffect(() => {
    if (active >= items.length) setActive(0);
  }, [items.length, active]);

  const placeRating = place?.rating ?? null;
  const placeCount = place?.userRatingCount ?? null;
  const placeMapsUrl =
    place?.mapsUrl ||
    "https://www.google.com/search?q=Urano+Seguros+avalia%C3%A7%C3%B5es";

  const go = useCallback(
    (delta: number) => {
      if (items.length <= 1) return;

      // anti-spam (mas sem travar para sempre)
      if (isAnimatingRef.current) return;
      isAnimatingRef.current = true;

      setActive((a) => (a + delta + items.length) % items.length);

      // duração deve bater com o CSS transition
      window.setTimeout(() => {
        isAnimatingRef.current = false;
      }, 520);
    },
    [items.length]
  );

  // Autoplay (1 por vez)
  useEffect(() => {
    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

    if (reduceMotion) return;

    const id = window.setInterval(() => {
      if (paused) return;
      go(1);
    }, 6500);

    return () => window.clearInterval(id);
  }, [paused, go]);

  return (
    <div className="testimonials">
      

      {/* ✅ faixa dark estilo banner */}
      <div
        className="tStage"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
        onPointerDown={() => setPaused(true)}
        onPointerUp={() => setPaused(false)}
        onTouchStart={() => setPaused(true)}
        onTouchEnd={() => setPaused(false)}
      >
        <button type="button" className="tNav tNavLeft" onClick={() => go(-1)} aria-label="Anterior">
          ←
        </button>

        <button type="button" className="tNav tNavRight" onClick={() => go(1)} aria-label="Próximo">
          →
        </button>

        <div className="tTrack" style={{ transform: `translate3d(-${active * 100}%,0,0)` }}>
          {items.map((t, idx) => (
            <article key={`${t.name}-${idx}`} className="tSlide2" aria-hidden={idx !== active}>
              <div className="tRow">
                <div className="tAvatar2" aria-hidden="true">
                  {t.photoUrl ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={t.photoUrl}
                      alt={t.name}
                      className="tAvatarImg2"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                  ) : (
                    <span>{initials(t.name)}</span>
                  )}
                </div>

                <div className="tContent2">
                  <p className="tQuote2">“{t.text}”</p>

                  <div className="tWho2">
                    <div className="tName2">{t.name}</div>

                    <div className="tMeta2">
                      <Stars value={t.rating ?? 5} />
                      {t.when ? <span className="tWhen2">• {t.when}</span> : null}

                      <a className="tGoogle2" href={t.authorUrl || placeMapsUrl} target="_blank" rel="noreferrer">
                        Google
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
