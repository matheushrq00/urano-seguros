import Hero from "@/components/Hero/Hero";
import OnlineQuoteSection from "@/components/OnlineQuoteSection";
import FormsSection from "@/components/FormsSection";
import ProductsSection from "@/components/ProductsSection";
import ElectronicsSection from "@/components/ElectronicsSection";
import Testimonials from "@/components/Testimonials";
import Partners from "@/components/Partners";
import Reveal from "@/components/Reveal";

export default function Page() {
  return (
    <main>
      <Hero />

{/* ✅ AQUI: seção de cotação on-line */}
<Reveal delay={0.03}>
  <OnlineQuoteSection />
</Reveal>


      <section className="section section--tight">
        <div className="container">
          <Reveal delay={0.05}><Partners /></Reveal>
        </div>
      </section>

      <Reveal delay={0.08}><FormsSection /></Reveal>
      <Reveal delay={0.10}><ProductsSection /></Reveal>
      <Reveal delay={0.12}><ElectronicsSection /></Reveal>

      <section className="section">
        <div className="container">
          <Reveal delay={0.14}><Testimonials /></Reveal>
        </div>
      </section>
    </main>
  );
}
