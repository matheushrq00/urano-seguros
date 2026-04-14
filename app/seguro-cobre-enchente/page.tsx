export const metadata = {
  title: "Seguro cobre enchente? Entenda como funciona em 2026",
  description:
    "Descubra se o seguro auto cobre enchente, quando há indenização e como se proteger contra prejuízos.",
};

export default function Page() {
  return (
    <main style={{ background: "#f5f7fa" }}>

      {/* HERO */}
      <section style={container}>
        <h1>Seguro cobre enchente?</h1>

        <p style={highlight}>
          ✔️ Veja quando o seguro paga <br />
          ✔️ Entenda as coberturas <br />
          ✔️ Evite prejuízos com seu carro
        </p>

        <p>
          Com o aumento das chuvas e alagamentos, muitas pessoas se perguntam se o
          seguro auto cobre enchente.
        </p>

        <p>
          A resposta é: sim, o seguro pode cobrir enchente, desde que você tenha
          contratado a cobertura adequada.
        </p>

        <a href="https://wa.me/5519998722063" target="_blank" style={btn}>
          🚀 Fazer cotação agora
        </a>
      </section>

      {/* EXPLICAÇÃO */}
      <section style={container}>
        <h2>Quando o seguro cobre enchente?</h2>

        <p>
          O seguro auto cobre enchente quando a apólice inclui cobertura compreensiva,
          que protege contra eventos da natureza.
        </p>

        <p>
          Isso inclui:
        </p>

        <ul>
          <li>Alagamentos</li>
          <li>Enchentes</li>
          <li>Tempestades</li>
          <li>Queda de árvores</li>
        </ul>

        <p>
          Sem essa cobertura, o prejuízo pode ser totalmente do proprietário.
        </p>
      </section>

      {/* RISCO */}
      <section style={container}>
        <h2>O que acontece se o carro alagar?</h2>

        <p>
          Quando um carro sofre alagamento, os danos podem ser graves, afetando
          motor, parte elétrica e interior.
        </p>

        <p>
          Em muitos casos, o veículo pode ser considerado perda total.
        </p>
      </section>

      {/* INDENIZAÇÃO */}
      <section style={container}>
        <h2>O seguro paga em caso de enchente?</h2>

        <p>
          Sim, desde que o evento esteja coberto na apólice.
        </p>

        <p>
          A seguradora pode:
        </p>

        <ul>
          <li>Custear o reparo</li>
          <li>Indenizar em caso de perda total</li>
        </ul>
      </section>

      {/* IMPORTÂNCIA */}
      <section style={container}>
        <h2>Vale a pena contratar seguro contra enchente?</h2>

        <p>
          Sim, principalmente em regiões onde há risco de alagamento.
        </p>

        <p>
          Um único evento pode gerar prejuízos de milhares de reais.
        </p>
      </section>

      {/* ECONOMIA */}
      <section style={container}>
        <h2>Como garantir essa cobertura?</h2>

        <div style={grid}>
          <div style={card}>Escolher cobertura completa</div>
          <div style={card}>Comparar seguradoras</div>
          <div style={card}>Analisar cláusulas</div>
          <div style={card}>Fazer cotação personalizada</div>
        </div>

        <p>
          Nós ajudamos você a encontrar a melhor opção.
        </p>
      </section>

      {/* CONCLUSÃO */}
      <section style={container}>
        <h2>Conclusão</h2>

        <p>
          O seguro auto cobre enchente sim, desde que a cobertura esteja incluída.
        </p>

        <p>
          A melhor forma de se proteger é fazendo uma cotação completa.
        </p>
      </section>

      {/* INTERLINK */}
      <section style={container}>
        <h3>Veja também:</h3>

        <ul>
          <li><a href="/seguro-cobre-perda-total">Seguro cobre perda total</a></li>
          <li><a href="/quanto-custa-seguro-auto">Quanto custa o seguro auto</a></li>
          <li><a href="/cotacao-seguro-auto">Cotação de seguro auto</a></li>
        </ul>
      </section>

      {/* CTA FINAL */}
      <section style={container}>
        <h2>Faça sua cotação agora</h2>

        <p style={{ fontWeight: "bold" }}>
          Proteja seu carro contra enchentes e outros imprevistos.
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