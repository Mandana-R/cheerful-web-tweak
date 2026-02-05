import { CheckCircle, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";
import { ScrollAnimation } from "@/hooks/useScrollAnimation";

const CarrierHero = () => {
  return (
    <section className="pt-[72px] min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Static Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('/assets/carrier_hero.png')` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 gradient-hero-overlay z-[1]" />
      
      {/* Emerald Glow */}
      <div 
        className="absolute top-0 right-0 w-[60%] h-full z-[2] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 80% 20%, rgba(16,185,129,0.06) 0%, transparent 60%)" }}
      />

      <div className="container mx-auto px-6 max-w-[1180px] py-20 relative z-[2]">
        <div className="max-w-3xl">
          <ScrollAnimation delay={0}>
            <span className="inline-flex items-center gap-2.5 border border-emerald/25 bg-emerald/[0.08] px-4 py-2.5 rounded-full text-emerald-light text-[13px] font-semibold mb-5">
              <span className="w-2 h-2 rounded-full bg-emerald shadow-[0_0_0_4px_rgba(16,185,129,0.15)] animate-pulse" />
              Trusted by 2,500+ Owner-Operators Nationwide
            </span>
          </ScrollAnimation>

          <ScrollAnimation delay={100}>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.05] tracking-tight mb-4">
              Fair Pay. Direct Loads.<br/>
              <span className="text-emerald">No Runaround.</span>
            </h1>
          </ScrollAnimation>
          
          <ScrollAnimation delay={200}>
            <p className="text-white/75 text-base md:text-lg max-w-[58ch] leading-relaxed mb-7">
              Keep more of what you earn. Transparent rates, <span className="text-emerald-light font-semibold">24-hour QuickPay</span>, 
              and loads direct from shippers—no double-brokering, no games.
            </p>
          </ScrollAnimation>

          <ScrollAnimation delay={300}>
            <div className="flex flex-wrap gap-3.5 mb-10">
              <Link
                to="/account"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-lg border border-emerald-dark bg-emerald-dark text-white text-[15px] font-bold transition-all hover:bg-emerald hover:border-emerald"
              >
                <CheckCircle className="w-5 h-5" />
                Apply to Join Network
              </Link>
              <a
                href="#quickpay"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-lg border border-white/10 bg-white/[0.03] text-white text-[15px] font-bold transition-all hover:bg-white/[0.06]"
              >
                <DollarSign className="w-5 h-5" />
                See QuickPay Options
              </a>
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={400}>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {["Transparent Rates", "24-Hour QuickPay", "Direct Shipper Loads", "No Double-Brokering"].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-white/75 text-sm">
                  <CheckCircle className="w-4 h-4 text-emerald" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </ScrollAnimation>
        </div>
      </div>

    </section>
  );
};

export default CarrierHero;
