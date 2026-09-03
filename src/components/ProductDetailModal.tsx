import React from 'react';
import { ProductItem } from '../types';
import { X, Check, Award, ShieldAlert, ArrowRight, Layers, Droplet } from 'lucide-react';

interface ProductDetailModalProps {
  product: ProductItem | null;
  onClose: () => void;
  onRequestQuote: (product: ProductItem) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onRequestQuote,
}) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-6 flex flex-col max-h-[90vh] animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="bg-[#0b1e33] text-white px-6 py-5 flex items-center justify-between flex-shrink-0">
          <div>
            <span className="text-xs font-bold text-orange-400 uppercase tracking-wider">
              Technical Specification Sheet
            </span>
            <h3 className="text-xl font-bold mt-0.5">{product.name}</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition-colors"
            aria-label="Close product details"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1 bg-white">
          {/* Top Overview with Visual & Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
            <div className="sm:col-span-5 h-52 rounded-xl overflow-hidden border border-slate-200 bg-slate-50">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="sm:col-span-7">
              <span className="inline-block text-xs font-semibold px-2.5 py-1 rounded bg-orange-100 text-[#ea580c] mb-2">
                {product.badge || 'Sarvam Certified'}
              </span>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {product.fullDesc}
              </p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {product.standards.map((std, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] font-mono font-medium px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200"
                  >
                    {std}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Sizes and Pressure Ratings */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <h4 className="text-xs font-bold text-[#0b1e33] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-[#ea580c]" />
                <span>Available Diameters</span>
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {product.sizes.map((sz, i) => (
                  <span key={i} className="text-xs px-2 py-1 rounded bg-white text-slate-800 border border-slate-200">
                    {sz}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <h4 className="text-xs font-bold text-[#0b1e33] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Droplet className="w-3.5 h-3.5 text-blue-600" />
                <span>Pressure Classes & Ratings</span>
              </h4>
              <ul className="text-xs text-slate-700 space-y-1">
                {product.pressureRatings.map((pr, i) => (
                  <li key={i} className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    <span>{pr}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Key Advantages */}
          <div>
            <h4 className="text-sm font-bold text-[#0b1e33] mb-3 flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-600" />
              <span>Key Technical Highlights & Engineering Advantages</span>
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-700">
              {product.keyFeatures.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2 bg-orange-50/40 p-2.5 rounded-lg border border-orange-100">
                  <span className="text-[#ea580c] font-bold">✓</span>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Laboratory Test Specifications Table */}
          <div>
            <h4 className="text-sm font-bold text-[#0b1e33] mb-3 flex items-center gap-2">
              <Award className="w-4 h-4 text-[#ea580c]" />
              <span>Laboratory Verification & Quality Metrics</span>
            </h4>
            <div className="border border-slate-200 rounded-xl overflow-hidden">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-100 text-slate-700 border-b border-slate-200">
                  <tr>
                    <th className="py-2.5 px-3 font-semibold">Quality Characteristic</th>
                    <th className="py-2.5 px-3 font-semibold">Guaranteed Specification</th>
                    <th className="py-2.5 px-3 font-semibold">Standard Test Method</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-600">
                  {product.specsTable.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50">
                      <td className="py-2 px-3 font-medium text-[#0b1e33]">{row.property}</td>
                      <td className="py-2 px-3 text-slate-800 font-semibold">{row.value}</td>
                      <td className="py-2 px-3 font-mono text-[11px] text-slate-500">{row.testMethod}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Modal Bottom Actions */}
        <div className="p-4 bg-white border-t border-slate-200 flex items-center justify-between gap-4 flex-shrink-0">
          <span className="text-xs text-slate-500">
            Manufactured at MIDC Pune with 100% Virgin Polymer
          </span>
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
                onRequestQuote(product);
              }}
              className="inline-flex items-center gap-1.5 px-5 py-2 rounded-lg bg-[#ea580c] hover:bg-[#c2410c] text-white text-xs font-semibold shadow"
            >
              <span>Request Quote for {product.name}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
