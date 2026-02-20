import Link from "next/link";
import styles from "./seguro-odontologico.module.css";
import Image from "next/image";

export const metadata = {
  title: "Seguro Odontológico | Urano Seguros",
  description:
    "Seguro Odontológico para empresas e famílias, com redes e planos sob medida. Atendimento consultivo com a Urano Seguros.",
};

export default function SeguroOdontologicoPage() {
  return (
    <main className={styles.page}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <h1 className={styles.heroTitle}>Seguro Odontológico</h1>

          <div className={styles.breadcrumb}>
            <Link href="/">Home</Link>
            <span className={styles.sep}>›</span>
            <Link href="/para-empresas">Para empresas</Link>
            <span className={styles.sep}>›</span>
            <span>Seguro Odontológico</span>
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
                    src="/images/seguro-odontologico.png"
                    alt="Atendimento odontológico moderno em clínica premium"
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
                  Benefício inteligente para cuidar do sorriso da sua equipe
                </h2>

                <p className={styles.p}>
                  O Seguro Odontológico é uma solução prática para empresas que
                  desejam oferecer um benefício valorizado, ajudando colaboradores
                  a cuidarem da saúde bucal com previsibilidade de custos e
                  acesso a atendimento conforme o plano contratado.
                </p>

                <p className={styles.p}>
                  Na Urano Seguros, analisamos o perfil da empresa e quantidade
                  de vidas para indicar o plano ideal com atendimento consultivo,
                  explicação clara e suporte rápido.
                </p>

                <ul className={styles.bullets}>
                  <li>
                    <span className={styles.bIcon}>✓</span>
                    Planos empresariais sob medida
                  </li>
                  <li>
                    <span className={styles.bIcon}>✓</span>
                    Rede credenciada (conforme plano)
                  </li>
                  <li>
                    <span className={styles.bIcon}>✓</span>
                    Previsibilidade e controle de custos
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
                  Benefício com alto valor percebido e contratação simples.
                </div>
              </div>
            </div>

            <div className={styles.divider} />

            <section className={styles.bottomCta}>
              <div>
                <h3 className={styles.h3}>Quer oferecer esse benefício na empresa?</h3>
                <p className={styles.small}>
                  Fale com a Urano e receba uma proposta ajustada ao seu time e orçamento.
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
