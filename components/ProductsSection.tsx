import Link from "next/link";

export default function ProductsSection() {
  return (
    <section className="section--segments" id="segmentos">
      <div className="segmentsWrap">
        <header className="segmentsHead">
          <div className="segmentsEyebrow">URANO SEGUROS</div>
          <h2 className="segmentsTitle">Nossos Segmentos</h2>
          <p className="segmentsText">
            Aqui você encontra soluções completas em seguros e produtos financeiros, com atendimento humano e consultivo.
          </p>
        </header>

        <div className="segmentsGrid">
          <Link className="segmentCard" href="/para-voce">
            <div className="segmentTop">
              <div className="segmentIcon">
                <IconUser />
              </div>
              <h3>Para Você</h3>
            </div>

            <p className="segmentDesc">Auto, vida, residencial e mais — do seu jeito.</p>
            <span className="segmentCta">Ver opções →</span>
          </Link>

          <Link className="segmentCard" href="/para-empresas">
            <div className="segmentTop">
              <div className="segmentIcon">
                <IconBusiness />
              </div>
              <h3>Para sua empresa</h3>
            </div>

            <p className="segmentDesc">Proteção completa para o seu negócio crescer seguro.</p>
            <span className="segmentCta">Ver opções →</span>
          </Link>

          <Link className="segmentCard" href="/produtos-financeiros">
            <div className="segmentTop">
              <div className="segmentIcon">
                <IconFinance />
              </div>
              <h3>Produtos Financeiros</h3>
            </div>

            <p className="segmentDesc">Consórcio e soluções para planejar com inteligência.</p>
            <span className="segmentCta">Ver opções →</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ===== ÍCONES ===== */

function IconUser() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
      <path d="M20 21a8 8 0 0 0-16 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path
        d="M12 13a4 4 0 1 0-4-4 4 4 0 0 0 4 4Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconBusiness() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
      <path d="M3 21V5a2 2 0 0 1 2-2h6v18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M21 21V9a2 2 0 0 0-2-2h-8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path
        d="M7 8h2M7 12h2M7 16h2M15 12h2M15 16h2"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconFinance() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
      <path d="M4 19V5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M4 19h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path
        d="M7 15l4-4 3 3 5-6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19 8v3h-3"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
