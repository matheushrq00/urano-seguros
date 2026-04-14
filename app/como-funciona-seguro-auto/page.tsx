export const metadata = {
  title: "Seguro Auto em Limeira com até 30% OFF | Cotação Rápida",
  description:
    "Seguro auto em Limeira com até 30% de desconto. Compare seguradoras e faça sua cotação rápida pelo WhatsApp.",
};

export default function Page() {
  return (
    <main style={{ background: "#f5f7fa" }}>

      {/* HERO */}
      <section style={container}>
        <h1>Seguro Auto em Limeira com até 30% de desconto</h1>

        <p style={highlight}>
          ✔️ Cotação rápida pelo WhatsApp <br />
          ✔️ Compare as melhores seguradoras <br />
          ✔️ Atendimento imediato e sem burocracia
        </p>

        <p style={{ fontWeight: "bold", marginTop: "10px" }}>
          ⭐ Mais de 2.400 clientes atendidos em Limeira <br />
          ⭐ Avaliação 4.9 no Google
        </p>

        <a href="https://wa.me/5519998722063" target="_blank" style={btn}>
          🚀 Ver valor do meu seguro agora
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
        <h2>Seguro auto em Limeira com melhor preço</h2>

        <p>
          Se você está procurando <strong>seguro auto em Limeira</strong>, aqui você encontra
          as melhores opções do mercado com atendimento rápido e personalizado.
        </p>

        <p>
          Trabalhamos com as principais seguradoras do Brasil para garantir o melhor
          custo-benefício, comparando preços e coberturas para você.
        </p>
      </section>

      {/* PREÇO */}
      <section style={container}>
        <h2>Quanto custa o seguro auto em Limeira?</h2>

        <p>
          O valor do seguro pode variar entre <strong>R$ 1.200 e R$ 3.500 por ano</strong>,
          dependendo do perfil do motorista e do veículo.
        </p>

        <p>
          Cada caso é único, por isso a melhor forma de economizar é fazendo uma cotação personalizada.
        </p>

        <a href="https://wa.me/5519998722063" target="_blank" style={btn}>
          👉 Descobrir quanto vou pagar
        </a>
      </section>

      {/* COBERTURA */}
      <section style={container}>
        <h2>O que o seguro auto cobre?</h2>

        <div style={grid}>
          <div style={card}>🚗 Colisão</div>
          <div style={card}>🔒 Roubo e furto</div>
          <div style={card}>👥 Danos a terceiros</div>
          <div style={card}>🌧️ Enchente e eventos naturais</div>
        </div>

        <p>
          Você pode personalizar a cobertura conforme sua necessidade.
        </p>
      </section>

      {/* VANTAGENS */}
      <section style={container}>
        <h2>Por que contratar seguro auto?</h2>

        <ul>
          <li>Evitar prejuízos altos</li>
          <li>Proteção contra roubo e acidentes</li>
          <li>Tranquilidade no dia a dia</li>
          <li>Assistência 24h</li>
        </ul>
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
          Nós fazemos esse processo para você e encontramos o melhor preço.
        </p>
      </section>

      {/* INTERLINK */}
      <section style={container}>
        <h3>Veja também:</h3>

        <ul>
          <li><a href="/cotacao-seguro-auto">Cotação de seguro auto</a></li>
          <li><a href="/quanto-custa-seguro-auto">Quanto custa o seguro auto</a></li>
          <li><a href="/seguro-auto-vale-a-pena">Seguro vale a pena</a></li>
        </ul>
      </section>

      {/* CTA FINAL */}
      <section style={container}>
        <h2>Faça sua cotação agora</h2>

        <p style={{ fontWeight: "bold", fontSize: "18px" }}>
          Descubra quanto você pode economizar no seu seguro.
        </p>

        <a href="https://wa.me/5519998722063" target="_blank" style={btnBig}>
          👉 Falar com especialista agora
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
  marginTop: "15px",
};

const card = {
  padding: "15px",
  background: "#fff",
  border: "1px solid #ddd",
  borderRadius: "10px",
};