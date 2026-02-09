import "./globals.css";
import Header from "@/components/Header";
import ContactFooter from "@/components/ContactFooter";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Script from "next/script";

export const metadata = {
  title: "Urano Seguros",
  description:
    "Cote seguro auto, vida, residencial, empresarial, consórcio e mais com a Urano Seguros.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="pt-BR">
      <head>
        {GA_ID ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                window.gtag = gtag;
                gtag('js', new Date());
                gtag('config', '${GA_ID}', { anonymize_ip: true });
              `}
            </Script>
          </>
        ) : null}
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
