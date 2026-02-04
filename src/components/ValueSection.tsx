import { TrendingUp, Lock } from "lucide-react";
import { ScrollAnimation } from "@/hooks/useScrollAnimation";

const ValueSection = () => {
  return (
    <section className="py-24 border-t border-white/[0.06]">
      <div className="container mx-auto px-6 max-w-[1180px]">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <ScrollAnimation animation="fade-left">
            <div>
              <p className="text-emerald font-display font-semibold tracking-[0.06em] uppercase text-xs mb-3">
                Transparency & Value
              </p>
              <h2 className="font-display text-3xl md:text-4xl lg:text-[44px] font-bold text-white leading-tight tracking-tight mb-4">
                Total Transparency &<br />
                <span className="text-emerald">Direct Cost Savings</span>
              </h2>
              <p className="text-white/75 text-base md:text-lg leading-relaxed mb-4">
                Traditional brokers mark up 30-40% and hide what carriers actually get paid. 
                We charge a flat 8%—and show you exactly where every dollar goes.
              </p>
              <p className="text-white/75 mb-6">
                You see what the truck gets paid. Our model ensures you are paying for{" "}
                <strong className="text-white">movement, not markup</strong>.
              </p>

              {/* Value Boxes */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-white/[0.03] border border-white/10 rounded-lg p-5 transition-all hover:border-emerald/25 hover:bg-emerald/[0.03]">
                  <div className="flex items-center gap-2.5 mb-2.5 font-bold text-[15px] text-white">
                    <TrendingUp className="w-5 h-5 text-emerald flex-shrink-0" />
                    Cost Efficiency
                  </div>
                  <p className="text-sm text-white/55 leading-relaxed">
                    Flat 8% Service Fee. No hidden spreads. No variable margins. Just pure operational execution.
                  </p>
                </div>
                <div className="bg-white/[0.03] border border-white/10 rounded-lg p-5 transition-all hover:border-emerald/25 hover:bg-emerald/[0.03]">
                  <div className="flex items-center gap-2.5 mb-2.5 font-bold text-[15px] text-white">
                    <Lock className="w-5 h-5 text-emerald flex-shrink-0" />
                    Chain of Custody
                  </div>
                  <p className="text-sm text-white/55 leading-relaxed">
                    Two-step verification codes at pickup and delivery. Secure, verified, and transparent.
                  </p>
                </div>
              </div>
            </div>
          </ScrollAnimation>

          {/* Right - Content Block */}
          <ScrollAnimation animation="fade-right" delay={200}>
            <div className="bg-white/[0.02] border border-white/10 rounded-xl p-10">
              <h3 className="font-display text-xl md:text-2xl font-semibold text-white mb-4">
                How We Operate
              </h3>
              <p className="text-white/75 mb-4 leading-relaxed">
                Our operating model emphasizes execution over volume. Technology supports visibility 
                and verification, while human oversight remains central to managing exceptions, 
                communication, and handoffs.
              </p>
              <p className="text-white/75 mb-4 leading-relaxed">
                Carrier access is controlled rather than crowdsourced. Each shipment follows defined 
                procedures designed to reduce misidentification, unauthorized substitutions, and execution drift.
              </p>
              <p className="text-white/75 leading-relaxed">
                Every carrier is asset-verified weekly. No load boards. No re-brokering. 
                One verified truck, one verified driver, one direct chain of custody.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default ValueSection;