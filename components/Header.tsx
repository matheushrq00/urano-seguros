"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* ===== TOPO PREMIUM (logo central + redes + CTA) ===== */}
      <div className="brandRow">
        <div className="container brandInner brandPremium">
          {/* Redes sociais (esquerda) */}
          <div className="socials" aria-label="Redes sociais">
            <a
              href="https://www.instagram.com/uranoseguros"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="socialBtn"
            >
              {/* Instagram SVG (premium e consistente) */}
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Z"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M17.5 6.5h.01"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </a>

            <a
              href="https://www.facebook.com/uranoseguros"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="socialBtn"
            >
              {/* Facebook SVG */}
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v3H7v3h3v6h3v-6h3l1-3h-4v-3c0-.6.4-1 1-1Z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </div>

          {/* Logo central */}
          <Link href="/" aria-label="Urano Seguros" className="logoLink logoCenter">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.png" alt="Urano Seguros" className="logo" />
          </Link>

          {/* CTA direita + menu mobile */}
          <div className="headerRight">
            <Link className="ctaBtn" href="/#cotacao">
              Cote Grátis
            </Link>

            <button
              className="mobileMenuBtn"
              onClick={() => setMobileOpen((v) => !v)}
              aria-expanded={mobileOpen}
              aria-label="Abrir menu"
              type="button"
            >
              ☰
            </button>
          </div>
        </div>
      </div>

      {/* ===== NAV ===== */}
      <nav className="nav">
        <div className="container navInner">
          {/* Desktop menu */}
          <div className="desktopMenu">
            <Link className="navItem" href="/seguro-auto">
              <span className="navLink">Auto</span>
            </Link>

            <Link className="navItem" href="/seguro-vida">
              <span className="navLink">Vida</span>
            </Link>

            <div className="navItem">
              <span className="navLink">
                Consórcio <span className="caret">▼</span>
              </span>
              <div className="dropdown">
                <Link href="/consorcio/auto">Consórcio Auto</Link>
                <Link href="/consorcio/imobiliario">Consórcio Imobiliário</Link>
              </div>
            </div>

            <Link className="navItem" href="/planos-de-saude">
              <span className="navLink">Planos de Saúde</span>
            </Link>

            <div className="navItem">
              <span className="navLink">
                Para você <span className="caret">▼</span>
              </span>
              <div className="dropdown">
                <Link href="/seguro-auto">Automóveis / Caminhões</Link>
                <Link href="/seguro-residencial">Residência</Link>
                <Link href="/seguro-vida">Vida</Link>
                <Link href="/seguros-eletronicos">Eletrônicos</Link>
                <Link href="/planos-de-saude">Saúde</Link>
                <Link href="/consorcio/auto">Consórcio Auto</Link>
                <Link href="/consorcio/imobiliario">Consórcio Imobiliário</Link>
              </div>
            </div>

            <div className="navItem">
              <span className="navLink">
                Para empresa <span className="caret">▼</span>
              </span>
              <div className="dropdown">
                <Link href="/seguro-empresarial">Empresarial</Link>
                <Link href="/seguro-empresarial">Responsabilidade Civil</Link>
                <Link href="/seguro-empresarial">Frotas</Link>
                <Link href="/seguro-empresarial">Transportes e Cargas</Link>
              </div>
            </div>

            <div className="navItem">
              <span className="navLink">
                Institucional <span className="caret">▼</span>
              </span>
              <div className="dropdown">
                <Link href="/a-empresa">A Empresa</Link>
                <Link href="/politica-de-cancelamento">Política de Cancelamento</Link>
                <Link href="/responsabilidade-social">Responsabilidade Social</Link>
                <Link href="/contato">Contato</Link>
              </div>
            </div>

            <Link className="navItem" href="/contato">
              <span className="navLink">Contato</span>
            </Link>
          </div>

          {/* Mobile menu */}
          <div className={`mobileMenu ${mobileOpen ? "open" : ""}`}>
            <Link className="mLink" href="/seguro-auto" onClick={() => setMobileOpen(false)}>
              Auto
            </Link>
            <Link className="mLink" href="/seguro-vida" onClick={() => setMobileOpen(false)}>
              Vida
            </Link>
            <Link className="mLink" href="/planos-de-saude" onClick={() => setMobileOpen(false)}>
              Planos de Saúde
            </Link>

            <div className="mGroup">
              <div className="mTitle">Consórcio</div>
              <Link className="mSub" href="/consorcio/auto" onClick={() => setMobileOpen(false)}>
                Consórcio Auto
              </Link>
              <Link
                className="mSub"
                href="/consorcio/imobiliario"
                onClick={() => setMobileOpen(false)}
              >
                Consórcio Imobiliário
              </Link>
            </div>

            <div className="mGroup">
              <div className="mTitle">Para você</div>
              <Link className="mSub" href="/seguro-auto" onClick={() => setMobileOpen(false)}>
                Automóveis / Caminhões
              </Link>
              <Link className="mSub" href="/seguro-residencial" onClick={() => setMobileOpen(false)}>
                Residência
              </Link>
              <Link className="mSub" href="/seguro-vida" onClick={() => setMobileOpen(false)}>
                Vida
              </Link>
              <Link
                className="mSub"
                href="/seguros-eletronicos"
                onClick={() => setMobileOpen(false)}
              >
                Eletrônicos
              </Link>
              <Link className="mSub" href="/planos-de-saude" onClick={() => setMobileOpen(false)}>
                Saúde
              </Link>
              <Link className="mSub" href="/consorcio/auto" onClick={() => setMobileOpen(false)}>
                Consórcio Auto
              </Link>
              <Link
                className="mSub"
                href="/consorcio/imobiliario"
                onClick={() => setMobileOpen(false)}
              >
                Consórcio Imobiliário
              </Link>
            </div>

            <div className="mGroup">
              <div className="mTitle">Para empresa</div>
              <Link className="mSub" href="/seguro-empresarial" onClick={() => setMobileOpen(false)}>
                Empresarial
              </Link>
              <Link className="mSub" href="/seguro-empresarial" onClick={() => setMobileOpen(false)}>
                Responsabilidade Civil
              </Link>
              <Link className="mSub" href="/seguro-empresarial" onClick={() => setMobileOpen(false)}>
                Frotas
              </Link>
              <Link className="mSub" href="/seguro-empresarial" onClick={() => setMobileOpen(false)}>
                Transportes e Cargas
              </Link>
            </div>

            <div className="mGroup">
              <div className="mTitle">Institucional</div>
              <Link className="mSub" href="/a-empresa" onClick={() => setMobileOpen(false)}>
                A Empresa
              </Link>
              <Link
                className="mSub"
                href="/politica-de-cancelamento"
                onClick={() => setMobileOpen(false)}
              >
                Política de Cancelamento
              </Link>
              <Link
                className="mSub"
                href="/responsabilidade-social"
                onClick={() => setMobileOpen(false)}
              >
                Responsabilidade Social
              </Link>
              <Link className="mSub" href="/contato" onClick={() => setMobileOpen(false)}>
                Contato
              </Link>
            </div>

            <Link className="mLink" href="/contato" onClick={() => setMobileOpen(false)}>
              Contato
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
