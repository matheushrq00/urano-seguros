import Link from "next/link";
import styles from "./seguro-equipamentos.module.css";
import Image from "next/image";

export const metadata = {
  title: "Seguro Equipamentos | Urano Seguros",
  description:
    "Seguro equipamentos para proteger seu patrimônio contra roubo e danos, com coberturas sob medida e atendimento consultivo. Faça sua cotação com a Urano Seguros.",
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
            <Link href="/para-voce">Para você</Link>
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
              {/* LEFT (imagem) */}
              <div className={styles.media}>
                <div className={styles.mediaFrame}>
                  <Image
                    src="/images/seguro-equipamentos.png"
                    alt="Profissional com equipamentos premium protegidos, em cenário moderno"
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

                <h2 className={styles.h2}>Proteja seus equipamentos. Proteja seu trabalho.</h2>

                <p className={styles.p}>
                  O seguro equipamentos ajuda a proteger itens de alto valor utilizados no dia a dia
                  — como notebooks, câmeras, ferramentas, instrumentos e outros — contra imprevistos
                  como roubo e danos acidentais (conforme cobertura).
                </p>

                <p className={styles.p}>
                  Na Urano Seguros, você conta com atendimento consultivo para escolher a melhor opção
                  conforme o tipo de equipamento, uso e necessidade.
                </p>

                <ul className={styles.bullets}>
                  <li>
                    <span className={styles.bIcon}>✓</span>
                    Cobertura contra roubo e furto qualificado (conforme plano)
                  </li>
                  <li>
                    <span className={styles.bIcon}>✓</span>
                    Danos elétricos e acidentais (conforme cobertura)
                  </li>
                  <li>
                    <span className={styles.bIcon}>✓</span>
                    Proteção para uso profissional ou pessoal (conforme contratação)
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
                  Uma solução sob medida para seu patrimônio e sua rotina.
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
