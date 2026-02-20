import Link from "next/link";
import styles from "./seguro-saude.module.css";
import Image from "next/image";

export const metadata = {
  title: "Seguro Saúde | Planos de Saúde | Urano Seguros",
  description:
    "Planos de saúde individuais, familiares e empresariais com orientação consultiva. Encontre a melhor opção com a Urano Seguros.",
};

export default function SeguroSaudePage() {
  return (
    <main className={styles.page}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <h1 className={styles.heroTitle}>Seguro Saúde / Planos de Saúde</h1>

          <div className={styles.breadcrumb}>
            <Link href="/">Home</Link>
            <span className={styles.sep}>›</span>
            <Link href="/para-voce">Para você</Link>
            <span className={styles.sep}>›</span>
            <span>Seguro Saúde</span>
          </div>
        </div>
      </section>

      {/* CONTEÚDO */}
      <section className={styles.content}>
        <div className={styles.wrap}>
          <div className={styles.cardShell}>
            <div className={styles.twoCol}>
              {/* LEFT (imagem) */}
              <div className={styles.media}>
                <div className={styles.mediaFrame}>
                  <Image
                    src="/images/seguro-saude.png"
                    alt="Família brasileira em consulta médica com clima de confiança e segurança"
                    width={900}
                    height={900}
                    className={styles.mediaImg}
                    priority
                  />
                </div>
              </div>

              {/* RIGHT (copy) */}
              <div className={styles.copy}>
                <p className={styles.kicker}>URANO SEGUROS</p>

                <h2 className={styles.h2}>Cuidar da saúde é investir no que mais importa.</h2>

                <p className={styles.p}>
                  O seguro saúde oferece acesso a rede médica, exames e internações
                  conforme o plano contratado, trazendo mais segurança para você
                  e sua família.
                </p>

                <p className={styles.p}>
                  Na Urano Seguros, analisamos seu perfil e suas necessidades
                  para indicar a melhor opção entre operadoras e modalidades
                  disponíveis no mercado.
                </p>

                <ul className={styles.bullets}>
                  <li>
                    <span className={styles.bIcon}>✓</span>
                    Planos individuais e familiares
                  </li>
                  <li>
                    <span className={styles.bIcon}>✓</span>
                    Planos empresariais
                  </li>
                  <li>
                    <span className={styles.bIcon}>✓</span>
                    Rede credenciada e cobertura nacional (conforme plano)
                  </li>
                  <li>
                    <span className={styles.bIcon}>✓</span>
                    Atendimento consultivo para escolha ideal
                  </li>
                </ul>

                <div className={styles.ctaRow}>
                  <a
                    className={styles.btnPrimary}
                    href="https://wa.me/5519998722063"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Falar com especialista no WhatsApp
                  </a>
                </div>

                <div className={styles.noteLine}>
                  <span className={styles.dot} />
                  Encontre o plano ideal para sua realidade.
                </div>
              </div>
            </div>

            {/* DIVISÓRIA */}
            <div className={styles.divider} />

            {/* FAIXA COTAÇÃO ON-LINE */}
            <section className={styles.bottomCta}>
              <div className={styles.bottomLeft}>
                <h3 className={styles.h3}>Simulação Personalizada</h3>
                <p className={styles.small}>
                  Compare opções e encontre o plano ideal para você.
                </p>
              </div>

              <Link className={styles.btnGreen} href="/cotacao-online">
                Quero fazer uma simulação
              </Link>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
