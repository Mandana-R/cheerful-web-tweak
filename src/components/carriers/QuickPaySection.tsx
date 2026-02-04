import { Link } from "react-router-dom";

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
    <section id="quickpay" className="py-24 bg-[#1A1A1A] border-y border-gray-800">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald/10 border border-emerald/30 text-emerald-light text-sm font-medium mb-6">
            QuickPay Options
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Get Paid<br/><span className="bg-gradient-to-r from-green-500 to-emerald bg-clip-text text-transparent">Your Way</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
            Choose how fast you want to get paid—per load, every time. Simple, transparent fees with no surprises. No long-term contracts or commitments.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {options.map((option, i) => (
            <div
              key={i}
              className={`rounded-3xl p-8 text-center transition-all hover:-translate-y-2 ${
                option.featured
                  ? "bg-gradient-to-br from-emerald/15 to-[#1A1A1A] border-2 border-emerald scale-[1.02]"
                  : "bg-[#111] border border-gray-800"
              }`}
            >
              {option.featured && (
                <span className="inline-block bg-emerald text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
                  Most Popular
                </span>
              )}
              <h3 className="text-2xl font-bold text-white mb-2">{option.title}</h3>
              <div className="text-5xl md:text-6xl font-black bg-gradient-to-r from-green-500 to-emerald bg-clip-text text-transparent mb-4">
                {option.fee}
              </div>
              <p className="text-gray-400 mb-6 text-sm leading-relaxed">{option.desc}</p>
              <Link
                to="/account"
                className={`inline-flex items-center justify-center w-full py-4 rounded-xl font-bold transition-all ${
                  option.featured
                    ? "bg-gradient-to-r from-green-500 to-emerald text-white shadow-lg shadow-emerald/30 hover:shadow-emerald/40"
                    : "bg-[#1A1A1A] border border-gray-700 text-white hover:border-emerald"
                }`}
              >
                Get Started
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickPaySection;
