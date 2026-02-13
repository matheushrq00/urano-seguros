import Link from "next/link";
import ObrigadoTracking from "./ObrigadoTracking";


export const metadata = {
  title: "Obrigado! | Urano Seguros",
  description:
    "Recebemos sua solicitação. Em instantes um corretor da Urano Seguros vai te atender pelo WhatsApp.",
};

const WHATSAPP_LINK =
  "https://wa.me/5519998722063?text=";

export default function ObrigadoPage() {
  return (
    <main className="section">
          <ObrigadoTracking />
      <div className="container" style={{ maxWidth: 860 }}>
        <div className="card" style={{ padding: 28, textAlign: "center" }}>
          <div style={{ fontSize: 42, marginBottom: 8 }}>✅</div>

          <h1 style={{ fontSize: 28, margin: "0 0 10px" }}>
            Recebemos sua solicitação!
          </h1>

          <p style={{ margin: "0 0 18px", opacity: 0.9, lineHeight: 1.6 }}>
            Obrigado por escolher a <strong>Urano Seguros</strong>.
            <br />
            Nossa equipe vai te atender o quanto antes.
          </p>

          <div style={{ display: "grid", gap: 12, justifyContent: "center", marginTop: 14 }}>
            <a className="btn" href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
              Falar agora no WhatsApp
            </a>

            <div style={{ fontSize: 14, opacity: 0.8 }}>
              Tempo médio de resposta: <strong>até 5 minutos</strong>.
            </div>

            <Link className="btnGhost" href="/">
              Voltar para a página inicial
            </Link>
          </div>

          <hr style={{ margin: "22px 0", opacity: 0.2 }} />

          <div style={{ fontSize: 14, opacity: 0.85, lineHeight: 1.6 }}>
            Se preferir, salve nosso WhatsApp:
            <br />
            <strong>(19) 99872-2063</strong>
          </div>
        </div>
      </div>
    </main>
  );
}
