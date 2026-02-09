import { WHATSAPP_LINK } from "./constants";

export default function WhatsAppFloat() {
  return (
    <div className="waFloat">
      <a className="waBtn" href={WHATSAPP_LINK} target="_blank" rel="noreferrer" aria-label="WhatsApp Urano Seguros">
        <span className="waIcon">📲</span>
        <span>Chamar no WhatsApp</span>
      </a>
    </div>
  );
}
