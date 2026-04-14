import SchemaAuto from "@/components/SchemaAuto";
export const metadata = {
  title: "Seguro Polo vale a pena? Veja quando compensa",
  description:
    "Descubra se vale a pena fazer seguro do Polo, quanto custa e quando compensa contratar.",
};

export default function Page() {
  return (
    <main style={{ background: "#f5f7fa" }}>
        
        <SchemaAuto carName="Polo" />

      {/* HERO */}
      <section style={container}>
        <h1>Seguro Polo vale a pena?</h1>

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
          Se você está em dúvida se vale a pena fazer seguro para o Polo,
          saiba que essa é uma decisão importante para proteger seu carro e seu bolso.
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
        <h2>Vale a pena fazer seguro do Polo?</h2>

        <p>
          <strong>Na maioria dos casos, sim.</strong>
        </p>

        <p>
          Mesmo sendo um carro mais acessível que SUVs, o Polo ainda possui um valor
          considerável e custo de reparo que pode pesar no bolso.
        </p>

        <p>
          Um acidente simples ou um roubo pode gerar um prejuízo maior do que o valor anual do seguro.
        </p>
      </section>

      {/* QUANDO VALE */}
      <section style={container}>
        <h2>Quando vale a pena contratar?</h2>

        <div style={grid}>
          <div style={card}>Uso diário frequente</div>
          <div style={card}>Região com trânsito intenso</div>
          <div style={card}>Risco de roubo</div>
          <div style={card}>Quer evitar prejuízos financeiros</div>
        </div>

        <p>
          Nesses cenários, o seguro é altamente recomendado.
        </p>
      </section>

      {/* QUANDO NÃO */}
      <section style={container}>
        <h2>Quando pode não valer tanto a pena?</h2>

        <div style={grid}>
          <div style={card}>Uso muito raro</div>
          <div style={card}>Garagem extremamente segura</div>
          <div style={card}>Baixo risco de exposição</div>
          <div style={card}>Perfil muito conservador</div>
        </div>

        <p>
          Mesmo assim, é sempre importante fazer uma análise antes de decidir.
        </p>
      </section>

      {/* PREÇO */}
      <section style={container}>
        <h2>Quanto custa o seguro do Polo?</h2>

        <p>
          O valor pode variar entre 
          <strong> R$ 1.500 e R$ 3.500 por ano</strong>.
        </p>

        <p>
          Considerando os riscos, esse investimento costuma valer a pena.
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
          Para a maioria das pessoas, o seguro do Polo vale a pena sim,
          principalmente pela proteção financeira e tranquilidade.
        </p>

        <p>
          O ideal é sempre fazer uma cotação e avaliar o seu perfil.
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