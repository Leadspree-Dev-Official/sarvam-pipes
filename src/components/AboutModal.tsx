import React from 'react';
import { X, Factory, ShieldCheck, Award, Users, CheckCircle2, ArrowRight } from 'lucide-react';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRequestQuote: () => void;
  onOpenBrochure: () => void;
}

export const AboutModal: React.FC<AboutModalProps> = ({
  isOpen,
  onClose,
  onRequestQuote,
  onOpenBrochure,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-6 flex flex-col max-h-[90vh] animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="bg-[#0b1e33] text-white px-6 py-5 flex items-center justify-between flex-shrink-0">
          <div>
            <span className="text-xs font-bold text-orange-400 uppercase tracking-wider">
              Corporate Overview & Manufacturing Infrastructure
            </span>
            <h3 className="text-xl font-bold mt-0.5">About Sarvam Pipes - MIDC Pune</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 flex-1">
          {/* Main Story & Factory Visual */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-7 space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
              <h4 className="text-xl font-extrabold text-[#0b1e33]">
                Engineering Strength. Delivering Precision.
              </h4>
              <p>
                Founded in the industrial nerve center of MIDC Chakan, Pune, <strong>Sarvam Pipes</strong> has
                risen to become one of Western India's most respected manufacturers of polymer
                piping systems. Our facility operates high-capacity, high-torque parallel and conical
                twin-screw extrusion lines running 24x7 to supply critical infrastructure across India.
              </p>
              <p>
                Every pipe manufactured carries the hallmark of <strong>100% virgin polymer</strong>,
                free from scrap, heavy metal stabilizers, or adulterated fillers. This ensures superior
                tensile strength, higher hydraulic capacity, and exceptional longevity exceeding 50 years.
              </p>
            </div>

            <div className="md:col-span-5 rounded-xl overflow-hidden border border-slate-200 shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
                alt="Sarvam Extrusion Machinery"
                className="w-full h-56 object-cover object-center"
              />
            </div>
          </div>

          {/* Extrusion Manufacturing Process Workflow */}
          <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 space-y-4">
            <h4 className="text-base font-bold text-[#0b1e33] flex items-center gap-2">
              <Factory className="w-5 h-5 text-[#ea580c]" />
              <span>Our 5-Stage Precision Extrusion Process</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 text-center">
              {[
                { step: '01', title: 'Resin Blending', desc: 'Computerized dosing of virgin PVC & calcium-zinc stabilizers' },
                { step: '02', title: 'Twin Extrusion', desc: 'High-torque melt homogenizing with zone temperature controls' },
                { step: '03', title: 'Vacuum Sizing', desc: 'Sub-atmospheric stainless calibration tanks with spray cooling' },
                { step: '04', title: 'Planetary Cut', desc: 'Chip-free square chamfering and online socketing/belling' },
                { step: '05', title: 'Hydro Testing', desc: '100% batch traceability and hydrostatic pressure checks' },
              ].map((st, i) => (
                <div key={i} className="p-3 bg-white rounded-lg border border-slate-200 text-xs">
                  <span className="font-mono font-bold text-[#ea580c] block text-sm mb-1">{st.step}</span>
                  <strong className="text-[#0b1e33] block mb-1">{st.title}</strong>
                  <span className="text-slate-500 text-[11px] leading-tight block">{st.desc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Plant Core Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-orange-50 border border-orange-200 text-center">
              <span className="text-3xl font-black text-[#ea580c] block">30,000+ MT</span>
              <span className="text-xs font-semibold text-slate-800 mt-1 block">Annual Installed Extrusion Capacity</span>
            </div>
            <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 text-center">
              <span className="text-3xl font-black text-blue-700 block">50+ Acres</span>
              <span className="text-xs font-semibold text-slate-800 mt-1 block">Integrated MIDC Pune Manufacturing & Logistics</span>
            </div>
            <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-center">
              <span className="text-3xl font-black text-emerald-700 block">1,000+</span>
              <span className="text-xs font-semibold text-slate-800 mt-1 block">Active Dealers & Project Partners</span>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 bg-white border-t border-slate-200 flex items-center justify-between gap-4 flex-shrink-0">
          <button
            onClick={onOpenBrochure}
            className="text-xs font-semibold text-[#0b1e33] hover:text-[#ea580c] flex items-center gap-1.5"
          >
            <span>Download Corporate Profile</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-50 text-xs font-semibold"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onRequestQuote();
              }}
              className="px-5 py-2 rounded-lg bg-[#ea580c] hover:bg-[#c2410c] text-white text-xs font-semibold shadow"
            >
              Request Commercial Proposal
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
