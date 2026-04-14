export const metadata = {
  title: "Seguro Auto em Limeira | Cotação Rápida e Até 30% Mais Barato",
  description:
    "Seguro auto em Limeira com cotação rápida. Compare seguradoras, economize até 30% e fale com especialista agora.",
};

export default function Page() {
  return (
    <main style={{ background: "#f5f7fa" }}>

      {/* HERO ULTRA FORTE */}
      <section style={container}>
        <h1>Seguro Auto em Limeira com até 30% de desconto</h1>

        <p style={highlight}>
          ✔️ Compare as melhores seguradoras em minutos <br />
          ✔️ Atendimento imediato pelo WhatsApp <br />
          ✔️ Cotação sem compromisso
        </p>

        <p style={social}>
          ⭐ Mais de 2.400 clientes atendidos <br />
          ⭐ Avaliação 4.9 no Google
        </p>

        <p>
          Faça agora sua <strong>cotação de seguro auto em Limeira</strong> e descubra
          quanto você pode economizar com uma análise personalizada.
        </p>

        <a href="https://wa.me/5519998722063" target="_blank" style={btnBig}>
          🚀 Ver preço do meu seguro agora
        </a>

        {/* CAIXA DE CONVERSÃO */}
        <div style={box}>
          <p style={{ fontWeight: "bold" }}>📲 Cotação rápida no WhatsApp</p>
          <ul>
            <li>✔️ Atendimento imediato</li>
            <li>✔️ Sem compromisso</li>
            <li>✔️ Comparação entre seguradoras</li>
            <li>✔️ Melhor preço garantido</li>
          </ul>
        </div>

        <p style={urgency}>
          ⚠️ Condições especiais disponíveis esse mês
        </p>
      </section>

      {/* PREÇO */}
      <section style={container}>
        <h2>Quanto custa o seguro auto em Limeira?</h2>

        <p>
          O valor pode variar entre <strong>R$ 1.200 e R$ 3.500 por ano</strong>,
          dependendo do perfil do motorista e do veículo.
        </p>

        <p style={{ fontWeight: "bold" }}>
          👉 Faça uma cotação e veja o valor exato para você
        </p>

        <a href="https://wa.me/5519998722063" target="_blank" style={btn}>
          👉 Descobrir quanto vou pagar
        </a>
      </section>

      {/* MODELOS (INTERLINK FORTE) */}
      <section style={container}>
        <h2>Seguro para os carros mais buscados</h2>

        <div style={grid}>
          <a href="/seguro-onix" style={cardLink}>Seguro Onix</a>
          <a href="/seguro-hb20" style={cardLink}>Seguro HB20</a>
          <a href="/seguro-corolla" style={cardLink}>Seguro Corolla</a>
          <a href="/seguro-tcross" style={cardLink}>Seguro T-Cross</a>
          <a href="/seguro-nivus" style={cardLink}>Seguro Nivus</a>
          <a href="/seguro-creta" style={cardLink}>Seguro Creta</a>
        </div>
      </section>

      {/* COBERTURA */}
      <section style={container}>
        <h2>O que o seguro auto cobre?</h2>

        <div style={grid}>
          <div style={card}>🚗 Roubo e furto</div>
          <div style={card}>💥 Colisão</div>
          <div style={card}>👥 Danos a terceiros</div>
          <div style={card}>🛠️ Assistência 24h</div>
        </div>
      </section>

      {/* FATORES */}
      <section style={container}>
        <h2>O que influencia o preço?</h2>

        <div style={grid}>
          <div style={card}>Idade do motorista</div>
          <div style={card}>Modelo do veículo</div>
          <div style={card}>Região (Limeira)</div>
          <div style={card}>Histórico de sinistros</div>
        </div>
      </section>

      {/* CTA INTERMEDIÁRIO */}
      <section style={container}>
        <h2>Quer pagar mais barato?</h2>

        <p style={{ fontWeight: "bold" }}>
          Compare seguradoras e descubra o melhor preço para você.
        </p>

        <a href="https://wa.me/5519998722063" target="_blank" style={btnBig}>
          💰 Fazer cotação grátis
        </a>
      </section>

      {/* INTERLINK INTENÇÃO */}
      <section style={container}>
        <h3>Veja também:</h3>

        <ul>
          <li><a href="/cotacao-seguro-auto">Cotação de seguro auto</a></li>
          <li><a href="/seguro-auto-barato">Seguro auto barato</a></li>
          <li><a href="/quanto-custa-seguro-auto">Quanto custa seguro auto</a></li>
        </ul>
      </section>

      {/* FINAL */}
      <section style={container}>
        <h2 style={{ color: "red" }}>⚠️ Últimas condições com desconto</h2>

        <p style={{ fontWeight: "bold", fontSize: "18px" }}>
          Descubra agora quanto você pode economizar no seguro auto.
        </p>

        <a href="https://wa.me/5519998722063" target="_blank" style={btnBig}>
          👉 Falar com especialista agora
        </a>
      </section>

    </main>
  );
}

/* estilos */

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

const urgency = {
  color: "red",
  fontWeight: "bold",
  marginTop: "15px",
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

const grid = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "15px",
  marginTop: "20px",
};

const card = {
  padding: "15px",
  border: "1px solid #ddd",
  borderRadius: "10px",
  background: "#fff",
};

const cardLink = {
  padding: "15px",
  border: "1px solid #ddd",
  borderRadius: "10px",
  background: "#fff",
  textDecoration: "none",
  color: "#000",
  fontWeight: "bold",
};