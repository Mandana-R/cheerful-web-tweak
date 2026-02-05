import { ScrollAnimation } from "@/hooks/useScrollAnimation";

const HowToJoin = () => {
  const steps = [
    {
      number: "1",
      title: "Apply Online",
      desc: "Fill out our carrier application with your MC/DOT number, insurance information, and equipment details. Takes about 10 minutes.",
      time: "~10 minutes"
    },
    {
      number: "2",
      title: "Get Verified",
      desc: "We verify your authority, insurance certificates, and safety record with FMCSA. Most approvals happen within 24 hours.",
      time: "Within 24 hours"
    },
    {
      number: "3",
      title: "Start Hauling",
      desc: "Access our load board, set your lane preferences, and start accepting loads. Our AI will suggest the most profitable routes for you.",
      time: "Start earning immediately"
    },
  ];

  return (
    <section className="py-24 border-t border-white/[0.06]">
      <div className="container mx-auto px-6 max-w-[1180px]">
        <div className="text-center mb-12">
          <ScrollAnimation>
            <p className="text-emerald font-display font-semibold tracking-[0.06em] uppercase text-xs mb-3">
              How to Join
            </p>
          </ScrollAnimation>
          <ScrollAnimation delay={100}>
            <h2 className="font-display text-3xl md:text-4xl lg:text-[44px] font-bold text-white leading-tight tracking-tight mb-4">
              Get Approved in<br/><span className="text-emerald">24 Hours</span>
            </h2>
          </ScrollAnimation>
          <ScrollAnimation delay={200}>
            <p className="text-white/75 text-base md:text-lg max-w-[68ch] mx-auto leading-relaxed">
              Our streamlined onboarding process gets you hauling loads faster than any other platform.
            </p>
          </ScrollAnimation>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <ScrollAnimation key={i} delay={i * 150}>
              <div className="text-center bg-white/[0.02] border border-white/10 rounded-xl p-6 h-full transition-all hover:border-emerald/25">
                <div className="w-12 h-12 bg-emerald-subtle border border-emerald/15 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="font-display text-xl font-bold text-emerald">{step.number}</span>
                </div>
                <h3 className="font-display text-white font-semibold text-[15px] mb-2">{step.title}</h3>
                <p className="text-white/55 text-[13px] leading-relaxed mb-4">{step.desc}</p>
                <div className="py-2.5 px-4 bg-emerald/[0.08] border border-emerald/15 rounded-lg inline-block">
                  <p className="text-xs text-emerald font-medium">{step.time}</p>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowToJoin;
