import { useEffect, useRef, useState } from "react";
import { ScrollAnimation } from "@/hooks/useScrollAnimation";

const TruckRateMap = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [iframeHeight, setIframeHeight] = useState(850);

  useEffect(() => {
    const handler = (e: MessageEvent) => {
      if (e.data?.type === "truck-map-resize" && typeof e.data.height === "number") {
        setIframeHeight(e.data.height);
      }
    };
    window.addEventListener("message", handler);
    return () => window.removeEventListener("message", handler);
  }, []);

  return (
    <section className="py-24 border-t border-white/[0.06]">
      <div className="container mx-auto px-6 max-w-[1180px]">
        <div className="text-center mb-12">
          <ScrollAnimation>
            <p className="text-emerald font-display font-semibold tracking-widest uppercase text-xs mb-3">
              Live Capacity Map
            </p>
          </ScrollAnimation>
          <ScrollAnimation delay={100}>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
              Find Available Trucks Near Your Pickup
            </h2>
          </ScrollAnimation>
          <ScrollAnimation delay={200}>
            <p className="text-muted-foreground text-lg max-w-[75ch] mx-auto">
              Enter your origin and destination to see real-time route distance, transit time,
              and available capacity within your pickup radius.
            </p>
          </ScrollAnimation>
        </div>

        <ScrollAnimation animation="fade-up">
          <iframe
            ref={iframeRef}
            src="/truck-rate-map.html"
            title="Truck Rate Map"
            className="w-full block rounded-2xl"
            style={{ height: `${iframeHeight}px`, border: "0", background: "transparent" }}
            scrolling="no"
          />
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default TruckRateMap;