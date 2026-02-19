"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export default function ObrigadoTracking() {
  useEffect(() => {
    // dispara conversão do formulário
    window.gtag?.("event", "lead_formulario", {
      event_category: "conversion",
      event_label: "Formulario enviado",
    });
  }, []);

  return null;
}
