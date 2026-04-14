export const metadata = {
  title: "Seguro cobre terceiros? Entenda como funciona em 2026",
  description:
    "Descubra se o seguro auto cobre danos a terceiros, quando a seguradora paga e como funciona essa cobertura.",
};

export default function Page() {
  return (
    <main style={{ background: "#f5f7fa" }}>

      {/* HERO */}
      <section style={container}>
        <h1>Seguro cobre terceiros?</h1>

        <p style={highlight}>
          ✔️ Entenda quando o seguro paga <br />
          ✔️ Veja o que está incluído <br />
          ✔️ Evite prejuízos altos
        </p>

        <p>
          Uma das dúvidas mais importantes ao contratar um seguro auto é saber se ele cobre terceiros.
        </p>

        <p>
          A resposta é: sim, o seguro pode cobrir terceiros, desde que essa cobertura
          esteja incluída na apólice.
        </p>

        <a href="https://wa.me/5519998722063" target="_blank" style={btn}>
          🚀 Fazer cotação agora
        </a>
      </section>

      {/* EXPLICAÇÃO */}
      <section style={container}>
        <h2>O que significa cobertura para terceiros?</h2>

        <p>
          A cobertura para terceiros, também chamada de responsabilidade civil,
          protege você contra danos causados a outras pessoas ou veículos.
        </p>

        <p>
          Isso inclui:
        </p>

        <ul>
          <li>Danos a outros veículos</li>
          <li>Danos materiais (muros, postes, etc)</li>
          <li>Danos corporais (pessoas envolvidas)</li>
        </ul>

        <p>
          Essa cobertura é essencial para evitar prejuízos financeiros elevados.
        </p>
      </section>

      {/* EXEMPLO */}
      <section style={container}>
        <h2>Exemplo prático</h2>

        <p>
          Imagine que você se envolve em um acidente e bate em outro carro de alto valor.
        </p>

        <p>
          O custo do conserto pode chegar a dezenas de milhares de reais.
        </p>

        <p>
          Com cobertura para terceiros, a seguradora paga esses danos.
        </p>
      </section>

      {/* LIMITE */}
      <section style={container}>
        <h2>Existe limite de cobertura?</h2>

        <p>
          Sim. A cobertura para terceiros possui um limite definido na apólice.
        </p>

        <p>
          Por exemplo:
        </p>

        <ul>
          <li>R$ 50.000</li>
          <li>R$ 100.000</li>
          <li>R$ 200.000 ou mais</li>
        </ul>

        <p>
          Quanto maior o limite, maior a proteção.
        </p>
      </section>

      {/* IMPORTÂNCIA */}
      <section style={container}>
        <h2>Vale a pena contratar cobertura para terceiros?</h2>

        <p>
          Sim, e em muitos casos é uma das coberturas mais importantes do seguro.
        </p>

        <p>
          Um acidente pode gerar prejuízos muito altos, principalmente se envolver
          veículos caros ou danos a pessoas.
        </p>
      </section>

      {/* QUANDO NAO COBRE */}
      <section style={container}>
        <h2>Quando o seguro não cobre terceiros?</h2>

        <p>
          Algumas situações podem impedir a cobertura:
        </p>

        <ul>
          <li>Uso indevido do veículo</li>
          <li>Motorista não autorizado</li>
          <li>Fraude</li>
        </ul>

        <p>
          Por isso, é importante entender bem as condições do contrato.
        </p>
      </section>

      {/* ECONOMIA */}
      <section style={container}>
        <h2>Como escolher o melhor seguro com essa cobertura?</h2>

        <div style={grid}>
          <div style={card}>Comparar seguradoras</div>
          <div style={card}>Escolher limite ideal</div>
          <div style={card}>Analisar coberturas</div>
          <div style={card}>Cotação personalizada</div>
        </div>

        <p>
          Nós ajudamos você a encontrar a melhor opção.
        </p>
      </section>

      {/* CONCLUSÃO */}
      <section style={container}>
        <h2>Conclusão</h2>

        <p>
          O seguro auto cobre terceiros sim, desde que essa cobertura esteja incluída.
        </p>

        <p>
          Essa é uma das proteções mais importantes para evitar prejuízos elevados.
        </p>
      </section>

      {/* INTERLINK */}
      <section style={container}>
        <h3>Veja também:</h3>

        <ul>
          <li><a href="/seguro-cobre-batida">Seguro cobre batida</a></li>
          <li><a href="/seguro-cobre-perda-total">Seguro cobre perda total</a></li>
          <li><a href="/cotacao-seguro-auto">Cotação de seguro auto</a></li>
        </ul>
      </section>

      {/* CTA FINAL */}
      <section style={container}>
        <h2>Faça sua cotação agora</h2>

        <p style={{ fontWeight: "bold" }}>
          Proteja seu carro e evite prejuízos com terceiros.
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