import PageShell from "@/components/PageShell";
import Link from "next/link";
import { WHATSAPP_LINK } from "@/components/constants";

export const metadata = {
  title: "Seguro Auto | Urano Seguros",
  description:
    "Seguro Auto com coberturas completas e contratação simples para todo o Brasil. Compare seguradoras e economize com atendimento humano da Urano Seguros.",
};

export default function Page() {
  return (
    <PageShell
      title="Seguro Auto no Brasil | Urano Seguros"
      subtitle="Proteção para o seu carro com as principais seguradoras, coberturas sob medida e suporte rápido em todo o Brasil."
      heroImageSrc="/images/seguro-auto.webp"
      heroImageAlt="Seguro Auto no Brasil com cobertura e assistência 24h | Urano Seguros"
      bullets={[
        "Coberturas: colisão, roubo/furto, incêndio e danos a terceiros.",
        "Assistência 24h: guincho, pane, chaveiro e carro reserva (conforme plano).",
        "Opções flexíveis de franquia e adicionais para o seu perfil.",
      ]}
    >
      <section className="contentBlock">
        <h2>O que é o Seguro Auto?</h2>
        <p>
          O <strong>Seguro Auto</strong> protege você contra riscos do dia a dia, como colisões,
          roubo/furto e danos a terceiros, além de oferecer serviços de assistência para emergências.
        </p>
        <p>
          Na <strong>Urano Seguros</strong>, comparamos opções entre seguradoras para encontrar o melhor
          custo-benefício de acordo com o seu perfil e uso do veículo.
        </p>
        <p>
          Atendemos clientes em Limeira, região e em todo o Brasil, com processo 100% digital, rápido e seguro.
        </p>
      </section>

      <section className="contentBlock">
        <h2>Principais coberturas do Seguro Auto</h2>
        <ul>
          <li>Colisão (danos ao seu veículo)</li>
          <li>Roubo e furto</li>
          <li>Incêndio</li>
          <li>Danos a terceiros (RCF-V)</li>
          <li>Vidros, faróis e retrovisores (opcional)</li>
          <li>Carro reserva e assistência 24h (conforme plano)</li>
        </ul>
        <p>
          As coberturas e limites podem ser ajustados para caber no seu orçamento sem abrir mão da proteção essencial.
        </p>
      </section>

      <section className="contentBlock">
        <h2>Quanto custa um Seguro Auto?</h2>
        <p>
          O valor do Seguro Auto varia conforme perfil do condutor e do veículo. Por isso, a cotação é personalizada.
        </p>
        <p>Os principais fatores que influenciam são:</p>
        <ul>
          <li>Modelo e ano do veículo</li>
          <li>Perfil do condutor (idade, histórico, uso)</li>
          <li>Local de circulação e pernoite</li>
          <li>Tipo de cobertura e franquia</li>
        </ul>
        <p>
          A Urano Seguros compara diferentes seguradoras para buscar a melhor opção para você.
        </p>
      </section>

      <section className="contentBlock">
        <h2>Por que contratar com a Urano Seguros?</h2>
        <ul>
          <li>Atendimento humano e transparente</li>
          <li>Comparação entre seguradoras e coberturas</li>
          <li>Suporte completo antes, durante e após a contratação</li>
          <li>Atendimento digital para todo o Brasil</li>
          <li>Agilidade na emissão e acompanhamento de sinistros</li>
        </ul>
      </section>

      <section className="contentBlock">
        <h2>Perguntas frequentes</h2>

        <p>
          <strong>Seguro Auto cobre danos a terceiros?</strong>
          <br />
          Sim, com a cobertura de responsabilidade civil (RCF-V), que pode ser ajustada conforme sua necessidade.
        </p>

        <p>
          <strong>Posso contratar mesmo morando fora de Limeira?</strong>
          <br />
          Sim. Fazemos a cotação e a contratação de forma online para todo o Brasil.
        </p>

        <p>
          <strong>O que é franquia?</strong>
          <br />
          É a participação do segurado em alguns tipos de sinistro. Existem opções de franquia que podem reduzir o valor do seguro.
        </p>
      </section>

      <section className="ctaBox">
        <h3>Garanta proteção completa para o seu carro</h3>
        <p>
          Fale com um especialista da Urano Seguros e receba uma cotação personalizada para o seu perfil.
        </p>

        <div className="ctaRow">
          <Link href="#cotacao" className="btn">
            Fazer cotação agora
          </Link>
          <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="btnGhost">
            Falar no WhatsApp
          </a>
        </div>
      </section>
    </PageShell>
  );
}
