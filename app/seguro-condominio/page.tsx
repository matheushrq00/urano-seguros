import Link from "next/link";
import styles from "./seguro-condominio.module.css";
import Image from "next/image";

export const metadata = {
  title: "Seguro Condomínio | Urano Seguros",
  description:
    "Seguro condomínio para proteger áreas comuns e estrutura do prédio, com coberturas sob medida e atendimento consultivo. Faça sua cotação com a Urano Seguros.",
};

export default function SeguroCondominioPage() {
  return (
    <main className={styles.page}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <h1 className={styles.heroTitle}>Seguro Condomínio</h1>

          <div className={styles.breadcrumb}>
            <Link href="/">Home</Link>
            <span className={styles.sep}>›</span>
            <Link href="/para-empresas">Para empresas</Link>
            <span className={styles.sep}>›</span>
            <span>Seguro Condomínio</span>
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
                    src="/images/seguro-condominio.png"
                    alt="Condomínio moderno com fachada premium em cenário urbano"
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
                  Proteção para a estrutura e áreas comuns do condomínio
                </h2>

                <p className={styles.p}>
                  O Seguro Condomínio protege o patrimônio do condomínio, incluindo
                  áreas comuns e estrutura, contra riscos como incêndio, danos elétricos,
                  responsabilidade civil e outros eventos previstos na apólice
                  (conforme contratação).
                </p>

                <p className={styles.p}>
                  Na Urano Seguros, orientamos síndicos e administradoras com clareza,
                  ajudando a escolher coberturas sob medida para o perfil do condomínio —
                  com transparência e atendimento humanizado.
                </p>

                <ul className={styles.bullets}>
                  <li>
                    <span className={styles.bIcon}>✓</span>
                    Proteção para áreas comuns e estrutura (conforme apólice)
                  </li>
                  <li>
                    <span className={styles.bIcon}>✓</span>
                    Danos elétricos e incêndio (conforme cobertura)
                  </li>
                  <li>
                    <span className={styles.bIcon}>✓</span>
                    Responsabilidade civil do condomínio (conforme plano)
                  </li>
                  <li>
                    <span className={styles.bIcon}>✓</span>
                    Atendimento consultivo para síndicos e administradoras
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
                  Segurança e previsibilidade para a gestão do condomínio.
                </div>
              </div>
            </div>

            <div className={styles.divider} />

            <section className={styles.bottomCta}>
              <div>
                <h3 className={styles.h3}>É síndico ou administradora?</h3>
                <p className={styles.small}>
                  Fale com a Urano e receba uma proposta alinhada ao seu condomínio e orçamento.
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
