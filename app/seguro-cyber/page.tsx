import Link from "next/link";
import styles from "./seguro-cyber.module.css";
import Image from "next/image";

export const metadata = {
  title: "Seguro Cyber (Riscos Cibernéticos) | Urano Seguros",
  description:
    "Seguro Cyber para proteger sua empresa contra incidentes digitais, vazamento de dados e impactos operacionais. Atendimento consultivo com a Urano Seguros.",
};

export default function SeguroCyberPage() {
  return (
    <main className={styles.page}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <h1 className={styles.heroTitle}>Seguro Cyber (Riscos Cibernéticos)</h1>

          <div className={styles.breadcrumb}>
            <Link href="/">Home</Link>
            <span className={styles.sep}>›</span>
            <Link href="/para-empresas">Para empresas</Link>
            <span className={styles.sep}>›</span>
            <span>Seguro Cyber</span>
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
                    src="/images/seguro-cyber.png"
                    alt="Segurança digital corporativa em ambiente moderno"
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
                  Proteção contra incidentes digitais e impactos operacionais
                </h2>

                <p className={styles.p}>
                  O Seguro Cyber ajuda a proteger sua empresa em situações como
                  ataques cibernéticos, indisponibilidade de sistemas, vazamento
                  de dados e outros incidentes previstos na apólice (conforme
                  cobertura contratada).
                </p>

                <p className={styles.p}>
                  Na Urano Seguros, avaliamos o perfil do seu negócio, nível de
                  exposição e necessidades operacionais para estruturar uma solução
                  sob medida com transparência e orientação consultiva.
                </p>

                <ul className={styles.bullets}>
                  <li>
                    <span className={styles.bIcon}>✓</span>
                    Coberturas para incidentes digitais (conforme apólice)
                  </li>
                  <li>
                    <span className={styles.bIcon}>✓</span>
                    Suporte para reduzir impacto financeiro e operacional
                  </li>
                  <li>
                    <span className={styles.bIcon}>✓</span>
                    Proteção alinhada ao porte e segmento da empresa
                  </li>
                  <li>
                    <span className={styles.bIcon}>✓</span>
                    Atendimento consultivo e suporte ágil no WhatsApp
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
                  Segurança moderna para empresas que não podem parar.
                </div>
              </div>
            </div>

            <div className={styles.divider} />

            <section className={styles.bottomCta}>
              <div>
                <h3 className={styles.h3}>Quer uma análise consultiva?</h3>
                <p className={styles.small}>
                  Conte seu segmento e sua rotina digital e a Urano indica a melhor proteção.
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
