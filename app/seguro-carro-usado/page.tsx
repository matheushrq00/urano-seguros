export const metadata = {
  title: "Seguro para Carro Usado em Limeira | Cotação com Melhor Preço",
  description:
    "Seguro para carro usado em Limeira com até 30% de economia. Faça sua cotação rápida e compare seguradoras pelo WhatsApp.",
};

export default function Page() {
  return (
    <main style={{ background: "#f5f7fa" }}>

      {/* HERO */}
      <section style={container}>
        <h1>Seguro para Carro Usado em Limeira com Melhor Preço</h1>

        <p style={highlight}>
          ✔️ Proteja seu carro usado com segurança <br />
          ✔️ Compare seguradoras e economize até 30% <br />
          ✔️ Cotação rápida e sem compromisso
        </p>

        <p>
          Comprou ou está pensando em comprar um carro usado? Fazer um
          <strong> seguro para carro usado em Limeira</strong> é essencial para
          evitar prejuízos com roubo, acidentes ou danos inesperados.
        </p>

        <p>
          Aqui você pode fazer sua cotação de seguro auto de forma rápida,
          comparar várias seguradoras e encontrar o melhor custo-benefício
          para o seu veículo.
        </p>

        <a href="https://wa.me/5519998722063" target="_blank" style={btn}>
          🚀 Ver preço do meu seguro agora
        </a>
      </section>

      {/* EXPLICAÇÃO */}
      <section style={container}>
        <h2>Vale a pena fazer seguro para carro usado?</h2>

        <p>
          Sim, e em muitos casos é ainda mais importante. Um carro usado pode
          ter maior risco de manutenção e imprevistos, além de ainda estar sujeito
          a roubo, furto e colisões.
        </p>

        <p>
          O seguro garante proteção financeira e evita que você tenha que arcar
          com prejuízos altos em caso de acidente ou perda total.
        </p>

        <p>
          Mesmo veículos com alguns anos de uso podem ter um seguro com ótimo
          custo-benefício.
        </p>
      </section>

      {/* PREÇO */}
      <section style={container}>
        <h2>Quanto custa o seguro para carro usado em Limeira?</h2>

        <p>
          O valor do <strong>seguro de carro usado</strong> pode variar entre
          <strong> R$ 1.200 e R$ 3.000 por ano</strong>, dependendo do modelo,
          idade do veículo e perfil do motorista.
        </p>

        <p>
          Carros mais antigos costumam ter seguro mais barato, mas isso depende
          de fatores como índice de roubo e custo de peças.
        </p>

        <p><strong>👉 Quer saber o valor exato no seu caso?</strong></p>

        <a href="https://wa.me/5519998722063" target="_blank" style={btnSmall}>
          👉 Ver valor do meu seguro
        </a>
      </section>

      {/* COMO FUNCIONA */}
      <section style={container}>
        <h2>Como funciona a cotação de seguro para carro usado?</h2>

        <div style={grid}>
          <div style={card}>1️⃣ Envie seus dados</div>
          <div style={card}>2️⃣ Analisamos seu perfil</div>
          <div style={card}>3️⃣ Cotamos nas seguradoras</div>
          <div style={card}>4️⃣ Você escolhe o melhor preço</div>
        </div>

        <p>
          Em poucos minutos você já pode receber opções personalizadas para seu veículo.
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

        <p>
          Dependendo do plano escolhido, você pode incluir coberturas adicionais
          conforme sua necessidade.
        </p>
      </section>

      {/* FATORES */}
      <section style={container}>
        <h2>O que influencia o preço do seguro?</h2>

        <ul>
          <li>Idade do motorista</li>
          <li>Modelo e ano do carro</li>
          <li>Região onde o veículo circula</li>
          <li>Histórico de sinistros</li>
        </ul>

        <p>
          Cada detalhe impacta no valor final, por isso a cotação personalizada
          é essencial.
        </p>
      </section>

      {/* ECONOMIA */}
      <section style={container}>
        <h2>Como pagar mais barato no seguro?</h2>

        <div style={grid}>
          <div style={card}>📊 Comparar seguradoras</div>
          <div style={card}>🛠 Ajustar cobertura</div>
          <div style={card}>📉 Escolher franquia ideal</div>
          <div style={card}>👨‍💼 Análise personalizada</div>
        </div>

        <p>
          Pequenos ajustes podem gerar grande economia no valor final do seguro.
        </p>
      </section>

      {/* PROVA SOCIAL */}
      <section style={container}>
        <h2>Mais de 2.400 clientes já confiaram</h2>

        <p>
          Já ajudamos milhares de clientes em Limeira a encontrar o melhor seguro
          com economia e segurança.
        </p>
      </section>

      {/* FAQ */}
      <section style={container}>
        <h2>Perguntas frequentes</h2>

        <h3>Seguro para carro usado é mais barato?</h3>
        <p>Na maioria dos casos sim, mas depende do modelo e perfil.</p>

        <h3>Vale a pena para carro antigo?</h3>
        <p>Sim, principalmente para evitar prejuízos com terceiros.</p>

        <h3>Posso parcelar?</h3>
        <p>Sim, normalmente em até 12x.</p>

        <h3>Seguro cobre perda total?</h3>
        <p>Sim, dependendo da cobertura escolhida.</p>
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