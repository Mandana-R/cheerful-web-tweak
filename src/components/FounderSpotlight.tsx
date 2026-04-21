import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ScrollAnimation } from "@/hooks/useScrollAnimation";

const FounderSpotlight = () => {
  return (
    <section className="py-24 border-t border-white/[0.06]">
      <div className="container mx-auto px-6 max-w-[1180px]">
        <div className="text-center mb-12">
          <ScrollAnimation>
            <p className="text-emerald font-display font-semibold tracking-widest uppercase text-xs mb-3">
              Meet the Founder
            </p>
          </ScrollAnimation>
          <ScrollAnimation delay={100}>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
              The Carrier Behind the Platform
            </h2>
          </ScrollAnimation>
        </div>

        <ScrollAnimation animation="scale">
          <div className="border border-white/[0.12] rounded-2xl bg-card/5 backdrop-blur-lg p-8 md:p-11">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <img
                src="/assets/Founder.jpg"
                alt="Kourosh Eshman, Founder & CEO of Smart Expedite"
                className="w-[180px] h-[180px] rounded-2xl object-cover border-[3px] border-emerald/30 flex-shrink-0 mx-auto md:mx-0"
              />
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="font-display text-2xl font-bold text-white">Kourosh Eshman</h3>
                  <a
                    href="https://www.linkedin.com/in/kourosh-eshman-522235b0/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-[#0A66C2]/15 border border-[#0A66C2]/30 text-[#0A66C2] hover:bg-[#0A66C2]/25 hover:border-[#0A66C2]/50 hover:scale-110 transition-all duration-200"
                    aria-label="Kourosh Eshman LinkedIn"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                </div>
                <p className="text-emerald font-bold mb-4">Founder &amp; CEO</p>
                <p className="text-muted-foreground italic mb-5 text-base">
                  "Expedited freight is won or lost on execution. We built Smart Expedite to make execution the standard, not the exception."
                </p>
                <p className="text-muted-foreground text-[15px] leading-relaxed mb-4">
                  Kourosh Eshman is a freight operator with deep, hands-on experience in the U.S. expedited and time-critical logistics market. As an independent carrier, he managed direct shipper relationships, dispatch operations, and compliance across thousands of loads—building a working knowledge of the industry from the asset side most brokerages lack.
                </p>
                <p className="text-muted-foreground text-[15px] leading-relaxed mb-7">
                  He founded Smart Expedite to bring carrier-grade execution and full pricing transparency to shippers in manufacturing, automotive, aerospace, and time-critical supply chains. Under his leadership, the company operates a vetted carrier network, a flat-fee commercial model, and 24/7 dispatch built to perform when freight cannot fail.
                </p>
                <Link
                  to="/about#founder-kourosh"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg border border-emerald-dark bg-emerald-dark text-white text-sm font-bold transition-all hover:bg-emerald hover:border-emerald"
                >
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default FounderSpotlight;