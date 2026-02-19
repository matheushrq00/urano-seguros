import PageShell from "@/components/PageShell";
import Link from "next/link";
import { WHATSAPP_LINK } from "@/components/constants";

export const metadata = {
  title: "Seguro de Vida | Urano Seguros",
  description:
    "Seguro de Vida com coberturas personalizadas para todo o Brasil. Proteja sua família com planos acessíveis e atendimento humano da Urano Seguros.",
};

export default function Page() {
  return (
    <PageShell
      title="Seguro de Vida no Brasil | Urano Seguros"
      subtitle="Proteção financeira para você e sua família, com planos personalizados e contratação simples em todo o Brasil."
      heroImageSrc="/images/seguro-vida.webp"
      heroImageAlt="Seguro de Vida no Brasil com proteção financeira para família | Urano Seguros"
      bullets={[
        "Coberturas para morte, invalidez e doenças graves.",
        "Planos individuais e empresariais sob medida.",
        "Atendimento digital rápido, humano e transparente.",
      ]}
    >
      <section className="contentBlock">
        <h2>O que é o Seguro de Vida?</h2>
        <p>
          O <strong>Seguro de Vida</strong> é uma das formas mais importantes de
          proteção financeira. Ele garante apoio para sua família ou
          beneficiários em momentos difíceis, oferecendo segurança,
          estabilidade e tranquilidade.
        </p>

        <p>
          Na <strong>Urano Seguros</strong>, trabalhamos com as principais
          seguradoras do mercado para oferecer planos sob medida, com cobertura
          válida em todo o território nacional.
        </p>

        <p>
          Atendemos clientes em Limeira, região e em todo o Brasil, de forma 100%
          digital, rápida e segura.
        </p>
      </section>

      <section className="contentBlock">
        <h2>Principais coberturas do Seguro de Vida</h2>
        <ul>
          <li>Morte natural ou acidental</li>
          <li>Invalidez permanente total ou parcial</li>
          <li>Doenças graves (câncer, AVC, infarto, entre outras)</li>
          <li>Assistência funeral individual ou familiar</li>
          <li>Diárias por incapacidade temporária</li>
        </ul>

        <p>
          As coberturas são definidas de acordo com seu perfil, idade e
          necessidade, buscando sempre o melhor custo-benefício.
        </p>
      </section>

      <section className="contentBlock">
        <h2>Seguro de Vida individual e empresarial</h2>

        <p>
          <strong>Seguro de Vida Individual:</strong> ideal para quem deseja
          proteger a família e manter estabilidade financeira.
        </p>

        <p>
          <strong>Seguro de Vida Empresarial:</strong> indicado para empresas que
          querem valorizar colaboradores e oferecer benefícios atrativos.
        </p>
      </section>

      <section className="contentBlock">
        <h2>Quanto custa um Seguro de Vida?</h2>
        <p>
          O Seguro de Vida é mais acessível do que muitas pessoas imaginam.
          Existem planos com mensalidades baixas e excelente cobertura.
        </p>

        <p>O preço varia conforme:</p>
        <ul>
          <li>Idade</li>
          <li>Profissão</li>
          <li>Capital segurado</li>
          <li>Coberturas contratadas</li>
        </ul>

        <p>
          A Urano Seguros compara diversas seguradoras para encontrar a melhor
          opção para você.
        </p>
      </section>

      <section className="contentBlock">
        <h2>Por que contratar com a Urano Seguros?</h2>
        <ul>
          <li>Atendimento humano e transparente</li>
          <li>Mais de 30 anos de experiência no mercado de seguros</li>
          <li>Parceria com as principais seguradoras do Brasil</li>
          <li>Atendimento digital para todo o país</li>
          <li>Suporte completo antes, durante e após a contratação</li>
        </ul>
      </section>

      <section className="contentBlock">
        <h2>Perguntas frequentes</h2>

        <p>
          <strong>O Seguro de Vida só vale em caso de morte?</strong>
          <br />
          Não. Existem coberturas em vida, como invalidez, doenças graves e
          diárias por incapacidade.
        </p>

        <p>
          <strong>Posso contratar mesmo morando fora de Limeira?</strong>
          <br />
          Sim. Atendemos clientes em todo o Brasil de forma online.
        </p>

        <p>
          <strong>Quem recebe a indenização?</strong>
          <br />
          Os beneficiários indicados na apólice, conforme sua escolha.
        </p>
      </section>

      <section className="ctaBox">
        <h3>Proteja quem você ama com um Seguro de Vida completo</h3>
        <p>
          Fale agora com um especialista da Urano Seguros e receba uma cotação
          personalizada.
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
