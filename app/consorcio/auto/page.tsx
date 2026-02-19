import PageShell from "@/components/PageShell";
import Link from "next/link";
import { WHATSAPP_LINK } from "@/components/constants";

export const metadata = {
  title: "Consórcio de Auto | Urano Seguros",
  description:
    "Consórcio de Auto para comprar ou trocar de carro em todo o Brasil. Planeje sua compra sem juros e com orientação especializada da Urano Seguros.",
};

export default function Page() {
  return (
    <PageShell
      title="Consórcio de Auto no Brasil | Urano Seguros"
      subtitle="Planeje a compra do seu carro com parcelas acessíveis, sem juros e com suporte humano em todo o Brasil."
      heroImageSrc="/images/consorcio-auto.webp"
      heroImageAlt="Consórcio de Auto no Brasil para comprar carro com planejamento financeiro | Urano Seguros"
      bullets={[
        "Consórcio para carro novo ou usado, conforme regras do grupo.",
        "Planejamento sem juros, com taxas administrativas da administradora.",
        "Acompanhamento completo até a contemplação e uso da carta.",
      ]}
    >
      <section className="contentBlock">
        <h2>O que é o Consórcio de Auto?</h2>
        <p>
          O <strong>Consórcio de Auto</strong> é uma forma planejada de comprar
          ou trocar de carro sem pagar juros como no financiamento tradicional.
          Você participa de um grupo, contribui mensalmente e pode ser
          contemplado por sorteio ou lance.
        </p>

        <p>
          Quando contemplado, você utiliza a carta de crédito para adquirir o
          veículo conforme as regras da administradora do consórcio.
        </p>

        <p>
          Na <strong>Urano Seguros</strong>, orientamos você desde a simulação
          até a contemplação, com atendimento humano e processo 100% digital.
        </p>
      </section>

      <section className="contentBlock">
        <h2>Para quais veículos posso usar?</h2>
        <ul>
          <li>Carro novo ou usado (conforme regras do grupo)</li>
          <li>Veículos leves de passeio</li>
          <li>Possibilidade de troca/upgrade com complemento de valor (quando permitido)</li>
        </ul>

        <p>
          Cada grupo pode ter regras específicas para ano/modelo do veículo e
          forma de compra. Nós confirmamos essas informações com você antes de
          avançar.
        </p>
      </section>

      <section className="contentBlock">
        <h2>Como funciona a contemplação?</h2>
        <ul>
          <li>
            <strong>Sorteio:</strong> realizado mensalmente conforme o regulamento.
          </li>
          <li>
            <strong>Lance:</strong> oferta de um valor para antecipar a contemplação,
            podendo variar entre lance livre, fixo ou embutido (conforme grupo).
          </li>
        </ul>

        <p>
          A Urano Seguros te ajuda a entender as regras e a definir a melhor
          estratégia de lances para o seu objetivo.
        </p>
      </section>

      <section className="contentBlock">
        <h2>Quanto custa um Consórcio de Auto?</h2>
        <p>
          O valor das parcelas depende do crédito desejado, prazo do grupo e das
          taxas administrativas da administradora.
        </p>

        <p>Os principais fatores são:</p>
        <ul>
          <li>Valor da carta de crédito</li>
          <li>Prazo (quantidade de meses)</li>
          <li>Taxa de administração</li>
          <li>Fundo de reserva (quando aplicável)</li>
        </ul>

        <p>
          Simular diferentes créditos e prazos é a melhor forma de encontrar uma
          parcela confortável para o seu orçamento.
        </p>
      </section>

      <section className="contentBlock">
        <h2>Por que contratar com a Urano Seguros?</h2>
        <ul>
          <li>Orientação clara da simulação até a compra do veículo</li>
          <li>Atendimento humano e transparente</li>
          <li>Parceria com administradoras confiáveis</li>
          <li>Suporte completo na contemplação e uso da carta</li>
          <li>Atendimento digital para todo o Brasil</li>
        </ul>
      </section>

      <section className="contentBlock">
        <h2>Perguntas frequentes</h2>

        <p>
          <strong>Consórcio de Auto tem juros?</strong>
          <br />
          Não há juros como no financiamento, mas existem taxas administrativas
          definidas pela administradora.
        </p>

        <p>
          <strong>Posso usar meu carro como lance?</strong>
          <br />
          Depende das regras da administradora e do grupo. Podemos verificar as
          opções disponíveis para o seu caso.
        </p>

        <p>
          <strong>Posso contratar de qualquer lugar do Brasil?</strong>
          <br />
          Sim. Fazemos todo o processo de forma digital.
        </p>
      </section>

      <section className="ctaBox">
        <h3>Planeje seu carro com parcelas que cabem no bolso</h3>
        <p>
          Fale com um especialista da Urano Seguros e receba uma simulação
          personalizada de Consórcio de Auto.
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
