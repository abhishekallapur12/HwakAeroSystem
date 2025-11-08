import ProductFeatures from "../components/ProductFeatures";
import SmartTech from "../components/SmartTech";
import FinalCTA from "../components/FinalCTA";
import TurboSpecifications from "../components/TurboSpecifications";
import FAQSection from "../components/FAQSection";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";


export default function ProductTurbo(): JSX.Element {
  return (
    <main className="bg-white text-black overflow-x-hidden">
        <HeroSection />
      <ProductFeatures />
      <SmartTech />
      <FinalCTA />
      <TurboSpecifications />
      <FAQSection />
      <Footer />
    </main>
  );
}
