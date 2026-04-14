import Script from "next/script";

type Props = {
  carName: string;
};

export default function SchemaAuto({ carName }: Props) {
  return (
    <>
      <Script
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: `Seguro ${carName}`,
            description: `Seguro para ${carName} com cotação rápida em Limeira.`,
            brand: {
              "@type": "Brand",
              name: carName,
            },
            offers: {
              "@type": "Offer",
              priceCurrency: "BRL",
              price: "1500",
              availability: "https://schema.org/InStock",
            },
          }),
        }}
      />

      <Script
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "InsuranceAgency",
            name: "Urano Seguros",
            areaServed: "Limeira SP",
            telephone: "+55 19 99872-2063",
          }),
        }}
      />
    </>
  );
}