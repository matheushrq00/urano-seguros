import { DISPLAY_PHONE, WHATSAPP_LINK } from "./constants";

export default function ContactFooter() {
  return (
    <footer className="footer" id="contato">
      <div className="container footerGrid footerGridTrust">

        <div>
          <h3>Urano Seguros</h3>
          <p>
            Corretora de seguros especializada em atendimento humano, transparente
            e soluções sob medida para você e sua empresa.
          </p>

          <div className="footerSeal">
            <img
              src="/urano_logo_branco_fundo_transparente.svg"
              alt="Urano Seguros"
            />
            <span>Desde 2018</span>
          </div>
        </div>

        <div>
          <h3>Contato</h3>
          <p>
            <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
              {DISPLAY_PHONE}
            </a>
          </p>
          <p>Limeira/SP · Todo o Brasil</p>
        </div>

        <div>
          <h3>Seguros</h3>
          <p><a href="/seguro-auto">Auto</a></p>
          <p><a href="/seguro-residencial">Residencial</a></p>
          <p><a href="/seguro-vida">Vida</a></p>
          <p><a href="/planos-de-saude">Saúde</a></p>
        </div>

      </div>

      <div className="container footerBottom">
        © {new Date().getFullYear()} Urano Seguros - Todos os direitos reservados.
      </div>
    </footer>
  );
}


