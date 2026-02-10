"use client";

import { useEffect, useMemo, useRef, useState } from "react";

const fallbackTestimonials = [
  {
    name: "Danila Fernanda de Souza",
    text: "Excelente, o corretor é atencioso, o processo foi simples e rápido.",
  },
  { name: "Maurício Maquetas", text: "Boa prestação de serviço!! Grato" },
  {
    name: "Eziel Ferreira",
    text: "Fiz meu seguro com eles e nunca tive problemas, recomendo a Urano Seguros",
  },
  {
    name: "Marcel Hailer",
    text: "Bom atendimento, profissionalismo, rapidez e agilidade. Recomendo a todos!",
  },
  { name: "Matheus Ossame", text: "Super atenciosos" },
  {
    name: "Guilherme Trevisol",
    text: "Sou cliente há anos e só consigo pensar em elogios a Urano Seguros. Sinto-me completamente assegurado!",
  },
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
  id?: string;
  name?: string;
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
  const [place, setPlace] = useState<ApiPlace | null>(null);

  // Carrega reviews reais (sem quebrar caso falhe)
  useEffect(() => {
    let alive = true;

    // ✅ Deixa o cache trabalhar (sua API já está cacheada via revalidate)
    fetch("/api/google-reviews")
      .then((r) => r.json())
      .then((data: ApiResponse) => {
        if (!alive) return;

        if (data && (data as any).ok && Array.isArray((data as any).reviews)) {
          const okData = data as { ok: true; reviews: ApiReview[]; place?: ApiPlace };

          // place (nota média + total + link maps)
          if (okData.place) setPlace(okData.place);

          // reviews
          const cleaned = (okData.reviews || [])
            .filter((x) => (x?.text || "").trim().length > 0)
            .slice(0, 8);

          if (cleaned.length > 0) setGoogleReviews(cleaned);
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
        source: "google" as const,
      }));
    }

    return fallbackTestimonials.map((t) => ({
      name: t.name,
      text: t.text,
      rating: 5,
      photoUrl: null as string | null,
      when: "",
      authorUrl: null as string | null,
      source: "fallback" as const,
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

  // Autoplay leve (respeita prefers-reduced-motion)
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
    }, 12000);

    return () => window.clearInterval(id);
  }, [paused]);

  const placeRating =
    typeof place?.rating === "number" ? place.rating : null;

  const placeCount =
    typeof place?.userRatingCount === "number" ? place.userRatingCount : null;

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
{typeof placeRating === "number" && typeof placeCount === "number" && (
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
                aria-label="Ver todas as avaliações no Google"
              >
                Ver todas no Google
              </a>
            </div>
            )}

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
                  {/* ✅ Sempre renderiza as iniciais como fallback, mas controladas via CSS */}
                  {t.photoUrl ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={t.photoUrl}
                      alt={t.name}
                      className="tAvatarImg"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        // Se falhar, esconde a imagem e deixa aparecer as iniciais
                        e.currentTarget.style.display = "none";
                        e.currentTarget.dataset.failed = "1";
                      }}
                    />
                  ) : null}

                  <span className="tAvatarInitials">{initials(t.name)}</span>
                </div>

                <div className="tMeta">
                  <div className="tName">{t.name}</div>
                  <Stars value={t.rating} />
                  {t.when ? <div className="tWhen">{t.when}</div> : null}
                </div>

                <a
                  className="tBadge"
                  title="Avaliação do Google"
                  href={
                    t.authorUrl ||
                    "https://www.google.com/search?q=Urano+Seguros+avalia%C3%A7%C3%B5es"
                  }
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

      <div className="tHint">
        Dica: arraste para o lado no celular para ver mais depoimentos.
      </div>
    </div>
  );
}
