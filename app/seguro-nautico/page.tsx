import Link from "next/link";
import styles from "./seguro-nautico.module.css";
import Image from "next/image";

export const metadata = {
  title: "Seguro Náutico | Urano Seguros",
  description:
    "Seguro náutico para lanchas, veleiros e embarcações, com coberturas sob medida e atendimento consultivo. Faça sua cotação com a Urano Seguros.",
};

export default function SeguroNauticoPage() {
  return (
    <main className={styles.page}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <h1 className={styles.heroTitle}>Seguro Náutico</h1>

          <div className={styles.breadcrumb}>
            <Link href="/">Home</Link>
            <span className={styles.sep}>›</span>
            <Link href="/para-voce">Para você</Link>
            <span className={styles.sep}>›</span>
            <span>Seguro Náutico</span>
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
                    src="/images/seguro-nautico.png"
                    alt="Lancha premium navegando ao pôr do sol em cenário sofisticado"
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

                <h2 className={styles.h2}>Proteção para navegar com tranquilidade.</h2>

                <p className={styles.p}>
                  O seguro náutico protege sua embarcação contra imprevistos
                  como colisões, roubo, danos materiais e responsabilidade civil
                  (conforme plano contratado).
                </p>

                <p className={styles.p}>
                  Na Urano Seguros, oferecemos atendimento consultivo para
                  encontrar a cobertura ideal para lanchas, veleiros e outras
                  embarcações, com soluções sob medida.
                </p>

                <ul className={styles.bullets}>
                  <li>
                    <span className={styles.bIcon}>✓</span>
                    Danos parciais e perda total (conforme plano)
                  </li>
                  <li>
                    <span className={styles.bIcon}>✓</span>
                    Roubo e furto (conforme cobertura)
                  </li>
                  <li>
                    <span className={styles.bIcon}>✓</span>
                    Responsabilidade civil a terceiros
                  </li>
                  <li>
                    <span className={styles.bIcon}>✓</span>
                    Coberturas adicionais personalizadas
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
                  Navegue com segurança e proteção adequada.
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
                  Encontre a proteção ideal para sua embarcação.
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
