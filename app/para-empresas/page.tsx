import Link from "next/link";
import styles from "./para-empresas.module.css";

export const metadata = {
  title: "Para Empresas | Urano Seguros",
  description:
    "Seguro empresarial, frota, cargas, responsabilidade civil, vida em grupo e benefícios. Atendimento consultivo e rápido. Faça sua cotação pelo WhatsApp.",
};

const sections = [
  {
    title: "Operação, frota e logística",
    desc: "Proteções essenciais para manter a sua operação rodando com segurança.",
    items: [
      { title: "Seguro Frota", href: "/seguro-frota" },
      { title: "Seguro Carga", href: "/seguro-carga" },
      { title: "Seguro Transportes", href: "/seguro-transportes" },
      // extras recomendados (bem comuns em logística)
      { title: "RCTR-C (Transportador)", href: "/rctr-c" },
      { title: "RCF-DC (Transportador)", href: "/rcf-dc" },
      { title: "Seguro Viagem Corporativa", href: "/seguro-viagem-corporativa" },
    ],
  },
  {
    title: "Patrimônio e responsabilidade",
    desc: "Coberturas para proteger estrutura, contratos e exposição a riscos.",
    items: [
      { title: "Seguro Empresarial", href: "/seguro-empresarial" },
      { title: "Responsabilidade Civil", href: "/responsabilidade-civil" },
      { title: "Seguro Risco Engenharia", href: "/seguro-risco-engenharia" },
      { title: "Seguro Condomínio", href: "/seguro-condominio" },
      // extras premium B2B (autoridade + demanda)
      { title: "Seguro Garantia", href: "/seguro-garantia" },
      { title: "Seguro Cyber", href: "/seguro-cyber" },
    ],
  },
  {
    title: "Pessoas e benefícios",
    desc: "Soluções para equipes, benefícios e proteção financeira.",
    items: [
      { title: "Seguro de Vida em Grupo", href: "/seguro-vida-em-grupo" },
      { title: "Seguro Saúde", href: "/seguro-saude" },
      { title: "Seguro Odontológico", href: "/seguro-odontologico" },
      { title: "Seguro Acidentes Pessoais", href: "/acidentes-pessoais" },
      // extra opcional que fecha bem B2B
      { title: "Previdência Empresarial", href: "/previdencia-empresarial" },
    ],
  },
  {
    title: "Agro e operação no campo",
    desc: "Proteções para atividade rural e patrimônio produtivo.",
    items: [
      { title: "Seguro Agrícola", href: "/seguro-agricola" },
      { title: "Equipamentos Agrícolas", href: "/seguro-equipamentos-agricolas" },
      // extras interessantes (se você quiser cobrir agro completo)
      { title: "Máquinas Agrícolas", href: "/seguro-maquinas-agricolas" },
      { title: "Patrimonial Rural", href: "/seguro-patrimonial-empresarial" },
    ],
  },
];

export default function ParaEmpresasPage() {
  return (
    <main className={styles.page}>
      {/* Banner */}
      <section className={styles.banner}>
        <div className={styles.bannerWrap}>
          <h1 className={styles.bannerTitle}>Para Empresas</h1>

          <div className={styles.breadcrumb}>
            <Link href="/">Home</Link>
            <span className={styles.sep}>›</span>
            <span>Para empresas</span>
          </div>
        </div>
      </section>

      {/* Conteúdo */}
      <section className={styles.content}>
        <div className={styles.wrap}>
          <header className={styles.intro}>
            <p className={styles.lead}>
              Escolha a solução ideal para sua empresa e peça sua cotação com atendimento humano,
              consultivo e transparente.
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
            <h3 className={styles.noteTitle}>Precisa de uma solução sob medida?</h3>
            <p className={styles.noteText}>
              Conte seu cenário (ramo, frota, equipe e riscos) e a Urano te orienta com clareza —
              com explicações completas (inclusive por áudio) para você entender o seguro de verdade.
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
