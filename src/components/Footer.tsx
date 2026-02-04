const Footer = () => {
  return (
    <footer className="pt-16 pb-9 border-t border-white/[0.06] bg-black/30">
      <div className="container mx-auto px-6 max-w-[1180px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <img
              src="/assets/Logo.jpg"
              alt="Smart Expedite"
              className="w-12 h-12 mb-4 rounded-lg"
            />
            <p className="text-white/75 text-sm max-w-[32ch] leading-relaxed mb-4">
              Operational discipline for time-critical logistics. Transparent pricing, 
              verified carriers, and 24/7 Live Operations Support.
            </p>
            <span className="inline-flex items-center gap-2.5 border border-emerald/25 bg-emerald/[0.08] px-3 py-2 rounded-full text-emerald-light text-[11px] font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald shadow-[0_0_0_4px_rgba(16,185,129,0.15)] animate-pulse" />
              Platform Online
            </span>
          </div>

          {/* Services */}
          <div>
            <h5 className="font-display text-white font-semibold text-[13px] uppercase tracking-wide mb-4">
              Services
            </h5>
            <nav className="flex flex-col">
              <a href="#" className="text-white/75 text-sm py-1.5 hover:text-white transition-colors">Same-Day & Next-Day Expedite</a>
              <a href="#" className="text-white/75 text-sm py-1.5 hover:text-white transition-colors">JIT & Line-Down</a>
              <a href="#" className="text-white/75 text-sm py-1.5 hover:text-white transition-colors">AOG & Critical Parts</a>
              <a href="#" className="text-white/75 text-sm py-1.5 hover:text-white transition-colors">Emergency & Recovery</a>
              <a href="#" className="text-white/75 text-sm py-1.5 hover:text-white transition-colors">Sprinter & Cargo Van</a>
              <a href="#" className="text-white/75 text-sm py-1.5 hover:text-white transition-colors">Straight Truck (12-26')</a>
            </nav>
          </div>

          {/* Platform */}
          <div>
            <h5 className="font-display text-white font-semibold text-[13px] uppercase tracking-wide mb-4">
              Platform
            </h5>
            <nav className="flex flex-col">
              <a href="/shippers" className="text-white/75 text-sm py-1.5 hover:text-white transition-colors">Shipper Portal</a>
              <a href="/carriers" className="text-white/75 text-sm py-1.5 hover:text-white transition-colors">Carrier Setup</a>
              <a href="/rate-calculator" className="text-white/75 text-sm py-1.5 hover:text-white transition-colors">Rate Calculator</a>
              <a href="/about" className="text-white/75 text-sm py-1.5 hover:text-white transition-colors">About Us</a>
              <a href="/account" className="text-white/75 text-sm py-1.5 hover:text-white transition-colors">Account Login</a>
              <a href="/contact" className="text-white/75 text-sm py-1.5 hover:text-white transition-colors">Contact Us</a>
            </nav>
          </div>

          {/* Compliance */}
          <div>
            <h5 className="font-display text-white font-semibold text-[13px] uppercase tracking-wide mb-4">
              Compliance
            </h5>
            <nav className="flex flex-col">
              <a href="#" className="text-white/75 text-sm py-1.5 hover:text-white transition-colors">FMCSA Verified</a>
              <a href="#" className="text-white/75 text-sm py-1.5 hover:text-white transition-colors">Chain of Custody</a>
              <a href="#" className="text-white/75 text-sm py-1.5 hover:text-white transition-colors">Broker Bond</a>
              <a href="#" className="text-white/75 text-sm py-1.5 hover:text-white transition-colors">Cargo Claims</a>
              <a href="#" className="text-white/75 text-sm py-1.5 hover:text-white transition-colors">Terms & Conditions</a>
              <a href="#" className="text-white/75 text-sm py-1.5 hover:text-white transition-colors">Privacy Policy</a>
            </nav>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <span className="text-white/75 text-[13px]">
              © 2026 Smart Expedite Inc. All rights reserved.
            </span>
            <p className="text-white/50 text-xs mt-1">
              Not an asset-based carrier. Operations conducted via verified captive network.
            </p>
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-white/75 text-[13px] hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/75 text-[13px] hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="text-white/75 text-[13px] hover:text-white transition-colors">Carrier Agreement</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
