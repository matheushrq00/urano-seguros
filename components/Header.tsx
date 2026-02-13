"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* ===== TOPBAR FININHA (tipo Pedersen) ===== */}
      <div className="topStrip">
        <div className="container topStripInner">
          <div className="topLeft">
            <span className="topItem">
              📞 / WhatsApp:{" "}
              <a href="https://wa.me/5519998722063" target="_blank" rel="noreferrer">
                (19) 99872-2063
              </a>
            </span>
            <span className="topSep">|</span>
            <span className="topItem">
              ✉️ E-mail:{" "}
              <a href="mailto:matheus.uranoseguros@gmail.com">
                matheus.uranoseguros@gmail.com
              </a>
            </span>
          </div>

          <div className="topSocials" aria-label="Redes sociais">
            <a
              href="https://www.instagram.com/uranoseguros"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="topSocialBtn"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
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
              className="topSocialBtn"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v3H7v3h3v6h3v-6h3l1-3h-4v-3c0-.6.4-1 1-1Z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* ===== HEADER PRINCIPAL (logo + menu no branco) ===== */}
      <div className="brandRow">
        <div className="container brandInner">
          {/* Logo à esquerda */}
          <Link href="/" aria-label="Urano Seguros" className="logoLink">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.png" alt="Urano Seguros" className="logo" />
          </Link>

          {/* Menu desktop (igual Pedersen) */}
          <nav className="nav" aria-label="Menu principal">
            <div className="navInner desktopMenu">
              <Link className="navItem" href="/">
                <span className="navLink">Home</span>
              </Link>

              <Link className="navItem" href="/a-empresa">
                <span className="navLink">A Urano</span>
              </Link>

              <div className="navItem">
                <span className="navLink">
                  Para você <span className="caret">▼</span>
                </span>
                <div className="dropdown">
                  <Link href="/seguro-auto">Auto / Moto</Link>
                  <Link href="/seguro-residencial">Residencial</Link>
                  <Link href="/seguro-vida">Vida</Link>
                  <Link href="/planos-de-saude">Planos de Saúde</Link>
                  <Link href="/seguros-eletronicos">Eletrônicos</Link>
                </div>
              </div>

              <div className="navItem">
                <span className="navLink">
                  Para empresas <span className="caret">▼</span>
                </span>
                <div className="dropdown">
                  <Link href="/seguro-empresarial">Seguro Empresarial</Link>
                  <Link href="/seguro-empresarial">Frotas</Link>
                  <Link href="/seguro-empresarial">Responsabilidade Civil</Link>
                  <Link href="/seguro-empresarial">Transportes e Cargas</Link>
                </div>
              </div>

              <div className="navItem">
                <span className="navLink">
                  Produtos Financeiros <span className="caret">▼</span>
                </span>
                <div className="dropdown">
                  <Link href="/consorcio/auto">Consórcio Auto</Link>
                  <Link href="/consorcio/imobiliario">Consórcio Imobiliário</Link>
                  <Link href="/consorcio">Financiamento</Link>
                </div>
              </div>

              <Link className="navItem" href="/faq">
                <span className="navLink">F.A.Q</span>
              </Link>

              <Link className="navItem" href="/contato">
                <span className="navLink">Contato</span>
              </Link>
            </div>
          </nav>

          {/* CTA + menu mobile */}
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

        {/* ===== MENU MOBILE (novo) ===== */}
        <div className={`container mobileMenu ${mobileOpen ? "open" : ""}`}>
          <Link className="mLink" href="/" onClick={() => setMobileOpen(false)}>
            Home
          </Link>
          <Link className="mLink" href="/a-empresa" onClick={() => setMobileOpen(false)}>
            A Urano
          </Link>

          <div className="mGroup">
            <div className="mTitle">Para você</div>
            <Link className="mSub" href="/seguro-auto" onClick={() => setMobileOpen(false)}>
              Auto / Moto
            </Link>
            <Link className="mSub" href="/seguro-residencial" onClick={() => setMobileOpen(false)}>
              Residencial
            </Link>
            <Link className="mSub" href="/seguro-vida" onClick={() => setMobileOpen(false)}>
              Vida
            </Link>
            <Link className="mSub" href="/planos-de-saude" onClick={() => setMobileOpen(false)}>
              Planos de Saúde
            </Link>
            <Link className="mSub" href="/seguros-eletronicos" onClick={() => setMobileOpen(false)}>
              Eletrônicos
            </Link>
          </div>

          <div className="mGroup">
            <div className="mTitle">Para empresas</div>
            <Link className="mSub" href="/seguro-empresarial" onClick={() => setMobileOpen(false)}>
              Seguro Empresarial
            </Link>
            <Link className="mSub" href="/seguro-empresarial" onClick={() => setMobileOpen(false)}>
              Frotas
            </Link>
            <Link className="mSub" href="/seguro-empresarial" onClick={() => setMobileOpen(false)}>
              Responsabilidade Civil
            </Link>
            <Link className="mSub" href="/seguro-empresarial" onClick={() => setMobileOpen(false)}>
              Transportes e Cargas
            </Link>
          </div>

          <div className="mGroup">
            <div className="mTitle">Produtos Financeiros</div>
            <Link className="mSub" href="/consorcio/auto" onClick={() => setMobileOpen(false)}>
              Consórcio Auto
            </Link>
            <Link className="mSub" href="/consorcio/imobiliario" onClick={() => setMobileOpen(false)}>
              Consórcio Imobiliário
            </Link>
            <Link className="mSub" href="/consorcio" onClick={() => setMobileOpen(false)}>
              Financiamento
            </Link>
          </div>

          <Link className="mLink" href="/faq" onClick={() => setMobileOpen(false)}>
            F.A.Q
          </Link>

          <Link className="mLink" href="/contato" onClick={() => setMobileOpen(false)}>
            Contato
          </Link>
        </div>
      </div>
    </>
  );
}
