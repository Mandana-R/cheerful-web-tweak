import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle, DollarSign, Clock, Shield, Truck, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Carriers = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="pt-[72px] min-h-screen flex items-center justify-center relative overflow-hidden bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "linear-gradient(180deg, rgba(10,10,10,0.75) 0%, rgba(10,10,10,0.92) 60%, rgba(10,10,10,1) 100%), url('/assets/26 on the road.jpg')" }}
      >
        <div className="container mx-auto px-6 max-w-7xl text-center py-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald/10 border border-emerald/30 text-emerald-light text-sm font-medium mb-8">
            <CheckCircle className="w-4 h-4" />
            <span>Trusted by 8,500+ Owner-Operators Nationwide</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6">
            The Industry's First Direct-to-Shipper Network.
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
            We have eliminated the "black box" of traditional brokerage. For the first time in the U.S., you haul for the shipper, not a middleman. 
            Access 100% of the shipper's rate with total transparency and a flat, disclosed platform fee.
            Join a network built by former carriers who understand what you need.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-16">
            <Link
              to="/account"
              className="inline-flex items-center justify-center gap-2.5 px-12 py-5 rounded-xl bg-gradient-to-r from-green-500 to-emerald text-white text-lg font-bold shadow-lg shadow-emerald/30 transition-all hover:shadow-emerald/40 hover:-translate-y-0.5"
            >
              <CheckCircle className="w-6 h-6" />
              Apply to Join Network
            </Link>
            <a
              href="#quickpay"
              className="inline-flex items-center justify-center gap-2.5 px-12 py-5 rounded-xl bg-background border border-gray-700 text-white text-lg font-bold transition-all hover:bg-charcoal-light hover:border-emerald"
            >
              <DollarSign className="w-6 h-6" />
              See QuickPay Options
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {["Transparent Rates", "24-Hour QuickPay", "Direct Shipper Loads", "No Double-Brokering"].map((item, i) => (
              <div key={i} className="flex items-center justify-center gap-3 text-gray-300">
                <CheckCircle className="w-5 h-5 text-emerald" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-[#1A1A1A] py-20 border-y border-gray-800">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
            {[
              { value: "$2.15", label: "Average Rate Per Mile" },
              { value: "24hr", label: "QuickPay Processing" },
              { value: "2,500+", label: "Active Carriers" },
              { value: "98%", label: "Carrier Satisfaction" },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-green-500 via-green-400 to-emerald bg-clip-text text-transparent mb-3">
                  {stat.value}
                </div>
                <p className="text-gray-400 text-sm md:text-base">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-background">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <p className="text-emerald font-semibold tracking-widest uppercase text-xs mb-3">Why Carriers Choose Us</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Built by Carriers, for Carriers</h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              We've experienced the frustrations of traditional brokerage firsthand. That's why we built a platform that puts carriers first.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: DollarSign, title: "Transparent Rates", desc: "See exactly what the shipper pays. No hidden spreads—our 6% platform fee is disclosed upfront." },
              { icon: Clock, title: "24-Hour QuickPay", desc: "Get paid within 24 hours at just 2%. Or choose same-day payment at 3%. No more waiting 30+ days." },
              { icon: Truck, title: "Direct Shipper Loads", desc: "Haul for the actual shipper, not through layers of middlemen. Know exactly who your freight is for." },
              { icon: Shield, title: "No Double-Brokering", desc: "Every load is verified. We never re-broker freight. Your rate confirmation means something here." },
              { icon: Users, title: "24/7 Dispatch Support", desc: "Real people who answer the phone. Problems get solved, not ignored. We've been where you are." },
              { icon: CheckCircle, title: "Performance Rewards", desc: "Build your reputation on our platform. High performers get priority access to premium loads." },
            ].map((feature, i) => (
              <div key={i} className="bg-[#1A1A1A] border border-gray-800 rounded-2xl p-8 transition-all hover:border-emerald/50 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/30">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald/20 to-emerald/5 border border-emerald/30 flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-emerald" />
                </div>
                <h4 className="text-white font-bold text-xl mb-3">{feature.title}</h4>
                <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QuickPay Section */}
      <section id="quickpay" className="py-24 bg-[#1A1A1A] border-y border-gray-800">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <p className="text-emerald font-semibold tracking-widest uppercase text-xs mb-3">QuickPay Options</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get Paid on Your Schedule</h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Choose how fast you want to get paid. Simple, transparent fees with no surprises.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { title: "Same Day", fee: "3%", desc: "Funds available same business day. Perfect for immediate needs.", featured: false },
              { title: "24-Hour", fee: "2%", desc: "Funds available next business day. Most popular option.", featured: true },
              { title: "Standard", fee: "0%", desc: "Net 30 payment terms. No fees, just patience.", featured: false },
            ].map((option, i) => (
              <div
                key={i}
                className={`rounded-3xl p-8 text-center transition-all hover:-translate-y-2 ${
                  option.featured
                    ? "bg-gradient-to-br from-emerald/15 to-[#1A1A1A] border-2 border-emerald scale-[1.02]"
                    : "bg-[#111] border border-gray-800"
                }`}
              >
                {option.featured && (
                  <span className="inline-block bg-emerald text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
                    Most Popular
                  </span>
                )}
                <h3 className="text-2xl font-bold text-white mb-2">{option.title}</h3>
                <div className="text-5xl font-black bg-gradient-to-r from-green-500 to-emerald bg-clip-text text-transparent mb-4">
                  {option.fee}
                </div>
                <p className="text-gray-400 mb-6">{option.desc}</p>
                <Link
                  to="/account"
                  className={`inline-flex items-center justify-center w-full py-4 rounded-xl font-bold transition-all ${
                    option.featured
                      ? "bg-gradient-to-r from-green-500 to-emerald text-white shadow-lg shadow-emerald/30 hover:shadow-emerald/40"
                      : "bg-[#1A1A1A] border border-gray-700 text-white hover:border-emerald"
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Section */}
      <section id="equipment" className="py-24 bg-background">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <p className="text-emerald font-semibold tracking-widest uppercase text-xs mb-3">Equipment Types</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">We Need Capacity</h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Looking for reliable carriers with cargo vans, sprinters, and straight trucks for expedited freight.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { image: "/assets/Cargo_van.jpg", title: "Cargo Van", desc: "Low roof vans for smaller expedited shipments." },
              { image: "/assets/Ford Cargo van.jpg", title: "Cargo Van — High Roof", desc: "Extended capacity for larger urgent loads." },
              { image: "/assets/Full size Van.jpg", title: "Sprinter Van", desc: "Full-size sprinters for maximum van capacity." },
              { image: "/assets/16_footer.jpg", title: "Small Straight Truck", desc: "12-16 ft box trucks for medium loads." },
              { image: "/assets/Inside the Dock.jpg", title: "Medium Straight Truck", desc: "17-20 ft trucks for larger shipments." },
              { image: "/assets/26 on the road.jpg", title: "Large Straight Truck", desc: "20-26 ft trucks for full-size loads." },
            ].map((equip, i) => (
              <div key={i} className="bg-[#1A1A1A] border border-gray-800 rounded-2xl overflow-hidden transition-all hover:border-emerald/50 hover:-translate-y-1">
                <img src={equip.image} alt={equip.title} className="w-full h-[200px] object-cover" />
                <div className="p-6">
                  <h4 className="text-white font-bold text-lg mb-2">{equip.title}</h4>
                  <p className="text-gray-400 text-sm">{equip.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="apply" className="py-24 bg-[#1A1A1A] border-t border-gray-800">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <p className="text-emerald font-semibold tracking-widest uppercase text-xs mb-3">Join the Network</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Earn What You Deserve?</h2>
          <p className="text-gray-400 text-lg mb-8">
            Apply today and start hauling direct shipper loads with transparent rates and fast payment options.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/account"
              className="inline-flex items-center justify-center gap-2.5 px-12 py-5 rounded-xl bg-gradient-to-r from-green-500 to-emerald text-white text-lg font-bold shadow-lg shadow-emerald/30 transition-all hover:shadow-emerald/40 hover:-translate-y-0.5"
            >
              Apply Now
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2.5 px-12 py-5 rounded-xl bg-background border border-gray-700 text-white text-lg font-bold transition-all hover:bg-charcoal-light hover:border-emerald"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Carriers;
