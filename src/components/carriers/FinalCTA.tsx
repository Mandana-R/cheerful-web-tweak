import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import { ScrollAnimation } from "@/hooks/useScrollAnimation";

const FinalCTA = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-emerald/10 via-card/5 to-background relative overflow-hidden">
      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage: "linear-gradient(rgba(16, 185, 129, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(16, 185, 129, 0.03) 1px, transparent 1px)",
          backgroundSize: "50px 50px"
        }}
      />
      
      <div className="container mx-auto px-6 max-w-5xl text-center relative z-10">
        <ScrollAnimation>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Stop Settling for Less.<br/>
            <span className="text-emerald">Start Earning More.</span>
          </h2>
        </ScrollAnimation>
        <ScrollAnimation delay={100}>
          <p className="text-white/55 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Join thousands of carriers who've made the switch to fair pay, transparent rates, 
            and fast payment. Your truck, your business—but with better loads.
          </p>
        </ScrollAnimation>
        
        <ScrollAnimation delay={200}>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link
              to="/account"
              className="inline-flex items-center justify-center px-12 py-5 rounded-xl bg-emerald-dark border border-emerald-dark text-white text-lg font-bold transition-all hover:bg-emerald hover:border-emerald w-full sm:w-auto"
            >
              Apply Now — It's Free
            </Link>
            <a
              href="tel:18007627839"
              className="inline-flex items-center justify-center gap-2 px-12 py-5 rounded-xl bg-white/[0.03] border border-white/10 text-white text-lg font-bold transition-all hover:bg-emerald/[0.03] hover:border-emerald/25 w-full sm:w-auto"
            >
              <Phone className="w-5 h-5" />
              Call 1-800-SMART-EXP
            </a>
          </div>
        </ScrollAnimation>
        
        <ScrollAnimation delay={300}>
          <p className="mt-8 text-white/40 text-sm">No fees to join • No minimums • No commitments</p>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default FinalCTA;
