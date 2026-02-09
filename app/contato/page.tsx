import PageShell from "@/components/PageShell";

export default function Page() {
  return (
    <PageShell
      title="Contato"
      subtitle="Fale com a Urano Seguros. Resposta rápida no WhatsApp."
      bullets={[
        "WhatsApp/Telefone: (19) 99872-2063",
        "Horário: Seg a Sex, 08:00 às 18:00",
        "Atendimento: Limeira e região (online para todo o Brasil)."
      ]}
    >
      <div style={{ marginTop: 24 }}>
        <h3 style={{ marginBottom: 16 }}>Envie uma mensagem</h3>
        <form style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '400px' }}>
          <label style={{ display: 'flex', flexDirection: 'column' }}>
            Nome:
            <input name="nome" placeholder="Seu nome" style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} />
          </label>
          <label style={{ display: 'flex', flexDirection: 'column' }}>
            E-mail:
            <input name="email" type="email" placeholder="seuemail@exemplo.com" style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} />
          </label>
          <label style={{ display: 'flex', flexDirection: 'column' }}>
            Mensagem:
            <textarea name="msg" placeholder="Como podemos ajudar?" rows={4} style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} />
          </label>
          <button className="btn" type="button" style={{ cursor: 'pointer', padding: '10px', backgroundColor: '#0070f3', color: 'white', border: 'none', borderRadius: '4px' }}>
            Enviar
          </button>
        </form>
      </div>
    </PageShell>
  );
}