import Link from "next/link";
import styles from "./seguro-agricola.module.css";
import Image from "next/image";

export const metadata = {
  title: "Seguro Agrícola | Urano Seguros",
  description:
    "Seguro Agrícola para proteger sua produção contra riscos climáticos e perdas previstas em apólice. Atendimento consultivo com a Urano Seguros.",
};

export default function SeguroAgricolaPage() {
  return (
    <main className={styles.page}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <h1 className={styles.heroTitle}>Seguro Agrícola</h1>

          <div className={styles.breadcrumb}>
            <Link href="/">Home</Link>
            <span className={styles.sep}>›</span>
            <Link href="/para-empresas">Para empresas</Link>
            <span className={styles.sep}>›</span>
            <span>Seguro Agrícola</span>
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
                    src="/images/seguro-agricola.png"
                    alt="Produtor rural em lavoura com clima premium e profissional"
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
                  Proteção para sua produção com análise técnica e cobertura sob medida
                </h2>

                <p className={styles.p}>
                  O Seguro Agrícola ajuda a proteger a sua produção contra riscos
                  que podem causar perdas na lavoura, oferecendo mais previsibilidade
                  financeira ao produtor (conforme coberturas contratadas).
                </p>

                <p className={styles.p}>
                  Na Urano Seguros, analisamos cultura, região, histórico e objetivos
                  da operação para montar a melhor estrutura de proteção com
                  transparência e atendimento consultivo.
                </p>

                <ul className={styles.bullets}>
                  <li>
                    <span className={styles.bIcon}>✓</span>
                    Coberturas conforme cultura e perfil de risco
                  </li>
                  <li>
                    <span className={styles.bIcon}>✓</span>
                    Mais previsibilidade e proteção financeira
                  </li>
                  <li>
                    <span className={styles.bIcon}>✓</span>
                    Análise consultiva para cada região e safra
                  </li>
                  <li>
                    <span className={styles.bIcon}>✓</span>
                    Atendimento ágil e humano via WhatsApp
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
                  Segurança para planejar a safra com mais tranquilidade.
                </div>
              </div>
            </div>

            <div className={styles.divider} />

            <section className={styles.bottomCta}>
              <div>
                <h3 className={styles.h3}>Quer uma proposta para sua safra?</h3>
                <p className={styles.small}>
                  Conte cultura, área e região e a Urano orienta a melhor solução para o seu perfil.
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
