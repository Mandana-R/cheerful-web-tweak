import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ScrollAnimation } from "@/hooks/useScrollAnimation";

const Account = () => {
  const [activeTab, setActiveTab] = useState<"login" | "signup">("login");

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-[140px] pb-20">
        <div className="container mx-auto px-6 max-w-[1180px]">
          {/* Tabs */}
          <ScrollAnimation>
            <div className="flex gap-2 mb-6 justify-center">
              <button
                onClick={() => setActiveTab("login")}
                className={`px-5 py-3 rounded-xl border font-bold text-sm transition-all ${
                  activeTab === "login"
                    ? "text-emerald-light bg-emerald/10 border-emerald/25"
                    : "text-muted-foreground border-transparent hover:text-white hover:bg-white/[0.04]"
                }`}
              >
                Login
              </button>
              <button
                onClick={() => setActiveTab("signup")}
                className={`px-5 py-3 rounded-xl border font-bold text-sm transition-all ${
                  activeTab === "signup"
                    ? "text-emerald-light bg-emerald/10 border-emerald/25"
                    : "text-muted-foreground border-transparent hover:text-white hover:bg-white/[0.04]"
                }`}
              >
                Create Account
              </button>
            </div>
          </ScrollAnimation>

          {/* Login Panel */}
          {activeTab === "login" && (
            <ScrollAnimation animation="scale">
              <div className="max-w-[480px] mx-auto">
                <div className="border border-white/[0.12] rounded-2xl bg-card/5 backdrop-blur-lg p-8">
                  <h2 className="font-display text-2xl font-bold text-white text-center mb-2">Welcome Back</h2>
                  <p className="text-muted-foreground text-center mb-7">Login to access your Smart Expedite account</p>
                  
                  <form className="space-y-4">
                    <div>
                      <label className="block font-bold text-xs tracking-wide uppercase text-muted-foreground/60 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="you@company.com"
                        className="w-full border border-white/10 bg-black/30 rounded-lg px-4 py-3.5 text-white placeholder:text-white/40 outline-none transition-all focus:border-emerald/35 focus:bg-black/40"
                      />
                    </div>
                    <div>
                      <label className="block font-bold text-xs tracking-wide uppercase text-muted-foreground/60 mb-2">
                        Password
                      </label>
                      <input
                        type="password"
                        placeholder="••••••••"
                        className="w-full border border-white/10 bg-black/30 rounded-lg px-4 py-3.5 text-white placeholder:text-white/40 outline-none transition-all focus:border-emerald/35 focus:bg-black/40"
                      />
                    </div>
                    <div className="flex justify-between items-center">
                      <label className="flex items-center gap-2 text-muted-foreground text-sm cursor-pointer">
                        <input type="checkbox" className="w-4 h-4 accent-emerald" />
                        Remember me
                      </label>
                      <a href="#" className="text-emerald-light text-sm font-semibold">Forgot password?</a>
                    </div>
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-lg border border-emerald-dark bg-emerald-dark text-white text-sm font-bold transition-all hover:bg-emerald hover:border-emerald mt-2"
                    >
                      Login
                    </button>
                  </form>
                  
                  <div className="h-px bg-white/10 my-5" />
                  <p className="text-center text-muted-foreground text-sm">
                    Don't have an account?{" "}
                    <button onClick={() => setActiveTab("signup")} className="text-emerald-light font-bold">
                      Create one now
                    </button>
                  </p>
                </div>
              </div>
            </ScrollAnimation>
          )}

          {/* Signup Panel */}
          {activeTab === "signup" && (
            <ScrollAnimation animation="scale">
              <div className="max-w-[600px] mx-auto">
                <div className="border border-white/[0.12] rounded-2xl bg-card/5 backdrop-blur-lg p-8">
                  <h2 className="font-display text-2xl font-bold text-white text-center mb-2">Create Your Account</h2>
                  <p className="text-muted-foreground text-center mb-7">Join Smart Expedite as a shipper or carrier</p>
                  
                  <form className="space-y-4">
                    {/* Account Type */}
                    <div>
                      <label className="block font-bold text-xs tracking-wide uppercase text-muted-foreground/60 mb-2">
                        Account Type
                      </label>
                      <div className="grid grid-cols-2 gap-3">
                        <label className="border border-white/[0.12] rounded-xl bg-white/[0.03] p-4 cursor-pointer flex items-center gap-3.5 hover:border-emerald/25 transition-all">
                          <input type="radio" name="accountType" value="shipper" defaultChecked className="w-5 h-5 accent-emerald" />
                          <div>
                            <strong className="text-white block">Shipper</strong>
                            <p className="text-muted-foreground text-sm">I need to ship freight</p>
                          </div>
                        </label>
                        <label className="border border-white/[0.12] rounded-xl bg-white/[0.03] p-4 cursor-pointer flex items-center gap-3.5 hover:border-emerald/25 transition-all">
                          <input type="radio" name="accountType" value="carrier" className="w-5 h-5 accent-emerald" />
                          <div>
                            <strong className="text-white block">Carrier</strong>
                            <p className="text-muted-foreground text-sm">I want to haul loads</p>
                          </div>
                        </label>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block font-bold text-xs tracking-wide uppercase text-muted-foreground/60 mb-2">First Name</label>
                        <input type="text" placeholder="John" className="w-full border border-white/10 bg-black/30 rounded-lg px-4 py-3.5 text-white placeholder:text-white/40 outline-none transition-all focus:border-emerald/35 focus:bg-black/40" />
                      </div>
                      <div>
                        <label className="block font-bold text-xs tracking-wide uppercase text-muted-foreground/60 mb-2">Last Name</label>
                        <input type="text" placeholder="Smith" className="w-full border border-white/10 bg-black/30 rounded-lg px-4 py-3.5 text-white placeholder:text-white/40 outline-none transition-all focus:border-emerald/35 focus:bg-black/40" />
                      </div>
                    </div>

                    <div>
                      <label className="block font-bold text-xs tracking-wide uppercase text-muted-foreground/60 mb-2">Email Address</label>
                      <input type="email" placeholder="you@company.com" className="w-full border border-white/10 bg-black/30 rounded-lg px-4 py-3.5 text-white placeholder:text-white/40 outline-none transition-all focus:border-emerald/35 focus:bg-black/40" />
                    </div>

                    <div>
                      <label className="block font-bold text-xs tracking-wide uppercase text-muted-foreground/60 mb-2">Company Name</label>
                      <input type="text" placeholder="Acme Manufacturing" className="w-full border border-white/10 bg-black/30 rounded-lg px-4 py-3.5 text-white placeholder:text-white/40 outline-none transition-all focus:border-emerald/35 focus:bg-black/40" />
                    </div>

                    <div>
                      <label className="block font-bold text-xs tracking-wide uppercase text-muted-foreground/60 mb-2">Phone Number</label>
                      <input type="tel" placeholder="(555) 123-4567" className="w-full border border-white/10 bg-black/30 rounded-lg px-4 py-3.5 text-white placeholder:text-white/40 outline-none transition-all focus:border-emerald/35 focus:bg-black/40" />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block font-bold text-xs tracking-wide uppercase text-muted-foreground/60 mb-2">Password</label>
                        <input type="password" placeholder="••••••••" className="w-full border border-white/10 bg-black/30 rounded-lg px-4 py-3.5 text-white placeholder:text-white/40 outline-none transition-all focus:border-emerald/35 focus:bg-black/40" />
                      </div>
                      <div>
                        <label className="block font-bold text-xs tracking-wide uppercase text-muted-foreground/60 mb-2">Confirm Password</label>
                        <input type="password" placeholder="••••••••" className="w-full border border-white/10 bg-black/30 rounded-lg px-4 py-3.5 text-white placeholder:text-white/40 outline-none transition-all focus:border-emerald/35 focus:bg-black/40" />
                      </div>
                    </div>

                    <label className="flex items-start gap-2.5 text-muted-foreground text-sm cursor-pointer mt-4">
                      <input type="checkbox" className="w-[18px] h-[18px] accent-emerald mt-0.5" />
                      <span>
                        I agree to the <a href="#" className="text-emerald-light">Terms of Service</a> and{" "}
                        <a href="#" className="text-emerald-light">Privacy Policy</a>
                      </span>
                    </label>

                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-lg border border-emerald-dark bg-emerald-dark text-white text-sm font-bold transition-all hover:bg-emerald hover:border-emerald mt-2"
                    >
                      Create Account
                    </button>
                  </form>
                  
                  <div className="h-px bg-white/10 my-5" />
                  <p className="text-center text-muted-foreground text-sm">
                    Already have an account?{" "}
                    <button onClick={() => setActiveTab("login")} className="text-emerald-light font-bold">
                      Login here
                    </button>
                  </p>
                </div>
              </div>
            </ScrollAnimation>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Account;