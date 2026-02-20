import Link from "next/link";
import styles from "./previdencia-individual.module.css";
import Image from "next/image";

export const metadata = {
  title: "Previdência Individual | Urano Seguros",
  description:
    "Previdência individual para planejamento financeiro de longo prazo, com orientação consultiva e planos sob medida. Faça sua cotação com a Urano Seguros.",
};

export default function PrevidenciaIndividualPage() {
  return (
    <main className={styles.page}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <h1 className={styles.heroTitle}>Previdência Individual</h1>

          <div className={styles.breadcrumb}>
            <Link href="/">Home</Link>
            <span className={styles.sep}>›</span>
            <Link href="/para-voce">Para você</Link>
            <span className={styles.sep}>›</span>
            <span>Previdência Individual</span>
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
                    src="/images/previdencia-individual.png"
                    alt="Casal planejando o futuro financeiro com clima de segurança e estabilidade"
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

                <h2 className={styles.h2}>Planeje hoje a tranquilidade do seu amanhã.</h2>

                <p className={styles.p}>
                  A previdência individual é uma solução para quem deseja construir
                  um planejamento financeiro de longo prazo, com disciplina e estratégia.
                </p>

                <p className={styles.p}>
                  Na Urano Seguros, você recebe orientação consultiva para entender
                  as diferenças entre planos, tributação e objetivos — e escolher
                  o que realmente faz sentido para sua realidade.
                </p>

                <ul className={styles.bullets}>
                  <li>
                    <span className={styles.bIcon}>✓</span>
                    Planejamento para aposentadoria
                  </li>
                  <li>
                    <span className={styles.bIcon}>✓</span>
                    Opções de tributação (conforme perfil)
                  </li>
                  <li>
                    <span className={styles.bIcon}>✓</span>
                    Flexibilidade de aportes e resgates (conforme plano)
                  </li>
                  <li>
                    <span className={styles.bIcon}>✓</span>
                    Estratégia alinhada aos seus objetivos financeiros
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
                  Comece hoje a construir seu futuro financeiro.
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
                  Descubra o plano ideal para seus objetivos financeiros.
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
