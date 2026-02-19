import { DISPLAY_PHONE, WHATSAPP_LINK } from "./constants";

const INSTAGRAM_LINK = "https://instagram.com/uranoseguros";
const FACEBOOK_LINK = "https://facebook.com/uranoseguros";

export default function ContactFooter() {
  return (
    <footer className="footer footerPremium" id="contato">
      <div className="container footerInner">
        <div className="footerGridPremium">
          {/* COL 1: Sobre */}
          <div className="footerCol">
            <h3 className="footerTitle">Urano Seguros</h3>
            <p className="footerText">
              Corretora de seguros com atendimento humano, transparente e soluções sob medida
              para você e sua empresa.
            </p>

            <div className="footerSocial">
              <a
                className="footerSocialBtn ig"
                href={INSTAGRAM_LINK}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                title="Instagram"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm5 4.8A5.2 5.2 0 1 1 6.8 12 5.2 5.2 0 0 1 12 6.8zm0 2A3.2 3.2 0 1 0 15.2 12 3.2 3.2 0 0 0 12 8.8zm5.3-2.3a1.2 1.2 0 1 1-1.2-1.2 1.2 1.2 0 0 1 1.2 1.2z" />
                </svg>
              </a>

              <a
                className="footerSocialBtn fb"
                href={FACEBOOK_LINK}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                title="Facebook"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M13 3h4a1 1 0 0 1 1 1v4h-3a1 1 0 0 0-1 1v3h4l-1 4h-3v8h-4v-8H7v-4h3V9a4 4 0 0 1 4-4z" />
                </svg>
              </a>
            </div>
          </div>

          {/* COL 2: Contato */}
          <div className="footerCol">
            <h3 className="footerTitle">Contato</h3>

            <a className="footerPhone" href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
              {DISPLAY_PHONE}
            </a>

            <div className="footerMini">WhatsApp • Atendimento rápido</div>

            <div className="footerText footerLine">Limeira/SP • Atendimento em todo o Brasil</div>

            <div className="footerText footerLine">
              E-mail:{" "}
              <a className="footerLink" href="mailto:matheus.uranoseguros@gmail.com">
                matheus.uranoseguros@gmail.com
              </a>
            </div>
          </div>

          {/* COL 3: Menu */}
          <div className="footerCol">
            <h3 className="footerTitle">Menu</h3>

            <nav className="footerNav" aria-label="Links do rodapé">
              <a className="footerLink" href="/">Home</a>
              <a className="footerLink" href="/a-urano">A Urano</a>
              <a className="footerLink" href="/seguro-auto">Para Você</a>
              <a className="footerLink" href="/seguro-empresarial">Para Empresas</a>
              <a className="footerLink" href="/consorcio">Produtos Financeiros</a>
              <a className="footerLink" href="/faq">F.A.Q</a>
              <a className="footerLink" href="#contato">Contato</a>
            </nav>
          </div>

          {/* COL 4: CTAs */}
          <div className="footerCol footerCtas">
            <h3 className="footerTitle">Atalhos</h3>

            <a className="footerBtn footerBtnGreen" href="/cotacao-online">
              Cotação On-line
            </a>

            <a
              className="footerBtn footerBtnBlue"
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>

        <div className="footerBottomPremium">
          <span>© {new Date().getFullYear()} Urano Seguros — Todos os direitos reservados.</span>
          <span className="footerDev">Desenvolvido por Urano Seguros</span>
        </div>
      </div>
    </footer>
  );
}
