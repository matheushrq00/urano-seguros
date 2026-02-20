import Link from "next/link";
import styles from "./capitalizacao.module.css";
import Image from "next/image";

export const metadata = {
  title: "Capitalização | Urano Seguros",
  description:
    "Capitalização como solução para planejamento, formação de reserva e participação em sorteios (conforme modalidade). Atendimento consultivo com a Urano Seguros.",
};

export default function CapitalizacaoPage() {
  return (
    <main className={styles.page}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <h1 className={styles.heroTitle}>Capitalização</h1>

          <div className={styles.breadcrumb}>
            <Link href="/">Home</Link>
            <span className={styles.sep}>›</span>
            <span>Capitalização</span>
          </div>
        </div>
      </section>

      {/* CONTEÚDO */}
      <section className={styles.content}>
        <div className={styles.wrap}>
          <div className={styles.cardShell}>
            <div className={styles.twoCol}>
              {/* IMAGEM */}
              <div className={styles.media}>
                <div className={styles.mediaFrame}>
                  <Image
                    src="/images/capitalizacao.png"
                    alt="Planejamento financeiro e formação de reserva em ambiente premium"
                    width={900}
                    height={900}
                    className={styles.mediaImg}
                    priority
                  />
                </div>
              </div>

              {/* COPY */}
              <div className={styles.copy}>
                <p className={styles.kicker}>URANO SEGUROS</p>

                <h2 className={styles.h2}>
                  Uma forma prática de planejar, formar reserva e participar de sorteios
                </h2>

                <p className={styles.p}>
                  A capitalização pode ser utilizada como uma solução para
                  organização financeira e formação de reserva, com possibilidade
                  de participação em sorteios conforme a modalidade contratada.
                </p>

                <p className={styles.p}>
                  Na Urano, você recebe orientação consultiva e transparente:
                  explicamos como funciona cada opção e indicamos o que faz mais
                  sentido para seu objetivo (pessoal ou empresarial).
                </p>

                <ul className={styles.bullets}>
                  <li>
                    <span className={styles.bIcon}>✓</span>
                    Opções para objetivos pessoais e empresariais
                  </li>
                  <li>
                    <span className={styles.bIcon}>✓</span>
                    Formação de reserva conforme regras do produto
                  </li>
                  <li>
                    <span className={styles.bIcon}>✓</span>
                    Participação em sorteios (conforme modalidade)
                  </li>
                  <li>
                    <span className={styles.bIcon}>✓</span>
                    Atendimento consultivo com explicações claras
                  </li>
                </ul>

                <div className={styles.ctaRow}>
                  <a
                    className={styles.btnPrimary}
                    href="https://wa.me/5519998722063"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Falar no WhatsApp
                  </a>
                </div>

                <div className={styles.noteLine}>
                  <span className={styles.dot} />
                  Me diga seu objetivo e eu te mostro a melhor opção.
                </div>
              </div>
            </div>

            <div className={styles.divider} />

            <section className={styles.bottomCta}>
              <div className={styles.bottomLeft}>
                <h3 className={styles.h3}>Orientação rápida</h3>
                <p className={styles.small}>
                  Envie sua meta (reserva, garantia, planejamento) e receba uma indicação consultiva.
                </p>
              </div>

              <Link className={styles.btnGreen} href="/contato">
                Falar com consultor
              </Link>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}