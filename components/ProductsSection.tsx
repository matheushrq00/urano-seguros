export default function ProductsSection() {
  return (
    <section className="section--segments">
  <div className="segmentsWrap">
    <div className="segmentsHead">
      <div className="segmentsEyebrow">URANO SEGUROS</div>
      <h2 className="segmentsTitle">Nossos Segmentos</h2>
      <p className="segmentsText">
        Aqui você encontra soluções completas em seguros e produtos financeiros, com atendimento humano e consultivo.
      </p>
    </div>

    <div className="segmentsGrid">
      <a className="segmentCard" href="/seguro-residencial">
        <div className="segmentIcon">🏠</div>
        <h3>Para Você</h3>
      </a>

      <a className="segmentCard" href="/seguro-empresarial">
        <div className="segmentIcon">🏢</div>
        <h3>Para sua empresa</h3>
      </a>

      <a className="segmentCard" href="/consorcio">
        <div className="segmentIcon">📈</div>
        <h3>Produtos Financeiros</h3>
      </a>
    </div>
  </div>
</section>

  );
}
