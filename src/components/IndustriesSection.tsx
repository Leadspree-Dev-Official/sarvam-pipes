import React, { useState } from 'react';
import { industriesData } from '../data/industries';
import { IndustryItem } from '../types';
import { ArrowRight, Check, Wrench, Droplets, Factory, Zap, GitBranch, ChevronRight } from 'lucide-react';

interface IndustriesSectionProps {
  onRequestQuote: (industryName?: string) => void;
  onExploreProducts: () => void;
}

export const IndustriesSection: React.FC<IndustriesSectionProps> = ({
  onRequestQuote,
  onExploreProducts,
}) => {
  const [selectedIndustry, setSelectedIndustry] = useState<IndustryItem | null>(null);

  // Render stylized visual icon matching the illustrated emblems in the reference screenshot
  const renderIndustryIcon = (iconName: string) => {
    switch (iconName) {
      case 'plumbing':
        return (
          <div className="w-16 h-16 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-center text-[#ea580c] group-hover:bg-[#ea580c] group-hover:text-white transition-colors duration-300">
            <svg viewBox="0 0 24 24" className="w-8 h-8 fill-none stroke-current stroke-2 stroke-linecap-round stroke-linejoin-round">
              <path d="M4 14h6v6H4z" />
              <path d="M7 14V4h10v6" />
              <path d="M14 10h6v10h-6z" />
              <circle cx="17" cy="6" r="2" />
            </svg>
          </div>
        );
      case 'agriculture':
        return (
          <div className="w-16 h-16 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
            <svg viewBox="0 0 24 24" className="w-8 h-8 fill-none stroke-current stroke-2 stroke-linecap-round stroke-linejoin-round">
              <path d="M12 2a10 10 0 0 0-10 10c0 5.5 4.5 10 10 10s10-4.5 10-10" />
              <path d="M12 6v6l4 2" />
              <path d="M8 16c2-4 6-4 8 0" />
            </svg>
          </div>
        );
      case 'industrial':
        return (
          <div className="w-16 h-16 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
            <svg viewBox="0 0 24 24" className="w-8 h-8 fill-none stroke-current stroke-2 stroke-linecap-round stroke-linejoin-round">
              <path d="M2 20h20" />
              <path d="M5 20V8l5 4V8l5 4V4h5v16" />
              <circle cx="17" cy="8" r="1" />
            </svg>
          </div>
        );
      case 'telecom':
        return (
          <div className="w-16 h-16 rounded-xl bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
            <svg viewBox="0 0 24 24" className="w-8 h-8 fill-none stroke-current stroke-2 stroke-linecap-round stroke-linejoin-round">
              <path d="M12 2v20" />
              <path d="m17 5-10 4" />
              <path d="m17 11-10 4" />
              <path d="m17 17-10 4" />
              <circle cx="12" cy="2" r="2" />
            </svg>
          </div>
        );
      case 'sewerage':
      default:
        return (
          <div className="w-16 h-16 rounded-xl bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-600 group-hover:bg-sky-600 group-hover:text-white transition-colors duration-300">
            <svg viewBox="0 0 24 24" className="w-8 h-8 fill-none stroke-current stroke-2 stroke-linecap-round stroke-linejoin-round">
              <path d="M4 8h16" />
              <path d="M4 16h16" />
              <path d="M8 4v16" />
              <path d="M16 4v16" />
            </svg>
          </div>
        );
    }
  };

  return (
    <section id="industries" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Header matching reference */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0b1e33] tracking-tight">
            Industries We Serve
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Our PVC piping solutions cater to a wide range of industries, offering dependable
            performance and durability for diverse applications.
          </p>
        </div>

        {/* 5 Cards Row matching reference screenshot */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {industriesData.map((ind) => (
            <div
              key={ind.id}
              onClick={() => setSelectedIndustry(ind)}
              className="group cursor-pointer bg-white rounded-xl p-6 text-center border border-slate-200 hover:border-[#ea580c] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-between"
            >
              <div className="flex flex-col items-center">
                {/* Visual Icon */}
                <div className="mb-5 transform group-hover:scale-110 transition-transform duration-300">
                  {renderIndustryIcon(ind.iconName)}
                </div>

                {/* Title matching reference */}
                <h3 className="text-base font-bold text-[#0b1e33] group-hover:text-[#ea580c] transition-colors mb-2">
                  {ind.name}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                  {ind.shortDesc}
                </p>
              </div>

              {/* View Details Prompt */}
              <div className="mt-4 pt-3 border-t border-slate-100 w-full flex items-center justify-center text-xs font-semibold text-[#ea580c] group-hover:translate-x-0.5 transition-transform">
                <span>View Solutions</span>
                <ChevronRight className="w-3.5 h-3.5 ml-1" />
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Industry Modal / Accordion when clicked */}
        {selectedIndustry && (
          <div className="mt-10 p-6 sm:p-8 bg-white rounded-2xl border-2 border-orange-200 shadow-xl animate-in fade-in zoom-in-95 duration-200">
            <div className="flex flex-wrap items-start justify-between gap-4 pb-4 border-b border-slate-100">
              <div>
                <span className="text-xs font-bold text-[#ea580c] uppercase tracking-wider">
                  Industry Specialization
                </span>
                <h3 className="text-2xl font-extrabold text-[#0b1e33] mt-1">
                  {selectedIndustry.name} Piping Solutions
                </h3>
              </div>
              <button
                onClick={() => setSelectedIndustry(null)}
                className="text-xs font-semibold text-slate-500 hover:text-slate-800 px-3 py-1 bg-slate-100 rounded-md"
              >
                Close Details ✕
              </button>
            </div>

            <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
              {selectedIndustry.details}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="p-4 rounded-xl bg-orange-50/50 border border-orange-100">
                <h4 className="text-sm font-bold text-[#0b1e33] mb-3 flex items-center gap-2">
                  <Wrench className="w-4 h-4 text-[#ea580c]" />
                  <span>Recommended Sarvam Piping Range</span>
                </h4>
                <ul className="space-y-2">
                  {selectedIndustry.recommendedPipes.map((pipe, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ea580c]" />
                      <span>{pipe}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <h4 className="text-sm font-bold text-[#0b1e33] mb-3 flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>Key Engineering Benefits</span>
                </h4>
                <ul className="space-y-2">
                  {selectedIndustry.benefits.map((b, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                      <span className="text-emerald-600 font-bold">✓</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-4 justify-end">
              <button
                onClick={() => onRequestQuote(selectedIndustry.name)}
                className="px-5 py-2.5 rounded-lg bg-[#ea580c] hover:bg-[#c2410c] text-white text-xs sm:text-sm font-semibold shadow"
              >
                Request Quote for {selectedIndustry.name}
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
