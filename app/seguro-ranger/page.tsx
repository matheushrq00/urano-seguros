import SchemaAuto from "@/components/SchemaAuto";
export const metadata = {
  title: "Seguro Ranger em Limeira | Cotação com Melhor Preço",
  description:
    "Seguro para Ford Ranger em Limeira com as melhores seguradoras. Proteja sua caminhonete e economize na cotação.",
};

export default function Page() {
  return (
    <main style={{ background: "#f5f7fa" }}>

        <SchemaAuto carName="Ranger" />

      {/* HERO */}
      <section style={container}>
        <h1>Seguro Ranger em Limeira com Melhor Proteção</h1>

        <p style={highlight}>
          ✔️ Seguro completo para Ford Ranger <br />
          ✔️ Proteção contra roubo, colisões e danos <br />
          ✔️ Cotação rápida com as melhores seguradoras
        </p>

        <p>
          Se você tem uma <strong>Ford Ranger</strong>, sabe que está lidando com
          um veículo robusto, de alto valor e muito visado. Por isso, contar com
          um seguro adequado é essencial para proteger seu patrimônio.
        </p>

        <p>
          Aqui você pode fazer sua cotação de <strong>seguro Ranger em Limeira</strong>,
          comparar diversas seguradoras e encontrar a melhor opção com segurança
          e custo-benefício.
        </p>

        <a href="https://wa.me/5519998722063" target="_blank" style={btn}>
          🚀 Ver preço do meu seguro Ranger
        </a>
      </section>

      {/* PREÇO */}
      <section style={container}>
        <h2>Quanto custa o seguro da Ranger em Limeira?</h2>

        <p>
          O valor do seguro pode variar entre <strong>R$ 3.000 e R$ 7.500 por ano</strong>,
          dependendo do perfil do motorista, versão da Ranger e região.
        </p>

        <p>
          Por ser uma caminhonete de alto valor e bastante utilizada tanto na cidade
          quanto no campo, o seguro é fundamental para evitar prejuízos elevados.
        </p>

        <p><strong>👉 Quer saber o valor exato no seu caso?</strong></p>

        <a href="https://wa.me/5519998722063" target="_blank" style={btnSmall}>
          👉 Ver valor do meu seguro agora
        </a>
      </section>

      {/* COMO FUNCIONA */}
      <section style={container}>
        <h2>Como funciona a cotação do seguro Ranger?</h2>

        <div style={grid}>
          <div style={card}>1️⃣ Envie seus dados</div>
          <div style={card}>2️⃣ Analisamos seu perfil</div>
          <div style={card}>3️⃣ Cotamos nas seguradoras</div>
          <div style={card}>4️⃣ Você escolhe a melhor opção</div>
        </div>

        <p>
          Em poucos minutos você já pode comparar diferentes opções de seguro para sua Ranger.
        </p>
      </section>

      {/* COBERTURA */}
      <section style={container}>
        <h2>O que o seguro da Ranger cobre?</h2>

        <div style={grid}>
          <div style={card}>🚗 Roubo e furto</div>
          <div style={card}>💥 Colisão</div>
          <div style={card}>👥 Danos a terceiros</div>
          <div style={card}>🛠️ Assistência 24h</div>
        </div>

        <p>
          Também é possível incluir coberturas adicionais como carro reserva,
          proteção ampliada e assistência completa.
        </p>
      </section>

      {/* IMPORTÂNCIA */}
      <section style={container}>
        <h2>Por que é importante ter seguro para Ranger?</h2>

        <p>
          A Ranger é uma caminhonete versátil e muito utilizada tanto para trabalho
          quanto lazer. Isso aumenta sua exposição a riscos como acidentes e roubos.
        </p>

        <p>
          Sem seguro, qualquer imprevisto pode gerar prejuízos elevados. Com um bom
          seguro, você garante proteção financeira e tranquilidade.
        </p>
      </section>

      {/* FATORES */}
      <section style={container}>
        <h2>O que influencia o preço do seguro Ranger?</h2>

        <ul>
          <li>Idade do motorista</li>
          <li>Versão e ano da Ranger</li>
          <li>Localização (Limeira e região)</li>
          <li>Perfil de uso</li>
          <li>Histórico de sinistros</li>
        </ul>

        <p>
          Cada fator pode impactar significativamente no valor final do seguro.
        </p>
      </section>

      {/* ECONOMIA */}
      <section style={container}>
        <h2>Como pagar mais barato no seguro Ranger?</h2>

        <div style={grid}>
          <div style={card}>📊 Comparar seguradoras</div>
          <div style={card}>🛠 Ajustar cobertura</div>
          <div style={card}>📉 Escolher franquia ideal</div>
          <div style={card}>👨‍💼 Análise personalizada</div>
        </div>

        <p>
          Nós fazemos todo esse processo para garantir o melhor custo-benefício.
        </p>
      </section>

      {/* PROVA SOCIAL */}
      <section style={container}>
        <h2>Mais de 2.400 clientes já confiaram</h2>

        <p>
          Atendimento rápido, transparente e focado no melhor preço.
        </p>
      </section>

      {/* FAQ */}
      <section style={container}>
        <h2>Perguntas frequentes</h2>

        <h3>Seguro Ranger é caro?</h3>
        <p>Depende do perfil, mas é essencial para proteção.</p>

        <h3>Posso parcelar?</h3>
        <p>Sim, normalmente em até 12x.</p>

        <h3>Seguro cobre perda total?</h3>
        <p>Sim, dependendo da cobertura.</p>

        <h3>Demora para contratar?</h3>
        <p>Não, o processo é rápido.</p>
      </section>

      {/* CTA FINAL */}
      <section style={container}>
        <h2 style={{ color: "red" }}>⚠️ Condições especiais disponíveis</h2>

        <p style={{ fontWeight: "bold" }}>
          Aproveite agora e proteja sua Ranger com o melhor seguro.
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