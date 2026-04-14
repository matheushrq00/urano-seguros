import SchemaAuto from "@/components/SchemaAuto";
export const metadata = {
  title: "Seguro Argo em Limeira | Cotação rápida e até 30% mais barato",
  description:
    "Seguro para Fiat Argo com cotação rápida em Limeira. Compare seguradoras e economize até 30%.",
};

export default function Page() {
  return (
    <main style={{ background: "#f5f7fa" }}>

        <SchemaAuto carName="Fiat Argo" />

      {/* HERO */}
      <section style={container}>
        <h1>Seguro para Argo em Limeira</h1>

        <p style={highlight}>
          ✔️ Cotação rápida e personalizada <br />
          ✔️ Compare seguradoras <br />
          ✔️ Economize até 30%
        </p>

        <p style={social}>
          ⭐ Mais de 2.400 clientes atendidos <br />
          ⭐ Avaliação 4.9 no Google
        </p>

        <p>
          Se você tem um Fiat Argo, proteger seu carro com um seguro completo
          é essencial para evitar prejuízos com colisões, roubo e danos a terceiros.
        </p>

        <p>
          Mesmo sendo um carro popular, o custo de reparo e riscos do dia a dia
          tornam o seguro uma decisão inteligente.
        </p>

        <a href="https://wa.me/5519998722063" target="_blank" style={btnBig}>
          🚀 Fazer cotação do meu Argo agora
        </a>

        <div style={box}>
          <p style={{ fontWeight: "bold" }}>📲 Cotação rápida no WhatsApp</p>
          <ul>
            <li>✔️ Atendimento imediato</li>
            <li>✔️ Sem compromisso</li>
            <li>✔️ Melhor preço garantido</li>
            <li>✔️ Especialista em Argo</li>
          </ul>
        </div>

        <p style={urgency}>
          ⚠️ Condições especiais disponíveis este mês
        </p>
      </section>

      {/* SOBRE */}
      <section style={container}>
        <h2>Por que fazer seguro para Argo?</h2>

        <p>
Se você quer entender melhor os valores, veja também nosso conteúdo completo sobre{" "}
<a href="/seguro-argo-quanto-custa">quanto custa o seguro do Argo</a>.
</p>

<p>
Também mostramos estratégias para economizar no artigo sobre{" "}
<a href="/seguro-argo-barato">seguro Argo barato</a>.
</p>

<p>
Se você é motorista iniciante, confira como funciona o{" "}
<a href="/seguro-argo-motorista-novo">seguro para motorista novo</a>.
</p>
      </section>

      {/* PREÇO */}
      <section style={container}>
        <h2>Quanto custa o seguro do Argo?</h2>

        <p>
          O valor pode variar entre 
          <strong> R$ 1.400 e R$ 3.200 por ano</strong>.
        </p>

        <p>
          Esse valor depende do perfil do motorista e da região.
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
          <div style={card}>Tempo de habilitação</div>
          <div style={card}>Região</div>
          <div style={card}>Uso do veículo</div>
        </div>

        <p>
          Cada detalhe pode alterar bastante o valor final do seguro.
        </p>
      </section>

      {/* COBERTURA */}
      <section style={container}>
        <h2>O que o seguro cobre?</h2>

        <div style={grid}>
          <div style={card}>🚗 Roubo e furto</div>
          <div style={card}>💥 Colisão</div>
          <div style={card}>👥 Danos a terceiros</div>
          <div style={card}>🛠️ Assistência 24h</div>
        </div>
      </section>

      {/* ECONOMIA */}
      <section style={container}>
        <h2>Como economizar no seguro do Argo?</h2>

        <div style={grid}>
          <div style={card}>Comparar seguradoras</div>
          <div style={card}>Ajustar cobertura</div>
          <div style={card}>Escolher franquia</div>
          <div style={card}>Análise personalizada</div>
        </div>

        <p>
          Com a estratégia certa, é possível economizar bastante.
        </p>
      </section>

      {/* INTERLINK */}
      <section style={container}>
        <h3>Veja também:</h3>

        <ul>
          <h3>Veja também:</h3>

<ul>
  <li><a href="/seguro-argo-quanto-custa">Veja quanto custa o seguro do Argo</a></li>
  <li><a href="/seguro-argo-barato">Como pagar mais barato no seguro do Argo</a></li>
  <li><a href="/seguro-argo-motorista-novo">Seguro Argo para motorista novo</a></li>
  <li><a href="/seguro-argo-vale-a-pena">Vale a pena fazer seguro do Argo?</a></li>
</ul>
        </ul>
      </section>

      {/* FINAL */}
      <section style={container}>
        <h2>Faça sua cotação agora</h2>

        <p style={{ fontWeight: "bold", fontSize: "18px" }}>
          Descubra quanto você vai pagar no seguro do seu Argo.
        </p>

        <a href="https://wa.me/5519998722063" target="_blank" style={btnBig}>
          👉 Falar com especialista
        </a>
      </section>

    </main>
  );
}

/* ===== ESTILOS ===== */

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

const urgency = {
  color: "red",
  fontWeight: "bold",
  marginTop: "15px",
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