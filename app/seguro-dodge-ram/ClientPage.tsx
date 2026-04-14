import SchemaAuto from "@/components/SchemaAuto";
"use client";

import React, { useEffect } from "react";

export default function ClientPage() {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <main style={{ background: "#000", color: "#fff", overflowX: "hidden" }}>

        <SchemaAuto carName="Dodge RAM" />

      {/* HERO */}
      <section style={hero}>
  <div style={heroBackground}></div>
  <div style={overlay}></div>

  <div style={heroContent}>
    <h1 style={title} className="fade fade1">
      Proteção Premium para sua Dodge RAM
    </h1>

    <p style={subtitle} className="fade fade2">
      Seguro exclusivo para veículos de alto padrão em Limeira
    </p>

    <a
      href="https://wa.me/5519998722063"
      target="_blank"
      style={btnMain}
      className="fade fade3"
    >
      🚀 Cotar seguro da minha RAM agora
    </a>

    <p style={socialHero} className="fade fade4">
      ⭐ Mais de 2.400 clientes atendidos <br />
      ⭐ Avaliação 4.9 no Google
    </p>
  </div>
</section>

      {/* BLOCO */}
      {/* BLOCO CINEMATOGRÁFICO */}
<section style={sectionWrap}>

  <div style={sectionContent}>
    
    <div className="line"></div>

    <h2 className="titleAnim">
      Não é apenas uma caminhonete
    </h2>

    <p className="textAnim delay1">
      A RAM representa força, presença e exclusividade.
    </p>

    <p className="textAnim delay2">
      Seu seguro precisa acompanhar esse nível.
    </p>

  </div>

</section>

      {/* CARDS */}
      <section style={containerDark} className="reveal">
        <h2 style={sectionTitle}>Proteção de alto nível</h2>

        <div style={grid}>
          <div style={card} className="card">Alto valor de mercado</div>
          <div style={card} className="card">Custo elevado de reparo</div>
          <div style={card} className="card">Maior exposição a riscos</div>
          <div style={card} className="card">Perfil premium</div>
        </div>
      </section>

      {/* PREÇO */}
      <section style={containerLight} className="reveal">
        <h2 style={sectionTitle}>Quanto custa o seguro da RAM?</h2>

        <p style={text}>
          O valor pode variar entre <strong>R$ 5.000 e R$ 15.000 por ano</strong>,
          dependendo do perfil e uso do veículo.
        </p>

        <a href="https://wa.me/5519998722063" target="_blank" style={btn}>
          👉 Descobrir quanto vou pagar
        </a>
      </section>

      {/* CTA FINAL */}
      <section style={cta} className="reveal">
        <h2 style={ctaTitle}>
          Proteja sua RAM com quem entende de alto padrão
        </h2>

        <a
          href="https://wa.me/5519998722063"
          target="_blank"
          style={btn}
        >
          Falar agora
        </a>
      </section>

      {/* CSS */}
      <style>{`
  .reveal {
    opacity: 0;
    transform: translateY(60px);
    transition: all 0.8s ease;
  }

  .reveal.active {
    opacity: 1;
    transform: translateY(0);
  }

  /* HERO ANIMAÇÃO SUAVE */
  .fade {
    opacity: 0;
    transform: translateY(20px);
    animation: fadeUp 0.8s ease forwards;
  }

  .fade1 { animation-delay: 0.2s; }
  .fade2 { animation-delay: 0.5s; }
  .fade3 { animation-delay: 0.8s; }
  .fade4 { animation-delay: 1.1s; }

  @keyframes fadeUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* ===== SEÇÃO CINEMÁTICA ===== */

  .line {
    width: 0;
    height: 3px;
    background: #d4af37;
    margin-bottom: 20px;
    animation: lineGrow 1s ease forwards;
  }

  .titleAnim {
    opacity: 0;
    transform: translateX(-40px);
    animation: slideIn 0.8s ease forwards;
    animation-delay: 0.3s;
    font-size: 36px;
    margin-bottom: 20px;
  }

  .textAnim {
    opacity: 0;
    transform: translateY(20px);
    animation: fadeUp 0.8s ease forwards;
    color: #bbb;
    font-size: 18px;
    margin-bottom: 12px;
  }

  .delay1 { animation-delay: 0.6s; }
  .delay2 { animation-delay: 0.9s; }

  @keyframes slideIn {
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes lineGrow {
    to {
      width: 60px;
    }
  }
`}</style>
    </main>
  );
}


