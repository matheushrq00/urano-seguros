export const metadata = {
  title: "Seguro Auto Barato em Limeira com até 30% OFF | Cotação Rápida",
  description:
    "Encontre seguro auto barato em Limeira. Compare seguradoras, economize até 30% e faça sua cotação rápida pelo WhatsApp.",
};

export default function Page() {
  return (
    <main style={{ background: "#f5f7fa" }}>

      {/* HERO */}
      <section style={container}>
        <h1>Seguro Auto Barato em Limeira com até 30% de economia</h1>

        <p style={highlight}>
          ✔️ Cotação em 2 minutos pelo WhatsApp <br />
          ✔️ Compare várias seguradoras <br />
          ✔️ Encontre o menor preço para seu perfil
        </p>

        <p style={social}>
          ⭐ Mais de 2.400 clientes atendidos em Limeira <br />
          ⭐ Avaliação 4.9 no Google
        </p>

        <a href="https://wa.me/5519998722063" target="_blank" style={btnBig}>
          🚀 Ver seguro mais barato agora
        </a>

        {/* BLOCO DE CONVERSÃO */}
        <div style={box}>
          <p style={{ fontWeight: "bold" }}>📲 Cotação rápida no WhatsApp</p>
          <ul>
            <li>✔️ Atendimento imediato</li>
            <li>✔️ Sem compromisso</li>
            <li>✔️ Melhor preço garantido</li>
            <li>✔️ Especialista em Limeira</li>
          </ul>
        </div>

        <p style={urgency}>
          ⚠️ Condições especiais disponíveis esse mês
        </p>
      </section>

      {/* INTRO */}
      <section style={container}>
        <h2>Seguro auto barato em Limeira com melhor custo-benefício</h2>

        <p>
          Se você está procurando <strong>seguro auto barato em Limeira</strong>,
          saiba que é totalmente possível economizar sem abrir mão da proteção.
        </p>

        <p>
          Trabalhamos com diversas seguradoras para encontrar o melhor preço
          de acordo com o seu perfil, garantindo economia real.
        </p>
      </section>

      {/* COMO FUNCIONA */}
      <section style={container}>
        <h2>Como encontrar o seguro mais barato?</h2>

        <div style={grid}>
          <div style={card}>1️⃣ Analisamos seu perfil</div>
          <div style={card}>2️⃣ Cotamos em várias seguradoras</div>
          <div style={card}>3️⃣ Comparamos preços</div>
          <div style={card}>4️⃣ Você escolhe a melhor opção</div>
        </div>

        <p>
          Esse processo garante que você não pague mais caro do que deveria.
        </p>

        <a href="https://wa.me/5519998722063" target="_blank" style={btn}>
          👉 Fazer cotação personalizada agora
        </a>
      </section>

      {/* PREÇO */}
      <section style={container}>
        <h2>Quanto custa um seguro auto barato?</h2>

        <p>
          O valor pode variar entre <strong>R$ 1.200 e R$ 3.500 por ano</strong>,
          dependendo do perfil e do veículo.
        </p>

        <p>
          Com a estratégia certa, você pode economizar até 30% ou mais.
        </p>

        <a href="https://wa.me/5519998722063" target="_blank" style={btnBig}>
          👉 Descobrir quanto vou pagar agora
        </a>
      </section>

      {/* CTA INTERMEDIÁRIO */}
      <section style={container}>
        <h2>Quer pagar mais barato no seu seguro?</h2>

        <p style={{ fontWeight: "bold" }}>
          Faça uma cotação rápida e veja quanto pode economizar.
        </p>

        <a href="https://wa.me/5519998722063" target="_blank" style={btnBig}>
          👉 Fazer cotação grátis
        </a>
      </section>

      {/* DICAS */}
      <section style={container}>
        <h2>Como pagar menos no seguro auto?</h2>

        <div style={grid}>
          <div style={card}>📊 Comparar seguradoras</div>
          <div style={card}>🛠 Ajustar cobertura</div>
          <div style={card}>📉 Escolher franquia ideal</div>
          <div style={card}>👨‍💼 Cotação personalizada</div>
        </div>

        <p>
          Pequenas mudanças podem reduzir bastante o valor final.
        </p>
      </section>

      {/* BENEFÍCIOS */}
      <section style={container}>
        <h2>Vale a pena contratar seguro barato?</h2>

        <p>
          Sim, desde que você escolha corretamente.
        </p>

        <p>
          O objetivo não é apenas pagar menos, mas ter proteção adequada
          para evitar prejuízos altos.
        </p>
      </section>

      {/* INTERLINK */}
      <section style={container}>
        <h3>Veja também:</h3>

        <ul>
          <li><a href="/cotacao-seguro-auto">Cotação de seguro auto</a></li>
          <li><a href="/quanto-custa-seguro-auto">Quanto custa o seguro auto</a></li>
          <li><a href="/melhor-seguro-auto">Melhor seguro auto</a></li>
          <li><a href="/seguro-auto-limeira">Seguro auto em Limeira</a></li>
        </ul>
      </section>

      {/* CTA FINAL */}
      <section style={container}>
        <h2 style={{ color: "red" }}>⚠️ Últimas condições com desconto</h2>

        <p style={{ fontWeight: "bold", fontSize: "18px" }}>
          Aproveite agora e pague menos no seu seguro auto.
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
  border: "1px solid #ddd",
  borderRadius: "10px",
  background: "#fff",
};