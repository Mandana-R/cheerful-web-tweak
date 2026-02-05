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
    <section id="features" className="py-24 border-t border-white/[0.06]">
      <div className="container mx-auto px-6 max-w-[1180px]">
        <div className="text-center mb-16">
          <ScrollAnimation>
            <p className="text-emerald font-display font-semibold tracking-[0.06em] uppercase text-xs mb-3">
              Why Carriers Choose Us
            </p>
          </ScrollAnimation>
          <ScrollAnimation delay={100}>
            <h2 className="font-display text-3xl md:text-4xl lg:text-[44px] font-bold text-white leading-tight tracking-tight mb-4">
              Built by Carriers,<br/><span className="text-emerald">for Carriers</span>
            </h2>
          </ScrollAnimation>
          <ScrollAnimation delay={200}>
            <p className="text-white/75 text-base md:text-lg max-w-[68ch] mx-auto leading-relaxed">
              We've experienced the frustrations of traditional brokerage firsthand. That's why we built a platform that puts carriers first—with transparency, fast pay, and real support.
            </p>
          </ScrollAnimation>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature, i) => (
            <ScrollAnimation key={i} delay={i * 100}>
              <div 
                className="bg-white/[0.02] border border-white/10 rounded-xl p-6 transition-all hover:border-emerald/25 hover:-translate-y-1 hover:bg-emerald/[0.03] h-full"
              >
                <div className="w-12 h-12 rounded-lg bg-emerald-subtle border border-emerald/15 flex items-center justify-center mb-4">
                  <feature.icon className="w-5 h-5 text-emerald" />
                </div>
                <h4 className="font-display text-white font-semibold text-[15px] mb-2">{feature.title}</h4>
                <p className="text-white/55 text-[13px] leading-relaxed">{feature.desc}</p>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CarrierFeatures;
