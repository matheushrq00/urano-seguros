import Link from "next/link";
import { supabaseAdmin } from "@/lib/supabaseAdmin";
import AdminLeadActions from "../../components/AdminLeadActions";
export const metadata = {
  title: "Admin | Urano Seguros",
};

type SearchParams = {
  tipo?: string;
  q?: string;
};

export default async function AdminPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const supabase = supabaseAdmin();

  const tipo = (searchParams.tipo || "").toLowerCase();
  const q = (searchParams.q || "").trim();

  let query = supabase
    .from("leads")
    .select("id, created_at, tipo, nome, email, telefone, seguro, vencimento, origem, status")
    .order("created_at", { ascending: false })
    .limit(200);

  if (tipo === "cotacao" || tipo === "renovacao") {
    query = query.eq("tipo", tipo);
  }

  if (q.length >= 2) {
    const qSafe = q.replace(/[%_]/g, "");
    query = query.or(
      `nome.ilike.%${qSafe}%,email.ilike.%${qSafe}%,telefone.ilike.%${qSafe}%`
    );
  }

  const { data: leads, error } = await query;

  const makeHref = (nextTipo: string, nextQ: string) => {
    const params = new URLSearchParams();
    if (nextTipo) params.set("tipo", nextTipo);
    if (nextQ) params.set("q", nextQ);
    const qs = params.toString();
    return qs ? `/admin?${qs}` : "/admin";
  };

  if (error) {
    return (
      <main className="section">
        <div className="container">
          <div className="card" style={{ padding: 20 }}>
            <h1>Admin</h1>
            <pre>{JSON.stringify(error, null, 2)}</pre>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="section">
      <div className="container">
        <div className="card" style={{ padding: 20 }}>
          {/* TOPO */}
          <div
            style={{
              display: "flex",
              gap: 12,
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <div>
              <h1 style={{ margin: 0 }}>Leads (Site)</h1>
              <p style={{ opacity: 0.8, margin: 0 }}>
                Total: <strong>{leads?.length || 0}</strong>
              </p>
            </div>

            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              <Link className="btnGhost" href={makeHref("", q)}>
                Todos
              </Link>
              <Link className="btnGhost" href={makeHref("cotacao", q)}>
                Cotação
              </Link>
              <Link className="btnGhost" href={makeHref("renovacao", q)}>
                Renovação
              </Link>
            </div>
          </div>

          {/* BUSCA */}
          <form
            method="get"
            action="/admin"
            style={{
              marginTop: 14,
              display: "flex",
              gap: 8,
              flexWrap: "wrap",
            }}
          >
            <input type="hidden" name="tipo" value={tipo} />

            <input
              name="q"
              defaultValue={q}
              placeholder="Buscar por nome, telefone ou e-mail"
              style={{
                flex: 1,
                minWidth: 240,
                padding: "10px 12px",
                borderRadius: 10,
                border: "1px solid rgba(255,255,255,0.18)",
                background: "transparent",
                color: "inherit",
              }}
            />

            <button className="btn" type="submit">
              Buscar
            </button>

            {(q || tipo) && (
              <Link className="btnGhost" href="/admin">
                Limpar
              </Link>
            )}
          </form>

          {/* TABELA */}
          <div style={{ overflowX: "auto", marginTop: 14 }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr>
                  {[
                    "Data",
                    "Tipo",
                    "Nome",
                    "Telefone",
                    "Email",
                    "Seguro",
                    "Vencimento",
                    "Origem",
                    "Status",
                    "Ações",
                  ].map((h) => (
                    <th
                      key={h}
                      style={{
                        textAlign: "left",
                        padding: "10px 8px",
                        borderBottom:
                          "1px solid rgba(255,255,255,0.15)",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {(leads || []).map((l: any) => (
                  <tr
                    key={l.id}
                    style={{
                      opacity: l.status === "atendido" ? 0.55 : 1,
                      background:
                        l.status === "atendido"
                          ? "rgba(0,255,0,0.05)"
                          : "transparent",
                    }}
                  >
                    <td style={td}>
                      {new Date(l.created_at).toLocaleString("pt-BR")}
                    </td>
                    <td style={td}>{l.tipo}</td>
                    <td style={td}>{l.nome}</td>
                    <td style={td}>{l.telefone}</td>
                    <td style={td}>{l.email || "-"}</td>
                    <td style={td}>{l.seguro || "-"}</td>
                    <td style={td}>{l.vencimento || "-"}</td>
                    <td style={td}>{l.origem || "site"}</td>
                    <td style={td}>{l.status || "novo"}</td>

                    <td style={{ ...td, whiteSpace: "nowrap" }}>
                      <AdminLeadActions
                        id={l.id}
                        telefone={l.telefone}
                        nome={l.nome}
                        tipo={l.tipo}
                        status={l.status}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p style={{ marginTop: 16, opacity: 0.7, fontSize: 14 }}>
            Dica: <code>/admin?tipo=cotacao</code> ou{" "}
            <code>/admin?q=1999</code>
          </p>
        </div>
      </div>
    </main>
  );
}

const td: React.CSSProperties = {
  padding: "10px 8px",
  borderBottom: "1px solid rgba(255,255,255,0.08)",
};
