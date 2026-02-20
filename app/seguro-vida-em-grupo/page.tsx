import Link from "next/link";
import styles from "./seguro-vida-em-grupo.module.css";
import Image from "next/image";

export const metadata = {
  title: "Seguro de Vida em Grupo | Urano Seguros",
  description:
    "Seguro de Vida em Grupo para empresas que desejam proteger seus colaboradores com segurança e planejamento. Atendimento consultivo com a Urano Seguros.",
};

export default function SeguroVidaEmGrupoPage() {
  return (
    <main className={styles.page}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <h1 className={styles.heroTitle}>Seguro de Vida em Grupo</h1>

          <div className={styles.breadcrumb}>
            <Link href="/">Home</Link>
            <span className={styles.sep}>›</span>
            <Link href="/para-empresas">Para empresas</Link>
            <span className={styles.sep}>›</span>
            <span>Vida em Grupo</span>
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
                    src="/images/seguro-vida-em-grupo.png"
                    alt="Equipe corporativa reunida em ambiente profissional moderno"
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
                  Proteção financeira para colaboradores e tranquilidade para a empresa
                </h2>

                <p className={styles.p}>
                  O Seguro de Vida em Grupo é uma solução voltada para empresas
                  que desejam oferecer proteção aos seus colaboradores, garantindo
                  segurança financeira em situações previstas na apólice
                  (conforme cobertura contratada).
                </p>

                <p className={styles.p}>
                  Na Urano Seguros, analisamos o perfil da equipe, número de vidas
                  e necessidades da empresa para estruturar um plano adequado,
                  com atendimento consultivo e linguagem clara.
                </p>

                <ul className={styles.bullets}>
                  <li>
                    <span className={styles.bIcon}>✓</span>
                    Proteção para colaboradores (conforme apólice)
                  </li>
                  <li>
                    <span className={styles.bIcon}>✓</span>
                    Coberturas ajustadas ao perfil da empresa
                  </li>
                  <li>
                    <span className={styles.bIcon}>✓</span>
                    Benefício estratégico para retenção de talentos
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
                    Solicitar cotação
                  </a>
                </div>

                <div className={styles.noteLine}>
                  <span className={styles.dot} />
                  Valorize sua equipe com segurança e responsabilidade.
                </div>
              </div>
            </div>

            <div className={styles.divider} />

            <section className={styles.bottomCta}>
              <div>
                <h3 className={styles.h3}>Quer estruturar esse benefício?</h3>
                <p className={styles.small}>
                  Fale com a Urano e receba uma proposta personalizada para sua empresa.
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
