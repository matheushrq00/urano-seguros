export const metadata = {
  title: "Franquia do seguro vale a pena? Entenda como funciona",
  description:
    "Descubra o que é franquia de seguro auto, quando vale a pena e como escolher a melhor opção para economizar.",
};

export default function Page() {
  return (
    <main style={{ background: "#f5f7fa" }}>

      {/* HERO */}
      <section style={container}>
        <h1>Franquia do seguro vale a pena?</h1>

        <p style={highlight}>
          ✔️ Entenda o que é franquia <br />
          ✔️ Veja quando vale a pena <br />
          ✔️ Saiba como economizar no seguro
        </p>

        <p>
          Uma das maiores dúvidas ao contratar um seguro auto é sobre a franquia.
        </p>

        <p>
          Muitas pessoas não entendem exatamente como ela funciona e acabam ficando
          inseguras na hora de escolher o seguro.
        </p>

        <p>
          Neste guia, você vai entender de forma simples o que é franquia e quando
          ela realmente vale a pena.
        </p>

        <a href="https://wa.me/5519998722063" target="_blank" style={btn}>
          🚀 Fazer cotação agora
        </a>
      </section>

      {/* EXPLICAÇÃO */}
      <section style={container}>
        <h2>O que é franquia no seguro auto?</h2>

        <p>
          A franquia é o valor que você paga em caso de sinistro parcial, como uma batida.
        </p>

        <p>
          O restante do custo do reparo é pago pela seguradora.
        </p>

        <p>
          Por exemplo:
        </p>

        <ul>
          <li>Conserto: R$ 5.000</li>
          <li>Franquia: R$ 1.500</li>
          <li>Você paga: R$ 1.500</li>
          <li>Seguradora paga: R$ 3.500</li>
        </ul>
      </section>

      {/* TIPOS */}
      <section style={container}>
        <h2>Quais são os tipos de franquia?</h2>

        <p>
          Existem diferentes tipos de franquia, e cada um impacta no valor do seguro:
        </p>

        <ul>
          <li>Franquia normal</li>
          <li>Franquia reduzida (mais cara no seguro)</li>
          <li>Franquia majorada (seguro mais barato)</li>
        </ul>

        <p>
          A escolha depende do seu perfil e uso do carro.
        </p>
      </section>

      {/* VALE A PENA */}
      <section style={container}>
        <h2>Quando a franquia vale a pena?</h2>

        <p>
          A franquia vale a pena quando o custo do reparo é maior que o valor da franquia.
        </p>

        <p>
          Em casos de perda total, você não paga franquia.
        </p>

        <p>
          Por isso, o seguro continua sendo vantajoso na maioria das situações.
        </p>
      </section>

      {/* ERROS */}
      <section style={container}>
        <h2>Erros comuns ao escolher franquia</h2>

        <ul>
          <li>Escolher apenas pelo menor preço</li>
          <li>Não entender o funcionamento</li>
          <li>Ignorar o custo em caso de sinistro</li>
        </ul>

        <p>
          Esses erros podem gerar prejuízos no futuro.
        </p>
      </section>

      {/* ECONOMIA */}
      <section style={container}>
        <h2>Como escolher a melhor franquia?</h2>

        <div style={grid}>
          <div style={card}>Analisar seu perfil</div>
          <div style={card}>Comparar opções</div>
          <div style={card}>Avaliar custo-benefício</div>
          <div style={card}>Fazer cotação personalizada</div>
        </div>

        <p>
          Nós ajudamos você a tomar a melhor decisão.
        </p>
      </section>

      {/* CONCLUSÃO */}
      <section style={container}>
        <h2>Conclusão</h2>

        <p>
          A franquia vale a pena sim, desde que seja escolhida corretamente.
        </p>

        <p>
          O ideal é fazer uma cotação personalizada para entender qual opção
          faz mais sentido para você.
        </p>
      </section>

      {/* INTERLINK */}
      <section style={container}>
        <h3>Veja também:</h3>

        <ul>
          <li><a href="/seguro-cobre-batida">Seguro cobre batida</a></li>
          <li><a href="/seguro-cobre-terceiros">Seguro cobre terceiros</a></li>
          <li><a href="/cotacao-seguro-auto">Cotação de seguro auto</a></li>
        </ul>
      </section>

      {/* CTA FINAL */}
      <section style={container}>
        <h2>Faça sua cotação agora</h2>

        <p style={{ fontWeight: "bold" }}>
          Descubra qual franquia é ideal para você.
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