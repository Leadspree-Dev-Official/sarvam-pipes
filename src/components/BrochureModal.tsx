import React, { useState } from 'react';
import { X, Download, FileText, CheckCircle, Eye, Printer, ShieldCheck } from 'lucide-react';
import { productsData } from '../data/products';

interface BrochureModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRequestQuote: () => void;
}

export const BrochureModal: React.FC<BrochureModalProps> = ({
  isOpen,
  onClose,
  onRequestQuote,
}) => {
  const [downloading, setDownloading] = useState(false);
  const [downloadComplete, setDownloadComplete] = useState(false);

  if (!isOpen) return null;

  const handleDownload = () => {
    setDownloading(true);
    setTimeout(() => {
      setDownloading(false);
      setDownloadComplete(true);
      setTimeout(() => setDownloadComplete(false), 4000);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-6 flex flex-col max-h-[90vh] animate-in fade-in zoom-in-95 duration-200">
        {/* Modal Top Header */}
        <div className="bg-[#0b1e33] text-white px-6 py-4 flex items-center justify-between flex-shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-orange-500/20 text-orange-400 flex items-center justify-center">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold">
                Sarvam Pipes - Corporate Product Catalog & Engineering Datasheet
              </h3>
              <p className="text-xs text-slate-400">
                Official Edition 2026 • BIS Certified IS 4985, IS 15778, IS 12818 • MIDC Pune
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition-colors"
            aria-label="Close catalog preview"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Brochure Document Preview Canvas */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 bg-slate-50 flex-1">
          {/* Brochure Cover Banner */}
          <div className="bg-gradient-to-r from-[#071927] to-[#0f2b48] text-white p-6 sm:p-8 rounded-xl shadow border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="max-w-md">
              <span className="text-[11px] font-bold uppercase tracking-widest text-orange-400 bg-orange-500/20 px-2.5 py-1 rounded">
                Official Technical Publication
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold mt-2 text-white">
                Comprehensive PVC Piping Solutions
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                Complete dimensional charts, hydrostatic testing metrics, chemical resistance
                data, and installation practices for plumbing contractors, irrigation engineers,
                and infrastructure developers.
              </p>
            </div>
            <div className="flex flex-col gap-2 w-full md:w-auto">
              <button
                onClick={handleDownload}
                disabled={downloading}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#ea580c] hover:bg-[#c2410c] text-white text-sm font-semibold shadow transition-all disabled:opacity-75"
              >
                <Download className="w-4 h-4" />
                <span>{downloading ? 'Generating PDF...' : 'Download Full PDF (8.4 MB)'}</span>
              </button>
              {downloadComplete && (
                <div className="flex items-center justify-center gap-1.5 text-xs text-emerald-400 font-medium">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Brochure downloaded successfully!</span>
                </div>
              )}
            </div>
          </div>

          {/* Product Technical Summary Tables */}
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-6">
            <h4 className="text-base font-bold text-[#0b1e33] border-b border-slate-100 pb-3 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#ea580c]" />
              <span>Standard Product Range & Engineering Parameters</span>
            </h4>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-slate-100 text-slate-700 border-b border-slate-200">
                    <th className="py-2.5 px-3 font-bold">Product Line</th>
                    <th className="py-2.5 px-3 font-bold">Applicable Standard</th>
                    <th className="py-2.5 px-3 font-bold">Size Range</th>
                    <th className="py-2.5 px-3 font-bold">Pressure Classes</th>
                    <th className="py-2.5 px-3 font-bold">Max Temperature</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-600">
                  {productsData.map((p) => (
                    <tr key={p.id} className="hover:bg-slate-50/80">
                      <td className="py-2.5 px-3 font-bold text-[#0b1e33]">{p.name}</td>
                      <td className="py-2.5 px-3 font-mono text-[11px] text-slate-800">{p.standards.join(', ')}</td>
                      <td className="py-2.5 px-3">{p.sizes[0]} - {p.sizes[p.sizes.length - 1]}</td>
                      <td className="py-2.5 px-3">{p.pressureRatings[0]}</td>
                      <td className="py-2.5 px-3">
                        {p.category === 'cpvc' ? '93°C Continuous' : '60°C Intermittent'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Quality Benchmark Guarantee */}
          <div className="p-5 bg-orange-50/70 border border-orange-200 rounded-xl flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-orange-100 text-[#ea580c] flex items-center justify-center flex-shrink-0 mt-0.5">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h5 className="text-sm font-bold text-slate-900">
                100% Quality Assurance & Factory Inspection Guarantee
              </h5>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Every meter of Sarvam pipe carries a laser batch traceability imprint including
                outer diameter, class rating, standard BIS license number, and extrusion timestamp.
                Internal lab test reports (MTC - Manufacturer Test Certificate) accompany every
                commercial dispatch from MIDC Pune.
              </p>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 bg-white border-t border-slate-200 flex flex-wrap items-center justify-between gap-4 flex-shrink-0">
          <div className="flex items-center gap-3 text-xs text-slate-500">
            <span>Plant: MIDC Chakan, Pune</span>
            <span>•</span>
            <span>Tel: +91-9876543210</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => window.print()}
              className="px-4 py-2 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-50 text-xs font-semibold flex items-center gap-1.5"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print Catalog</span>
            </button>
            <button
              onClick={() => {
                onClose();
                onRequestQuote();
              }}
              className="px-5 py-2 rounded-lg bg-[#ea580c] hover:bg-[#c2410c] text-white text-xs font-semibold shadow"
            >
              Request Commercial Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
