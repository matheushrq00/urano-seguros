import PageShell from "@/components/PageShell";
import Link from "next/link";
import { WHATSAPP_LINK } from "@/components/constants";

export const metadata = {
  title: "Responsabilidade Social | Urano Seguros",
  description:
    "Conheça as ações de responsabilidade social da Urano Seguros e nosso compromisso com pessoas, comunidade e desenvolvimento sustentável.",
};

export default function Page() {
  return (
    <PageShell
      title="Responsabilidade Social | Urano Seguros"
      subtitle="Nosso compromisso vai além dos seguros: acreditamos em impacto positivo, responsabilidade e cuidado com as pessoas."
      heroImageSrc="/images/responsabilidade-social.webp"
      heroImageAlt="Responsabilidade social da Urano Seguros com impacto positivo na comunidade"
      bullets={[
        "Compromisso com pessoas, ética e responsabilidade.",
        "Valorização da comunidade e das relações humanas.",
        "Atuação consciente e alinhada a valores sustentáveis.",
      ]}
    >
      <section className="contentBlock">
        <h2>Nosso compromisso social</h2>
        <p>
          A <strong>Urano Seguros</strong> acredita que responsabilidade social é
          parte essencial do nosso papel como empresa. Mais do que oferecer
          soluções em seguros, buscamos contribuir positivamente com a sociedade
          e com as pessoas ao nosso redor.
        </p>

        <p>
          Nosso trabalho é guiado por valores como ética, respeito, empatia e
          compromisso com o bem-estar coletivo, refletindo-se tanto no
          atendimento aos clientes quanto nas relações com parceiros e
          colaboradores.
        </p>
      </section>

      <section className="contentBlock">
        <h2>Pessoas em primeiro lugar</h2>
        <p>
          Colocamos as pessoas no centro de tudo o que fazemos. Isso significa:
        </p>

        <ul>
          <li>Atendimento humano, transparente e responsável</li>
          <li>Respeito às necessidades individuais de cada cliente</li>
          <li>Valorização dos colaboradores e parceiros</li>
          <li>Relacionamentos baseados em confiança e longo prazo</li>
        </ul>

        <p>
          Acreditamos que relações sólidas geram impacto positivo duradouro.
        </p>
      </section>

      <section className="contentBlock">
        <h2>Compromisso com a comunidade</h2>
        <p>
          A Urano Seguros busca contribuir com a comunidade em que está inserida,
          apoiando iniciativas que promovam desenvolvimento, conscientização e
          bem-estar.
        </p>

        <p>
          Sempre que possível, incentivamos ações que fortaleçam valores como
          solidariedade, responsabilidade e cidadania.
        </p>
      </section>

      <section className="contentBlock">
        <h2>Ética e responsabilidade no mercado de seguros</h2>
        <p>
          Atuamos de forma responsável e ética no mercado de seguros, prezando
          pela clareza nas informações, orientação correta e respeito às normas
          e boas práticas do setor.
        </p>

        <p>
          Nosso compromisso é garantir que cada cliente entenda o que está
          contratando e se sinta seguro em todas as etapas do relacionamento com
          a Urano Seguros.
        </p>
      </section>

      <section className="contentBlock">
        <h2>Perguntas frequentes</h2>

        <p>
          <strong>A Urano Seguros realiza ações sociais?</strong>
          <br />
          Sim. Sempre que possível, apoiamos iniciativas alinhadas aos nossos
          valores e que gerem impacto positivo para pessoas e comunidades.
        </p>

        <p>
          <strong>Como a responsabilidade social se reflete no atendimento?</strong>
          <br />
          Através de orientação clara, respeito, empatia e compromisso real com
          a proteção e o bem-estar dos clientes.
        </p>

        <p>
          <strong>Esse compromisso vale para todo o Brasil?</strong>
          <br />
          Sim. Atuamos com os mesmos valores e princípios em todos os atendimentos,
          independentemente da localização.
        </p>
      </section>

      <section className="ctaBox">
        <h3>Quer conhecer mais sobre a Urano Seguros?</h3>
        <p>
          Saiba como nossos valores se refletem em cada atendimento e solução que
          oferecemos.
        </p>

        <div className="ctaRow">
          <Link href="/a-empresa" className="btn">
            Conhecer a empresa
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
