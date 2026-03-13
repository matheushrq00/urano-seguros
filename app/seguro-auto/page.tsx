import Script from "next/script";
import Link from "next/link";
import styles from "./seguro-auto.module.css";
import Image from "next/image";

export const metadata = {
title: "Seguro Auto em Limeira | Cotação de Seguro de Carro | Urano Seguros",
description:
"Seguro auto em Limeira com cotação rápida nas melhores seguradoras. Proteja seu carro contra roubo, colisão e danos a terceiros com atendimento da Urano Seguros.",
};

export default function SeguroAutoPage() {
  const schema = {
"@context": "https://schema.org",
"@type": "InsuranceAgency",
"name": "Urano Seguros",
"url": "https://uranoseguros.com.br",
"telephone": "+55 19 99872-2063",
"areaServed": {
"@type": "City",
"name": "Limeira"
},
"address": {
"@type": "PostalAddress",
"addressLocality": "Limeira",
"addressRegion": "SP",
"addressCountry": "BR"
}
};
return ( <main className={styles.page}>

```
  {/* HERO */}
  <section className={styles.hero}>
    <div className={styles.heroInner}>
      <h1 className={styles.heroTitle}>Seguro Auto em Limeira | Cotação de Seguro de Carro</h1>

      <div className={styles.breadcrumb}>
        <Link href="/">Home</Link>
        <span className={styles.sep}>›</span>
        <Link href="/para-voce">Para você</Link>
        <span className={styles.sep}>›</span>
        <span>Seguro Automóvel</span>
      </div>
    </div>
  </section>

  {/* BENEFÍCIOS RÁPIDOS */}
  <section className={styles.quickBenefits}>
    <div className={styles.wrap}>
      <div className={styles.quickGrid}>

        <div>
          <h4>🚗 Proteção Completa</h4>
          <p>Seguro contra colisão, roubo e danos a terceiros.</p>
        </div>

        <div>
          <h4>⚡ Cotação Rápida</h4>
          <p>Receba sua cotação em poucos minutos.</p>
        </div>

        <div>
          <h4>🛠 Assistência 24h</h4>
          <p>Guincho, chaveiro e suporte emergencial.</p>
        </div>

        <div>
          <h4>🤝 Atendimento Humano</h4>
          <p>Equipe especializada em seguro auto em Limeira.</p>
        </div>

      </div>
    </div>
  </section>

  {/* CONTEÚDO PRINCIPAL */}
  <section className={styles.content}>
    <div className={styles.wrap}>
      <div className={styles.cardShell}>

        <div className={styles.twoCol}>

          {/* IMAGEM */}
          <div className={styles.media}>
            <div className={styles.mediaFrame}>
              <Image
                src="/images/seguro-auto.png"
                alt="Seguro auto em Limeira atendimento Urano Seguros"
                width={900}
                height={900}
                className={styles.mediaImg}
                priority
              />
            </div>
          </div>

          {/* TEXTO */}
          <div className={styles.copy}>
            <p className={styles.kicker}>URANO SEGUROS</p>

            <h2 className={styles.h2}>
              Cotação de Seguro Auto em Limeira
            </h2>

            <p className={styles.p}>
              O seguro auto protege você e seu veículo contra imprevistos
              como colisões, roubo, furto e danos a terceiros.
            </p>

            <p className={styles.p}>
              Na Urano Seguros você encontra atendimento consultivo para
              escolher a melhor proteção para seu veículo com diversas
              seguradoras do mercado.
            </p>

            <ul className={styles.bullets}>
              <li>
                <span className={styles.bIcon}>✓</span>
                Assistência 24h
              </li>

              <li>
                <span className={styles.bIcon}>✓</span>
                Coberturas personalizadas
              </li>

              <li>
                <span className={styles.bIcon}>✓</span>
                Danos a terceiros
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

            <div className={styles.heroTrust}>
              <span>✔ Atendimento especializado em Limeira</span>
              <span>✔ Cotação com diversas seguradoras</span>
              <span>✔ Suporte completo em sinistros</span>
            </div>

            <div className={styles.noteLine}>
              <span className={styles.dot} />
              Aproveite e faça uma cotação agora mesmo.
            </div>
          </div>

        </div>

        {/* DIVISÓRIA */}
        <div className={styles.divider} />

        {/* CTA */}
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

    {/* SEO CONTENT */}
    <section className={styles.seoSection}>
      <div className={styles.wrap}>

        <h2>Seguro Auto em Limeira com atendimento especializado</h2>

        <p>
          Se você procura <strong>seguro auto em Limeira</strong>, a Urano
          Seguros oferece cotação personalizada com diversas seguradoras
          do mercado. Nossa equipe ajuda você a encontrar a melhor
          proteção para seu veículo.
        </p>

        <p>
          Como <strong>corretora de seguros em Limeira</strong>, analisamos
          o perfil do motorista e do veículo para apresentar as melhores
          opções de seguro automóvel.
        </p>

        {/* COBERTURAS */}
        <h3>O que o seguro auto cobre</h3>

        <div className={styles.coverageGrid}>
          <div className={styles.coverageCard}>
            <h4>Colisão</h4>
            <p>Proteção contra danos ao veículo em acidentes.</p>
          </div>

          <div className={styles.coverageCard}>
            <h4>Roubo ou Furto</h4>
            <p>Indenização em caso de perda do veículo.</p>
          </div>

          <div className={styles.coverageCard}>
            <h4>Danos a Terceiros</h4>
            <p>Cobertura para prejuízos causados a outras pessoas.</p>
          </div>

          <div className={styles.coverageCard}>
            <h4>Assistência 24h</h4>
            <p>Guincho, chaveiro e suporte emergencial.</p>
          </div>
        </div>

        {/* PREÇO */}
        <h3>Quanto custa seguro auto em Limeira</h3>

        <p>
          O valor do seguro de carro em Limeira depende de fatores
          como modelo do veículo, idade do motorista e histórico
          de sinistros.
        </p>

        {/* BENEFÍCIOS */}
        <h2>Por que contratar seguro auto com a Urano Seguros</h2>

        <div className={styles.benefitsGrid}>

          <div className={styles.benefitCard}>
            <h4>Atendimento especializado</h4>
            <p>Equipe com experiência em seguros.</p>
          </div>

          <div className={styles.benefitCard}>
            <h4>Cotação com seguradoras</h4>
            <p>Comparação entre diversas seguradoras.</p>
          </div>

          <div className={styles.benefitCard}>
            <h4>Suporte em sinistros</h4>
            <p>Acompanhamento quando você precisar usar o seguro.</p>
          </div>

          <div className={styles.benefitCard}>
            <h4>Atendimento rápido</h4>
            <p>Cotação rápida e suporte via WhatsApp.</p>
          </div>

        </div>

        {/* PASSOS */}
        <h2>Como funciona a cotação de seguro auto</h2>

        <div className={styles.steps}>

          <div className={styles.step}>
            <span>1</span>
            <p>Entre em contato pelo WhatsApp.</p>
          </div>

          <div className={styles.step}>
            <span>2</span>
            <p>Informe os dados do veículo.</p>
          </div>

          <div className={styles.step}>
            <span>3</span>
            <p>Realizamos a cotação nas seguradoras.</p>
          </div>

          <div className={styles.step}>
            <span>4</span>
            <p>Você escolhe a melhor opção.</p>
          </div>

        </div>

        <section className={`${styles.partnersSection} section--tight`}>

  <div className={styles.wrap}>

    <h2 className={styles.sectionTitle}>
      Compare preços nas principais seguradoras do Brasil
    </h2>

    <div className={styles.partnersMarquee}>
      <div className={styles.partnersTrack}>

        <div className={styles.partnerCard}>
          <img src="/partners/porto.png" className={styles.partnerLogo} alt="Porto Seguro"/>
        </div>

        <div className={styles.partnerCard}>
          <img src="/partners/tokio.png" className={styles.partnerLogo} alt="Tokio Marine"/>
        </div>

        <div className={styles.partnerCard}>
          <img src="/partners/allianz.png" className={styles.partnerLogo} alt="Allianz Seguros"/>
        </div>

        <div className={styles.partnerCard}>
          <img src="/partners/hdi.png" className={styles.partnerLogo} alt="HDI Seguros"/>
        </div>

        <div className={styles.partnerCard}>
          <img src="/partners/mapfre.png" className={styles.partnerLogo} alt="Mapfre"/>
        </div>

        <div className={styles.partnerCard}>
          <img src="/partners/bradesco.png" className={styles.partnerLogo} alt="Bradesco Seguros"/>
        </div>

        <div className={styles.partnerCard}>
          <img src="/partners/azul.png" className={styles.partnerLogo} alt="Azul Seguros"/>
        </div>

        <div className={styles.partnerCard}>
          <img src="/partners/mitsui.webp" className={styles.partnerLogo} alt="Mitsui Seguros"/>
        </div>

        <div className={styles.partnerCard}>
          <img src="/partners/yelum.png" className={styles.partnerLogo} alt="Yelum Seguros"/>
        </div>

        <div className={styles.partnerCard}>
          <img src="/partners/aliro.png" className={styles.partnerLogo} alt="Aliro Seguros"/>
        </div>

        <div className={styles.partnerCard}>
          <img src="/partners/zurich.png" className={styles.partnerLogo} alt="Zurich Seguros"/>
        </div>

        <div className={styles.partnerCard}>
          <img src="/partners/itau.png" className={styles.partnerLogo} alt="Itaú Seguros"/>
        </div>

        {/* DUPLICAR PARA LOOP INFINITO */}

        <div className={styles.partnerCard}>
          <img src="/partners/porto.png" className={styles.partnerLogo} alt="Porto Seguro"/>
        </div>

        <div className={styles.partnerCard}>
          <img src="/partners/tokio.png" className={styles.partnerLogo} alt="Tokio Marine"/>
        </div>

        <div className={styles.partnerCard}>
          <img src="/partners/allianz.png" className={styles.partnerLogo} alt="Allianz Seguros"/>
        </div>

        <div className={styles.partnerCard}>
          <img src="/partners/hdi.png" className={styles.partnerLogo} alt="HDI Seguros"/>
        </div>

      </div>
    </div>

  </div>

</section>
{/* PROVA SOCIAL */}
<section className={styles.trustSection}>
  <div className={styles.wrap}>

    <h2>Mais de 2.400 clientes confiam na Urano Seguros</h2>

    <p>
      A Urano Seguros atende motoristas em Limeira oferecendo seguros
      personalizados com as principais seguradoras do Brasil. Nosso objetivo
      é ajudar cada cliente a encontrar a melhor proteção para seu veículo.
    </p>

    <p>
      Trabalhamos com atendimento consultivo, suporte completo em sinistros
      e acompanhamento durante toda a vigência da apólice.
    </p>

  </div>
</section>
        {/* CTA FINAL */}
        <div className={styles.finalCta}>
          <h3>Receba agora sua cotação de seguro auto em Limeira</h3>

          <p>
            Nossa equipe pode analisar seu perfil e encontrar a melhor
            cobertura para seu veículo.
          </p>

          <a
            href="https://wa.me/5519998722063"
            target="_blank"
            rel="noreferrer"
            className={styles.btnPrimary}
          >
            Solicitar cotação no WhatsApp
          </a>
        </div>
{/* ATENDIMENTO REGIONAL */}
<section className={styles.regionSection}>
  <div className={styles.wrap}>

    <h2>Seguro auto em Limeira e região</h2>

    <p>
      A Urano Seguros atende clientes em Limeira e também em cidades da
      região como Americana, Santa Bárbara d’Oeste, Piracicaba,
      Iracemápolis, Artur Nogueira e Campinas.
    </p>

    <p>
      Se você procura seguro auto em Limeira ou nas cidades próximas,
      nossa equipe pode realizar uma cotação personalizada com diversas
      seguradoras do mercado para encontrar a melhor proteção para seu
      veículo.
    </p>

  </div>
</section>
        {/* FAQ */}
<section className={styles.faqSection}>
  <div className={styles.wrap}>

    <h2>Perguntas frequentes sobre seguro auto</h2>

    <details className={styles.faqItem}>
      <summary>Quanto custa seguro auto em Limeira?</summary>
      <p>
        O valor do seguro auto em Limeira depende de fatores como modelo do
        veículo, idade do motorista, histórico de sinistros e região de
        circulação. Para saber o valor exato, é necessário realizar uma
        cotação personalizada com um corretor de seguros.
      </p>
    </details>

    <details className={styles.faqItem}>
      <summary>Qual a melhor seguradora de carro?</summary>
      <p>
        A melhor seguradora de carro depende do perfil do motorista e do
        veículo. No Brasil, seguradoras como Porto Seguro, Allianz, HDI,
        Tokio Marine, Mapfre, Zurich e Bradesco oferecem excelentes opções
        de cobertura. Um corretor pode comparar as opções e indicar a melhor
        alternativa para cada caso.
      </p>
    </details>

    <details className={styles.faqItem}>
      <summary>Seguro cobre enchente?</summary>
      <p>
        Dependendo da cobertura contratada, o seguro auto pode cobrir danos
        causados por enchentes ou alagamentos. Algumas seguradoras incluem
        essa proteção automaticamente em determinados planos.
      </p>
    </details>

    <details className={styles.faqItem}>
      <summary>Seguro cobre danos a terceiros?</summary>
      <p>
        Sim. A cobertura de responsabilidade civil protege contra danos
        materiais ou corporais causados a outras pessoas em acidentes
        envolvendo o veículo segurado.
      </p>
    </details>

    <details className={styles.faqItem}>
      <summary>Posso parcelar o seguro auto?</summary>
      <p>
        Sim. A maioria das seguradoras permite parcelar o seguro auto em até
        10 ou 12 vezes no cartão ou boleto, dependendo da seguradora e do
        plano contratado.
      </p>
    </details>

    <details className={styles.faqItem}>
      <summary>Como funciona a franquia do seguro?</summary>
      <p>
        A franquia é o valor que o segurado paga em caso de sinistro parcial,
        como uma colisão. A seguradora cobre o restante do prejuízo conforme
        as condições da apólice contratada.
      </p>
    </details>

  </div>
</section>

      </div>
    </section>

  </section>

<Script
id="schema-insurance"
type="application/ld+json"
dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
/>

<Script
id="schema-faq"
type="application/ld+json"
dangerouslySetInnerHTML={{
__html: JSON.stringify({
"@context": "https://schema.org",
"@type": "FAQPage",
"mainEntity": [
{
"@type": "Question",
"name": "Quanto custa seguro auto em Limeira?",
"acceptedAnswer": {
"@type": "Answer",
"text": "O valor depende do modelo do veículo, idade do motorista, histórico de sinistros e região de circulação."
}
},
{
"@type": "Question",
"name": "Qual a melhor seguradora de carro?",
"acceptedAnswer": {
"@type": "Answer",
"text": "Seguradoras como Porto Seguro, Allianz, HDI, Tokio Marine e Mapfre são algumas das principais opções do mercado brasileiro."
}
},
{
"@type": "Question",
"name": "Seguro cobre enchente?",
"acceptedAnswer": {
"@type": "Answer",
"text": "Dependendo da cobertura contratada, o seguro pode cobrir danos causados por enchentes ou alagamentos."
}
},
{
"@type": "Question",
"name": "Seguro cobre danos a terceiros?",
"acceptedAnswer": {
"@type": "Answer",
"text": "Sim. A cobertura de responsabilidade civil protege contra danos materiais ou corporais causados a outras pessoas."
}
},
{
"@type": "Question",
"name": "Posso parcelar o seguro auto?",
"acceptedAnswer": {
"@type": "Answer",
"text": "Sim. Muitas seguradoras permitem parcelar o seguro em até 10 ou 12 vezes dependendo do plano."
}
},
{
"@type": "Question",
"name": "Como funciona a franquia do seguro?",
"acceptedAnswer": {
"@type": "Answer",
"text": "A franquia é o valor que o segurado paga em caso de sinistro parcial, enquanto a seguradora cobre o restante."
}
}
]
})
}}
/>

</main> );
}