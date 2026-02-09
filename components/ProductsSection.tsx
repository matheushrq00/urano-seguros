export default function ProductsSection() {
  return (
    <section className="section">
      <div className="container">
        <div className="productsGrid">

          {/* Seguro Auto */}
          <div className="product">
            <div
              className="productImg"
              style={{ backgroundImage: "url(/products/seguro-auto.png)" }}
            />
            <div className="productBody">
              <h2>Seguro Auto</h2>
              <p>Aqui você encontrará as melhores ofertas das seguradoras do mercado.</p>
              <a className="btnGhost" href="/seguro-auto">Saiba mais</a>
            </div>
          </div>

          {/* Seguro Residencial */}
          <div className="product">
            <div
              className="productImg"
              style={{ backgroundImage: "url(/products/seguro-residencial.png)" }}
            />
            <div className="productBody">
              <h2>Seguro Residencial</h2>
              <p>Proteção do patrimônio e assistências para viver com tranquilidade.</p>
              <a className="btnGhost" href="/seguro-residencial">Saiba mais</a>
            </div>
          </div>

          {/* Seguro de Vida */}
          <div className="product">
            <div
              className="productImg"
              style={{ backgroundImage: "url(/products/seguro-vida.png)" }}
            />
            <div className="productBody">
              <h2>Seguro de Vida</h2>
              <p>Segurança para você e sua família com coberturas personalizadas.</p>
              <a className="btnGhost" href="/seguro-vida">Saiba mais</a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
