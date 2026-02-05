import { ScrollAnimation } from "@/hooks/useScrollAnimation";

const LifeOnTheRoad = () => {
  return (
    <section className="py-24 border-t border-white/[0.06]">
      <div className="container mx-auto px-6 max-w-[1180px]">
        <div className="text-center mb-12">
          <ScrollAnimation>
            <p className="text-emerald font-display font-semibold tracking-[0.06em] uppercase text-xs mb-3">
              Life on the Road
            </p>
          </ScrollAnimation>
          <ScrollAnimation delay={100}>
            <h2 className="font-display text-3xl md:text-4xl lg:text-[44px] font-bold text-white leading-tight tracking-tight mb-4">
              See What It's Like to<br/>
              <span className="text-emerald">Haul With Us</span>
            </h2>
          </ScrollAnimation>
        </div>

        <ScrollAnimation delay={200}>
          <div className="max-w-4xl mx-auto rounded-xl overflow-hidden border border-white/10">
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
