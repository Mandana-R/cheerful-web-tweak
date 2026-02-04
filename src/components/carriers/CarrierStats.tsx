import { ScrollAnimation } from "@/hooks/useScrollAnimation";

const CarrierStats = () => {
  const stats = [
    { value: "$2.15", label: "Average Rate Per Mile" },
    { value: "24hr", label: "QuickPay Processing" },
    { value: "2,500+", label: "Active Carriers" },
    { value: "98%", label: "Carrier Satisfaction" },
  ];

  return (
    <section className="bg-[#1A1A1A] py-20 sm:py-24 border-y border-gray-800">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
          {stats.map((stat, i) => (
            <ScrollAnimation key={i} delay={i * 100}>
              <div className="text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-green-500 via-green-400 to-emerald bg-clip-text text-transparent mb-3">
                {stat.value}
              </div>
              <p className="text-gray-400 text-sm md:text-base">{stat.label}</p>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CarrierStats;
