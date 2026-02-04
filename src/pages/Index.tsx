import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import ValueSection from "@/components/ValueSection";
import EquipmentSlider from "@/components/EquipmentSlider";
import FocusSection from "@/components/FocusSection";
import ChainOfCustody from "@/components/ChainOfCustody";
import PricingSection from "@/components/PricingSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <StatsBar />
      <ValueSection />
      <EquipmentSlider />
      <FocusSection />
      <ChainOfCustody />
      <PricingSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
