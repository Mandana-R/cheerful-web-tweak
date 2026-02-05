import { ScrollAnimation } from "@/hooks/useScrollAnimation";

const LifeOnTheRoad = () => {
  return (
    <section className="py-24 bg-[#1A1A1A]">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-12">
          <ScrollAnimation>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald/10 border border-emerald/30 text-emerald-light text-sm font-medium mb-6">
              Life on the Road
            </span>
          </ScrollAnimation>
          <ScrollAnimation delay={100}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              See What It's Like to<br/>
              <span className="bg-gradient-to-r from-green-500 to-emerald bg-clip-text text-transparent">Haul With Us</span>
            </h2>
          </ScrollAnimation>
        </div>

        <ScrollAnimation delay={200}>
          <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden border border-gray-800 shadow-2xl">
            <video
              className="w-full aspect-video object-cover"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="/assets/carrier_road_video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default LifeOnTheRoad;
