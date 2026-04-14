export const metadata = {
  title: "Seguro Corolla barato em Limeira | Economize até 30% na cotação",
  description:
    "Descubra como pagar mais barato no seguro do Corolla. Compare seguradoras e faça sua cotação rápida com desconto.",
};

export default function Page() {
  return (
    <main style={{ background: "#f5f7fa" }}>

      {/* HERO */}
      <section style={container}>
        <h1>Seguro Corolla barato em Limeira</h1>

        <p style={highlight}>
          ✔️ Economize até 30% no seguro <br />
          ✔️ Cotação rápida e personalizada <br />
          ✔️ Melhores seguradoras do mercado
        </p>

        <p style={social}>
          ⭐ Mais de 2.400 clientes atendidos <br />
          ⭐ Avaliação 4.9 no Google
        </p>

        <p>
          Se você quer pagar mais barato no seguro do seu Corolla, saiba que é possível
          reduzir bastante o valor com a estratégia certa.
        </p>

        <a href="https://wa.me/5519998722063" target="_blank" style={btnBig}>
          💰 Ver seguro mais barato agora
        </a>

        {/* BLOCO CONVERSÃO */}
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
        <h2>É possível pagar barato no seguro do Corolla?</h2>

        <p>
          Sim. O valor do seguro pode variar bastante dependendo das escolhas feitas
          na contratação.
        </p>

        <p>
          Com uma análise correta, é possível economizar até 30% sem perder proteção.
        </p>
      </section>

      {/* DICAS */}
      <section style={container}>
        <h2>Como pagar mais barato no seguro do Corolla?</h2>

        <div style={grid}>
          <div style={card}>Comparar seguradoras</div>
          <div style={card}>Ajustar cobertura</div>
          <div style={card}>Escolher franquia maior</div>
          <div style={card}>Perfil bem analisado</div>
        </div>

        <p>
          Cada detalhe pode reduzir o valor final do seguro.
        </p>
      </section>

      {/* PREÇO */}
      <section style={container}>
        <h2>Quanto custa um seguro Corolla barato?</h2>

        <p>
          Um seguro mais econômico pode ficar entre 
          <strong> R$ 2.000 e R$ 3.500 por ano</strong>, dependendo do perfil.
        </p>

        <p>
          Valores abaixo disso geralmente indicam coberturas muito limitadas.
        </p>

        <a href="https://wa.me/5519998722063" target="_blank" style={btn}>
          👉 Descobrir valor com desconto agora
        </a>
      </section>

      {/* CTA INTERMEDIÁRIO */}
      <section style={container}>
        <h2>Quer pagar o menor valor possível?</h2>

        <p style={{ fontWeight: "bold" }}>
          Faça uma cotação personalizada e descubra o melhor preço para você.
        </p>

        <a href="https://wa.me/5519998722063" target="_blank" style={btnBig}>
          🚀 Fazer cotação grátis
        </a>
      </section>

      {/* BENEFÍCIO */}
      <section style={container}>
        <h2>Vale a pena buscar seguro mais barato?</h2>

        <p>
          Sim, desde que o seguro ainda ofereça proteção adequada.
        </p>

        <p>
          O ideal é encontrar o equilíbrio entre preço e cobertura.
        </p>
      </section>

      {/* INTERLINK */}
      <section style={container}>
        <h3>Veja também:</h3>

        <ul>
          <li><a href="/seguro-corolla">Seguro Corolla</a></li>
          <li><a href="/seguro-corolla-quanto-custa">Quanto custa seguro Corolla</a></li>
          <li><a href="/cotacao-seguro-auto">Cotação de seguro auto</a></li>
        </ul>
      </section>

      {/* FINAL */}
      <section style={container}>
        <h2 style={{ color: "red" }}>⚠️ Aproveite enquanto há desconto</h2>

        <p style={{ fontWeight: "bold", fontSize: "18px" }}>
          Descubra agora o seguro mais barato para o seu Corolla.
        </p>

        <a href="https://wa.me/5519998722063" target="_blank" style={btnBig}>
          👉 Falar com especialista
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