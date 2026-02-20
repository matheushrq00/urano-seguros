import Link from "next/link";
import styles from "./seguro-maquinas-agricolas.module.css";
import Image from "next/image";

export const metadata = {
  title: "Seguro Máquinas Agrícolas | Urano Seguros",
  description:
    "Seguro Máquinas Agrícolas para proteger tratores, colheitadeiras e implementos contra riscos previstos em apólice. Atendimento consultivo com a Urano Seguros.",
};

export default function SeguroMaquinasAgricolasPage() {
  return (
    <main className={styles.page}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <h1 className={styles.heroTitle}>Seguro Máquinas Agrícolas</h1>

          <div className={styles.breadcrumb}>
            <Link href="/">Home</Link>
            <span className={styles.sep}>›</span>
            <Link href="/para-empresas">Para empresas</Link>
            <span className={styles.sep}>›</span>
            <span>Máquinas Agrícolas</span>
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
                    src="/images/seguro-maquinas-agricolas.png"
                    alt="Trator moderno em lavoura com cenário premium"
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
                  Proteção para o maquinário que sustenta sua produção
                </h2>

                <p className={styles.p}>
                  O Seguro Máquinas Agrícolas é indicado para proteger tratores,
                  colheitadeiras, pulverizadores e implementos contra riscos
                  previstos na apólice, reduzindo impactos financeiros causados
                  por imprevistos durante a operação.
                </p>

                <p className={styles.p}>
                  Na Urano Seguros, analisamos tipo de máquina, valor, uso,
                  local de operação e perfil da propriedade para estruturar
                  uma cobertura adequada com atendimento consultivo e transparente.
                </p>

                <ul className={styles.bullets}>
                  <li>
                    <span className={styles.bIcon}>✓</span>
                    Proteção para tratores, colheitadeiras e implementos
                  </li>
                  <li>
                    <span className={styles.bIcon}>✓</span>
                    Coberturas conforme tipo e finalidade da máquina
                  </li>
                  <li>
                    <span className={styles.bIcon}>✓</span>
                    Redução de riscos financeiros na operação agrícola
                  </li>
                  <li>
                    <span className={styles.bIcon}>✓</span>
                    Atendimento consultivo especializado no agro
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
                  Segurança para operar com tranquilidade do plantio à colheita.
                </div>
              </div>
            </div>

            <div className={styles.divider} />

            <section className={styles.bottomCta}>
              <div>
                <h3 className={styles.h3}>Quer proteger seu maquinário?</h3>
                <p className={styles.small}>
                  Informe modelo, valor e utilização e receba orientação personalizada.
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
