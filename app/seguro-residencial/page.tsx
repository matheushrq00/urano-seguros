import PageShell from "@/components/PageShell";
import Link from "next/link";
import { WHATSAPP_LINK } from "@/components/constants";

export const metadata = {
  title: "Seguro Residencial | Urano Seguros",
  description:
    "Seguro Residencial com coberturas personalizadas para proteger sua casa ou apartamento em todo o Brasil. Tenha assistência e atendimento humano com a Urano Seguros.",
};

export default function Page() {
  return (
    <PageShell
      title="Seguro Residencial no Brasil | Urano Seguros"
      subtitle="Proteja sua casa ou apartamento com coberturas sob medida, assistência e contratação simples em todo o Brasil."
      heroImageSrc="/images/seguro-residencial.webp"
      heroImageAlt="Seguro Residencial no Brasil para proteger casa e apartamento | Urano Seguros"
      bullets={[
        "Coberturas para incêndio, danos elétricos, roubo e eventos da natureza (conforme plano).",
        "Assistências úteis: chaveiro, encanador, eletricista e serviços emergenciais.",
        "Planos acessíveis com contratação rápida e atendimento humano.",
      ]}
    >
      <section className="contentBlock">
        <h2>O que é o Seguro Residencial?</h2>
        <p>
          O <strong>Seguro Residencial</strong> protege seu imóvel e seus bens
          contra imprevistos como incêndio, danos elétricos e outros eventos
          cobertos pela apólice. Além disso, pode incluir assistências para
          emergências do dia a dia.
        </p>

        <p>
          Na <strong>Urano Seguros</strong>, montamos opções personalizadas para
          casas e apartamentos, com cobertura válida em todo o Brasil e suporte
          humano em todas as etapas.
        </p>

        <p>
          Atendemos clientes em Limeira, região e em todo o país, de forma 100%
          digital, rápida e segura.
        </p>
      </section>

      <section className="contentBlock">
        <h2>O que o Seguro Residencial pode cobrir?</h2>
        <ul>
          <li>Incêndio, explosão e queda de raio</li>
          <li>Danos elétricos (curto-circuito, variação de energia)</li>
          <li>Roubo e furto qualificado (conforme condições)</li>
          <li>Vendaval, granizo e eventos da natureza (quando contratado)</li>
          <li>Quebra de vidros (opcional)</li>
          <li>Responsabilidade civil familiar (danos a terceiros)</li>
          <li>Danos por água (ex.: vazamentos, conforme cobertura)</li>
        </ul>

        <p>
          As coberturas variam conforme o plano e a seguradora. Nós te ajudamos
          a escolher o melhor conjunto para seu imóvel e orçamento.
        </p>
      </section>

      <section className="contentBlock">
        <h2>Assistências que fazem diferença</h2>
        <p>
          Um dos grandes benefícios do Seguro Residencial são as assistências
          para emergências, que podem incluir:
        </p>
        <ul>
          <li>Chaveiro</li>
          <li>Eletricista</li>
          <li>Encanador</li>
          <li>Desentupimento (quando disponível)</li>
          <li>Serviços emergenciais para pequenas manutenções</li>
        </ul>

        <p>
          A disponibilidade e os limites dependem do plano contratado.
        </p>
      </section>

      <section className="contentBlock">
        <h2>Quanto custa um Seguro Residencial?</h2>
        <p>
          O Seguro Residencial costuma ser acessível e pode custar menos do que
          muitas pessoas imaginam, especialmente quando comparado ao prejuízo de
          um sinistro.
        </p>

        <p>O preço varia conforme:</p>
        <ul>
          <li>Tipo de imóvel (casa ou apartamento)</li>
          <li>Localização</li>
          <li>Valor de reconstrução e bens segurados</li>
          <li>Coberturas e assistências escolhidas</li>
        </ul>

        <p>
          A Urano Seguros compara opções para encontrar o melhor custo-benefício
          para você.
        </p>
      </section>

      <section className="contentBlock">
        <h2>Por que contratar com a Urano Seguros?</h2>
        <ul>
          <li>Atendimento humano e transparente</li>
          <li>Parceria com as principais seguradoras do Brasil</li>
          <li>Planos sob medida para sua casa ou apartamento</li>
          <li>Atendimento digital para todo o Brasil</li>
          <li>Suporte completo em caso de sinistro</li>
        </ul>
      </section>

      <section className="contentBlock">
        <h2>Perguntas frequentes</h2>

        <p>
          <strong>Seguro Residencial é só para casas?</strong>
          <br />
          Não. Existem opções para casas e apartamentos, com coberturas específicas
          para cada tipo de imóvel.
        </p>

        <p>
          <strong>O seguro cobre danos elétricos?</strong>
          <br />
          Muitos planos incluem cobertura para danos elétricos, mas isso depende
          da apólice. Nós confirmamos com você antes da contratação.
        </p>

        <p>
          <strong>Posso contratar morando fora de Limeira?</strong>
          <br />
          Sim. Atendemos todo o Brasil com contratação online.
        </p>
      </section>

      <section className="ctaBox">
        <h3>Proteja sua casa com um Seguro Residencial completo</h3>
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
