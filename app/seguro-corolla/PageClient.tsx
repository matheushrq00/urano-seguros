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
    "https://wa.me/5519998722063?text=Olá,%20quero%20simular%20o%20seguro%20para%20Corolla%20em%20Limeira";

  return (
    <main style={main}>

      {/* HERO */}
      <section style={hero}>
        <Image
          id="hero-img"
          src="/images/corolla-hero.png"
          alt="Toyota Corolla moderno em estrada urbana para seguro em Limeira"
          fill
          priority
          style={heroImg}
        />

        <div style={overlay} />

        <div style={heroContent}>
          <h1 style={title}>
            Seguro Corolla em Limeira com condições exclusivas
          </h1>

          <p style={subtitle}>
            Descubra quanto custa o seguro do seu Corolla e compare seguradoras em poucos minutos.
          </p>

          <a href={whatsappLink} style={btnPrimary}>
            Cotar seguro do Corolla
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
            <strong style={proofNumber}>Resposta rápida</strong>
            <p style={proofText}>cotação em minutos</p>
          </div>

          <div style={proofCard}>
            <span style={proofIcon}>💰</span>
            <strong style={proofNumber}>Até 30%</strong>
            <p style={proofText}>de economia</p>
          </div>
        </div>
      </section>

      {/* TEXTO SEO */}
      <section style={container}>
        <h2>Seguro para Toyota Corolla é caro?</h2>

        <p>
          O Toyota Corolla é um dos sedãs mais valorizados do Brasil, conhecido pela confiabilidade, conforto e baixa desvalorização.
        </p>

        <p>
          Por ter um valor de mercado mais alto, o seguro pode ter um custo superior a modelos populares, principalmente em grandes cidades.
        </p>

        <p>
          Mesmo assim, ao comparar diferentes seguradoras, muitos motoristas conseguem reduzir bastante o valor e encontrar planos com excelente custo-benefício.
        </p>
      </section>

      {/* PREÇO */}
      <section style={container}>
        <div style={priceBox}>

          <h2>Qual o valor do seguro do Corolla em Limeira?</h2>

          <p>
            O preço do seguro varia de acordo com o perfil do condutor, idade, histórico e região onde o veículo circula.
          </p>

          <p>
            Em média, o seguro do Corolla fica entre <strong>R$ 2.200 e R$ 4.500 por ano</strong>.
          </p>

          <p>
            Para encontrar o melhor valor, o ideal é fazer uma simulação personalizada com diferentes seguradoras.
          </p>

          <ul style={list}>
            <li>✔ Perfil do motorista</li>
            <li>✔ Local de circulação</li>
            <li>✔ Tipo de uso do veículo</li>
            <li>✔ Coberturas contratadas</li>
          </ul>

          <p style={highlightText}>
            Faça agora uma simulação gratuita e veja quanto você pode economizar:
          </p>

          <a href={whatsappLink} style={btnPrimary}>
            Ver cotação personalizada
          </a>

          <p style={microText}>
            ✔ Sem compromisso • ✔ Atendimento rápido • ✔ 100% gratuito
          </p>

        </div>
      </section>

      {/* BLOCO PREMIUM */}
      <section style={highlightSection}>
        <div style={highlightContainer}>

          <div>
            <h2 style={highlightTitle}>
              Economize no seguro do seu Corolla comparando seguradoras
            </h2>

            <p style={highlightDesc}>
              Em poucos cliques você encontra opções mais baratas e adequadas ao seu perfil.
            </p>

            <ul style={highlightList}>
              <li>✔ Cotação sob medida</li>
              <li>✔ Atendimento direto no WhatsApp</li>
              <li>✔ Planos flexíveis</li>
              <li>✔ Processo rápido</li>
            </ul>

            <a href={whatsappLink} style={btnPrimary}>
              Falar com especialista
            </a>
          </div>

          <div style={imageWrapper}>
            <Image
              src="/images/whatsapp-cotacao-corolla.png"
              alt="Simulação de seguro do Corolla pelo WhatsApp"
              width={900}
              height={900}
              style={highlightImage}
            />
          </div>

        </div>
      </section>

      {/* COBERTURAS */}
      <section style={container}>
        <h2>O que está incluso no seguro do Corolla?</h2>

        <div style={grid}>
          <div style={card}>🚗 Roubo e furto</div>
          <div style={card}>💥 Danos por colisão</div>
          <div style={card}>👥 Responsabilidade civil</div>
          <div style={card}>🛠 Assistência 24h</div>
        </div>
      </section>

      {/* INTERLINK */}
      <section style={container}>
        <h2>Veja também outros seguros populares</h2>

        <ul style={{ lineHeight: "2" }}>
          <li><a href="/seguro-civic">Seguro Civic em Limeira</a></li>
          <li><a href="/seguro-corolla-cross">Seguro Corolla Cross em Limeira</a></li>
          <li><a href="/seguro-onix">Seguro Onix em Limeira</a></li>
        </ul>
      </section>

      {/* CTA FINAL */}
      <section style={cta}>
        <h2 style={{ fontSize: "32px" }}>Simule agora o seguro do seu Corolla</h2>
        <p>Leva menos de 2 minutos e você recebe o valor atualizado</p>

        <a href={whatsappLink} style={btnBig}>
          Falar com especialista
        </a>
      </section>

    </main>
  );
}

/* ESTILOS (mantidos iguais) */

const main: CSSProperties = {
  fontFamily: "Inter, sans-serif",
};

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

const title: CSSProperties = {
  fontSize: "52px",
  textShadow: "0 4px 30px rgba(0,0,0,0.8)",
};

const subtitle: CSSProperties = {
  marginTop: "20px",
  textShadow: "0 2px 20px rgba(0,0,0,0.7)",
};

const btnPrimary: CSSProperties = {
  marginTop: "30px",
  background: "#22c55e",
  color: "#fff",
  padding: "14px 28px",
  borderRadius: "12px",
  display: "inline-block",
  textDecoration: "none",
  fontWeight: "600",
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

const proofIcon: CSSProperties = {
  fontSize: "30px",
};

const proofNumber: CSSProperties = {
  fontSize: "24px",
};

const proofText: CSSProperties = {
  color: "#cbd5f5",
};

const container: CSSProperties = {
  maxWidth: "1100px",
  margin: "0 auto",
  padding: "100px 20px",
};

const priceBox: CSSProperties = {
  background: "#f8fafc",
  padding: "60px",
  borderRadius: "20px",
  textAlign: "left",
  boxShadow: "0 20px 60px rgba(0,0,0,0.08)",
  border: "1px solid #eee",
};

const list: CSSProperties = {
  marginTop: "20px",
  lineHeight: "2",
  listStyle: "none",
  padding: 0,
};

const highlightText: CSSProperties = {
  marginTop: "20px",
  fontWeight: "600",
};

const microText: CSSProperties = {
  marginTop: "10px",
  fontSize: "14px",
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

const highlightTitle: CSSProperties = {
  fontSize: "34px",
};

const highlightDesc: CSSProperties = {
  marginTop: "10px",
};

const highlightList: CSSProperties = {
  marginTop: "20px",
  lineHeight: "2",
};

const imageWrapper: CSSProperties = {
  display: "flex",
  justifyContent: "center",
};

const highlightImage: CSSProperties = {
  borderRadius: "28px",
  width: "100%",
  maxWidth: "700px",
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