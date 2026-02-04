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
const equipmentData: EquipmentItem[] = [{
  id: 1,
  title: "Cargo Van — Low Roof",
  image: "/assets/low-roof.png",
  specs: {
    dimensions: "Cargo floor length 126.0 in (~ 2.5 standard pallets)",
    payload: "~2,600 lbs total payload"
  }
}, {
  id: 2,
  title: "Cargo Van — High Roof",
  image: "/assets/Ford Cargo van.jpg",
  specs: {
    dimensions: "Cargo floor length 144.0 in (3 standard pallets)",
    payload: "~4,000 lbs total payload"
  }
}, {
  id: 3,
  title: "Extended-size Sprinter Vans",
  image: "/assets/Full size Van.jpg",
  specs: {
    dimensions: "Cargo floor length 170.0 in (4 standard pallets)",
    payload: "~4,500 lbs payload"
  }
}, {
  id: 4,
  title: "Straight Truck — Small (12–16 ft)",
  image: "/assets/16_footer.jpg",
  specs: {
    dimensions: "6-8 standard pallets",
    payload: "~5,000 lbs payload"
  }
}, {
  id: 5,
  title: "Straight Truck — Medium (17–20 ft)",
  image: "/assets/Inside the Dock.jpg",
  specs: {
    dimensions: "8–10 standard pallets",
    payload: "~7,000 lbs payload"
  }
}, {
  id: 6,
  title: "Straight Truck — Large (20–26 ft)",
  image: "/assets/26 on the road.jpg",
  specs: {
    dimensions: "10–14 standard pallets",
    payload: "Up to ~10,000 lbs payload"
  }
}];
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
  return;
};
export default EquipmentSlider;