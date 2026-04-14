export const metadata = {
  title: "Seguro Corolla Cross barato em Limeira | Economize até 30%",
  description:
    "Descubra como pagar mais barato no seguro do Corolla Cross. Compare seguradoras e economize até 30% com cotação rápida.",
};

export default function Page() {
  return (
    <main style={{ background: "#f5f7fa" }}>

      {/* HERO */}
      <section style={container}>
        <h1>Seguro Corolla Cross barato em Limeira</h1>

        <p style={highlight}>
          ✔️ Economize até 30% no seguro <br />
          ✔️ Compare seguradoras <br />
          ✔️ Cotação rápida e personalizada
        </p>

        <p style={social}>
          ⭐ Mais de 2.400 clientes atendidos <br />
          ⭐ Avaliação 4.9 no Google
        </p>

        <p>
          Se você quer pagar mais barato no seguro do seu Corolla Cross,
          saiba que existem estratégias que reduzem bastante o valor sem perder proteção.
        </p>

        <p>
          Aqui você vai entender como economizar e ainda manter um seguro completo.
        </p>

        <a href="https://wa.me/5519998722063" target="_blank" style={btnBig}>
          💰 Ver seguro mais barato agora
        </a>

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
          ⚠️ Descontos especiais disponíveis este mês
        </p>
      </section>

      {/* INTRO */}
      <section style={container}>
        <h2>É possível pagar barato no seguro do Corolla Cross?</h2>

        <p>
          Sim. O valor do seguro pode variar bastante dependendo das escolhas feitas na contratação.
        </p>

        <p>
          Ajustando corretamente a cobertura e comparando seguradoras, é possível reduzir
          significativamente o custo final.
        </p>
      </section>

      {/* DICAS */}
      <section style={container}>
        <h2>Como pagar mais barato no seguro?</h2>

        <div style={grid}>
          <div style={card}>Comparar seguradoras</div>
          <div style={card}>Ajustar cobertura</div>
          <div style={card}>Escolher franquia maior</div>
          <div style={card}>Perfil bem analisado</div>
        </div>

        <p>
          Pequenas mudanças podem gerar uma economia significativa.
        </p>
      </section>

      {/* PREÇO */}
      <section style={container}>
        <h2>Quanto custa um seguro barato?</h2>

        <p>
          Um seguro mais econômico para Corolla Cross pode ficar entre 
          <strong> R$ 2.500 e R$ 4.000 por ano</strong>.
        </p>

        <p>
          Valores muito baixos podem significar cobertura limitada, então é importante analisar bem.
        </p>

        <a href="https://wa.me/5519998722063" target="_blank" style={btn}>
          👉 Descobrir valor com desconto
        </a>
      </section>

      {/* CTA */}
      <section style={container}>
        <h2>Quer pagar o menor valor possível?</h2>

        <p style={{ fontWeight: "bold" }}>
          Faça uma cotação personalizada e veja o melhor preço.
        </p>

        <a href="https://wa.me/5519998722063" target="_blank" style={btnBig}>
          🚀 Fazer cotação grátis
        </a>
      </section>

      {/* BENEFÍCIO */}
      <section style={container}>
        <h2>Vale a pena buscar seguro mais barato?</h2>

        <p>
          Sim, desde que você mantenha uma proteção adequada.
        </p>

        <p>
          O ideal é equilibrar custo e cobertura para evitar prejuízos futuros.
        </p>
      </section>

      {/* INTERLINK */}
      <section style={container}>
        <h3>Veja também:</h3>

        <ul>
          <li><a href="/seguro-corolla-cross">Seguro Corolla Cross</a></li>
          <li><a href="/seguro-corolla-cross-quanto-custa">Quanto custa</a></li>
          <li><a href="/seguro-corolla-cross-motorista-novo">Motorista novo</a></li>
        </ul>
      </section>

      {/* FINAL */}
      <section style={container}>
        <h2 style={{ color: "red" }}>⚠️ Aproveite enquanto há desconto</h2>

        <p style={{ fontWeight: "bold", fontSize: "18px" }}>
          Descubra agora o seguro mais barato para seu Corolla Cross.
        </p>

        <a href="https://wa.me/5519998722063" target="_blank" style={btnBig}>
          👉 Falar com especialista
        </a>
      </section>

    </main>
  );
}

/* ===== ESTILOS ===== */

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