import { CheckCircle, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";
import { ScrollAnimation } from "@/hooks/useScrollAnimation";

const CarrierHero = () => {
  return (
    <section 
      className="pt-[72px] min-h-screen flex items-center justify-center relative overflow-hidden bg-cover bg-center bg-fixed"
      style={{ backgroundImage: "linear-gradient(180deg, rgba(10,10,10,0.75) 0%, rgba(10,10,10,0.92) 60%, rgba(10,10,10,1) 100%), url('/assets/26 on the road.jpg')" }}
    >
      <div className="container mx-auto px-6 max-w-7xl text-center py-16">
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
            <span className="bg-gradient-to-r from-green-500 via-green-400 to-emerald bg-clip-text text-transparent">No Runaround.</span>
          </h1>
        </ScrollAnimation>
        
        <ScrollAnimation delay={200}>
          <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
            Keep more of what you earn. Transparent rates, <span className="text-emerald-light font-semibold">24-hour QuickPay</span>, 
            and loads direct from shippers—no double-brokering, no games, no wondering who you're really working for.
            Join a network built by former carriers who understand what you need.
          </p>
        </ScrollAnimation>

        <ScrollAnimation delay={300}>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-16">
            <Link
              to="/account"
              className="inline-flex items-center justify-center gap-2.5 px-12 py-5 rounded-xl bg-gradient-to-r from-green-500 to-emerald text-white text-lg font-bold shadow-lg shadow-emerald/30 transition-all hover:shadow-emerald/40 hover:-translate-y-0.5 w-full sm:w-auto"
            >
              <CheckCircle className="w-6 h-6" />
              Apply to Join Network
            </Link>
            <a
              href="#quickpay"
              className="inline-flex items-center justify-center gap-2.5 px-12 py-5 rounded-xl bg-background border border-gray-700 text-white text-lg font-bold transition-all hover:bg-charcoal-light hover:border-emerald w-full sm:w-auto"
            >
              <DollarSign className="w-6 h-6" />
              See QuickPay Options
            </a>
          </div>
        </ScrollAnimation>

        <ScrollAnimation delay={400}>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {["Transparent Rates", "24-Hour QuickPay", "Direct Shipper Loads", "No Double-Brokering"].map((item, i) => (
              <div key={i} className="flex items-center justify-center gap-3 text-gray-300">
                <CheckCircle className="w-5 h-5 text-emerald" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </ScrollAnimation>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-8 h-8 text-emerald" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default CarrierHero;
