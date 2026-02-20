import Link from "next/link";
import styles from "./seguro-viagem.module.css";
import Image from "next/image";

export const metadata = {
  title: "Seguro Viagem | Urano Seguros",
  description:
    "Seguro viagem com assistência médica, cobertura para bagagem e atendimento consultivo. Viaje tranquilo com a Urano Seguros.",
};

export default function SeguroViagemPage() {
  return (
    <main className={styles.page}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <h1 className={styles.heroTitle}>Seguro Viagem</h1>

          <div className={styles.breadcrumb}>
            <Link href="/">Home</Link>
            <span className={styles.sep}>›</span>
            <Link href="/para-voce">Para você</Link>
            <span className={styles.sep}>›</span>
            <span>Seguro Viagem</span>
          </div>
        </div>
      </section>

      {/* CONTEÚDO */}
      <section className={styles.content}>
        <div className={styles.wrap}>
          <div className={styles.cardShell}>
            <div className={styles.twoCol}>
              {/* LEFT (imagem) */}
              <div className={styles.media}>
                <div className={styles.mediaFrame}>
                  <Image
                    src="/images/seguro-viagem.png"
                    alt="Casal brasileiro viajando ao pôr do sol com malas e clima premium"
                    width={900}
                    height={900}
                    className={styles.mediaImg}
                    priority
                  />
                </div>
              </div>

              {/* RIGHT (copy) */}
              <div className={styles.copy}>
                <p className={styles.kicker}>URANO SEGUROS</p>

                <h2 className={styles.h2}>Viaje tranquilo, nós cuidamos do resto.</h2>

                <p className={styles.p}>
                  O seguro viagem oferece proteção contra imprevistos como despesas médicas,
                  extravio de bagagem, cancelamentos e outros eventos que podem acontecer
                  durante sua viagem.
                </p>

                <p className={styles.p}>
                  Com a Urano Seguros, você recebe atendimento consultivo para escolher
                  a cobertura ideal para viagens nacionais ou internacionais.
                </p>

                <ul className={styles.bullets}>
                  <li>
                    <span className={styles.bIcon}>✓</span>
                    Despesas médicas e hospitalares (conforme plano)
                  </li>
                  <li>
                    <span className={styles.bIcon}>✓</span>
                    Cobertura para extravio de bagagem
                  </li>
                  <li>
                    <span className={styles.bIcon}>✓</span>
                    Cancelamento ou interrupção de viagem
                  </li>
                  <li>
                    <span className={styles.bIcon}>✓</span>
                    Atendimento 24h internacional
                  </li>
                </ul>

                <div className={styles.ctaRow}>
                  <a
                    className={styles.btnPrimary}
                    href="https://wa.me/5519998722063"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Fazer cotação no WhatsApp
                  </a>
                </div>

                <div className={styles.noteLine}>
                  <span className={styles.dot} />
                  Planeje sua viagem com segurança e tranquilidade.
                </div>
              </div>
            </div>

            {/* DIVISÓRIA */}
            <div className={styles.divider} />

            {/* FAIXA COTAÇÃO ON-LINE */}
            <section className={styles.bottomCta}>
              <div className={styles.bottomLeft}>
                <h3 className={styles.h3}>Cotação On-line</h3>
                <p className={styles.small}>
                  Nosso sistema inteligente irá lhe oferecer as melhores opções.
                </p>
              </div>

              <Link className={styles.btnGreen} href="/cotacao-online">
                Quero fazer uma cotação
              </Link>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
