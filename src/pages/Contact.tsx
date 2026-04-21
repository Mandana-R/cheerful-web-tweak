import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Phone, Mail, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { ScrollAnimation } from "@/hooks/useScrollAnimation";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-[140px] pb-20">
        <div className="container mx-auto px-6 max-w-[1180px]">
          <div className="text-center mb-12">
            <ScrollAnimation>
              <p className="text-muted-foreground/60 font-bold tracking-widest uppercase text-xs mb-3">Contact</p>
            </ScrollAnimation>
            <ScrollAnimation delay={100}>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">Let's Talk Freight</h1>
            </ScrollAnimation>
            <ScrollAnimation delay={200}>
              <p className="text-muted-foreground text-lg max-w-[75ch] mx-auto">
                Whether you're a shipper with time-critical freight or a carrier seeking direct loads, our team is ready to help. 24/7 dispatch support is built into everything we do.
              </p>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="pb-20">
        <div className="container mx-auto px-6 max-w-[1180px]">
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-11 items-start">
            {/* Form */}
            <ScrollAnimation animation="fade-left">
              <div className="border border-white/[0.12] rounded-2xl bg-card/5 backdrop-blur-lg p-8">
                <h3 className="font-display text-xl font-bold text-white mb-2">Send Us a Message</h3>
                <p className="text-muted-foreground text-sm mb-6">
                  Share your requirements and we'll respond within 2 hours during business hours, or immediately for urgent freight needs.
                </p>
                
                <form className="space-y-4">
                  <div>
                    <label className="block font-bold text-xs tracking-wide uppercase text-muted-foreground/60 mb-2">Full Name *</label>
                    <input type="text" placeholder="John Smith" required className="w-full border border-white/10 bg-black/30 rounded-lg px-4 py-3.5 text-white placeholder:text-white/40 outline-none transition-all focus:border-emerald/35 focus:bg-black/40" />
                  </div>
                  <div>
                    <label className="block font-bold text-xs tracking-wide uppercase text-muted-foreground/60 mb-2">Email Address *</label>
                    <input type="email" placeholder="john@company.com" required className="w-full border border-white/10 bg-black/30 rounded-lg px-4 py-3.5 text-white placeholder:text-white/40 outline-none transition-all focus:border-emerald/35 focus:bg-black/40" />
                  </div>
                  <div>
                    <label className="block font-bold text-xs tracking-wide uppercase text-muted-foreground/60 mb-2">Message *</label>
                    <textarea placeholder="Tell us about your freight needs..." required className="w-full border border-white/10 bg-black/30 rounded-lg px-4 py-3.5 text-white placeholder:text-white/40 outline-none transition-all focus:border-emerald/35 focus:bg-black/40 min-h-[120px] resize-y" />
                  </div>
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-lg border border-emerald-dark bg-emerald-dark text-white text-sm font-bold transition-all hover:bg-emerald hover:border-emerald mt-2"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </ScrollAnimation>

            {/* Contact Info */}
            <ScrollAnimation animation="fade-right" delay={200}>
              <div>
                <div className="border border-white/[0.12] rounded-2xl bg-card/5 backdrop-blur-lg p-7">
                  <h3 className="font-display text-xl font-bold text-white mb-2">Direct Contact</h3>
                  <p className="text-muted-foreground text-sm mb-7">Need immediate assistance? Reach us directly.</p>
                  
                  <div className="space-y-5">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-xl bg-emerald/10 border border-emerald/25 flex items-center justify-center flex-shrink-0">
                        <Phone className="w-5 h-5 text-emerald" />
                      </div>
                      <div>
                        <h4 className="text-white font-bold mb-1">24/7 Dispatch Line</h4>
                        <p className="text-muted-foreground text-sm">
                          <Link to="/contact" className="text-emerald-light">Contact Us</Link>
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-xl bg-emerald/10 border border-emerald/25 flex items-center justify-center flex-shrink-0">
                        <Mail className="w-5 h-5 text-emerald" />
                      </div>
                      <div>
                        <h4 className="text-white font-bold mb-1">Email</h4>
                        <p className="text-muted-foreground text-sm">
                          <a href="mailto:dispatch@smartexpedite.com" className="text-emerald-light">dispatch@smartexpedite.com</a>
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-xl bg-emerald/10 border border-emerald/25 flex items-center justify-center flex-shrink-0">
                        <Clock className="w-5 h-5 text-emerald" />
                      </div>
                      <div>
                        <h4 className="text-white font-bold mb-1">Hours</h4>
                        <p className="text-muted-foreground text-sm">
                          Dispatch: 24/7/365<br />Sales: Mon–Fri 8am–6pm CT
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="h-px bg-white/10 my-5" />
                  
                  <h4 className="text-white font-bold mb-3.5">Quick Links</h4>
                  <div className="grid grid-cols-2 gap-3">
                    <Link to="/shippers" className="inline-flex items-center justify-center px-4 py-3 rounded-lg border border-white/10 bg-white/[0.03] text-white text-xs font-bold transition-all hover:bg-white/[0.06]">
                      For Shippers
                    </Link>
                    <Link to="/carriers" className="inline-flex items-center justify-center px-4 py-3 rounded-lg border border-white/10 bg-white/[0.03] text-white text-xs font-bold transition-all hover:bg-white/[0.06]">
                      For Carriers
                    </Link>
                    <Link to="/rate-calculator" className="inline-flex items-center justify-center px-4 py-3 rounded-lg border border-white/10 bg-white/[0.03] text-white text-xs font-bold transition-all hover:bg-white/[0.06]">
                      Get a Quote
                    </Link>
                    <Link to="/account" className="inline-flex items-center justify-center px-4 py-3 rounded-lg border border-white/10 bg-white/[0.03] text-white text-xs font-bold transition-all hover:bg-white/[0.06]">
                      Account Login
                    </Link>
                  </div>
                </div>

                <div className="border border-white/[0.12] rounded-xl bg-white/[0.03] p-5 mt-4">
                  <div className="flex items-center gap-3 mb-2">
                    <strong className="text-white font-bold">Response Times</strong>
                  </div>
                  <p className="text-muted-foreground text-sm">Standard inquiries: Within 2 hours during business hours</p>
                  <p className="text-muted-foreground text-sm mt-1.5">Urgent freight: Within 30 minutes, 24/7</p>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;