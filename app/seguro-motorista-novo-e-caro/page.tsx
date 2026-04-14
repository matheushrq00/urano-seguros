export const metadata = {
  title: "Seguro para motorista novo é caro? Veja como economizar",
  description:
    "Descubra por que o seguro para motorista novo é mais caro e veja dicas para economizar na contratação.",
};

export default function Page() {
  return (
    <main style={{ background: "#f5f7fa" }}>

      {/* HERO */}
      <section style={container}>
        <h1>Seguro para motorista novo é caro?</h1>

        <p style={highlight}>
          ✔️ Entenda por que o preço é mais alto <br />
          ✔️ Veja como economizar no seguro <br />
          ✔️ Descubra opções mais baratas
        </p>

        <p>
          Uma dúvida muito comum entre quem acabou de tirar a carteira é saber
          se o seguro auto é caro para motorista novo.
        </p>

        <p>
          A resposta é: sim, geralmente o seguro para motoristas novos tende a ser mais caro.
        </p>

        <p>
          Mas existem formas de reduzir esse custo e encontrar opções acessíveis.
        </p>

        <a href="https://wa.me/5519998722063" target="_blank" style={btn}>
          🚀 Fazer cotação agora
        </a>
      </section>

      {/* EXPLICAÇÃO */}
      <section style={container}>
        <h2>Por que o seguro é mais caro para motorista novo?</h2>

        <p>
          O principal motivo é o risco. Motoristas com pouca experiência têm
          maior probabilidade de se envolver em acidentes.
        </p>

        <p>
          Por isso, as seguradoras consideram esse perfil mais arriscado.
        </p>

        <ul>
          <li>Menos experiência ao volante</li>
          <li>Maior índice de sinistros</li>
          <li>Perfil de risco mais alto</li>
        </ul>
      </section>

      {/* PREÇO */}
      <section style={container}>
        <h2>Quanto custa o seguro para motorista novo?</h2>

        <p>
          O valor pode variar bastante, mas geralmente fica acima da média.
        </p>

        <p>
          Em muitos casos, pode ser entre <strong>R$ 2.000 e R$ 5.000 por ano</strong>,
          dependendo do veículo e da região.
        </p>

        <p>
          Cada perfil é único, por isso a cotação personalizada é essencial.
        </p>
      </section>

      {/* ECONOMIA */}
      <section style={container}>
        <h2>Como pagar mais barato no seguro?</h2>

        <div style={grid}>
          <div style={card}>Escolher carro mais barato</div>
          <div style={card}>Comparar seguradoras</div>
          <div style={card}>Ajustar cobertura</div>
          <div style={card}>Colocar condutor principal adequado</div>
        </div>

        <p>
          Essas estratégias podem reduzir bastante o valor do seguro.
        </p>
      </section>

      {/* DICAS */}
      <section style={container}>
        <h2>Dicas importantes para motorista novo</h2>

        <ul>
          <li>Dirigir com cuidado e evitar multas</li>
          <li>Evitar horários e locais de risco</li>
          <li>Manter o carro em boas condições</li>
        </ul>

        <p>
          Com o tempo, o valor do seguro tende a diminuir.
        </p>
      </section>

      {/* VALE A PENA */}
      <section style={container}>
        <h2>Vale a pena contratar seguro sendo motorista novo?</h2>

        <p>
          Sim. Justamente por ter mais risco, o seguro se torna ainda mais importante.
        </p>

        <p>
          Um único acidente pode gerar prejuízos altos.
        </p>
      </section>

      {/* CONCLUSÃO */}
      <section style={container}>
        <h2>Conclusão</h2>

        <p>
          O seguro para motorista novo pode ser mais caro, mas existem formas
          de economizar.
        </p>

        <p>
          A melhor forma de encontrar um bom preço é fazendo uma cotação personalizada.
        </p>
      </section>

      {/* INTERLINK */}
      <section style={container}>
        <h3>Veja também:</h3>

        <ul>
          <li><a href="/quanto-custa-seguro-auto">Quanto custa o seguro auto</a></li>
          <li><a href="/seguro-auto-vale-a-pena">Seguro vale a pena</a></li>
          <li><a href="/cotacao-seguro-auto">Cotação de seguro auto</a></li>
        </ul>
      </section>

      {/* CTA FINAL */}
      <section style={container}>
        <h2>Faça sua cotação agora</h2>

        <p style={{ fontWeight: "bold" }}>
          Descubra quanto ficaria no seu caso.
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