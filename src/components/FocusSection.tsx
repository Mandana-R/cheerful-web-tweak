import { Clock, AlertTriangle, FileText, Phone } from "lucide-react";
import { ScrollAnimation } from "@/hooks/useScrollAnimation";

const focusItems = [
  {
    icon: Clock,
    title: "Same-Day & Next-Day",
    description: "Expedited freight with verified pickup windows",
  },
  {
    icon: AlertTriangle,
    title: "Emergency & Recovery",
    description: "Critical shipments when downtime isn't an option",
  },
  {
    icon: FileText,
    title: "JIT & Line-Down",
    description: "Just-in-Time deliveries to keep production moving",
  },
  {
    icon: Phone,
    title: "AOG & Critical Parts",
    description: "Aircraft on Ground and mission-critical components",
  },
];

const FocusSection = () => {
  return (
    <section className="py-24 border-t border-white/[0.06]">
      <div className="container mx-auto px-6 max-w-[1180px]">
        {/* Section Header */}
        <div className="text-center mb-12">
          <ScrollAnimation>
            <p className="text-emerald font-display font-semibold tracking-[0.06em] uppercase text-xs mb-3">
              Core Execution Focus
            </p>
          </ScrollAnimation>
          <ScrollAnimation delay={100}>
            <h2 className="font-display text-3xl md:text-4xl lg:text-[44px] font-bold text-white leading-tight tracking-tight mb-4">
              When Timing, Accuracy, and Verification Matter
            </h2>
          </ScrollAnimation>
          <ScrollAnimation delay={200}>
            <p className="text-white/75 text-base md:text-lg max-w-[68ch] mx-auto leading-relaxed">
              Smart Expedite specializes in shipments where precision is non-negotiable.
            </p>
          </ScrollAnimation>
        </div>

        {/* Focus Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {focusItems.map((item, index) => (
            <ScrollAnimation key={index} delay={index * 100}>
              <div
                className="border border-white/10 rounded-lg bg-white/[0.02] p-5 text-center transition-all hover:border-emerald/25 hover:bg-emerald/[0.03] h-full"
              >
                <div className="w-12 h-12 rounded-lg bg-emerald-subtle border border-emerald/15 flex items-center justify-center mx-auto mb-3.5">
                  <item.icon className="w-5 h-5 text-emerald" />
                </div>
                <h4 className="font-display text-white font-semibold text-[15px] mb-1.5">
                  {item.title}
                </h4>
                <p className="text-white/55 text-[13px]">{item.description}</p>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FocusSection;