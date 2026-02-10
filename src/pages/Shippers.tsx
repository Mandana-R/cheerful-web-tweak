import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PricingModelDemo from "@/components/shippers/PricingModelDemo";
import { DollarSign, Clock, Users, Lock, FileText, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { ScrollAnimation } from "@/hooks/useScrollAnimation";

const equipmentMap: Record<string, string> = {
  "Cargo Van (Low Roof)": "Cargo Van",
  "Cargo Van (High Roof)": "Cargo Van",
  "Sprinter Van": "Full-Size Sprinter",
  "Straight Truck (12-16 ft)": "16' Box Truck",
  "Straight Truck (17-20 ft)": "16' Box Truck",
  "Straight Truck (20-26 ft)": "26' Box Truck",
};

const urgencyMap: Record<string, string> = {
  "Same-Day": "Same-Day Pickup",
  "Next-Day": "Next-Day Pickup",
  "Scheduled": "Scheduled (2+ days)",
};

const Shippers = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const [origin, setOrigin] = useState(params.get("origin") || "");
  const [destination, setDestination] = useState(params.get("destination") || "");
  const [vehicleType, setVehicleType] = useState(equipmentMap[params.get("equipment") || ""] || "Cargo Van");
  const [urgency, setUrgency] = useState(urgencyMap[params.get("urgency") || ""] || "Same-Day Pickup");

  useEffect(() => {
    if (location.hash === "#rate-calculator") {
      setTimeout(() => {
        document.getElementById("rate-calculator")?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    }
  }, [location]);
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="pt-[72px] min-h-[85vh] flex items-center justify-center relative overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/shipper_hero.jpg')" }}
      >
        <div className="absolute inset-0 gradient-hero-overlay z-[1]" />
        <div 
          className="absolute top-0 right-0 w-[60%] h-full z-[2] pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 80% 20%, rgba(16,185,129,0.06) 0%, transparent 60%)" }}
        />
        
        <div className="container mx-auto px-6 max-w-[1180px] relative z-[3]">
          <div className="max-w-[720px] mx-auto text-center py-16">
            <ScrollAnimation>
              <span className="inline-flex items-center gap-2.5 border border-emerald/25 bg-emerald/[0.08] px-4 py-2.5 rounded-full text-emerald-light text-[13px] font-semibold mb-6">
                <span className="w-2 h-2 rounded-full bg-emerald shadow-[0_0_0_4px_rgba(16,185,129,0.15)] animate-pulse" />
                For Shippers
              </span>
            </ScrollAnimation>
            
            <ScrollAnimation delay={100}>
              <h1 className="font-display text-4xl md:text-5xl lg:text-[58px] font-bold text-white leading-[1.08] tracking-tight mb-4">
                Transparent Expedited Freight.<br />
                <span className="text-emerald">No Hidden Markups.</span>
              </h1>
            </ScrollAnimation>
            
            <ScrollAnimation delay={200}>
              <p className="text-white/75 text-base md:text-lg max-w-[68ch] mx-auto leading-relaxed mb-8">
                See exactly what you're paying. We show you the carrier rate and our <strong className="text-white">flat 8% service fee</strong> separately—no mystery spreads, no surprise invoices, no games. You're paying for <strong className="text-white">movement, not markup</strong>.
              </p>
            </ScrollAnimation>
            
            <ScrollAnimation delay={300}>
              <div className="flex flex-wrap gap-3.5 justify-center">
                <a
                  href="#rate-calculator"
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-lg border border-emerald-dark bg-emerald-dark text-white text-[15px] font-bold transition-all hover:bg-emerald hover:border-emerald"
                >
                  Get a Transparent Quote
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-lg border border-white/10 bg-white/[0.03] text-white text-[15px] font-bold transition-all hover:bg-white/[0.06]"
                >
                  Request Consultation
                </Link>
              </div>
            </ScrollAnimation>
          </div>
        </div>

        {/* Bottom Ticker */}
        <div className="absolute bottom-0 left-0 right-0 z-[3] bg-charcoal/85 border-t border-white/[0.06] py-4 backdrop-blur-sm">
          <div className="container mx-auto px-6 max-w-[1180px]">
            <div className="flex flex-wrap gap-6 items-center justify-center">
              {["Flat 8% Fee", "Verified Carriers", "24/7 Support", "Zero Double-Brokering", "Real-Time Tracking"].map((item, i) => (
                <div key={i} className="flex items-center gap-2.5 text-muted-foreground text-sm font-semibold uppercase tracking-wide">
                  <CheckCircle className="w-4 h-4 text-emerald" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="py-24 border-t border-white/[0.06]">
        <div className="container mx-auto px-6 max-w-[1180px]">
          <div className="text-center mb-12">
            <ScrollAnimation>
              <p className="text-emerald font-display font-semibold tracking-widest uppercase text-xs mb-3">Platform Features</p>
            </ScrollAnimation>
            <ScrollAnimation delay={100}>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">Built for Shippers Who Demand More</h2>
            </ScrollAnimation>
            <ScrollAnimation delay={200}>
              <p className="text-muted-foreground text-lg max-w-[68ch] mx-auto">
                Transparency, verification, and execution—without the traditional broker markup.
              </p>
            </ScrollAnimation>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: DollarSign, title: "Transparent Pricing", desc: "Carrier rate and 8% platform fee shown separately on every quote. No hidden markups, no surprise charges. You see what the truck gets paid. We show what we earn. That's the mode." },
              { icon: Clock, title: "Real-Time Visibility", desc: "Live GPS tracking from pickup to delivery. Geofenced updates, proactive ETAs. No chasing drivers for updates. Delays and exceptions flagged automatically." },
              { icon: Users, title: "24/7 Dispatch Support", desc: "Dedicated operations teams engaged throughout the shipment lifecycle. Escalations, exceptions, proactive communication — all managed. Included in your 8%. No extra fees." },
              { icon: Lock, title: "Chain of Custody", desc: "Every shipment is protected by carrier authentication at origin and destination. Unauthorized pickups, driver substitutions, and identity fraud — stopped before they start." },
              { icon: FileText, title: "Complete Documentation", desc: "Rate confirmations, BOLs, and PODs with photo verification and electronic signatures. Centralized, searchable, and audit-ready. No chasing paperwork." },
              { icon: CheckCircle, title: "Verified Carrier Network", desc: "We come from the carrier side and know who to trust. Every carrier is vetted for authority, insurance, safety and operational track record. We know exactly who we deploy. That's the difference." },
            ].map((feature, i) => (
              <ScrollAnimation key={i} delay={i * 100}>
                <div className="border border-white/10 rounded-xl bg-white/[0.02] p-7 transition-all hover:border-emerald/25 hover:bg-emerald/[0.03] h-full">
                  <div className="w-[54px] h-[54px] rounded-lg bg-emerald/[0.08] border border-emerald/20 flex items-center justify-center mb-5">
                    <feature.icon className="w-6 h-6 text-emerald" />
                  </div>
                  <h4 className="font-display text-white font-semibold text-lg mb-2">{feature.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feature.desc}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Model with Interactive Demo */}
      <PricingModelDemo />

      {/* Pricing Section */}
      <section className="py-24 border-t border-white/[0.06]">
        <div className="container mx-auto px-6 max-w-[1180px]">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollAnimation animation="fade-left">
              <div>
                <p className="text-emerald font-display font-semibold tracking-widest uppercase text-xs mb-3">Transparent Pricing</p>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
                  See the Full Picture—<span className="text-emerald">Not Just Your Bill</span>
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  Traditional brokers hide their markup—buying low from carriers and selling high to you. We flip that model. 
                  You see exactly what the carrier earns and exactly what we charge.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Our flat 8% platform fee covers dispatch support, carrier vetting, real-time tracking, and payment processing. 
                  No surprises, no hidden costs.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-right" delay={200}>
              <div className="border border-white/10 rounded-2xl bg-background p-8">
                <h3 className="font-display text-xl font-semibold text-white mb-6">Example: Chicago → Detroit (Cargo Van)</h3>
                <div className="bg-black/35 border border-white/10 rounded-xl p-6">
                  <div className="flex justify-between py-3 border-b border-white/[0.06]">
                    <span className="text-muted-foreground text-sm">Carrier Rate</span>
                    <span className="text-white font-bold text-sm">$485.00</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-white/[0.06]">
                    <span className="text-muted-foreground text-sm">Platform Fee (8%)</span>
                    <span className="text-white font-bold text-sm">$38.80</span>
                  </div>
                  <div className="flex justify-between py-4 border-t border-emerald mt-2">
                    <span className="text-white font-bold">Your Total</span>
                    <span className="text-emerald font-bold text-xl font-display">$523.80</span>
                  </div>
                </div>
                <p className="text-muted-foreground/60 text-xs mt-4 text-center">
                  Both numbers shown—no hidden spread.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 border-t border-white/[0.06]">
        <div className="container mx-auto px-6 max-w-[1180px]">
          <div className="text-center mb-12">
            <ScrollAnimation>
              <p className="text-emerald font-display font-semibold tracking-widest uppercase text-xs mb-3">How It Works</p>
            </ScrollAnimation>
            <ScrollAnimation delay={100}>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">From Quote to Delivery</h2>
            </ScrollAnimation>
            <ScrollAnimation delay={200}>
              <p className="text-muted-foreground text-lg max-w-[68ch] mx-auto">Simple, transparent, and built for speed.</p>
            </ScrollAnimation>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {[
              { num: "1", title: "Request a Quote", desc: "Enter pickup and delivery locations, equipment needs, and timing. Get an instant estimate with carrier rate and platform fee shown separately." },
              { num: "2", title: "Confirm & Book", desc: "Review the carrier match, accept the rate, and receive instant rate confirmation. Verification codes are generated automatically." },
              { num: "3", title: "Track & Receive", desc: "Follow your shipment in real-time with GPS tracking. Get delivery confirmation with photos, signatures, and complete documentation." },
            ].map((step, i) => (
              <ScrollAnimation key={i} delay={i * 150}>
                <div className="border border-white/10 rounded-xl bg-white/[0.02] p-8 text-center h-full">
                  <div className="w-14 h-14 rounded-full bg-emerald/[0.08] border border-emerald/20 flex items-center justify-center mx-auto mb-5">
                    <span className="text-emerald font-display font-bold text-lg">{step.num}</span>
                  </div>
                  <h4 className="font-display text-white font-semibold text-lg mb-2">{step.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Rate Calculator Section */}
      <section id="rate-calculator" className="py-24 border-t border-white/[0.06]">
        <div className="container mx-auto px-6 max-w-[1180px]">
          <div className="text-center mb-12">
            <ScrollAnimation>
              <p className="text-emerald font-display font-semibold tracking-widest uppercase text-xs mb-3">Rate Calculator</p>
            </ScrollAnimation>
            <ScrollAnimation delay={100}>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">Get an Instant Quote</h2>
            </ScrollAnimation>
            <ScrollAnimation delay={200}>
              <p className="text-muted-foreground text-lg max-w-[75ch] mx-auto">
                Transparent pricing with no hidden fees. See exactly what you'll pay—carrier rate and platform fee shown separately.
              </p>
            </ScrollAnimation>
          </div>

          <div className="max-w-3xl mx-auto">
            {/* Form */}
            <ScrollAnimation animation="fade-up">
              <div className="rounded-2xl border border-white/[0.08] bg-gradient-to-b from-white/[0.06] to-white/[0.02] backdrop-blur-xl overflow-hidden">
                {/* Header */}
                <div className="px-8 pt-8 pb-5 border-b border-white/[0.08]">
                  <div className="flex items-center gap-3 mb-1">
                    <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_2px_hsl(var(--primary)/0.4)]" />
                    <h3 className="font-display text-xl font-bold text-white">Shipment Details</h3>
                  </div>
                  <p className="text-muted-foreground text-sm ml-5">Fill in your shipment info for an instant estimate</p>
                </div>

                <div className="p-8 space-y-8">
                  {/* Origin / Destination */}
                  <div>
                    <h4 className="text-white font-semibold text-sm mb-4">Route</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block font-bold text-xs tracking-wide uppercase text-muted-foreground/60 mb-2">Origin</label>
                        <input type="text" placeholder="City, State or ZIP" className="w-full border border-white/10 bg-white/[0.04] rounded-lg px-4 py-3.5 text-white placeholder:text-white/30 outline-none transition-all focus:border-primary/40 focus:bg-white/[0.06] focus:ring-1 focus:ring-primary/20" />
                      </div>
                      <div>
                        <label className="block font-bold text-xs tracking-wide uppercase text-muted-foreground/60 mb-2">Destination</label>
                        <input type="text" placeholder="City, State or ZIP" className="w-full border border-white/10 bg-white/[0.04] rounded-lg px-4 py-3.5 text-white placeholder:text-white/30 outline-none transition-all focus:border-primary/40 focus:bg-white/[0.06] focus:ring-1 focus:ring-primary/20" />
                      </div>
                    </div>
                  </div>

                  {/* Equipment & Timing */}
                  <div>
                    <h4 className="text-white font-semibold text-sm mb-4">Equipment & Timing</h4>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="block font-bold text-xs tracking-wide uppercase text-muted-foreground/60 mb-2">Vehicle Type</label>
                        <select className="w-full border border-white/10 bg-white/[0.04] rounded-lg px-4 py-3.5 text-white outline-none appearance-none cursor-pointer transition-all focus:border-primary/40 focus:bg-white/[0.06] focus:ring-1 focus:ring-primary/20 pr-11" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%239CA3AF%22%20stroke-width%3D%222%22%3E%3Cpath%20d%3D%22M6%209l6%206%206-6%22%2F%3E%3C%2Fsvg%3E')", backgroundRepeat: "no-repeat", backgroundPosition: "right 14px center" }}>
                          <option className="bg-[#1a1a1a] text-white">Cargo Van</option>
                          <option className="bg-[#1a1a1a] text-white">Full-Size Sprinter</option>
                          <option className="bg-[#1a1a1a] text-white">16' Box Truck</option>
                          <option className="bg-[#1a1a1a] text-white">26' Box Truck</option>
                        </select>
                      </div>
                      <div>
                        <label className="block font-bold text-xs tracking-wide uppercase text-muted-foreground/60 mb-2">Urgency</label>
                        <select className="w-full border border-white/10 bg-white/[0.04] rounded-lg px-4 py-3.5 text-white outline-none appearance-none cursor-pointer transition-all focus:border-primary/40 focus:bg-white/[0.06] focus:ring-1 focus:ring-primary/20 pr-11" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%239CA3AF%22%20stroke-width%3D%222%22%3E%3Cpath%20d%3D%22M6%209l6%206%206-6%22%2F%3E%3C%2Fsvg%3E')", backgroundRepeat: "no-repeat", backgroundPosition: "right 14px center" }}>
                          <option className="bg-[#1a1a1a] text-white">Same-Day Pickup</option>
                          <option className="bg-[#1a1a1a] text-white">Next-Day Pickup</option>
                          <option className="bg-[#1a1a1a] text-white">Scheduled (2+ days)</option>
                        </select>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block font-bold text-xs tracking-wide uppercase text-muted-foreground/60 mb-2">Pickup Date</label>
                        <input type="date" className="w-full border border-white/10 bg-white/[0.04] rounded-lg px-4 py-3.5 text-white outline-none transition-all focus:border-primary/40 focus:bg-white/[0.06] focus:ring-1 focus:ring-primary/20" />
                      </div>
                      <div>
                        <label className="block font-bold text-xs tracking-wide uppercase text-muted-foreground/60 mb-2">Pickup Window</label>
                        <select className="w-full border border-white/10 bg-white/[0.04] rounded-lg px-4 py-3.5 text-white outline-none appearance-none cursor-pointer transition-all focus:border-primary/40 focus:bg-white/[0.06] focus:ring-1 focus:ring-primary/20 pr-11" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%239CA3AF%22%20stroke-width%3D%222%22%3E%3Cpath%20d%3D%22M6%209l6%206%206-6%22%2F%3E%3C%2Fsvg%3E')", backgroundRepeat: "no-repeat", backgroundPosition: "right 14px center" }}>
                          <option className="bg-[#1a1a1a] text-white">Morning (6am–12pm)</option>
                          <option className="bg-[#1a1a1a] text-white">Afternoon (12pm–6pm)</option>
                          <option className="bg-[#1a1a1a] text-white">Evening (6pm–10pm)</option>
                          <option className="bg-[#1a1a1a] text-white">Flexible</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Cargo Details */}
                  <div>
                    <h4 className="text-white font-semibold text-sm mb-4">Cargo Details</h4>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="block font-bold text-xs tracking-wide uppercase text-muted-foreground/60 mb-2">Weight (lbs)</label>
                        <input type="number" placeholder="Total weight" className="w-full border border-white/10 bg-white/[0.04] rounded-lg px-4 py-3.5 text-white placeholder:text-white/30 outline-none transition-all focus:border-primary/40 focus:bg-white/[0.06] focus:ring-1 focus:ring-primary/20" />
                      </div>
                      <div>
                        <label className="block font-bold text-xs tracking-wide uppercase text-muted-foreground/60 mb-2">Pieces / Pallets</label>
                        <input type="number" placeholder="Number of pieces" className="w-full border border-white/10 bg-white/[0.04] rounded-lg px-4 py-3.5 text-white placeholder:text-white/30 outline-none transition-all focus:border-primary/40 focus:bg-white/[0.06] focus:ring-1 focus:ring-primary/20" />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block font-bold text-xs tracking-wide uppercase text-muted-foreground/60 mb-2">Length (in)</label>
                        <input type="number" placeholder="Longest dimension" className="w-full border border-white/10 bg-white/[0.04] rounded-lg px-4 py-3.5 text-white placeholder:text-white/30 outline-none transition-all focus:border-primary/40 focus:bg-white/[0.06] focus:ring-1 focus:ring-primary/20" />
                      </div>
                      <div>
                        <label className="block font-bold text-xs tracking-wide uppercase text-muted-foreground/60 mb-2">Commodity</label>
                        <input type="text" placeholder="What are you shipping?" className="w-full border border-white/10 bg-white/[0.04] rounded-lg px-4 py-3.5 text-white placeholder:text-white/30 outline-none transition-all focus:border-primary/40 focus:bg-white/[0.06] focus:ring-1 focus:ring-primary/20" />
                      </div>
                    </div>
                  </div>

                  {/* Special Requirements */}
                  <div>
                    <h4 className="text-white font-semibold text-sm mb-4">Special Requirements</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {["Liftgate Required", "Team Drivers", "Hazmat", "TWIC Required"].map((req) => (
                        <label key={req} className="flex items-center gap-3 p-3 rounded-lg border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] transition-colors cursor-pointer">
                          <input type="checkbox" className="w-[18px] h-[18px] accent-emerald rounded" />
                          <span className="text-muted-foreground text-sm">{req}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="px-8 pb-8 pt-2">
                  <button className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl border border-emerald-dark bg-emerald-dark text-white text-[15px] font-bold transition-all hover:bg-emerald hover:border-emerald hover:shadow-[0_0_24px_-4px_hsl(var(--primary)/0.4)]">
                    Calculate Estimate
                  </button>
                </div>
              </div>
            </ScrollAnimation>
          </div>

          {/* Pricing Factors */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <ScrollAnimation>
                <p className="text-muted-foreground/60 font-bold tracking-widest uppercase text-xs mb-3">Pricing Factors</p>
              </ScrollAnimation>
              <ScrollAnimation delay={100}>
                <h3 className="font-display text-2xl md:text-3xl font-bold text-white">What Affects Your Rate</h3>
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 border-t border-white/[0.06]">
        <div className="container mx-auto px-6 max-w-[1180px]">
          <ScrollAnimation animation="scale">
            <div className="bg-gradient-to-br from-emerald/10 to-emerald/5 border border-emerald/20 rounded-2xl p-12 text-center">
              <p className="text-emerald font-display font-semibold tracking-widest uppercase text-xs mb-3">Ready to Get Started?</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
                Ship with Transparency
              </h2>
              <p className="text-muted-foreground text-lg max-w-[60ch] mx-auto mb-7">
                Get a quote in minutes. See exactly what you'll pay. Experience expedited freight done right—without the hidden broker markups.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <a href="#rate-calculator" className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-lg border border-emerald-dark bg-emerald-dark text-white text-[15px] font-bold transition-all hover:bg-emerald hover:border-emerald">
                  Get a Transparent Quote
                </a>
                <Link to="/contact" className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-lg border border-white/10 bg-white/[0.03] text-white text-[15px] font-bold transition-all hover:bg-white/[0.06]">
                  Contact Operations
                </Link>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Shippers;