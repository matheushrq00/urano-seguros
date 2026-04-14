export const metadata = {
  title: "Seguro para Uber em Limeira com até 30% OFF | Cotação em 2 Minutos",
  description:
    "Seguro para motorista de aplicativo em Limeira. Proteja seu carro Uber/99 com desconto e cotação rápida pelo WhatsApp.",
};

export default function Page() {
  return (
    <main style={{ background: "#f5f7fa" }}>

      {/* HERO */}
      <section style={container}>
        <h1>Seguro para Uber em Limeira com até 30% de desconto</h1>

        <p style={highlight}>
          ✔️ Seguro específico para motorista de aplicativo <br />
          ✔️ Cobertura completa para Uber e 99 <br />
          ✔️ Cotação rápida em 2 minutos
        </p>

        <p style={social}>
          ⭐ Mais de 2.400 clientes atendidos em Limeira <br />
          ⭐ Avaliação 4.9 no Google
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
            <li>✔️ Especialista em motoristas de aplicativo</li>
          </ul>
        </div>

        <p style={urgency}>
          ⚠️ Condições especiais para motoristas de aplicativo esse mês
        </p>
      </section>

      {/* INTRO */}
      <section style={container}>
        <h2>Seguro para motorista de aplicativo em Limeira</h2>

        <p>
          Se você trabalha com Uber ou 99, precisa de um <strong>seguro específico para motorista de aplicativo</strong>.
        </p>

        <p>
          O seguro comum pode não cobrir acidentes durante o trabalho, o que pode gerar prejuízos altos.
        </p>
      </section>

      {/* PREÇO */}
      <section style={container}>
        <h2>Quanto custa o seguro para Uber?</h2>

        <p>
          O valor pode variar entre <strong>R$ 2.000 e R$ 5.000 por ano</strong>,
          dependendo do veículo, perfil e uso.
        </p>

        <p>
          Como motoristas rodam mais, o risco é maior — mas também existem formas de economizar.
        </p>

        <a href="https://wa.me/5519998722063" target="_blank" style={btn}>
          👉 Descobrir quanto vou pagar agora
        </a>
      </section>

      {/* CTA INTERMEDIÁRIO */}
      <section style={container}>
        <h2>Quer proteger seu carro e sua renda?</h2>

        <p style={{ fontWeight: "bold" }}>
          Faça uma cotação rápida e veja quanto pode economizar.
        </p>

        <a href="https://wa.me/5519998722063" target="_blank" style={btnBig}>
          👉 Fazer cotação grátis
        </a>
      </section>

      {/* COBERTURA */}
      <section style={container}>
        <h2>O que o seguro para Uber cobre?</h2>

        <div style={grid}>
          <div style={card}>🚗 Roubo e furto</div>
          <div style={card}>💥 Colisão</div>
          <div style={card}>👥 Danos a terceiros</div>
          <div style={card}>🛠️ Assistência 24h</div>
        </div>

        <p>
          Você pode personalizar a cobertura conforme seu perfil e necessidade.
        </p>
      </section>

      {/* IMPORTÂNCIA */}
      <section style={container}>
        <h2>Vale a pena contratar seguro para Uber?</h2>

        <p>
          Sim. Motoristas de aplicativo rodam mais e têm maior risco de acidentes.
        </p>

        <p>
          Um único problema pode gerar prejuízo alto e até impedir você de trabalhar.
        </p>
      </section>

      {/* ECONOMIA */}
      <section style={container}>
        <h2>Como pagar mais barato no seguro para Uber?</h2>

        <div style={grid}>
          <div style={card}>Comparar seguradoras</div>
          <div style={card}>Ajustar cobertura</div>
          <div style={card}>Escolher franquia ideal</div>
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
          <li><a href="/seguro-auto-mais-barato">Seguro auto mais barato</a></li>
          <li><a href="/quanto-custa-seguro-auto">Quanto custa o seguro auto</a></li>
        </ul>
      </section>

      {/* CTA FINAL */}
      <section style={container}>
        <h2 style={{ color: "red" }}>⚠️ Últimas condições com desconto</h2>

        <p style={{ fontWeight: "bold", fontSize: "18px" }}>
          Proteja seu carro e continue trabalhando com segurança.
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