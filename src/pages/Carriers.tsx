import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CarrierHero from "@/components/carriers/CarrierHero";
import CarrierStats from "@/components/carriers/CarrierStats";
import CarrierFeatures from "@/components/carriers/CarrierFeatures";
import QuickPaySection from "@/components/carriers/QuickPaySection";
import EquipmentSection from "@/components/carriers/EquipmentSection";
import HowToJoin from "@/components/carriers/HowToJoin";
import Requirements from "@/components/carriers/Requirements";
import Testimonials from "@/components/carriers/Testimonials";
import CarrierFAQ from "@/components/carriers/CarrierFAQ";
import ApplicationForm from "@/components/carriers/ApplicationForm";
import FinalCTA from "@/components/carriers/FinalCTA";

const Carriers = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <CarrierHero />
      <CarrierStats />
      <CarrierFeatures />
      <QuickPaySection />
      <EquipmentSection />
      <HowToJoin />
      <Requirements />
      <Testimonials />
      <CarrierFAQ />
      <ApplicationForm />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Carriers;
