export const metadata = {
  title: "Seguro Auto em Campinas | Cotação com até 30% de Desconto",
  description:
    "Seguro auto em Campinas com melhor preço. Compare seguradoras, economize até 30% e faça sua cotação rápida pelo WhatsApp.",
};

export default function Page() {
  return (
    <main style={{ background: "#f5f7fa" }}>

      {/* HERO */}
      <section style={container}>
        <h1>Seguro Auto em Campinas com Melhor Preço e Cotação Rápida</h1>

        <p style={highlight}>
          ✔️ Compare as melhores seguradoras em minutos <br />
          ✔️ Economize até 30% no seguro do seu carro <br />
          ✔️ Atendimento rápido e sem compromisso
        </p>

        <p>
          Se você está buscando <strong>seguro auto em Campinas</strong>, aqui você
          encontra uma solução completa para proteger seu veículo com o melhor preço.
          Trabalhamos com diversas seguradoras e analisamos o seu perfil para encontrar
          a melhor opção disponível.
        </p>

        <p>
          Campinas é uma cidade com grande circulação de veículos, o que aumenta
          o risco de acidentes, roubos e imprevistos. Por isso, contar com um seguro
          de carro confiável é essencial para sua tranquilidade.
        </p>

        <a href="https://wa.me/5519998722063" target="_blank" style={btn}>
          🚀 Fazer cotação agora no WhatsApp
        </a>
      </section>

      {/* EXPLICAÇÃO */}
      <section style={container}>
        <h2>Como funciona o seguro auto em Campinas?</h2>

        <p>
          O seguro auto funciona como uma proteção financeira. Em caso de roubo,
          furto, colisão ou danos a terceiros, a seguradora cobre os prejuízos
          conforme o plano contratado.
        </p>

        <p>
          Ao fazer uma cotação de <strong>seguro de carro em Campinas</strong>,
          analisamos diversas seguradoras para encontrar a melhor combinação entre
          preço e cobertura.
        </p>

        <div style={grid}>
          <div style={card}>1️⃣ Envie seus dados</div>
          <div style={card}>2️⃣ Análise do perfil</div>
          <div style={card}>3️⃣ Cotação nas seguradoras</div>
          <div style={card}>4️⃣ Escolha a melhor opção</div>
        </div>
      </section>

      {/* PREÇO */}
      <section style={container}>
        <h2>Quanto custa o seguro auto em Campinas?</h2>

        <p>
          O valor do seguro pode variar entre <strong>R$ 1.300 e R$ 3.800 por ano</strong>,
          dependendo do perfil do motorista e do veículo.
        </p>

        <p>
          Em regiões com maior índice de roubo, como algumas áreas de Campinas,
          o valor pode ser mais alto. Por isso, a cotação personalizada é essencial.
        </p>

        <p><strong>👉 Quer saber o valor exato?</strong></p>

        <a href="https://wa.me/5519998722063" target="_blank" style={btnSmall}>
          👉 Ver valor do meu seguro agora
        </a>
      </section>

      {/* FATORES */}
      <section style={container}>
        <h2>O que influencia o preço do seguro?</h2>

        <ul>
          <li>Idade do motorista</li>
          <li>Modelo e ano do veículo</li>
          <li>Região de circulação em Campinas</li>
          <li>Histórico de sinistros</li>
          <li>Uso do veículo</li>
        </ul>

        <p>
          Cada detalhe pode impactar diretamente no valor final do seguro.
        </p>
      </section>

      {/* ECONOMIA */}
      <section style={container}>
        <h2>Como economizar no seguro auto em Campinas?</h2>

        <p>
          Existem formas inteligentes de reduzir o valor do seguro:
        </p>

        <div style={grid}>
          <div style={card}>📊 Comparar seguradoras</div>
          <div style={card}>🛠 Ajustar cobertura</div>
          <div style={card}>📉 Escolher franquia ideal</div>
          <div style={card}>👨‍💼 Análise personalizada</div>
        </div>

        <p>
          Nós cuidamos de todo esse processo para garantir o melhor custo-benefício.
        </p>
      </section>

      {/* IMPORTÂNCIA */}
      <section style={container}>
        <h2>Vale a pena contratar seguro auto em Campinas?</h2>

        <p>
          Sim. O seguro auto protege contra prejuízos financeiros elevados e garante
          tranquilidade no dia a dia.
        </p>

        <p>
          Em uma cidade movimentada como Campinas, o risco de acidentes e imprevistos
          é real, tornando o seguro uma escolha inteligente.
        </p>
      </section>

      {/* PROVA SOCIAL */}
      <section style={container}>
        <h2>Mais de 2.400 clientes já confiaram</h2>

        <p>
          Já ajudamos milhares de clientes a economizar no seguro auto com atendimento
          rápido e transparente.
        </p>
      </section>

      {/* FAQ */}
      <section style={container}>
        <h2>Perguntas frequentes</h2>

        <h3>Seguro cobre roubo?</h3>
        <p>Sim, a maioria das apólices cobre roubo e furto.</p>

        <h3>Seguro cobre perda total?</h3>
        <p>Sim, dependendo da cobertura.</p>

        <h3>Posso parcelar?</h3>
        <p>Sim, em até 12x.</p>

        <h3>Demora para contratar?</h3>
        <p>Não, o processo é rápido.</p>
      </section>

      {/* INTERLINK */}
      <section style={container}>
        <h3>Veja também:</h3>

        <ul>
          <li><a href="/cotacao-seguro-auto">Cotação de seguro auto</a></li>
          <li><a href="/seguro-auto-barato">Seguro auto barato</a></li>
          <li><a href="/seguro-para-motorista-app">Seguro para motorista de aplicativo</a></li>
        </ul>
      </section>

      {/* CTA FINAL */}
      <section style={container}>
        <h2 style={{ color: "red" }}>⚠️ Condições especiais esse mês</h2>

        <p style={{ fontWeight: "bold" }}>
          Aproveite agora e faça sua cotação antes que os valores aumentem.
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