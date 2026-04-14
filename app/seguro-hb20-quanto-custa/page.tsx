import SchemaAuto from "@/components/SchemaAuto";
export const metadata = {
  title: "Quanto custa o seguro do HB20 em Limeira? Veja preços e economize até 30%",
  description:
    "Descubra quanto custa o seguro do HB20 em Limeira, veja valores reais e faça sua cotação rápida.",
};

export default function Page() {
  return (
    <main style={{ background: "#f5f7fa" }}>

        <SchemaAuto carName="HB20" />

      {/* HERO */}
      <section style={container}>
        <h1>Quanto custa o seguro do HB20 em Limeira?</h1>

        <p style={highlight}>
          ✔️ Veja valores atualizados <br />
          ✔️ Descubra quanto você vai pagar <br />
          ✔️ Economize até 30% no seguro
        </p>

        <p style={social}>
          ⭐ Mais de 2.400 clientes atendidos <br />
          ⭐ Avaliação 4.9 no Google
        </p>

        <p>
          Se você tem um HB20, aqui você descobre quanto custa o seguro
          e como pagar mais barato com uma cotação personalizada.
        </p>

        <a href="https://wa.me/5519998722063" target="_blank" style={btnBig}>
          🚀 Ver valor do meu HB20 agora
        </a>

        <div style={box}>
          <p><strong>📲 Cotação rápida no WhatsApp</strong></p>
          <ul>
            <li>✔️ Atendimento imediato</li>
            <li>✔️ Sem compromisso</li>
            <li>✔️ Melhor preço garantido</li>
          </ul>
        </div>

        <p style={urgency}>
          ⚠️ Condições especiais disponíveis esse mês
        </p>
      </section>

      {/* PREÇO */}
      <section style={container}>
        <h2>Qual o valor do seguro do HB20?</h2>

        <p>
          O seguro do HB20 pode variar entre 
          <strong> R$ 1.200 e R$ 3.000 por ano</strong>.
        </p>

        <p>
          O valor depende do perfil do motorista, ano do carro e região.
        </p>

        <a href="https://wa.me/5519998722063" target="_blank" style={btn}>
          👉 Descobrir quanto vou pagar agora
        </a>
      </section>

      {/* FATORES */}
      <section style={container}>
        <h2>O que influencia o preço?</h2>

        <div style={grid}>
          <div style={card}>Idade do motorista</div>
          <div style={card}>Ano do HB20</div>
          <div style={card}>Localização</div>
          <div style={card}>Uso do veículo</div>
        </div>
      </section>

      {/* CTA */}
      <section style={container}>
        <h2>Quer saber o valor exato?</h2>

        <a href="https://wa.me/5519998722063" target="_blank" style={btnBig}>
          👉 Fazer cotação grátis agora
        </a>
      </section>

      {/* INTERLINK */}
      <section style={container}>
        <h3>Veja também:</h3>

        <ul>
          <li><a href="/seguro-hb20">Seguro HB20</a></li>
          <li><a href="/seguro-auto-mais-barato">Seguro barato</a></li>
          <li><a href="/cotacao-seguro-auto">Cotação</a></li>
        </ul>
      </section>

      {/* FINAL */}
      <section style={container}>
        <h2 style={{ color: "red" }}>⚠️ Últimas condições com desconto</h2>

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