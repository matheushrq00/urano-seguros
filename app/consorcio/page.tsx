import Link from "next/link";
import styles from "./consorcio.module.css";
import Image from "next/image";

export const metadata = {
  alternates: {
    canonical: "/consorcio",
  },
};

export default function ConsorcioPage() {
  return (
    <main className={styles.page}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <h1 className={styles.heroTitle}>Consórcio</h1>

          <div className={styles.breadcrumb}>
            <Link href="/">Home</Link>
            <span className={styles.sep}>›</span>
            <span>Consórcio</span>
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
                    src="/images/consorcio.png"
                    alt="Planejamento financeiro para conquistar carro ou imóvel com consórcio"
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
                  Planeje sua conquista com parcelas que fazem sentido
                </h2>

                <p className={styles.p}>
                  O consórcio é uma forma de compra planejada para conquistar
                  carro, moto, imóvel e até serviços — com organização financeira
                  e possibilidade de contemplação por sorteio ou lance.
                </p>

                <p className={styles.p}>
                  Na Urano, você recebe atendimento humano e consultivo: a gente
                  explica as regras com clareza e te ajuda a escolher o plano ideal
                  para o seu objetivo e orçamento.
                </p>

                <ul className={styles.bullets}>
                  <li>
                    <span className={styles.bIcon}>✓</span>
                    Planos para automóvel, moto, imóvel e serviços
                  </li>
                  <li>
                    <span className={styles.bIcon}>✓</span>
                    Parcelas alinhadas ao seu planejamento
                  </li>
                  <li>
                    <span className={styles.bIcon}>✓</span>
                    Contemplação por sorteio ou lance (conforme regras)
                  </li>
                  <li>
                    <span className={styles.bIcon}>✓</span>
                    Atendimento consultivo com explicações claras
                  </li>
                </ul>

                <div className={styles.ctaRow}>
                  <a
                    className={styles.btnPrimary}
                    href="https://wa.me/5519998722063"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Simular no WhatsApp
                  </a>
                </div>

                <div className={styles.noteLine}>
                  <span className={styles.dot} />
                  Me diga seu objetivo (carro, imóvel, etc.) e eu te indico o melhor plano.
                </div>
              </div>
            </div>

            {/* DIVISÓRIA */}
            <div className={styles.divider} />

            {/* CTA FINAL (igual padrão) */}
            <section className={styles.bottomCta}>
              <div className={styles.bottomLeft}>
                <h3 className={styles.h3}>Simulação rápida</h3>
                <p className={styles.small}>
                  Envie seu objetivo e faixa de parcela para receber uma sugestão de plano.
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