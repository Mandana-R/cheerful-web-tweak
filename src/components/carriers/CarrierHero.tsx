import { CheckCircle, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";
import { ScrollAnimation } from "@/hooks/useScrollAnimation";

const CarrierHero = () => {
  return (
    <section className="pt-[72px] min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Static Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url('/assets/carrier_hero.png')` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 gradient-hero-overlay z-[1]" />
      
      {/* Emerald Glow */}
      <div 
        className="absolute top-0 right-0 w-[60%] h-full z-[2] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 80% 20%, rgba(16,185,129,0.06) 0%, transparent 60%)" }}
      />

      <div className="container mx-auto px-6 max-w-7xl text-center py-16 relative z-[2]">
        <ScrollAnimation delay={0}>
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald/10 border border-emerald/30 text-emerald-light text-sm font-medium">
              <CheckCircle className="w-4 h-4" />
              <span>Trusted by 2,500+ Owner-Operators Nationwide</span>
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation delay={100}>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-[1.1] mb-6 tracking-tight">
            Fair Pay. Direct Loads.<br/>
            <span className="text-emerald">No Runaround.</span>
          </h1>
        </ScrollAnimation>
        
        <ScrollAnimation delay={200}>
          <p className="text-lg md:text-xl text-white/75 max-w-4xl mx-auto mb-12 leading-relaxed">
            Keep more of what you earn. Transparent rates, <span className="text-emerald-light font-semibold">24-hour QuickPay</span>, 
            and loads direct from shippers—no double-brokering, no games, no wondering who you're really working for.
            Join a network built by former carriers who understand what you need.
          </p>
        </ScrollAnimation>

        <ScrollAnimation delay={300}>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-16">
            <Link
              to="/account"
              className="inline-flex items-center justify-center gap-2.5 px-12 py-5 rounded-xl bg-emerald-dark border border-emerald-dark text-white text-lg font-bold transition-all hover:bg-emerald hover:border-emerald w-full sm:w-auto"
            >
              <CheckCircle className="w-6 h-6" />
              Apply to Join Network
            </Link>
            <a
              href="#quickpay"
              className="inline-flex items-center justify-center gap-2.5 px-12 py-5 rounded-xl bg-white/[0.03] border border-white/10 text-white text-lg font-bold transition-all hover:bg-emerald/[0.03] hover:border-emerald/25 w-full sm:w-auto"
            >
              <DollarSign className="w-6 h-6" />
              See QuickPay Options
            </a>
          </div>
        </ScrollAnimation>

        <ScrollAnimation delay={400}>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {["Transparent Rates", "24-Hour QuickPay", "Direct Shipper Loads", "No Double-Brokering"].map((item, i) => (
              <div key={i} className="flex items-center justify-center gap-3 text-white/75">
                <CheckCircle className="w-5 h-5 text-emerald" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </ScrollAnimation>

      </div>

    </section>
  );
};

export default CarrierHero;
