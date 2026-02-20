import Link from "next/link";
import styles from "./previdencia-empresarial.module.css";
import Image from "next/image";

export const metadata = {
  title: "Previdência Empresarial | Urano Seguros",
  description:
    "Previdência Empresarial para empresas que desejam oferecer planejamento financeiro e retenção estratégica de talentos. Atendimento consultivo com a Urano Seguros.",
};

export default function PrevidenciaEmpresarialPage() {
  return (
    <main className={styles.page}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <h1 className={styles.heroTitle}>Previdência Empresarial</h1>

          <div className={styles.breadcrumb}>
            <Link href="/">Home</Link>
            <span className={styles.sep}>›</span>
            <Link href="/para-empresas">Para empresas</Link>
            <span className={styles.sep}>›</span>
            <span>Previdência Empresarial</span>
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
                    src="/images/previdencia-empresarial.png"
                    alt="Equipe corporativa analisando planejamento financeiro"
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
                  Planejamento financeiro estratégico para sua equipe
                </h2>

                <p className={styles.p}>
                  A Previdência Empresarial é uma solução voltada para empresas
                  que desejam oferecer um benefício de longo prazo aos seus
                  colaboradores, incentivando o planejamento financeiro e a
                  retenção de talentos.
                </p>

                <p className={styles.p}>
                  Na Urano Seguros, analisamos o perfil da empresa e os objetivos
                  do plano para estruturar uma solução alinhada à estratégia do
                  negócio, com atendimento consultivo e explicação clara.
                </p>

                <ul className={styles.bullets}>
                  <li>
                    <span className={styles.bIcon}>✓</span>
                    Benefício estratégico de longo prazo
                  </li>
                  <li>
                    <span className={styles.bIcon}>✓</span>
                    Incentivo à retenção e valorização da equipe
                  </li>
                  <li>
                    <span className={styles.bIcon}>✓</span>
                    Estrutura personalizada conforme perfil da empresa
                  </li>
                  <li>
                    <span className={styles.bIcon}>✓</span>
                    Atendimento consultivo especializado
                  </li>
                </ul>

                <div className={styles.ctaRow}>
                  <a
                    className={styles.btnPrimary}
                    href="https://wa.me/5519998722063"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Solicitar proposta
                  </a>
                </div>

                <div className={styles.noteLine}>
                  <span className={styles.dot} />
                  Invista no futuro da sua equipe com segurança e planejamento.
                </div>
              </div>
            </div>

            <div className={styles.divider} />

            <section className={styles.bottomCta}>
              <div>
                <h3 className={styles.h3}>Quer estruturar um plano empresarial?</h3>
                <p className={styles.small}>
                  Fale com a Urano e receba uma análise personalizada para sua empresa.
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
