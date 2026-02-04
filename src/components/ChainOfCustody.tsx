import { ArrowRight } from "lucide-react";

const steps = [
  { num: 1, label: "Shipment Accepted" },
  { num: 2, label: "Code Generated" },
  { num: 3, label: "Pickup Verified" },
  { num: 4, label: "Delivery Confirmed" },
];

const ChainOfCustody = () => {
  return (
    <section className="py-24 border-t border-white/[0.06]">
      <div className="container mx-auto px-6 max-w-[1180px]">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <p className="text-emerald font-display font-semibold tracking-[0.06em] uppercase text-xs mb-3">
              Security & Verification
            </p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-[44px] font-bold text-white leading-tight tracking-tight mb-5">
              Chain of Custody Controls
            </h2>
            <p className="text-white/75 text-base md:text-lg leading-relaxed mb-5">
              Smart Expedite enforces active, two-step chain-of-custody controls at critical handoff points. 
              After a shipment is accepted, the system generates a verification code used to confirm 
              carrier identity at both pickup and delivery.
            </p>
            <p className="text-white/75 text-base md:text-lg leading-relaxed">
              These controls are embedded directly into operational workflows and are designed to support 
              execution integrity throughout the shipment lifecycle.
            </p>
          </div>

          {/* Right - Visual */}
          <div className="flex items-center justify-center flex-wrap gap-5 p-10 bg-emerald/[0.03] border border-emerald/[0.12] rounded-xl">
            {steps.map((step, index) => (
              <div key={step.num} className="flex items-center gap-5">
                <div className="flex flex-col items-center text-center max-w-[140px]">
                  <div className="w-12 h-12 rounded-full bg-emerald-subtle border-2 border-emerald/30 flex items-center justify-center font-display font-bold text-emerald text-xl mb-3">
                    {step.num}
                  </div>
                  <span className="text-[13px] text-white/75 font-medium">{step.label}</span>
                </div>
                {index < steps.length - 1 && (
                  <div className="text-emerald/40 hidden sm:block">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChainOfCustody;
