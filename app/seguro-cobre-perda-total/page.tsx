export const metadata = {
  title: "Seguro cobre perda total? Entenda como funciona em 2026",
  description:
    "Descubra se o seguro auto cobre perda total, como funciona a indenização e quando você recebe o valor do carro.",
};

export default function Page() {
  return (
    <main style={{ background: "#f5f7fa" }}>

      {/* HERO */}
      <section style={container}>
        <h1>Seguro cobre perda total?</h1>

        <p style={highlight}>
          ✔️ Entenda como funciona a cobertura <br />
          ✔️ Veja quando o seguro paga <br />
          ✔️ Tire todas suas dúvidas
        </p>

        <p>
          Uma das maiores dúvidas de quem está pensando em contratar um seguro auto
          é saber se ele cobre perda total.
        </p>

        <p>
          A resposta é: sim, o seguro cobre perda total, desde que essa cobertura
          esteja incluída na apólice.
        </p>

        <a href="https://wa.me/5519998722063" target="_blank" style={btn}>
          🚀 Fazer cotação agora
        </a>
      </section>

      {/* EXPLICAÇÃO */}
      <section style={container}>
        <h2>O que é considerado perda total?</h2>

        <p>
          A perda total acontece quando o custo para consertar o veículo ultrapassa
          um determinado percentual do valor do carro.
        </p>

        <p>
          Esse percentual geralmente é de <strong>75% do valor do veículo</strong>,
          mas pode variar conforme a seguradora.
        </p>

        <p>
          Também é considerada perda total em casos de roubo ou furto sem recuperação.
        </p>
      </section>

      {/* INDENIZAÇÃO */}
      <section style={container}>
        <h2>O seguro paga o valor total do carro?</h2>

        <p>
          Em caso de perda total, a seguradora paga uma indenização baseada no valor
          do veículo, geralmente seguindo a tabela FIPE.
        </p>

        <p>
          Dependendo do plano, o pagamento pode ser:
        </p>

        <ul>
          <li>100% da tabela FIPE</li>
          <li>Valor superior (ex: 110%)</li>
          <li>Valor acordado em contrato</li>
        </ul>
      </section>

      {/* COBERTURA */}
      <section style={container}>
        <h2>Todos os seguros cobrem perda total?</h2>

        <p>
          Nem todos. Para ter cobertura de perda total, é necessário contratar
          um seguro com cobertura compreensiva (completa).
        </p>

        <p>
          Seguros mais básicos podem não incluir essa proteção.
        </p>
      </section>

      {/* IMPORTÂNCIA */}
      <section style={container}>
        <h2>Vale a pena ter cobertura de perda total?</h2>

        <p>
          Sim, principalmente para quem tem um carro de valor mais alto ou depende
          do veículo no dia a dia.
        </p>

        <p>
          Sem essa cobertura, um acidente grave pode gerar prejuízos enormes.
        </p>
      </section>

      {/* ECONOMIA */}
      <section style={container}>
        <h2>Como contratar um seguro com boa cobertura?</h2>

        <div style={grid}>
          <div style={card}>Comparar seguradoras</div>
          <div style={card}>Analisar coberturas</div>
          <div style={card}>Ajustar valores</div>
          <div style={card}>Fazer cotação personalizada</div>
        </div>

        <p>
          Com a orientação correta, você encontra o melhor plano.
        </p>
      </section>

      {/* CONCLUSÃO */}
      <section style={container}>
        <h2>Conclusão</h2>

        <p>
          O seguro auto cobre perda total sim, desde que a cobertura esteja incluída.
        </p>

        <p>
          A melhor forma de garantir isso é fazendo uma cotação completa.
        </p>
      </section>

      {/* INTERLINK */}
      <section style={container}>
        <h3>Veja também:</h3>

        <ul>
          <li><a href="/quanto-custa-seguro-auto">Quanto custa o seguro auto</a></li>
          <li><a href="/seguro-auto-vale-a-pena">Seguro vale a pena</a></li>
          <li><a href="/melhor-seguro-auto">Melhor seguro auto</a></li>
        </ul>
      </section>

      {/* CTA FINAL */}
      <section style={container}>
        <h2>Faça sua cotação agora</h2>

        <p style={{ fontWeight: "bold" }}>
          Descubra quanto custa proteger seu carro com cobertura completa.
        </p>

        <a href="https://wa.me/5519998722063" target="_blank" style={btn}>
          👉 Falar com especialista
        </a>
      </section>

    </main>
  );
}

const container = {
  maxWidth: "1100px",
  margin: "0 auto",
  padding: "40px 20px",
};

const highlight = {
  fontWeight: "bold",
  fontSize: "18px",
};

const btn = {
  display: "inline-block",
  background: "#25D366",
  color: "#fff",
  padding: "16px 26px",
  borderRadius: "10px",
  fontWeight: "bold",
  marginTop: "20px",
  textDecoration: "none",
};

const grid = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "15px",
};

const card = {
  padding: "15px",
  background: "#fff",
  border: "1px solid #ddd",
  borderRadius: "10px",
};