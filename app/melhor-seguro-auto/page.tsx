export const metadata = {
  title: "Qual o melhor seguro auto? Veja como escolher o ideal em 2026",
  description:
    "Descubra qual o melhor seguro auto, compare seguradoras e veja como escolher a melhor opção para seu carro.",
};

export default function Page() {
  return (
    <main style={{ background: "#f5f7fa" }}>

      {/* HERO */}
      <section style={container}>
        <h1>Qual o melhor seguro auto em 2026?</h1>

        <p style={highlight}>
          ✔️ Compare as melhores seguradoras <br />
          ✔️ Veja o que realmente importa <br />
          ✔️ Escolha a melhor opção para você
        </p>

        <p>
          Se você está procurando o melhor seguro auto, saiba que não existe uma única resposta.
          O melhor seguro é aquele que atende às suas necessidades com o melhor custo-benefício.
        </p>

        <p>
          Cada motorista tem um perfil diferente, e por isso a escolha deve ser personalizada.
        </p>

        <a href="https://wa.me/5519998722063" target="_blank" style={btn}>
          🚀 Fazer cotação agora
        </a>
      </section>

      {/* EXPLICAÇÃO */}
      <section style={container}>
        <h2>O que define o melhor seguro auto?</h2>

        <p>
          O melhor seguro não é necessariamente o mais barato, mas sim o que oferece
          a melhor proteção pelo preço justo.
        </p>

        <ul>
          <li>Cobertura adequada</li>
          <li>Preço competitivo</li>
          <li>Boa reputação da seguradora</li>
          <li>Atendimento rápido</li>
        </ul>

        <p>
          Esses fatores devem ser considerados na escolha.
        </p>
      </section>

      {/* SEGURADORAS */}
      <section style={container}>
        <h2>Quais são as melhores seguradoras?</h2>

        <p>
          No Brasil, existem diversas seguradoras confiáveis que oferecem seguro auto,
          cada uma com suas vantagens.
        </p>

        <p>
          Por isso, o ideal é comparar várias opções antes de decidir.
        </p>
      </section>

      {/* PERSONALIZAÇÃO */}
      <section style={container}>
        <h2>Por que a cotação personalizada é importante?</h2>

        <p>
          O valor e as condições do seguro variam de acordo com o perfil do motorista,
          modelo do carro e região.
        </p>

        <p>
          Uma cotação personalizada garante que você encontre o melhor custo-benefício.
        </p>
      </section>

      {/* ERROS */}
      <section style={container}>
        <h2>Erros comuns ao escolher seguro auto</h2>

        <ul>
          <li>Escolher apenas pelo preço</li>
          <li>Não comparar seguradoras</li>
          <li>Ignorar coberturas importantes</li>
        </ul>

        <p>
          Esses erros podem gerar prejuízos no futuro.
        </p>
      </section>

      {/* ECONOMIA */}
      <section style={container}>
        <h2>Como encontrar o melhor seguro com menor preço?</h2>

        <div style={grid}>
          <div style={card}>Comparar várias seguradoras</div>
          <div style={card}>Ajustar cobertura</div>
          <div style={card}>Escolher franquia</div>
          <div style={card}>Análise profissional</div>
        </div>

        <p>
          Nós realizamos esse processo para você.
        </p>
      </section>

      {/* CONCLUSÃO */}
      <section style={container}>
        <h2>Qual é o melhor seguro auto para você?</h2>

        <p>
          O melhor seguro é aquele que protege seu carro e seu bolso.
        </p>

        <p>
          A melhor forma de descobrir é fazendo uma cotação personalizada.
        </p>
      </section>

      {/* INTERLINK */}
      <section style={container}>
        <h3>Veja também:</h3>

        <ul>
          <li><a href="/quanto-custa-seguro-auto">Quanto custa o seguro auto</a></li>
          <li><a href="/seguro-auto-vale-a-pena">Seguro auto vale a pena</a></li>
          <li><a href="/cotacao-seguro-auto">Cotação de seguro auto</a></li>
        </ul>
      </section>

      {/* CTA FINAL */}
      <section style={container}>
        <h2>Faça sua cotação agora</h2>

        <p style={{ fontWeight: "bold" }}>
          Descubra qual é o melhor seguro para o seu perfil.
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