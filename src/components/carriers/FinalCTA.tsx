import { Link } from "react-router-dom";
import { Phone } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-emerald/10 via-[#1A1A1A] to-background relative overflow-hidden">
      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage: "linear-gradient(rgba(16, 185, 129, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(16, 185, 129, 0.03) 1px, transparent 1px)",
          backgroundSize: "50px 50px"
        }}
      />
      
      <div className="container mx-auto px-6 max-w-5xl text-center relative z-10">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
          Stop Settling for Less.<br/>
          <span className="bg-gradient-to-r from-green-500 to-emerald bg-clip-text text-transparent">Start Earning More.</span>
        </h2>
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10">
          Join thousands of carriers who've made the switch to fair pay, transparent rates, 
          and fast payment. Your truck, your business—but with better loads.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link
            to="/account"
            className="inline-flex items-center justify-center px-12 py-5 rounded-xl bg-gradient-to-r from-green-500 to-emerald text-white text-lg font-bold shadow-lg shadow-emerald/30 transition-all hover:shadow-emerald/40 hover:-translate-y-0.5 w-full sm:w-auto"
          >
            Apply Now — It's Free
          </Link>
          <a
            href="tel:18007627839"
            className="inline-flex items-center justify-center gap-2 px-12 py-5 rounded-xl bg-background border border-gray-700 text-white text-lg font-bold transition-all hover:bg-charcoal-light hover:border-emerald w-full sm:w-auto"
          >
            <Phone className="w-5 h-5" />
            Call 1-800-SMART-EXP
          </a>
        </div>
        
        <p className="mt-8 text-gray-500 text-sm">No fees to join • No minimums • No commitments</p>
      </div>
    </section>
  );
};

export default FinalCTA;
