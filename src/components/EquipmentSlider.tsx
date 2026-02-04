import { useEffect, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight, Grid3x3, Plus } from "lucide-react";
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

  const goToNext = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(prev => (prev + 1) % equipmentData.length);
    setTimeout(() => setIsTransitioning(false), 500);
  }, [isTransitioning]);

  const goToPrev = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(prev => (prev - 1 + equipmentData.length) % equipmentData.length);
    setTimeout(() => setIsTransitioning(false), 500);
  }, [isTransitioning]);

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentIndex) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  // Auto-slide every 4 seconds
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
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <ScrollAnimation>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
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
          <div className="relative max-w-4xl mx-auto">
            {/* Main Slider Card */}
            <div className="relative overflow-hidden rounded-2xl bg-card border border-border shadow-xl">
              <div className="relative aspect-[16/9]">
                <img
                  src={currentEquipment.image}
                  alt={currentEquipment.title}
                  className="w-full h-full object-cover transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                    {currentEquipment.title}
                  </h3>
                  <div className="flex flex-col sm:flex-row gap-4 text-white/90">
                    <div className="flex items-center gap-2">
                      <Grid3x3 className="w-5 h-5 text-primary" />
                      <span className="text-sm">{currentEquipment.specs.dimensions}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Plus className="w-5 h-5 text-primary" />
                      <span className="text-sm">{currentEquipment.specs.payload}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={goToPrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                aria-label="Previous equipment"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                aria-label="Next equipment"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {equipmentData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-primary w-8' 
                      : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default EquipmentSlider;