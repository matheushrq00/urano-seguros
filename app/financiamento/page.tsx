import Link from "next/link";
import styles from "./financiamento.module.css";
import Image from "next/image";

export const metadata = {
  title: "Financiamento | Urano Seguros",
  description:
    "Financiamento para veículo ou imóvel com orientação consultiva e transparente. A Urano Seguros ajuda você a escolher a melhor opção para o seu perfil.",
};

export default function FinanciamentoPage() {
  return (
    <main className={styles.page}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <h1 className={styles.heroTitle}>Financiamento</h1>

          <div className={styles.breadcrumb}>
            <Link href="/">Home</Link>
            <span className={styles.sep}>›</span>
            <span>Financiamento</span>
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
                    src="/images/financiamento.png"
                    alt="Planejamento financeiro e aprovação de crédito em ambiente premium"
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
                  Financiamento com orientação clara para decidir com segurança
                </h2>

                <p className={styles.p}>
                  O financiamento pode ser uma alternativa para conquistar veículo
                  ou imóvel com entrada + parcelas, de acordo com análise de crédito
                  e condições disponíveis.
                </p>

                <p className={styles.p}>
                  Na Urano, você não recebe só “uma proposta”: a gente explica cada etapa,
                  compara cenários e te ajuda a escolher a opção mais adequada ao seu perfil,
                  com atendimento humano e transparente.
                </p>

                <ul className={styles.bullets}>
                  <li>
                    <span className={styles.bIcon}>✓</span>
                    Simulação com diferentes cenários de entrada e prazo
                  </li>
                  <li>
                    <span className={styles.bIcon}>✓</span>
                    Orientação para organizar a decisão com clareza
                  </li>
                  <li>
                    <span className={styles.bIcon}>✓</span>
                    Análise conforme perfil e objetivo (veículo/imóvel)
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
                    Simular no WhatsApp
                  </a>
                </div>

                <div className={styles.noteLine}>
                  <span className={styles.dot} />
                  Me diga seu objetivo e faixa de parcela para eu te orientar.
                </div>
              </div>
            </div>

            {/* DIVISÓRIA */}
            <div className={styles.divider} />

            {/* CTA FINAL */}
            <section className={styles.bottomCta}>
              <div className={styles.bottomLeft}>
                <h3 className={styles.h3}>Simulação rápida</h3>
                <p className={styles.small}>
                  Envie seu objetivo e valores aproximados para receber uma orientação personalizada.
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