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
    <section className="py-24 bg-[#1A1A1A]">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-20">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald/10 border border-emerald/30 text-emerald-light text-sm font-medium mb-6">
            How to Join
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Get Approved in<br/><span className="bg-gradient-to-r from-green-500 to-emerald bg-clip-text text-transparent">24 Hours</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
            Our streamlined onboarding process gets you hauling loads faster than any other platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, i) => (
            <div key={i} className="text-center">
              <div className="w-20 h-20 bg-emerald/20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(16,185,129,0.3)]">
                <span className="text-4xl font-black text-emerald">{step.number}</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
              <p className="text-gray-400 leading-relaxed mb-6">{step.desc}</p>
              <div className="p-4 bg-background rounded-xl border border-gray-800">
                <p className="text-sm text-emerald font-medium">{step.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowToJoin;
