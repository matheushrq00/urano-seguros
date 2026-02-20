import Link from "next/link";
import styles from "./seguro-risco-engenharia.module.css";
import Image from "next/image";

export const metadata = {
  title: "Seguro Risco Engenharia | Urano Seguros",
  description:
    "Seguro Risco Engenharia para obras, reformas e instalações, com coberturas sob medida e atendimento consultivo. Faça sua cotação com a Urano Seguros.",
};

export default function SeguroRiscoEngenhariaPage() {
  return (
    <main className={styles.page}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <h1 className={styles.heroTitle}>Seguro Risco Engenharia</h1>

          <div className={styles.breadcrumb}>
            <Link href="/">Home</Link>
            <span className={styles.sep}>›</span>
            <Link href="/para-empresas">Para empresas</Link>
            <span className={styles.sep}>›</span>
            <span>Risco Engenharia</span>
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
                    src="/images/seguro-risco-engenharia.png"
                    alt="Engenheiro em obra moderna com planejamento e segurança"
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
                  Proteção para obras, reformas e projetos com segurança técnica
                </h2>

                <p className={styles.p}>
                  O Seguro Risco Engenharia é indicado para obras civis, reformas,
                  ampliações e instalações, ajudando a proteger o empreendimento
                  contra eventos que possam gerar prejuízos durante a execução
                  (conforme cobertura contratada).
                </p>

                <p className={styles.p}>
                  Na Urano Seguros, analisamos o escopo do projeto, prazos, valores e
                  riscos envolvidos para estruturar uma proposta sob medida com total
                  transparência e orientação consultiva.
                </p>

                <ul className={styles.bullets}>
                  <li>
                    <span className={styles.bIcon}>✓</span>
                    Indicado para obras, reformas e instalações
                  </li>
                  <li>
                    <span className={styles.bIcon}>✓</span>
                    Coberturas conforme o tipo de projeto e fase da obra
                  </li>
                  <li>
                    <span className={styles.bIcon}>✓</span>
                    Redução de riscos financeiros e operacionais
                  </li>
                  <li>
                    <span className={styles.bIcon}>✓</span>
                    Atendimento consultivo e suporte ágil via WhatsApp
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
                  Solução ideal para quem precisa executar com segurança e previsibilidade.
                </div>
              </div>
            </div>

            <div className={styles.divider} />

            <section className={styles.bottomCta}>
              <div>
                <h3 className={styles.h3}>Projeto em andamento?</h3>
                <p className={styles.small}>
                  Fale com a Urano e receba uma análise consultiva para seu cronograma e escopo.
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
