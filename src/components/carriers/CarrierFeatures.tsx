import { DollarSign, Clock, Truck, Shield, Users, BarChart3 } from "lucide-react";
import { ScrollAnimation } from "@/hooks/useScrollAnimation";

const CarrierFeatures = () => {
  const features = [
    { 
      icon: DollarSign, 
      title: "Transparent Rates", 
      desc: "See exactly what you'll earn before accepting any load. The rate you see is the rate you get—no last-minute deductions, no surprise fees, no games. We show you shipper pay and our flat service fee upfront." 
    },
    { 
      icon: Clock, 
      title: "24-Hour QuickPay", 
      desc: "Stop waiting 30-45 days to get paid. With QuickPay, upload your POD and receive payment within 24 hours via direct deposit. Keep your cash flow healthy and your business growing." 
    },
    { 
      icon: Truck, 
      title: "Direct Shipper Loads", 
      desc: "All loads come direct from verified shippers. No middlemen, no wondering who you're actually working for. Build relationships with shippers who value your service and reliability." 
    },
    { 
      icon: Shield, 
      title: "No Double-Brokering", 
      desc: "Every load is verified. We don't allow brokers to re-broker loads on our platform. You always know exactly who you're hauling for and that the load is legitimate." 
    },
    { 
      icon: Users, 
      title: "24/7 Dispatch Support", 
      desc: "Our dispatch team is available around the clock—not just during business hours. Whether it's 2 AM breakdown assistance or a routing question, we're here for you." 
    },
    { 
      icon: BarChart3, 
      title: "AI Route Optimizer", 
      desc: "Our AI analyzes available loads, your location, fuel costs, and market rates to suggest the most profitable routes. See estimated earnings and deadhead miles before you bid." 
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
