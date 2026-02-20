import Link from "next/link";
import styles from "./seguro-equipamentos-agricolas.module.css";
import Image from "next/image";

export const metadata = {
  title: "Seguro Equipamentos | Urano Seguros",
  description:
    "Seguro Equipamentos para proteger máquinas, equipamentos agrícolas e empresariais contra riscos previstos em apólice. Atendimento consultivo com a Urano Seguros.",
};

export default function SeguroEquipamentosPage() {
  return (
    <main className={styles.page}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <h1 className={styles.heroTitle}>Seguro Equipamentos</h1>

          <div className={styles.breadcrumb}>
            <Link href="/">Home</Link>
            <span className={styles.sep}>›</span>
            <Link href="/para-empresas">Para empresas</Link>
            <span className={styles.sep}>›</span>
            <span>Seguro Equipamentos</span>
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
                    src="/images/seguro-equipamentos-agricolas.png"
                    alt="Máquinas e equipamentos profissionais em ambiente industrial ou agrícola"
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
                  Proteção para máquinas e equipamentos que sustentam sua operação
                </h2>

                <p className={styles.p}>
                  O Seguro Equipamentos é indicado para proteger máquinas e
                  equipamentos agrícolas ou empresariais contra riscos previstos
                  na apólice, reduzindo impactos financeiros em caso de imprevistos.
                </p>

                <p className={styles.p}>
                  Na Urano Seguros, analisamos o tipo de equipamento, valor,
                  utilização e local de operação para estruturar uma proteção
                  sob medida com atendimento consultivo e transparente.
                </p>

                <ul className={styles.bullets}>
                  <li>
                    <span className={styles.bIcon}>✓</span>
                    Coberturas conforme tipo e uso do equipamento
                  </li>
                  <li>
                    <span className={styles.bIcon}>✓</span>
                    Proteção para equipamentos agrícolas e empresariais
                  </li>
                  <li>
                    <span className={styles.bIcon}>✓</span>
                    Redução de riscos operacionais e financeiros
                  </li>
                  <li>
                    <span className={styles.bIcon}>✓</span>
                    Atendimento consultivo e suporte ágil
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
                  Segurança para manter sua operação funcionando sem interrupções.
                </div>
              </div>
            </div>

            <div className={styles.divider} />

            <section className={styles.bottomCta}>
              <div>
                <h3 className={styles.h3}>Quer proteger seus equipamentos?</h3>
                <p className={styles.small}>
                  Informe tipo, valor e finalidade e receba orientação personalizada.
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
