"use client";

import { useEffect, useRef, useState } from "react";

const testimonials = [
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

function initials(name: string) {
  const parts = name.trim().split(/\s+/);
  const first = parts[0]?.[0] ?? "";
  const last = parts.length > 1 ? parts[parts.length - 1][0] : "";
  return (first + last).toUpperCase();
}

function Stars() {
  return (
    <div className="tStars" aria-label="5 de 5 estrelas">
      {"★★★★★"}
    </div>
  );
}

export default function Testimonials() {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const [paused, setPaused] = useState(false);

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

      // Se chegou no fim, volta pro começo suavemente
      if (el.scrollLeft + j >= maxScroll - 2) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        el.scrollBy({ left: j, behavior: "smooth" });
      }
    }, 6000);

    return () => window.clearInterval(id);
  }, [paused]);

  return (
    <div className="testimonials">
      <div className="testimonialsHeadRow">
        <div>
          <h2 className="testimonialsTitle">Depoimentos</h2>
          <p className="testimonialsSub">
            Avaliações reais de clientes — atendimento humanizado e rápido.
          </p>
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
          {testimonials.map((t) => (
            <article key={t.name} className="tCard tSlide">
              <div className="tTop">
                <div className="tAvatar" aria-hidden="true">
                  {initials(t.name)}
                </div>

                <div className="tMeta">
                  <div className="tName">{t.name}</div>
                  <Stars />
                </div>

                <div className="tBadge" title="Avaliação do Google">
                  Google
                </div>
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
