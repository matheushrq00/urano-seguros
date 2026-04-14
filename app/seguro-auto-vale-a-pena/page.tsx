export const metadata = {
  title: "Seguro auto vale a pena? Descubra se compensa em 2026",
  description:
    "Veja se vale a pena contratar seguro auto, quando compensa e como economizar. Tire suas dúvidas e faça sua cotação.",
};

export default function Page() {
  return (
    <main style={{ background: "#f5f7fa" }}>

      {/* HERO */}
      <section style={container}>
        <h1>Seguro auto vale a pena em 2026?</h1>

        <p style={highlight}>
          ✔️ Entenda quando compensa <br />
          ✔️ Veja os riscos de não ter seguro <br />
          ✔️ Descubra como economizar
        </p>

        <p>
          Muitas pessoas se perguntam se contratar um seguro auto realmente vale a pena.
          A resposta depende do seu perfil, do seu carro e dos riscos que você está disposto a assumir.
        </p>

        <p>
          Mas uma coisa é certa: o custo de um imprevisto pode ser muito maior do que o valor do seguro.
        </p>

        <a href="https://wa.me/5519998722063" target="_blank" style={btn}>
          🚀 Fazer cotação agora
        </a>
      </section>

      {/* EXPLICAÇÃO */}
      <section style={container}>
        <h2>Quando o seguro auto vale a pena?</h2>

        <p>
          O seguro auto vale a pena principalmente quando o risco de prejuízo é alto.
        </p>

        <ul>
          <li>Carros de alto valor</li>
          <li>Uso frequente do veículo</li>
          <li>Regiões com maior índice de roubo</li>
          <li>Motoristas que dependem do carro</li>
        </ul>

        <p>
          Se você se encaixa em algum desses pontos, o seguro deixa de ser opcional.
        </p>
      </section>

      {/* SEM SEGURO */}
      <section style={container}>
        <h2>Quais são os riscos de não ter seguro?</h2>

        <p>
          Muitas pessoas deixam de contratar seguro para economizar, mas isso pode sair caro.
        </p>

        <p>
          Um único acidente pode gerar custos de milhares de reais, sem contar danos a terceiros.
        </p>

        <p>
          Em caso de roubo, o prejuízo pode ser total.
        </p>
      </section>

      {/* PREÇO */}
      <section style={container}>
        <h2>Seguro auto é caro?</h2>

        <p>
          O valor do seguro pode variar bastante, mas normalmente fica entre
          <strong> R$ 1.200 e R$ 3.500 por ano</strong>.
        </p>

        <p>
          Em muitos casos, esse valor é muito menor do que o prejuízo de um acidente.
        </p>
      </section>

      {/* ECONOMIA */}
      <section style={container}>
        <h2>Como fazer um seguro auto valer mais a pena?</h2>

        <div style={grid}>
          <div style={card}>Comparar seguradoras</div>
          <div style={card}>Ajustar cobertura</div>
          <div style={card}>Escolher franquia</div>
          <div style={card}>Análise personalizada</div>
        </div>

        <p>
          Com uma cotação bem feita, você encontra opções muito mais acessíveis.
        </p>
      </section>

      {/* CONCLUSÃO */}
      <section style={container}>
        <h2>Então, seguro auto vale a pena?</h2>

        <p>
          Na maioria dos casos, sim. O seguro auto é uma forma de proteger seu patrimônio
          e evitar prejuízos inesperados.
        </p>

        <p>
          A decisão certa é fazer uma cotação e avaliar o custo-benefício.
        </p>
      </section>

      {/* INTERLINK */}
      <section style={container}>
        <h3>Veja também:</h3>

        <ul>
          <li><a href="/quanto-custa-seguro-auto">Quanto custa o seguro auto</a></li>
          <li><a href="/cotacao-seguro-auto">Cotação de seguro auto</a></li>
          <li><a href="/seguro-auto-barato">Seguro auto barato</a></li>
        </ul>
      </section>

      {/* CTA FINAL */}
      <section style={container}>
        <h2>Faça sua cotação agora</h2>

        <p style={{ fontWeight: "bold" }}>
          Descubra quanto custa no seu caso e veja se vale a pena para você.
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