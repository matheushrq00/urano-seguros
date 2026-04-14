export const metadata = {
  title: "Seguro para carro velho vale a pena? Veja quando compensa",
  description:
    "Descubra se vale a pena fazer seguro para carro antigo, quando compensa e como economizar na proteção do seu veículo.",
};

export default function Page() {
  return (
    <main style={{ background: "#f5f7fa" }}>

      {/* HERO */}
      <section style={container}>
        <h1>Seguro para carro velho vale a pena?</h1>

        <p style={highlight}>
          ✔️ Veja quando compensa <br />
          ✔️ Entenda os riscos <br />
          ✔️ Descubra como economizar
        </p>

        <p>
          Uma dúvida muito comum entre motoristas é se vale a pena contratar
          seguro para carro velho.
        </p>

        <p>
          Muitas pessoas acreditam que não compensa, mas isso depende de vários fatores.
        </p>

        <p>
          Neste guia, você vai entender quando o seguro ainda faz sentido mesmo
          para veículos mais antigos.
        </p>

        <a href="https://wa.me/5519998722063" target="_blank" style={btn}>
          🚀 Fazer cotação agora
        </a>
      </section>

      {/* EXPLICAÇÃO */}
      <section style={container}>
        <h2>O que é considerado carro velho?</h2>

        <p>
          Em geral, carros com mais de 10 anos já são considerados antigos
          pelas seguradoras.
        </p>

        <p>
          Porém, isso não significa que não seja possível fazer seguro.
        </p>

        <p>
          Muitas seguradoras ainda aceitam veículos mais antigos, dependendo do modelo.
        </p>
      </section>

      {/* VALE A PENA */}
      <section style={container}>
        <h2>Quando vale a pena fazer seguro para carro velho?</h2>

        <p>
          O seguro pode valer a pena mesmo para carros antigos, principalmente quando:
        </p>

        <ul>
          <li>O carro ainda tem valor relevante</li>
          <li>Você depende do veículo no dia a dia</li>
          <li>Há risco de roubo na região</li>
          <li>Você quer evitar prejuízos com terceiros</li>
        </ul>

        <p>
          Nesses casos, o seguro continua sendo uma proteção importante.
        </p>
      </section>

      {/* QUANDO NAO VALE */}
      <section style={container}>
        <h2>Quando pode não valer a pena?</h2>

        <p>
          Em alguns casos, o seguro pode não compensar financeiramente.
        </p>

        <ul>
          <li>Carro com valor muito baixo</li>
          <li>Custo do seguro muito alto</li>
          <li>Uso pouco frequente</li>
        </ul>

        <p>
          Mesmo assim, é importante avaliar com cuidado antes de decidir.
        </p>
      </section>

      {/* ALTERNATIVAS */}
      <section style={container}>
        <h2>Existem alternativas ao seguro completo?</h2>

        <p>
          Sim. Para carros mais antigos, existem opções mais acessíveis:
        </p>

        <ul>
          <li>Seguro contra roubo e furto</li>
          <li>Seguro com cobertura reduzida</li>
          <li>Proteção veicular</li>
        </ul>

        <p>
          Essas opções podem oferecer um bom custo-benefício.
        </p>
      </section>

      {/* IMPORTÂNCIA */}
      <section style={container}>
        <h2>Por que ainda considerar seguro?</h2>

        <p>
          Mesmo com menor valor de mercado, o carro ainda pode gerar prejuízos.
        </p>

        <p>
          Um acidente com terceiros pode custar muito mais do que o próprio veículo.
        </p>

        <p>
          Por isso, o seguro continua sendo uma decisão estratégica.
        </p>
      </section>

      {/* ECONOMIA */}
      <section style={container}>
        <h2>Como economizar no seguro para carro velho?</h2>

        <div style={grid}>
          <div style={card}>Comparar seguradoras</div>
          <div style={card}>Escolher cobertura adequada</div>
          <div style={card}>Avaliar franquia</div>
          <div style={card}>Cotação personalizada</div>
        </div>

        <p>
          Com a estratégia certa, é possível pagar bem menos.
        </p>
      </section>

      {/* CONCLUSÃO */}
      <section style={container}>
        <h2>Conclusão</h2>

        <p>
          O seguro para carro velho pode valer a pena sim, dependendo do seu perfil
          e do uso do veículo.
        </p>

        <p>
          A melhor forma de saber é fazendo uma cotação personalizada.
        </p>
      </section>

      {/* INTERLINK */}
      <section style={container}>
        <h3>Veja também:</h3>

        <ul>
          <li><a href="/franquia-seguro-vale-a-pena">Franquia vale a pena</a></li>
          <li><a href="/seguro-auto-vale-a-pena">Seguro vale a pena</a></li>
          <li><a href="/cotacao-seguro-auto">Cotação de seguro auto</a></li>
        </ul>
      </section>

      {/* CTA FINAL */}
      <section style={container}>
        <h2>Faça sua cotação agora</h2>

        <p style={{ fontWeight: "bold" }}>
          Descubra se vale a pena no seu caso.
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