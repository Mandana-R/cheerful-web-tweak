import { Sun, FileText, Plane, Activity, Truck } from "lucide-react";
import { ScrollAnimation } from "@/hooks/useScrollAnimation";

const industries = [
  { icon: Sun, label: "Manufacturing" },
  { icon: FileText, label: "Automotive" },
  { icon: Plane, label: "Aerospace" },
  { icon: Activity, label: "Medical" },
  { icon: Truck, label: "Freight Forwarding" },
];

const PricingSection = () => {
  return (
    <section className="py-24 border-t border-white/[0.06]">
      <div className="container mx-auto px-6 max-w-[1180px]">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-16 items-center">
          {/* Left - Pricing Block */}
          <ScrollAnimation animation="fade-left">
            <div 
              className="bg-white/[0.02] border border-white/10 rounded-xl p-10"
              style={{ 
                background: "linear-gradient(135deg, rgba(16,185,129,0.06) 0%, rgba(16,185,129,0.02) 100%)",
                borderColor: "rgba(16,185,129,0.15)"
              }}
            >
              <p className="text-emerald font-display font-semibold tracking-[0.06em] uppercase text-xs mb-4">
                Pricing Transparency
              </p>
              <h3 className="font-display text-xl md:text-2xl font-semibold text-white mb-4">
                No Hidden Broker Spreads
              </h3>
              <p className="text-white/75 mb-4 leading-relaxed">
                Rates are structured to support reliable execution. Service fees are disclosed, 
                and pricing is designed to reflect the real costs of verification, oversight, 
                and time-critical coordination.
              </p>
              <p className="text-white/75 leading-relaxed">
                There are no hidden broker spreads or hidden add-ons adjustments. 
                This is how we eliminate double-brokering.
              </p>
            </div>
          </ScrollAnimation>

          {/* Right - Industries */}
          <ScrollAnimation animation="fade-right" delay={200}>
            <div>
              <p className="text-emerald font-display font-semibold tracking-[0.06em] uppercase text-xs mb-3">
                Who We Serve
              </p>
              <h2 className="font-display text-3xl md:text-4xl lg:text-[44px] font-bold text-white leading-tight tracking-tight mb-4">
                Built for Time-Sensitive Operations
              </h2>
              <p className="text-white/75 text-base md:text-lg leading-relaxed mb-6">
                Smart Expedite works with organizations operating in time-sensitive environments. 
                Our services are designed for teams that value predictability, communication, 
                and control over lowest-cost spot pricing.
              </p>

              {/* Industry Tags */}
              <div className="flex flex-wrap gap-3">
                {industries.map((industry, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center gap-2 px-4 py-3 border border-white/10 rounded-full bg-white/[0.02] text-sm font-semibold text-white/85 transition-all hover:border-emerald/25 hover:bg-emerald/[0.05] hover:text-white"
                  >
                    <industry.icon className="w-[18px] h-[18px] text-emerald" />
                    {industry.label}
                  </span>
                ))}
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;