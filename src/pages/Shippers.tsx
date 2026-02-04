import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Eye, Shield, Clock, MapPin, Phone, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { ScrollAnimation } from "@/hooks/useScrollAnimation";

const Shippers = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="pt-[72px] min-h-[85vh] flex items-center justify-center relative overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/Inside the Dock.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal/[0.92] via-charcoal/80 to-charcoal/[0.94] z-[1]" />
        <div 
          className="absolute top-0 right-0 w-1/2 h-full z-[2] pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 70% 30%, rgba(16,185,129,0.08) 0%, transparent 55%)" }}
        />
        
        <div className="container mx-auto px-6 max-w-[1180px] relative z-[3]">
          <div className="max-w-[720px] mx-auto text-center py-16">
            <ScrollAnimation>
              <span className="inline-flex items-center gap-2.5 border border-emerald/25 bg-emerald/[0.08] px-4 py-2.5 rounded-full text-emerald-light text-[13px] font-semibold mb-6">
                <span className="w-2 h-2 rounded-full bg-emerald shadow-[0_0_0_4px_rgba(16,185,129,0.15)] animate-pulse" />
                Transparent Freight for Shippers
              </span>
            </ScrollAnimation>
            
            <ScrollAnimation delay={100}>
              <h1 className="font-display text-4xl md:text-5xl lg:text-[58px] font-bold text-white leading-[1.08] tracking-tight mb-4">
                Know Exactly What You Pay—<span className="text-emerald">No Hidden Broker Spreads</span>
              </h1>
            </ScrollAnimation>
            
            <ScrollAnimation delay={200}>
              <p className="text-white/75 text-base md:text-lg max-w-[68ch] mx-auto leading-relaxed mb-8">
                Smart Expedite shows you the <strong className="text-white">carrier's rate</strong> and our <strong className="text-white">flat 8% platform fee</strong> separately. 
                You see the full picture—no mystery markups, no games. Just transparent expedited freight from vetted carriers.
              </p>
            </ScrollAnimation>
            
            <ScrollAnimation delay={300}>
              <div className="flex flex-wrap gap-3.5 justify-center">
                <Link
                  to="/rate-calculator"
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-lg border border-emerald-dark bg-emerald-dark text-white text-[15px] font-bold transition-all hover:bg-emerald hover:border-emerald"
                >
                  Get a Quote
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-lg border border-white/10 bg-white/[0.03] text-white text-[15px] font-bold transition-all hover:bg-white/[0.06]"
                >
                  Talk to Dispatch
                </Link>
              </div>
            </ScrollAnimation>
          </div>
        </div>

        {/* Bottom Ticker */}
        <div className="absolute bottom-0 left-0 right-0 z-[3] bg-charcoal/85 border-t border-white/[0.06] py-4 backdrop-blur-sm">
          <div className="container mx-auto px-6 max-w-[1180px]">
            <div className="flex flex-wrap gap-6 items-center justify-center">
              {["Transparent Pricing", "FMCSA-Verified Carriers", "Real-Time Tracking", "24/7 Dispatch"].map((item, i) => (
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
              <p className="text-emerald font-display font-semibold tracking-widest uppercase text-xs mb-3">Why Smart Expedite</p>
            </ScrollAnimation>
            <ScrollAnimation delay={100}>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">Built for Time-Critical Freight</h2>
            </ScrollAnimation>
            <ScrollAnimation delay={200}>
              <p className="text-muted-foreground text-lg max-w-[68ch] mx-auto">
                When production stops or deadlines approach, you need reliability and clarity—not broker games.
              </p>
            </ScrollAnimation>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: Eye, title: "Full Price Transparency", desc: "See the carrier's rate and our 8% fee separately. No hidden spreads, no mystery markups. What you see is what you pay." },
              { icon: Shield, title: "Vetted Carrier Network", desc: "Every carrier is FMCSA-verified with active authority, insurance, and safety compliance. No double-brokering, no unknowns." },
              { icon: Clock, title: "Real-Time Visibility", desc: "Track your shipment from pickup to delivery with live updates. Know exactly where your freight is at all times." },
              { icon: Phone, title: "24/7 Dispatch Support", desc: "Our dispatch team stays engaged throughout the shipment lifecycle. Real support, not voicemail." },
              { icon: MapPin, title: "Expedited Expertise", desc: "We specialize in time-critical freight under 10,000 lbs. Cargo vans to 26' box trucks, same-day to scheduled." },
              { icon: CheckCircle, title: "Enterprise-Grade Execution", desc: "Designed for manufacturing and time-critical operations with accountability at every step." },
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
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white">Three Steps to Transparent Freight</h2>
            </ScrollAnimation>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {[
              { num: "01", title: "Request a Quote", desc: "Enter your pickup and delivery details. Get an instant estimate showing carrier rate and platform fee separately." },
              { num: "02", title: "Confirm & Track", desc: "Book your shipment and get a vetted carrier assigned. Track in real-time from pickup to delivery." },
              { num: "03", title: "Delivery & Payment", desc: "Receive proof of delivery. Pay only what was quoted—no surprise surcharges." },
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

      {/* CTA Section */}
      <section className="py-24 border-t border-white/[0.06]">
        <div className="container mx-auto px-6 max-w-[1180px]">
          <ScrollAnimation animation="scale">
            <div className="bg-gradient-to-br from-emerald/10 to-emerald/5 border border-emerald/20 rounded-2xl p-12 text-center">
              <p className="text-emerald font-display font-semibold tracking-widest uppercase text-xs mb-3">Ready to Ship?</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
                Experience Freight Without the Games
              </h2>
              <p className="text-muted-foreground text-lg max-w-[60ch] mx-auto mb-7">
                Get a transparent quote in minutes. See exactly what you'll pay and why.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Link to="/rate-calculator" className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-lg border border-emerald-dark bg-emerald-dark text-white text-[15px] font-bold transition-all hover:bg-emerald hover:border-emerald">
                  Get a Quote
                </Link>
                <Link to="/contact" className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-lg border border-white/10 bg-white/[0.03] text-white text-[15px] font-bold transition-all hover:bg-white/[0.06]">
                  Talk to Dispatch
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