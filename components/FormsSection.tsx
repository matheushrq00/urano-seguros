"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { WHATSAPP_LINK } from "./constants";

type Status = "idle" | "loading" | "success" | "error";

function buildWhatsMessage(data: any) {
  const lines = [
    "Olá! Vim pelo site e gostaria de atendimento:",
    "",
    `Tipo: ${data.tipo}`,
    `Nome: ${data.nome}`,
    `Telefone: ${data.telefone}`,
    data.email ? `E-mail: ${data.email}` : "",
    data.seguro ? `Seguro: ${data.seguro}` : "",
    data.vencimento ? `Vencimento: ${data.vencimento}` : "",
    data.observacao ? `Obs: ${data.observacao}` : "",
  ].filter(Boolean);

  return encodeURIComponent(lines.join("\n"));
}

async function submitLead(form: HTMLFormElement, tipo: "cotacao") {
  const fd = new FormData(form);
  const payload: any = Object.fromEntries(fd.entries());
  payload.tipo = tipo;

  // anti-bot (honeypot)
  payload.website = payload.website || "";

  const res = await fetch("/api/leads", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const data = await res.json().catch(() => null);
    throw new Error(data?.message || "Falha ao enviar. Tente novamente.");
  }

  return payload;
}

export default function FormsSection() {
  const router = useRouter();

  const [statusCot, setStatusCot] = useState<Status>("idle");
  const [msgCot, setMsgCot] = useState("");

  // CTA renovação (sem form duplicado)
  function buildRenewWhatsText() {
    const lines = [
      "Olá! Quero renovar meu seguro 🙂",
      "Posso te enviar os dados?",
      "",
      "• Nome:",
      "• Placa:",
      "• Vencimento:",
      "• CPF (se necessário):",
    ];
    return encodeURIComponent(lines.join("\n"));
  }

  return (
    <section className="section">
      <div className="container grid2">
        {/* FORM PRINCIPAL */}
        <div className="card" id="cotacao">
          <h2>Faça sua Cotação</h2>
          <p>Rápido, sem compromisso — te atendemos direto no WhatsApp.</p>

          <form
            className="form"
            onSubmit={async (e) => {
              e.preventDefault();
              setStatusCot("loading");
              setMsgCot("");

              try {
                const form = e.currentTarget;
                const payload = await submitLead(form, "cotacao");

                if (typeof window !== "undefined") {
                  (window as any).gtag?.("event", "lead", {
                    event_category: "form",
                    event_label: "site_urano",
                    seguro: payload.seguro || "nao_informado",
                    tipo: payload.tipo,
                  });
                }

                setStatusCot("success");
                setMsgCot("Recebido! Vamos te atender agora no WhatsApp.");
                form.reset();

                const text = buildWhatsMessage(payload);
                window.open(`${WHATSAPP_LINK}&text=${text}`, "_blank");

                setTimeout(() => {
                  router.push("/obrigado");
                }, 300);
              } catch (err: any) {
                setStatusCot("error");
                setMsgCot(err.message || "Erro ao enviar.");
              }
            }}
          >
            {/* honeypot invisível (anti-bot) */}
            <input
              name="website"
              tabIndex={-1}
              autoComplete="off"
              style={{ display: "none" }}
            />

            <label>
              Nome:
              <input name="nome" placeholder="Seu nome" required minLength={2} />
            </label>

            <label>
              Telefone:
              <input
                name="telefone"
                placeholder="(19) 9xxxx-xxxx"
                required
                minLength={8}
              />
            </label>

            <label>
              E-mail (opcional):
              <input name="email" type="email" placeholder="seuemail@exemplo.com" />
            </label>

            <label>
              Seguro desejado:
              <select name="seguro" defaultValue="Seguro Auto" required>
                <option>Seguro Auto</option>
                <option>Seguro de Vida</option>
                <option>Seguro Residencial</option>
                <option>Seguro Empresarial</option>
                <option>Planos de Saúde</option>
                <option>Consórcio Auto</option>
                <option>Consórcio Imobiliário</option>
                <option>Seguros Eletrônicos</option>
              </select>
            </label>

            <label>
              Observação (opcional):
              <input
                name="observacao"
                placeholder="Ex: renovação, cidade, melhor horário..."
              />
            </label>

            <small>Ao solicitar, você concorda com nossa política de privacidade.</small>

            <button className="btn" type="submit" disabled={statusCot === "loading"}>
              {statusCot === "loading" ? "Enviando..." : "Solicitar no WhatsApp"}
            </button>

            {msgCot ? <p style={{ marginTop: 10, fontWeight: 600 }}>{msgCot}</p> : null}
          </form>
        </div>

        {/* CARD LATERAL: COMO FUNCIONA + FAQ + RENOVAÇÃO 1 CLIQUE */}
        <div className="card">
          <h2>Atendimento rápido</h2>
          <p>Em 3 passos simples — sem burocracia.</p>

          <div className="steps">
            <div className="stepItem">
              <div className="stepNum">1</div>
              <div>
                <strong>Você envia seus dados</strong>
                <div className="stepTxt">Nome + telefone e o que quer cotar.</div>
              </div>
            </div>

            <div className="stepItem">
              <div className="stepNum">2</div>
              <div>
                <strong>Comparamos seguradoras</strong>
                <div className="stepTxt">Buscamos o melhor custo-benefício pra você.</div>
              </div>
            </div>

            <div className="stepItem">
              <div className="stepNum">3</div>
              <div>
                <strong>Você escolhe</strong>
                <div className="stepTxt">Fechamento rápido, suporte humano.</div>
              </div>
            </div>
          </div>

          <div className="faqMini">
            <h3 style={{ margin: "0 0 10px 0" }}>Dúvidas comuns</h3>
            <ul style={{ margin: 0, paddingLeft: 18, color: "var(--muted)", lineHeight: 1.9 }}>
              <li>Quanto tempo pra cotar? <strong>Geralmente em minutos.</strong></li>
              <li>Atende todo Brasil? <strong>Sim.</strong></li>
              <li>Tem compromisso? <strong>Não.</strong></li>
            </ul>
          </div>

          <div className="renewHighlight" style={{ marginTop: 16 }}>
            <div className="iconBox">✓</div>
            <div>
              <h3 style={{ margin: 0 }}>Vai renovar?</h3>
              <p style={{ margin: 0 }}>
                Sem formulário duplicado: clique e mande placa + vencimento no WhatsApp.
              </p>

              <div style={{ marginTop: 10, display: "flex", gap: 10, flexWrap: "wrap" }}>
                <a
                  className="btnGhost"
                  href={`${WHATSAPP_LINK}&text=${buildRenewWhatsText()}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Renovar no WhatsApp
                </a>

                <a className="ctaBtn" href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
                  Falar agora
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
