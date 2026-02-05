import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ScrollAnimation } from "@/hooks/useScrollAnimation";

const EquipmentSection = () => {
  const equipment = [
    { 
      image: "/assets/Cargo_van.jpg", 
      title: "Cargo Van", 
      specs: "Up to 3,000 lbs • 280 cu ft",
      rate: "$1.85/mi",
      demand: "High demand"
    },
    { 
      image: "/assets/Full size Van.jpg", 
      title: "Sprinter Van", 
      specs: "Up to 5,000 lbs • 530 cu ft",
      rate: "$2.05/mi",
      demand: "High demand"
    },
    { 
      image: "/assets/16_footer.jpg", 
      title: "16' Box Truck", 
      specs: "Up to 7,000 lbs • 800 cu ft",
      rate: "$2.25/mi",
      demand: "High demand"
    },
    { 
      image: "/assets/26 on the road.jpg", 
      title: "26' Box Truck", 
      specs: "Up to 10,000 lbs • 1,400 cu ft",
      rate: "$2.45/mi",
      demand: "Very high demand"
    },
  ];

  return (
    <section id="equipment" className="py-24 border-t border-white/[0.06]">
      <div className="container mx-auto px-6 max-w-[1180px]">
        <div className="text-center mb-12">
          <ScrollAnimation>
            <p className="text-emerald font-display font-semibold tracking-[0.06em] uppercase text-xs mb-3">
              Equipment We Need
            </p>
          </ScrollAnimation>
          <ScrollAnimation delay={100}>
            <h2 className="font-display text-3xl md:text-4xl lg:text-[44px] font-bold text-white leading-tight tracking-tight mb-4">
              Your Truck,<br/><span className="text-emerald">Our Loads</span>
            </h2>
          </ScrollAnimation>
          <ScrollAnimation delay={200}>
            <p className="text-white/75 text-base md:text-lg max-w-[68ch] mx-auto leading-relaxed">
              We're actively seeking reliable carriers with cargo vans, sprinters, and straight trucks for expedited freight across the nation.
            </p>
          </ScrollAnimation>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {equipment.map((equip, i) => (
            <ScrollAnimation key={i} delay={i * 100}>
              <div 
                className="bg-white/[0.02] border border-white/10 rounded-xl overflow-hidden transition-all hover:border-emerald/25 hover:-translate-y-1 hover:bg-emerald/[0.03] h-full"
              >
                <img 
                  src={equip.image} 
                  alt={equip.title} 
                  className="w-full h-[140px] object-cover"
                />
                <div className="p-4">
                  <h4 className="font-display text-white font-semibold text-[15px] mb-1">{equip.title}</h4>
                  <p className="text-white/55 text-[12px] mb-3">{equip.specs}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-emerald font-bold text-[13px]">Avg. {equip.rate}</span>
                    <span className="text-[11px] text-white/40">{equip.demand}</span>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        <ScrollAnimation delay={400}>
          <div className="mt-10 text-center">
            <p className="text-white/55 text-sm mb-4">Have different equipment? We may still have loads for you.</p>
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-white/[0.03] border border-white/10 text-white text-sm font-bold transition-all hover:border-emerald/25 hover:bg-emerald/[0.03]"
            >
              <span>Contact Us About Your Equipment</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default EquipmentSection;
