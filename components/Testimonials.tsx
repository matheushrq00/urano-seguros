"use client";

import { useEffect, useMemo, useRef, useState } from "react";

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

type ApiResponse =
  | { ok: true; reviews: ApiReview[]; place?: ApiPlace }
  | { ok: false; message?: string };

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
  const scrollerRef = useRef<HTMLDivElement | null>(null);

  const [paused, setPaused] = useState(false);
  const [googleReviews, setGoogleReviews] = useState<ApiReview[] | null>(null);
  useEffect(() => {
}, [googleReviews]);

  const [place, setPlace] = useState<ApiPlace | null>(null);

  // 🔥 Carrega reviews reais
  useEffect(() => {
  let alive = true;

  fetch("/api/google-reviews", { cache: "no-store" })
    .then((r) => r.json())
    .then((data: any) => {
      console.log("API /api/google-reviews:", data);

      if (!alive) return;

      console.log("API /api/google-reviews:", data);

      if (data?.ok && Array.isArray(data.reviews)) {
        const cleaned = data.reviews
          .filter((x: any) => (x?.text || "").trim().length > 0)
          .slice(0, 8);

        console.log("cleaned reviews:", cleaned.length);

        if (cleaned.length > 0) setGoogleReviews(cleaned);
        if (data.place) setPlace(data.place);
      }
    })
    .catch((err) => console.log("Erro fetch reviews:", err));

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

  function jumpSize() {
    const el = scrollerRef.current;
    if (!el) return 360;
    const card = el.querySelector<HTMLElement>(".tSlide");
    return (card?.offsetWidth ?? 360) + 14;
  }

  function scrollByCards(direction: "left" | "right") {
    const el = scrollerRef.current;
    if (!el) return;

    el.scrollBy({
      left: direction === "left" ? -jumpSize() : jumpSize(),
      behavior: "smooth",
    });
  }

  // Autoplay leve
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

    if (reduceMotion) return;

    const id = window.setInterval(() => {
      if (paused) return;

      const j = jumpSize();
      const maxScroll = el.scrollWidth - el.clientWidth;

      if (el.scrollLeft + j >= maxScroll - 2) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        el.scrollBy({ left: j, behavior: "smooth" });
      }
    }, 6500);

    return () => window.clearInterval(id);
  }, [paused]);

  const placeRating = place?.rating ?? null;
  const placeCount = place?.userRatingCount ?? null;
  const placeMapsUrl =
    place?.mapsUrl ||
    "https://www.google.com/search?q=Urano+Seguros+avalia%C3%A7%C3%B5es";

  return (
    <div className="testimonials">
      <div className="testimonialsHeadRow">
        <div>
          <h2 className="testimonialsTitle">Depoimentos</h2>
          <p className="testimonialsSub">
            
            Avaliações reais de clientes — atendimento humanizado e rápido.
          </p>


          {/* ✅ Média + total + botão */}
          {placeRating && placeCount ? (
            <div className="tSummaryRow">
              <div className="tSummary">
                <span className="tSummaryStar">★</span>
                <strong>{placeRating.toFixed(1)}</strong>
                <span className="tSummarySep">•</span>
                <span>{placeCount} avaliações no Google</span>
              </div>

              <a
                className="tGoogleLink"
                href={placeMapsUrl}
                target="_blank"
                rel="noreferrer"
              >
                Ver todas no Google
              </a>
            </div>
          ) : null}
        </div>

        <div className="tArrows" aria-label="Controles do carrossel">
          <button
            type="button"
            className="tArrow"
            onClick={() => scrollByCards("left")}
            aria-label="Ver depoimentos anteriores"
          >
            ‹
          </button>
          <button
            type="button"
            className="tArrow"
            onClick={() => scrollByCards("right")}
            aria-label="Ver próximos depoimentos"
          >
            ›
          </button>
        </div>
      </div>

      <div className="tCarouselWrap">
        <div
          ref={scrollerRef}
          className="tCarousel"
          role="region"
          aria-label="Carrossel de depoimentos"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
          onPointerDown={() => setPaused(true)}
          onPointerUp={() => setPaused(false)}
          onTouchStart={() => setPaused(true)}
          onTouchEnd={() => setPaused(false)}
        >
          {items.map((t, idx) => (
            <article key={`${t.name}-${idx}`} className="tCard tSlide">
              <div className="tTop">
                <div className="tAvatar" aria-hidden="true">
                  {t.photoUrl ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={t.photoUrl}
                      alt={t.name}
                      className="tAvatarImg"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                  ) : (
                    <span>{initials(t.name)}</span>
                  )}
                  {/* iniciais podem aparecer por trás se a imagem falhar */}
                  <span className="tAvatarInitials">{initials(t.name)}</span>
                </div>

                <div className="tMeta">
                  <div className="tName">{t.name}</div>
                  <Stars value={t.rating ?? 5} />
                  {t.when ? <div className="tWhen">{t.when}</div> : null}
                </div>

                <a
                  className="tBadge"
                  title="Avaliação do Google"
                  href={t.authorUrl || placeMapsUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Google
                </a>
              </div>

              <p className="tText">“{t.text}”</p>
            </article>
          ))}
        </div>
      </div>

      <div className="tHint">Dica: arraste para o lado no celular para ver mais depoimentos.</div>
    </div>
  );
}
