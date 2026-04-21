import { Link } from "react-router-dom";
import { CheckCircle, ArrowLeftRight, Lock } from "lucide-react";
import { ScrollAnimation } from "@/hooks/useScrollAnimation";

const QuickPaySection = () => {
  const options = [
    { 
      title: "Standard Pay", 
      subtitle: "Net-10 Terms",
      fee: "0%", 
      feeLabel: "No Fees",
      items: ["Payment within 10 days", "Direct deposit or check", "Keep 100% of your rate"],
      example: { load: "$1,000", receive: "$1,000" },
      featured: false 
    },
    { 
      title: "SuperFastPay 24", 
      subtitle: "Next-Day Payment",
      fee: "3%", 
      feeLabel: "Fastest Cash Flow",
      items: ["Paid within 24 hours of POD upload", "Direct deposit to your account", "Lowest quick-pay fee in the industry", "Ideal for fuel & road expenses"],
      example: { load: "$1,000", receive: "$970" },
      featured: true 
    },
    { 
      title: "QuickPay 5", 
      subtitle: "5-Day Express",
      fee: "1.5%", 
      feeLabel: "Low Fee, Quick Turnaround",
      items: ["Paid within 5 business days", "Direct deposit or check", "Half the wait of Net-30", "Great balance of speed & savings"],
      example: { load: "$1,000", receive: "$985" },
      featured: false 
    },
  ];

  const benefits = [
    {
      icon: CheckCircle,
      title: "No Hidden Fees",
      desc: "The percentage shown is all you pay. No setup fees, no monthly charges, no minimums."
    },
    {
      icon: ArrowLeftRight,
      title: "Choose Per Load",
      desc: "Select your payment option for each load. Use QuickPay when you need it, standard when you don't."
    },
    {
      icon: Lock,
      title: "Secure & Reliable",
      desc: "Bank-level security. Funds deposited directly to your account—never held, never delayed."
    },
  ];

  return (
    <section id="quickpay" className="py-24 border-t border-white/[0.06]">
      <div className="container mx-auto px-6 max-w-[1180px]">
        <div className="text-center mb-12">
          <ScrollAnimation>
            <p className="text-emerald font-display font-semibold tracking-[0.06em] uppercase text-xs mb-3">
              Payment Options
            </p>
          </ScrollAnimation>
          <ScrollAnimation delay={100}>
            <h2 className="font-display text-3xl md:text-4xl lg:text-[44px] font-bold text-white leading-tight tracking-tight mb-4">
              Get Paid<br/><span className="text-emerald">Your Way</span>
            </h2>
          </ScrollAnimation>
          <ScrollAnimation delay={200}>
            <p className="text-white/75 text-base md:text-lg max-w-[68ch] mx-auto leading-relaxed">
              Choose the payment speed that works for your cash flow. QuickPay fees are simple, 
              transparent, and the lowest in the industry.
            </p>
          </ScrollAnimation>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-12">
          {options.map((option, i) => (
            <ScrollAnimation key={i} delay={i * 150} animation="scale">
              <div
                className={`rounded-xl p-6 text-center transition-all hover:-translate-y-1 h-full flex flex-col ${
                  option.featured
                    ? "bg-emerald/[0.08] border-2 border-emerald relative"
                    : "bg-white/[0.02] border border-white/10 hover:border-emerald/25"
                }`}
              >
                {option.featured && (
                  <span className="absolute top-0 left-0 right-0 bg-emerald text-white text-[11px] font-bold py-1.5 text-center rounded-t-[10px]">
                    MOST POPULAR
                  </span>
                )}
                <div className={option.featured ? "mt-4" : ""}>
                  <h3 className="font-display text-white font-semibold text-lg mb-1">{option.title}</h3>
                  <p className="text-white/40 text-xs mb-4">{option.subtitle}</p>
                </div>
                <div className="font-display text-4xl font-bold text-emerald mb-1">
                  {option.fee}
                </div>
                <p className="text-white/40 text-xs mb-5">{option.feeLabel}</p>

                <ul className="space-y-3 mb-5 text-left flex-grow">
                  {option.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-2.5 text-white/75 text-[13px]">
                      <CheckCircle className="w-4 h-4 text-emerald flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="p-3 bg-black/30 rounded-lg border border-white/10 text-center mb-4">
                  <p className="text-white/40 text-xs">Example: {option.example.load} load</p>
                  <p className="text-white font-bold text-sm mt-1">
                    You receive: <span className="text-emerald">{option.example.receive}</span>
                  </p>
                </div>

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

        {/* QuickPay Benefits */}
        <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {benefits.map((benefit, i) => (
            <ScrollAnimation key={i} delay={i * 100}>
              <div className="bg-white/[0.02] border border-white/10 rounded-xl p-5 text-center transition-all hover:border-emerald/25 h-full">
                <benefit.icon className="w-8 h-8 text-emerald mx-auto mb-3" />
                <h4 className="font-display text-white font-semibold text-[14px] mb-2">{benefit.title}</h4>
                <p className="text-white/55 text-[12px] leading-relaxed">{benefit.desc}</p>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickPaySection;
