import { ScrollAnimation } from "@/hooks/useScrollAnimation";

const CarrierStats = () => {
  const stats = [
    { value: "$2.15", label: "Average Rate Per Mile" },
    { value: "24hr", label: "QuickPay Processing" },
    { value: "2,500+", label: "Active Carriers" },
    { value: "98%", label: "Carrier Satisfaction" },
  ];

  return (
    <section className="py-16 border-t-0">
      <div className="container mx-auto px-6 max-w-[1180px]">
        <ScrollAnimation>
          <div className="grid grid-cols-2 sm:grid-cols-4 border border-white/10 rounded-xl bg-white/[0.02] overflow-hidden">
            {stats.map((stat, i) => (
              <div
                key={i}
                className={`py-7 px-6 text-center border-white/[0.06] ${
                  i < stats.length - 1 ? "border-r" : ""
                } ${i < 2 ? "max-sm:border-b" : ""}`}
              >
                <div className="font-display text-3xl font-bold text-emerald mb-1.5 tracking-tight">
                  {stat.value}
                </div>
                <div className="text-[13px] text-white/75 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default CarrierStats;
