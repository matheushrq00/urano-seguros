"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { DISPLAY_PHONE, WHATSAPP_LINK } from "../constants";


type Slide = {
  title: string;
  text: string;
  tags: string[];
  primaryHref: string;
  primaryLabel: string;
  secondaryHref: string;
  secondaryLabel: string;
  note: string;
  image: string;
  bgPos?: string;
};

const AUTOPLAY_MS = 5200;
const AUTOPLAY_RESUME_AFTER_INTENT_MS = 8000;

export default function Hero() {
  const slides: Slide[] = useMemo(
    () => [
      {
        title: "Seguro Auto e Moto completo",
        text: "Proteção total para seu veículo com assistência 24h e as melhores seguradoras do mercado.",
        tags: ["✓ Roubo e furto", "✓ Colisão", "✓ Danos a terceiros"],
        primaryHref: WHATSAPP_LINK,
        primaryLabel: "Cotar no WhatsApp",
        secondaryHref: "/seguro-auto",
        secondaryLabel: "Saiba mais",
        note: "Sem compromisso • Atendimento rápido",
        image: "/images/auto-moto.webp",
        bgPos: "60% center",
      },
      {
        title: "Proteção completa para sua Empresa",
        text: "Soluções sob medida para proteger seu patrimônio, equipe e operações.",
        tags: ["✓ Seguro Empresarial", "✓ Frota", "✓ Responsabilidade Civil"],
        primaryHref: WHATSAPP_LINK,
        primaryLabel: "Falar com especialista",
        secondaryHref: "/seguro-empresarial",
        secondaryLabel: "Saiba mais",
        note: "Atendimento consultivo",
        image: "/images/empresarial.webp",
        bgPos: "70% center",
      },
      {
        title: "Financiamento e Consórcio",
        text: "Planejamento inteligente para conquistar seu carro ou imóvel com segurança.",
        tags: ["✓ Auto", "✓ Imóvel", "✓ Parcelas acessíveis"],
        primaryHref: WHATSAPP_LINK,
        primaryLabel: "Simular agora",
        secondaryHref: "/consorcio",
        secondaryLabel: "Saiba mais",
        note: "Sem juros no consórcio",
        image: "/images/financiamento-consorcio.webp",
        bgPos: "62% center",
      },
    ],
    []
  );

  // clones: [last, ...slides, first]
  const loopSlides = useMemo(() => {
    if (slides.length === 0) return [];
    return [slides[slides.length - 1], ...slides, slides[0]];
  }, [slides]);

  // index: 0 = clone last, 1..slides.length = reais, slides.length+1 = clone first
  const [index, setIndex] = useState(1);
  const [animate, setAnimate] = useState(true);

  // autoplay UX
  const [paused, setPaused] = useState(false);
  const autoplayRef = useRef<number | null>(null);
  const resumeTimeoutRef = useRef<number | null>(null);

  // lock de transição
  const isMovingRef = useRef(false);
  
  const [isMoving, setIsMoving] = useState(false);

  const TRANSITION_MS = 900; // igual ao CSS
const unlockTimerRef = useRef<number | null>(null);

function lockWithFailsafe() {
  // já travado?
  if (isMovingRef.current) return false;

  isMovingRef.current = true;
  setIsMoving(true);

  if (unlockTimerRef.current) window.clearTimeout(unlockTimerRef.current);

  unlockTimerRef.current = window.setTimeout(() => {
    unlockNow();
    setIsMoving(false);
  }, TRANSITION_MS + 200);

  return true;
}

function unlockNow() {
  if (unlockTimerRef.current) window.clearTimeout(unlockTimerRef.current);
  isMovingRef.current = false;
  setIsMoving(false);
}


  // estado de carregamento por imagem
  const [loaded, setLoaded] = useState<Record<string, boolean>>({});

  // ---- helpers de índice (sempre corretos)
  const realCount = slides.length;
  const maxIndex = realCount + 1; // clone first
  const minIndex = 0; // clone last

  const activeReal = useMemo(() => {
    // 0..realCount-1 sempre
    if (realCount === 0) return 0;
    return (index - 1 + realCount) % realCount;
  }, [index, realCount]);

  const activeSlide = useMemo(() => {
    return slides[activeReal];
  }, [slides, activeReal]);

  const buildHeroWhatsText = useCallback(() => {
    if (!activeSlide) return "";
    const lines = [
      "Olá! Vim pelo site da Urano Seguros 🙂",
      `Quero cotar: ${activeSlide.title}`,
      "",
      "Pode me ajudar?",
    ];
    return encodeURIComponent(lines.join("\n"));
  }, [activeSlide]);

  // ✅ Preload client (aquecimento de cache)
  useEffect(() => {
    slides.forEach((s) => {
      const img = new window.Image();
      img.src = s.image;
    });
  }, [slides]);

  // ---- autoplay: start/stop + reset premium (sem closure velha)
  const stopAutoplay = useCallback(() => {
    if (autoplayRef.current) window.clearInterval(autoplayRef.current);
    autoplayRef.current = null;
  }, []);

  const scheduleResume = useCallback(() => {
    if (resumeTimeoutRef.current) window.clearTimeout(resumeTimeoutRef.current);
    resumeTimeoutRef.current = window.setTimeout(() => {
      setPaused(false);
    }, AUTOPLAY_RESUME_AFTER_INTENT_MS);
  }, []);

  const userIntent = useCallback(() => {
    // pausa imediata + agenda retorno suave
    setPaused(true);
    scheduleResume();
  }, [scheduleResume]);

 const goNext = useCallback(() => {
  if (!lockWithFailsafe()) return;

  setAnimate(true);
  setIndex((i) => Math.min(i + 1, maxIndex));
}, [maxIndex]);

const goPrev = useCallback(() => {
  if (!lockWithFailsafe()) return;

  setAnimate(true);
  setIndex((i) => Math.max(i - 1, minIndex));
}, [minIndex]);

const goToDot = useCallback((realIdx: number) => {
  if (!lockWithFailsafe()) return;

  setAnimate(true);
  setIndex(realIdx + 1);
}, []);



  // autoplay effect (chama goNext “fresco” via deps)
  useEffect(() => {
    stopAutoplay();
    if (paused) return;

    autoplayRef.current = window.setInterval(() => {
      // não tenta mover se ainda estiver animando
      if (!isMovingRef.current) goNext();
    }, AUTOPLAY_MS);

    return stopAutoplay;
  }, [paused, goNext, stopAutoplay]);

  // ---- teleporte 2×rAF (sem flicker) + destrava no final correto
  const snapTo = useCallback((nextIndex: number) => {
    // 1) desliga anim
    setAnimate(false);
    // 2) troca index
    setIndex(nextIndex);
    // 3) religa anim em 2 frames (evita frame intermediário feio)
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setAnimate(true);
        
        // destrava após o snap estar aplicado
        isMovingRef.current = false;
      });
    });
  }, []);

  const onTransitionEnd = useCallback(
  (e: React.TransitionEvent<HTMLDivElement>) => {
    // garante que é do track e do transform
    if (e.target !== e.currentTarget) return;
    if (e.propertyName !== "transform") return;

    // caiu no clone last?
    if (index === 0) {
      snapTo(realCount);
      return;
    }
    // caiu no clone first?
    if (index === realCount + 1) {
      snapTo(1);
      return;
    }

    unlockNow();
  },
  [index, realCount, snapTo]
);



  useEffect(() => {
  return () => {
    stopAutoplay();
    if (resumeTimeoutRef.current) window.clearTimeout(resumeTimeoutRef.current);
    if (unlockTimerRef.current) window.clearTimeout(unlockTimerRef.current);
  };
}, [stopAutoplay]);


  return (
    <section className="hero heroFull">
      <div className="heroGrid">
        <div
          className="slider"
          aria-label="Destaques"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onPointerDown={userIntent}
          onTouchStart={userIntent}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={() => setPaused(false)}
        >
          <div className="sliderTop">
            <div className="sliderDots">
              {slides.map((_, i) => (
                <button
                  key={i}
                  className={`dot ${i === activeReal ? "active" : ""}`}
                  aria-label={`Ir para o slide ${i + 1}`}
                  onClick={() => {
                    userIntent();
                    goToDot(i);
                  }}
                  type="button"
                />
              ))}
            </div>

            <div className="sliderArrows">
              <button
                className="arrow"
                onClick={() => {
                  userIntent();
                  goPrev();
                }}
                aria-label="Anterior"
                type="button"
            
              >
                ‹
              </button>
              <button
                className="arrow"
                onClick={() => {
                  userIntent();
                  goNext();
                }}
                aria-label="Próximo"
                type="button"
                
              >
                ›
              </button>
            </div>
          </div>

          <div className="slidesViewport">
            <div
  className={`slidesTrack ${animate ? "is-anim" : "no-anim"}`}
  style={{ transform: `translate3d(-${index * 100}%, 0, 0)` }}
  onTransitionEnd={onTransitionEnd}
  data-active={activeReal}

>

              {loopSlides.map((s, idx) => {
                // idx: 0 = clone last, 1..N = reais, N+1 = clone first
                const loopIsRealFirst = idx === 1; // ✅ prioridade só no 1º real de verdade
                const src = typeof s.image === "string" ? s.image.trim() : "";
                const isLoaded = !!loaded[src];

                // blindagem contra src inválido
                const valid = src.startsWith("/");
                const isActive = idx === index;
const isPrev = idx === index - 1;
const isNext = idx === index + 1;
const realIndex = ((idx - 1) + realCount) % realCount; // 0..2
const isReal = idx >= 1 && idx <= realCount;


                return (
                  <div className={`slide ${isActive ? "is-active" : ""} ${isPrev ? "is-prev" : ""} ${isNext ? "is-next" : ""}`}
                  key={`${s.title}-${idx}`}
                  data-idx={idx}
                  data-index={isReal ? realIndex : undefined}

>
                    <div className="slideMedia" aria-hidden="true">
                      {valid ? (
                        <Image
  src={src}
  alt=""
  fill
  priority={loopIsRealFirst}
  fetchPriority={loopIsRealFirst ? "high" : "auto"}
  sizes="100vw"
  onLoad={() => setLoaded((prev) => ({ ...prev, [src]: true }))}
  style={{
    objectFit: "cover",
    objectPosition: s.bgPos ?? "center",
    opacity: isLoaded ? 1 : 0,
    transition: "opacity 280ms ease",
  }}
/>

                      ) : null}

                      <div className={`slideFallback ${isLoaded ? "hide" : ""}`} />
                    </div>

                    <div className="slideInner">
                      <h1 className="heroTitle">{s.title}</h1>
                      <p className="heroSubtitle">{s.text}</p>

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

                      <div className="heroMeta">
                        WhatsApp: <strong>{DISPLAY_PHONE}</strong> • Atendimento humano
                      </div>
                    </div>

                    <div className="heroVignette" aria-hidden="true" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
