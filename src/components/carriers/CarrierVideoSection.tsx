import { ScrollAnimation } from "@/hooks/useScrollAnimation";
import { Play } from "lucide-react";

const CarrierVideoSection = () => {
  return (
    <section className="py-24 bg-[#1A1A1A] border-y border-gray-800">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-12">
          <ScrollAnimation>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald/10 border border-emerald/30 text-emerald-light text-sm font-medium mb-6">
              <Play className="w-4 h-4" />
              See It In Action
            </span>
          </ScrollAnimation>
          <ScrollAnimation delay={100}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Life on the <span className="bg-gradient-to-r from-green-500 to-emerald bg-clip-text text-transparent">Road</span>
            </h2>
          </ScrollAnimation>
          <ScrollAnimation delay={200}>
            <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
              Experience what it's like to be part of our carrier network. Real roads, real hauls, real results.
            </p>
          </ScrollAnimation>
        </div>

        <ScrollAnimation delay={300}>
          <div className="relative max-w-5xl mx-auto rounded-3xl overflow-hidden border border-gray-700 shadow-2xl shadow-black/50">
            <video
              className="w-full aspect-video object-cover"
              autoPlay
              muted
              loop
              playsInline
              poster="/assets/carrier_hero.png"
            >
              <source src="/assets/carrier_video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            
            {/* Subtle overlay gradient at bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#1A1A1A]/80 to-transparent pointer-events-none" />
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default CarrierVideoSection;
