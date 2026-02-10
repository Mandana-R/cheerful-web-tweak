import { useState } from "react";
import { ScrollAnimation } from "@/hooks/useScrollAnimation";

const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    mcNumber: "",
    dotNumber: "",
    equipmentType: "",
    numberOfVehicles: "",
    preferredLanes: "",
    terms: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <section id="apply" className="py-24 bg-card/5 border-t border-white/[0.06]">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <ScrollAnimation>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald/10 border border-emerald/30 text-emerald-light text-sm font-medium mb-6">
              Apply Now
            </span>
          </ScrollAnimation>
          <ScrollAnimation delay={100}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Start<br/><span className="text-emerald">Hauling?</span>
            </h2>
          </ScrollAnimation>
          <ScrollAnimation delay={200}>
            <p className="text-white/55 text-lg md:text-xl max-w-2xl mx-auto">
              Fill out the form below to start your application. Our carrier relations team will 
              review your information and get back to you within 24 hours.
            </p>
          </ScrollAnimation>
        </div>

        <ScrollAnimation delay={300}>
          <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-white/75 mb-2">Company Name *</label>
                  <input 
                    type="text" 
                    className="w-full bg-black/30 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/40 focus:outline-none focus:border-emerald/35 focus:bg-black/40 transition-all" 
                    placeholder="Your Company Name" 
                    required
                    value={formData.companyName}
                    onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/75 mb-2">Contact Name *</label>
                  <input 
                    type="text" 
                    className="w-full bg-black/30 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/40 focus:outline-none focus:border-emerald/35 focus:bg-black/40 transition-all" 
                    placeholder="Your Name" 
                    required
                    value={formData.contactName}
                    onChange={(e) => setFormData({...formData, contactName: e.target.value})}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-white/75 mb-2">Email *</label>
                  <input 
                    type="email" 
                    className="w-full bg-black/30 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/40 focus:outline-none focus:border-emerald/35 focus:bg-black/40 transition-all" 
                    placeholder="email@company.com" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/75 mb-2">Phone *</label>
                  <input 
                    type="tel" 
                    className="w-full bg-black/30 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/40 focus:outline-none focus:border-emerald/35 focus:bg-black/40 transition-all" 
                    placeholder="(555) 123-4567" 
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-white/75 mb-2">MC Number *</label>
                  <input 
                    type="text" 
                    className="w-full bg-black/30 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/40 focus:outline-none focus:border-emerald/35 focus:bg-black/40 transition-all" 
                    placeholder="MC-XXXXXX" 
                    required
                    value={formData.mcNumber}
                    onChange={(e) => setFormData({...formData, mcNumber: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/75 mb-2">DOT Number *</label>
                  <input 
                    type="text" 
                    className="w-full bg-black/30 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/40 focus:outline-none focus:border-emerald/35 focus:bg-black/40 transition-all" 
                    placeholder="XXXXXXX" 
                    required
                    value={formData.dotNumber}
                    onChange={(e) => setFormData({...formData, dotNumber: e.target.value})}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-white/75 mb-2">Equipment Type *</label>
                <select 
                  className="w-full bg-black/30 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-emerald/35 focus:bg-black/40 transition-all"
                  required
                  value={formData.equipmentType}
                  onChange={(e) => setFormData({...formData, equipmentType: e.target.value})}
                >
                  <option value="">Select your equipment</option>
                  <option value="cargo-van">Cargo Van</option>
                  <option value="sprinter">Sprinter Van</option>
                  <option value="16ft">16' Box Truck</option>
                  <option value="26ft">26' Box Truck</option>
                  <option value="multiple">Multiple Vehicles</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-white/75 mb-2">Number of Vehicles</label>
                <select 
                  className="w-full bg-black/30 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-emerald/35 focus:bg-black/40 transition-all"
                  value={formData.numberOfVehicles}
                  onChange={(e) => setFormData({...formData, numberOfVehicles: e.target.value})}
                >
                  <option value="">Select</option>
                  <option value="1">1</option>
                  <option value="2-5">2-5</option>
                  <option value="6-10">6-10</option>
                  <option value="11+">11+</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-white/75 mb-2">Preferred Lanes (Optional)</label>
                <textarea 
                  rows={3} 
                  className="w-full bg-black/30 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/40 focus:outline-none focus:border-emerald/35 focus:bg-black/40 transition-all resize-none" 
                  placeholder="e.g., Midwest to Southeast, Chicago-Dallas, etc."
                  value={formData.preferredLanes}
                  onChange={(e) => setFormData({...formData, preferredLanes: e.target.value})}
                />
              </div>

              <div className="flex items-start gap-3">
                <input 
                  type="checkbox" 
                  id="terms" 
                  className="mt-1.5 w-4 h-4 rounded accent-emerald"
                  required
                  checked={formData.terms}
                  onChange={(e) => setFormData({...formData, terms: e.target.checked})}
                />
                <label htmlFor="terms" className="text-white/55 text-sm">
                  I certify that the information provided is accurate and I agree to the{" "}
                  <a href="#" className="text-emerald-light hover:underline">Terms of Service</a> and{" "}
                  <a href="#" className="text-emerald-light hover:underline">Carrier Agreement</a>.
                </label>
              </div>

              <button 
                type="submit" 
                className="w-full py-5 rounded-xl bg-emerald-dark border border-emerald-dark text-white text-lg font-bold transition-all hover:bg-emerald hover:border-emerald"
              >
                Submit Application
              </button>
            </form>

            <p className="text-center text-white/40 text-sm mt-6">
              Questions? <Link to="/contact" className="text-emerald-light hover:underline">Contact Us</Link> or email{" "}
              <a href="mailto:carriers@smartexpedite.com" className="text-emerald-light hover:underline">carriers@smartexpedite.com</a>
            </p>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default ApplicationForm;
