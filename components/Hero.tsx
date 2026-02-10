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
        primaryHref: WHATSAPP_LINK,
        primaryLabel: "Cotar no WhatsApp",
        secondaryHref: "/seguro-auto",
        secondaryLabel: "Saiba mais",
        note: "Sem compromisso • Atendimento rápido",
      },
      {
        title: "Planos de Saúde ideais para você",
        text: "Opções para pessoa física, família e empresas, com rede credenciada e custo-benefício.",
        tags: ["✓ Coberturas completas", "✓ Rede credenciada", "✓ Custo-benefício"],
        primaryHref: WHATSAPP_LINK,
        primaryLabel: "Cotar no WhatsApp",
        secondaryHref: "/planos-de-saude",
        secondaryLabel: "Saiba mais",
        note: "Compare planos e valores",
      },
      {
        title: "Consórcios",
        text: "Parcelas acessíveis e planejamento inteligente para auto e imóvel. Sem juros, sem entrada.",
        tags: ["✓ Auto", "✓ Imobiliário", "✓ Planejamento"],
        primaryHref: WHATSAPP_LINK,
        primaryLabel: "Simular no WhatsApp",
        secondaryHref: "/consorcio",
        secondaryLabel: "Saiba mais",
        note: "Sem juros • Planejamento inteligente",
      },
    ],
    []
  );

  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

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

  // Mensagem pronta (melhora conversão)
  function buildHeroWhatsText() {
    const s = slides[active];
    const lines = [
      "Olá! Vim pelo site da Urano Seguros 🙂",
      `Quero cotar: ${s.title}`,
      "",
      "Pode me ajudar?",
    ];
    return encodeURIComponent(lines.join("\n"));
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
              <button className="arrow" onClick={() => goTo(active - 1)}>
                ‹
              </button>
              <button className="arrow" onClick={() => goTo(active + 1)}>
                ›
              </button>
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
                    <a
                      className="btnPrimary"
                      href={`${s.primaryHref}&text=${buildHeroWhatsText()}`}
                      target="_blank"
                      rel="noreferrer"
                    >
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

        {/* PROVA SOCIAL (no lugar do "Contato") */}
        <aside className="infoCard">
          <h3>Clientes recomendam</h3>

          <div className="proofRow">
            <div className="proofStars" aria-label="Avaliação 4,9 de 5">
              ★★★★★
            </div>
            <div className="proofMeta">
              <strong>4,9</strong> • <span>17 avaliações no Google</span>
            </div>
          </div>

          <div className="proofPills">
            <span className="tag">Atendimento humanizado</span>
            <span className="tag">Cotação rápida</span>
            <span className="tag">100% digital</span>
          </div>

          <div className="proofQuote">
            “Processo simples e rápido. Atendimento excelente.”
          </div>

          <a
            className="infoBtn"
            href={`${WHATSAPP_LINK}&text=${buildHeroWhatsText()}`}
            target="_blank"
            rel="noreferrer"
          >
            Falar no WhatsApp
          </a>

          <div className="proofSmall">
            WhatsApp: <strong>{DISPLAY_PHONE}</strong>
            <br />
            Limeira/SP • Cotamos todo Brasil
          </div>
        </aside>
      </div>
    </section>
  );
}
