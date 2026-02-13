"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { DISPLAY_PHONE, WHATSAPP_LINK } from "@/components/constants";



const first = {
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
};

export default function Hero() {
  const whatsText = encodeURIComponent(
    [
      "Olá! Vim pelo site da Urano Seguros 🙂",
      `Quero cotar: ${first.title}`,
      "",
      "Pode me ajudar?",
    ].join("\n")
  );

  return (
    <section className="hero heroFull">
      <div className="heroGrid">
        {/* ✅ SHELL SSR (aparece instantaneamente) */}
        <div className="heroShell" aria-hidden="true">
          <div className="heroShellMedia">
            <Image
              src={first.image}
              alt=""
              fill
              priority
              fetchPriority="high"
              sizes="100vw"
              style={{ objectFit: "cover", objectPosition: first.bgPos ?? "center" }}
            />
          </div>

          <div className="heroShellInner">
            <h1 className="heroTitle">{first.title}</h1>
            <p className="heroSubtitle">{first.text}</p>

            <div className="benefits">
              {first.tags.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>

            <div className="slideCtas">
              <a
                className="btnPrimary"
                href={`${first.primaryHref}&text=${whatsText}`}
                target="_blank"
                rel="noreferrer"
              >
                {first.primaryLabel}
              </a>

              <a className="btnGhost" href={first.secondaryHref}>
                {first.secondaryLabel}
              </a>

              <span className="ctaNote">🔒 {first.note}</span>
            </div>

            <div className="heroMeta">
              WhatsApp: <strong>{DISPLAY_PHONE}</strong> • Atendimento humano
            </div>
          </div>

          <div className="heroVignette" aria-hidden="true" />
        </div>

        {/* ✅ Seu slider client por cima */}
        
      </div>
    </section>
  );
}
