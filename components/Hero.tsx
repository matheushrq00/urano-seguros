import { DISPLAY_PHONE, WHATSAPP_LINK } from "./constants";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container heroGrid">
        <div className="slider" aria-label="Destaques">
          <div className="slides">
            <div className="slide">
              <h1>Planos de Saúde ideais para você</h1>
              <p>
                Conte com a Urano Seguros para proteção e qualidade de vida.
                Opções para pessoa física, família e empresas.
              </p>
              <div className="mini">
                <span className="tag">Coberturas completas</span>
                <span className="tag">Rede credenciada</span>
                <span className="tag">Custo-benefício</span>
              </div>
            </div>

            <div className="slide">
              <h1>Seguro Auto completo</h1>
              <p>
                Proteja seu carro contra imprevistos com assistência e suporte.
                Mais segurança e comodidade para o seu dia a dia.
              </p>
              <div className="mini">
                <span className="tag">Roubo e furto</span>
                <span className="tag">Colisão</span>
                <span className="tag">Terceiros</span>
              </div>
            </div>

            <div className="slide">
              <h1>Consórcios</h1>
              <p>
                Conquiste seus objetivos com consórcios planejados para você.
                Parcelas acessíveis e planejamento inteligente.
              </p>
              <div className="mini">
                <span className="tag">Auto</span>
                <span className="tag">Imobiliário</span>
                <span className="tag">Planejamento</span>
              </div>
            </div>
          </div>
        </div>

        <aside className="infoCard" aria-label="Informações de contato">
          <h3>Contato</h3>

          <div>
            <div className="infoLabel">WhatsApp</div>
            <div className="infoValue">
              <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer">{DISPLAY_PHONE}</a>
            </div>
          </div>

          <div>
            <div className="infoLabel">Local</div>
            <div className="infoValue">Limeira/SP - Cotamos para todo o BRASIL</div>
          </div>

          <a className="infoBtn" href="/contato">Formulário de Contato</a>
        </aside>
      </div>
    </section>
  );
}
