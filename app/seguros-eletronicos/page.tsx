import PageShell from "@/components/PageShell";
import Link from "next/link";
import { WHATSAPP_LINK } from "@/components/constants";

export const metadata = {
  title: "Seguro para Eletrônicos | Urano Seguros",
  description:
    "Seguro para eletrônicos com cobertura contra roubo, furto e danos acidentais. Proteja celular, notebook e outros aparelhos em todo o Brasil com a Urano Seguros.",
};

export default function Page() {
  return (
    <PageShell
      title="Seguro para Eletrônicos no Brasil | Urano Seguros"
      subtitle="Proteja seus aparelhos eletrônicos contra imprevistos, com contratação simples e atendimento humano em todo o Brasil."
      heroImageSrc="/images/seguros-eletronicos.webp"
      heroImageAlt="Seguro para eletrônicos no Brasil com cobertura para celular e notebook | Urano Seguros"
      bullets={[
        "Cobertura para celulares, notebooks, tablets e outros dispositivos.",
        "Proteção contra roubo, furto qualificado e danos acidentais.",
        "Contratação simples, suporte humano e atendimento digital.",
      ]}
    >
      <section className="contentBlock">
        <h2>O que é o Seguro para Eletrônicos?</h2>
        <p>
          O <strong>Seguro para Eletrônicos</strong> protege seus dispositivos
          contra imprevistos do dia a dia, como roubo, furto qualificado, quedas
          e danos acidentais, dependendo do plano contratado.
        </p>

        <p>
          Com a <strong>Urano Seguros</strong>, você conta com orientação clara
          para escolher a cobertura ideal para seus aparelhos, com atendimento
          válido em todo o Brasil.
        </p>

        <p>
          Atendemos clientes em Limeira, região e em todo o país, de forma 100%
          digital, rápida e segura.
        </p>
      </section>

      <section className="contentBlock">
        <h2>Quais aparelhos podem ser segurados?</h2>
        <ul>
          <li>Celulares e smartphones</li>
          <li>Notebooks e ultrabooks</li>
          <li>Tablets e iPads</li>
          <li>Smartwatches e acessórios eletrônicos</li>
          <li>Outros dispositivos, conforme regras da seguradora</li>
        </ul>

        <p>
          As condições variam conforme o tipo de aparelho, valor e tempo de uso.
          Nós verificamos a melhor opção para você.
        </p>
      </section>

      <section className="contentBlock">
        <h2>O que o Seguro para Eletrônicos pode cobrir?</h2>
        <ul>
          <li>Roubo e furto qualificado</li>
          <li>Danos acidentais (queda, impacto, líquidos — conforme plano)</li>
          <li>Danos elétricos</li>
          <li>Quebra de tela (quando contratado)</li>
          <li>Reposição ou reparo do aparelho</li>
        </ul>

        <p>
          As coberturas dependem do plano escolhido e das condições da apólice.
          A Urano Seguros explica tudo antes da contratação.
        </p>
      </section>

      <section className="contentBlock">
        <h2>Quanto custa um Seguro para Eletrônicos?</h2>
        <p>
          O valor do seguro varia conforme o tipo de aparelho, valor de mercado,
          modelo, tempo de uso e coberturas contratadas.
        </p>

        <p>Os principais fatores considerados são:</p>
        <ul>
          <li>Valor do dispositivo</li>
          <li>Tipo de aparelho (celular, notebook, tablet)</li>
          <li>Tempo de uso</li>
          <li>Coberturas incluídas</li>
        </ul>

        <p>
          Em muitos casos, o custo mensal é baixo quando comparado ao prejuízo
          de perder ou danificar o aparelho.
        </p>
      </section>

      <section className="contentBlock">
        <h2>Por que contratar com a Urano Seguros?</h2>
        <ul>
          <li>Atendimento humano e transparente</li>
          <li>Orientação clara sobre coberturas e condições</li>
          <li>Parceria com seguradoras confiáveis</li>
          <li>Atendimento digital para todo o Brasil</li>
          <li>Suporte completo em caso de sinistro</li>
        </ul>
      </section>

      <section className="contentBlock">
        <h2>Perguntas frequentes</h2>

        <p>
          <strong>Seguro para eletrônicos cobre furto simples?</strong>
          <br />
          Em geral, a cobertura é para roubo ou furto qualificado, conforme regras
          da seguradora e da apólice.
        </p>

        <p>
          <strong>Posso contratar para aparelhos usados?</strong>
          <br />
          Depende da seguradora, do tempo de uso e do estado do aparelho. Nós
          avaliamos as possibilidades.
        </p>

        <p>
          <strong>Posso contratar de qualquer lugar do Brasil?</strong>
          <br />
          Sim. Todo o processo pode ser feito online.
        </p>
      </section>

      <section className="ctaBox">
        <h3>Proteja seus eletrônicos contra imprevistos</h3>
        <p>
          Fale com um especialista da Urano Seguros e receba uma cotação
          personalizada para seus aparelhos.
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
