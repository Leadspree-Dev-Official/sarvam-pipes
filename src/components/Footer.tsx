import React from 'react';
import { SarvamLogo } from './SarvamLogo';
import { MapPin, Phone, Mail, ArrowUpRight, ExternalLink } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onRequestQuote: () => void;
  onOpenBrochure: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onRequestQuote,
  onOpenBrochure,
}) => {
  return (
    <footer className="bg-[#071927] text-slate-300 border-t border-slate-800" id="footer">
      {/* Main Footer Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Column 1: Brand & Identity (matching reference) */}
          <div className="lg:col-span-4">
            <SarvamLogo variant="dark" />
            <p className="mt-4 text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Premier manufacturer of certified uPVC, CPVC, SWR, casing, and agricultural
              pressure pipes in MIDC Pune. Delivering precision engineering, zero-leak assurance,
              and long-term structural durability across India.
            </p>
            <div className="mt-6 flex items-center gap-3 text-xs text-slate-400">
              <span className="px-2.5 py-1 rounded bg-slate-800 text-orange-400 font-semibold border border-slate-700">
                BIS / ISI Certified
              </span>
              <span className="px-2.5 py-1 rounded bg-slate-800 text-slate-300 font-semibold border border-slate-700">
                ISO 9001:2015
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links (matching reference) */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-400">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-orange-400 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('products')}
                  className="hover:text-orange-400 transition-colors"
                >
                  Products
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('quality')}
                  className="hover:text-orange-400 transition-colors"
                >
                  Quality
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-orange-400 transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenBrochure}
                  className="hover:text-orange-400 transition-colors"
                >
                  Brochure
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-orange-400 transition-colors"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Industries (matching reference) */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Industries
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-400">
              <li>
                <button
                  onClick={() => onNavigate('industries')}
                  className="hover:text-orange-400 transition-colors text-left"
                >
                  Construction & Plumbing
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('industries')}
                  className="hover:text-orange-400 transition-colors text-left"
                >
                  Agriculture & Irrigation
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('industries')}
                  className="hover:text-orange-400 transition-colors text-left"
                >
                  Industrial Applications
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('industries')}
                  className="hover:text-orange-400 transition-colors text-left"
                >
                  Electrical & Telecom
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('industries')}
                  className="hover:text-orange-400 transition-colors text-left"
                >
                  Sewerage & Drainage
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Us 1 (matching reference) */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Contact Us
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                <span>MIDC, Pune, Maharashtra 411019, India</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-orange-500 flex-shrink-0" />
                <a href="tel:+919876543210" className="hover:text-orange-400 transition-colors">
                  +91-9876543210
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-orange-500 flex-shrink-0" />
                <a href="mailto:sales@sarvampipes.com" className="hover:text-orange-400 transition-colors">
                  sales@sarvampipes.com
                </a>
              </div>
            </div>
          </div>

          {/* Column 5: Plant Location & Quote CTA (matching reference) */}
          <div className="lg:col-span-2 flex flex-col justify-between">
            <div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
                Plant Location
              </h4>
              <p className="text-xs text-slate-400 mb-3">
                Plot No. 42/B, Phase II, MIDC Industrial Area, Pune 410501
              </p>
              <a
                href="https://maps.google.com/?q=MIDC+Pune"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-orange-400 hover:text-orange-300 transition-colors mb-4"
              >
                <span>View on Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Request a Quote CTA button inside footer matching reference */}
            <button
              id="footer-quote-btn"
              onClick={onRequestQuote}
              className="w-full py-2.5 px-4 rounded-lg bg-[#ea580c] hover:bg-[#c2410c] text-white text-xs sm:text-sm font-semibold shadow text-center transition-all duration-200"
            >
              Request a Quote
            </button>
          </div>
        </div>
      </div>

      {/* Copyright Bar matching reference */}
      <div className="border-t border-slate-800/80 bg-[#05121d] py-4 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>© 2026 Sarvam Pipes. All Rights Reserved.</span>
          <div className="flex items-center gap-4 text-slate-500 text-[11px]">
            <span>Privacy Policy</span>
            <span>•</span>
            <span>Terms of Supply</span>
            <span>•</span>
            <span>Quality Standard IS:4985</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
