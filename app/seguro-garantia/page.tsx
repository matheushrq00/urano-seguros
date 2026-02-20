import Link from "next/link";
import styles from "./seguro-garantia.module.css";
import Image from "next/image";

export const metadata = {
  title: "Seguro Garantia | Urano Seguros",
  description:
    "Seguro Garantia para contratos, obras e licitações. Solução estratégica com análise consultiva e atendimento especializado da Urano Seguros.",
};

export default function SeguroGarantiaPage() {
  return (
    <main className={styles.page}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <h1 className={styles.heroTitle}>Seguro Garantia</h1>

          <div className={styles.breadcrumb}>
            <Link href="/">Home</Link>
            <span className={styles.sep}>›</span>
            <Link href="/para-empresas">Para empresas</Link>
            <span className={styles.sep}>›</span>
            <span>Seguro Garantia</span>
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
                    src="/images/seguro-garantia.png"
                    alt="Executivo assinando contrato em ambiente corporativo moderno"
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
                  Segurança contratual para sua empresa crescer com credibilidade
                </h2>

                <p className={styles.p}>
                  O Seguro Garantia assegura o cumprimento de obrigações previstas
                  em contratos privados e licitações, conforme edital e condições
                  negociadas entre as partes.
                </p>

                <p className={styles.p}>
                  Na Urano Seguros, realizamos uma análise detalhada do contrato,
                  valores envolvidos e prazos para indicar a modalidade adequada,
                  conduzindo todo o processo com transparência e agilidade.
                </p>

                <ul className={styles.bullets}>
                  <li><span className={styles.bIcon}>✓</span> Garantia para contratos e licitações</li>
                  <li><span className={styles.bIcon}>✓</span> Maior credibilidade perante contratantes</li>
                  <li><span className={styles.bIcon}>✓</span> Modalidades conforme edital e exigências</li>
                  <li><span className={styles.bIcon}>✓</span> Atendimento consultivo especializado</li>
                </ul>

                <div className={styles.ctaRow}>
                  <a
                    className={styles.btnPrimary}
                    href="https://wa.me/5519998722063"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Solicitar análise
                  </a>
                </div>

                <div className={styles.noteLine}>
                  <span className={styles.dot} />
                  Estruture suas garantias com segurança jurídica e financeira.
                </div>
              </div>
            </div>

            <div className={styles.divider} />

            <section className={styles.bottomCta}>
              <div>
                <h3 className={styles.h3}>Tem um edital ou contrato em andamento?</h3>
                <p className={styles.small}>
                  Envie as informações e receba orientação especializada da Urano.
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
