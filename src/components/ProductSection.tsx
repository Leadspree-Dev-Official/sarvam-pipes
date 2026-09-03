import React, { useState } from 'react';
import { productsData } from '../data/products';
import { ProductItem } from '../types';
import { ProductCard } from './ProductCard';
import { ArrowRight, Layers, FileText } from 'lucide-react';

interface ProductSectionProps {
  onSelectProduct: (product: ProductItem) => void;
  onRequestQuote: (product?: ProductItem) => void;
  onOpenBrochure: () => void;
}

export const ProductSection: React.FC<ProductSectionProps> = ({
  onSelectProduct,
  onRequestQuote,
  onOpenBrochure,
}) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filteredProducts = activeFilter === 'all'
    ? productsData
    : productsData.filter((p) => {
        if (activeFilter === 'plumbing') return p.category === 'upvc' || p.category === 'cpvc';
        if (activeFilter === 'drainage') return p.category === 'swr';
        if (activeFilter === 'borewell') return p.category === 'casing';
        if (activeFilter === 'agri') return p.category === 'agri';
        return true;
      });

  return (
    <section id="products" className="py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header matching reference */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 text-[#ea580c] text-xs font-bold mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>CERTIFIED PIPING CATALOG</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0b1e33] tracking-tight">
            Our PVC Pipe Products
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Manufactured with 100% virgin polymer conforming to Indian & International Standards (IS, ASTM, DIN).
          </p>

          {/* Category Filter Chips for smooth user experience */}
          <div className="flex flex-wrap justify-center gap-2 mt-6">
            {[
              { id: 'all', label: 'All 5 Key Categories' },
              { id: 'plumbing', label: 'uPVC & CPVC Plumbing' },
              { id: 'drainage', label: 'SWR Drainage' },
              { id: 'borewell', label: 'Casing & Borewell' },
              { id: 'agri', label: 'Agri & Irrigation' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  activeFilter === tab.id
                    ? 'bg-[#0b1e33] text-white shadow-sm'
                    : 'bg-white text-slate-600 hover:bg-slate-200/70 border border-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 5-Column / Grid matching the reference screenshot */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelect={onSelectProduct}
              onRequestQuote={(p) => onRequestQuote(p)}
            />
          ))}
        </div>

        {/* Bottom CTA Button matching reference orange "View All Products >" */}
        <div className="mt-12 text-center flex flex-wrap items-center justify-center gap-4">
          <button
            id="view-all-products-btn"
            onClick={() => {
              setActiveFilter('all');
              const el = document.getElementById('products');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#ea580c] hover:bg-[#c2410c] text-white text-sm font-semibold shadow-md transition-all duration-200 transform hover:-translate-y-0.5"
          >
            <span>View All Products</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={onOpenBrochure}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-white hover:bg-slate-100 text-slate-700 text-sm font-semibold border border-slate-300 shadow-sm transition-colors"
          >
            <FileText className="w-4 h-4 text-[#ea580c]" />
            <span>Technical Datasheets & Dimensions</span>
          </button>
        </div>
      </div>
    </section>
  );
};
