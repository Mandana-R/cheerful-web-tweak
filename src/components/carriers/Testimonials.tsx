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
    <section className="py-24 bg-card/5 border-y border-white/[0.06]">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-20">
          <ScrollAnimation>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald/10 border border-emerald/30 text-emerald-light text-sm font-medium mb-6">
              Carrier Testimonials
            </span>
          </ScrollAnimation>
          <ScrollAnimation delay={100}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Hear From Our<br/><span className="text-emerald">Carriers</span>
            </h2>
          </ScrollAnimation>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <ScrollAnimation key={i} delay={i * 150} animation="scale">
              <div 
                className="bg-white/[0.02] border border-white/10 rounded-2xl p-8 h-full transition-all hover:border-emerald/25 hover:-translate-y-1"
              >
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 fill-emerald text-emerald" />
                  ))}
                </div>
                <p className="text-white/75 leading-relaxed mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-emerald/[0.08] border border-emerald/20 flex items-center justify-center text-emerald font-bold">
                    {testimonial.initials}
                  </div>
                  <div>
                    <p className="font-bold text-white">{testimonial.name}</p>
                    <p className="text-white/55 text-sm">{testimonial.role}</p>
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
