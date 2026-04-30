"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { CSSProperties } from "react";

export default function Page() {

  const [clients, setClients] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = 2400;
    const duration = 1200;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setClients(end);
        clearInterval(timer);
      } else {
        setClients(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById("hero-img");
      if (!hero) return;

      const scrollY = window.scrollY;
      hero.style.transform = `scale(${1 + scrollY * 0.0004}) translateY(${scrollY * 0.2}px)`;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const whatsappLink =
    "https://wa.me/5519998722063?text=Olá,%20quero%20simular%20o%20seguro%20para%20Amarok%20em%20Limeira";

  return (
    <main style={main}>

      {/* HERO */}
      <section style={hero}>
        <Image
          id="hero-img"
          src="/images/amarok-hero.png"
          alt="Volkswagen Amarok em estrada para seguro em Limeira"
          fill
          priority
          style={heroImg}
        />

        <div style={overlay} />

        <div style={heroContent}>
          <h1 style={title}>
            Seguro Amarok em Limeira com proteção completa e ótimo custo-benefício
          </h1>

          <p style={subtitle}>
            Compare diferentes seguradoras e descubra o valor ideal para proteger sua Amarok.
          </p>

          <a href={whatsappLink} style={btnPrimary}>
            Simular seguro da Amarok
          </a>
        </div>
      </section>

      {/* PROVA SOCIAL */}
      <section style={proofSection}>
        <div style={proofContainer}>
          <div style={proofCard}>
            <span style={proofIcon}>⭐</span>
            <strong style={proofNumber}>+{clients.toLocaleString()}</strong>
            <p style={proofText}>clientes atendidos</p>
          </div>

          <div style={proofCard}>
            <span style={proofIcon}>⚡</span>
            <strong style={proofNumber}>Ágil</strong>
            <p style={proofText}>cotação em poucos minutos</p>
          </div>

          <div style={proofCard}>
            <span style={proofIcon}>💰</span>
            <strong style={proofNumber}>Economia real</strong>
            <p style={proofText}>condições competitivas</p>
          </div>
        </div>
      </section>

      {/* TEXTO SEO */}
      <section style={container}>
        <h2>Seguro para Amarok é realmente necessário?</h2>

        <p>
          A Volkswagen Amarok é uma picape robusta e de alto valor, muito utilizada tanto no trabalho quanto no dia a dia.
        </p>

        <p>
          Por isso, contar com um seguro adequado é essencial para evitar prejuízos em situações inesperadas.
        </p>

        <p>
          Com uma boa cotação, é possível encontrar planos acessíveis com excelente cobertura.
        </p>
      </section>

      {/* PREÇO */}
      <section style={container}>
        <div style={priceBox}>

          <h2>Qual o valor do seguro da Amarok em Limeira?</h2>

          <p>
            O preço do seguro pode variar conforme o perfil do motorista e uso do veículo.
          </p>

          <p>
            Em média, o seguro da Amarok fica entre <strong>R$ 4.000 e R$ 8.000 por ano</strong>.
          </p>

          <p>
            Para obter um valor preciso, o ideal é realizar uma simulação personalizada.
          </p>

          <ul style={list}>
            <li>✔ Perfil do condutor</li>
            <li>✔ Região onde circula</li>
            <li>✔ Uso profissional ou pessoal</li>
            <li>✔ Coberturas contratadas</li>
          </ul>

          <p style={highlightText}>
            Descubra o valor exato para sua Amarok:
          </p>

          <a href={whatsappLink} style={btnPrimary}>
            Ver cotação personalizada
          </a>

          <p style={microText}>
            ✔ Gratuito • ✔ Sem compromisso • ✔ Resposta rápida
          </p>

        </div>
      </section>

      {/* BLOCO WHATSAPP */}
      <section style={highlightSection}>
        <div style={highlightContainer}>

          <div>
            <h2 style={highlightTitle}>
              Cotação rápida e personalizada pelo WhatsApp
            </h2>

            <p style={highlightDesc}>
              Fale com um especialista e receba as melhores opções para o seu perfil.
            </p>

            <ul style={highlightList}>
              <li>✔ Atendimento direto</li>
              <li>✔ Comparação entre seguradoras</li>
              <li>✔ Planos flexíveis</li>
              <li>✔ Sem compromisso</li>
            </ul>

            <a href={whatsappLink} style={btnPrimary}>
              Falar agora
            </a>
          </div>

          <div style={imageWrapper}>
            <Image
              src="/images/whatsapp-cotacao-amarok.png"
              alt="Simulação de seguro Amarok pelo WhatsApp"
              width={900}
              height={1200}
              style={highlightImage}
            />
          </div>

        </div>
      </section>

      {/* COBERTURAS */}
      <section style={container}>
        <h2>O que está incluso no seguro da Amarok?</h2>

        <div style={grid}>
          <div style={card}>🚗 Roubo e furto</div>
          <div style={card}>💥 Colisão</div>
          <div style={card}>👥 Responsabilidade civil</div>
          <div style={card}>🛠 Assistência 24h</div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section style={cta}>
        <h2 style={{ fontSize: "32px" }}>Solicite sua cotação agora</h2>
        <p>Processo rápido, gratuito e sem burocracia</p>

        <a href={whatsappLink} style={btnBig}>
          Falar com especialista
        </a>
      </section>

    </main>
  );
}

/* ESTILOS */

const main: CSSProperties = { fontFamily: "Inter, sans-serif" };

const hero: CSSProperties = {
  position: "relative",
  height: "90vh",
  overflow: "hidden",
};

const heroImg: CSSProperties = {
  objectFit: "cover",
  transition: "transform 0.4s ease",
};

const overlay: CSSProperties = {
  position: "absolute",
  inset: 0,
  background: "linear-gradient(90deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.6) 40%, rgba(0,0,0,0.3) 100%)",
};

const heroContent: CSSProperties = {
  position: "relative",
  zIndex: 2,
  color: "#fff",
  textAlign: "center",
  top: "50%",
  transform: "translateY(-50%)",
};

const title: CSSProperties = { fontSize: "52px" };

const subtitle: CSSProperties = { marginTop: "20px" };

const btnPrimary: CSSProperties = {
  marginTop: "30px",
  background: "#22c55e",
  color: "#fff",
  padding: "14px 28px",
  borderRadius: "12px",
  textDecoration: "none",
  display: "inline-block",
};

const proofSection: CSSProperties = {
  background: "#0f172a",
  padding: "60px 0",
};

const proofContainer: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  maxWidth: "1200px",
  margin: "0 auto",
  gap: "40px",
  padding: "0 20px",
};

