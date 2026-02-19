import PageShell from "@/components/PageShell";
import Link from "next/link";
import { WHATSAPP_LINK } from "@/components/constants";

export const metadata = {
  title: "Plano de Saúde | Urano Seguros",
  description:
    "Plano de Saúde com opções para pessoas, famílias e empresas em todo o Brasil. Compare operadoras e escolha o melhor custo-benefício com a Urano Seguros.",
};

export default function Page() {
  return (
    <PageShell
      title="Plano de Saúde no Brasil | Urano Seguros"
      subtitle="Compare operadoras e encontre o plano ideal para seu momento, com orientação humana e contratação simples em todo o Brasil."
      heroImageSrc="/images/plano-saude.webp"
      heroImageAlt="Plano de Saúde no Brasil com rede credenciada e opções para família e empresa | Urano Seguros"
      bullets={[
        "Planos individuais, familiares e empresariais.",
        "Opções com e sem coparticipação, conforme seu perfil.",
        "Apoio completo para escolher rede credenciada e coberturas.",
      ]}
    >
      <section className="contentBlock">
        <h2>Como funciona um Plano de Saúde?</h2>
        <p>
          O <strong>Plano de Saúde</strong> dá acesso a consultas, exames e
          procedimentos conforme o tipo de contratação e a rede credenciada da
          operadora. A escolha certa equilibra preço, rede e necessidades da sua
          família ou empresa.
        </p>

        <p>
          Na <strong>Urano Seguros</strong>, ajudamos você a comparar opções e
          entender detalhes como carências, abrangência, coparticipação e
          regras de utilização.
        </p>

        <p>
          Atendemos clientes em Limeira, região e em todo o Brasil, com
          atendimento digital e acompanhamento em cada etapa.
        </p>
      </section>

      <section className="contentBlock">
        <h2>Tipos de Plano de Saúde</h2>
        <ul>
          <li>Individual ou familiar</li>
          <li>Empresarial (PME e grandes empresas)</li>
          <li>Com coparticipação ou sem coparticipação</li>
          <li>Abrangência regional ou nacional (conforme operadora)</li>
          <li>Com opção de reembolso (quando disponível)</li>
        </ul>

        <p>
          A indicação ideal depende da quantidade de vidas, do orçamento e da
          rede que você deseja utilizar.
        </p>
      </section>

      <section className="contentBlock">
        <h2>O que avaliar antes de contratar</h2>
        <ul>
          <li>Rede credenciada (hospitais, clínicas e laboratórios)</li>
          <li>Carências e cobertura de urgência/emergência</li>
          <li>Coparticipação e valores por utilização (quando houver)</li>
          <li>Abrangência (regional x nacional)</li>
          <li>Regras de reajuste e faixas etárias</li>
          <li>Opção de reembolso (se o plano oferecer)</li>
        </ul>

        <p>
          Se você já tem um plano, também podemos avaliar migração/portabilidade
          conforme as regras vigentes.
        </p>
      </section>

      <section className="contentBlock">
        <h2>Quanto custa um Plano de Saúde?</h2>
        <p>
          O preço varia conforme idade, região, tipo de plano, rede escolhida e
          quantidade de vidas (no empresarial). Por isso, a cotação precisa ser
          personalizada.
        </p>

        <p>Os fatores mais comuns são:</p>
        <ul>
          <li>Faixa etária</li>
          <li>Tipo de plano (individual/familiar/empresarial)</li>
          <li>Rede credenciada e abrangência</li>
          <li>Coparticipação (se existir)</li>
        </ul>

        <p>
          A Urano Seguros compara operadoras e condições para encontrar o melhor
          custo-benefício para o seu perfil.
        </p>
      </section>

      <section className="contentBlock">
        <h2>Por que contratar com a Urano Seguros?</h2>
        <ul>
          <li>Orientação clara para escolher o plano ideal</li>
          <li>Atendimento humano e acompanhamento de ponta a ponta</li>
          <li>Comparação entre operadoras e regras de contratação</li>
          <li>Atendimento digital para todo o Brasil</li>
          <li>Suporte em dúvidas e ajustes durante a vigência</li>
        </ul>
      </section>

      <section className="contentBlock">
        <h2>Perguntas frequentes</h2>

        <p>
          <strong>Existe plano de saúde com cobertura nacional?</strong>
          <br />
          Sim. Algumas operadoras oferecem abrangência nacional. Nós te ajudamos
          a comparar e escolher a melhor opção.
        </p>

        <p>
          <strong>Plano empresarial pode sair mais barato?</strong>
          <br />
          Em muitos casos, sim. Dependendo do perfil e do número de vidas, o
          empresarial pode ter melhor custo-benefício.
        </p>

        <p>
          <strong>Posso contratar online?</strong>
          <br />
          Sim. Fazemos análise, proposta e acompanhamento 100% digital.
        </p>
      </section>

      <section className="ctaBox">
        <h3>Encontre o plano ideal para você</h3>
        <p>
          Fale com um especialista da Urano Seguros e receba uma cotação
          comparativa com as melhores opções.
        </p>

        <div className="ctaRow">
          <Link href="#cotacao" className="btn">
            Fazer cotação agora
          </Link>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noreferrer"
            className="btnGhost"
          >
            Falar no WhatsApp
          </a>
        </div>
      </section>
    </PageShell>
  );
}
