"use client";

import { useEffect, useMemo, useState } from "react";
import { DISPLAY_PHONE, WHATSAPP_LINK } from "./constants";

type Slide = {
  title: string;
  text: string;
  tags: string[];
  primaryHref: string;
  primaryLabel: string;
  secondaryHref: string;
  secondaryLabel: string;
  note: string;
};

export default function Hero() {
  const slides: Slide[] = useMemo(
    () => [
      {
        title: "Seguro Auto completo",
        text: "Proteção total para o seu veículo, com assistência 24h e as melhores seguradoras do mercado.",
        tags: ["✓ Roubo e furto", "✓ Colisão", "✓ Danos a terceiros"],
        primaryHref: "/contato",
        primaryLabel: "Cotar agora",
        secondaryHref: "/seguro-auto",
        secondaryLabel: "Saiba mais",
        note: "Sem compromisso • Atendimento rápido",
      },
      {
        title: "Planos de Saúde ideais para você",
        text: "Conte com a Urano Seguros para proteção e qualidade de vida. Opções para pessoa física, família e empresas.",
        tags: ["✓ Coberturas completas", "✓ Rede credenciada", "✓ Custo-benefício"],
        primaryHref: "/contato",
        primaryLabel: "Cotar agora",
        secondaryHref: "/planos-de-saude",
        secondaryLabel: "Saiba mais",
        note: "Compare planos e valores",
      },
      {
        title: "Consórcios",
        text: "Conquiste seus objetivos com consórcios planejados para você. Parcelas acessíveis e planejamento inteligente.",
        tags: ["✓ Auto", "✓ Imobiliário", "✓ Planejamento"],
        primaryHref: "/contato",
        primaryLabel: "Cotar agora",
        secondaryHref: "/consorcio",
        secondaryLabel: "Saiba mais",
        note: "Sem juros • Planejamento inteligente",
      },
    ],
    []
  );

  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  // ✅ AUTOPLAY ESTÁVEL
  useEffect(() => {
  if (paused) return;

  const id = window.setInterval(() => {
    setActive((i) => (i + 1) % slides.length);
  }, 4000);

  return () => window.clearInterval(id);
}, [paused, slides.length]);


  function goTo(i: number) {
    setActive((prev) => {
      if (i < 0) return slides.length - 1;
      if (i >= slides.length) return 0;
      return i;
    });
  }

  return (
    <section className="hero">
      <div className="container heroGrid">
        {/* SLIDER */}
        <div
  className="slider"
  aria-label="Destaques"
  onMouseEnter={() => setPaused(true)}
  onMouseLeave={() => setPaused(false)}
  onPointerDown={() => setPaused(true)}
  onPointerUp={() => setPaused(false)}
  onPointerCancel={() => setPaused(false)}
  onTouchStart={() => setPaused(true)}
  onTouchEnd={() => setPaused(false)}
>
          {/* TOPO: DOTS + SETAS */}
          <div className="sliderTop">
            <div className="sliderDots">
              {slides.map((_, i) => (
                <button
                  key={i}
                  className={`dot ${i === active ? "active" : ""}`}
                  aria-label={`Ir para o slide ${i + 1}`}
                  onClick={() => goTo(i)}
                />
              ))}
            </div>

            <div className="sliderArrows">
              <button className="arrow" onClick={() => goTo(active - 1)}>‹</button>
              <button className="arrow" onClick={() => goTo(active + 1)}>›</button>
            </div>
          </div>

          {/* SLIDES */}
          <div className="slidesViewport">
            <div
              className="slidesTrack"
              style={{ transform: `translateX(-${active * 100}%)` }}
            >
              {slides.map((s, idx) => (
                <div className="slide" key={idx}>
                  <h1>{s.title}</h1>
                  <p>{s.text}</p>

                  <div className="benefits">
                    {s.tags.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>

                  <div className="slideCtas">
                    <a className="btnPrimary" href={s.primaryHref}>
                      {s.primaryLabel}
                    </a>
                    <a className="btnGhost" href={s.secondaryHref}>
                      {s.secondaryLabel}
                    </a>
                    <span className="ctaNote">🔒 {s.note}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CARD LATERAL */}
        <aside className="infoCard">
          <h3>Contato</h3>

          <div>
            <div className="infoLabel">WhatsApp</div>
            <div className="infoValue">
              <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
                {DISPLAY_PHONE}
              </a>
            </div>
          </div>

          <div>
            <div className="infoLabel">Local</div>
            <div className="infoValue">
              Limeira/SP - Cotamos para todo o BRASIL
            </div>
          </div>

          <a className="infoBtn" href="/contato">
            Formulário de Contato
          </a>
        </aside>
      </div>
    </section>
  );
}
