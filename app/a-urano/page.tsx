import Link from "next/link";
import styles from "./a-urano.module.css";
import Image from "next/image";

export const metadata = {
  title: "A Urano | Urano Seguros",
  description:
    "Conheça a Urano Seguros: corretora familiar fundada em 2018, com equipe experiente, atendimento humanizado e transparência. Limeira/SP, atendemos o Brasil inteiro.",
};

export default function AUranoPage() {
  return (
    <main className={styles.page}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <h1 className={styles.heroTitle}>A Urano Seguros</h1>

          <div className={styles.breadcrumb}>
            <Link href="/">Home</Link>
            <span className={styles.sep}>›</span>
            <span>A Urano</span>
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
                    src="/images/a-urano.png"
                    alt="Urano Seguros - atendimento consultivo e humanizado"
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

                <h2 className={styles.h2}>Confiança construída com transparência.</h2>

                <p className={styles.p}>
                  A Urano Seguros é uma corretora familiar fundada em{" "}
                  <strong>25/05/2018</strong>, em <strong>Limeira/SP</strong>.
                  Unimos estrutura moderna e atendimento próximo — e hoje{" "}
                  <strong>atendemos clientes em todo o Brasil</strong>.
                </p>

                <p className={styles.p}>
                  Nosso diferencial é simples (e raro): aqui você entende o que
                  está contratando. A gente explica de verdade, com{" "}
                  <strong>áudios claros e bem detalhados</strong>, para você
                  tomar decisões com segurança — sem “texto pronto” e sem
                  enrolação.
                </p>

                <ul className={styles.bullets}>
                  <li>
                    <span className={styles.bIcon}>✓</span>
                    Empresa familiar, atendimento próximo e responsável
                  </li>
                  <li>
                    <span className={styles.bIcon}>✓</span>
                    Profissionais com{" "}
                    <strong>mais de 30 anos de experiência</strong> em seguros
                  </li>
                  <li>
                    <span className={styles.bIcon}>✓</span>
                    Transparência e explicação consultiva (com áudios)
                  </li>
                  <li>
                    <span className={styles.bIcon}>✓</span>
                    Agilidade no WhatsApp e suporte do início ao fim
                  </li>
                </ul>

                <div className={styles.ctaRow}>
                  <a
                    className={styles.btnPrimary}
                    href="https://wa.me/5519998722063"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Falar com a Urano no WhatsApp
                  </a>

                  <Link className={styles.btnGhost} href="/para-voce">
                    Ver seguros para você
                  </Link>
                </div>

                <div className={styles.noteLine}>
                  <span className={styles.dot} />
                  Atendimento humano — para você contratar com clareza.
                </div>
              </div>
            </div>

            {/* DIVISÓRIA */}
            <div className={styles.divider} />

            {/* BLOCO “MISSÃO / VALORES” (sem inventar layout novo) */}
            <section className={styles.bottomCta}>
              <div className={styles.bottomLeft}>
                <h3 className={styles.h3}>Nosso compromisso</h3>
                <p className={styles.small}>
                  Encontrar a melhor solução, explicar com clareza e acompanhar você
                  até a contratação — e além.
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
