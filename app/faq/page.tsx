import Link from "next/link";
import Image from "next/image";
import styles from "./faq.module.css";

export const metadata = {
  title: "Perguntas Frequentes | Urano Seguros",
  description:
    "Tire dúvidas sobre seguros, contratação, cotação on-line e atendimento. A Urano Seguros atende o Brasil inteiro com transparência e atendimento humanizado.",
};

const faqs = [
  {
    q: "A Urano Seguros atende em todo o Brasil?",
    a: "Sim. Somos de Limeira/SP e atendemos clientes em todo o Brasil, com suporte rápido via WhatsApp e atendimento consultivo.",
  },
  {
    q: "A Urano é uma empresa familiar?",
    a: "Sim. A Urano Seguros é uma empresa familiar e nosso foco é atendimento próximo, transparente e humanizado.",
  },
  {
    q: "Quantos anos a Urano tem?",
    a: "A Urano Seguros foi fundada em 25/05/2018. Além disso, contamos com profissionais com mais de 30 anos de experiência em seguros.",
  },
  {
    q: "Como funciona a cotação? Vocês explicam tudo mesmo?",
    a: "Sim. A gente não manda só texto pronto: explicamos com clareza (inclusive por áudios) para você entender coberturas, franquias e o que faz sentido no seu perfil.",
  },
  {
    q: "Consigo fazer uma cotação on-line?",
    a: "Sim. Você pode fazer pelo WhatsApp ou pela página de Cotação On-line. Se preferir, a gente também orienta por mensagem/áudio.",
  },
  {
    q: "Com quais seguradoras vocês trabalham?",
    a: "Trabalhamos com diversas seguradoras e buscamos a melhor opção para seu perfil e objetivo. Na cotação, apresentamos alternativas e explicamos diferenças de cobertura.",
  },
  {
    q: "O que eu preciso para cotar Seguro Auto ou Moto?",
    a: "Geralmente: dados do veículo, CEP de pernoite, condutores e uso. Se você chamar no WhatsApp, te guiamos passo a passo.",
  },
  {
    q: "Posso contratar tudo pelo WhatsApp?",
    a: "Sim. Desde a cotação até a emissão, te acompanhamos no processo com suporte consultivo e envio dos dados necessários.",
  },
  {
    q: "Quais seguros vocês oferecem?",
    a: "Auto, moto, residência, vida, viagem, fiança locatícia, saúde/planos, empresarial, frota, cargas, transportes, agro, riscos, cyber e outros — sempre com análise sob medida.",
  },
];

export default function FaqPage() {
  return (
    <main className={styles.page}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <h1 className={styles.heroTitle}>Perguntas e Respostas</h1>

          <div className={styles.breadcrumb}>
            <Link href="/">Home</Link>
            <span className={styles.sep}>›</span>
            <span>Perguntas e Respostas</span>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className={styles.content}>
        <div className={styles.wrap}>
          <div className={styles.panel}>
            {/* LEFT */}
            <div className={styles.left}>
              <div className={styles.media}>
                <Image
                  src="/images/faq.png"
                  alt="Atendimento consultivo e transparente da Urano Seguros"
                  width={900}
                  height={980}
                  className={styles.mediaImg}
                  priority
                />
              </div>

              <div className={styles.badge}>
                Atendimento consultivo • Áudios explicativos • Transparência
              </div>
            </div>

            {/* RIGHT */}
            <div className={styles.right}>
              <div className={styles.rightHead}>
                <p className={styles.kicker}>URANO SEGUROS</p>
                <h2 className={styles.h2}>Tire suas dúvidas com clareza</h2>
                <p className={styles.p}>
                  Selecionamos as perguntas mais comuns para você entender com
                  facilidade como funciona nosso atendimento e as opções de seguro.
                </p>
              </div>

              <div className={styles.accordion}>
                {faqs.map((item) => (
                  <details key={item.q} className={styles.item}>
                    <summary className={styles.summary}>
                      <span>{item.q}</span>
                      <span className={styles.chev} aria-hidden>+</span>
                    </summary>
                    <div className={styles.answer}>{item.a}</div>
                  </details>
                ))}
              </div>
            </div>
          </div>

          {/* CTA FINAL */}
          <section className={styles.cta}>
            <div className={styles.ctaLeft}>
              <h3 className={styles.h3}>Restou alguma dúvida?</h3>
              <p className={styles.small}>
                Fale com a nossa equipe. A gente explica de um jeito simples e direto.
              </p>
            </div>

            <div className={styles.ctaBtns}>
              <a
                className={styles.btnPrimary}
                href="https://wa.me/5519998722063"
                target="_blank"
                rel="noreferrer"
              >
                Chamar no WhatsApp
              </a>
              <Link className={styles.btnGreen} href="/contato">
                Contato
              </Link>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}