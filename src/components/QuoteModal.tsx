import React, { useState } from 'react';
import { ProductItem } from '../types';
import { productsData } from '../data/products';
import { X, CheckCircle2, Calculator, Send, Printer, FileText } from 'lucide-react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProduct?: ProductItem | null;
  initialIndustry?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  initialProduct,
  initialIndustry,
}) => {
  const [productCategory, setProductCategory] = useState<string>(
    initialProduct?.category || 'upvc'
  );
  const [pipeSize, setPipeSize] = useState<string>('25 mm (1")');
  const [quantity, setQuantity] = useState<number>(500);
  const [unitType, setUnitType] = useState<'meters' | 'bundles' | 'metric-tons'>('meters');
  const [fullName, setFullName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [deliveryCity, setDeliveryCity] = useState('Pune');
  const [urgency, setUrgency] = useState<'immediate' | 'within-15-days' | 'planning'>('immediate');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [rfqNumber, setRfqNumber] = useState('');

  if (!isOpen) return null;

  const currentProduct = productsData.find((p) => p.category === productCategory) || productsData[0];

  // Calculation estimates for transparency
  const getEstimatedWeightKg = () => {
    let factor = 0.32; // kg per meter for standard 1" pipe
    if (pipeSize.includes('50 mm')) factor = 0.95;
    if (pipeSize.includes('75 mm') || pipeSize.includes('90 mm')) factor = 1.6;
    if (pipeSize.includes('110 mm')) factor = 2.4;
    if (pipeSize.includes('160 mm') || pipeSize.includes('200 mm')) factor = 5.2;

    if (unitType === 'meters') return Math.round(quantity * factor);
    if (unitType === 'bundles') return Math.round(quantity * 10 * factor);
    return Math.round(quantity * 1000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone) return;

    const generatedId = `SP-RFQ-${Math.floor(100000 + Math.random() * 900000)}`;
    setRfqNumber(generatedId);
    setIsSubmitted(true);
  };

  const resetForm = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="bg-[#0b1e33] text-white px-6 py-5 flex items-center justify-between">
          <div>
            <span className="text-xs font-bold text-orange-400 uppercase tracking-wider">
              Sarvam Pipes Commercial Wing
            </span>
            <h3 className="text-xl font-bold mt-0.5">Request Official Quotation (RFQ)</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
            aria-label="Close quote modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body or Success Confirmation */}
        {isSubmitted ? (
          <div className="p-8 text-center">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-orange-100 text-[#ea580c]">
              Quotation Request Received
            </span>
            <h4 className="text-2xl font-extrabold text-[#0b1e33] mt-3">
              Thank You, {fullName}!
            </h4>
            <p className="text-sm text-slate-600 mt-2 max-w-md mx-auto">
              Your quotation request has been routed to our MIDC Pune factory dispatch & sales
              team. A formal commercial proposal with factory-gate pricing will be sent shortly.
            </p>

            <div className="mt-6 p-4 bg-slate-50 border border-slate-200 rounded-xl text-left text-xs sm:text-sm space-y-1.5 max-w-md mx-auto">
              <div className="flex justify-between font-mono">
                <span className="text-slate-500">RFQ Reference ID:</span>
                <span className="font-bold text-[#ea580c]">{rfqNumber}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Selected Product:</span>
                <span className="font-semibold text-slate-800">{currentProduct.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Size & Spec:</span>
                <span className="font-semibold text-slate-800">{pipeSize}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Required Quantity:</span>
                <span className="font-semibold text-slate-800">{quantity} {unitType} (~{getEstimatedWeightKg()} kg)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Delivery Destination:</span>
                <span className="font-semibold text-slate-800">{deliveryCity}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Contact Number:</span>
                <span className="font-semibold text-slate-800">{phone}</span>
              </div>
            </div>

            <div className="mt-8 flex items-center justify-center gap-3">
              <button
                onClick={() => window.print()}
                className="px-4 py-2.5 rounded-lg border border-slate-300 text-slate-700 text-xs font-semibold flex items-center gap-2 hover:bg-slate-50"
              >
                <Printer className="w-4 h-4" />
                <span>Print RFQ Summary</span>
              </button>
              <button
                onClick={resetForm}
                className="px-6 py-2.5 rounded-lg bg-[#ea580c] hover:bg-[#c2410c] text-white text-xs font-semibold"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-5">
            {/* Product Category Selector */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                1. Select Pipe Category
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {productsData.map((p) => (
                  <button
                    type="button"
                    key={p.category}
                    onClick={() => {
                      setProductCategory(p.category);
                      setPipeSize(p.sizes[0] || '25 mm');
                    }}
                    className={`p-2.5 rounded-lg text-xs font-semibold text-left border transition-all ${
                      productCategory === p.category
                        ? 'border-[#ea580c] bg-orange-50 text-[#ea580c] ring-1 ring-[#ea580c]'
                        : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    {p.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Size & Quantity Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Pipe Diameter / Size
                </label>
                <select
                  value={pipeSize}
                  onChange={(e) => setPipeSize(e.target.value)}
                  className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#ea580c] bg-white"
                >
                  {currentProduct.sizes.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Quantity
                </label>
                <input
                  type="number"
                  min="10"
                  max="100000"
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#ea580c]"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Unit
                </label>
                <select
                  value={unitType}
                  onChange={(e) => setUnitType(e.target.value as any)}
                  className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#ea580c] bg-white"
                >
                  <option value="meters">Meters</option>
                  <option value="bundles">Bundles</option>
                  <option value="metric-tons">Metric Tons (MT)</option>
                </select>
              </div>
            </div>

            {/* Estimated Batch Weight Utility Bar */}
            <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-between text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <Calculator className="w-4 h-4 text-[#ea580c]" />
                <span>Estimated Batch Weight:</span>
                <span className="font-bold text-slate-900">~{getEstimatedWeightKg()} kg</span>
              </div>
              <span className="text-[11px] text-emerald-600 font-semibold">Ex-Factory MIDC Pune</span>
            </div>

            {/* Contact Information */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                2. Contact & Delivery Details
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    placeholder="Full Name *"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#ea580c]"
                    required
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Company / Contractor Name"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#ea580c]"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Phone / WhatsApp Number *"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#ea580c]"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Official Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#ea580c]"
                  />
                </div>
              </div>
            </div>

            {/* Delivery Destination & Urgency */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-slate-600 mb-1">
                  Delivery City / Project Site
                </label>
                <input
                  type="text"
                  placeholder="e.g. Pune, Mumbai, Nashik, Pan-India"
                  value={deliveryCity}
                  onChange={(e) => setDeliveryCity(e.target.value)}
                  className="w-full px-3.5 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#ea580c]"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-600 mb-1">
                  Procurement Timeline
                </label>
                <select
                  value={urgency}
                  onChange={(e) => setUrgency(e.target.value as any)}
                  className="w-full px-3.5 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#ea580c] bg-white"
                >
                  <option value="immediate">Immediate (Ready dispatch from plant)</option>
                  <option value="within-15-days">Within 15 Days</option>
                  <option value="planning">Project Planning / Budgeting</option>
                </select>
              </div>
            </div>

            {/* Submit Actions */}
            <div className="pt-2 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-5 py-2.5 rounded-lg border border-slate-300 text-slate-600 hover:bg-slate-50 text-sm font-medium"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-[#ea580c] hover:bg-[#c2410c] text-white text-sm font-semibold shadow-md transition-colors"
              >
                <Send className="w-4 h-4" />
                <span>Submit Quotation Request</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
