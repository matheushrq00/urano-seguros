import Link from "next/link";
import styles from "./contato.module.css";

export const metadata = {
  title: "Contato | Urano Seguros",
  description:
    "Fale com a Urano Seguros. Atendimento humanizado, transparente e consultivo. Matriz em Limeira/SP e atendimento em todo o Brasil.",
};

export default function ContatoPage() {
  const destino =
    "Rua Alvaro Nicolau Opsfelder, 135 - Parque Novo Mundo - Limeira SP";

  const rotas = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    destino
  )}`;

  return (
    <main className={styles.page}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <h1 className={styles.heroTitle}>Contato</h1>

          <div className={styles.breadcrumb}>
            <Link href="/">Home</Link>
            <span className={styles.sep}>›</span>
            <span>Contato</span>
          </div>
        </div>
      </section>

      {/* CONTEÚDO */}
      <section className={styles.content}>
        <div className={styles.wrap}>
          <div className={styles.cardShell}>
            {/* Cabeçalho */}
            <header className={styles.head}>
              <p className={styles.kicker}>URANO SEGUROS</p>
              <h2 className={styles.h2}>Atendimento humano, com explicação clara</h2>
              <p className={styles.p}>
                Fale com a gente pelo canal que preferir. Atendemos o Brasil inteiro
                com suporte rápido e consultivo.
              </p>
            </header>

            {/* GRID PREMIUM */}
            <div className={styles.grid}>
              {/* LEFT */}
              <div className={styles.leftCol}>
                {/* Endereço */}
                <section className={styles.box}>
                  <div className={styles.boxHead}>
                    <span className={styles.iconRed} aria-hidden>
                      ⌂
                    </span>
                    <h3 className={styles.h3}>Endereço</h3>
                  </div>

                  <div className={styles.block}>
                    <div className={styles.label}>Matriz — Limeira/SP</div>
                    <div className={styles.value}>
                      Rua Alvaro Nicolau Opsfelder, 135 — Parque Novo Mundo — Limeira/SP
                    </div>
                  </div>

                  <div className={styles.hr} />

                  <div className={styles.block}>
                    <div className={styles.label}>Atendimento</div>
                    <div className={styles.value}>
                      Atendemos o Brasil inteiro com suporte consultivo e rápido.
                    </div>
                  </div>
                </section>

                {/* Canais */}
                <section className={`${styles.box} ${styles.boxStrong}`}>
                  <div className={styles.boxHead}>
                    <span className={styles.iconBlue} aria-hidden>
                      ☎
                    </span>
                    <h3 className={styles.h3}>Canais de atendimento</h3>
                  </div>

                  <div className={styles.channelCard}>
                    <div className={styles.channelTitle}>WhatsApp / Telefone</div>
                    <div className={styles.channelValue}>
                      (19) <strong>99872-2063</strong>
                    </div>
                  </div>

                  <a
                    className={styles.btnPrimary}
                    href="https://wa.me/5519998722063"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Chamar no WhatsApp
                  </a>

                  <div className={styles.noteLine}>
                    <span className={styles.dot} />
                    Resposta rápida + explicações claras (inclusive por áudio).
                  </div>
                </section>
              </div>

              {/* RIGHT (MAPA GRANDE) */}
              <div className={styles.rightCol}>
                <section className={styles.mapCard}>
                  <div className={styles.mapTop}>
                    <div>
                      <div className={styles.mapTitle}>Como chegar</div>
                      <div className={styles.mapSub}>
                        Matriz — Limeira/SP • Parque Novo Mundo
                      </div>
                    </div>

                    <a
                      className={styles.btnGhost}
                      href={rotas}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Ver rotas
                    </a>
                  </div>

                  <div className={styles.mapWrap}>
  <iframe
    title="Mapa - Urano Seguros (Matriz)"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.5117559988166!2d-47.400372823942305!3d-22.59735722688716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c88112e390354b%3A0x865033c2a75699d8!2sR.%20%C3%81lvaro%20Nicolau%20Opsfelder%2C%20135%20-%20Conj.%20Res.%20Parque%20Novo%20Mundo%2C%20Limeira%20-%20SP%2C%2013481-384!5e0!3m2!1spt-BR!2sbr!4v1771545920762!5m2!1spt-BR!2sbr"
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    style={{ border: 0 }}
    allowFullScreen
  />
</div>

                  <div className={styles.mapFoot}>
                    Dica: clique em “Ver rotas” para abrir o GPS no celular.
                  </div>
                </section>
              </div>
            </div>

            {/* DIVISÓRIA */}
            <div className={styles.divider} />

            {/* CTA FINAL */}
            <section className={styles.bottomCta}>
              <div className={styles.bottomLeft}>
                <h3 className={styles.h3}>Prefere uma orientação personalizada?</h3>
                <p className={styles.small}>
                  Conte seu objetivo e a Urano indica o caminho certo com transparência.
                </p>
              </div>

              <Link className={styles.btnGreen} href="/cotacao-online">
                Fazer cotação
              </Link>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}