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
    <section id="equipment" className="py-24 bg-background">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <ScrollAnimation>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald/10 border border-emerald/30 text-emerald-light text-sm font-medium mb-6">
              Equipment We Need
            </span>
          </ScrollAnimation>
          <ScrollAnimation delay={100}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Your Truck,<br/><span className="bg-gradient-to-r from-green-500 to-emerald bg-clip-text text-transparent">Our Loads</span>
            </h2>
          </ScrollAnimation>
          <ScrollAnimation delay={200}>
            <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
              We're actively seeking reliable carriers with cargo vans, sprinters, and straight trucks for expedited freight across the nation.
            </p>
          </ScrollAnimation>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {equipment.map((equip, i) => (
            <ScrollAnimation key={i} delay={i * 100}>
              <div 
                className="bg-[#1A1A1A] border border-gray-800 rounded-2xl overflow-hidden transition-all hover:border-emerald/50 hover:-translate-y-1 hover:shadow-xl h-full"
              >
                <img 
                  src={equip.image} 
                  alt={equip.title} 
                  className="w-full h-[200px] object-cover"
                />
                <div className="p-6">
                  <h4 className="text-xl font-bold text-white mb-2">{equip.title}</h4>
                  <p className="text-gray-400 text-sm mb-4">{equip.specs}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-emerald font-bold">Avg. {equip.rate}</span>
                    <span className="text-xs text-gray-500">{equip.demand}</span>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        <ScrollAnimation delay={400}>
          <div className="mt-12 text-center">
            <p className="text-gray-400 mb-6">Have different equipment? We may still have loads for you.</p>
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#1A1A1A] border border-gray-700 text-white font-bold transition-all hover:border-emerald hover:bg-charcoal-light"
            >
              <span>Contact Us About Your Equipment</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default EquipmentSection;
