import { Star } from "lucide-react";
import { ScrollAnimation } from "@/hooks/useScrollAnimation";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "QuickPay has been a game-changer for my business. Getting paid in 24 hours means I never have to worry about cash flow. The 2% fee is way better than factoring companies that take 5-8%.",
      name: "James Thompson",
      role: "Owner-Operator, 26' Box Truck",
      initials: "JT"
    },
    {
      quote: "Finally, a platform where I know exactly what I'm getting paid before I accept a load. No more surprises, no more arguing about rates. The dispatch team is always helpful when I need them.",
      name: "Maria Rodriguez",
      role: "Fleet Owner, 3 Cargo Vans",
      initials: "MR"
    },
    {
      quote: "I've been burned by double-brokered loads before. With Smart Expedite, every load is verified and comes direct from the shipper. It's the peace of mind I needed to grow my business.",
      name: "David Williams",
      role: "Owner-Operator, Sprinter Van",
      initials: "DW"
    },
  ];

  return (
    <section className="py-24 border-t border-white/[0.06]">
      <div className="container mx-auto px-6 max-w-[1180px]">
        <div className="text-center mb-12">
          <ScrollAnimation>
            <p className="text-emerald font-display font-semibold tracking-[0.06em] uppercase text-xs mb-3">
              Carrier Testimonials
            </p>
          </ScrollAnimation>
          <ScrollAnimation delay={100}>
            <h2 className="font-display text-3xl md:text-4xl lg:text-[44px] font-bold text-white leading-tight tracking-tight mb-4">
              Hear From Our<br/><span className="text-emerald">Carriers</span>
            </h2>
          </ScrollAnimation>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {testimonials.map((testimonial, i) => (
            <ScrollAnimation key={i} delay={i * 150} animation="scale">
              <div 
                className="bg-white/[0.02] border border-white/10 rounded-xl p-6 h-full transition-all hover:border-emerald/25 hover:-translate-y-1"
              >
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-emerald text-emerald" />
                  ))}
                </div>
                <p className="text-white/75 text-[13px] leading-relaxed mb-5 italic">"{testimonial.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-subtle border border-emerald/15 flex items-center justify-center text-emerald text-xs font-bold">
                    {testimonial.initials}
                  </div>
                  <div>
                    <p className="font-display font-semibold text-white text-[13px]">{testimonial.name}</p>
                    <p className="text-white/55 text-[11px]">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
