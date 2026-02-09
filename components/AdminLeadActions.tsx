"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

type Props = {
  id: string;
  telefone: string;
  nome: string;
  tipo: string;
  status?: string | null;
};

function onlyDigits(v: string) {
  return (v || "").replace(/\D/g, "");
}

export default function AdminLeadActions({ id, telefone, nome, tipo, status }: Props) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [saved, setSaved] = useState(false);

  const phone = onlyDigits(telefone);

  const msg = `Olá ${nome}! Vi sua solicitação pelo site da Urano Seguros. Posso te ajudar com a ${
    tipo === "cotacao" ? "cotação" : "renovação"
  }?`;

  const waHref = `https://wa.me/55${phone}?text=${encodeURIComponent(msg)}`;

  async function marcarAtendido() {
    setLoading(true);
    setSaved(false);

    try {
      const res = await fetch("/api/leads/status", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status: "atendido" }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        console.error("Falha ao marcar atendido:", data);
        alert(data?.message || "Falha ao salvar. Veja o console.");
        return;
      }

      // Feedback visual + atualizar lista
      setSaved(true);
      router.refresh();

      // some o “Salvo ✅” depois de 2s
      setTimeout(() => setSaved(false), 2000);
    } catch (e) {
      console.error("Erro de rede:", e);
      alert("Erro de rede ao salvar. Veja o console.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={{ display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" }}>
      <a className="btnGhost" target="_blank" rel="noreferrer" href={waHref}>
        WhatsApp
      </a>

      {status !== "atendido" ? (
        <button className="btnGhost" type="button" onClick={marcarAtendido} disabled={loading}>
          {loading ? "Salvando..." : "Marcar atendido"}
        </button>
      ) : (
        <span style={{ opacity: 0.85, fontSize: 12 }}>Atendido ✅</span>
      )}

      {saved && <span style={{ fontSize: 12, opacity: 0.85 }}>Salvo ✅</span>}
    </div>
  );
}
