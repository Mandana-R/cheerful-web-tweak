import { useEffect, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight, Grid3x3, Plus } from "lucide-react";

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
    image: "/assets/low-roof.png",
    specs: {
      dimensions: "Cargo floor length 126.0 in (~ 2.5 standard pallets)",
      payload: "~2,600 lbs total payload",
    },
  },
  {
    id: 2,
    title: "Cargo Van — High Roof",
    image: "/assets/Ford Cargo van.jpg",
    specs: {
      dimensions: "Cargo floor length 144.0 in (3 standard pallets)",
      payload: "~4,000 lbs total payload",
    },
  },
  {
    id: 3,
    title: "Extended-size Sprinter Vans",
    image: "/assets/Full size Van.jpg",
    specs: {
      dimensions: "Cargo floor length 170.0 in (4 standard pallets)",
      payload: "~4,500 lbs payload",
    },
  },
  {
    id: 4,
    title: "Straight Truck — Small (12–16 ft)",
    image: "/assets/16_footer.jpg",
    specs: {
      dimensions: "6-8 standard pallets",
      payload: "~5,000 lbs payload",
    },
  },
  {
    id: 5,
    title: "Straight Truck — Medium (17–20 ft)",
    image: "/assets/Inside the Dock.jpg",
    specs: {
      dimensions: "8–10 standard pallets",
      payload: "~7,000 lbs payload",
    },
  },
  {
    id: 6,
    title: "Straight Truck — Large (20–26 ft)",
    image: "/assets/26 on the road.jpg",
    specs: {
      dimensions: "10–14 standard pallets",
      payload: "Up to ~10,000 lbs payload",
    },
  },
];

const EquipmentSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToNext = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % equipmentData.length);
    setTimeout(() => setIsTransitioning(false), 500);
  }, [isTransitioning]);

  const goToPrev = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev - 1 + equipmentData.length) % equipmentData.length);
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
    <section className="py-24 border-t border-white/[0.06]">
      <div className="container mx-auto px-6 max-w-[1180px]">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-emerald font-display font-semibold tracking-[0.06em] uppercase text-xs mb-3">
            Operating Scope
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-[44px] font-bold text-white leading-tight tracking-tight mb-4">
            Equipment for Every Expedited Need
          </h2>
          <p className="text-white/75 text-base md:text-lg max-w-[68ch] mx-auto leading-relaxed">
            Smart Expedite supports expedited freight movement nationwide using the following equipment types. 
            Availability is lane-specific and subject to operational constraints.
          </p>
        </div>

        {/* Slider Container */}
        <div 
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Main Slider Card */}
          <div className="relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.02]">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Image Side */}
              <div className="relative h-[300px] md:h-[400px] overflow-hidden">
                <img
                  src={currentEquipment.image}
                  alt={currentEquipment.title}
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
                    isTransitioning ? "opacity-0 scale-105" : "opacity-100 scale-100"
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background/80 md:bg-gradient-to-r md:from-transparent md:to-card/60" />
                
                {/* Slide Counter Badge */}
                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm border border-white/10 rounded-full px-3 py-1.5 flex items-center gap-2">
                  <span className="text-emerald font-display font-bold text-sm">{currentIndex + 1}</span>
                  <span className="text-white/50 text-xs">/</span>
                  <span className="text-white/50 text-xs">{equipmentData.length}</span>
                </div>
              </div>

              {/* Content Side */}
              <div className="p-6 md:p-10 flex flex-col justify-center">
                <div className={`transition-all duration-500 ${
                  isTransitioning ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
                }`}>
                  <h3 className="font-display text-xl md:text-2xl font-semibold text-white mb-6">
                    {currentEquipment.title}
                  </h3>
                  
                  <div className="space-y-4">
                    {/* Dimensions Spec */}
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-emerald-subtle border border-emerald/15 flex items-center justify-center flex-shrink-0">
                        <Grid3x3 className="w-5 h-5 text-emerald" />
                      </div>
                      <div>
                        <p className="text-white/50 text-xs uppercase tracking-wide mb-1">Capacity</p>
                        <p className="text-white/80 text-sm leading-relaxed">{currentEquipment.specs.dimensions}</p>
                      </div>
                    </div>

                    {/* Payload Spec */}
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-emerald-subtle border border-emerald/15 flex items-center justify-center flex-shrink-0">
                        <Plus className="w-5 h-5 text-emerald" />
                      </div>
                      <div>
                        <p className="text-white/50 text-xs uppercase tracking-wide mb-1">Payload</p>
                        <p className="text-white/80 text-sm leading-relaxed">{currentEquipment.specs.payload}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 md:-translate-x-6 z-10 w-12 h-12 rounded-full bg-card border border-white/10 flex items-center justify-center transition-all hover:bg-white/5 hover:border-emerald/25 hover:scale-110"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5 text-white/70" />
          </button>
          
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 md:translate-x-6 z-10 w-12 h-12 rounded-full bg-card border border-white/10 flex items-center justify-center transition-all hover:bg-white/5 hover:border-emerald/25 hover:scale-110"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5 text-white/70" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {equipmentData.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? "bg-emerald w-6" 
                    : "bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EquipmentSlider;
