import SchemaAuto from "@/components/SchemaAuto";
export const metadata = {
  title: "Seguro Onix para motorista novo é caro? Veja como pagar menos",
  description:
    "Descubra quanto custa o seguro do Onix para motorista novo e como economizar até 30%. Faça sua cotação rápida pelo WhatsApp.",
};

export default function Page() {
  return (
    <main style={{ background: "#f5f7fa" }}>

        <SchemaAuto carName="Onix" />

      {/* HERO */}
      <section style={container}>
        <h1>Seguro do Onix para motorista novo é caro?</h1>

        <p style={highlight}>
          ✔️ Veja valores reais para motorista novo <br />
          ✔️ Entenda por que o preço é mais alto <br />
          ✔️ Descubra como economizar até 30%
        </p>

        <p style={social}>
          ⭐ Mais de 2.400 clientes atendidos <br />
          ⭐ Avaliação 4.9 no Google
        </p>

        <p>
          Se você é motorista novo e tem um Onix, provavelmente já percebeu que o seguro pode ser mais caro.
          Mas existem formas de pagar menos — e aqui você vai descobrir como.
        </p>

        <a href="https://wa.me/5519998722063" target="_blank" style={btnBig}>
          🚀 Ver valor do meu seguro agora
        </a>

        {/* BLOCO CONVERSÃO */}
        <div style={box}>
          <p style={{ fontWeight: "bold" }}>📲 Cotação rápida no WhatsApp</p>
          <ul>
            <li>✔️ Atendimento imediato</li>
            <li>✔️ Sem compromisso</li>
            <li>✔️ Melhor preço garantido</li>
            <li>✔️ Especialista em motorista novo</li>
          </ul>
        </div>

        <p style={urgency}>
          ⚠️ Condições especiais disponíveis esse mês
        </p>
      </section>

      {/* EXPLICAÇÃO */}
      <section style={container}>
        <h2>Por que o seguro é mais caro para motorista novo?</h2>

        <p>
          Motoristas com pouca experiência representam maior risco para as seguradoras,
          o que impacta diretamente no valor do seguro.
        </p>

        <p>
          Isso não significa que você precisa pagar caro — apenas que precisa fazer a cotação certa.
        </p>
      </section>

      {/* PREÇO */}
      <section style={container}>
        <h2>Quanto custa o seguro do Onix para motorista novo?</h2>

        <p>
          O valor pode variar entre <strong>R$ 2.000 e R$ 5.000 por ano</strong>,
          dependendo do perfil, idade e uso do veículo.
        </p>

        <p>
          Mas com a estratégia certa, é possível reduzir bastante esse valor.
        </p>

        <a href="https://wa.me/5519998722063" target="_blank" style={btn}>
          👉 Descobrir quanto vou pagar agora
        </a>
      </section>

      {/* CTA INTERMEDIÁRIO */}
      <section style={container}>
        <h2>Quer pagar menos sendo motorista novo?</h2>

        <p style={{ fontWeight: "bold" }}>
          Faça uma cotação rápida e veja quanto pode economizar.
        </p>

        <a href="https://wa.me/5519998722063" target="_blank" style={btnBig}>
          👉 Fazer cotação grátis agora
        </a>
      </section>

      {/* DICAS */}
      <section style={container}>
        <h2>Como pagar mais barato no seguro sendo motorista novo?</h2>

        <div style={grid}>
          <div style={card}>Comparar seguradoras</div>
          <div style={card}>Escolher cobertura ideal</div>
          <div style={card}>Ajustar franquia</div>
          <div style={card}>Evitar riscos elevados</div>
        </div>

        <p>
          Pequenas decisões podem reduzir muito o valor final do seguro.
        </p>
      </section>

      {/* COBERTURA */}
      <section style={container}>
        <h2>O que o seguro do Onix cobre?</h2>

        <div style={grid}>
          <div style={card}>🚗 Colisão</div>
          <div style={card}>🔒 Roubo e furto</div>
          <div style={card}>👥 Danos a terceiros</div>
          <div style={card}>🛠️ Assistência 24h</div>
        </div>
      </section>

      {/* BENEFÍCIO */}
      <section style={container}>
        <h2>Vale a pena fazer seguro sendo motorista novo?</h2>

        <p>
          Sim. Justamente por ter mais risco, o seguro é ainda mais importante.
        </p>

        <p>
          Um pequeno acidente pode gerar um prejuízo alto — e o seguro evita isso.
        </p>
      </section>

      {/* INTERLINK */}
      <section style={container}>
        <h3>Veja também:</h3>

        <ul>
          <li><a href="/seguro-onix-quanto-custa">Quanto custa o seguro do Onix</a></li>
          <li><a href="/seguro-onix-barato">Seguro Onix barato</a></li>
          <li><a href="/seguro-onix-vale-a-pena">Vale a pena fazer seguro</a></li>
        </ul>
      </section>

      {/* FINAL */}
      <section style={container}>
        <h2 style={{ color: "red" }}>⚠️ Últimas condições com desconto</h2>

        <p style={{ fontWeight: "bold", fontSize: "18px" }}>
          Descubra agora quanto você vai pagar no seu seguro.
        </p>

        <a href="https://wa.me/5519998722063" target="_blank" style={btnBig}>
          👉 Falar com especialista agora
        </a>
      </section>

    </main>
  );
}

/* STYLES */

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