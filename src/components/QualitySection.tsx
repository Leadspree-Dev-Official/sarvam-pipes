import React, { useState } from 'react';
import { ShieldCheck, Award, Microscope, CheckCircle2, FileCheck, ArrowRight, Gauge, Droplet } from 'lucide-react';

interface QualitySectionProps {
  onRequestQuote: () => void;
  onOpenBrochure: () => void;
}

export const QualitySection: React.FC<QualitySectionProps> = ({
  onRequestQuote,
  onOpenBrochure,
}) => {
  const [activeTest, setActiveTest] = useState<number>(0);

  const tests = [
    {
      title: 'Hydrostatic Pressure & Burst Test',
      standard: 'IS 4985 / IS 15778',
      desc: 'Pipes are pressurized up to 4.2 times their nominal rating inside thermostatic water baths maintained at 27°C and 60°C for 1 hour and 1,000 hours continuous endurance without ballooning, cracking, or pressure drop.',
      metric: 'Burst Safety Factor > 4.2x',
      status: 'Passed 100%',
    },
    {
      title: 'Drop Hammer Impact Resistance at 0°C',
      standard: 'IS 12235 (Part 9)',
      desc: 'Pipes are chilled to 0°C and subjected to high kinetic energy drop weights from heights of up to 2 meters. True Impact Rate (TIR) must remain under 10% with zero shattering.',
      metric: 'TIR < 5% at Sub-Zero',
      status: 'Zero Shatter Guarantee',
    },
    {
      title: 'Vicat Softening Temperature Analysis',
      standard: 'IS 13360 / ASTM D 1525',
      desc: 'Measures resistance against thermal deformation. Sarvam uPVC achieves ≥ 80°C, and Sarvam CPVC achieves ≥ 103°C softening thresholds under uniform 50N needle penetration load.',
      metric: 'CPVC ≥ 103°C / uPVC ≥ 80°C',
      status: 'High Thermal Stability',
    },
    {
      title: 'Longitudinal Heat Reversion',
      standard: 'IS 12235 (Part 5)',
      desc: 'Pipe specimens undergo 150°C oven conditioning to measure molecular stress release. Reversion is strictly limited to < 5%, preventing dimensional warping in service.',
      metric: 'Reversion < 3.2%',
      status: 'Compliant to IS 4985',
    },
    {
      title: '100% Lead-Free Potable Safety',
      standard: 'RoHS / NSF 61 / IS 10500',
      desc: 'Spectrometric analysis guarantees zero lead, mercury, or cadmium leaching into potable drinking water, protecting children and families across Indian townships.',
      metric: 'Lead Content: 0.00 ppm',
      status: 'Safe Potable Drinking Water',
    },
  ];

  return (
    <section id="quality" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>ZERO COMPROMISE STANDARDS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0b1e33] tracking-tight">
            Quality Assurance & Testing Standards
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Every production batch from our MIDC Pune extrusion lines undergoes 6-tier
            destructive and non-destructive laboratory testing before client dispatch.
          </p>
        </div>

        {/* Certifications Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
          {[
            { mark: 'IS 4985:2000', label: 'uPVC Agri & Pressure Pipes', icon: 'CM/L-1234567' },
            { mark: 'IS 15778:2007', label: 'CPVC Hot & Cold Plumbing', icon: 'CM/L-7654321' },
            { mark: 'IS 13592:2013', label: 'SWR Drainage & Waste Systems', icon: 'CM/L-9876543' },
            { mark: 'IS 12818:2010', label: 'Casing & Deep Borewell Tubewell', icon: 'CM/L-5432198' },
          ].map((cert, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center hover:border-orange-300 transition-colors"
            >
              <div className="w-10 h-10 rounded-full bg-orange-100 text-[#ea580c] flex items-center justify-center mx-auto mb-2 font-bold text-xs">
                ISI
              </div>
              <h4 className="text-sm font-bold text-[#0b1e33]">{cert.mark}</h4>
              <p className="text-xs text-slate-500 mt-1">{cert.label}</p>
              <span className="inline-block mt-2 text-[10px] font-mono text-slate-400 bg-white px-2 py-0.5 rounded border border-slate-200">
                BIS Certified
              </span>
            </div>
          ))}
        </div>

        {/* Interactive Testing Bench Viewer */}
        <div className="bg-[#0b1e33] rounded-2xl text-white p-6 sm:p-10 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Test Selection List */}
          <div className="lg:col-span-5 space-y-2">
            <span className="text-xs font-bold text-orange-400 uppercase tracking-wider block mb-3">
              In-House Testing Laboratory
            </span>
            {tests.map((t, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTest(idx)}
                className={`w-full text-left p-3.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center justify-between ${
                  activeTest === idx
                    ? 'bg-[#ea580c] text-white shadow-md'
                    : 'bg-slate-800/60 text-slate-300 hover:bg-slate-800 hover:text-white'
                }`}
              >
                <span>{t.title}</span>
                <ArrowRight className="w-4 h-4 flex-shrink-0 ml-2" />
              </button>
            ))}
          </div>

          {/* Right: Active Test Deep Dive */}
          <div className="lg:col-span-7 bg-slate-800/80 rounded-xl p-6 sm:p-8 border border-slate-700">
            <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-slate-700">
              <span className="text-xs font-mono text-orange-400 font-bold">
                {tests[activeTest].standard}
              </span>
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                {tests[activeTest].status}
              </span>
            </div>

            <h3 className="text-xl font-bold text-white mt-4">
              {tests[activeTest].title}
            </h3>

            <p className="text-slate-300 text-xs sm:text-sm mt-3 leading-relaxed">
              {tests[activeTest].desc}
            </p>

            <div className="mt-6 pt-4 border-t border-slate-700 flex flex-wrap items-center justify-between gap-4">
              <div>
                <span className="text-[11px] text-slate-400 uppercase block font-medium">
                  Laboratory Metric
                </span>
                <span className="text-lg font-mono font-bold text-orange-400">
                  {tests[activeTest].metric}
                </span>
              </div>

              <button
                onClick={onOpenBrochure}
                className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-semibold border border-slate-600 transition-colors"
              >
                View QA Test Manual
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
