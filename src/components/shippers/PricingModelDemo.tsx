import { useEffect, useRef, useCallback, useState } from "react";
import { ScrollAnimation } from "@/hooks/useScrollAnimation";

/* ── helpers ── */
const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

async function typeText(el: HTMLElement | null, text: string, speed = 100) {
  if (!el) return;
  el.innerHTML = "";
  const cursor = document.createElement("div");
  cursor.className = "demo-cursor";
  el.appendChild(cursor);
  for (let i = 0; i < text.length; i++) {
    const span = document.createElement("span");
    span.textContent = text[i];
    el.insertBefore(span, cursor);
    await sleep(speed);
  }
  cursor.remove();
}

/* ── Left panel: 2×2 pricing cards ── */
const PricingPanel = () => (
  <div className="border border-white/10 rounded-[20px] bg-white/[0.02] overflow-hidden h-[575px] flex flex-col p-10">
    <p className="text-emerald font-display font-semibold tracking-widest uppercase text-xs mb-3">
      Pricing Model
    </p>
    <h2 className="font-display text-3xl md:text-[42px] font-bold text-white leading-[1.12] tracking-tight mb-3.5">
      See Exactly What You Pay
    </h2>
    <p className="text-muted-foreground text-base leading-relaxed mb-6">
      Our 8% platform fee is disclosed on every quote. You see the carrier's rate, you see our fee, and you see your
      total. No hidden spreads.
    </p>

    <div className="grid grid-cols-2 gap-4 flex-grow">
      {[
        { title: "Carrier Rate", desc: "What the carrier actually earns for the move." },
        { title: "Platform Fee", desc: "8% flat fee covers support and tech." },
        { title: "Your Total", desc: "Carrier rate + 8% fee. Simple math." },
        { title: "No Surprises", desc: "The price at booking is the price you pay." },
      ].map((c) => (
        <div
          key={c.title}
          className="border border-white/10 rounded-[14px] bg-white/[0.02] p-5 flex flex-col justify-center transition-all hover:border-emerald/25 hover:bg-emerald/[0.03]"
        >
          <h4 className="font-display text-base font-semibold text-white mb-2">{c.title}</h4>
          <p className="text-xs text-muted-foreground/55 leading-relaxed">{c.desc}</p>
        </div>
      ))}
    </div>
  </div>
);

