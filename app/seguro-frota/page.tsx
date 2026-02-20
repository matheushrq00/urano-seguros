import Link from "next/link";
import styles from "./seguro-frota.module.css";
import Image from "next/image";

export const metadata = {
  title: "Seguro Frota | Urano Seguros",
  description:
    "Seguro frota para empresas com cobertura personalizada, assistência 24h e gestão facilitada. Atendimento consultivo com a Urano Seguros.",
};

export default function SeguroFrotaPage() {
  return (
    <main className={styles.page}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <h1 className={styles.heroTitle}>Seguro Frota</h1>

          <div className={styles.breadcrumb}>
            <Link href="/">Home</Link>
            <span className={styles.sep}>›</span>
            <Link href="/para-empresas">Para empresas</Link>
            <span className={styles.sep}>›</span>
            <span>Seguro Frota</span>
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
                    src="/images/seguro-frota.png"
                    alt="Gestor de frota em pátio logístico com veículos corporativos"
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
                  Proteção completa para os veículos da sua empresa
                </h2>

                <p className={styles.p}>
                  O Seguro Frota é ideal para empresas que possuem dois ou mais
                  veículos e desejam centralizar a proteção com melhores condições,
                  gestão facilitada e coberturas personalizadas.
                </p>

                <p className={styles.p}>
                  A Urano analisa o perfil da sua operação e estrutura a melhor
                  solução junto às principais seguradoras do mercado, com total
                  transparência e atendimento consultivo.
                </p>

                <ul className={styles.bullets}>
                  <li>
                    <span className={styles.bIcon}>✓</span>
                    Cobertura para múltiplos veículos em uma única apólice
                  </li>
                  <li>
                    <span className={styles.bIcon}>✓</span>
                    Assistência 24h (conforme plano)
                  </li>
                  <li>
                    <span className={styles.bIcon}>✓</span>
                    Danos a terceiros (RCF-V)
                  </li>
                  <li>
                    <span className={styles.bIcon}>✓</span>
                    Gestão simplificada e suporte especializado
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
                  Condições especiais para empresas com mais de um veículo.
                </div>
              </div>
            </div>

            {/* DIVISÓRIA */}
            <div className={styles.divider} />

            {/* CTA FINAL */}
            <section className={styles.bottomCta}>
              <div>
                <h3 className={styles.h3}>Quer reduzir riscos e organizar sua frota?</h3>
                <p className={styles.small}>
                  Fale com a Urano e receba uma análise personalizada para sua operação.
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
