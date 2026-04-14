import SchemaAuto from "@/components/SchemaAuto";
export const metadata = {
  title: "Seguro T-Cross em Limeira | Cotação rápida e até 30% mais barato",
  description:
    "Seguro para Volkswagen T-Cross com cotação rápida em Limeira. Compare seguradoras e economize até 30%.",
};

export default function Page() {
  return (
    <main style={{ background: "#f5f7fa" }}>

        <SchemaAuto carName="T-Cross" />

      {/* HERO */}
      <section style={container}>
        <h1>Seguro para T-Cross em Limeira</h1>

        <p style={highlight}>
          ✔️ Cotação rápida e personalizada <br />
          ✔️ Melhores seguradoras do Brasil <br />
          ✔️ Economia de até 30%
        </p>

        <p style={social}>
          ⭐ Mais de 2.400 clientes atendidos <br />
          ⭐ Avaliação 4.9 no Google
        </p>

        <p>
          Se você tem um Volkswagen T-Cross, proteger seu carro com um seguro completo
          é essencial para evitar prejuízos com roubo, colisões e danos a terceiros.
        </p>

        <a href="https://wa.me/5519998722063" target="_blank" style={btnBig}>
          🚀 Fazer cotação do meu T-Cross agora
        </a>

        {/* BLOCO CONVERSÃO */}
        <div style={box}>
          <p style={{ fontWeight: "bold" }}>📲 Cotação rápida no WhatsApp</p>
          <ul>
            <li>✔️ Atendimento imediato</li>
            <li>✔️ Sem compromisso</li>
            <li>✔️ Melhor preço garantido</li>
            <li>✔️ Especialista em seguro de T-Cross</li>
          </ul>
        </div>

        <p style={urgency}>
          ⚠️ Condições especiais disponíveis esse mês
        </p>
      </section>

      {/* SOBRE */}
      <section style={container}>
        <h2>Por que fazer seguro para T-Cross?</h2>

        <p>
          O T-Cross é um dos SUVs mais vendidos do Brasil, com alto valor de mercado
          e custo de reparo elevado em caso de colisões.
        </p>

        <p>
          Além disso, é um modelo visado, o que torna o seguro essencial.
        </p>
      </section>

      {/* PREÇO */}
      <section style={container}>
        <h2>Quanto custa o seguro do T-Cross?</h2>

        <p>
          O valor pode variar entre 
          <strong> R$ 2.000 e R$ 4.500 por ano</strong>, dependendo do perfil do motorista.
        </p>

        <a href="https://wa.me/5519998722063" target="_blank" style={btn}>
          👉 Descobrir valor exato agora
        </a>
      </section>

      {/* FATORES */}
      <section style={container}>
        <h2>O que influencia o preço?</h2>

        <div style={grid}>
          <div style={card}>Idade do motorista</div>
          <div style={card}>Perfil de uso</div>
          <div style={card}>Região (Limeira)</div>
          <div style={card}>Versão do T-Cross</div>
        </div>
      </section>

      {/* COBERTURA */}
      <section style={container}>
        <h2>O que o seguro do T-Cross cobre?</h2>

        <div style={grid}>
          <div style={card}>🚗 Roubo e furto</div>
          <div style={card}>💥 Colisão</div>
          <div style={card}>👥 Danos a terceiros</div>
          <div style={card}>🛠️ Assistência 24h</div>
        </div>
      </section>

      {/* ECONOMIA */}
      <section style={container}>
        <h2>Como economizar no seguro do T-Cross?</h2>

        <div style={grid}>
          <div style={card}>Comparar seguradoras</div>
          <div style={card}>Ajustar cobertura</div>
          <div style={card}>Escolher franquia ideal</div>
          <div style={card}>Análise personalizada</div>
        </div>

        <p>
          Nós encontramos o melhor custo-benefício para você.
        </p>
      </section>

      {/* INTERLINK */}
      <section style={container}>
        <h3>Veja também:</h3>

        <ul>
          <li><a href="/seguro-tcross-quanto-custa">Quanto custa seguro T-Cross</a></li>
          <li><a href="/seguro-tcross-barato">Seguro T-Cross barato</a></li>
          <li><a href="/seguro-tcross-motorista-novo">Seguro T-Cross motorista novo</a></li>
        </ul>
      </section>

      {/* FINAL */}
      <section style={container}>
        <h2>Faça sua cotação agora</h2>

        <p style={{ fontWeight: "bold", fontSize: "18px" }}>
          Descubra quanto você vai pagar no seguro do seu T-Cross.
        </p>

        <a href="https://wa.me/5519998722063" target="_blank" style={btnBig}>
          👉 Falar com especialista
        </a>
      </section>

    </main>
  );
}

/* estilos */

const container = {
  maxWidth: "1100px",
  margin: "0 auto",
  padding: "40px 20px",
};

const highlight = {
  fontWeight: "bold",
  fontSize: "18px",
};

const social = {
  fontWeight: "bold",
  marginTop: "10px",
};

const btn = {
  display: "inline-block",
  background: "#25D366",
  color: "#fff",
  padding: "14px 22px",
  borderRadius: "8px",
  fontWeight: "bold",
  marginTop: "15px",
  textDecoration: "none",
};

const btnBig = {
  display: "inline-block",
  background: "#25D366",
  color: "#fff",
  padding: "18px 28px",
  borderRadius: "10px",
  fontWeight: "bold",
  marginTop: "20px",
  fontSize: "18px",
  textDecoration: "none",
};

const box = {
  background: "#fff",
  padding: "20px",
  borderRadius: "10px",
  marginTop: "20px",
  border: "1px solid #ddd",
};

const urgency = {
  color: "red",
  fontWeight: "bold",
  marginTop: "15px",
};

const grid = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "15px",
  marginTop: "20px",
};

const card = {
  padding: "15px",
  border: "1px solid #ddd",
  borderRadius: "10px",
  background: "#fff",
};