import Link from "next/link";
import styles from "./acidentes-pessoais.module.css";
import Image from "next/image";

export const metadata = {
  title: "Acidentes Pessoais | Urano Seguros",
  description:
    "Seguro de acidentes pessoais com coberturas sob medida e atendimento consultivo. Mais proteção para sua rotina com a Urano Seguros.",
};

export default function AcidentesPessoaisPage() {
  return (
    <main className={styles.page}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <h1 className={styles.heroTitle}>Acidentes Pessoais</h1>

          <div className={styles.breadcrumb}>
            <Link href="/">Home</Link>
            <span className={styles.sep}>›</span>
            <Link href="/para-voce">Para você</Link>
            <span className={styles.sep}>›</span>
            <span>Acidentes Pessoais</span>
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
                    src="/images/acidentes-pessoais.png"
                    alt="Pessoa confiante em rotina ativa com clima de proteção e segurança"
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

                <h2 className={styles.h2}>Proteção para sua rotina, onde você estiver.</h2>

                <p className={styles.p}>
                  O seguro de acidentes pessoais ajuda a garantir suporte financeiro em caso de
                  acidentes, trazendo mais tranquilidade para você e sua família no dia a dia.
                </p>

                <p className={styles.p}>
                  Na Urano Seguros, você conta com atendimento humano e consultivo para escolher
                  as coberturas ideais para seu perfil, com clareza e agilidade.
                </p>

                <ul className={styles.bullets}>
                  <li>
                    <span className={styles.bIcon}>✓</span>
                    Indenização por morte acidental (conforme plano)
                  </li>
                  <li>
                    <span className={styles.bIcon}>✓</span>
                    Invalidez permanente por acidente (conforme plano)
                  </li>
                  <li>
                    <span className={styles.bIcon}>✓</span>
                    Despesas médicas e hospitalares (conforme cobertura)
                  </li>
                  <li>
                    <span className={styles.bIcon}>✓</span>
                    Coberturas personalizadas para sua rotina
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
                  Proteja-se hoje e tenha mais tranquilidade amanhã.
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
