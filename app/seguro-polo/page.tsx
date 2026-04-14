import SchemaAuto from "@/components/SchemaAuto";
export const metadata = {
  title: "Seguro Polo em Limeira | Cotação rápida e até 30% mais barato",
  description:
    "Seguro para Volkswagen Polo com cotação rápida em Limeira. Compare seguradoras e economize até 30%.",
};

export default function Page() {
  return (
    <main style={{ background: "#f5f7fa" }}>

        <SchemaAuto carName="Polo" />

      {/* HERO */}
      <section style={container}>
        <h1>Seguro para Polo em Limeira</h1>

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
          Se você tem um Volkswagen Polo, proteger seu carro com um seguro completo
          é essencial para evitar prejuízos com colisões, roubo e danos a terceiros.
        </p>

        <p>
          Mesmo sendo um carro mais acessível que SUVs, o custo de reparo pode ser alto,
          tornando o seguro uma decisão inteligente.
        </p>

        <a href="https://wa.me/5519998722063" target="_blank" style={btnBig}>
          🚀 Fazer cotação do meu Polo agora
        </a>

        <div style={box}>
          <p style={{ fontWeight: "bold" }}>📲 Cotação rápida no WhatsApp</p>
          <ul>
            <li>✔️ Atendimento imediato</li>
            <li>✔️ Sem compromisso</li>
            <li>✔️ Melhor preço garantido</li>
            <li>✔️ Especialista em Polo</li>
          </ul>
        </div>

        <p style={urgency}>
          ⚠️ Condições especiais disponíveis este mês
        </p>
      </section>

      {/* SOBRE */}
      <section style={container}>
        <h2>Por que fazer seguro para Polo?</h2>

        <p>
Muita gente também quer saber os valores antes de contratar. Por isso, vale conferir
uma análise completa sobre{" "}
<a href="/seguro-polo-quanto-custa">preço do seguro do Polo</a>.
</p>

<p>
Se o seu objetivo for reduzir o custo, veja algumas estratégias no conteúdo sobre{" "}
<a href="/seguro-polo-barato">formas de pagar menos no seguro do Polo</a>.
</p>

<p>
Para quem acabou de tirar carteira, explicamos melhor como funciona o{" "}
<a href="/seguro-polo-motorista-novo">seguro para motoristas iniciantes</a>.
</p>
      </section>

      {/* PREÇO */}
      <section style={container}>
        <h2>Quanto custa o seguro do Polo?</h2>

        <p>
          O valor pode variar entre 
          <strong> R$ 1.500 e R$ 3.500 por ano</strong>.
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
          Cada detalhe pode alterar significativamente o valor final.
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
        <h2>Como economizar no seguro do Polo?</h2>

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
  <li><a href="/seguro-polo-quanto-custa">Média de preços do seguro Polo</a></li>
  <li><a href="/seguro-polo-barato">Dicas para pagar menos</a></li>
  <li><a href="/seguro-polo-motorista-novo">Seguro para iniciantes</a></li>
  <li><a href="/seguro-polo-vale-a-pena">Quando compensa fazer seguro?</a></li>
</ul>
      </section>

      {/* FINAL */}
      <section style={container}>
        <h2>Faça sua cotação agora</h2>

        <p style={{ fontWeight: "bold", fontSize: "18px" }}>
          Descubra quanto você vai pagar no seguro do seu Polo.
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