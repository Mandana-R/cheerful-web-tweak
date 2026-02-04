import { ScrollAnimation } from "@/hooks/useScrollAnimation";

const stats = [
  { number: "<10K", label: "Pounds Max Payload" },
  { number: "24/7", label: "Dispatch Operations" },
  { number: "2-Step", label: "Verification Protocol" },
  { number: "48-State", label: "Coverage Network" },
  { number: "FMCSA", label: "Verified-Only Network" },
];

const StatsBar = () => {
  return (
    <section className="py-16 border-t-0">
      <div className="container mx-auto px-6 max-w-[1180px]">
        <ScrollAnimation>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 border border-white/10 rounded-xl bg-white/[0.02] overflow-hidden">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`py-7 px-6 text-center border-white/[0.06] ${
                  index < stats.length - 1 ? "border-r" : ""
                } ${index < 4 ? "max-sm:border-b" : ""} ${index % 2 === 0 ? "max-sm:border-r-0" : ""}`}
              >
                <div className="font-display text-3xl font-bold text-emerald mb-1.5 tracking-tight">
                  {stat.number}
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

export default StatsBar;