/* ── Right panel: 5-scene interactive demo ── */
const InteractiveDemo = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const loopRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [activeScene, setActiveScene] = useState<string>("scene1");

  const showScene = useCallback((id: string) => setActiveScene(id), []);

  const startDemo = useCallback(async () => {
    if (loopRef.current) clearTimeout(loopRef.current);
    const $ = (id: string) => containerRef.current?.querySelector<HTMLElement>(`#${id}`) ?? null;

    /* reset */
    const bidContainer = $("bid-container");
    if (bidContainer) bidContainer.innerHTML = "";
    const cpv = $("carrier-pay-val");
    const fv = $("fee-val");
    const tv = $("total-val");
    if (cpv) cpv.innerText = "$0";
    if (fv) fv.innerText = "$0";
    if (tv) tv.innerText = "$0";
    const fl = $("final-logo");
    if (fl) fl.style.opacity = "0";
    const lg = $("demo-liftgate") as HTMLInputElement | null;
    const da = $("demo-driverassist") as HTMLInputElement | null;
    const bl = $("demo-blankets") as HTMLInputElement | null;
    if (lg) lg.checked = false;
    if (da) da.checked = false;
    if (bl) bl.checked = false;
    const notes = $("demo-notes");
    if (notes) notes.innerText = "";
    const sc = $("demo-secure-code");
    if (sc) sc.innerText = "------";

    /* SCENE 1 */
    showScene("scene1");
    await sleep(1000);
    await typeText($("pickup-input"), "60007 — Elk Grove Village, IL", 20);
    await typeText($("delivery-input"), "30303 — Atlanta, GA", 20);
    await typeText($("freight-input"), "3 Pallets — Automotive Parts", 15);
    await typeText($("weight-input"), "2,800 lbs", 20);
    await typeText($("vehicle-input"), "Cargo Van (High Roof)", 20);
    await sleep(600);
    if (da) da.checked = true;
    await sleep(500);
    if (bl) bl.checked = true;
    await sleep(600);
    await typeText(
      notes,
      "Sensitive cargo. Driver assist required for inside delivery. Please ensure 4 clean blankets are on board.",
      20
    );
    await sleep(4000);
    await sleep(800);

    /* SCENE 2 */
    showScene("scene2");
    const bidsPage1 = [
      { p: "$835.00", c: "Expedite Pro" },
      { p: "$795.00", c: "Elizabeth McGrath" },
      { p: "$800.00", c: "Fast Run LLC" },
      { p: "$750.00", c: "Kylan Gentry" },
    ];
    const bidsPage2 = [
      { p: "$815.00", c: "Safe Expedited" },
      { p: "$750.00", c: "Verified Carrier Partner" },
      { p: "$850.00", c: "Regional Logistics Pro" },
      { p: "$715.00", c: "Swift Expedited" },
    ];

    const bc = $("bid-container");
    if (bc) {
      for (const b of bidsPage1) {
        await sleep(700);
        const div = document.createElement("div");
        div.className = "demo-bid-card";
        div.innerHTML = `<div><span class="demo-bid-price">${b.p}</span><span class="demo-bid-carrier">${b.c}</span></div><span style="color:hsl(var(--emerald));font-size:11px;font-weight:700;">QUOTE RECEIVED</span>`;
        bc.appendChild(div);
        setTimeout(() => div.classList.add("visible"), 50);
      }
      await sleep(1500);
      bc.innerHTML =
        '<div style="color:hsl(var(--emerald));font-size:14px;font-weight:600;text-align:center;padding:20px;">Loading more quotes...</div>';
      await sleep(800);
      bc.innerHTML = "";
      for (const b of bidsPage2) {
        await sleep(1000);
        const div = document.createElement("div");
        div.className = "demo-bid-card";
        div.innerHTML = `<div><span class="demo-bid-price">${b.p}</span><span class="demo-bid-carrier">${b.c}</span></div><span style="color:hsl(var(--emerald));font-size:11px;font-weight:600;">QUOTE RECEIVED</span>`;
        bc.appendChild(div);
        setTimeout(() => div.classList.add("visible"), 50);
      }
    }
    await sleep(4500);

    /* SCENE 3 */
    showScene("scene3");
    await sleep(5000);
    await sleep(1000);
    const code = Math.floor(100000 + Math.random() * 900000);
    if (sc) sc.innerText = String(code);
    await sleep(4000);

    /* SCENE 4 */
    showScene("scene4");
    await sleep(1000);
    let pay = 0;
    await new Promise<void>((resolve) => {
      const interval = setInterval(() => {
        pay += 25;
        if (pay >= 750) {
          pay = 750;
          clearInterval(interval);
          resolve();
        }
        if (cpv) cpv.innerText = "$" + pay;
        if (fv) fv.innerText = "$" + (pay * 0.08).toFixed(2);
        if (tv) tv.innerText = "$" + (pay * 1.08).toFixed(2);
      }, 30);
    });
    await sleep(4000);

    /* SCENE 5 */
    showScene("scene5");
    await sleep(800);
    if (fl) fl.style.opacity = "1";

    loopRef.current = setTimeout(startDemo, 6000);
  }, [showScene]);

  useEffect(() => {
    const t = setTimeout(startDemo, 500);
    return () => {
      clearTimeout(t);
      if (loopRef.current) clearTimeout(loopRef.current);
    };
  }, [startDemo]);

  const sceneClass = (id: string) =>
    `absolute top-[50px] left-0 w-full h-[calc(100%-50px)] p-[30px] flex flex-col transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] ${
      activeScene === id ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-5 pointer-events-none"
    }`;

  return (
    <div
      ref={containerRef}
      className="w-full h-[575px] bg-[#111] border border-white/10 rounded-[20px] relative overflow-hidden shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)]"
    >
      {/* Replay */}
      <button
        onClick={startDemo}
        className="absolute bottom-[15px] right-[15px] bg-transparent border border-white/10 text-muted-foreground text-[10px] px-2 py-1 rounded cursor-pointer z-[100] hover:text-white hover:border-white transition-colors"
      >
        Replay Demo
      </button>

      {/* Nav mock */}
      <div className="h-[50px] border-b border-white/[0.06] flex items-center px-6 justify-between">
        <div className="flex items-center gap-2.5">
          <img src="/assets/Logo.jpg" alt="Smart Expedite" className="w-7 h-7 rounded-md object-contain" />
          <span className="font-display font-bold text-base text-white">Smart Expedite</span>
        </div>
      </div>

      {/* SCENE 1 – Quote Entry */}
      <div id="scene1" className={sceneClass("scene1")}>
        <h2 className="font-display text-lg mb-5 text-white">Instant Quote Entry</h2>
        <div className="grid grid-cols-2 gap-4 mt-2.5">
          <div className="flex flex-col gap-1.5">
            <span className="text-[11px] text-muted-foreground uppercase tracking-wide">Pickup Zip</span>
            <div id="pickup-input" className="bg-white/5 border border-white/10 px-2.5 py-2.5 rounded-lg text-[13px] h-10 flex items-center text-white/80" />
          </div>
          <div className="flex flex-col gap-1.5">
            <span className="text-[11px] text-muted-foreground uppercase tracking-wide">Delivery Zip</span>
            <div id="delivery-input" className="bg-white/5 border border-white/10 px-2.5 py-2.5 rounded-lg text-[13px] h-10 flex items-center text-white/80" />
          </div>
          <div className="flex flex-col gap-1.5 col-span-2">
            <span className="text-[11px] text-muted-foreground uppercase tracking-wide">Freight Details</span>
            <div id="freight-input" className="bg-white/5 border border-white/10 px-2.5 py-2.5 rounded-lg text-[13px] h-10 flex items-center text-white/80" />
          </div>
          <div className="flex flex-col gap-1.5">
            <span className="text-[11px] text-muted-foreground uppercase tracking-wide">Weight</span>
            <div id="weight-input" className="bg-white/5 border border-white/10 px-2.5 py-2.5 rounded-lg text-[13px] h-10 flex items-center text-white/80" />
          </div>
          <div className="flex flex-col gap-1.5">
            <span className="text-[11px] text-muted-foreground uppercase tracking-wide">Vehicle</span>
            <div id="vehicle-input" className="bg-white/5 border border-white/10 px-2.5 py-2.5 rounded-lg text-[13px] h-10 flex items-center text-emerald font-medium" />
          </div>

          {/* Equipment checkboxes */}
          <div className="flex flex-col gap-1.5 col-span-2 mt-2.5">
            <span className="text-[10px] text-muted-foreground uppercase">● Equipment Needed (Optional)</span>
            <div className="flex flex-wrap gap-x-4 gap-y-2.5 text-[11px]">
              {[
                { id: "demo-liftgate", label: "Liftgate" },
                { id: "demo-driverassist", label: "Driver Assist" },
                { id: "demo-blankets", label: "4 Blankets" },
                { id: "demo-dock", label: "Dock Level" },
              ].map((eq) => (
                <label key={eq.id} className="flex items-center gap-1 text-white/80 cursor-pointer">
                  <input type="checkbox" id={eq.id} className="accent-emerald" readOnly />
                  {eq.label}
                </label>
              ))}
            </div>
          </div>

          {/* Notes */}
          <div className="flex flex-col gap-1 col-span-2">
            <span className="text-[10px] text-muted-foreground uppercase">Operational Notes</span>
            <div
              id="demo-notes"
              className="bg-white/[0.04] border border-white/10 p-2.5 rounded-md text-[11px] h-[50px] flex items-start text-muted-foreground overflow-hidden whitespace-pre-wrap"
            />
          </div>
        </div>
      </div>

      {/* SCENE 2 – Live Bids */}
      <div id="scene2" className={sceneClass("scene2")}>
        <div className="bg-emerald/10 text-emerald px-3 py-1.5 rounded-full text-xs font-medium w-fit mb-5 flex items-center gap-2">
          <div className="w-2 h-2 bg-emerald rounded-full shadow-[0_0_0_rgba(16,185,129,0.4)] animate-pulse" />
          <span className="text-[1.3em]">12+ Cargo Vans available within 150 miles</span>
        </div>
        Receiving live quotes...
        <div id="bid-container" className="flex flex-col gap-2.5 overflow-hidden" />
      </div>

      {/* SCENE 3 – Selection & Security */}
      <div id="scene3" className={sceneClass("scene3")}>
        <h2 className="font-display text-lg mb-5 text-white">Selected Carrier Offer</h2>
        <div className="bg-emerald/5 border border-emerald rounded-xl p-3.5 px-5 flex justify-between items-center">
          <div>
            <span className="font-display text-lg font-bold text-white block">$750.00</span>
            <span className="text-[13px] text-muted-foreground block mt-1">Nearest available cargo van match</span>
          </div>
          <span className="text-emerald text-xs font-bold">BEST MATCH</span>
        </div>
        <button className="mt-5 self-center w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg border border-emerald-dark bg-emerald-dark text-white text-sm font-bold">
          Lock Carrier
        </button>

        {/* Secure Handshake */}
        <div className="mt-5 border-t border-white/[0.06] pt-4 text-left">
          <p className="text-sm text-muted-foreground leading-[1.8] mb-3">
            Secure 2-step verification active. Unique matching codes required for loading and unloading.
          </p>
          <div className="flex items-center gap-3 bg-emerald/[0.03] p-2.5 rounded-lg border border-dashed border-emerald/20">
            <span className="text-xs text-white/80 uppercase tracking-wide font-black">Security Token:</span>
            <span id="demo-secure-code" className="font-mono text-lg font-extrabold text-emerald tracking-[5px]">------</span>
          </div>
        </div>
      </div>

      {/* SCENE 4 – Fee Breakdown */}
      <div id="scene4" className={sceneClass("scene4")}>
        <h2 className="font-display text-lg mb-5 text-white">Pricing Transparency</h2>
        <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-6 max-w-[360px] mx-auto w-full">
          <div className="flex justify-between mb-3 text-sm">
            <span className="text-muted-foreground">Carrier Pay</span>
            <span id="carrier-pay-val" className="text-white">$0</span>
          </div>
          <div className="flex justify-between mb-3 text-sm">
            <span className="text-muted-foreground">Platform Service Fee (8%)</span>
            <span id="fee-val" className="text-white">$0</span>
          </div>
          <div className="flex justify-between mt-4 pt-4 border-t border-white/10 font-bold text-emerald text-[22px]">
            <span>Total Cost</span>
            <span id="total-val">$0</span>
          </div>
          <p className="text-[11px] text-muted-foreground text-center mt-2.5 italic">
            Operations Support&nbsp;&nbsp;&nbsp;Included
          </p>
          <p className="text-xs text-muted-foreground text-center mt-1">
            Fixed margins. Zero broker spreads. Complete pricing integrity.
          </p>
        </div>
      </div>

      {/* SCENE 5 – Final Branding */}
      <div id="scene5" className={sceneClass("scene5")}>
        <div className="text-center m-auto relative">
          <img
            src="/assets/Logo.jpg"
            alt=""
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] opacity-[0.08] object-contain pointer-events-none"
          />
          <h1 className="font-display text-[28px] leading-[1.2] mb-5 text-white relative z-[2]">
            Transparent pricing.
            <br />
            Direct access.
            <br />
            <span className="text-emerald">No broker games.</span>
          </h1>
          <div id="final-logo" className="opacity-0 transition-opacity duration-1000 relative z-[2]">
            <div className="flex items-center gap-2.5 justify-center mt-5">
              <img src="/assets/Logo.jpg" alt="Smart Expedite" className="w-11 h-11 rounded-lg object-contain" />
              <span className="font-display font-bold text-xl text-white">Smart Expedite</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ── Main export ── */
