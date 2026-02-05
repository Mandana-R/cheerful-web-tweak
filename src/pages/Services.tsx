import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ScrollAnimation } from "@/hooks/useScrollAnimation";
import { 
  Zap, Clock, DollarSign, Eye, Truck, Settings, Plane, 
  Heart, UserPlus, CheckCircle, CreditCard
} from "lucide-react";

const Services = () => {
  const diffStats = [
    { icon: Zap, value: "Instant", label: "Carrier Matching" },
    { icon: Clock, value: "≤2 Hrs", label: "Confirmed Pickup" },
    { icon: DollarSign, value: "8% Flat", label: "Unrivaled Rates" },
    { icon: Eye, value: "100%", label: "Full Transparency" },
  ];

  const ribbonItems = [
    "Industrial JIT & Critical Machinery",
    "AOG & Critical Medical Parts",
    "Same-Day & Next-Day Expedite",
    "Direct-to-Shipper STL Logistics",
    "Emergency & Recovery",
  ];

  const steps = [
    { num: "1", title: "Submit Shipment", desc: "Enter origin, destination, and freight details. Rate calculated instantly with full cost breakdown.", time: "30 seconds" },
    { num: "2", title: "Instant Match", desc: "Our system identifies the nearest verified carrier with the right equipment for your freight.", time: "Immediate" },
    { num: "3", title: "Confirmed Dispatch", desc: "Carrier dispatched with driver details, equipment verification, and ETA to your pickup location.", time: "Under 15 min" },
    { num: "4", title: "Pickup & Tracking", desc: "Verified pickup with chain of custody confirmation. Real-time GPS and milestone updates through delivery.", time: "≤2 hours" },
  ];

  const coreServices = [
    {
      icon: Clock,
      title: "Same-Day & Next-Day Expedite",
      subtitle: "Confirmed pickup within 2 hours",
      desc: "The moment you confirm, our platform identifies the nearest carrier with verified credentials and matching equipment. Dispatch happens instantly—not after hours of phone calls. Real-time GPS tracking begins the moment freight is loaded.",
      features: [
        "Instant matching to nearest FMCSA-verified carrier",
        "Confirmed pickup in 2 hours with driver details and equipment verification",
        "Transparent 8% flat fee—carrier rate visible before you book",
      ],
    },
    {
      icon: Truck,
      title: "Direct-to-Shipper STL Logistics",
      subtitle: "No middlemen, no hidden spreads",
      desc: "Small Truckload shipments move direct from your dock to the carrier—no broker layers inflating your costs. You see exactly what the carrier earns, and they see exactly what you pay. Our 8% flat fee is the only margin in the transaction.",
      features: [
        "Direct shipper-to-carrier model eliminates broker spreads",
        "Full rate transparency—you see the carrier's earnings",
        "Flat 8% service fee vs. 30-40% traditional broker markup",
      ],
    },
    {
      icon: Settings,
      title: "Industrial JIT & Critical Machinery",
      subtitle: "Production-critical response",
      desc: "Production stoppages cost thousands per minute. When a line goes down or critical machinery needs to move, our instant carrier matching locates verified equipment within your pickup radius immediately. Direct communication between dispatch and your facility through delivery completion.",
      features: [
        "Priority dispatch with closest available verified capacity",
        "Coordinated delivery windows aligned with production schedules",
        "Heavy machinery and oversized equipment handling",
      ],
    },
    {
      icon: Plane,
      title: "AOG & Critical Medical Parts",
      subtitle: "Aircraft-on-ground & healthcare priority",
      desc: "Grounded aircraft cost upwards of $150,000 per hour. Medical equipment delays impact patient care. Our AOG and medical-critical service triggers immediate carrier matching—identifying the closest verified driver who can reach your parts location fastest. Enhanced security protocols with verified identity confirmation at every handoff.",
      features: [
        "Immediate dispatch—carrier matched and rolling within minutes",
        "Two-factor verification codes at pickup and delivery",
        "Aerospace and medical-grade documentation and audit trail",
      ],
    },
  ];

  const emergencyService = {
    icon: Zap,
    title: "Emergency & Recovery Freight",
    subtitle: "24/7 crisis response",
    desc: "Supply chain disruptions don't follow business hours. Our 24/7 operations team dispatches carriers around the clock with the same instant matching, 2-hour pickup guarantee, and transparent pricing as daytime shipments. No surge markups. No emergency premiums. Whether it's a production line down, a natural disaster recovery, or an urgent parts replacement, we respond with the same operational discipline.",
    features: [
      "24/7/365 dispatch with full operational staffing",
      "Multi-shipment coordination for recovery scenarios",
      "Same transparent pricing—no crisis markups or emergency premiums",
    ],
  };

  const equipmentTypes = [
    {
      title: "Sprinter & Cargo Van",
      badge: "Fastest Dispatch",
      image: "/assets/Cargo_van.jpg",
      desc: "The most responsive equipment class in our network. Positioned across every major metro and industrial corridor for the fastest pickup times on shipments under 4,500 lbs. Access locations larger equipment cannot reach.",
      specs: [
        { val: "2-4", label: "Pallets" },
        { val: "4,500 lbs", label: "Max Payload" },
        { val: "Nationwide", label: "Coverage" },
      ],
    },
    {
      title: "Straight Truck (12–26')",
      badge: "High Capacity",
      image: "/assets/16_footer.jpg",
      desc: "For shipments requiring more capacity than a van but faster service than LTL. Multiple configurations from 12-foot to 26-foot accommodate 6-14 pallets up to 10,000 lbs. Liftgate-equipped units available.",
      specs: [
        { val: "6-14", label: "Pallets" },
        { val: "10,000 lbs", label: "Max Payload" },
        { val: "Liftgate", label: "Available" },
      ],
    },
  ];

  const transparencyFeatures = [
    { icon: Eye, title: "Carrier Rate Visible", desc: "See exactly what the truck gets paid on every quote" },
    { icon: DollarSign, title: "8% Flat Fee", desc: "Same percentage on every shipment—no exceptions" },
    { icon: CreditCard, title: "No Hidden Charges", desc: "The quote you see is the price you pay—period" },
  ];

  const valueAddedServices = [
    {
      icon: Heart,
      title: "White-Glove & Controlled Delivery",
      subtitle: "Premium handling standards",
      desc: "Inside delivery, product placement, and precise appointment coordination. Photographic documentation confirms delivery condition and final placement.",
      features: [
        "Inside delivery with product placement",
        "Scheduled appointment coordination",
        "Photo documentation of final placement",
      ],
    },
    {
      icon: UserPlus,
      title: "Dedicated & Contract Expedite",
      subtitle: "Consistent capacity commitment",
      desc: "Consistent carrier assignment with locked-in rates for regular expedited volumes. Carriers develop familiarity with your facilities and requirements.",
      features: [
        "Consistent carrier assignment on defined lanes",
        "Contracted rates with spot market protection",
        "Service level agreements with guarantees",
      ],
    },
    {
      icon: Truck,
      title: "Plant-to-Plant & Inter-Facility",
      subtitle: "Internal logistics coordination",
      desc: "Coordinated transfers between your own facilities with synchronized scheduling aligned to production cycles. Multi-stop routing for consolidation moves.",
      features: [
        "Coordinated multi-facility scheduling",
        "Multi-stop routing for consolidation",
        "Full documentation for audit compliance",
      ],
    },
  ];

  const ctaFeatures = [
    "Instant Carrier Matching",
    "2-Hour Pickup Guarantee",
    "8% Flat—No Hidden Fees",
    "100% Transparent Pricing",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="pt-[72px] min-h-[75vh] flex flex-col justify-center relative overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/26 on the road.jpg')" }}
      >
        <div className="absolute inset-0 gradient-hero-overlay z-[1]" />
        <div 
          className="absolute top-0 right-0 w-[60%] h-full z-[2] pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 80% 20%, rgba(16,185,129,0.06) 0%, transparent 60%)" }}
        />
        
        <div className="container mx-auto px-6 max-w-[1180px] relative z-[3]">
          <div className="max-w-[780px] mx-auto text-center py-16">
            <ScrollAnimation>
              <span className="inline-flex items-center gap-2.5 border border-emerald/25 bg-emerald/[0.08] px-4 py-2.5 rounded-full text-emerald-light text-[13px] font-semibold mb-6">
                <span className="w-2 h-2 rounded-full bg-emerald shadow-[0_0_0_4px_rgba(16,185,129,0.15)] animate-pulse" />
                Instant Carrier Matching • Confirmed Pickup ≤2 Hours
              </span>
            </ScrollAnimation>
            
            <ScrollAnimation delay={100}>
              <h1 className="font-display text-4xl md:text-5xl lg:text-[58px] font-bold text-white leading-[1.08] tracking-tight mb-4">
                Unrivaled Rates.<br/>
                <span className="text-emerald">Instant Dispatch.</span><br/>
                Complete Transparency.
              </h1>
            </ScrollAnimation>
            
            <ScrollAnimation delay={200}>
              <p className="text-white/75 text-base md:text-lg max-w-[68ch] mx-auto leading-relaxed mb-8">
                We match your shipment to the <strong className="text-white">nearest available verified carrier instantly</strong>—with confirmed pickup in 2 hours or less. Our flat 8% service fee delivers unrivaled rates while showing you exactly what the carrier earns. No hidden spreads. No broker games. Just execution.
              </p>
            </ScrollAnimation>
            
            <ScrollAnimation delay={300}>
              <div className="flex flex-wrap gap-3.5 justify-center">
                <Link
                  to="/shippers"
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-lg border border-emerald-dark bg-emerald-dark text-white text-[15px] font-bold transition-all hover:bg-emerald hover:border-emerald"
                >
                  Get an Instant Quote
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-lg border border-white/10 bg-white/[0.03] text-white text-[15px] font-bold transition-all hover:bg-white/[0.06]"
                >
                  Contact Operations
                </Link>
              </div>
            </ScrollAnimation>

            {/* Differentiator Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-12">
              {diffStats.map((stat, i) => (
                <ScrollAnimation key={i} delay={400 + i * 100}>
                  <div className="bg-white/[0.02] border border-white/10 rounded-xl p-6 text-center transition-all hover:border-emerald/30 hover:bg-emerald/[0.04]">
                    <div className="w-12 h-12 rounded-lg bg-emerald/[0.08] border border-emerald/20 flex items-center justify-center mx-auto mb-3">
                      <stat.icon className="w-6 h-6 text-emerald" />
                    </div>
                    <div className="font-display text-2xl font-bold text-emerald mb-1">{stat.value}</div>
                    <div className="text-muted-foreground text-sm">{stat.label}</div>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Ribbon */}
      <section className="py-16 border-t border-white/[0.06]">
        <div className="container mx-auto px-6 max-w-[1180px]">
          <ScrollAnimation>
            <div className="flex items-center justify-center gap-0 bg-gradient-to-br from-emerald/[0.06] to-emerald/[0.02] border border-emerald/15 rounded-2xl py-7 px-10 flex-wrap">
              {ribbonItems.map((item, i) => (
                <div key={i} className="flex items-center">
                  <div className="px-6 py-2">
                    <span className="font-display text-[15px] font-semibold text-emerald whitespace-nowrap">{item}</span>
                  </div>
                  {i < ribbonItems.length - 1 && (
                    <span className="text-emerald/35 text-xl font-light hidden md:inline">|</span>
                  )}
                </div>
              ))}
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 border-t border-white/[0.06]">
        <div className="container mx-auto px-6 max-w-[1180px]">
          <div className="text-center mb-12">
            <ScrollAnimation>
              <p className="text-emerald font-display font-semibold tracking-widest uppercase text-xs mb-3">How It Works</p>
            </ScrollAnimation>
            <ScrollAnimation delay={100}>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">From Quote to Pickup in Under 2 Hours</h2>
            </ScrollAnimation>
            <ScrollAnimation delay={200}>
              <p className="text-muted-foreground text-lg max-w-[68ch] mx-auto">
                Our platform instantly matches your shipment to the nearest available carrier. No waiting. No phone tag. No uncertainty.
              </p>
            </ScrollAnimation>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 relative">
            {/* Connection line */}
            <div className="hidden lg:block absolute top-7 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-emerald to-emerald-light opacity-25" />
            
            {steps.map((step, i) => (
              <ScrollAnimation key={i} delay={i * 150}>
                <div className="text-center relative">
                  <div className="w-14 h-14 rounded-full border-2 border-emerald/30 bg-emerald/[0.08] flex items-center justify-center mx-auto mb-5 relative z-10">
                    <span className="font-display text-xl font-bold text-emerald">{step.num}</span>
                  </div>
                  <h4 className="font-display text-white font-semibold text-lg mb-2">{step.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-3">{step.desc}</p>
                  <span className="inline-block px-3 py-1 bg-emerald/[0.08] border border-emerald/20 rounded-full text-xs font-semibold text-emerald">
                    {step.time}
                  </span>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Core Speed Services */}
      <section className="py-24 border-t border-white/[0.06]">
        <div className="container mx-auto px-6 max-w-[1180px]">
          <div className="text-center mb-12">
            <ScrollAnimation>
              <p className="text-emerald font-display font-semibold tracking-widest uppercase text-xs mb-3">Core Speed Services</p>
            </ScrollAnimation>
            <ScrollAnimation delay={100}>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">Time-Critical Expedited Freight</h2>
            </ScrollAnimation>
            <ScrollAnimation delay={200}>
              <p className="text-muted-foreground text-lg max-w-[68ch] mx-auto">
                When minutes matter, our instant carrier matching and 2-hour pickup guarantee deliver execution you can count on—at rates that outperform traditional brokers.
              </p>
            </ScrollAnimation>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {coreServices.map((service, i) => (
              <ScrollAnimation key={i} delay={i * 100}>
                <div className="border border-white/10 rounded-xl bg-white/[0.02] p-7 transition-all hover:border-emerald/30 hover:bg-emerald/[0.03] hover:-translate-y-1 h-full">
                  <div className="w-[54px] h-[54px] rounded-lg bg-emerald/[0.08] border border-emerald/20 flex items-center justify-center mb-5">
                    <service.icon className="w-6 h-6 text-emerald" />
                  </div>
                  <h4 className="font-display text-white font-semibold text-lg mb-1">{service.title}</h4>
                  <div className="text-emerald text-sm font-semibold mb-4">{service.subtitle}</div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-5">{service.desc}</p>
                  <ul className="space-y-0">
                    {service.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-2.5 py-2.5 border-t border-white/[0.06] first:border-t-0 first:pt-0 text-sm text-foreground/90">
                        <CheckCircle className="w-4 h-4 text-emerald flex-shrink-0 mt-0.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollAnimation>
            ))}
          </div>

          {/* Emergency Service - Full Width */}
          <ScrollAnimation delay={400}>
            <div className="border border-white/10 rounded-xl bg-white/[0.02] p-7 mt-5 transition-all hover:border-emerald/30 hover:bg-emerald/[0.03]">
              <div className="w-[54px] h-[54px] rounded-lg bg-emerald/[0.08] border border-emerald/20 flex items-center justify-center mb-5">
                <emergencyService.icon className="w-6 h-6 text-emerald" />
              </div>
              <h4 className="font-display text-white font-semibold text-lg mb-1">{emergencyService.title}</h4>
              <div className="text-emerald text-sm font-semibold mb-4">{emergencyService.subtitle}</div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">{emergencyService.desc}</p>
              <ul className="space-y-0">
                {emergencyService.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-2.5 py-2.5 border-t border-white/[0.06] first:border-t-0 first:pt-0 text-sm text-foreground/90">
                    <CheckCircle className="w-4 h-4 text-emerald flex-shrink-0 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Equipment Options */}
      <section className="py-24 border-t border-white/[0.06]">
        <div className="container mx-auto px-6 max-w-[1180px]">
          <div className="text-center mb-12">
            <ScrollAnimation>
              <p className="text-emerald font-display font-semibold tracking-widest uppercase text-xs mb-3">Equipment Options</p>
            </ScrollAnimation>
            <ScrollAnimation delay={100}>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">Right-Sized Capacity, Instantly Matched</h2>
            </ScrollAnimation>
            <ScrollAnimation delay={200}>
              <p className="text-muted-foreground text-lg max-w-[68ch] mx-auto">
                Our network spans thousands of verified vehicles nationwide. When you book, we match you to the nearest available equipment—not whoever happens to call back first.
              </p>
            </ScrollAnimation>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {equipmentTypes.map((equipment, i) => (
              <ScrollAnimation key={i} delay={i * 150} animation="fade-up">
                <div className="group relative rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2">
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <img 
                      src={equipment.image} 
                      alt={equipment.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30" />
                  </div>
                  
                  {/* Content */}
                  <div className="relative p-8 min-h-[420px] flex flex-col justify-end">
                    {/* Badge */}
                    <span className="absolute top-6 right-6 px-3 py-1.5 bg-emerald/90 backdrop-blur-sm rounded-full text-[11px] font-bold text-white uppercase tracking-wider shadow-lg shadow-emerald/20">
                      {equipment.badge}
                    </span>
                    
                    {/* Title & Description */}
                    <h4 className="font-display text-white font-bold text-2xl md:text-3xl mb-3 leading-tight">
                      {equipment.title}
                    </h4>
                    <p className="text-white/70 text-sm md:text-base leading-relaxed mb-6 max-w-[90%]">
                      {equipment.desc}
                    </p>
                    
                    {/* Specs Grid */}
                    <div className="grid grid-cols-3 gap-2 sm:gap-4">
                      {equipment.specs.map((spec, j) => (
                        <div 
                          key={j} 
                          className="bg-white/[0.08] backdrop-blur-sm border border-white/10 rounded-lg sm:rounded-xl p-2.5 sm:p-4 text-center transition-all group-hover:bg-white/[0.12] group-hover:border-emerald/20"
                        >
                          <div className="font-display text-base sm:text-xl md:text-2xl font-bold text-emerald mb-0.5 sm:mb-1">
                            {spec.val}
                          </div>
                          <div className="text-[9px] sm:text-[11px] text-white/50 uppercase tracking-wide leading-tight">
                            {spec.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Transparency Section */}
      <section className="py-24 border-t border-white/[0.06]">
        <div className="container mx-auto px-6 max-w-[1180px]">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimation animation="fade-left">
              <div>
                <p className="text-emerald font-display font-semibold tracking-widest uppercase text-xs mb-3">Complete Transparency</p>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
                  You See Everything.<br/>We Hide Nothing.
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  Traditional brokers pocket 30-40% while telling carriers the shipper "won't pay more." We eliminated that model entirely. Our flat 8% is the same for every shipment—and you see exactly what the carrier receives before you book.
                </p>
                
                <ul className="space-y-0">
                  {transparencyFeatures.map((feature, i) => (
                    <li key={i} className="flex items-center gap-4 py-4 border-b border-white/[0.06] last:border-b-0">
                      <div className="w-11 h-11 rounded-lg bg-emerald/[0.08] border border-emerald/20 flex items-center justify-center flex-shrink-0">
                        <feature.icon className="w-5 h-5 text-emerald" />
                      </div>
                      <div>
                        <strong className="block text-white font-semibold text-[15px] mb-0.5">{feature.title}</strong>
                        <span className="text-muted-foreground/60 text-sm">{feature.desc}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-right" delay={200}>
              <div className="bg-background border border-white/10 rounded-2xl p-8">
                <div className="text-xs text-muted-foreground/60 uppercase tracking-widest text-center mb-5">Sample Quote Breakdown</div>
                <div className="bg-black/35 border border-white/10 rounded-xl p-5">
                  <div className="flex justify-between py-3 border-b border-white/[0.06]">
                    <span className="text-muted-foreground text-sm">Carrier Rate</span>
                    <span className="text-white font-bold text-sm">$850.00</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-white/[0.06]">
                    <span className="text-muted-foreground text-sm">Service Fee (8%)</span>
                    <span className="text-white font-bold text-sm">$68.00</span>
                  </div>
                  <div className="flex justify-between py-4 border-t border-emerald mt-2">
                    <span className="text-white font-bold">Your Total</span>
                    <span className="text-emerald font-bold text-xl font-display">$918.00</span>
                  </div>
                </div>
                <p className="text-center text-muted-foreground/60 text-sm mt-4 leading-relaxed">
                  Traditional brokers would charge <strong className="text-emerald">$1,100–$1,200</strong> for this same lane.<br/>
                  You save. The carrier earns more. Everyone wins.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Value-Added Services */}
      <section className="py-24 border-t border-white/[0.06]">
        <div className="container mx-auto px-6 max-w-[1180px]">
          <div className="text-center mb-12">
            <ScrollAnimation>
              <p className="text-emerald font-display font-semibold tracking-widest uppercase text-xs mb-3">Value-Added Services</p>
            </ScrollAnimation>
            <ScrollAnimation delay={100}>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">Specialized Freight Solutions</h2>
            </ScrollAnimation>
            <ScrollAnimation delay={200}>
              <p className="text-muted-foreground text-lg max-w-[68ch] mx-auto">
                Extended capabilities for shipments requiring additional handling, security, or coordination—all with the same instant matching, transparent pricing, and 2-hour pickup commitment.
              </p>
            </ScrollAnimation>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {valueAddedServices.map((service, i) => (
              <ScrollAnimation key={i} delay={i * 100}>
                <div className="border border-white/10 rounded-xl bg-white/[0.02] p-7 transition-all hover:border-emerald/30 hover:bg-emerald/[0.03] hover:-translate-y-1 h-full">
                  <div className="w-[54px] h-[54px] rounded-lg bg-emerald/[0.08] border border-emerald/20 flex items-center justify-center mb-5">
                    <service.icon className="w-6 h-6 text-emerald" />
                  </div>
                  <h4 className="font-display text-white font-semibold text-lg mb-1">{service.title}</h4>
                  <div className="text-emerald text-sm font-semibold mb-4">{service.subtitle}</div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-5">{service.desc}</p>
                  <ul className="space-y-0">
                    {service.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-2.5 py-2.5 border-t border-white/[0.06] first:border-t-0 first:pt-0 text-sm text-foreground/90">
                        <CheckCircle className="w-4 h-4 text-emerald flex-shrink-0 mt-0.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 border-t border-white/[0.06]">
        <div className="container mx-auto px-6 max-w-[1180px]">
          <ScrollAnimation animation="scale">
            <div className="bg-gradient-to-br from-emerald/10 to-emerald/5 border border-emerald/20 rounded-2xl p-12 text-center">
              <p className="text-emerald font-display font-semibold tracking-widest uppercase text-xs mb-3">Ready to Ship?</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
                Unrivaled Rates. Instant Dispatch. Full Transparency.
              </h2>
              <p className="text-muted-foreground text-lg max-w-[58ch] mx-auto mb-8">
                Get a quote in seconds. See exactly what you pay and what the carrier receives. Pickup confirmed in 2 hours or less.
              </p>
              <div className="flex flex-wrap gap-3.5 justify-center mb-8">
                <Link
                  to="/shippers"
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-lg border border-emerald-dark bg-emerald-dark text-white text-[15px] font-bold transition-all hover:bg-emerald hover:border-emerald"
                >
                  Get an Instant Quote
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-lg border border-white/10 bg-white/[0.03] text-white text-[15px] font-bold transition-all hover:bg-white/[0.06]"
                >
                  Contact Operations
                </Link>
              </div>
              <div className="flex flex-wrap justify-center gap-8">
                {ctaFeatures.map((feature, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-foreground/90 font-semibold">
                    <CheckCircle className="w-[18px] h-[18px] text-emerald" />
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
