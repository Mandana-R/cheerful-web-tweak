import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ScrollAnimation } from "@/hooks/useScrollAnimation";

const RateCalculator = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-[140px] pb-20">
        <div className="container mx-auto px-6 max-w-[1180px]">
          <div className="text-center mb-12">
            <ScrollAnimation>
              <p className="text-muted-foreground/60 font-bold tracking-widest uppercase text-xs mb-3">Rate Calculator</p>
            </ScrollAnimation>
            <ScrollAnimation delay={100}>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">Get an Instant Quote</h1>
            </ScrollAnimation>
            <ScrollAnimation delay={200}>
              <p className="text-muted-foreground text-lg max-w-[75ch] mx-auto">
                Transparent pricing with no hidden fees. See exactly what you'll pay—carrier rate and platform fee shown separately.
              </p>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Calculator + Estimate */}
      <section className="pb-20">
        <div className="container mx-auto px-6 max-w-[1180px]">
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Form */}
            <ScrollAnimation animation="fade-left">
              <div className="border border-white/[0.12] rounded-2xl bg-card/5 backdrop-blur-lg p-8">
                <h3 className="font-display text-xl font-bold text-white mb-4">Shipment Details</h3>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <label className="block font-bold text-xs tracking-wide uppercase text-muted-foreground/60 mb-2">Origin</label>
                    <input type="text" placeholder="City, State or ZIP" className="w-full border border-white/10 bg-black/30 rounded-lg px-4 py-3.5 text-white placeholder:text-white/40 outline-none transition-all focus:border-emerald/35 focus:bg-black/40" />
                  </div>
                  <div>
                    <label className="block font-bold text-xs tracking-wide uppercase text-muted-foreground/60 mb-2">Destination</label>
                    <input type="text" placeholder="City, State or ZIP" className="w-full border border-white/10 bg-black/30 rounded-lg px-4 py-3.5 text-white placeholder:text-white/40 outline-none transition-all focus:border-emerald/35 focus:bg-black/40" />
                  </div>
                </div>

                <h4 className="text-white font-bold text-base mb-4">Equipment & Timing</h4>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block font-bold text-xs tracking-wide uppercase text-muted-foreground/60 mb-2">Vehicle Type</label>
                    <select className="w-full border border-white/10 bg-black/30 rounded-lg px-4 py-3.5 text-white outline-none appearance-none cursor-pointer transition-all focus:border-emerald/35 focus:bg-black/40 bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%239CA3AF%22%20stroke-width%3D%222%22%3E%3Cpath%20d%3D%22M6%209l6%206%206-6%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[right_14px_center] pr-11">
                      <option>Cargo Van</option>
                      <option>Full-Size Sprinter</option>
                      <option>16' Box Truck</option>
                      <option>26' Box Truck</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-bold text-xs tracking-wide uppercase text-muted-foreground/60 mb-2">Urgency</label>
                    <select className="w-full border border-white/10 bg-black/30 rounded-lg px-4 py-3.5 text-white outline-none appearance-none cursor-pointer transition-all focus:border-emerald/35 focus:bg-black/40 bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%239CA3AF%22%20stroke-width%3D%222%22%3E%3Cpath%20d%3D%22M6%209l6%206%206-6%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[right_14px_center] pr-11">
                      <option>Same-Day Pickup</option>
                      <option>Next-Day Pickup</option>
                      <option>Scheduled (2+ days)</option>
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <label className="block font-bold text-xs tracking-wide uppercase text-muted-foreground/60 mb-2">Pickup Date</label>
                    <input type="date" className="w-full border border-white/10 bg-black/30 rounded-lg px-4 py-3.5 text-white outline-none transition-all focus:border-emerald/35 focus:bg-black/40" />
                  </div>
                  <div>
                    <label className="block font-bold text-xs tracking-wide uppercase text-muted-foreground/60 mb-2">Pickup Window</label>
                    <select className="w-full border border-white/10 bg-black/30 rounded-lg px-4 py-3.5 text-white outline-none appearance-none cursor-pointer transition-all focus:border-emerald/35 focus:bg-black/40 bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%239CA3AF%22%20stroke-width%3D%222%22%3E%3Cpath%20d%3D%22M6%209l6%206%206-6%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[right_14px_center] pr-11">
                      <option>Morning (6am–12pm)</option>
                      <option>Afternoon (12pm–6pm)</option>
                      <option>Evening (6pm–10pm)</option>
                      <option>Flexible</option>
                    </select>
                  </div>
                </div>

                <h4 className="text-white font-bold text-base mb-4">Cargo Details</h4>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block font-bold text-xs tracking-wide uppercase text-muted-foreground/60 mb-2">Weight (lbs)</label>
                    <input type="number" placeholder="Total weight" className="w-full border border-white/10 bg-black/30 rounded-lg px-4 py-3.5 text-white placeholder:text-white/40 outline-none transition-all focus:border-emerald/35 focus:bg-black/40" />
                  </div>
                  <div>
                    <label className="block font-bold text-xs tracking-wide uppercase text-muted-foreground/60 mb-2">Pieces / Pallets</label>
                    <input type="number" placeholder="Number of pieces" className="w-full border border-white/10 bg-black/30 rounded-lg px-4 py-3.5 text-white placeholder:text-white/40 outline-none transition-all focus:border-emerald/35 focus:bg-black/40" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <label className="block font-bold text-xs tracking-wide uppercase text-muted-foreground/60 mb-2">Length (in)</label>
                    <input type="number" placeholder="Longest dimension" className="w-full border border-white/10 bg-black/30 rounded-lg px-4 py-3.5 text-white placeholder:text-white/40 outline-none transition-all focus:border-emerald/35 focus:bg-black/40" />
                  </div>
                  <div>
                    <label className="block font-bold text-xs tracking-wide uppercase text-muted-foreground/60 mb-2">Commodity</label>
                    <input type="text" placeholder="What are you shipping?" className="w-full border border-white/10 bg-black/30 rounded-lg px-4 py-3.5 text-white placeholder:text-white/40 outline-none transition-all focus:border-emerald/35 focus:bg-black/40" />
                  </div>
                </div>

                <h4 className="text-white font-bold text-base mb-4">Special Requirements</h4>
                <div className="grid grid-cols-2 gap-3 mb-7">
                  {["Liftgate Required", "Team Drivers", "Hazmat", "TWIC Required"].map((req) => (
                    <label key={req} className="flex items-center gap-2.5 text-muted-foreground text-sm cursor-pointer">
                      <input type="checkbox" className="w-[18px] h-[18px] accent-emerald" />
                      {req}
                    </label>
                  ))}
                </div>

                <button className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-lg border border-emerald-dark bg-emerald-dark text-white text-sm font-bold transition-all hover:bg-emerald hover:border-emerald">
                  Calculate Estimate
                </button>
              </div>
            </ScrollAnimation>

            {/* Estimate Panel */}
            <ScrollAnimation animation="fade-right" delay={200}>
              <div>
                <div className="border border-emerald/20 rounded-2xl bg-emerald/5 p-7">
                  <h3 className="font-display text-xl font-bold text-white mb-2">Your Estimate</h3>
                  <p className="text-muted-foreground text-sm mb-5">Transparent breakdown of your shipment cost</p>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between py-3 border-b border-white/10">
                      <span className="text-muted-foreground">Carrier Rate</span>
                      <span className="text-white font-bold">$650.00</span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-white/10">
                      <span className="text-muted-foreground">Platform Fee (6%)</span>
                      <span className="text-white font-bold">$39.00</span>
                    </div>
                    <div className="flex justify-between py-4 border-t-2 border-emerald mt-2">
                      <span className="text-white font-bold">Your Total</span>
                      <span className="text-emerald font-bold text-2xl">$689.00</span>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground/60 text-xs mt-4">
                    * Estimate based on typical rates. Final rate confirmed at booking.
                  </p>
                  <button className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-lg border border-emerald-dark bg-emerald-dark text-white text-sm font-bold transition-all hover:bg-emerald hover:border-emerald mt-4">
                    Book This Shipment
                  </button>
                  <button className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg border border-white/10 bg-white/[0.03] text-white text-sm font-bold transition-all hover:bg-white/[0.06] mt-2.5">
                    Talk to Dispatch
                  </button>
                </div>

                <div className="border border-white/[0.12] rounded-xl bg-white/[0.03] p-5 mt-4">
                  <div className="flex items-center gap-3 mb-2">
                    <strong className="text-white font-bold">How Our Pricing Works</strong>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    We charge a flat 6% platform fee on top of the carrier's rate. You see both numbers—no hidden spreads, no mystery markups. What you see is what you pay.
                  </p>
                </div>

                <div className="border border-white/[0.12] rounded-xl bg-white/[0.03] p-5 mt-3.5">
                  <div className="flex items-center gap-3 mb-2">
                    <strong className="text-white font-bold">Need Help?</strong>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Our dispatch team is available 24/7 to help you with quotes and bookings. Call{" "}
                    <a href="tel:+18005551234" className="text-emerald-light">(800) 555-1234</a>
                  </p>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Pricing Factors */}
      <section className="py-20 border-t border-white/[0.06]">
        <div className="container mx-auto px-6 max-w-[1180px]">
          <div className="text-center mb-12">
            <ScrollAnimation>
              <p className="text-muted-foreground/60 font-bold tracking-widest uppercase text-xs mb-3">Pricing Factors</p>
            </ScrollAnimation>
            <ScrollAnimation delay={100}>
              <h2 className="font-display text-3xl font-bold text-white">What Affects Your Rate</h2>
            </ScrollAnimation>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: "Distance", desc: "Mileage is the primary factor. Longer distances typically have lower per-mile rates than short urgent runs." },
              { title: "Equipment", desc: "Vehicle size affects cost. Cargo vans are most economical; 26' box trucks cost more but carry larger loads." },
              { title: "Urgency", desc: "Same-day and critical shipments command premium rates. Scheduled pickups with flexibility cost less." },
              { title: "Time of Day", desc: "After-hours and weekend pickups may have surcharges. Standard business hours offer best rates." },
              { title: "Special Handling", desc: "Liftgate, team drivers, hazmat certification, and TWIC requirements add to the base rate." },
              { title: "Market Conditions", desc: "Carrier availability in your area affects pricing. High-demand lanes may cost more during peak times." },
            ].map((factor, i) => (
              <ScrollAnimation key={i} delay={i * 100}>
                <div className="border border-white/[0.12] rounded-xl bg-white/[0.03] p-5 h-full">
                  <div className="flex items-center gap-3 mb-2">
                    <strong className="text-white font-bold">{factor.title}</strong>
                  </div>
                  <p className="text-muted-foreground text-sm">{factor.desc}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RateCalculator;