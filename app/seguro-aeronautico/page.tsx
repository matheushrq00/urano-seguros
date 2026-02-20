import Link from "next/link";
import styles from "./seguro-aeronautico.module.css";
import Image from "next/image";

export const metadata = {
  title: "Seguro Aeronáutico | Urano Seguros",
  description:
    "Seguro aeronáutico para aeronaves particulares e executivas, com coberturas sob medida e atendimento consultivo especializado. Faça sua cotação com a Urano Seguros.",
};

export default function SeguroAeronauticoPage() {
  return (
    <main className={styles.page}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <h1 className={styles.heroTitle}>Seguro Aeronáutico</h1>

          <div className={styles.breadcrumb}>
            <Link href="/">Home</Link>
            <span className={styles.sep}>›</span>
            <Link href="/para-voce">Para você</Link>
            <span className={styles.sep}>›</span>
            <span>Seguro Aeronáutico</span>
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
                    src="/images/seguro-aeronautico.png"
                    alt="Jato executivo em pista ao pôr do sol com clima sofisticado"
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

                <h2 className={styles.h2}>Proteção especializada para sua aeronave.</h2>

                <p className={styles.p}>
                  O seguro aeronáutico oferece cobertura para aeronaves particulares,
                  executivas e comerciais, protegendo contra danos materiais,
                  responsabilidade civil e outros riscos operacionais (conforme plano).
                </p>

                <p className={styles.p}>
                  Na Urano Seguros, atuamos com atendimento consultivo para
                  estruturar uma solução sob medida, considerando tipo de aeronave,
                  operação e perfil de uso.
                </p>

                <ul className={styles.bullets}>
                  <li>
                    <span className={styles.bIcon}>✓</span>
                    Danos à aeronave (casco) – conforme cobertura
                  </li>
                  <li>
                    <span className={styles.bIcon}>✓</span>
                    Responsabilidade civil a terceiros
                  </li>
                  <li>
                    <span className={styles.bIcon}>✓</span>
                    Cobertura para passageiros (conforme plano)
                  </li>
                  <li>
                    <span className={styles.bIcon}>✓</span>
                    Análise personalizada conforme perfil operacional
                  </li>
                </ul>

                <div className={styles.ctaRow}>
                  <a
                    className={styles.btnPrimary}
                    href="https://wa.me/5519998722063"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Falar com especialista no WhatsApp
                  </a>
                </div>

                <div className={styles.noteLine}>
                  <span className={styles.dot} />
                  Soluções estruturadas para alto padrão de proteção.
                </div>
              </div>
            </div>

            {/* DIVISÓRIA */}
            <div className={styles.divider} />

            {/* FAIXA COTAÇÃO ON-LINE */}
            <section className={styles.bottomCta}>
              <div className={styles.bottomLeft}>
                <h3 className={styles.h3}>Cotação Personalizada</h3>
                <p className={styles.small}>
                  Solicite uma análise exclusiva para sua aeronave.
                </p>
              </div>

              <Link className={styles.btnGreen} href="/cotacao-online">
                Solicitar análise
              </Link>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
