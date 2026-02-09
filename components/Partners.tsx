"use client";

const partners = [
  { name: "Porto", logo: "/partners/porto.png" },
  { name: "Azul Seguros", logo: "/partners/azul.png" },
  { name: "Allianz", logo: "/partners/allianz.png" },
  { name: "HDI", logo: "/partners/hdi.png" },
  { name: "Mapfre", logo: "/partners/mapfre.png" },
  { name: "Zurich", logo: "/partners/zurich.png" },
  { name: "Bradesco Seguros", logo: "/partners/bradesco.png" },
  { name: "Suhai Seguradora", logo: "/partners/suhai.png" },
  { name: "Yelum", logo: "/partners/yelum.png" },
  { name: "Aliro", logo: "/partners/aliro.png" },
  { name: "Mitsui", logo: "/partners/mitsui.webp" },
  { name: "Itau", logo: "/partners/itau.png" },
];

export default function Partners() {
  const loop = [...partners, ...partners];

  return (
    <>
      <h2 style={{ margin: "0 0 14px 0" }}>Parceiros</h2>

      <div className="partnersMarquee">
        <div className="partnersTrack">
          {loop.map((p, idx) => (
            <div key={`${p.name}-${idx}`} className="partnerCard">
              <img
                src={p.logo}
                alt={p.name}
                title={p.name}
                className="partnerLogo"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
