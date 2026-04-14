import SchemaAuto from "@/components/SchemaAuto";
export const metadata = {
  title: "Quanto custa o seguro do Polo em Limeira? Veja valores atualizados",
  description:
    "Descubra quanto custa o seguro do Polo em Limeira, média de preços e como economizar até 30%.",
};

export default function Page() {
  return (
    <main style={{ background: "#f5f7fa" }}>
        <SchemaAuto carName="Polo" />

      {/* HERO */}
      <section style={container}>
        <h1>Quanto custa o seguro do Polo em Limeira?</h1>

        <p style={highlight}>
          ✔️ Veja valores reais atualizados <br />
          ✔️ Descubra quanto você vai pagar <br />
          ✔️ Economize até 30% no seguro
        </p>

        <p style={social}>
          ⭐ Mais de 2.400 clientes atendidos <br />
          ⭐ Avaliação 4.9 no Google
        </p>

        <p>
          Se você quer saber quanto custa o seguro do Polo, saiba que o valor pode variar bastante
          dependendo do perfil do motorista e do uso do veículo.
        </p>

        <p>
          Aqui você vai entender os preços médios e como pagar mais barato.
        </p>

        <a href="https://wa.me/5519998722063" target="_blank" style={btnBig}>
          🚀 Ver valor do meu seguro agora
        </a>

        <div style={box}>
          <p style={{ fontWeight: "bold" }}>📲 Cotação rápida no WhatsApp</p>
          <ul>
            <li>✔️ Atendimento imediato</li>
            <li>✔️ Sem compromisso</li>
            <li>✔️ Comparação entre seguradoras</li>
            <li>✔️ Melhor custo-benefício</li>
          </ul>
        </div>

        <p style={urgency}>
          ⚠️ Condições especiais disponíveis esse mês
        </p>
      </section>

      {/* PREÇO */}
      <section style={container}>
        <h2>Qual o valor do seguro do Polo?</h2>

        <section style={container}>
  <p>
    Antes de decidir, muita gente prefere entender melhor como funciona o{" "}
    <a href="/seguro-polo">seguro completo para Polo</a> e quais coberturas estão incluídas.
  </p>

  <p>
    Se a sua intenção for economizar, vale conferir algumas estratégias no guia de{" "}
    <a href="/seguro-polo-barato">seguro mais barato para Polo</a>.
  </p>
</section>

        <p>
          O seguro do Polo pode variar bastante dependendo do perfil do motorista.
        </p>

        <p>
          Em média, o valor fica entre 
          <strong> R$ 1.500 e R$ 3.500 por ano</strong>.
        </p>

        <p>
          Esse valor depende de idade, tempo de habilitação, região e uso do veículo.
        </p>

        <p>
          Por isso, a melhor forma de saber o valor exato é fazendo uma cotação personalizada.
        </p>

        <a href="https://wa.me/5519998722063" target="_blank" style={btn}>
          👉 Descobrir quanto vou pagar
        </a>
      </section>

      {/* FATORES */}
      <section style={container}>
        <h2>O que influencia o preço do seguro?</h2>

        <div style={grid}>
          <div style={card}>Idade do motorista</div>
          <div style={card}>Tempo de habilitação</div>
          <div style={card}>Região (Limeira)</div>
          <div style={card}>Uso do veículo</div>
        </div>

        <p>
          Motoristas mais jovens tendem a pagar mais caro devido ao maior risco.
        </p>

        <p>
          Já perfis mais experientes costumam ter valores mais baixos.
        </p>
      </section>

      {/* COBERTURA */}
      <section style={container}>
        <h2>O que está incluso no seguro?</h2>

        <div style={grid}>
          <div style={card}>🚗 Roubo e furto</div>
          <div style={card}>💥 Colisão</div>
          <div style={card}>👥 Danos a terceiros</div>
          <div style={card}>🛠️ Assistência 24h</div>
        </div>

        <p>
          Dependendo do plano, também é possível incluir carro reserva e coberturas adicionais.
        </p>
      </section>

      {/* ECONOMIA */}
      <section style={container}>
        <h2>Como pagar mais barato no seguro do Polo?</h2>

        <div style={grid}>
          <div style={card}>Comparar seguradoras</div>
          <div style={card}>Ajustar cobertura</div>
          <div style={card}>Escolher franquia adequada</div>
          <div style={card}>Análise personalizada</div>
        </div>

        <p>
          Com uma boa análise, é possível economizar até 30%.
        </p>
      </section>

      {/* CTA */}
      <section style={container}>
        <h2>Quer saber o valor exato no seu caso?</h2>

        <p style={{ fontWeight: "bold" }}>
          Faça uma cotação personalizada agora mesmo.
        </p>

        <a href="https://wa.me/5519998722063" target="_blank" style={btnBig}>
          👉 Fazer cotação grátis
        </a>
      </section>

      {/* INTERLINK */}
      <section style={container}>
        <h3>Veja também:</h3>

<ul>
  <li><a href="/seguro-polo">Guia completo do seguro Polo</a></li>
  <li><a href="/seguro-polo-barato">Como pagar menos no seguro</a></li>
  <li><a href="/seguro-polo-motorista-novo">Valores para motoristas iniciantes</a></li>
  <li><a href="/seguro-polo-vale-a-pena">Vale a pena fazer seguro?</a></li>
</ul>
      </section>

      {/* FINAL */}
      <section style={container}>
        <h2 style={{ color: "red" }}>⚠️ Descubra o melhor preço agora</h2>

        <p style={{ fontWeight: "bold", fontSize: "18px" }}>
          Veja quanto você pode economizar no seguro do seu Polo.
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