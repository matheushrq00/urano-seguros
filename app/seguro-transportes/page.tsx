import Link from "next/link";
import styles from "./seguro-transportes.module.css";
import Image from "next/image";

export const metadata = {
  title: "Seguro Transportes | Urano Seguros",
  description:
    "Seguro transportes para proteger mercadorias em trânsito nacional e internacional, com coberturas sob medida e atendimento consultivo. Faça sua cotação com a Urano Seguros.",
};

export default function SeguroTransportesPage() {
  return (
    <main className={styles.page}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <h1 className={styles.heroTitle}>Seguro Transportes</h1>

          <div className={styles.breadcrumb}>
            <Link href="/">Home</Link>
            <span className={styles.sep}>›</span>
            <Link href="/para-empresas">Para empresas</Link>
            <span className={styles.sep}>›</span>
            <span>Seguro Transportes</span>
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
                    src="/images/seguro-transportes.png"
                    alt="Transporte de cargas em operação logística com caminhão moderno"
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
                  Cobertura estratégica para transporte de mercadorias
                </h2>

                <p className={styles.p}>
                  O Seguro Transportes protege sua operação contra riscos durante o
                  deslocamento de mercadorias, seja em rotas urbanas, rodoviárias
                  e/ou em operações mais complexas (conforme plano contratado).
                </p>

                <p className={styles.p}>
                  Na Urano Seguros, avaliamos tipo de mercadoria, origem/destino,
                  frequência e valores transportados para estruturar a melhor
                  solução com transparência e orientação consultiva.
                </p>

                <ul className={styles.bullets}>
                  <li>
                    <span className={styles.bIcon}>✓</span>
                    Cobertura para transporte nacional e (quando aplicável) internacional
                  </li>
                  <li>
                    <span className={styles.bIcon}>✓</span>
                    Proteção contra acidentes e avarias (conforme cobertura)
                  </li>
                  <li>
                    <span className={styles.bIcon}>✓</span>
                    Estrutura sob medida por tipo de carga e operação
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
                  Mais segurança e previsibilidade para sua cadeia logística.
                </div>
              </div>
            </div>

            {/* DIVISÓRIA */}
            <div className={styles.divider} />

            {/* CTA FINAL */}
            <section className={styles.bottomCta}>
              <div>
                <h3 className={styles.h3}>Quer uma solução sob medida?</h3>
                <p className={styles.small}>
                  Conte sua operação (tipo de carga, rotas e valores) e a Urano monta a cobertura ideal.
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
