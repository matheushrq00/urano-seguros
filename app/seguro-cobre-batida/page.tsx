export const metadata = {
  title: "Seguro cobre batida? Entenda como funciona em 2026",
  description:
    "Descubra se o seguro auto cobre batida, quando a seguradora paga e como funciona a franquia. Tire todas suas dúvidas.",
};

export default function Page() {
  return (
    <main style={{ background: "#f5f7fa" }}>

      {/* HERO */}
      <section style={container}>
        <h1>Seguro cobre batida?</h1>

        <p style={highlight}>
          ✔️ Entenda quando o seguro paga <br />
          ✔️ Veja como funciona a franquia <br />
          ✔️ Tire todas suas dúvidas
        </p>

        <p>
          Uma das dúvidas mais comuns entre motoristas é saber se o seguro auto cobre batida.
        </p>

        <p>
          A resposta é: sim, o seguro cobre batidas, desde que você tenha contratado
          a cobertura adequada na sua apólice.
        </p>

        <a href="https://wa.me/5519998722063" target="_blank" style={btn}>
          🚀 Fazer cotação agora
        </a>
      </section>

      {/* EXPLICAÇÃO */}
      <section style={container}>
        <h2>Quando o seguro cobre batida?</h2>

        <p>
          O seguro cobre batidas quando você possui cobertura contra colisão,
          que geralmente está incluída no seguro completo (compreensivo).
        </p>

        <p>
          Isso vale tanto para acidentes leves quanto para colisões mais graves.
        </p>

        <ul>
          <li>Batida em outro veículo</li>
          <li>Colisão com objeto (poste, muro, etc)</li>
          <li>Acidentes em trânsito</li>
        </ul>
      </section>

      {/* FRANQUIA */}
      <section style={container}>
        <h2>Precisa pagar franquia em caso de batida?</h2>

        <p>
          Na maioria dos casos, sim. A franquia é o valor que você paga para acionar o seguro.
        </p>

        <p>
          O restante do custo do reparo é pago pela seguradora.
        </p>

        <p>
          Por exemplo: se o conserto custa R$ 5.000 e a franquia é R$ 1.500,
          você paga a franquia e a seguradora cobre o restante.
        </p>
      </section>

      {/* TERCEIROS */}
      <section style={container}>
        <h2>O seguro cobre danos a terceiros?</h2>

        <p>
          Sim, desde que você tenha contratado cobertura de responsabilidade civil.
        </p>

        <p>
          Nesse caso, o seguro cobre danos causados a outros veículos, pessoas ou propriedades.
        </p>

        <p>
          Isso é muito importante, pois o custo pode ser alto.
        </p>
      </section>

      {/* QUANDO NAO COBRE */}
      <section style={container}>
        <h2>Quando o seguro não cobre batida?</h2>

        <p>
          Existem algumas situações em que o seguro pode não cobrir:
        </p>

        <ul>
          <li>Motorista sem habilitação</li>
          <li>Uso indevido do veículo</li>
          <li>Fraude ou má-fé</li>
        </ul>

        <p>
          Por isso, é importante entender bem as condições da apólice.
        </p>
      </section>

      {/* IMPORTÂNCIA */}
      <section style={container}>
        <h2>Vale a pena ter seguro para batida?</h2>

        <p>
          Sim. Uma batida pode gerar custos elevados, tanto no seu carro quanto
          no de terceiros.
        </p>

        <p>
          O seguro evita prejuízos financeiros e garante tranquilidade.
        </p>
      </section>

      {/* ECONOMIA */}
      <section style={container}>
        <h2>Como contratar o melhor seguro?</h2>

        <div style={grid}>
          <div style={card}>Comparar seguradoras</div>
          <div style={card}>Ajustar cobertura</div>
          <div style={card}>Escolher franquia ideal</div>
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
          O seguro auto cobre batidas sim, desde que a cobertura esteja incluída.
        </p>

        <p>
          A melhor forma de garantir isso é fazendo uma cotação completa.
        </p>
      </section>

      {/* INTERLINK */}
      <section style={container}>
        <h3>Veja também:</h3>

        <ul>
          <li><a href="/seguro-cobre-perda-total">Seguro cobre perda total</a></li>
          <li><a href="/seguro-cobre-enchente">Seguro cobre enchente</a></li>
          <li><a href="/cotacao-seguro-auto">Cotação de seguro auto</a></li>
        </ul>
      </section>

      {/* CTA FINAL */}
      <section style={container}>
        <h2>Faça sua cotação agora</h2>

        <p style={{ fontWeight: "bold" }}>
          Descubra quanto custa proteger seu carro contra batidas.
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