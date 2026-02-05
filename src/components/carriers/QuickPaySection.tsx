import { Link } from "react-router-dom";
import { ScrollAnimation } from "@/hooks/useScrollAnimation";

const QuickPaySection = () => {
  const options = [
    { 
      title: "Same Day", 
      fee: "3%", 
      desc: "Funds available same business day. Perfect for immediate fuel, maintenance, or personal needs.", 
      featured: false 
    },
    { 
      title: "24-Hour", 
      fee: "2%", 
      desc: "Funds available next business day. Our most popular option—fast pay without the higher fee.", 
      featured: true 
    },
    { 
      title: "Standard", 
      fee: "0%", 
      desc: "Net 30 payment terms. No fees—just patience. Choose per load based on your needs.", 
      featured: false 
    },
  ];

  return (
    <section id="quickpay" className="py-24 border-t border-white/[0.06]">
      <div className="container mx-auto px-6 max-w-[1180px]">
        <div className="text-center mb-12">
          <ScrollAnimation>
            <p className="text-emerald font-display font-semibold tracking-[0.06em] uppercase text-xs mb-3">
              QuickPay Options
            </p>
          </ScrollAnimation>
          <ScrollAnimation delay={100}>
            <h2 className="font-display text-3xl md:text-4xl lg:text-[44px] font-bold text-white leading-tight tracking-tight mb-4">
              Get Paid<br/><span className="text-emerald">Your Way</span>
            </h2>
          </ScrollAnimation>
          <ScrollAnimation delay={200}>
            <p className="text-white/75 text-base md:text-lg max-w-[68ch] mx-auto leading-relaxed">
              Choose how fast you want to get paid—per load, every time. Simple, transparent fees with no surprises.
            </p>
          </ScrollAnimation>
        </div>

        <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {options.map((option, i) => (
            <ScrollAnimation key={i} delay={i * 150} animation="scale">
              <div
                className={`rounded-xl p-6 text-center transition-all hover:-translate-y-1 h-full ${
                  option.featured
                    ? "bg-emerald/[0.08] border-2 border-emerald"
                    : "bg-white/[0.02] border border-white/10 hover:border-emerald/25"
                }`}
              >
                {option.featured && (
                  <span className="inline-block bg-emerald text-white text-[11px] font-bold px-2.5 py-1 rounded-full mb-3">
                    Most Popular
                  </span>
                )}
                <h3 className="font-display text-white font-semibold text-lg mb-2">{option.title}</h3>
                <div className="font-display text-4xl font-bold text-emerald mb-3">
                  {option.fee}
                </div>
                <p className="text-white/55 text-[13px] leading-relaxed mb-5">{option.desc}</p>
                <Link
                  to="/account"
                  className={`inline-flex items-center justify-center w-full py-3.5 rounded-lg text-sm font-bold transition-all ${
                    option.featured
                      ? "bg-emerald-dark border border-emerald-dark text-white hover:bg-emerald hover:border-emerald"
                      : "bg-white/[0.03] border border-white/10 text-white hover:border-emerald/25 hover:bg-emerald/[0.03]"
                  }`}
                >
                  Get Started
                </Link>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickPaySection;
