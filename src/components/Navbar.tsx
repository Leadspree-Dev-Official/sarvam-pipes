import React, { useState, useEffect } from 'react';
import { SarvamLogo } from './SarvamLogo';
import { Menu, X, Calculator, ArrowRight } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onRequestQuote: () => void;
  onOpenCalculator: () => void;
  onOpenBrochure: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onNavigate,
  onRequestQuote,
  onOpenCalculator,
  onOpenBrochure,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'products', label: 'Products' },
    { id: 'quality', label: 'Quality' },
    { id: 'industries', label: 'Industries' },
    { id: 'contact', label: 'Contact Us' },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <nav
      id="main-navbar"
      className={`sticky top-0 z-40 bg-white transition-all duration-200 ${
        isScrolled
          ? 'shadow-md py-3 border-b border-slate-200'
          : 'py-4 border-b border-slate-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          onClick={() => handleLinkClick('home')}
          className="text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 rounded-lg"
          aria-label="Sarvam Pipes Home"
        >
          <SarvamLogo />
        </button>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleLinkClick(item.id)}
                className={`relative py-1 text-[15px] font-medium transition-colors hover:text-[#ea580c] focus:outline-none ${
                  isActive
                    ? 'text-[#ea580c] font-semibold'
                    : 'text-[#0b1e33]'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-[#ea580c] rounded-full" />
                )}
              </button>
            );
          })}
        </div>

        {/* Right CTA Actions */}
        <div className="hidden md:flex items-center gap-3">
          {/* Quick Pipe Calculator Utility */}
          <button
            onClick={onOpenCalculator}
            className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-700 hover:text-[#ea580c] bg-slate-100 hover:bg-orange-50 rounded-lg transition-colors border border-slate-200"
            title="Calculate Pipe Weight & Volume"
          >
            <Calculator className="w-3.5 h-3.5 text-[#ea580c]" />
            <span>Pipe Calculator</span>
          </button>

          {/* Primary Request a Quote Button (Matches reference orange button) */}
          <button
            id="nav-quote-btn"
            onClick={onRequestQuote}
            className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#ea580c] hover:bg-[#c2410c] text-white text-sm font-semibold shadow-sm hover:shadow transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Request a Quote</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={onRequestQuote}
            className="md:hidden px-3 py-1.5 rounded-md bg-[#ea580c] text-white text-xs font-semibold"
          >
            Quote
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-700 hover:text-slate-900 rounded-lg border border-slate-200"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleLinkClick(item.id)}
                className={`text-left px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  activeSection === item.id
                    ? 'bg-orange-50 text-[#ea580c] font-semibold'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCalculator();
              }}
              className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-lg bg-slate-100 text-slate-800 text-sm font-medium"
            >
              <Calculator className="w-4 h-4 text-[#ea580c]" />
              <span>Pipe Dimension Calculator</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBrochure();
              }}
              className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-lg border border-slate-300 text-slate-800 text-sm font-medium hover:bg-slate-50"
            >
              <span>Download Product Catalog</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onRequestQuote();
              }}
              className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-lg bg-[#ea580c] text-white text-base font-semibold shadow"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
