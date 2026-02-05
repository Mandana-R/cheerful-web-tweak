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
    <section id="quickpay" className="py-24 bg-card/5 border-y border-white/[0.06]">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <ScrollAnimation>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald/10 border border-emerald/30 text-emerald-light text-sm font-medium mb-6">
              QuickPay Options
            </span>
          </ScrollAnimation>
          <ScrollAnimation delay={100}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Get Paid<br/><span className="text-emerald">Your Way</span>
            </h2>
          </ScrollAnimation>
          <ScrollAnimation delay={200}>
            <p className="text-white/55 text-lg md:text-xl max-w-3xl mx-auto">
              Choose how fast you want to get paid—per load, every time. Simple, transparent fees with no surprises. No long-term contracts or commitments.
            </p>
          </ScrollAnimation>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {options.map((option, i) => (
            <ScrollAnimation key={i} delay={i * 150} animation="scale">
              <div
                className={`rounded-3xl p-8 text-center transition-all hover:-translate-y-2 h-full ${
                  option.featured
                    ? "bg-emerald/[0.08] border-2 border-emerald scale-[1.02]"
                    : "bg-white/[0.02] border border-white/10"
                }`}
              >
                {option.featured && (
                  <span className="inline-block bg-emerald text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
                    Most Popular
                  </span>
                )}
                <h3 className="text-2xl font-bold text-white mb-2">{option.title}</h3>
                <div className="text-5xl md:text-6xl font-black text-emerald mb-4">
                  {option.fee}
                </div>
                <p className="text-white/55 mb-6 text-sm leading-relaxed">{option.desc}</p>
                <Link
                  to="/account"
                  className={`inline-flex items-center justify-center w-full py-4 rounded-xl font-bold transition-all ${
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
