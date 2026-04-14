import SchemaAuto from "@/components/SchemaAuto";
export const metadata = {
  title: "Seguro Corolla Cross em Limeira | Cotação rápida e até 30% mais barato",
  description:
    "Seguro para Toyota Corolla Cross com cotação rápida em Limeira. Compare seguradoras e economize até 30%.",
};

export default function Page() {
  return (
    <main style={{ background: "#f5f7fa" }}>

        <SchemaAuto carName="Toyota Corolla Cross" />

      {/* HERO */}
      <section style={container}>
        <h1>Seguro para Corolla Cross em Limeira</h1>

        <p style={highlight}>
          ✔️ Cotação rápida e personalizada <br />
          ✔️ Compare as melhores seguradoras <br />
          ✔️ Economia de até 30%
        </p>

        <p style={social}>
          ⭐ Mais de 2.400 clientes atendidos <br />
          ⭐ Avaliação 4.9 no Google
        </p>

        <p>
          Se você tem um Toyota Corolla Cross, proteger seu carro com um seguro completo
          é essencial para evitar prejuízos com roubo, colisões e danos a terceiros.
        </p>

        <p>
          Além disso, por se tratar de um SUV moderno e de alto valor, qualquer imprevisto
          pode gerar um custo elevado. Por isso, o seguro se torna uma decisão estratégica
          para manter sua tranquilidade no dia a dia.
        </p>

        <a href="https://wa.me/5519998722063" target="_blank" style={btnBig}>
          🚀 Fazer cotação do meu Corolla Cross agora
        </a>

        <div style={box}>
          <p style={{ fontWeight: "bold" }}>📲 Cotação rápida no WhatsApp</p>
          <ul>
            <li>✔️ Atendimento imediato</li>
            <li>✔️ Sem compromisso</li>
            <li>✔️ Melhor preço garantido</li>
            <li>✔️ Especialista em seguro de Corolla Cross</li>
          </ul>
        </div>

        <p style={urgency}>
          ⚠️ Condições especiais disponíveis esse mês
        </p>
      </section>

      {/* SOBRE */}
      <section style={container}>
        <h2>Por que fazer seguro para Corolla Cross?</h2>

        <p>
          O Corolla Cross é um dos SUVs mais procurados da Toyota, conhecido pelo conforto,
          tecnologia e confiabilidade. Justamente por isso, ele possui um alto valor de mercado.
        </p>

        <p>
          Em caso de colisão ou roubo, o prejuízo pode ser significativo, principalmente por conta
          do custo elevado de peças e manutenção.
        </p>

        <p>
          Ter um seguro garante proteção contra esses imprevistos e evita gastos inesperados.
        </p>

        <p>
          Além disso, o seguro também cobre danos a terceiros, o que pode evitar problemas
          financeiros ainda maiores em caso de acidentes.
        </p>
      </section>

      {/* PREÇO */}
      <section style={container}>
        <h2>Quanto custa o seguro do Corolla Cross?</h2>

        <p>
          O valor pode variar bastante dependendo do perfil do motorista.
        </p>

        <p>
          Em média, o seguro do Corolla Cross custa entre 
          <strong> R$ 2.500 e R$ 6.000 por ano</strong>.
        </p>

        <p>
          Esse valor depende de fatores como idade, tempo de habilitação, local onde mora
          e frequência de uso do veículo.
        </p>

        <p>
          Por isso, o ideal é sempre fazer uma cotação personalizada para descobrir o valor exato.
        </p>

        <a href="https://wa.me/5519998722063" target="_blank" style={btn}>
          👉 Descobrir valor exato agora
        </a>
      </section>

      {/* FATORES */}
      <section style={container}>
        <h2>O que influencia o preço?</h2>

        <p>
          As seguradoras analisam diversos fatores antes de definir o valor do seguro.
        </p>

        <div style={grid}>
          <div style={card}>Idade do motorista</div>
          <div style={card}>Tempo de habilitação</div>
          <div style={card}>Região (Limeira)</div>
          <div style={card}>Uso do veículo</div>
        </div>

        <p>
          Motoristas mais jovens ou com pouca experiência tendem a pagar mais caro.
        </p>

        <p>
          Já perfis com histórico positivo e uso moderado do veículo costumam ter valores mais baixos.
        </p>
      </section>

      {/* COBERTURA */}
      <section style={container}>
        <h2>O que o seguro do Corolla Cross cobre?</h2>

        <p>
          Um seguro completo oferece proteção contra os principais riscos do dia a dia.
        </p>

        <div style={grid}>
          <div style={card}>🚗 Roubo e furto</div>
          <div style={card}>💥 Colisão</div>
          <div style={card}>👥 Danos a terceiros</div>
          <div style={card}>🛠️ Assistência 24h</div>
        </div>

        <p>
          Dependendo do plano, também é possível incluir carro reserva, proteção de vidros
          e assistência ampliada.
        </p>
      </section>

      {/* ECONOMIA */}
      <section style={container}>
        <h2>Como economizar no seguro do Corolla Cross?</h2>

        <p>
          Existem algumas estratégias simples que podem reduzir bastante o valor do seguro.
        </p>

        <div style={grid}>
          <div style={card}>Comparar seguradoras</div>
          <div style={card}>Ajustar cobertura</div>
          <div style={card}>Escolher franquia ideal</div>
          <div style={card}>Análise personalizada</div>
        </div>

        <p>
          Pequenos ajustes podem gerar uma economia significativa no valor final.
        </p>

        <p>
          Por isso, contar com um especialista faz toda a diferença na hora da cotação.
        </p>
      </section>

      {/* INTERLINK */}
      <section style={container}>
        <h3>Veja também:</h3>

        <ul>
          <li><a href="/seguro-corolla-cross-quanto-custa">Quanto custa seguro Corolla Cross</a></li>
          <li><a href="/seguro-corolla-cross-barato">Seguro Corolla Cross barato</a></li>
          <li><a href="/seguro-corolla-cross-motorista-novo">Seguro Corolla Cross motorista novo</a></li>
        </ul>
      </section>

      {/* FINAL */}
      <section style={container}>
        <h2>Faça sua cotação agora</h2>

        <p style={{ fontWeight: "bold", fontSize: "18px" }}>
          Descubra quanto você vai pagar no seguro do seu Corolla Cross.
        </p>

        <p>
          A cotação é rápida, gratuita e você pode economizar bastante escolhendo
          a melhor opção para o seu perfil.
        </p>

        <a href="https://wa.me/5519998722063" target="_blank" style={btnBig}>
          👉 Falar com especialista
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