export default function ElectronicsSection() {
  return (
    <section className="section">
      <div className="container">
        <div className="productsGrid single">

          <div className="product">
            <div
              className="productImg"
              style={{ backgroundImage: "url(/products/seguro-eletronicos.png)" }}
            />
            <div className="productBody">
              <h2>Seguros Eletrônicos</h2>
              <p>
                Proteja seus equipamentos (celular, notebook e outros) contra
                acidentes, roubos e danos.
              </p>
              <a className="btnGhost" href="/seguros-eletronicos">
                Saiba mais
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
