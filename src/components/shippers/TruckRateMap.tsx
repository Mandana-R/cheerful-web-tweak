import { ScrollAnimation } from "@/hooks/useScrollAnimation";

const TruckRateMap = () => {
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
            src="/truck-rate-map.html"
            title="Truck Rate Map"
            className="w-full block rounded-2xl"
            style={{ height: "780px", border: "0", background: "transparent" }}
            loading="lazy"
          />
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default TruckRateMap;