import Link from "next/link";
import styles from "./seguro-patrimonial-empresarial.module.css";
import Image from "next/image";

export const metadata = {
  title: "Seguro Patrimonial Empresarial | Urano Seguros",
  description:
    "Seguro Patrimonial Empresarial para proteger estrutura, equipamentos e bens da empresa, com coberturas sob medida e atendimento consultivo. Faça sua cotação com a Urano Seguros.",
};

export default function SeguroPatrimonialEmpresarialPage() {
  return (
    <main className={styles.page}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <h1 className={styles.heroTitle}>Seguro Patrimonial Empresarial</h1>

          <div className={styles.breadcrumb}>
            <Link href="/">Home</Link>
            <span className={styles.sep}>›</span>
            <Link href="/para-empresas">Para empresas</Link>
            <span className={styles.sep}>›</span>
            <span>Patrimonial Empresarial</span>
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
                    src="/images/seguro-patrimonial-empresarial.png"
                    alt="Sede corporativa moderna representando proteção patrimonial"
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
                  Proteja a estrutura e os bens que mantêm sua empresa de pé
                </h2>

                <p className={styles.p}>
                  O Seguro Patrimonial Empresarial é indicado para empresas que
                  desejam proteger instalações, equipamentos, estoques e bens
                  contra riscos previstos na apólice, reduzindo impactos financeiros
                  em caso de imprevistos (conforme coberturas contratadas).
                </p>

                <p className={styles.p}>
                  Na Urano Seguros, avaliamos seu segmento, localização, valores
                  envolvidos e rotina da operação para montar uma proteção sob
                  medida, com transparência e atendimento consultivo.
                </p>

                <ul className={styles.bullets}>
                  <li>
                    <span className={styles.bIcon}>✓</span>
                    Coberturas para estrutura, bens e conteúdos (conforme apólice)
                  </li>
                  <li>
                    <span className={styles.bIcon}>✓</span>
                    Danos elétricos, incêndio e outros riscos (conforme plano)
                  </li>
                  <li>
                    <span className={styles.bIcon}>✓</span>
                    Possibilidade de incluir estoque e equipamentos
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
                  Mais previsibilidade para sua empresa operar com tranquilidade.
                </div>
              </div>
            </div>

            <div className={styles.divider} />

            <section className={styles.bottomCta}>
              <div>
                <h3 className={styles.h3}>Quer uma análise patrimonial?</h3>
                <p className={styles.small}>
                  Informe segmento, local e valores e a Urano indica a melhor estrutura de cobertura.
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