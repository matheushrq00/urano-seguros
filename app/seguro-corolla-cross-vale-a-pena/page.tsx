import SchemaAuto from "@/components/SchemaAuto";
export const metadata = {
  title: "Seguro Corolla Cross vale a pena? Veja quando compensa",
  description:
    "Descubra se vale a pena fazer seguro do Corolla Cross, quanto custa e quando compensa contratar.",
};

export default function Page() {
  return (
    <main style={{ background: "#f5f7fa" }}>

        <SchemaAuto carName="Toyota Corolla Cross" />

      {/* HERO */}
      <section style={container}>
        <h1>Seguro Corolla Cross vale a pena?</h1>

        <p style={highlight}>
          ✔️ Entenda quando compensa <br />
          ✔️ Veja custos reais <br />
          ✔️ Descubra se é ideal para você
        </p>

        <p style={social}>
          ⭐ Mais de 2.400 clientes atendidos <br />
          ⭐ Avaliação 4.9 no Google
        </p>

        <p>
          Se você está em dúvida se vale a pena fazer seguro para o Corolla Cross,
          saiba que essa é uma das decisões mais importantes para proteger seu patrimônio.
        </p>

        <p>
          Aqui você vai entender quando realmente compensa contratar e quando pode não ser tão necessário.
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
            <li>✔️ Melhor custo-benefício</li>
          </ul>
        </div>

        <p style={urgency}>
          ⚠️ Condições especiais disponíveis este mês
        </p>
      </section>

      {/* RESPOSTA DIRETA */}
      <section style={container}>
        <h2>Vale a pena fazer seguro do Corolla Cross?</h2>

        <p>
          <strong>Na maioria dos casos, sim.</strong>
        </p>

        <p>
          O Corolla Cross é um SUV de alto valor de mercado, com custo elevado de reparo,
          o que torna o seguro uma proteção essencial contra prejuízos financeiros.
        </p>

        <p>
          Um simples acidente ou roubo pode gerar um prejuízo muito maior do que o valor anual do seguro.
        </p>
      </section>

      {/* QUANDO VALE */}
      <section style={container}>
        <h2>Quando vale a pena contratar?</h2>

        <div style={grid}>
          <div style={card}>Carro com alto valor de mercado</div>
          <div style={card}>Uso diário frequente</div>
          <div style={card}>Região com risco de roubo</div>
          <div style={card}>Quer evitar prejuízos altos</div>
        </div>

        <p>
          Nesses cenários, o seguro é praticamente indispensável.
        </p>
      </section>

      {/* QUANDO NÃO */}
      <section style={container}>
        <h2>Quando pode não valer tanto a pena?</h2>

        <div style={grid}>
          <div style={card}>Uso muito raro</div>
          <div style={card}>Perfil de baixo risco</div>
          <div style={card}>Garagem extremamente segura</div>
          <div style={card}>Baixa exposição a trânsito</div>
        </div>

        <p>
          Mesmo assim, é sempre importante analisar com um especialista antes de decidir.
        </p>
      </section>

      {/* PREÇO */}
      <section style={container}>
        <h2>Quanto custa o seguro do Corolla Cross?</h2>

        <p>
          O valor pode variar entre 
          <strong> R$ 2.500 e R$ 6.000 por ano</strong>.
        </p>

        <p>
          Considerando o valor do carro, esse investimento costuma valer muito a pena.
        </p>

        <a href="https://wa.me/5519998722063" target="_blank" style={btn}>
          👉 Descobrir valor exato agora
        </a>
      </section>

      {/* CTA */}
      <section style={container}>
        <h2>Quer saber se vale a pena no seu caso?</h2>

        <p style={{ fontWeight: "bold" }}>
          Faça uma análise personalizada agora mesmo.
        </p>

        <a href="https://wa.me/5519998722063" target="_blank" style={btnBig}>
          👉 Fazer cotação grátis
        </a>
      </section>

      {/* CONCLUSÃO */}
      <section style={container}>
        <h2>Conclusão: fazer ou não o seguro?</h2>

        <p>
          Para a maioria das pessoas, o seguro do Corolla Cross vale a pena sim,
          principalmente pelo custo-benefício e segurança.
        </p>

        <p>
          O ideal é fazer uma cotação e avaliar o seu perfil específico.
        </p>
      </section>

      {/* INTERLINK */}
      <section style={container}>
        <h3>Veja também:</h3>

        <ul>
          <li><a href="/seguro-corolla-cross">Seguro Corolla Cross</a></li>
          <li><a href="/seguro-corolla-cross-barato">Seguro barato</a></li>
          <li><a href="/seguro-corolla-cross-quanto-custa">Quanto custa</a></li>
        </ul>
      </section>

      {/* FINAL */}
      <section style={container}>
        <h2 style={{ color: "red" }}>⚠️ Descubra o melhor cenário agora</h2>

        <p style={{ fontWeight: "bold", fontSize: "18px" }}>
          Veja quanto custa e se vale a pena no seu caso.
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