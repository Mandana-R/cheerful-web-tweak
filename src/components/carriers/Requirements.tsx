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
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollAnimation animation="fade-left">
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald/10 border border-emerald/30 text-emerald-light text-sm font-medium mb-6">
                Requirements
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                What You Need<br/><span className="bg-gradient-to-r from-green-500 to-emerald bg-clip-text text-transparent">to Join</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                We maintain high standards to protect our shippers and ensure only reliable, 
                professional carriers are part of our network. Here's what we require:
              </p>
              <div className="space-y-4">
                {requirements.map((req, i) => (
                  <ScrollAnimation key={i} delay={i * 100} animation="fade-left">
                    <div className="flex items-start gap-4 p-5 bg-[#1A1A1A] border border-gray-800 rounded-xl">
                      <CheckCircle className="w-6 h-6 text-emerald flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-bold text-white mb-1">{req.title}</h4>
                        <p className="text-gray-400 text-sm">{req.desc}</p>
                      </div>
                    </div>
                  </ScrollAnimation>
                ))}
              </div>
            </div>
          </ScrollAnimation>
          
          <ScrollAnimation animation="fade-right" delay={200}>
            <div className="bg-[#1A1A1A] border border-gray-800 rounded-2xl p-8 md:p-10">
              <h3 className="text-2xl font-bold text-white mb-6">Don't Meet All Requirements?</h3>
              <p className="text-gray-400 mb-6">
                If you're a newer carrier or don't meet all requirements, we may still be able to work with you. 
                Contact us to discuss your situation—we evaluate each carrier individually.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-background rounded-xl border border-gray-800 transition-all hover:border-emerald/50">
                  <Phone className="w-8 h-8 text-emerald" />
                  <div>
                    <p className="text-white font-bold">Call Us</p>
                    <p className="text-gray-400 text-sm">1-800-SMART-EXP</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-background rounded-xl border border-gray-800 transition-all hover:border-emerald/50">
                  <Mail className="w-8 h-8 text-emerald" />
                  <div>
                    <p className="text-white font-bold">Email Us</p>
                    <p className="text-gray-400 text-sm">carriers@smartexpedite.com</p>
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
