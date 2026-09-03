import React, { useState } from 'react';
import { X, Calculator, RefreshCw, Truck, Droplets, ArrowRight } from 'lucide-react';

interface PipeCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRequestQuote: (calcSummary?: string) => void;
}

export const PipeCalculatorModal: React.FC<PipeCalculatorModalProps> = ({
  isOpen,
  onClose,
  onRequestQuote,
}) => {
  const [outerDiameter, setOuterDiameter] = useState<number>(63); // mm
  const [wallThickness, setWallThickness] = useState<number>(3.0); // mm
  const [pipeLength, setPipeLength] = useState<number>(6); // meters per pipe
  const [pipeQuantity, setPipeQuantity] = useState<number>(100); // total pipes
  const [material, setMaterial] = useState<'pvc' | 'cpvc'>('pvc');

  if (!isOpen) return null;

  // PVC density ~1.43 g/cm³, CPVC density ~1.52 g/cm³
  const density = material === 'pvc' ? 1.43 : 1.52;

  // Single pipe weight (kg) = π * (OD - WT) * WT * Length * Density / 1000
  const meanDiameter = outerDiameter - wallThickness;
  const singlePipeWeightKg = (Math.PI * meanDiameter * wallThickness * pipeLength * density) / 1000;
  const totalWeightKg = singlePipeWeightKg * pipeQuantity;
  const totalWeightTon = totalWeightKg / 1000;

  // Internal bore & flow capacity
  const internalDiameterMm = outerDiameter - (2 * wallThickness);
  const crossSectionalAreaSqM = (Math.PI * Math.pow(internalDiameterMm / 2000, 2));
  // At standard gravity velocity 1.5 m/s
  const flowRateLps = crossSectionalAreaSqM * 1.5 * 1000; // liters per second
  const flowRateLpm = flowRateLps * 60; // liters per minute

  // Truckload estimation (assuming 16-ton or 9-ton standard Indian truck)
  const truckloadsNeeded = (totalWeightTon / 16).toFixed(2);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-6 animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="bg-[#0b1e33] text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-orange-500/20 text-[#ea580c] flex items-center justify-center">
              <Calculator className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold">
                Sarvam Engineering Pipe Calculator
              </h3>
              <p className="text-xs text-slate-400">
                Weight, Water Flow Capacity & Freight Logistics Estimation
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Inputs */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Preset Buttons for Quick Sizes */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              Quick Industry Standard Sizes
            </label>
            <div className="flex flex-wrap gap-2">
              {[
                { label: '25mm (1") uPVC Class 3', od: 32, wt: 1.8, mat: 'pvc' },
                { label: '50mm (2") Agri 6 kg/cm²', od: 63, wt: 3.0, mat: 'pvc' },
                { label: '75mm (2.5") SWR Type A', od: 75, wt: 1.8, mat: 'pvc' },
                { label: '110mm (4") SWR Soil', od: 110, wt: 3.2, mat: 'pvc' },
                { label: '160mm (6") Casing CD', od: 165, wt: 8.5, mat: 'pvc' },
              ].map((preset, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => {
                    setOuterDiameter(preset.od);
                    setWallThickness(preset.wt);
                    setMaterial(preset.mat as any);
                  }}
                  className="px-3 py-1 rounded-md bg-slate-100 hover:bg-orange-50 hover:text-[#ea580c] text-xs font-semibold text-slate-700 border border-slate-200 transition-colors"
                >
                  {preset.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Outer Diameter (OD in mm)
              </label>
              <input
                type="number"
                min="15"
                max="400"
                value={outerDiameter}
                onChange={(e) => setOuterDiameter(Number(e.target.value))}
                className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#ea580c] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Wall Thickness (mm)
              </label>
              <input
                type="number"
                step="0.1"
                min="0.5"
                max="25"
                value={wallThickness}
                onChange={(e) => setWallThickness(Number(e.target.value))}
                className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#ea580c] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Length per Pipe (Meters)
              </label>
              <select
                value={pipeLength}
                onChange={(e) => setPipeLength(Number(e.target.value))}
                className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#ea580c] focus:outline-none bg-white"
              >
                <option value={3}>3 Meters (10 ft)</option>
                <option value={5}>5 Meters</option>
                <option value={6}>6 Meters (Standard)</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Number of Pipes (Pieces)
              </label>
              <input
                type="number"
                min="1"
                max="100000"
                value={pipeQuantity}
                onChange={(e) => setPipeQuantity(Number(e.target.value))}
                className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#ea580c] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Material Compound
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setMaterial('pvc')}
                  className={`py-2 text-xs font-bold rounded-lg border transition-all ${
                    material === 'pvc'
                      ? 'bg-orange-50 border-[#ea580c] text-[#ea580c]'
                      : 'bg-white border-slate-200 text-slate-600'
                  }`}
                >
                  uPVC (1.43 g/cm³)
                </button>
                <button
                  type="button"
                  onClick={() => setMaterial('cpvc')}
                  className={`py-2 text-xs font-bold rounded-lg border transition-all ${
                    material === 'cpvc'
                      ? 'bg-orange-50 border-[#ea580c] text-[#ea580c]'
                      : 'bg-white border-slate-200 text-slate-600'
                  }`}
                >
                  CPVC (1.52 g/cm³)
                </button>
              </div>
            </div>
          </div>

          {/* Results Display */}
          <div className="p-5 rounded-xl bg-slate-900 text-white space-y-4 shadow-inner">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div className="p-3 rounded-lg bg-slate-800/80 border border-slate-700">
                <span className="text-[11px] text-slate-400 block font-medium">Single Pipe Weight</span>
                <span className="text-lg font-bold text-white">{singlePipeWeightKg.toFixed(2)} kg</span>
              </div>

              <div className="p-3 rounded-lg bg-slate-800/80 border border-slate-700">
                <span className="text-[11px] text-slate-400 block font-medium">Total Lot Weight</span>
                <span className="text-lg font-bold text-[#ea580c]">{totalWeightKg.toFixed(1)} kg</span>
                <span className="text-[10px] text-slate-400 block">({totalWeightTon.toFixed(2)} MT)</span>
              </div>

              <div className="p-3 rounded-lg bg-slate-800/80 border border-slate-700 col-span-2 sm:col-span-1">
                <span className="text-[11px] text-slate-400 block font-medium">Flow Rate (at 1.5 m/s)</span>
                <span className="text-lg font-bold text-sky-400">{Math.round(flowRateLpm)} LPM</span>
                <span className="text-[10px] text-slate-400 block">({flowRateLps.toFixed(1)} L/sec)</span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs text-slate-300 pt-2 border-t border-slate-800">
              <Truck className="w-4 h-4 text-orange-400 flex-shrink-0" />
              <span>
                Dispatch logistics: ~<strong>{truckloadsNeeded}</strong> standard 16-ton truckloads required from MIDC Pune.
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Actions */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between gap-4">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-100 text-xs font-semibold"
          >
            Close
          </button>

          <button
            onClick={() => {
              onClose();
              onRequestQuote(`${outerDiameter}mm OD x ${wallThickness}mm WT (${pipeQuantity} pcs / ${totalWeightTon.toFixed(2)} MT)`);
            }}
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-lg bg-[#ea580c] hover:bg-[#c2410c] text-white text-xs font-semibold shadow"
          >
            <span>Transfer to RFQ Quote</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
