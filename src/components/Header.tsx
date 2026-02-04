import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/shippers", label: "Shippers" },
    { href: "/carriers", label: "Carriers" },
    { href: "/rate-calculator", label: "Rate Calculator" },
    { href: "/blog", label: "Blog" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/85 border-b border-white/[0.06] backdrop-blur-lg">
        <div className="container mx-auto px-6 max-w-[1180px]">
          <div className="h-[72px] flex items-center justify-between gap-5">
            {/* Brand */}
            <Link to="/" className="flex items-center gap-3.5">
              <img
                src="/assets/Logo.jpg"
                alt="Smart Expedite logo"
                className="w-11 h-11 object-contain rounded-lg border border-white/10 bg-white/[0.02] p-1.5"
              />
              <div className="flex flex-col gap-0.5">
                <strong className="font-display font-bold text-white text-[17px] leading-tight tracking-tight">
                  Smart Expedite
                </strong>
                <span className="text-[11px] text-white/55 tracking-wide uppercase">
                  Expedited Freight
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-semibold px-3.5 py-2.5 rounded-lg border border-transparent transition-all ${
                    link.active
                      ? "text-emerald-light"
                      : "text-white/75 hover:text-white hover:bg-white/[0.04] hover:border-white/10"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Right Controls */}
            <div className="flex items-center gap-2.5">
              <a
                href="/account"
                className="hidden sm:inline-flex items-center justify-center gap-2.5 px-5 py-3 rounded-lg border border-emerald/35 bg-emerald/10 text-emerald-light text-sm font-bold transition-all hover:bg-emerald/[0.18] hover:border-emerald/50"
              >
                Sign In
              </a>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg border border-white/10 bg-white/[0.03] transition-all hover:bg-white/[0.06]"
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              >
                {isMenuOpen ? (
                  <X className="w-[18px] h-[18px]" />
                ) : (
                  <Menu className="w-[18px] h-[18px]" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {isMenuOpen && (
        <div className="fixed top-[72px] left-0 right-0 bg-background/[0.98] border-b border-white/[0.06] backdrop-blur-lg z-40 lg:hidden max-h-[calc(100vh-72px)] overflow-y-auto">
          <div className="container mx-auto px-6 py-4 max-w-[1180px]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block px-4 py-3.5 rounded-lg border border-transparent text-white/75 font-bold mb-1 hover:border-white/10 hover:bg-white/[0.04] hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
