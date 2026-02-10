import { CheckCircle, Phone, Mail } from "lucide-react";
import { ScrollAnimation } from "@/hooks/useScrollAnimation";

const Requirements = () => {
  const requirements = [
    { title: "Active MC/DOT Authority", desc: "Must have active operating authority for at least 6 months" },
    { title: "$100,000 Cargo Insurance", desc: "Minimum cargo coverage required (higher for specialized freight)" },
    { title: "$1M Auto Liability", desc: "Standard auto liability coverage required" },
    { title: "Satisfactory Safety Rating", desc: "No unsatisfactory safety ratings with FMCSA" },
    { title: "Valid W-9", desc: "Current W-9 for payment processing" },
  ];

  return (
    <section className="py-24 border-t border-white/[0.06]">
      <div className="container mx-auto px-6 max-w-[1180px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollAnimation animation="fade-left">
            <div>
              <p className="text-emerald font-display font-semibold tracking-[0.06em] uppercase text-xs mb-3">
                Requirements
              </p>
              <h2 className="font-display text-3xl md:text-4xl lg:text-[44px] font-bold text-white leading-tight tracking-tight mb-4">
                What You Need<br/><span className="text-emerald">to Join</span>
              </h2>
              <p className="text-white/75 text-base md:text-lg leading-relaxed mb-6">
                We maintain high standards to protect our shippers and ensure only reliable, 
                professional carriers are part of our network. Here's what we require:
              </p>
              <div className="space-y-3">
                {requirements.map((req, i) => (
                  <ScrollAnimation key={i} delay={i * 100} animation="fade-left">
                    <div className="flex items-start gap-3.5 p-4 bg-white/[0.02] border border-white/10 rounded-lg transition-all hover:border-emerald/25">
                      <CheckCircle className="w-5 h-5 text-emerald flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-display font-semibold text-white text-[14px] mb-0.5">{req.title}</h4>
                        <p className="text-white/55 text-[12px]">{req.desc}</p>
                      </div>
                    </div>
                  </ScrollAnimation>
                ))}
              </div>
            </div>
          </ScrollAnimation>
          
          <ScrollAnimation animation="fade-right" delay={200}>
            <div className="bg-white/[0.02] border border-white/10 rounded-xl p-8">
              <h3 className="font-display text-white font-semibold text-xl mb-4">Don't Meet All Requirements?</h3>
              <p className="text-white/75 text-sm leading-relaxed mb-5">
                If you're a newer carrier or don't meet all requirements, we may still be able to work with you. 
                Contact us to discuss your situation—we evaluate each carrier individually.
              </p>
              <div className="space-y-3">
                <Link to="/contact" className="flex items-center gap-3.5 p-4 bg-white/[0.02] rounded-lg border border-white/10 transition-all hover:border-emerald/25">
                  <Phone className="w-6 h-6 text-emerald" />
                  <div>
                    <p className="text-white font-semibold text-[14px]">Contact Us</p>
                    <p className="text-white/55 text-[12px]">Get in touch with our team</p>
                  </div>
                </Link>
                <div className="flex items-center gap-3.5 p-4 bg-white/[0.02] rounded-lg border border-white/10 transition-all hover:border-emerald/25">
                  <Mail className="w-6 h-6 text-emerald" />
                  <div>
                    <p className="text-white font-semibold text-[14px]">Email Us</p>
                    <p className="text-white/55 text-[12px]">carriers@smartexpedite.com</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default Requirements;