const PricingModelDemo = () => {
  return (
    <section className="py-24 border-t border-white/[0.06]">
      <div className="container mx-auto px-6 max-w-[1180px]">
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          <ScrollAnimation animation="fade-left">
            <PricingPanel />
          </ScrollAnimation>
          <ScrollAnimation animation="fade-right" delay={200}>
            <InteractiveDemo />
          </ScrollAnimation>
        </div>
      </div>

      {/* Scoped styles for the demo */}
      <style>{`
        .demo-cursor {
          width: 2px;
          height: 14px;
          background: hsl(var(--emerald));
          margin-left: 4px;
          display: inline-block;
          animation: demo-blink 1s infinite;
        }
        @keyframes demo-blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .demo-bid-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.10);
          padding: 14px 20px;
          border-radius: 12px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          transform: translateX(-50px);
          opacity: 0;
          transition: all 0.4s ease-out;
        }
        .demo-bid-card.visible {
          transform: translateX(0);
          opacity: 1;
        }
        .demo-bid-price {
          font-family: var(--font-display, 'Space Grotesk', sans-serif);
          font-size: 18px;
          font-weight: 700;
          color: white;
          display: block;
        }
        .demo-bid-carrier {
          font-size: 13px;
          color: rgba(156,163,175,1);
          display: block;
          margin-top: 4px;
        }
      `}</style>
    </section>
  );
};

export default PricingModelDemo;
