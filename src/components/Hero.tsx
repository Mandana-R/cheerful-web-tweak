import { ScrollAnimation } from "@/hooks/useScrollAnimation";

const Hero = () => {
  return (
    <section
      className="pt-[72px] min-h-screen flex items-stretch border-b border-white/[0.06] relative overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/homepage_hero.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 gradient-hero-overlay z-[1]" />
      
      {/* Emerald Glow */}
      <div 
        className="absolute top-0 right-0 w-[60%] h-full z-[2] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 80% 20%, rgba(16,185,129,0.06) 0%, transparent 60%)" }}
      />

      <div className="container mx-auto px-6 max-w-[1180px] relative z-[3]">
        <div className="py-20 lg:py-0 grid lg:grid-cols-[1.15fr_0.85fr] gap-12 items-center min-h-[calc(100vh-72px)]">
          {/* Left Content */}
          <div>
            {/* Chip */}
            <ScrollAnimation>
              <span className="inline-flex items-center gap-2.5 border border-emerald/25 bg-emerald/[0.08] px-4 py-2.5 rounded-full text-emerald-light text-[13px] font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald shadow-[0_0_0_4px_rgba(16,185,129,0.15)] animate-pulse" />
                Verified Capacity | Direct Carrier Pricing
              </span>
            </ScrollAnimation>

            {/* Headline */}
            <ScrollAnimation delay={100}>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.05] tracking-tight mt-5 mb-4">
                Time-Critical Expedited Freight<br />
                <span className="text-emerald">Fully Transparent pricing</span>
              </h1>
            </ScrollAnimation>

            <ScrollAnimation delay={200}>
              <p className="text-white/75 text-base md:text-lg max-w-[58ch] leading-relaxed mb-7">
                Access FMCSA-verified carriers at direct cost. We've eliminated hidden margins with a flat 8% fee for time-critical freight under 10,000 lbs.
                Verified carriers. No double-brokering.
              </p>
            </ScrollAnimation>

            {/* CTA Buttons */}
            <ScrollAnimation delay={300}>
              <div className="flex flex-wrap gap-3.5">
                <a
                  href="/account"
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-lg border border-white/10 bg-white/[0.03] text-white text-[15px] font-bold transition-all hover:bg-white/[0.06]"
                >
                  Sign In
                </a>
                <a
                  href="/carriers"
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-lg border border-white/10 bg-white/[0.03] text-white text-[15px] font-bold transition-all hover:bg-white/[0.06]"
                >
                  Create Account
                </a>
              </div>
            </ScrollAnimation>
          </div>

          {/* Right - Quote Form */}
          <ScrollAnimation animation="fade-right" delay={400} className="lg:order-none order-first">
            <div className="rounded-xl border border-white/[0.12] bg-card/5 backdrop-blur-lg overflow-hidden">
              <div className="p-6">
                <div className="flex items-center justify-between mb-1.5">
                  <strong className="font-display text-white font-bold text-[17px]">
                    Quick Quote
                  </strong>
                  <span className="text-xs text-emerald font-semibold">
                    Instant Estimate
                  </span>
                </div>
                <div className="h-px bg-white/10 my-4" />

                {/* Origin Field */}
                <div className="mb-4">
                  <label className="block font-semibold text-xs tracking-wide uppercase text-white/55 mb-2">
                    Origin
                  </label>
                  <input
                    type="text"
                    placeholder="City, State or ZIP"
                    className="w-full border border-white/10 bg-black/30 rounded-lg px-4 py-3.5 text-white placeholder:text-white/40 outline-none transition-all focus:border-emerald/35 focus:bg-black/40"
                  />
                </div>

                {/* Destination Field */}
                <div className="mb-4">
                  <label className="block font-semibold text-xs tracking-wide uppercase text-white/55 mb-2">
                    Destination
                  </label>
                  <input
                    type="text"
                    placeholder="City, State or ZIP"
                    className="w-full border border-white/10 bg-black/30 rounded-lg px-4 py-3.5 text-white placeholder:text-white/40 outline-none transition-all focus:border-emerald/35 focus:bg-black/40"
                  />
                </div>

                {/* Two Column Row */}
                <div className="grid grid-cols-2 gap-3.5 mb-5">
                  <div>
                    <label className="block font-semibold text-xs tracking-wide uppercase text-white/55 mb-2">
                      Equipment
                    </label>
                    <select className="w-full border border-white/10 rounded-lg px-4 py-3.5 text-white outline-none appearance-none cursor-pointer transition-all focus:border-emerald/35 pr-11" style={{ backgroundColor: "rgba(0,0,0,0.30)", backgroundImage: "url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%239CA3AF%22%20stroke-width%3D%222%22%3E%3Cpath%20d%3D%22M6%209l6%206%206-6%22%2F%3E%3C%2Fsvg%3E')", backgroundRepeat: "no-repeat", backgroundPosition: "right 14px center" }}>
                      <option className="bg-[#1a1a1a] text-white">Cargo Van (Low Roof)</option>
                      <option className="bg-[#1a1a1a] text-white">Cargo Van (High Roof)</option>
                      <option className="bg-[#1a1a1a] text-white">Sprinter Van</option>
                      <option className="bg-[#1a1a1a] text-white">Straight Truck (12-16 ft)</option>
                      <option className="bg-[#1a1a1a] text-white">Straight Truck (17-20 ft)</option>
                      <option className="bg-[#1a1a1a] text-white">Straight Truck (20-26 ft)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-semibold text-xs tracking-wide uppercase text-white/55 mb-2">
                      Urgency
                    </label>
                    <select className="w-full border border-white/10 rounded-lg px-4 py-3.5 text-white outline-none appearance-none cursor-pointer transition-all focus:border-emerald/35 pr-11" style={{ backgroundColor: "rgba(0,0,0,0.30)", backgroundImage: "url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%239CA3AF%22%20stroke-width%3D%222%22%3E%3Cpath%20d%3D%22M6%209l6%206%206-6%22%2F%3E%3C%2Fsvg%3E')", backgroundRepeat: "no-repeat", backgroundPosition: "right 14px center" }}>
                      <option className="bg-[#1a1a1a] text-white">Same-Day</option>
                      <option className="bg-[#1a1a1a] text-white">Next-Day</option>
                      <option className="bg-[#1a1a1a] text-white">Scheduled</option>
                    </select>
                  </div>
                </div>

                <button className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-lg border border-emerald-dark bg-emerald-dark text-white text-sm font-bold transition-all hover:bg-emerald hover:border-emerald">
                  Get Estimate
                </button>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default Hero;