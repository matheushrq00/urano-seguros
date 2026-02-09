import PageShell from "@/components/PageShell";
import Link from "next/link";
import { WHATSAPP_LINK } from "@/components/constants";

export const metadata = {
  title: "Consórcio Imobiliário | Urano Seguros",
  description:
    "Consórcio Imobiliário para compra, construção ou reforma de imóveis em todo o Brasil. Planeje sem juros e com orientação especializada da Urano Seguros.",
};

export default function Page() {
  return (
    <PageShell
      title="Consórcio Imobiliário no Brasil | Urano Seguros"
      subtitle="Planeje a compra do seu imóvel com parcelas acessíveis, sem juros e com acompanhamento humano em todo o Brasil."
      heroImageSrc="/images/consorcio-imobiliario.webp"
      heroImageAlt="Consórcio Imobiliário no Brasil para compra e construção de imóveis | Urano Seguros"
      bullets={[
        "Consórcio para compra, construção ou reforma de imóveis.",
        "Planejamento financeiro sem juros, com taxas administrativas.",
        "Acompanhamento completo até a contemplação e uso da carta.",
      ]}
    >
      <section className="contentBlock">
        <h2>O que é o Consórcio Imobiliário?</h2>
        <p>
          O <strong>Consórcio Imobiliário</strong> é uma forma planejada de adquirir
          imóveis sem a incidência de juros como no financiamento tradicional.
          Os participantes contribuem mensalmente para um fundo comum e são
          contemplados por sorteio ou lance.
        </p>

        <p>
          Ao ser contemplado, você utiliza a carta de crédito para comprar,
          construir ou reformar um imóvel, conforme as regras da administradora.
        </p>

        <p>
          Na <strong>Urano Seguros</strong>, ajudamos você a entender cada etapa e
          escolher a melhor opção para o seu objetivo.
        </p>
      </section>

      <section className="contentBlock">
        <h2>Para quais finalidades posso usar o consórcio?</h2>
        <ul>
          <li>Compra de imóvel novo ou usado</li>
          <li>Construção em terreno próprio</li>
          <li>Reforma ou ampliação de imóvel</li>
          <li>Quitação de financiamento imobiliário (conforme regras)</li>
        </ul>

        <p>
          As possibilidades variam de acordo com a administradora e o grupo do
          consórcio. Nós analisamos seu caso e orientamos corretamente.
        </p>
      </section>

      <section className="contentBlock">
        <h2>Como funciona a contemplação?</h2>
        <ul>
          <li>
            <strong>Sorteio:</strong> realizado mensalmente conforme regras do grupo.
          </li>
          <li>
            <strong>Lance:</strong> oferta de um valor para antecipar a contemplação,
            podendo ser livre, fixo ou embutido (dependendo do grupo).
          </li>
        </ul>

        <p>
          A Urano Seguros auxilia na estratégia de lances e esclarece todas as
          regras antes da contratação.
        </p>
      </section>

      <section className="contentBlock">
        <h2>Quanto custa um Consórcio Imobiliário?</h2>
        <p>
          O valor das parcelas depende do crédito desejado, prazo do grupo e taxas
          administrativas da administradora.
        </p>

        <p>Os principais fatores são:</p>
        <ul>
          <li>Valor da carta de crédito</li>
          <li>Prazo de pagamento</li>
          <li>Taxa de administração</li>
          <li>Fundo de reserva (quando aplicável)</li>
        </ul>

        <p>
          Simular diferentes cenários é a melhor forma de encontrar um consórcio
          que caiba no seu planejamento financeiro.
        </p>
      </section>

      <section className="contentBlock">
        <h2>Por que contratar com a Urano Seguros?</h2>
        <ul>
          <li>Orientação clara desde a simulação até a contemplação</li>
          <li>Atendimento humano e transparente</li>
          <li>Parceria com administradoras confiáveis</li>
          <li>Suporte completo na utilização da carta de crédito</li>
          <li>Atendimento digital para todo o Brasil</li>
        </ul>
      </section>

      <section className="contentBlock">
        <h2>Perguntas frequentes</h2>

        <p>
          <strong>Consórcio Imobiliário tem juros?</strong>
          <br />
          Não há juros como no financiamento, mas existem taxas administrativas
          definidas pela administradora.
        </p>

        <p>
          <strong>Posso usar o FGTS?</strong>
          <br />
          Em alguns casos, sim, conforme regras da administradora e legislação
          vigente. A Urano Seguros avalia seu cenário.
        </p>

        <p>
          <strong>Posso contratar de qualquer lugar do Brasil?</strong>
          <br />
          Sim. Todo o processo pode ser feito de forma digital.
        </p>
      </section>

      <section className="ctaBox">
        <h3>Planeje a conquista do seu imóvel</h3>
        <p>
          Fale com um especialista da Urano Seguros e receba uma simulação
          personalizada de Consórcio Imobiliário.
        </p>

        <div className="ctaRow">
          <Link href="#cotacao" className="btn">
            Fazer simulação agora
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
