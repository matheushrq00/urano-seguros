import Link from "next/link";
import styles from "./seguro-fianca-locaticia.module.css";
import Image from "next/image";

export const metadata = {
  title: "Seguro Fiança Locatícia | Urano Seguros",
  description:
    "Seguro fiança locatícia como alternativa ao fiador e caução, com análise rápida e coberturas conforme plano. Faça sua cotação com a Urano Seguros.",
};

export default function SeguroFiancaLocaticiaPage() {
  return (
    <main className={styles.page}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <h1 className={styles.heroTitle}>Seguro Fiança Locatícia</h1>

          <div className={styles.breadcrumb}>
            <Link href="/">Home</Link>
            <span className={styles.sep}>›</span>
            <Link href="/para-voce">Para você</Link>
            <span className={styles.sep}>›</span>
            <span>Seguro Fiança Locatícia</span>
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
                    src="/images/seguro-fianca-locaticia.png"
                    alt="Casal recebendo as chaves do imóvel em cenário moderno e premium"
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

                <h2 className={styles.h2}>Alugue sem fiador e sem dor de cabeça.</h2>

                <p className={styles.p}>
                  O seguro fiança locatícia é uma alternativa ao fiador e à caução, trazendo mais
                  praticidade e segurança para o processo de locação — para inquilinos, proprietários
                  e imobiliárias.
                </p>

                <p className={styles.p}>
                  Com a Urano Seguros, você recebe atendimento consultivo para entender o que faz sentido
                  para o seu caso e conduzir a contratação com agilidade e clareza.
                </p>

                <ul className={styles.bullets}>
                  <li>
                    <span className={styles.bIcon}>✓</span>
                    Substitui fiador e caução (conforme regras)
                  </li>
                  <li>
                    <span className={styles.bIcon}>✓</span>
                    Análise e aprovação ágeis (conforme seguradora)
                  </li>
                  <li>
                    <span className={styles.bIcon}>✓</span>
                    Coberturas adicionais: condomínio, IPTU, água/luz (conforme plano)
                  </li>
                  <li>
                    <span className={styles.bIcon}>✓</span>
                    Atendimento rápido via WhatsApp
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
                  Ideal para quem quer alugar com mais praticidade e segurança.
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