const proofCard: CSSProperties = {
  color: "#fff",
  textAlign: "center",
};

const proofIcon: CSSProperties = { fontSize: "30px" };
const proofNumber: CSSProperties = { fontSize: "24px" };
const proofText: CSSProperties = { color: "#cbd5f5" };

const container: CSSProperties = {
  maxWidth: "1100px",
  margin: "0 auto",
  padding: "100px 20px",
};

const priceBox: CSSProperties = {
  background: "#f8fafc",
  padding: "60px",
  borderRadius: "20px",
};

const list: CSSProperties = {
  marginTop: "20px",
  lineHeight: "2",
  listStyle: "none",
};

const highlightSection: CSSProperties = {
  background: "#0f172a",
  padding: "140px 20px",
  color: "#fff",
};

const highlightContainer: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "1fr 1.4fr",
  gap: "60px",
  maxWidth: "1300px",
  margin: "0 auto",
  alignItems: "center",
};

const highlightTitle: CSSProperties = { fontSize: "34px" };
const highlightDesc: CSSProperties = { marginTop: "10px" };
const highlightList: CSSProperties = { marginTop: "20px", lineHeight: "2" };

const imageWrapper: CSSProperties = {
  display: "flex",
  justifyContent: "center",
};

const highlightImage: CSSProperties = {
  borderRadius: "28px",
  width: "100%",
  maxWidth: "700px", // 👈 aumenta aqui
  height: "auto",
  boxShadow: "0 40px 100px rgba(0,0,0,0.6)",
};

const grid: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gap: "20px",
};

const card: CSSProperties = {
  padding: "20px",
  border: "1px solid #eee",
  borderRadius: "10px",
};

const cta: CSSProperties = {
  background: "#111",
  color: "#fff",
  textAlign: "center",
  padding: "120px 20px",
};

const btnBig: CSSProperties = {
  marginTop: "20px",
  background: "#22c55e",
  padding: "16px 30px",
  borderRadius: "10px",
  display: "inline-block",
  textDecoration: "none",
};
const highlightText: CSSProperties = {
  marginTop: "20px",
  fontWeight: "600",
};

const microText: CSSProperties = {
  marginTop: "10px",
  fontSize: "14px",
  color: "#666",
};