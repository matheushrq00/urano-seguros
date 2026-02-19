import Link from "next/link";
import styles from "./seguro-auto.module.css";
import Image from "next/image";

export const metadata = {
  title: "Seguro Automóvel | Urano Seguros",
  description:
    "Seguro auto com coberturas sob medida, assistência 24h e atendimento consultivo. Peça sua cotação com a Urano Seguros.",
};

export default function SeguroAutoPage() {
  return (
    <main className={styles.page}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <h1 className={styles.heroTitle}>Seguro Automóvel</h1>

          <div className={styles.breadcrumb}>
            <Link href="/">Home</Link>
            <span className={styles.sep}>›</span>
            <Link href="/para-voce">Para você</Link>
            <span className={styles.sep}>›</span>
            <span>Seguro Automóvel</span>
          </div>
        </div>
      </section>

      {/* CONTEÚDO */}
      <section className={styles.content}>
        <div className={styles.wrap}>
          <div className={styles.cardShell}>
            <div className={styles.twoCol}>
              {/* LEFT (placeholder da imagem) */}
              <div className={styles.media}>
  <div className={styles.mediaFrame}>
    <Image
      src="/images/seguro-auto.png"
      alt="Casal brasileiro ao lado do carro após assistência 24h"
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

                <h2 className={styles.h2}>Consulte-nos e faça uma cotação!</h2>

                <p className={styles.p}>
                  O seguro auto protege você e seu veículo contra imprevistos
                  como colisões, roubo/furto e danos a terceiros — com coberturas
                  sob medida para o seu perfil.
                </p>

                <p className={styles.p}>
                  Na Urano Seguros, você conta com atendimento humano e consultivo
                  para encontrar a melhor opção entre as principais seguradoras do mercado.
                </p>

                <ul className={styles.bullets}>
                  <li>
                    <span className={styles.bIcon}>✓</span>
                    Assistência 24h (conforme plano)
                  </li>
                  <li>
                    <span className={styles.bIcon}>✓</span>
                    Coberturas completas e personalizadas
                  </li>
                  <li>
                    <span className={styles.bIcon}>✓</span>
                    Danos a terceiros (RCF-V)
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
                  Aproveite e faça uma cotação agora mesmo.
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
