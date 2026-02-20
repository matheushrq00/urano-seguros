import Link from "next/link";
import styles from "./seguro-carga.module.css";
import Image from "next/image";

export const metadata = {
  title: "Seguro Carga | Urano Seguros",
  description:
    "Seguro de carga para proteger mercadorias em trânsito, com coberturas sob medida e atendimento consultivo. Faça sua cotação com a Urano Seguros.",
};

export default function SeguroCargaPage() {
  return (
    <main className={styles.page}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <h1 className={styles.heroTitle}>Seguro Carga</h1>

          <div className={styles.breadcrumb}>
            <Link href="/">Home</Link>
            <span className={styles.sep}>›</span>
            <Link href="/para-empresas">Para empresas</Link>
            <span className={styles.sep}>›</span>
            <span>Seguro Carga</span>
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
                    src="/images/seguro-carga.png"
                    alt="Logística com caminhão e contêiner em centro de distribuição"
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
                  Proteja sua mercadoria do embarque à entrega
                </h2>

                <p className={styles.p}>
                  O Seguro Carga é essencial para reduzir prejuízos e proteger
                  mercadorias em transporte, cobrindo riscos como roubo, acidentes
                  e avarias (conforme plano contratado).
                </p>

                <p className={styles.p}>
                  Na Urano Seguros, analisamos sua operação (tipo de carga, rotas,
                  frequência e modalidade) para estruturar a cobertura ideal com
                  transparência e orientação consultiva.
                </p>

                <ul className={styles.bullets}>
                  <li>
                    <span className={styles.bIcon}>✓</span>
                    Cobertura para mercadorias em trânsito (conforme plano)
                  </li>
                  <li>
                    <span className={styles.bIcon}>✓</span>
                    Proteção contra roubo e acidentes (conforme contratação)
                  </li>
                  <li>
                    <span className={styles.bIcon}>✓</span>
                    Análise por tipo de carga, rotas e valores transportados
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
                  Mais segurança e previsibilidade para sua operação logística.
                </div>
              </div>
            </div>

            {/* DIVISÓRIA */}
            <div className={styles.divider} />

            {/* CTA FINAL */}
            <section className={styles.bottomCta}>
              <div>
                <h3 className={styles.h3}>Precisa de uma cobertura sob medida?</h3>
                <p className={styles.small}>
                  Conte seu cenário (tipo de carga, rotas e valores) e a Urano monta a solução ideal.
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
