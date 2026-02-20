import Link from "next/link";
import styles from "./responsabilidade-civil.module.css";
import Image from "next/image";

export const metadata = {
  title: "Responsabilidade Civil Empresarial | Urano Seguros",
  description:
    "Seguro de Responsabilidade Civil Empresarial para proteger sua empresa contra danos a terceiros, com coberturas sob medida e atendimento consultivo. Faça sua cotação com a Urano Seguros.",
};

export default function ResponsabilidadeCivilPage() {
  return (
    <main className={styles.page}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <h1 className={styles.heroTitle}>Responsabilidade Civil Empresarial</h1>

          <div className={styles.breadcrumb}>
            <Link href="/">Home</Link>
            <span className={styles.sep}>›</span>
            <Link href="/para-empresas">Para empresas</Link>
            <span className={styles.sep}>›</span>
            <span>Responsabilidade Civil</span>
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
                    src="/images/responsabilidade-civil.png"
                    alt="Executivos em reunião corporativa com clima de confiança e gestão de risco"
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
                  Proteja sua empresa contra danos a terceiros
                </h2>

                <p className={styles.p}>
                  O seguro de Responsabilidade Civil Empresarial ajuda a proteger
                  o seu negócio em situações em que a empresa possa ser
                  responsabilizada por danos materiais e/ou corporais causados a
                  terceiros (conforme coberturas contratadas).
                </p>

                <p className={styles.p}>
                  Na Urano Seguros, avaliamos sua atividade, exposição a risco e
                  demandas do seu setor para estruturar uma apólice sob medida,
                  com transparência e explicação clara.
                </p>

                <ul className={styles.bullets}>
                  <li>
                    <span className={styles.bIcon}>✓</span>
                    Coberturas sob medida para seu ramo de atividade
                  </li>
                  <li>
                    <span className={styles.bIcon}>✓</span>
                    Proteção contra danos a terceiros (conforme apólice)
                  </li>
                  <li>
                    <span className={styles.bIcon}>✓</span>
                    Redução de exposição financeira e jurídica
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
                  Gestão de risco com linguagem clara e orientação especializada.
                </div>
              </div>
            </div>

            {/* DIVISÓRIA */}
            <div className={styles.divider} />

            {/* CTA FINAL */}
            <section className={styles.bottomCta}>
              <div>
                <h3 className={styles.h3}>Quer uma análise do seu risco?</h3>
                <p className={styles.small}>
                  Conte seu segmento e sua operação e a Urano estrutura a cobertura ideal.
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
