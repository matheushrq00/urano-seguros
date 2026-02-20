import Link from "next/link";
import styles from "./seguro-viagem-corporativa.module.css";
import Image from "next/image";

export const metadata = {
  title: "Seguro Viagem Corporativa | Urano Seguros",
  description:
    "Seguro viagem corporativa para proteger colaboradores em deslocamentos nacionais e internacionais. Atendimento consultivo com a Urano Seguros.",
};

export default function SeguroViagemCorporativaPage() {
  return (
    <main className={styles.page}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <h1 className={styles.heroTitle}>Seguro Viagem Corporativa</h1>

          <div className={styles.breadcrumb}>
            <Link href="/">Home</Link>
            <span className={styles.sep}>›</span>
            <Link href="/para-empresas">Para empresas</Link>
            <span className={styles.sep}>›</span>
            <span>Seguro Viagem Corporativa</span>
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
                    src="/images/seguro-viagem-corporativa.png"
                    alt="Executivo em aeroporto durante viagem corporativa"
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
                  Proteção para colaboradores em viagens a trabalho
                </h2>

                <p className={styles.p}>
                  O Seguro Viagem Corporativa garante assistência e cobertura
                  para colaboradores em deslocamentos nacionais e internacionais,
                  trazendo segurança para a empresa e tranquilidade para quem viaja.
                </p>

                <p className={styles.p}>
                  A Urano analisa o perfil das viagens, destinos e frequência
                  para estruturar a melhor solução com atendimento consultivo
                  e transparente.
                </p>

                <ul className={styles.bullets}>
                  <li>
                    <span className={styles.bIcon}>✓</span>
                    Assistência médica e hospitalar (conforme plano)
                  </li>
                  <li>
                    <span className={styles.bIcon}>✓</span>
                    Cobertura para viagens nacionais e internacionais
                  </li>
                  <li>
                    <span className={styles.bIcon}>✓</span>
                    Planos corporativos personalizados
                  </li>
                  <li>
                    <span className={styles.bIcon}>✓</span>
                    Suporte ágil durante a viagem
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
                  Mais segurança para quem representa sua empresa.
                </div>
              </div>
            </div>

            <div className={styles.divider} />

            <section className={styles.bottomCta}>
              <div>
                <h3 className={styles.h3}>Sua equipe viaja com frequência?</h3>
                <p className={styles.small}>
                  Fale com a Urano e receba uma proposta sob medida para sua empresa.
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
