import Link from "next/link";
import styles from "./produtos-financeiros.module.css";

export const metadata = {
  alternates: {
    canonical: "/produtos-financeiros",
  },
};

const sections = [
  {
    title: "Soluções para planejar e conquistar",
    desc: "Produtos financeiros para organizar, realizar objetivos e ganhar previsibilidade.",
    items: [
      { title: "Consórcio", href: "/consorcio" },
      { title: "Financiamento", href: "/financiamento" },
      { title: "Capitalização", href: "/capitalizacao" },
    ],
  },
];

export default function ProdutosFinanceirosPage() {
  return (
    <main className={styles.page}>
      {/* Banner */}
      <section className={styles.banner}>
        <div className={styles.bannerWrap}>
          <h1 className={styles.bannerTitle}>Produtos Financeiros</h1>

          <div className={styles.breadcrumb}>
            <Link href="/">Home</Link>
            <span className={styles.sep}>›</span>
            <span>Produtos Financeiros</span>
          </div>
        </div>
      </section>

      {/* Conteúdo */}
      <section className={styles.content}>
        <div className={styles.wrap}>
          <header className={styles.intro}>
            <p className={styles.lead}>
              Escolha a solução ideal e peça sua simulação com atendimento humano e consultivo.
            </p>

            <div className={styles.ctaRow}>
              <a
                className="btnPrimary"
                href="https://wa.me/5519998722063"
                target="_blank"
                rel="noreferrer"
              >
                Simular no WhatsApp
              </a>

              <Link className={styles.ctaSecondary} href="/contato">
                Falar com um consultor
              </Link>
            </div>
          </header>

          <div className={styles.sections}>
            {sections.map((sec) => (
              <section key={sec.title} className={styles.section}>
                <div className={styles.sectionHead}>
                  <h2 className={styles.sectionTitle}>{sec.title}</h2>
                  <p className={styles.sectionDesc}>{sec.desc}</p>
                </div>

                <div className={styles.grid}>
                  {sec.items.map((it) => (
                    <Link key={it.href + it.title} href={it.href} className={styles.card}>
                      <h3 className={styles.cardTitle}>{it.title}</h3>
                      <div className={styles.cardMeta}>...</div>
                      <span className={styles.cardCta}>Saiba mais</span>
                    </Link>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <aside className={styles.note}>
            <h3 className={styles.noteTitle}>Quer comparar opções e parcelas?</h3>
            <p className={styles.noteText}>
              A Urano trabalha com soluções e parceiros para encontrar o melhor caminho conforme seu objetivo, prazo e
              perfil. Chame a gente e montamos a melhor proposta.
            </p>
            <a
              className="btnPrimary"
              href="https://wa.me/5519998722063"
              target="_blank"
              rel="noreferrer"
            >
              Falar no WhatsApp
            </a>
          </aside>
        </div>
      </section>
    </main>
  );
}
