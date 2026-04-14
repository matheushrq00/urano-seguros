import SchemaAuto from "@/components/SchemaAuto";
export const metadata = {
  title: "Seguro Corolla para motorista novo em Limeira | Veja como pagar menos",
  description:
    "Descubra quanto custa o seguro do Corolla para motorista novo e como economizar. Cotação rápida e personalizada.",
};

export default function Page() {
  return (
    <main style={{ background: "#f5f7fa" }}>

        <SchemaAuto carName="Toyota Corolla" />

      {/* HERO */}
      <section style={container}>
        <h1>Seguro Corolla para motorista novo em Limeira</h1>

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
          Se você é motorista novo e tem um Corolla, o valor do seguro pode ser
          mais alto — mas existem formas de reduzir bastante esse custo.
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
        <h2>Seguro do Corolla para motorista novo é mais caro?</h2>

        <p>
          Sim. Motoristas com pouca experiência são considerados de maior risco
          pelas seguradoras, o que aumenta o valor do seguro.
        </p>

        <p>
          Porém, com a estratégia certa, é possível reduzir bastante esse custo.
        </p>
      </section>

      {/* PREÇO */}
      <section style={container}>
        <h2>Quanto custa o seguro do Corolla para motorista novo?</h2>

        <p>
          O valor pode variar entre 
          <strong> R$ 3.500 e R$ 7.000 por ano</strong>, dependendo do perfil.
        </p>

        <p>
          Idade, tempo de habilitação e uso do veículo influenciam diretamente.
        </p>

        <a href="https://wa.me/5519998722063" target="_blank" style={btn}>
          👉 Descobrir valor exato agora
        </a>
      </section>

      {/* DICAS */}
      <section style={container}>
        <h2>Como pagar menos sendo motorista novo?</h2>

        <div style={grid}>
          <div style={card}>Colocar condutor principal mais experiente</div>
          <div style={card}>Escolher franquia adequada</div>
          <div style={card}>Ajustar coberturas</div>
          <div style={card}>Comparar seguradoras</div>
        </div>

        <p>
          Pequenas decisões podem gerar grande economia no valor final.
        </p>
      </section>

      {/* CTA INTERMEDIÁRIO */}
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
          Sim. O risco de acidentes é maior no início, e o seguro protege contra
          prejuízos altos com colisões, terceiros e imprevistos.
        </p>
      </section>

      {/* INTERLINK */}
      <section style={container}>
        <h3>Veja também:</h3>

        <ul>
          <li><a href="/seguro-corolla">Seguro Corolla</a></li>
          <li><a href="/seguro-corolla-barato">Seguro Corolla barato</a></li>
          <li><a href="/seguro-corolla-quanto-custa">Quanto custa seguro Corolla</a></li>
        </ul>
      </section>

      {/* FINAL */}
      <section style={container}>
        <h2 style={{ color: "red" }}>⚠️ Descubra agora o melhor preço</h2>

        <p style={{ fontWeight: "bold", fontSize: "18px" }}>
          Veja quanto custa o seguro do seu Corolla sendo motorista novo.
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