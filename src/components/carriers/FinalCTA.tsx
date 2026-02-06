import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import { ScrollAnimation } from "@/hooks/useScrollAnimation";

const FinalCTA = () => {
  return (
    <section className="py-24 border-t border-white/[0.06]">
      <div className="container mx-auto px-6 max-w-[1180px]">
        <ScrollAnimation animation="scale">
          <div 
            className="rounded-xl p-12 md:p-16 text-center"
            style={{
              background: "linear-gradient(135deg, rgba(16,185,129,0.10) 0%, rgba(16,185,129,0.03) 100%)",
              border: "1px solid rgba(16,185,129,0.18)"
            }}
          >
            <p className="text-emerald font-display font-semibold tracking-[0.06em] uppercase text-xs mb-3">
              Join Our Network
            </p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-[44px] font-bold text-white leading-tight tracking-tight mb-4">
              Stop Settling for Less.<br/>
              <span className="text-emerald">Start Earning More.</span>
            </h2>
            <p className="text-white/75 text-base md:text-lg max-w-[58ch] mx-auto leading-relaxed mb-8">
              Join thousands of carriers who've made the switch to fair pay, transparent rates, 
              and fast payment. Your truck, your business—but with better loads.
            </p>
            <div className="flex flex-wrap justify-center gap-3.5">
              <Link
                to="/account"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-lg border border-emerald-dark bg-emerald-dark text-white text-[15px] font-bold transition-all hover:bg-emerald hover:border-emerald"
              >
                Apply Now — It's Free
              </Link>
              <a
                href="tel:18007627839"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-lg border border-white/10 bg-white/[0.03] text-white text-[15px] font-bold transition-all hover:bg-white/[0.06]"
              >
                <Phone className="w-4 h-4" />
                Call 1-800-SMART-EXP
              </a>
            </div>
            <p className="mt-6 text-white/40 text-[13px]">No fees to join • No minimums • No commitments</p>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default FinalCTA;
