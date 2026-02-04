import { DollarSign, Clock, Truck, Shield, Users, CheckCircle } from "lucide-react";
import { ScrollAnimation } from "@/hooks/useScrollAnimation";

const CarrierFeatures = () => {
  const features = [
    { 
      icon: DollarSign, 
      title: "Transparent Rates", 
      desc: "See exactly what the shipper pays. No hidden spreads—our 6% platform fee is disclosed upfront. Know what you're earning before you accept." 
    },
    { 
      icon: Clock, 
      title: "24-Hour QuickPay", 
      desc: "Get paid within 24 hours at just 2%. Or choose same-day payment at 3%. No more waiting 30+ days for your hard-earned money." 
    },
    { 
      icon: Truck, 
      title: "Direct Shipper Loads", 
      desc: "Haul for the actual shipper, not through layers of middlemen. Know exactly who your freight is for and build real relationships." 
    },
    { 
      icon: Shield, 
      title: "No Double-Brokering", 
      desc: "Every load is verified. We never re-broker freight. Your rate confirmation means something here—you're protected." 
    },
    { 
      icon: Users, 
      title: "24/7 Dispatch Support", 
      desc: "Real people who answer the phone. Problems get solved, not ignored. We've been where you are—we built this for you." 
    },
    { 
      icon: CheckCircle, 
      title: "Performance Rewards", 
      desc: "Build your reputation on our platform. High performers get priority access to premium loads and better lane preferences." 
    },
  ];

  return (
    <section id="features" className="py-24 bg-background">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-20">
          <ScrollAnimation>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald/10 border border-emerald/30 text-emerald-light text-sm font-medium mb-6">
              Why Carriers Choose Us
            </span>
          </ScrollAnimation>
          <ScrollAnimation delay={100}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Built by Carriers,<br/><span className="bg-gradient-to-r from-green-500 to-emerald bg-clip-text text-transparent">for Carriers</span>
            </h2>
          </ScrollAnimation>
          <ScrollAnimation delay={200}>
            <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
              We've experienced the frustrations of traditional brokerage firsthand. That's why we built a platform that puts carriers first—with transparency, fast pay, and real support.
            </p>
          </ScrollAnimation>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <ScrollAnimation key={i} delay={i * 100}>
              <div 
                className="bg-[#1A1A1A] border border-gray-800 rounded-2xl p-8 transition-all hover:border-emerald/50 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/30 h-full"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald/20 to-emerald/5 border border-emerald/30 flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-emerald" />
                </div>
                <h4 className="text-white font-bold text-xl mb-3">{feature.title}</h4>
                <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CarrierFeatures;
