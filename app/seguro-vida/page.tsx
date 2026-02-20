import Link from "next/link";
import styles from "./seguro-vida.module.css";
import Image from "next/image";

export const metadata = {
  title: "Seguro de Vida | Urano Seguros",
  description:
    "Seguro de vida com proteção financeira para sua família, coberturas sob medida e atendimento consultivo. Faça sua cotação com a Urano Seguros.",
};

export default function SeguroVidaPage() {
  return (
    <main className={styles.page}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <h1 className={styles.heroTitle}>Seguro de Vida</h1>

          <div className={styles.breadcrumb}>
            <Link href="/">Home</Link>
            <span className={styles.sep}>›</span>
            <Link href="/para-voce">Para você</Link>
            <span className={styles.sep}>›</span>
            <span>Seguro de Vida</span>
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
                    src="/images/seguro-vida.png"
                    alt="Família brasileira sorrindo com clima de proteção e segurança"
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

                <h2 className={styles.h2}>Proteção financeira para quem você ama.</h2>

                <p className={styles.p}>
                  O seguro de vida garante suporte financeiro à sua família
                  em caso de imprevistos, ajudando a manter estabilidade e
                  segurança nos momentos mais delicados.
                </p>

                <p className={styles.p}>
                  Na Urano Seguros, você conta com atendimento consultivo
                  para montar um plano sob medida, de acordo com sua realidade
                  e objetivos.
                </p>

                <ul className={styles.bullets}>
                  <li>
                    <span className={styles.bIcon}>✓</span>
                    Indenização por morte (conforme plano)
                  </li>
                  <li>
                    <span className={styles.bIcon}>✓</span>
                    Cobertura para invalidez (conforme plano)
                  </li>
                  <li>
                    <span className={styles.bIcon}>✓</span>
                    Assistência funeral (conforme cobertura)
                  </li>
                  <li>
                    <span className={styles.bIcon}>✓</span>
                    Coberturas adicionais personalizadas
                  </li>
                </ul>

                <div className={styles.ctaRow}>
                  <a
                    className={styles.btnPrimary}
                    href="https://wa.me/5519998722063"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Fazer cotação no WhatsApp
                  </a>
                </div>

                <div className={styles.noteLine}>
                  <span className={styles.dot} />
                  Planeje hoje a segurança de amanhã.
                </div>
              </div>
            </div>

            {/* DIVISÓRIA */}
            <div className={styles.divider} />

            {/* FAIXA COTAÇÃO ON-LINE */}
            <section className={styles.bottomCta}>
              <div className={styles.bottomLeft}>
                <h3 className={styles.h3}>Cotação On-line</h3>
                <p className={styles.small}>
                  Nosso sistema inteligente irá lhe oferecer as melhores opções.
                </p>
              </div>

              <Link className={styles.btnGreen} href="/cotacao-online">
                Quero fazer uma cotação
              </Link>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
