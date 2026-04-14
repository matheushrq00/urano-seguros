export const metadata = {
  title: "Quanto custa o seguro do Creta em Limeira? Veja preços e economize até 30%",
  description:
    "Descubra quanto custa o seguro do Hyundai Creta em Limeira. Veja valores reais, compare seguradoras e faça sua cotação rápida.",
};

export default function Page() {
  return (
    <main style={{ background: "#f5f7fa" }}>

      {/* HERO */}
      <section style={container}>
        <h1>Quanto custa o seguro do Creta em Limeira?</h1>

        <p style={highlight}>
          ✔️ Veja valores reais atualizados <br />
          ✔️ Descubra quanto você vai pagar <br />
          ✔️ Economize até 30% no seguro
        </p>

        <p style={social}>
          ⭐ Mais de 2.400 clientes atendidos <br />
          ⭐ Avaliação 4.9 no Google
        </p>

        <p>
          Se você tem um Hyundai Creta, aqui você descobre quanto custa o seguro
          e como pagar mais barato com uma cotação personalizada.
        </p>

        <a href="https://wa.me/5519998722063" target="_blank" style={btnBig}>
          🚀 Ver valor do meu Creta agora
        </a>

        {/* BLOCO CONVERSÃO */}
        <div style={box}>
          <p style={{ fontWeight: "bold" }}>📲 Cotação rápida no WhatsApp</p>
          <ul>
            <li>✔️ Atendimento imediato</li>
            <li>✔️ Sem compromisso</li>
            <li>✔️ Melhor preço garantido</li>
            <li>✔️ Especialista em seguro de Creta</li>
          </ul>
        </div>

        <p style={urgency}>
          ⚠️ Condições especiais disponíveis esse mês
        </p>
      </section>

      {/* PREÇO */}
      <section style={container}>
        <h2>Qual o valor do seguro do Creta?</h2>

        <p>
          O seguro do Creta em Limeira pode variar entre 
          <strong> R$ 2.000 e R$ 4.800 por ano</strong>.
        </p>

        <p>
          O valor depende do perfil do motorista, versão do carro e uso diário.
        </p>

        <a href="https://wa.me/5519998722063" target="_blank" style={btn}>
          👉 Descobrir quanto vou pagar agora
        </a>
      </section>

      {/* CTA INTERMEDIÁRIO */}
      <section style={container}>
        <h2>Quer saber o valor exato no seu caso?</h2>

        <p style={{ fontWeight: "bold" }}>
          Faça uma cotação rápida e veja quanto pode economizar.
        </p>

        <a href="https://wa.me/5519998722063" target="_blank" style={btnBig}>
          👉 Fazer cotação grátis
        </a>
      </section>

      {/* FATORES */}
      <section style={container}>
        <h2>O que influencia o preço do seguro do Creta?</h2>

        <div style={grid}>
          <div style={card}>Idade do motorista</div>
          <div style={card}>Ano e versão do Creta</div>
          <div style={card}>Região (Limeira)</div>
          <div style={card}>Uso (Uber ou pessoal)</div>
        </div>

        <p>
          Cada detalhe influencia diretamente no valor final.
        </p>
      </section>

      {/* COBERTURA */}
      <section style={container}>
        <h2>O que o seguro do Creta cobre?</h2>

        <div style={grid}>
          <div style={card}>🚗 Roubo e furto</div>
          <div style={card}>💥 Colisão</div>
          <div style={card}>👥 Danos a terceiros</div>
          <div style={card}>🛠️ Assistência 24h</div>
        </div>
      </section>

      {/* ECONOMIA */}
      <section style={container}>
        <h2>Como pagar mais barato no seguro do Creta?</h2>

        <div style={grid}>
          <div style={card}>Comparar seguradoras</div>
          <div style={card}>Ajustar cobertura</div>
          <div style={card}>Escolher franquia ideal</div>
          <div style={card}>Cotação personalizada</div>
        </div>

        <p>
          Nós fazemos essa análise para você e encontramos o melhor preço.
        </p>
      </section>

      {/* BENEFÍCIO */}
      <section style={container}>
        <h2>Vale a pena fazer seguro para Creta?</h2>

        <p>
          Sim. O Creta possui alto valor de mercado e custo elevado de reparo,
          tornando o seguro essencial.
        </p>
      </section>

      {/* INTERLINK */}
      <section style={container}>
        <h3>Veja também:</h3>

        <ul>
          <li><a href="/seguro-creta">Seguro Creta</a></li>
          <li><a href="/seguro-creta-barato">Seguro Creta barato</a></li>
          <li><a href="/cotacao-seguro-auto">Cotação de seguro auto</a></li>
        </ul>
      </section>

      {/* FINAL */}
      <section style={container}>
        <h2 style={{ color: "red" }}>⚠️ Últimas condições com desconto</h2>

        <p style={{ fontWeight: "bold", fontSize: "18px" }}>
          Descubra agora quanto você vai pagar no seguro do seu Creta.
        </p>

        <a href="https://wa.me/5519998722063" target="_blank" style={btnBig}>
          👉 Falar com especialista agora
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