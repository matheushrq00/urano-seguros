import Link from "next/link";
import styles from "./rctr-c.module.css";
import Image from "next/image";

export const metadata = {
  title: "RCTR-C | Urano Seguros",
  description:
    "Seguro RCTR-C (Responsabilidade Civil do Transportador Rodoviário de Carga). Proteção obrigatória para transportadores com atendimento consultivo da Urano Seguros.",
};

export default function RctrCPage() {
  return (
    <main className={styles.page}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <h1 className={styles.heroTitle}>RCTR-C</h1>

          <div className={styles.breadcrumb}>
            <Link href="/">Home</Link>
            <span className={styles.sep}>›</span>
            <Link href="/para-empresas">Para empresas</Link>
            <span className={styles.sep}>›</span>
            <span>RCTR-C</span>
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
                    src="/images/rctr-c.png"
                    alt="Caminhão de carga em operação rodoviária profissional"
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
                  Responsabilidade Civil do Transportador Rodoviário de Carga
                </h2>

                <p className={styles.p}>
                  O RCTR-C é um seguro obrigatório para transportadores
                  rodoviários de carga, que garante cobertura por danos à
                  mercadoria transportada em caso de acidentes durante o trajeto.
                </p>

                <p className={styles.p}>
                  A Urano analisa sua operação, tipo de carga e rotas para
                  estruturar a proteção adequada com total transparência
                  e orientação especializada.
                </p>

                <ul className={styles.bullets}>
                  <li>
                    <span className={styles.bIcon}>✓</span>
                    Seguro obrigatório para transportadores
                  </li>
                  <li>
                    <span className={styles.bIcon}>✓</span>
                    Cobertura por danos decorrentes de acidentes
                  </li>
                  <li>
                    <span className={styles.bIcon}>✓</span>
                    Atendimento consultivo especializado
                  </li>
                  <li>
                    <span className={styles.bIcon}>✓</span>
                    Suporte ágil via WhatsApp
                  </li>
                </ul>

                <div className={styles.ctaRow}>
                  <a
                    className={styles.btnPrimary}
                    href="https://wa.me/5519998722063"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Solicitar cotação
                  </a>
                </div>

                <div className={styles.noteLine}>
                  <span className={styles.dot} />
                  Regularize sua operação com segurança e respaldo técnico.
                </div>
              </div>
            </div>

            <div className={styles.divider} />

            <section className={styles.bottomCta}>
              <div>
                <h3 className={styles.h3}>Precisa adequar sua operação?</h3>
                <p className={styles.small}>
                  Fale com a Urano e garanta conformidade e proteção.
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
