export const metadata = {
  title: "Quanto custa um seguro auto em 2026? Veja valores e economize até 30%",
  description:
    "Descubra quanto custa o seguro auto, veja preços atualizados e faça sua cotação rápida pelo WhatsApp.",
};

export default function Page() {
  return (
    <main style={{ background: "#f5f7fa" }}>

      {/* HERO */}
      <section style={container}>
        <h1>Quanto custa um seguro auto em 2026?</h1>

        <p style={highlight}>
          ✔️ Veja valores reais atualizados <br />
          ✔️ Descubra quanto você vai pagar <br />
          ✔️ Economize até 30% no seu seguro
        </p>

        <p style={social}>
          ⭐ Mais de 2.400 clientes atendidos <br />
          ⭐ Avaliação 4.9 no Google
        </p>

        <p>
          O valor do seguro auto pode variar bastante, mas aqui você vai entender
          exatamente quanto custa e como pagar menos.
        </p>

        <a href="https://wa.me/5519998722063" target="_blank" style={btnBig}>
          🚀 Ver valor do meu seguro agora
        </a>

        {/* BLOCO CONVERSÃO */}
        <div style={box}>
          <p style={{ fontWeight: "bold" }}>📲 Cotação rápida no WhatsApp</p>
          <ul>
            <li>✔️ Atendimento imediato</li>
            <li>✔️ Sem compromisso</li>
            <li>✔️ Melhor preço garantido</li>
            <li>✔️ Especialista em seguros</li>
          </ul>
        </div>

        <p style={urgency}>
          ⚠️ Condições especiais disponíveis esse mês
        </p>
      </section>

      {/* PREÇO */}
      <section style={container}>
        <h2>Qual o valor do seguro auto?</h2>

        <p>
          Em média, o seguro de carro custa entre <strong>R$ 1.200 e R$ 3.500 por ano</strong>.
        </p>

        <p>
          Porém, esse valor pode ser maior ou menor dependendo do seu perfil,
          veículo e região.
        </p>

        <a href="https://wa.me/5519998722063" target="_blank" style={btn}>
          👉 Descobrir quanto vou pagar agora
        </a>
      </section>

      {/* EXPLICAÇÃO */}
      <section style={container}>
        <h2>O que influencia o preço do seguro auto?</h2>

        <div style={grid}>
          <div style={card}>Idade do motorista</div>
          <div style={card}>Modelo do veículo</div>
          <div style={card}>Região</div>
          <div style={card}>Histórico de sinistros</div>
        </div>

        <p>
          Esses fatores são analisados pelas seguradoras para definir o risco.
        </p>
      </section>

      {/* CTA INTERMEDIÁRIO */}
      <section style={container}>
        <h2>Quer saber o valor exato no seu caso?</h2>

        <p style={{ fontWeight: "bold" }}>
          Faça uma cotação rápida e veja quanto você pode economizar.
        </p>

        <a href="https://wa.me/5519998722063" target="_blank" style={btnBig}>
          👉 Fazer cotação grátis agora
        </a>
      </section>

      {/* IMPORTÂNCIA */}
      <section style={container}>
        <h2>Seguro auto é caro?</h2>

        <p>
          Depende do perfil, mas na maioria dos casos o seguro custa muito menos
          do que um único prejuízo com acidente ou roubo.
        </p>

        <p>
          Por isso, é considerado um investimento em segurança.
        </p>
      </section>

      {/* ECONOMIA */}
      <section style={container}>
        <h2>Como pagar mais barato no seguro?</h2>

        <div style={grid}>
          <div style={card}>Comparar seguradoras</div>
          <div style={card}>Ajustar cobertura</div>
          <div style={card}>Escolher franquia</div>
          <div style={card}>Cotação personalizada</div>
        </div>

        <p>
          Com a estratégia certa, é possível economizar até 30%.
        </p>
      </section>

      {/* INTERLINK */}
      <section style={container}>
        <h3>Veja também:</h3>

        <ul>
          <li><a href="/cotacao-seguro-auto">Cotação de seguro auto</a></li>
          <li><a href="/seguro-auto-mais-barato">Seguro auto mais barato</a></li>
          <li><a href="/seguro-auto-limeira">Seguro auto em Limeira</a></li>
        </ul>
      </section>

      {/* CTA FINAL */}
      <section style={container}>
        <h2 style={{ color: "red" }}>⚠️ Últimas condições com desconto</h2>

        <p style={{ fontWeight: "bold", fontSize: "18px" }}>
          Descubra agora quanto você vai pagar no seu seguro.
        </p>

        <a href="https://wa.me/5519998722063" target="_blank" style={btnBig}>
          👉 Falar com especialista agora
        </a>
      </section>

    </main>
  );
}

/* STYLES */

const container = {
  maxWidth: "1100px",
  margin: "0 auto",
  padding: "40px 20px",
};

const highlight = {
  fontWeight: "bold",
  fontSize: "18px",
};

const social = {
  fontWeight: "bold",
  marginTop: "10px",
};

const btn = {
  display: "inline-block",
  background: "#25D366",
  color: "#fff",
  padding: "14px 22px",
  borderRadius: "8px",
  fontWeight: "bold",
  marginTop: "15px",
  textDecoration: "none",
};

const btnBig = {
  display: "inline-block",
  background: "#25D366",
  color: "#fff",
  padding: "18px 28px",
  borderRadius: "10px",
  fontWeight: "bold",
  marginTop: "20px",
  fontSize: "18px",
  textDecoration: "none",
};

const box = {
  background: "#fff",
  padding: "20px",
  borderRadius: "10px",
  marginTop: "20px",
  border: "1px solid #ddd",
};

const urgency = {
  color: "red",
  fontWeight: "bold",
  marginTop: "15px",
};

const grid = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "15px",
  marginTop: "20px",
};

const card = {
  padding: "15px",
  background: "#fff",
  border: "1px solid #ddd",
  borderRadius: "10px",
};