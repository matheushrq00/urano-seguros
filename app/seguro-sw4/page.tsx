import SchemaAuto from "@/components/SchemaAuto";
export const metadata = {
  title: "Seguro SW4 em Limeira | Cotação com Melhor Proteção",
  description:
    "Seguro para Toyota SW4 em Limeira com as melhores seguradoras. Proteja seu SUV com segurança e faça sua cotação agora.",
};

export default function Page() {
  return (
    <main style={{ background: "#f5f7fa" }}>

        <SchemaAuto carName="SW4" />

      {/* HERO */}
      <section style={container}>
        <h1>Seguro SW4 em Limeira com Proteção Completa</h1>

        <p style={highlight}>
          ✔️ Seguro completo para Toyota SW4 <br />
          ✔️ Proteção contra roubo, colisões e danos <br />
          ✔️ Atendimento especializado e rápido
        </p>

        <p>
          Se você possui uma <strong>Toyota SW4</strong>, sabe que está lidando com
          um veículo de alto padrão. Por isso, proteger seu patrimônio com um
          seguro adequado é essencial.
        </p>

        <p>
          Aqui você pode fazer sua cotação de <strong>seguro SW4 em Limeira</strong>,
          comparar diversas seguradoras e encontrar a melhor opção com segurança,
          cobertura completa e excelente custo-benefício.
        </p>

        <a href="https://wa.me/5519998722063" target="_blank" style={btn}>
          🚀 Ver preço do meu seguro SW4
        </a>
      </section>

      {/* PREÇO */}
      <section style={container}>
        <h2>Quanto custa o seguro da SW4 em Limeira?</h2>

        <p>
          O valor do seguro pode variar entre <strong>R$ 4.000 e R$ 10.000 por ano</strong>,
          dependendo do perfil do motorista, versão do veículo e região.
        </p>

        <p>
          Por se tratar de um SUV de alto valor, o seguro da SW4 exige uma análise
          mais detalhada, considerando fatores de risco e proteção completa.
        </p>

        <p>
          Com a cotação correta, é possível encontrar opções equilibradas entre
          preço e cobertura.
        </p>

        <p><strong>👉 Quer saber o valor exato?</strong></p>

        <a href="https://wa.me/5519998722063" target="_blank" style={btnSmall}>
          👉 Ver valor do meu seguro agora
        </a>
      </section>

      {/* COMO FUNCIONA */}
      <section style={container}>
        <h2>Como funciona a cotação do seguro SW4?</h2>

        <div style={grid}>
          <div style={card}>1️⃣ Envie seus dados</div>
          <div style={card}>2️⃣ Análise personalizada</div>
          <div style={card}>3️⃣ Cotação em seguradoras</div>
          <div style={card}>4️⃣ Escolha a melhor cobertura</div>
        </div>

        <p>
          Em poucos minutos você já pode avaliar diferentes opções de seguro para sua SW4.
        </p>
      </section>

      {/* COBERTURA */}
      <section style={container}>
        <h2>O que o seguro da SW4 cobre?</h2>

        <div style={grid}>
          <div style={card}>🚗 Roubo e furto</div>
          <div style={card}>💥 Colisão</div>
          <div style={card}>👥 Danos a terceiros</div>
          <div style={card}>🛠️ Assistência 24h</div>
        </div>

        <p>
          Também é possível incluir coberturas adicionais como carro reserva,
          assistência premium e proteção ampliada.
        </p>
      </section>

      {/* IMPORTÂNCIA */}
      <section style={container}>
        <h2>Por que o seguro para SW4 é indispensável?</h2>

        <p>
          A SW4 é um veículo de alto valor e bastante visado. Qualquer incidente,
          como colisão ou roubo, pode gerar prejuízos elevados.
        </p>

        <p>
          Além disso, o custo de peças e manutenção tende a ser mais alto, o que
          torna o seguro ainda mais importante.
        </p>

        <p>
          Com um seguro adequado, você garante proteção financeira e tranquilidade.
        </p>
      </section>

      {/* FATORES */}
      <section style={container}>
        <h2>O que influencia o preço do seguro SW4?</h2>

        <ul>
          <li>Idade do motorista</li>
          <li>Versão e ano da SW4</li>
          <li>Localização (Limeira e região)</li>
          <li>Perfil de uso</li>
          <li>Histórico de sinistros</li>
        </ul>

        <p>
          Cada fator impacta diretamente no valor final da apólice.
        </p>
      </section>

      {/* ECONOMIA */}
      <section style={container}>
        <h2>Como encontrar o melhor custo-benefício?</h2>

        <div style={grid}>
          <div style={card}>📊 Comparar seguradoras</div>
          <div style={card}>🛠 Ajustar cobertura</div>
          <div style={card}>📉 Escolher franquia ideal</div>
          <div style={card}>👨‍💼 Análise especializada</div>
        </div>

        <p>
          Nós realizamos toda essa análise para garantir a melhor opção para você.
        </p>
      </section>

      {/* PROVA SOCIAL */}
      <section style={container}>
        <h2>Mais de 2.400 clientes já confiaram</h2>

        <p>
          Atendimento especializado, rápido e focado na melhor solução para cada cliente.
        </p>
      </section>

      {/* FAQ */}
      <section style={container}>
        <h2>Perguntas frequentes</h2>

        <h3>Seguro SW4 é caro?</h3>
        <p>Depende do perfil, mas é essencial para proteção de um veículo premium.</p>

        <h3>Posso parcelar?</h3>
        <p>Sim, normalmente em até 12x.</p>

        <h3>Seguro cobre perda total?</h3>
        <p>Sim, dependendo da cobertura contratada.</p>

        <h3>Demora para contratar?</h3>
        <p>Não, o processo é rápido e pode ser feito online.</p>
      </section>

      {/* CTA FINAL */}
      <section style={container}>
        <h2 style={{ color: "red" }}>⚠️ Condições especiais disponíveis</h2>

        <p style={{ fontWeight: "bold" }}>
          Aproveite agora e proteja sua SW4 com segurança e tranquilidade.
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