import Link from "next/link";
import Image from "next/image";
import styles from "./seguro-moto.module.css";

export const metadata = {
  title: "Seguro Moto | Urano Seguros",
  description:
    "Seguro moto com coberturas sob medida, assistência 24h e atendimento consultivo. Proteja sua moto com a Urano Seguros.",
};

export default function SeguroMotoPage() {
  return (
    <main className={styles.page}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <h1 className={styles.heroTitle}>Seguro Moto</h1>

          <div className={styles.breadcrumb}>
            <Link href="/">Home</Link>
            <span className={styles.sep}>›</span>
            <Link href="/para-voce">Para você</Link>
            <span className={styles.sep}>›</span>
            <span>Seguro Moto</span>
          </div>
        </div>
      </section>

      {/* CONTEÚDO */}
      <section className={styles.content}>
        <div className={styles.wrap}>
          <div className={styles.cardShell}>
            <div className={styles.twoCol}>
              
              {/* IMAGEM */}
              <div className={styles.mediaFrame}>
                <Image
                  src="/seguro-moto.png"
                  alt="Motociclista ao lado da moto após assistência 24h"
                  fill
                  className={styles.mediaImg}
                  priority
                />
              </div>

              {/* TEXTO */}
              <div>
                <p className={styles.kicker}>URANO SEGUROS</p>

                <h2 className={styles.h2}>
                  Proteção completa para sua moto
                </h2>

                <p className={styles.p}>
                  O seguro moto protege você contra colisões, roubo/furto,
                  danos a terceiros e imprevistos do dia a dia — com coberturas
                  personalizadas para o seu perfil.
                </p>

                <p className={styles.p}>
                  Na Urano Seguros, você conta com atendimento humano e
                  consultivo para encontrar a melhor opção entre as principais
                  seguradoras do mercado.
                </p>

                <ul className={styles.bullets}>
                  <li>
                    <span className={styles.bIcon}>✓</span>
                    Assistência 24h (conforme plano)
                  </li>
                  <li>
                    <span className={styles.bIcon}>✓</span>
                    Coberturas completas e personalizadas
                  </li>
                  <li>
                    <span className={styles.bIcon}>✓</span>
                    Danos a terceiros
                  </li>
                  <li>
                    <span className={styles.bIcon}>✓</span>
                    Atendimento rápido via WhatsApp
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
                  Aproveite e faça uma cotação agora mesmo.
                </div>
              </div>
            </div>

            {/* DIVIDER */}
            <div className={styles.divider} />

            {/* FAIXA FINAL */}
            <div className={styles.bottomCta}>
              <div>
                <h3 className={styles.h3}>Cotação On-line</h3>
                <p className={styles.small}>
                  Nosso sistema inteligente irá lhe oferecer as melhores opções.
                </p>
              </div>

              <Link className={styles.btnGreen} href="/cotacao-online">
                Quero fazer uma cotação
              </Link>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
