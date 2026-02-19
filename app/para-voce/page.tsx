import Link from "next/link";
import styles from "./para-voce.module.css";

export const metadata = {
  title: "Para Você | Urano Seguros",
  description:
    "Seguro auto, vida, residência, saúde e mais. Atendimento consultivo e rápido. Faça sua cotação pelo WhatsApp.",
};

const sections = [
  {
    title: "Seguros do dia a dia",
    desc: "Proteções essenciais para sua rotina, seu patrimônio e sua mobilidade.",
    items: [
      { title: "Seguro Automóvel", href: "/seguro-auto" },
      { title: "Seguro Moto", href: "/seguro-moto" },
      { title: "Seguro Bicicleta", href: "/seguro-auto" },
      { title: "Seguro Residência", href: "/seguro-residencial" },
      { title: "Seguro Viagem", href: "/seguro-auto" },
      { title: "Seguro Fiança Locatícia", href: "/seguro-residencial" },
    ],
  },
  {
    title: "Proteção pessoal e familiar",
    desc: "Planejamento e segurança financeira para você e sua família.",
    items: [
      { title: "Seguro Vida", href: "/seguro-vida" },
      { title: "Acidentes Pessoais", href: "/seguro-vida" },
      { title: "Previdência Individual", href: "/seguro-vida" },
    ],
  },
  {
    title: "Saúde e bens",
    desc: "Coberturas e soluções para cuidar do que é mais importante.",
    items: [
      { title: "Seguro Saúde / Planos de Saúde", href: "/planos-de-saude" },
      { title: "Seguro Equipamentos", href: "/seguros-eletronicos" },
    ],
  },
  {
    title: "Seguros especiais",
    desc: "Segmentos específicos com análise consultiva e proposta sob medida.",
    items: [
      { title: "Seguro Náutico", href: "/seguro-empresarial" },
      { title: "Seguro Aeronáutico", href: "/seguro-empresarial" },
    ],
  },
];

export default function ParaVocePage() {
  return (
    <main className={styles.page}>
      {/* Banner */}
      <section className={styles.banner}>
        <div className={styles.bannerWrap}>
          <h1 className={styles.bannerTitle}>Para Você</h1>

          <div className={styles.breadcrumb}>
            <Link href="/">Home</Link>
            <span className={styles.sep}>›</span>
            <span>Para você</span>
          </div>
        </div>
      </section>

      {/* Conteúdo */}
      <section className={styles.content}>
        <div className={styles.wrap}>
          <header className={styles.intro}>
            <p className={styles.lead}>
              Escolha o tipo de seguro ideal e peça sua cotação com atendimento humano e consultivo.
            </p>

            <div className={styles.ctaRow}>
              <a
                className="btnPrimary"
                href="https://wa.me/5519998722063"
                target="_blank"
                rel="noreferrer"
              >
                Cotar no WhatsApp
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

                <div className={`${styles.grid} ${sec.items.length === 2 ? styles.grid2 : ""}`}>
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
            <h3 className={styles.noteTitle}>Não encontrou o que precisa?</h3>
            <p className={styles.noteText}>
              A Urano trabalha com diversas seguradoras e soluções sob medida. Fale com a gente e
              montamos a melhor opção para o seu perfil.
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
