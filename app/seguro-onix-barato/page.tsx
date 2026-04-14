import SchemaAuto from "@/components/SchemaAuto";
export const metadata = {
  title: "Seguro Onix barato em Limeira com até 30% OFF | Cotação rápida",
  description:
    "Encontre seguro barato para Onix em Limeira. Compare seguradoras, economize até 30% e faça sua cotação rápida pelo WhatsApp.",
};

export default function Page() {
  return (
    <main style={{ background: "#f5f7fa" }}>

        <SchemaAuto carName="Onix" />

      {/* HERO */}
      <section style={container}>
        <h1>Seguro Onix barato em Limeira com até 30% de desconto</h1>

        <p style={highlight}>
          ✔️ Compare várias seguradoras <br />
          ✔️ Economize no seguro do seu Onix <br />
          ✔️ Cotação rápida em 2 minutos
        </p>

        <p style={social}>
          ⭐ Mais de 2.400 clientes atendidos <br />
          ⭐ Avaliação 4.9 no Google
        </p>

        <p>
          Se você quer pagar menos no seguro do seu Chevrolet Onix,
          aqui você encontra as melhores opções com o menor preço.
        </p>

        <a href="https://wa.me/5519998722063" target="_blank" style={btnBig}>
          🚀 Ver seguro mais barato agora
        </a>

        {/* BLOCO CONVERSÃO */}
        <div style={box}>
          <p style={{ fontWeight: "bold" }}>📲 Cotação rápida no WhatsApp</p>
          <ul>
            <li>✔️ Atendimento imediato</li>
            <li>✔️ Sem compromisso</li>
            <li>✔️ Melhor preço garantido</li>
            <li>✔️ Especialista em seguro de Onix</li>
          </ul>
        </div>

        <p style={urgency}>
          ⚠️ Condições especiais disponíveis esse mês
        </p>
      </section>

      {/* INTRO */}
      <section style={container}>
        <h2>Como encontrar seguro barato para Onix?</h2>

        <p>
          O segredo para pagar menos no seguro do Onix é comparar seguradoras e
          ajustar a cobertura de acordo com o seu perfil.
        </p>

        <p>
          Muitas pessoas pagam mais caro do que deveriam por não fazer uma cotação correta.
        </p>
      </section>

      {/* COMO FUNCIONA */}
      <section style={container}>
        <h2>Como funciona a cotação?</h2>

        <div style={grid}>
          <div style={card}>1️⃣ Envie seus dados</div>
          <div style={card}>2️⃣ Analisamos seu perfil</div>
          <div style={card}>3️⃣ Cotamos em várias seguradoras</div>
          <div style={card}>4️⃣ Você escolhe o menor preço</div>
        </div>

        <p>
          Em poucos minutos você já pode comparar opções e economizar.
        </p>

        <a href="https://wa.me/5519998722063" target="_blank" style={btn}>
          👉 Fazer cotação personalizada
        </a>
      </section>

      {/* PREÇO */}
      <section style={container}>
        <h2>Quanto custa um seguro barato para Onix?</h2>

        <p>
          O seguro do Onix pode variar entre <strong>R$ 1.200 e R$ 3.200 por ano</strong>.
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
        <h2>Quer pagar menos no seu seguro?</h2>

        <p style={{ fontWeight: "bold" }}>
          Faça uma cotação rápida e veja quanto pode economizar.
        </p>

        <a href="https://wa.me/5519998722063" target="_blank" style={btnBig}>
          👉 Fazer cotação grátis agora
        </a>
      </section>

      {/* DICAS */}
      <section style={container}>
        <h2>Dicas para pagar mais barato no seguro do Onix</h2>

        <div style={grid}>
          <div style={card}>Comparar seguradoras</div>
          <div style={card}>Ajustar cobertura</div>
          <div style={card}>Escolher franquia ideal</div>
          <div style={card}>Evitar riscos desnecessários</div>
        </div>
      </section>

      {/* BENEFÍCIO */}
      <section style={container}>
        <h2>Seguro barato vale a pena?</h2>

        <p>
          Sim, desde que você escolha corretamente.
        </p>

        <p>
          O importante é equilibrar preço e proteção para evitar prejuízos maiores.
        </p>
      </section>

      {/* INTERLINK */}
      <section style={container}>
        <h3>Veja também:</h3>

        <ul>
          <li><a href="/seguro-onix-quanto-custa">Quanto custa o seguro do Onix</a></li>
          <li><a href="/seguro-onix">Seguro Onix em Limeira</a></li>
          <li><a href="/seguro-auto-mais-barato">Seguro auto mais barato</a></li>
        </ul>
      </section>

      {/* FINAL */}
      <section style={container}>
        <h2 style={{ color: "red" }}>⚠️ Últimas condições com desconto</h2>

        <p style={{ fontWeight: "bold", fontSize: "18px" }}>
          Aproveite agora e pague menos no seguro do seu Onix.
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