/* ===== ESTILO ===== */

const hero: React.CSSProperties = {
  position: "relative",
  minHeight: "85vh",
  padding: "120px 20px",
  overflow: "hidden",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const heroBackground: React.CSSProperties = {
  position: "absolute",
  inset: 0,
  backgroundImage: "url('/ram.jpg')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  animation: "zoomSlow 20s ease-in-out infinite alternate",
};

const overlay: React.CSSProperties = {
  position: "absolute",
  inset: 0,
  background:
    "linear-gradient(180deg, rgba(0,0,0,0.75), rgba(0,0,0,0.95))",
};

const heroContent: React.CSSProperties = {
  position: "relative",
  textAlign: "center",
  zIndex: 2,
};

const title: React.CSSProperties = {
  fontSize: "56px",
  fontWeight: 700,
  letterSpacing: "1.5px",
  textShadow: "0 10px 30px rgba(0,0,0,0.9)",
};

const subtitle: React.CSSProperties = {
  marginTop: "15px",
  color: "#ccc",
  fontSize: "20px",
};

const social: React.CSSProperties = {
  color: "#aaa",
  fontSize: "16px",
  textAlign: "center",
};

const containerDark: React.CSSProperties = {
  maxWidth: "1000px",
  margin: "0 auto",
  padding: "100px 20px",
};

const containerLight: React.CSSProperties = {
  maxWidth: "1000px",
  margin: "0 auto",
  padding: "100px 20px",
  background: "#0f0f0f",
  borderRadius: "20px",
};

const sectionTitle: React.CSSProperties = {
  fontSize: "32px",
  marginBottom: "20px",
};

const text: React.CSSProperties = {
  color: "#bbb",
  marginBottom: "12px",
  fontSize: "17px",
};

const grid: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "25px",
};

const card: React.CSSProperties = {
  padding: "30px",
  background: "#111",
  borderRadius: "14px",
  border: "1px solid #222",
  transition: "0.3s",
};

const btn: React.CSSProperties = {
  display: "inline-block",
  marginTop: "30px",
  background: "#d4af37",
  color: "#000",
  padding: "18px 32px",
  borderRadius: "12px",
  fontWeight: "bold",
  textDecoration: "none",
  transition: "0.3s",
  boxShadow: "0 10px 30px rgba(212,175,55,0.4)",
};

const cta: React.CSSProperties = {
  textAlign: "center",
  padding: "120px 20px",
};

const ctaTitle: React.CSSProperties = {
  fontSize: "34px",
};

const btnMain: React.CSSProperties = {
  display: "inline-block",
  marginTop: "30px",
  background: "#d4af37",
  color: "#000",
  padding: "20px 40px",
  borderRadius: "12px",
  fontWeight: "bold",
  fontSize: "18px",
  textDecoration: "none",
  transition: "0.3s",
  boxShadow: "0 15px 40px rgba(212,175,55,0.5)",
};

const socialHero: React.CSSProperties = {
  color: "#aaa",
  fontSize: "15px",
  marginTop: "25px",
  lineHeight: "1.6",
  textAlign: "center",
};

const sectionWrap: React.CSSProperties = {
  padding: "80px 20px",
};

const sectionContent: React.CSSProperties = {
  maxWidth: "700px",
  margin: "0 auto",
};

const goldLine: React.CSSProperties = {
  width: "60px",
  height: "3px",
  background: "#d4af37",
  marginBottom: "20px",
};