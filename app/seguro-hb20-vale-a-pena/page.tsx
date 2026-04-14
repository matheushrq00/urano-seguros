import SchemaAuto from "@/components/SchemaAuto";
export const metadata = {
  title: "Seguro do HB20 vale a pena em 2026? Veja quando compensa",
  description:
    "Descubra se vale a pena fazer seguro para HB20, veja preços, riscos e como economizar até 30%.",
};

export default function Page() {
  return (
    <main style={{ background: "#f5f7fa" }}>

        <SchemaAuto carName="HB20" />

      {/* HERO */}
      <section style={container}>
        <h1>Seguro do HB20 vale a pena em 2026?</h1>

        <p style={highlight}>
          ✔️ Veja quando realmente compensa <br />
          ✔️ Entenda os riscos de ficar sem seguro <br />
          ✔️ Descubra quanto custa proteger seu carro
        </p>

        <p style={social}>
          ⭐ Mais de 2.400 clientes atendidos <br />
          ⭐ Avaliação 4.9 no Google
        </p>

        <p>
          Se você tem um HB20 e está na dúvida se vale a pena fazer seguro,
          aqui você vai entender exatamente quando compensa — e quando pode sair caro não ter.
        </p>

        <a href="https://wa.me/5519998722063" target="_blank" style={btnBig}>
          🚀 Ver valor do seguro do meu HB20
        </a>

        {/* BLOCO CONVERSÃO */}
        <div style={box}>
          <p style={{ fontWeight: "bold" }}>📲 Cotação rápida no WhatsApp</p>
          <ul>
            <li>✔️ Atendimento imediato</li>
            <li>✔️ Sem compromisso</li>
            <li>✔️ Melhor preço garantido</li>
            <li>✔️ Especialista em HB20</li>
          </ul>
        </div>

        <p style={urgency}>
          ⚠️ Condições especiais disponíveis esse mês
        </p>
      </section>

      {/* EXPLICAÇÃO */}
      <section style={container}>
        <h2>Vale a pena fazer seguro para HB20?</h2>

        <p>
          Na maioria dos casos, <strong>sim, vale muito a pena</strong>.
        </p>

        <p>
          O HB20 é um dos carros mais populares do Brasil, o que também aumenta
          a exposição a riscos como roubo, colisões e danos a terceiros.
        </p>
      </section>

      {/* RISCOS */}
      <section style={container}>
        <h2>O que pode acontecer se você não tiver seguro?</h2>

        <div style={grid}>
          <div style={card}>🚗 Prejuízo em caso de colisão</div>
          <div style={card}>🔒 Perda por roubo ou furto</div>
          <div style={card}>👥 Custos altos com terceiros</div>
          <div style={card}>💸 Gastos inesperados</div>
        </div>

        <p>
          Um único problema pode custar muito mais do que o valor do seguro.
        </p>
      </section>

      {/* PREÇO */}
      <section style={container}>
        <h2>Quanto custa o seguro do HB20?</h2>

        <p>
          O seguro pode variar entre <strong>R$ 1.200 e R$ 3.000 por ano</strong>.
        </p>

        <p>
          Ou seja, muitas vezes custa menos do que um único prejuízo.
        </p>

        <a href="https://wa.me/5519998722063" target="_blank" style={btn}>
          👉 Descobrir quanto vou pagar agora
        </a>
      </section>

      {/* CTA INTERMEDIÁRIO */}
      <section style={container}>
        <h2>Quer saber se compensa no seu caso?</h2>

        <p style={{ fontWeight: "bold" }}>
          Faça uma cotação rápida e veja quanto você pode economizar.
        </p>

        <a href="https://wa.me/5519998722063" target="_blank" style={btnBig}>
          👉 Fazer cotação grátis agora
        </a>
      </section>

      {/* BENEFÍCIOS */}
      <section style={container}>
        <h2>Vantagens de ter seguro no HB20</h2>

        <div style={grid}>
          <div style={card}>Tranquilidade no dia a dia</div>
          <div style={card}>Proteção contra prejuízos</div>
          <div style={card}>Cobertura completa</div>
          <div style={card}>Assistência 24h</div>
        </div>
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
      </section>

      {/* INTERLINK */}
      <section style={container}>
        <h3>Veja também:</h3>

        <ul>
          <li><a href="/seguro-hb20-quanto-custa">Quanto custa o seguro do HB20</a></li>
          <li><a href="/seguro-hb20-barato">Seguro HB20 barato</a></li>
          <li><a href="/seguro-hb20">Seguro HB20 em Limeira</a></li>
        </ul>
      </section>

      {/* FINAL */}
      <section style={container}>
        <h2 style={{ color: "red" }}>⚠️ Últimas condições com desconto</h2>

        <p style={{ fontWeight: "bold", fontSize: "18px" }}>
          Descubra agora se vale a pena no seu caso e quanto você vai pagar.
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