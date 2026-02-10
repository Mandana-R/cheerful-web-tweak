import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Eye, CheckCircle, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { ScrollAnimation } from "@/hooks/useScrollAnimation";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-[140px] pb-20">
        <div className="container mx-auto px-6 max-w-[1180px]">
          <div className="text-center mb-12">
            <ScrollAnimation>
              <p className="text-muted-foreground/60 font-bold tracking-widest uppercase text-xs mb-3">
                About Smart Expedite
              </p>
            </ScrollAnimation>
            <ScrollAnimation delay={100}>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
                Built by a Carrier,<br />
                <span className="text-emerald">for Shippers and Carriers</span>
              </h1>
            </ScrollAnimation>
            <ScrollAnimation delay={200}>
              <p className="text-muted-foreground text-lg max-w-[75ch] mx-auto">
                Smart Expedite wasn't born in a boardroom. It was born from real expedited freight execution—where details change, docks delay, and someone must still deliver correctly.
              </p>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="pb-20">
        <div className="container mx-auto px-6 max-w-[1180px]">
          <ScrollAnimation animation="scale">
            <div className="border border-white/[0.12] rounded-2xl bg-card/5 backdrop-blur-lg p-8 md:p-11">
              <div className="flex flex-col md:flex-row gap-7 items-start">
                <img
                  src="/assets/Founder.jpg"
                  alt="Kourosh Eshman"
                  className="w-[200px] h-[200px] rounded-2xl object-cover border-[3px] border-emerald/30 flex-shrink-0"
                />
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="font-display text-2xl font-bold text-white">Kourosh Eshman</h3>
                    <a href="https://www.linkedin.com/in/kourosh-eshman-522235b0/" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-emerald transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                    </a>
                  </div>
                  <p className="text-emerald font-bold mb-4">Founder & CEO</p>
                  <p className="text-muted-foreground italic mb-5 text-base">
                    "This company wasn't born in a boardroom—it was born on the road."
                  </p>
                  <div className="space-y-4 text-muted-foreground text-[15px] leading-relaxed">
                    <p>Before starting Smart Expedite, I spent years as an independent carrier in the expedited freight industry. I experienced firsthand the frustrations that plague both carriers and shippers: hidden broker spreads that squeeze carrier margins, loads that get double-brokered to unknown parties, and "dispatch support" that disappears the moment you sign the rate confirmation.</p>
                    <p>I saw how the traditional brokerage model creates misaligned incentives. When brokers profit from information asymmetry—buying low from carriers and selling high to shippers while hiding the spread—everyone except the middleman loses. Carriers get squeezed on rates while shippers overpay for unreliable service.</p>
                    <p>Smart Expedite exists to fix this. We built a technology platform that connects shippers directly with vetted carriers, shows transparent pricing on both sides, and provides real dispatch support that stays engaged throughout the shipment lifecycle. Our dual 6% commission model creates alignment—both parties see fair, disclosed fees rather than hidden markups.</p>
                    <p>The long-term vision is a direct carrier network with modern tools, real-time visibility, and enterprise-grade execution standards—serving manufacturing and time-critical operations without the broker games. We're building the platform I wished existed when I was running freight.</p>
                  </div>
                  <div className="flex flex-wrap gap-3 mt-7">
                    <Link to="/contact" className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg border border-emerald/45 bg-emerald/10 text-emerald-light text-sm font-bold transition-all hover:bg-emerald/[0.18]">
                      Contact Us
                    </Link>
                    <Link to="/shippers" className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg border border-white/10 bg-white/[0.03] text-white text-sm font-bold transition-all hover:bg-white/[0.06]">
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 border-t border-white/[0.06]">
        <div className="container mx-auto px-6 max-w-[1180px] text-center">
          <ScrollAnimation>
            <p className="text-muted-foreground/60 font-bold tracking-widest uppercase text-xs mb-3">Our Mission</p>
          </ScrollAnimation>
          <ScrollAnimation delay={100}>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
              Modernize expedited freight with<br />transparency, reliability, and respect
            </h2>
          </ScrollAnimation>
          <ScrollAnimation delay={200}>
            <p className="text-muted-foreground text-lg max-w-[75ch] mx-auto">
              We believe freight should be handled with discipline, clarity, and respect for reality. Too many systems create confusion through layers of markup and misalignment.
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 border-t border-white/[0.06]">
        <div className="container mx-auto px-6 max-w-[1180px]">
          <div className="text-center mb-12">
            <ScrollAnimation>
              <p className="text-muted-foreground/60 font-bold tracking-widest uppercase text-xs mb-3">Core Values</p>
            </ScrollAnimation>
            <ScrollAnimation delay={100}>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white">What We Stand For</h2>
            </ScrollAnimation>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { icon: Eye, title: "Radical Transparency", desc: "Both shippers and carriers see exactly what the other side pays and earns. No hidden spreads, no mystery markups." },
              { icon: CheckCircle, title: "Execution Discipline", desc: "Time-critical freight demands accountability. We track, communicate, and support every shipment from booking to delivery." },
              { icon: Heart, title: "Carrier Respect", desc: "Carriers are essential partners, not expendable commodities. Fair rates, fast payment options, and support that actually answers." },
            ].map((value, i) => (
              <ScrollAnimation key={i} delay={i * 150}>
                <div className="border border-white/[0.12] rounded-xl bg-white/[0.03] p-7 text-center h-full">
                  <div className="w-16 h-16 rounded-xl bg-emerald/10 border border-emerald/25 flex items-center justify-center mx-auto mb-5">
                    <value.icon className="w-7 h-7 text-emerald" />
                  </div>
                  <h4 className="text-white font-bold text-lg mb-2">{value.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.desc}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Promise Section */}
      <section className="py-20 border-t border-white/[0.06]">
        <div className="container mx-auto px-6 max-w-[1180px]">
          <div className="text-center mb-12">
            <ScrollAnimation>
              <p className="text-muted-foreground/60 font-bold tracking-widest uppercase text-xs mb-3">The Smart Expedite Promise</p>
            </ScrollAnimation>
            <ScrollAnimation delay={100}>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white">What You Can Expect</h2>
            </ScrollAnimation>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { title: "For Shippers", desc: "Transparent pricing, vetted carriers, real-time tracking, and dispatch support that stays engaged. Know exactly what you're paying and why." },
              { title: "For Carriers", desc: "Fair rates shown upfront, QuickPay options, direct shipper loads, and 24/7 support. No double-brokering, no runaround." },
              { title: "For Everyone", desc: "A freight platform built on trust, technology, and the belief that expedited logistics can be better for everyone involved." },
            ].map((item, i) => (
              <ScrollAnimation key={i} delay={i * 150}>
                <div className="border border-white/[0.12] rounded-xl bg-white/[0.03] p-5 h-full">
                  <div className="flex items-center gap-3 mb-2">
                    <strong className="text-white font-bold">{item.title}</strong>
                  </div>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 border-t border-white/[0.06]">
        <div className="container mx-auto px-6 max-w-[1180px]">
          <ScrollAnimation animation="scale">
            <div className="bg-gradient-to-br from-emerald/10 to-emerald/5 border border-emerald/20 rounded-2xl p-12 text-center">
              <p className="text-muted-foreground/60 font-bold tracking-widest uppercase text-xs mb-3">Ready to Work Together?</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">Experience Freight Done Right</h2>
              <p className="text-muted-foreground text-lg max-w-[60ch] mx-auto mb-7">
                Whether you're shipping time-critical cargo or hauling expedited loads, we're here to make it better.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Link to="/contact" className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-lg border border-emerald-dark bg-emerald-dark text-white text-[15px] font-bold transition-all hover:bg-emerald hover:border-emerald">
                  Contact Us
                </Link>
                <Link to="/rate-calculator" className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-lg border border-white/10 bg-white/[0.03] text-white text-[15px] font-bold transition-all hover:bg-white/[0.06]">
                  Get a Quote
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

export default About;