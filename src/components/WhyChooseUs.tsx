import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, ShieldAlert, Cpu, Sparkles, MapPin } from 'lucide-react';

interface WhyChooseUsProps {
  onLearnMore: () => void;
  onRequestQuote: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({
  onLearnMore,
  onRequestQuote,
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'machinery' | 'lab'>('overview');

  return (
    <section id="about" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Industrial Plant Photo with Extrusion Line (matching reference) */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-slate-900 group">
              {/* Main Factory Extrusion Line Image */}
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80"
                alt="Sarvam Pipes High Precision Extrusion Line in MIDC Pune"
                className="w-full h-[380px] sm:h-[430px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />

              {/* Plant Tag Overlay */}
              <div className="absolute top-4 left-4 bg-[#0b1e33]/90 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-lg border border-slate-700 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-orange-400" />
                <span>MIDC Chakan, Pune Plant</span>
              </div>

              {/* Machinery Floating Chip */}
              <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-md text-slate-800 text-xs font-semibold px-3.5 py-2 rounded-lg shadow-lg border border-slate-200 flex items-center gap-2">
                <Cpu className="w-4 h-4 text-[#ea580c]" />
                <span>German Twin-Screw High Output Extruders</span>
              </div>
            </div>

            {/* Subtle Industrial Pattern Accent */}
            <div className="hidden sm:block absolute -bottom-6 -left-6 w-36 h-36 bg-orange-100 rounded-2xl -z-10" />
          </div>

          {/* Right Column: Text & Orange Stat Boxes (matching reference) */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-[#0b1e33] text-xs font-bold mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#ea580c]" />
              <span>ABOUT SARVAM PIPES</span>
            </div>

            {/* Title matching reference screenshot */}
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0b1e33] tracking-tight mb-5 leading-tight">
              Why Choose Sarvam Pipes?
            </h2>

            {/* Description paragraph matching reference screenshot */}
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8">
              Sarvam Pipes, based in MIDC Pune, is a leading manufacturer of high-quality PVC,
              CPVC, SWR, and agricultural pipes, serving plumbing, agriculture, and industrial
              sectors with state-of-the-art machinery, rigorous inspection, and advanced
              technology to deliver reliable and cost-effective solutions tailored to client needs.
            </p>

            {/* 3 Orange Stat Highlight Cards matching reference screenshot */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-8">
              {/* Stat 1: 20+ */}
              <div className="bg-[#ea580c] text-white p-4 rounded-xl text-center shadow-md flex flex-col justify-center">
                <span className="text-2xl sm:text-3xl font-extrabold tracking-tight">20+</span>
                <span className="text-[11px] sm:text-xs font-medium text-orange-100 mt-1 leading-tight">
                  Years of Excellence & Partner Deliveries
                </span>
              </div>

              {/* Stat 2: 30,000+ */}
              <div className="bg-[#ea580c] text-white p-4 rounded-xl text-center shadow-md flex flex-col justify-center">
                <span className="text-2xl sm:text-3xl font-extrabold tracking-tight">30,000+</span>
                <span className="text-[11px] sm:text-xs font-medium text-orange-100 mt-1 leading-tight">
                  MT Annual Extrusion Capacity
                </span>
              </div>

              {/* Stat 3: 1000+ */}
              <div className="bg-[#ea580c] text-white p-4 rounded-xl text-center shadow-md flex flex-col justify-center">
                <span className="text-2xl sm:text-3xl font-extrabold tracking-tight">1000+</span>
                <span className="text-[11px] sm:text-xs font-medium text-orange-100 mt-1 leading-tight">
                  Satisfied Clients & Dealer Network
                </span>
              </div>
            </div>

            {/* Interactive Feature Points */}
            <div className="space-y-2.5 mb-8">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span><strong>100% Virgin Grade Polymer</strong> - Zero recycled or scrap contamination.</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span><strong>Rigorous Lab Verification</strong> - Hydrostatic pressure, impact drop & Vicat tests.</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span><strong>Rapid Pune Dispatch Hub</strong> - Direct fleet transport across Maharashtra & Pan-India.</span>
              </div>
            </div>

            {/* CTA Button matching reference: "Learn More About Us >" (Deep navy button) */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                id="learn-more-btn"
                onClick={onLearnMore}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-[#0b1e33] hover:bg-[#153450] text-white text-sm font-semibold shadow-md transition-all duration-200 transform hover:-translate-y-0.5"
              >
                <span>Learn More About Us</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onRequestQuote}
                className="text-xs sm:text-sm font-semibold text-[#ea580c] hover:underline"
              >
                Schedule Factory Visit / Bulk Enquiry →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
