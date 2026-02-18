"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { WHATSAPP_LINK } from "./constants";

type Status = "idle" | "loading" | "success" | "error";

function buildWhatsMessage(data: any) {
  const lines = [
    "Olá! Vim pelo site e gostaria de atendimento:",
    "",
    `Tipo: ${data.tipo}`,
    `Seguro: ${data.seguro}`,
    `Nome: ${data.nome}`,
    `Telefone: ${data.telefone}`,
    data.email ? `E-mail: ${data.email}` : "",
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
  const [showExtras, setShowExtras] = useState(false);

  const renewText = useMemo(() => {
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
  }, []);

  return (
    <section className="quoteFintech" id="cotacao">
      <div className="container quoteFintech__grid">
        {/* LEFT: FORM */}
        <div className="quoteFintech__left">
          <div className="quoteFintech__head">
            <div className="quoteFintech__eyebrow">
              COTAÇÃO EM MINUTOS • ATENDIMENTO HUMANO
            </div>

            <h2 className="quoteFintech__title">
              Receba sua proposta{" "}
              <span className="uranoAccent">personalizada</span> em minutos.
            </h2>

            <p className="quoteFintech__sub">
              A Urano compara seguradoras e coberturas ideais para o seu perfil —
              sem compromisso.
            </p>

            <div className="quoteFintech__badges">
              <span className="qBadge">⚡ Resposta rápida</span>
              <span className="qBadge">🛡️ Comparação real</span>
              <span className="qBadge">🤝 Suporte humano</span>
            </div>
          </div>

          <div className="qCard qCard--form">
            <form
              className="qForm"
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

                  setTimeout(() => router.push("/obrigado"), 250);
                } catch (err: any) {
                  setStatusCot("error");
                  setMsgCot(err.message || "Erro ao enviar.");
                }
              }}
            >
              {/* honeypot */}
              <input
                name="website"
                tabIndex={-1}
                autoComplete="off"
                style={{ display: "none" }}
              />

              <div className="qFields">
                <input
                  name="nome"
                  placeholder="Seu nome"
                  required
                  minLength={2}
                  className="qInput"
                />

                <input
                  name="telefone"
                  placeholder="Seu WhatsApp (ex: 19 99872-2063)"
                  required
                  minLength={8}
                  inputMode="tel"
                  className="qInput"
                />

                <select
                  name="seguro"
                  defaultValue="Seguro Auto"
                  required
                  className="qInput"
                >
                  <option>Seguro Auto</option>
                  <option>Seguro de Vida</option>
                  <option>Seguro Residencial</option>
                  <option>Seguro Empresarial</option>
                  <option>Planos de Saúde</option>
                  <option>Consórcio Auto</option>
                  <option>Consórcio Imobiliário</option>
                  <option>Seguros Eletrônicos</option>
                </select>
              </div>

              <div className="qExtras">
                <button
                  type="button"
                  className="qLinkBtn"
                  onClick={() => setShowExtras((v) => !v)}
                  aria-expanded={showExtras}
                >
                  {showExtras
                    ? "Ocultar detalhes"
                    : "Adicionar mais detalhes (opcional)"}
                </button>

                {showExtras && (
                  <div className="qFields qFields--extras">
                    <input
                      name="email"
                      type="email"
                      placeholder="E-mail (opcional)"
                      className="qInput"
                    />
                    <input
                      name="observacao"
                      placeholder="Ex: renovação, cidade, melhor horário..."
                      className="qInput"
                    />
                  </div>
                )}
              </div>

              <button
                className="qPrimaryBtn"
                type="submit"
                disabled={statusCot === "loading"}
              >
                {statusCot === "loading"
                  ? "Enviando..."
                  : "Falar com especialista no WhatsApp"}
              </button>

              <div className="qActions">
                <a
                  className="qSecondaryBtn"
                  href={`${WHATSAPP_LINK}&text=${renewText}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Renovar seguro
                </a>

                <a
                  className="qGhostBtn"
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noreferrer"
                >
                  WhatsApp direto
                </a>
              </div>

              <div className="qFinePrint">
                Ao solicitar, você concorda com nossa política de privacidade.
              </div>

              {msgCot ? <div className="qMsg">{msgCot}</div> : null}
            </form>
          </div>
        </div>

        {/* RIGHT: TRUST */}
        <aside className="quoteFintech__right">
          <div className="qCard qCard--trust">
            <div className="qTrustTop">
              <div className="qTrustTitle">Por que escolher a Urano?</div>
              <div className="qTrustSub">
                Menos burocracia, mais clareza. Você fala com gente de verdade.
              </div>
            </div>

            <div className="qTrustGrid">
              <div className="qTrustItem">
                <div className="qTrustIcon">⚡</div>
                <div>
                  <div className="qTrustH">Resposta rápida</div>
                  <div className="qTrustP">
                    Atendimento via WhatsApp, sem espera.
                  </div>
                </div>
              </div>

              <div className="qTrustItem">
                <div className="qTrustIcon">🛡️</div>
                <div>
                  <div className="qTrustH">Comparação real</div>
                  <div className="qTrustP">
                    Avaliamos seguradoras e coberturas pro seu perfil.
                  </div>
                </div>
              </div>

              <div className="qTrustItem">
                <div className="qTrustIcon">🤝</div>
                <div>
                  <div className="qTrustH">Suporte humano</div>
                  <div className="qTrustP">
                    Você não fica sozinho após contratar.
                  </div>
                </div>
              </div>
            </div>

            <div className="qDivider" />

            <div className="qFaq">
              <div className="qFaqTitle">Dúvidas rápidas</div>
              <ul className="qFaqList">
                <li>
                  Quanto tempo pra cotar?{" "}
                  <strong>Geralmente em minutos.</strong>
                </li>
                <li>
                  Tem compromisso? <strong>Não.</strong>
                </li>
                <li>
                  Atende todo Brasil? <strong>Sim.</strong>
                </li>
              </ul>
            </div>
          </div>

          <div className="qSeal">
            <div className="qSealDot" />
            <div>
              <div className="qSealTitle">Atendimento imediato</div>
              <div className="qSealSub">
                A equipe responde assim que você enviar.
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
