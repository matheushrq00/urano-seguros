import "./globals.css";
import Header from "@/components/Header";
import ContactFooter from "@/components/ContactFooter";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Script from "next/script";
import type { Metadata } from "next";
export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};


export const metadata: Metadata = {
  metadataBase: new URL("https://uranoseguros.com.br"),
  title: {
    default: "Urano Seguros",
    template: "%s | Urano Seguros",
  },
  description:
    "Cote seguro auto, vida, residencial, empresarial, consórcio e mais com a Urano Seguros em Limeira.",
    themeColor: "#0d1f3c",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
  const AW_ID = process.env.NEXT_PUBLIC_AW_ID;

  return (
    <html lang="pt-BR">
      <head>
        {(GA_ID || AW_ID) && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID || AW_ID}`}
              strategy="afterInteractive"
            />
            <Script id="gtag-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                window.gtag = gtag;
                gtag('js', new Date());
                ${GA_ID ? `gtag('config', '${GA_ID}', { anonymize_ip: true });` : ""}
                ${AW_ID ? `gtag('config', '${AW_ID}');` : ""}
              `}
            </Script>
          </>
        )}
      </head>

      <body>
        <Header />
        {children}
        <ContactFooter />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
