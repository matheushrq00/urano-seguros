import Link from "next/link";
import styles from "./seguro-bicicleta.module.css";
import Image from "next/image";

export const metadata = {
  title: "Seguro Bicicleta | Urano Seguros",
  description:
    "Seguro bicicleta com coberturas sob medida, assistência (conforme plano) e atendimento consultivo. Peça sua cotação com a Urano Seguros.",
};

export default function SeguroBicicletaPage() {
  return (
    <main className={styles.page}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <h1 className={styles.heroTitle}>Seguro Bicicleta</h1>

          <div className={styles.breadcrumb}>
            <Link href="/">Home</Link>
            <span className={styles.sep}>›</span>
            <Link href="/para-voce">Para você</Link>
            <span className={styles.sep}>›</span>
            <span>Seguro Bicicleta</span>
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
                    src="/images/seguro-bicicleta.png"
                    alt="Ciclista brasileiro ao lado da bicicleta, em cenário premium"
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

                <h2 className={styles.h2}>Consulte-nos e faça uma cotação!</h2>

                <p className={styles.p}>
                  O seguro bicicleta protege sua bike contra imprevistos como roubo/furto
                  qualificado, danos acidentais e situações do dia a dia — com coberturas sob
                  medida para o seu perfil de uso.
                </p>

                <p className={styles.p}>
                  Na Urano Seguros, você conta com atendimento humano e consultivo para encontrar
                  a melhor opção entre as principais seguradoras do mercado, de forma simples e rápida.
                </p>

                <ul className={styles.bullets}>
                  <li>
                    <span className={styles.bIcon}>✓</span>
                    Roubo e furto qualificado (conforme plano)
                  </li>
                  <li>
                    <span className={styles.bIcon}>✓</span>
                    Danos acidentais e transporte (conforme cobertura)
                  </li>
                  <li>
                    <span className={styles.bIcon}>✓</span>
                    Responsabilidade civil (danos a terceiros)
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
