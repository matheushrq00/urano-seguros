import SchemaAuto from "@/components/SchemaAuto";
export const metadata = {
  title: "Seguro Nivus em Limeira | Cotação com até 30% de Desconto",
  description:
    "Seguro para Volkswagen Nivus em Limeira com melhor preço. Compare seguradoras e faça sua cotação rápida pelo WhatsApp.",
};

export default function Page() {
  return (
    <main style={{ background: "#f5f7fa" }}>

        <SchemaAuto carName="Nivus" />

      {/* HERO */}
      <section style={container}>
        <h1>Seguro Nivus em Limeira com Melhor Preço</h1>

        <p style={highlight}>
          ✔️ Seguro completo para Volkswagen Nivus <br />
          ✔️ Compare seguradoras e economize até 30% <br />
          ✔️ Cotação rápida e sem compromisso
        </p>

        <p>
          Se você tem um <strong>Volkswagen Nivus</strong> e quer proteger seu carro,
          fazer um seguro é essencial para evitar prejuízos com roubo, colisões e
          danos a terceiros.
        </p>

        <p>
          Aqui você pode fazer sua cotação de <strong>seguro Nivus em Limeira</strong>,
          comparar várias seguradoras e encontrar a melhor opção com excelente custo-benefício.
        </p>

        <a href="https://wa.me/5519998722063" target="_blank" style={btn}>
          🚀 Ver preço do meu seguro Nivus
        </a>
      </section>

      {/* PREÇO */}
      <section style={container}>
        <h2>Quanto custa o seguro do Nivus em Limeira?</h2>

        <p>
          O valor do seguro pode variar entre <strong>R$ 1.800 e R$ 4.000 por ano</strong>,
          dependendo do perfil do motorista, versão do veículo e região.
        </p>

        <p>
          O Nivus é um carro moderno e tecnológico, o que pode influenciar no valor
          do seguro, mas também oferece boas opções de cobertura.
        </p>

        <p><strong>👉 Quer saber o valor exato no seu caso?</strong></p>

        <a href="https://wa.me/5519998722063" target="_blank" style={btnSmall}>
          👉 Ver valor do meu seguro agora
        </a>
      </section>

      {/* COMO FUNCIONA */}
      <section style={container}>
        <h2>Como funciona a cotação do seguro Nivus?</h2>

        <div style={grid}>
          <div style={card}>1️⃣ Envie seus dados</div>
          <div style={card}>2️⃣ Analisamos seu perfil</div>
          <div style={card}>3️⃣ Cotamos nas seguradoras</div>
          <div style={card}>4️⃣ Você escolhe a melhor opção</div>
        </div>

        <p>
          Em poucos minutos você já pode comparar preços e coberturas para seu Nivus.
        </p>
      </section>

      {/* COBERTURA */}
      <section style={container}>
        <h2>O que o seguro do Nivus cobre?</h2>

        <div style={grid}>
          <div style={card}>🚗 Roubo e furto</div>
          <div style={card}>💥 Colisão</div>
          <div style={card}>👥 Danos a terceiros</div>
          <div style={card}>🛠️ Assistência 24h</div>
        </div>

        <p>
          Você também pode incluir coberturas adicionais como carro reserva,
          proteção ampliada e assistência completa.
        </p>
      </section>

      {/* FATORES */}
      <section style={container}>
        <h2>O que influencia o preço do seguro?</h2>

        <ul>
          <li>Idade do motorista</li>
          <li>Versão e ano do Nivus</li>
          <li>Região (Limeira e entorno)</li>
          <li>Histórico de uso</li>
          <li>Perfil de risco</li>
        </ul>

        <p>
          Cada detalhe impacta no valor final, por isso a cotação personalizada
          é fundamental.
        </p>
      </section>

      {/* ECONOMIA */}
      <section style={container}>
        <h2>Como pagar mais barato no seguro Nivus?</h2>

        <div style={grid}>
          <div style={card}>📊 Comparar seguradoras</div>
          <div style={card}>🛠 Ajustar cobertura</div>
          <div style={card}>📉 Escolher franquia ideal</div>
          <div style={card}>👨‍💼 Análise personalizada</div>
        </div>

        <p>
          Nós fazemos todo esse processo para garantir o melhor preço para você.
        </p>
      </section>

      {/* BENEFÍCIOS */}
      <section style={container}>
        <h2>Vale a pena fazer seguro para Nivus?</h2>

        <p>
          Sim. Por ser um carro de maior valor, o Nivus pode gerar prejuízos altos
          em caso de acidente ou roubo.
        </p>

        <p>
          O seguro garante proteção financeira e mais tranquilidade no dia a dia.
        </p>
      </section>

      {/* PROVA SOCIAL */}
      <section style={container}>
        <h2>Mais de 2.400 clientes já confiaram</h2>

        <p>
          Já ajudamos milhares de clientes em Limeira a encontrar o melhor seguro
          com economia e atendimento rápido.
        </p>
      </section>

      {/* FAQ */}
      <section style={container}>
        <h2>Perguntas frequentes</h2>

        <h3>Seguro Nivus é caro?</h3>
        <p>Depende do perfil, mas pode ter bom custo-benefício.</p>

        <h3>Posso parcelar?</h3>
        <p>Sim, em até 12x.</p>

        <h3>Seguro cobre perda total?</h3>
        <p>Sim, dependendo da cobertura.</p>

        <h3>Demora para contratar?</h3>
        <p>Não, é rápido e simples.</p>
      </section>

      {/* CTA FINAL */}
      <section style={container}>
        <h2 style={{ color: "red" }}>⚠️ Condições especiais disponíveis</h2>

        <p style={{ fontWeight: "bold" }}>
          Aproveite agora e faça sua cotação antes que os valores mudem.
        </p>

        <a href="https://wa.me/5519998722063" target="_blank" style={btn}>
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

const btn = {
  display: "inline-block",
  background: "#25D366",
  color: "#fff",
  padding: "16px 26px",
  borderRadius: "10px",
  fontWeight: "bold",
  marginTop: "20px",
  textDecoration: "none",
  fontSize: "18px",
};

const btnSmall = {
  display: "inline-block",
  background: "#25D366",
  color: "#fff",
  padding: "12px 20px",
  borderRadius: "8px",
  fontWeight: "bold",
  marginTop: "10px",
  textDecoration: "none",
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