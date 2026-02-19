import PageShell from "@/components/PageShell";
import Link from "next/link";
import { WHATSAPP_LINK } from "@/components/constants";

export const metadata = {
  title: "Seguro Empresarial | Urano Seguros",
  description:
    "Seguro Empresarial com coberturas sob medida para empresas em todo o Brasil. Proteja patrimônio, estoque e operação com atendimento humano da Urano Seguros.",
};

export default function Page() {
  return (
    <PageShell
      title="Seguro Empresarial no Brasil | Urano Seguros"
      subtitle="Proteja seu negócio com coberturas personalizadas, assistência e suporte especializado — com contratação simples em todo o Brasil."
      heroImageSrc="/images/seguro-empresarial.webp"
      heroImageAlt="Seguro Empresarial no Brasil para proteger empresa, patrimônio e operação | Urano Seguros"
      bullets={[
        "Proteção para patrimônio, estoque, equipamentos e responsabilidade civil.",
        "Coberturas personalizadas conforme o tipo e porte do seu negócio.",
        "Atendimento humano e suporte completo antes, durante e após a contratação.",
      ]}
    >
      <section className="contentBlock">
        <h2>O que é o Seguro Empresarial?</h2>
        <p>
          O <strong>Seguro Empresarial</strong> protege o patrimônio e a operação
          da sua empresa contra imprevistos, como incêndio, roubo, danos elétricos
          e eventos que podem impactar financeiramente o negócio.
        </p>

        <p>
          Na <strong>Urano Seguros</strong>, avaliamos o seu segmento e as
          características do imóvel/atividade para montar uma proposta sob medida,
          com cobertura válida em todo o Brasil.
        </p>

        <p>
          Atendemos empresas em Limeira, região e em todo o país, com atendimento
          digital rápido e acompanhamento próximo.
        </p>
      </section>

      <section className="contentBlock">
        <h2>O que o Seguro Empresarial pode cobrir?</h2>
        <ul>
          <li>Incêndio, explosão e queda de raio</li>
          <li>Roubo e furto qualificado (conforme condições)</li>
          <li>Danos elétricos (curto-circuito, variação de energia)</li>
          <li>Vendaval, granizo e eventos da natureza (quando contratado)</li>
          <li>Quebra de vidros e fachadas (opcional)</li>
          <li>Responsabilidade civil (danos a terceiros)</li>
          <li>Equipamentos e máquinas (quando aplicável)</li>
          <li>Lucros cessantes (paralisação das atividades, quando contratado)</li>
        </ul>

        <p>
          As coberturas ideais dependem do seu ramo (comércio, indústria, serviços),
          da localização e do risco da operação. Nós te ajudamos a escolher.
        </p>
      </section>

      <section className="contentBlock">
        <h2>Seguro Empresarial para quais tipos de negócio?</h2>
        <p>
          O seguro pode ser adaptado para diferentes segmentos, por exemplo:
        </p>
        <ul>
          <li>Comércios e lojas</li>
          <li>Escritórios e prestadores de serviço</li>
          <li>Restaurantes, bares e cafés</li>
          <li>Indústrias e galpões</li>
          <li>Clínicas, consultórios e academias</li>
          <li>Condomínios comerciais (conforme necessidade)</li>
        </ul>

        <p>
          Se você trabalha em casa (home office) com equipamentos e estrutura,
          também é possível avaliar uma proteção adequada.
        </p>
      </section>

      <section className="contentBlock">
        <h2>Quanto custa um Seguro Empresarial?</h2>
        <p>
          O valor varia conforme o porte do negócio, o tipo de atividade, o valor
          dos bens segurados e as coberturas escolhidas.
        </p>

        <p>O preço costuma considerar fatores como:</p>
        <ul>
          <li>Ramo de atividade e nível de risco</li>
          <li>Localização e estrutura do imóvel</li>
          <li>Valor do patrimônio, estoque e equipamentos</li>
          <li>Medidas de segurança (alarme, câmeras, portaria etc.)</li>
          <li>Coberturas adicionais (RC, lucros cessantes, danos elétricos…)</li>
        </ul>

        <p>
          A Urano Seguros compara seguradoras e monta uma proposta alinhada ao seu
          orçamento e necessidade.
        </p>
      </section>

      <section className="contentBlock">
        <h2>Por que contratar com a Urano Seguros?</h2>
        <ul>
          <li>Atendimento humano e transparente</li>
          <li>Análise do seu negócio para montar cobertura sob medida</li>
          <li>Parceria com as principais seguradoras do Brasil</li>
          <li>Atendimento digital para todo o país</li>
          <li>Suporte completo em sinistros e dúvidas durante a vigência</li>
        </ul>
      </section>

      <section className="contentBlock">
        <h2>Perguntas frequentes</h2>

        <p>
          <strong>Seguro Empresarial é só para grandes empresas?</strong>
          <br />
          Não. Existem opções para pequenas, médias e grandes empresas, com coberturas
          ajustadas ao porte e ao risco do negócio.
        </p>

        <p>
          <strong>Posso incluir estoque e equipamentos?</strong>
          <br />
          Sim. É possível incluir bens como estoque, máquinas e equipamentos, conforme
          avaliação e condições da seguradora.
        </p>

        <p>
          <strong>Posso contratar de qualquer lugar do Brasil?</strong>
          <br />
          Sim. Fazemos a contratação de forma online e acompanhamos você em todo o processo.
        </p>
      </section>

      <section className="ctaBox">
        <h3>Proteja seu negócio com um Seguro Empresarial sob medida</h3>
        <p>
          Fale com um especialista da Urano Seguros e receba uma cotação personalizada
          para a sua empresa.
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
