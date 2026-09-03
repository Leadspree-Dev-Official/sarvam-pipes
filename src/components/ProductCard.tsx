import React from 'react';
import { ProductItem } from '../types';
import { ArrowRight, Check, Eye } from 'lucide-react';

interface ProductCardProps {
  product: ProductItem;
  onSelect: (product: ProductItem) => void;
  onRequestQuote: (product: ProductItem) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onSelect,
  onRequestQuote,
}) => {
  // Color accents per category
  const getCategoryStyles = () => {
    switch (product.category) {
      case 'upvc':
        return { tag: 'uPVC Potable', ringColor: 'hover:border-blue-400', accent: 'bg-blue-50 text-blue-700' };
      case 'cpvc':
        return { tag: 'CPVC Hot/Cold', ringColor: 'hover:border-amber-400', accent: 'bg-amber-50 text-amber-700' };
      case 'swr':
        return { tag: 'SWR Drainage', ringColor: 'hover:border-slate-400', accent: 'bg-slate-100 text-slate-700' };
      case 'casing':
        return { tag: 'Deep Borewell', ringColor: 'hover:border-cyan-400', accent: 'bg-cyan-50 text-cyan-700' };
      case 'agri':
        return { tag: 'Agri Irrigation', ringColor: 'hover:border-emerald-400', accent: 'bg-emerald-50 text-emerald-700' };
      default:
        return { tag: 'Piping', ringColor: 'hover:border-orange-400', accent: 'bg-orange-50 text-orange-700' };
    }
  };

  const style = getCategoryStyles();

  return (
    <div
      id={`product-card-${product.id}`}
      className="group relative bg-white rounded-xl border border-slate-200/90 hover:border-[#ea580c] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden text-center"
    >
      {/* Product Visual Container matching the clean white backdrop in reference */}
      <div className="relative h-48 sm:h-52 bg-gradient-to-b from-slate-50 to-white flex items-center justify-center p-4 overflow-hidden border-b border-slate-100">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover object-center rounded-lg group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />

        {/* Floating Tag */}
        <span className="absolute top-3 left-3 text-[11px] font-semibold px-2 py-0.5 rounded bg-white/90 text-slate-700 shadow-sm border border-slate-200">
          {style.tag}
        </span>

        {/* Hover Quick Action Overlay */}
        <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-2 p-2">
          <button
            onClick={() => onSelect(product)}
            className="p-2.5 rounded-full bg-white text-slate-800 hover:text-[#ea580c] shadow-lg hover:scale-110 transition-transform"
            title="View Technical Specs"
          >
            <Eye className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Card Content matching exact reference text style */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-base sm:text-lg font-bold text-[#0b1e33] group-hover:text-[#ea580c] transition-colors line-clamp-1 mb-2">
            {product.name}
          </h3>
          <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed line-clamp-2 min-h-[38px] mb-4">
            {product.shortDesc}
          </p>
        </div>

        {/* Card Actions */}
        <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
          <button
            onClick={() => onSelect(product)}
            className="text-xs font-semibold text-[#0b1e33] hover:text-[#ea580c] flex items-center gap-1 transition-colors"
          >
            <span>Specs</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={() => onRequestQuote(product)}
            className="px-3 py-1.5 rounded-md bg-orange-50 hover:bg-[#ea580c] text-[#ea580c] hover:text-white text-xs font-semibold transition-colors border border-orange-200 hover:border-transparent"
          >
            Get Quote
          </button>
        </div>
      </div>
    </div>
  );
};
