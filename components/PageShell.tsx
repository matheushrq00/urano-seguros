
"use client";

import styles from "./PageShell.module.css";
import Image from "next/image";
import { WHATSAPP_LINK, DISPLAY_PHONE } from "@/components/constants";

export default function PageShell(props: {
  title: string;
  subtitle?: string;
  bullets?: string[];
  heroImageSrc?: string;
  heroImageAlt?: string;
  children?: React.ReactNode;
}) {
  const {
    title,
    subtitle,
    bullets = [],
    heroImageSrc,
    heroImageAlt,
    children,
  } = props;

  return (
    <main>
      <section className="section" style={{ paddingTop: 26 }}>
        <div className="container">
          <div className="card" style={{ boxShadow: "var(--shadow)" }}>
            {/* HERO IMAGE (menor e responsiva) */}
            {heroImageSrc ? (
              <div className={styles.heroWrap}>
                <Image
  src={heroImageSrc}
  alt={heroImageAlt || title}
  fill
  priority
  sizes="(max-width: 768px) 92vw, 1120px"
  style={{
    objectFit: "cover",
    objectPosition: "center 30%", // 👈 ajuste o foco pra cima
  }}
/>

                /
                {/* overlay pra melhorar contraste do texto se precisar */}
                <div className="heroOverlay" />
              </div>
            ) : null}

            <h1 style={{ margin: 0, fontSize: 30 }}>{title}</h1>

            {subtitle ? (
              <p
                style={{
                  margin: "10px 0 0 0",
                  color: "var(--muted)",
                  lineHeight: 1.7,
                }}
              >
                {subtitle}
              </p>
            ) : null}

            <div style={{ marginTop: 14, display: "flex", gap: 10, flexWrap: "wrap" }}>
              <a className="ctaBtn" href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
                Falar no WhatsApp
              </a>

              <a className="btnGhost" href="/#cotacao">
                Fazer cotação
              </a>

              <span className="tag" style={{ borderColor: "rgba(177,15,27,.25)" }}>
                Tel: {DISPLAY_PHONE}
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="card">
            {bullets.length ? (
              <ul style={{ margin: 0, paddingLeft: 18, color: "var(--muted)", lineHeight: 1.9 }}>
                {bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            ) : null}

            {children}

            <div className="renewHighlight" style={{ marginTop: 18 }}>
              <div className="iconBox">✓</div>
              <div>
                <h3 style={{ margin: 0 }}>Quer uma proposta rápida?</h3>
                <p style={{ margin: 0 }}>
                  Clique em “Fazer cotação” ou chame no WhatsApp. A Urano Seguros compara as
                  melhores opções para você.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .heroWrap {
  position: relative;
  width: 100%;
  aspect-ratio: 21 / 9;
  min-height: 260px;
  max-height: 420px;   /* 👈 controla exagero */
  border-radius: 16px;
  overflow: hidden;
  margin-bottom: 16px;
  background: #f6f6f6;
}


        .heroOverlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.05),
            rgba(0, 0, 0, 0.35)
          );
          pointer-events: none;
        }

        @media (max-width: 768px) {
  .heroWrap {
    aspect-ratio: 4 / 3;
  }
}
      `}</style>
    </main>
  );
}
