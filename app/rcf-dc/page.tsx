import Link from "next/link";
import styles from "./rcf-dc.module.css";
import Image from "next/image";

export const metadata = {
  title: "RCF-DC | Urano Seguros",
  description:
    "Seguro RCF-DC (Responsabilidade Civil Facultativa do Transportador Rodoviário por Desaparecimento de Carga). Proteção essencial para transportadores com atendimento consultivo da Urano Seguros.",
};

export default function RcfDcPage() {
  return (
    <main className={styles.page}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <h1 className={styles.heroTitle}>RCF-DC</h1>

          <div className={styles.breadcrumb}>
            <Link href="/">Home</Link>
            <span className={styles.sep}>›</span>
            <Link href="/para-empresas">Para empresas</Link>
            <span className={styles.sep}>›</span>
            <span>RCF-DC</span>
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
                    src="/images/rcf-dc.png"
                    alt="Operação logística com caminhão e carga em ambiente corporativo"
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
                  Proteção contra o desaparecimento de carga (transportador)
                </h2>

                <p className={styles.p}>
                  O RCF-DC é um seguro facultativo do transportador rodoviário que
                  oferece cobertura para situações de{" "}
                  <strong>desaparecimento de carga</strong>, como roubo/furto e
                  outras ocorrências previstas na apólice (conforme plano contratado).
                </p>

                <p className={styles.p}>
                  Na Urano Seguros, avaliamos sua operação, rotas, tipo de mercadoria
                  e valores transportados para estruturar uma proteção sob medida com
                  transparência e orientação consultiva.
                </p>

                <ul className={styles.bullets}>
                  <li>
                    <span className={styles.bIcon}>✓</span>
                    Cobertura para desaparecimento de carga (conforme apólice)
                  </li>
                  <li>
                    <span className={styles.bIcon}>✓</span>
                    Recomendado para operações com maior exposição a risco
                  </li>
                  <li>
                    <span className={styles.bIcon}>✓</span>
                    Análise por rotas, mercadorias e valores transportados
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
                  Mais tranquilidade para transportar com segurança e respaldo.
                </div>
              </div>
            </div>

            {/* DIVISÓRIA */}
            <div className={styles.divider} />

            {/* CTA FINAL */}
            <section className={styles.bottomCta}>
              <div>
                <h3 className={styles.h3}>Quer estruturar a proteção ideal?</h3>
                <p className={styles.small}>
                  Fale com a Urano e entenda exatamente o que faz sentido para sua operação.
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
