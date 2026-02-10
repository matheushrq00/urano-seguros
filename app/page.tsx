import Hero from "@/components/Hero";
import FormsSection from "@/components/FormsSection";
import ProductsSection from "@/components/ProductsSection";
import ElectronicsSection from "@/components/ElectronicsSection";
import Testimonials from "@/components/Testimonials";
import Partners from "@/components/Partners";

export default function Page() {
  return (
    <main>
      {/* 🔹 Parceiros logo abaixo da navbar preta */}
      <section className="section section--tight">
  <div className="container">
    <Partners />
  </div>
</section>


      <Hero />
      <FormsSection />
      <ProductsSection />
      <ElectronicsSection />

      <section className="section">
        <div className="container">
          <Testimonials />
        </div>
      </section>
    </main>
  );
}

