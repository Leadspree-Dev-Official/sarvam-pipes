import React from 'react';
import { ArrowRight, Download, CheckCircle2, Award, ShieldCheck, Factory } from 'lucide-react';

interface HeroProps {
  onExploreProducts: () => void;
  onDownloadBrochure: () => void;
  onRequestQuote: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreProducts,
  onDownloadBrochure,
  onRequestQuote,
}) => {
  return (
    <section
      id="home"
      className="relative min-h-[620px] lg:min-h-[680px] bg-gradient-to-r from-[#071927] via-[#0d2238] to-[#153450] text-white overflow-hidden flex items-center"
    >
      {/* Background Graphic Pattern: Industrial Warehouse & Pipe Silhouettes */}
      <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-screen">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="industrial-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#industrial-grid)" />
        </svg>
      </div>

      {/* Decorative High-End Pipe Stack Illustration Layer (Simulating reference backdrop) */}
      <div className="absolute right-0 top-0 bottom-0 w-full lg:w-3/5 pointer-events-none overflow-hidden opacity-30 lg:opacity-60">
        <div className="absolute inset-0 bg-gradient-to-r from-[#071927] via-transparent to-transparent z-10" />
        <img
          src="https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&w=1600&q=80"
          alt="Sarvam PVC Pipes Stack"
          className="w-full h-full object-cover object-center filter brightness-90 contrast-110"
        />
        {/* Subtle radial ambient glow on pipes */}
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl pointer-events-none" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-8 py-16 lg:py-24 z-20 w-full">
        <div className="max-w-2xl">
          {/* ISO / MIDC Pune Verification Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800/80 border border-slate-700 text-slate-300 text-xs font-semibold mb-6 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>MIDC Chakan, Pune Manufacturing Facility</span>
            <span className="text-slate-500">•</span>
            <span className="text-orange-400">IS:4985 & IS:15778 Standard</span>
          </div>

          {/* Main Headline strictly matching reference screenshot */}
          <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-extrabold tracking-tight text-white leading-[1.15] mb-6">
            Your Trusted Partner for{' '}
            <span className="text-[#ea580c] block mt-1">PVC Pipes & Fittings</span>
          </h1>

          {/* Subheading matching reference screenshot */}
          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed mb-8 max-w-xl">
            Leading PVC pipe manufacture in Pune, providing high-quality solutions
            for diverse applications across plumbing, agriculture, and infrastructure.
          </p>

          {/* Action Buttons matching reference screenshot */}
          <div className="flex flex-wrap items-center gap-4 mb-10">
            {/* Explore Products Button */}
            <button
              id="hero-explore-btn"
              onClick={onExploreProducts}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#ea580c] hover:bg-[#c2410c] text-white text-base font-semibold shadow-lg shadow-orange-950/40 hover:shadow-orange-900/60 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Explore Products</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* Download Brochure Button */}
            <button
              id="hero-brochure-btn"
              onClick={onDownloadBrochure}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-white hover:bg-slate-100 text-[#0b1e33] text-base font-semibold border border-slate-200 shadow-md transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Download className="w-4 h-4 text-[#ea580c]" />
              <span>Download Brochure</span>
            </button>
          </div>

          {/* Value Assurance Badges */}
          <div className="pt-6 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-3 gap-4">
            <div className="flex items-center gap-2 text-xs font-medium text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span>100% Virgin Polymer</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-medium text-slate-300">
              <ShieldCheck className="w-4 h-4 text-orange-400 flex-shrink-0" />
              <span>BIS / ISI Certified</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-medium text-slate-300">
              <Factory className="w-4 h-4 text-sky-400 flex-shrink-0" />
              <span>30,000 MT Annual Capacity</span>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle bottom edge wave to transition cleanly to the light products section */}
      <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-t from-slate-50 to-transparent pointer-events-none" />
    </section>
  );
};
