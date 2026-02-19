import PageShell from "@/components/PageShell";
import Link from "next/link";
import { WHATSAPP_LINK } from "@/components/constants";

export const metadata = {
  title: "A Empresa | Urano Seguros",
  description:
    "Conheça a Urano Seguros: empresa familiar, atendimento humanizado e soluções completas em seguros, consórcios e planos de saúde para todo o Brasil.",
};

export default function Page() {
  return (
    <PageShell
      title="A Urano Seguros | Atendimento humano e soluções completas"
      subtitle="Empresa familiar com foco em confiança, agilidade e transparência — atendendo Limeira, região e todo o Brasil de forma digital."
      heroImageSrc="/images/a-empresa.webp"
      heroImageAlt="Sobre a Urano Seguros: empresa familiar com atendimento humanizado | Urano Seguros"
      bullets={[
        "Atendimento humanizado, transparente e rápido.",
        "Mais de 30 anos de experiência no mercado de seguros.",
        "Soluções completas: seguros, consórcios, planos de saúde e mais.",
      ]}
    >
      <section className="contentBlock">
        <h2>Quem somos</h2>
        <p>
          A <strong>Urano Seguros</strong> é uma corretora com atendimento humano
          e foco em proteger pessoas, famílias e empresas com soluções sob medida.
          Nosso objetivo é simplificar a sua contratação e garantir que você tenha
          suporte quando mais precisar.
        </p>

        <p>
          Atuamos com as principais seguradoras e administradoras do mercado,
          buscando sempre o melhor custo-benefício e as coberturas mais adequadas
          para cada perfil.
        </p>

        <p>
          Atendemos clientes em Limeira, região e em todo o Brasil, com processo
          100% digital, rápido e seguro.
        </p>
      </section>

      <section className="contentBlock">
        <h2>Nossos valores</h2>
        <ul>
          <li>
            <strong>Confiança:</strong> orientamos com clareza e transparência, do início ao fim.
          </li>
          <li>
            <strong>Atendimento humanizado:</strong> você fala com pessoas, não com robôs.
          </li>
          <li>
            <strong>Agilidade:</strong> respostas rápidas, cotação eficiente e suporte de verdade.
          </li>
          <li>
            <strong>Responsabilidade:</strong> proteção alinhada ao que você realmente precisa.
          </li>
        </ul>
      </section>

      <section className="contentBlock">
        <h2>O que fazemos</h2>
        <p>
          Trabalhamos com um portfólio completo para atender diferentes fases da vida
          e tipos de negócio. Algumas soluções que oferecemos:
        </p>
        <ul>
          <li>
            <Link href="/seguro-vida">Seguro de Vida</Link>
          </li>
          <li>
            <Link href="/seguro-auto">Seguro Auto</Link>
          </li>
          <li>
            <Link href="/planos-de-saude">Plano de Saúde</Link>
          </li>
          <li>
            <Link href="/consorcio">Consórcio</Link>
          </li>
          <li>
            <Link href="/seguro-empresarial">Seguro Empresarial</Link>
          </li>
        </ul>

        <p>
          Se você precisa de outra solução (residencial, moto, rural, etc.),
          podemos orientar e encontrar a alternativa ideal.
        </p>
      </section>

      <section className="contentBlock">
        <h2>Como funciona nosso atendimento</h2>
        <ul>
          <li>Você explica sua necessidade (WhatsApp, formulário ou contato direto)</li>
          <li>Fazemos uma análise do seu perfil e objetivos</li>
          <li>Comparamos opções entre seguradoras/operadoras/administradoras</li>
          <li>Apresentamos as melhores alternativas com linguagem simples</li>
          <li>Acompanhamos você na contratação e no pós-venda</li>
        </ul>

        <p>
          Nosso foco é garantir que você contrate com segurança e entenda exatamente
          o que está levando.
        </p>
      </section>

      <section className="contentBlock">
        <h2>Perguntas frequentes</h2>

        <p>
          <strong>Vocês atendem clientes fora de Limeira?</strong>
          <br />
          Sim. Atendemos todo o Brasil com atendimento digital e acompanhamento completo.
        </p>

        <p>
          <strong>Vocês comparam seguradoras?</strong>
          <br />
          Sim. Buscamos opções entre parceiros para encontrar o melhor custo-benefício e as coberturas ideais.
        </p>

        <p>
          <strong>Eu tenho suporte depois de contratar?</strong>
          <br />
          Sim. A Urano Seguros oferece suporte no pós-venda, dúvidas e acompanhamento em caso de necessidade.
        </p>
      </section>

      <section className="ctaBox">
        <h3>Quer falar com a Urano Seguros?</h3>
        <p>
          Conte com atendimento humano para escolher a proteção ideal para você,
          sua família ou sua empresa.
        </p>

        <div className="ctaRow">
          <Link href="#cotacao" className="btn">
            Pedir atendimento agora
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
