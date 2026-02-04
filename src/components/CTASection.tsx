const CTASection = () => {
  return (
    <section className="py-24 border-t border-white/[0.06]">
      <div className="container mx-auto px-6 max-w-[1180px]">
        <div 
          className="rounded-xl p-12 md:p-16 text-center"
          style={{
            background: "linear-gradient(135deg, rgba(16,185,129,0.10) 0%, rgba(16,185,129,0.03) 100%)",
            border: "1px solid rgba(16,185,129,0.18)"
          }}
        >
          <p className="text-emerald font-display font-semibold tracking-[0.06em] uppercase text-xs mb-3">
            Access the Platform
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-[44px] font-bold text-white leading-tight tracking-tight mb-4">
            Ready to Move Time-Critical Freight?
          </h2>
          <p className="text-white/75 text-base md:text-lg max-w-[58ch] mx-auto leading-relaxed mb-8">
            Get a quote in minutes. See exactly what the carrier earns.
          </p>
          <div className="flex flex-wrap justify-center gap-3.5">
            <a
              href="/shippers"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-lg border border-emerald-dark bg-emerald-dark text-white text-[15px] font-bold transition-all hover:bg-emerald hover:border-emerald"
            >
              Get a Quote
            </a>
            <a
              href="/account"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-lg border border-white/10 bg-white/[0.03] text-white text-[15px] font-bold transition-all hover:bg-white/[0.06]"
            >
              Sign In
            </a>
            <a
              href="/carriers"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-lg border border-emerald/35 bg-emerald/10 text-emerald-light text-[15px] font-bold transition-all hover:bg-emerald/[0.18] hover:border-emerald/50"
            >
              Create Account
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
