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
  ].filter(Boolean);

  return encodeURIComponent(lines.join("\n"));
}

async function submitLead(form: HTMLFormElement, tipo: "cotacao" | "renovacao") {
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
  const [statusRen, setStatusRen] = useState<Status>("idle");
  const [msgRen, setMsgRen] = useState("");

  return (
    <section className="section">
      <div className="container grid2">
        {/* COTAÇÃO */}
        <div className="card" id="cotacao">
          <h2>Faça sua Cotação</h2>
          <p>Obtenha rapidamente o melhor custo benefício em cotação para sua necessidade</p>

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
            <input name="website" tabIndex={-1} autoComplete="off" style={{ display: "none" }} />

            <label>
              Nome:
              <input name="nome" placeholder="Seu nome" required minLength={2} />
            </label>

            <label>
              E-mail:
              <input name="email" type="email" placeholder="seuemail@exemplo.com" />
            </label>

            <label>
              Telefone:
              <input name="telefone" placeholder="(19) 9xxxx-xxxx" required minLength={8} />
            </label>

            <label>
              Seguro Desejado
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

            <small>Ao solicitar, você concorda com nossa política de privacidade.</small>

            <button className="btn" type="submit" disabled={statusCot === "loading"}>
              {statusCot === "loading" ? "Enviando..." : "Solicitar no WhatsApp"}
            </button>

            {msgCot ? <p style={{ marginTop: 10, fontWeight: 600 }}>{msgCot}</p> : null}
          </form>

          <div className="renewHighlight">
            <div className="iconBox">★</div>
            <div>
              <h3 style={{ margin: 0 }}>Vamos renovar o seguro auto?</h3>
              <p style={{ margin: 0 }}>
                Não se preocupe, vamos apresentar as melhores ofertas no mercado.
                Com a Urano Seguros, você terá um preço justo!
              </p>
              <div style={{ marginTop: 10 }}>
                <a className="btnGhost" href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
                  Renove Agora!
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* RENOVAÇÃO */}
        <div className="card">
          <h2>Vamos renovar o Seguro?</h2>
          <p>
            Se seu seguro está prestes a vencer e por algum motivo ainda não entramos em contato,
            preencha o formulário para atualizarmos seu cadastro e efetuarmos a renovação.
          </p>

          <form
            className="form"
            onSubmit={async (e) => {
              e.preventDefault();
              setStatusRen("loading");
              setMsgRen("");

              try {
                const form = e.currentTarget;
                const payload = await submitLead(form, "renovacao");
                setStatusRen("success");
                setMsgRen("Recebido! Vamos falar no WhatsApp agora.");
                form.reset();

                const text = buildWhatsMessage(payload);
                window.open(`${WHATSAPP_LINK}&text=${text}`, "_blank");

                setTimeout(() => {
  router.push("/obrigado");
}, 300);

              } catch (err: any) {
                setStatusRen("error");
                setMsgRen(err.message || "Erro ao enviar.");
              }
            }}
          >
            <input name="website" tabIndex={-1} autoComplete="off" style={{ display: "none" }} />

            <label>
              Nome:
              <input name="nome" placeholder="Seu nome" required minLength={2} />
            </label>

            <label>
              Vencimento:
              <input name="vencimento" type="date" required />
            </label>

            <label>
              E-mail:
              <input name="email" type="email" placeholder="seuemail@exemplo.com" />
            </label>

            <label>
              Telefone:
              <input name="telefone" placeholder="(19) 9xxxx-xxxx" required minLength={8} />
            </label>

            <button className="btn" type="submit" disabled={statusRen === "loading"}>
              {statusRen === "loading" ? "Enviando..." : "Solicitar no WhatsApp"}
            </button>

            {msgRen ? <p style={{ marginTop: 10, fontWeight: 600 }}>{msgRen}</p> : null}
          </form>
        </div>
      </div>
    </section>
  );
}
