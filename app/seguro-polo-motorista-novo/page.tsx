import SchemaAuto from "@/components/SchemaAuto";
export const metadata = {
  title: "Seguro Polo para motorista novo em Limeira | Veja como pagar menos",
  description:
    "Descubra quanto custa o seguro do Polo para motorista novo e como economizar. Cotação rápida e personalizada.",
};

export default function Page() {
  return (
    <main style={{ background: "#f5f7fa" }}>

        <SchemaAuto carName="Polo" />

      {/* HERO */}
      <section style={container}>
        <h1>Seguro Polo para motorista novo em Limeira</h1>

        <p style={highlight}>
          ✔️ Veja quanto custa para perfil novo <br />
          ✔️ Descubra como economizar <br />
          ✔️ Cotação rápida e personalizada
        </p>

        <p style={social}>
          ⭐ Mais de 2.400 clientes atendidos <br />
          ⭐ Avaliação 4.9 no Google
        </p>

        <p>
          Se você é motorista novo e tem um Polo, é importante saber que o valor do seguro pode ser mais alto.
        </p>

        <p>
          Isso acontece porque motoristas com pouca experiência são considerados de maior risco pelas seguradoras.
        </p>

        <p>
          Mas a boa notícia é que existem formas de reduzir bastante esse valor.
        </p>

        <a href="https://wa.me/5519998722063" target="_blank" style={btnBig}>
          🚀 Ver valor do meu seguro agora
        </a>

        <div style={box}>
          <p style={{ fontWeight: "bold" }}>📲 Cotação rápida no WhatsApp</p>
          <ul>
            <li>✔️ Atendimento imediato</li>
            <li>✔️ Sem compromisso</li>
            <li>✔️ Análise personalizada</li>
            <li>✔️ Especialista em perfil jovem</li>
          </ul>
        </div>

        <p style={urgency}>
          ⚠️ Condições especiais disponíveis este mês
        </p>
      </section>

      {/* INTRO */}
      <section style={container}>
        <h2>Seguro do Polo para motorista novo é mais caro?</h2>

        <p>
          Sim. Motoristas com pouca experiência têm maior probabilidade de se envolver em acidentes,
          o que aumenta o risco para as seguradoras.
        </p>

        <p>
          Por isso, o valor do seguro tende a ser mais alto nesse perfil.
        </p>

        <p>
          No entanto, existem estratégias que ajudam a reduzir esse custo.
        </p>
      </section>

      {/* PREÇO */}
      <section style={container}>
        <h2>Quanto custa o seguro para motorista novo?</h2>

        <p>
          O seguro do Polo para motorista novo pode variar entre 
          <strong> R$ 2.500 e R$ 5.500 por ano</strong>.
        </p>

        <p>
          Esse valor depende de idade, região, uso do veículo e histórico do condutor.
        </p>

        <p>
          Cada perfil é analisado individualmente, então a cotação personalizada é essencial.
        </p>

        <a href="https://wa.me/5519998722063" target="_blank" style={btn}>
          👉 Descobrir valor exato agora
        </a>
      </section>

      {/* DICAS */}
      <section style={container}>
        <h2>Como pagar menos sendo motorista novo?</h2>

        <div style={grid}>
          <div style={card}>Adicionar condutor experiente</div>
          <div style={card}>Escolher franquia adequada</div>
          <div style={card}>Ajustar coberturas</div>
          <div style={card}>Comparar seguradoras</div>
        </div>

        <p>
          Pequenas decisões podem reduzir bastante o valor final do seguro.
        </p>

        <p>
          Um bom planejamento faz toda a diferença no custo.
        </p>
      </section>

      {/* COBERTURA */}
      <section style={container}>
        <h2>O que o seguro cobre?</h2>

        <div style={grid}>
          <div style={card}>🚗 Roubo e furto</div>
          <div style={card}>💥 Colisão</div>
          <div style={card}>👥 Danos a terceiros</div>
          <div style={card}>🛠️ Assistência 24h</div>
        </div>
      </section>

      {/* CTA */}
      <section style={container}>
        <h2>Quer saber quanto você vai pagar?</h2>

        <p style={{ fontWeight: "bold" }}>
          Faça uma cotação personalizada agora mesmo.
        </p>

        <a href="https://wa.me/5519998722063" target="_blank" style={btnBig}>
          👉 Fazer cotação grátis
        </a>
      </section>

      {/* BENEFÍCIO */}
      <section style={container}>
        <h2>Vale a pena fazer seguro sendo motorista novo?</h2>

        <p>
          Sim. O risco de acidentes é maior no início, e o seguro protege contra prejuízos altos.
        </p>

        <p>
          Além disso, traz mais segurança e tranquilidade no dia a dia.
        </p>
      </section>

      {/* INTERLINK */}
      <section style={container}>
        <h3>Veja também:</h3>

        <ul>
          <li><a href="/seguro-polo">Seguro Polo</a></li>
          <li><a href="/seguro-polo-barato">Seguro barato</a></li>
          <li><a href="/seguro-polo-quanto-custa">Quanto custa</a></li>
        </ul>
      </section>

      {/* FINAL */}
      <section style={container}>
        <h2 style={{ color: "red" }}>⚠️ Descubra o melhor preço agora</h2>

        <p style={{ fontWeight: "bold", fontSize: "18px" }}>
          Veja quanto custa o seguro do seu Polo sendo motorista novo.
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