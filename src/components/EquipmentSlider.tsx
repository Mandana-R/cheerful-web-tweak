import { useEffect, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight, Grid3x3, Weight } from "lucide-react";
import { ScrollAnimation } from "@/hooks/useScrollAnimation";

interface EquipmentItem {
  id: number;
  title: string;
  image: string;
  specs: {
    dimensions: string;
    payload: string;
  };
}

const equipmentData: EquipmentItem[] = [
  {
    id: 1,
    title: "Cargo Van — Low Roof",
    image: "/assets/Cargo_van.jpg",
    specs: {
      dimensions: "Cargo floor length 126.0 in (~ 2.5 standard pallets)",
      payload: "~2,600 lbs total payload"
    }
  },
  {
    id: 2,
    title: "Cargo Van — High Roof",
    image: "/assets/Ford Cargo van.jpg",
    specs: {
      dimensions: "Cargo floor length 144.0 in (3 standard pallets)",
      payload: "~4,000 lbs total payload"
    }
  },
  {
    id: 3,
    title: "Extended-size Sprinter Vans",
    image: "/assets/Full size Van.jpg",
    specs: {
      dimensions: "Cargo floor length 170.0 in (4 standard pallets)",
      payload: "~4,500 lbs payload"
    }
  },
  {
    id: 4,
    title: "Straight Truck — Small (12–16 ft)",
    image: "/assets/16_footer.jpg",
    specs: {
      dimensions: "6-8 standard pallets",
      payload: "~5,000 lbs payload"
    }
  },
  {
    id: 5,
    title: "Straight Truck — Medium (17–20 ft)",
    image: "/assets/Inside the Dock.jpg",
    specs: {
      dimensions: "8–10 standard pallets",
      payload: "~7,000 lbs payload"
    }
  },
  {
    id: 6,
    title: "Straight Truck — Large (20–26 ft)",
    image: "/assets/26 on the road.jpg",
    specs: {
      dimensions: "10–14 standard pallets",
      payload: "Up to ~10,000 lbs payload"
    }
  }
];

const EquipmentSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const goToNext = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setImageLoaded(false);
    setCurrentIndex(prev => (prev + 1) % equipmentData.length);
    setTimeout(() => setIsTransitioning(false), 500);
  }, [isTransitioning]);

  const goToPrev = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setImageLoaded(false);
    setCurrentIndex(prev => (prev - 1 + equipmentData.length) % equipmentData.length);
    setTimeout(() => setIsTransitioning(false), 500);
  }, [isTransitioning]);

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentIndex) return;
    setIsTransitioning(true);
    setImageLoaded(false);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      goToNext();
    }, 4000);
    return () => clearInterval(interval);
  }, [isPaused, goToNext]);

  const currentEquipment = equipmentData[currentIndex];

  return (
    <section
      className="py-20 bg-background"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="container mx-auto px-4 max-w-[1180px]">
        <div className="text-center mb-12">
          <ScrollAnimation>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Equipment for Every Load
            </h2>
          </ScrollAnimation>
          <ScrollAnimation delay={100}>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              From small parcels to full truckloads, we have the right vehicle for your shipment
            </p>
          </ScrollAnimation>
        </div>

        <ScrollAnimation delay={200}>
          <div className="relative max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-0 rounded-2xl border border-border overflow-hidden bg-card shadow-xl">
              
              {/* Image Area */}
              <div className="relative bg-black/40 h-[320px] md:h-[420px] overflow-hidden">
                <img
                  src={currentEquipment.image}
                  alt={currentEquipment.title}
                  onLoad={() => setImageLoaded(true)}
                  className={`w-full h-full object-cover transition-all duration-500 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                />

                {/* Navigation Arrows */}
                <button
                  onClick={goToPrev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/60 transition-colors z-10"
                  aria-label="Previous equipment"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={goToNext}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/60 transition-colors z-10"
                  aria-label="Next equipment"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                {/* Slide Counter */}
                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full z-10">
                  {currentIndex + 1} / {equipmentData.length}
                </div>
              </div>

              {/* Info Panel */}
              <div className="p-6 md:p-8 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-border">
                <div>
                  <span className="inline-block text-xs font-semibold uppercase tracking-wider text-primary mb-3">
                    {currentIndex + 1 <= 3 ? "Van" : "Straight Truck"}
                  </span>
                  <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-5 leading-tight">
                    {currentEquipment.title}
                  </h3>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-primary/[0.06] border border-primary/10">
                      <Grid3x3 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                      <div>
                        <span className="block text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-1">Dimensions</span>
                        <span className="text-sm text-foreground">{currentEquipment.specs.dimensions}</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-primary/[0.06] border border-primary/10">
                      <Weight className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                      <div>
                        <span className="block text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-1">Payload</span>
                        <span className="text-sm text-foreground">{currentEquipment.specs.payload}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Thumbnail Nav */}
                <div className="flex gap-2 mt-6">
                  {equipmentData.map((item, index) => (
                    <button
                      key={item.id}
                      onClick={() => goToSlide(index)}
                      className={`flex-1 h-1.5 rounded-full transition-all duration-300 ${
                        index === currentIndex
                          ? 'bg-primary'
                          : 'bg-muted-foreground/20 hover:bg-muted-foreground/40'
                      }`}
                      aria-label={`Go to ${item.title}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default EquipmentSlider;
