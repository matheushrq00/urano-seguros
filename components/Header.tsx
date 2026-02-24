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

          {/* Logo */}
          <Link href="/" aria-label="Urano Seguros" className="logoLink">
            <img src="/logo.png" alt="Urano Seguros" className="logo" />
          </Link>

          {/* Menu desktop */}
          <nav className="nav" aria-label="Menu principal">
            <div className="navInner desktopMenu">
              <Link className="navItem" href="/">Home</Link>
              <Link className="navItem" href="/a-urano">A Urano</Link>
              <Link className="navItem" href="/para-voce">Para você</Link>
              <Link className="navItem" href="/para-empresas">Para empresas</Link>
              <Link className="navItem" href="/produtos-financeiros">Produtos Financeiros</Link>
              <Link className="navItem" href="/faq">F.A.Q</Link>
              <Link className="navItem" href="/contato">Contato</Link>
            </div>
          </nav>

          {/* CTA */}
          <Link className="ctaBtn" href="/#cotacao">
            Cote Grátis
          </Link>

          {/* Botão mobile */}
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

        {/* ===== MENU MOBILE SIMPLIFICADO ===== */}
        <div className={`mobileMenu ${mobileOpen ? "open" : ""}`}>
          <Link className="mLink" href="/" onClick={() => setMobileOpen(false)}>Home</Link>
          <Link className="mLink" href="/a-urano" onClick={() => setMobileOpen(false)}>A Urano</Link>
          <Link className="mLink" href="/para-voce" onClick={() => setMobileOpen(false)}>Para você</Link>
          <Link className="mLink" href="/para-empresas" onClick={() => setMobileOpen(false)}>Para empresas</Link>
          <Link className="mLink" href="/produtos-financeiros" onClick={() => setMobileOpen(false)}>Produtos Financeiros</Link>
          <Link className="mLink" href="/faq" onClick={() => setMobileOpen(false)}>F.A.Q</Link>
          <Link className="mLink" href="/contato" onClick={() => setMobileOpen(false)}>Contato</Link>
        </div>
      </div>
    </>
  );
}
