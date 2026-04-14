export const metadata = {
  title: "Seguro auto mais barato: como economizar até 30% em 2026",
  description:
    "Descubra como encontrar o seguro auto mais barato, compare opções e veja dicas para pagar menos no seu seguro.",
};

export default function Page() {
  return (
    <main style={{ background: "#f5f7fa" }}>

      {/* HERO */}
      <section style={container}>
        <h1>Como encontrar o seguro auto mais barato?</h1>

        <p style={highlight}>
          ✔️ Compare seguradoras <br />
          ✔️ Economize até 30% <br />
          ✔️ Cotação rápida e sem compromisso
        </p>

        <p>
          Se você está procurando o seguro auto mais barato, saiba que é totalmente
          possível economizar sem abrir mão da proteção.
        </p>

        <p>
          O segredo está em comparar opções e ajustar o seguro ao seu perfil.
        </p>

        <a href="https://wa.me/5519998722063" target="_blank" style={btn}>
          🚀 Fazer cotação agora
        </a>
      </section>

      {/* EXPLICAÇÃO */}
      <section style={container}>
        <h2>Por que o preço do seguro varia tanto?</h2>

        <p>
          O valor do seguro auto depende de diversos fatores.
        </p>

        <ul>
          <li>Idade do motorista</li>
          <li>Modelo do veículo</li>
          <li>Região</li>
          <li>Histórico de sinistros</li>
        </ul>

        <p>
          Por isso, o mesmo carro pode ter preços diferentes para cada pessoa.
        </p>
      </section>

      {/* COMO BARATEAR */}
      <section style={container}>
        <h2>Como pagar mais barato no seguro auto?</h2>

        <div style={grid}>
          <div style={card}>Comparar várias seguradoras</div>
          <div style={card}>Escolher cobertura ideal</div>
          <div style={card}>Ajustar franquia</div>
          <div style={card}>Análise personalizada</div>
        </div>

        <p>
          Com essas estratégias, é possível reduzir bastante o valor.
        </p>
      </section>

      {/* ERROS */}
      <section style={container}>
        <h2>Erros ao buscar seguro barato</h2>

        <ul>
          <li>Escolher apenas pelo menor preço</li>
          <li>Ignorar coberturas importantes</li>
          <li>Não comparar seguradoras</li>
        </ul>

        <p>
          O barato pode sair caro se você não tiver cobertura adequada.
        </p>
      </section>

      {/* VALE A PENA */}
      <section style={container}>
        <h2>Seguro barato vale a pena?</h2>

        <p>
          Sim, desde que você escolha corretamente.
        </p>

        <p>
          O ideal é encontrar um equilíbrio entre preço e proteção.
        </p>
      </section>

      {/* DICAS */}
      <section style={container}>
        <h2>Dicas para economizar ainda mais</h2>

        <ul>
          <li>Evitar modificações no veículo</li>
          <li>Manter bom histórico de direção</li>
          <li>Escolher carros com seguro mais barato</li>
        </ul>

        <p>
          Pequenas decisões fazem grande diferença no valor final.
        </p>
      </section>

      {/* CONCLUSÃO */}
      <section style={container}>
        <h2>Conclusão</h2>

        <p>
          Encontrar o seguro auto mais barato é possível com a estratégia certa.
        </p>

        <p>
          A melhor forma de garantir isso é fazendo uma cotação personalizada.
        </p>
      </section>

      {/* INTERLINK */}
      <section style={container}>
        <h3>Veja também:</h3>

        <ul>
          <li><a href="/quanto-custa-seguro-auto">Quanto custa o seguro auto</a></li>
          <li><a href="/melhor-seguro-auto">Melhor seguro auto</a></li>
          <li><a href="/cotacao-seguro-auto">Cotação de seguro auto</a></li>
        </ul>
      </section>

      {/* CTA FINAL */}
      <section style={container}>
        <h2>Faça sua cotação agora</h2>

        <p style={{ fontWeight: "bold" }}>
          Descubra quanto você pode economizar.
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