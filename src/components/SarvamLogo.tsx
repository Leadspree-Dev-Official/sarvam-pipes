import React from 'react';

interface SarvamLogoProps {
  variant?: 'light' | 'dark';
  className?: string;
}

export const SarvamLogo: React.FC<SarvamLogoProps> = ({ variant = 'light', className = '' }) => {
  const isDark = variant === 'dark';

  return (
    <div className={`flex items-center gap-3 select-none ${className}`} id="sarvam-brand-logo">
      {/* Dynamic Swirl Emblem matching reference */}
      <div className="relative w-10 h-10 flex-shrink-0 flex items-center justify-center">
        <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-12" fill="none">
          <defs>
            <linearGradient id="orangeSwirl" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f97316" />
              <stop offset="100%" stopColor="#ea580c" />
            </linearGradient>
            <linearGradient id="blueSwirl" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2563eb" />
              <stop offset="100%" stopColor="#0f2b48" />
            </linearGradient>
          </defs>
          {/* Outer orange arc */}
          <path
            d="M 50 12 A 38 38 0 0 1 88 50 C 88 64 78 76 64 82 C 60 76 60 68 66 60 C 72 52 70 40 60 34 C 48 26 34 32 30 42 C 32 30 38 20 50 12 Z"
            fill="url(#orangeSwirl)"
          />
          {/* Inner navy blue arc wrapping backwards */}
          <path
            d="M 50 88 A 38 38 0 0 1 12 50 C 12 36 22 24 36 18 C 40 24 40 32 34 40 C 28 48 30 60 40 66 C 52 74 66 68 70 58 C 68 70 62 80 50 88 Z"
            fill={isDark ? '#60a5fa' : 'url(#blueSwirl)'}
          />
          {/* Central core node */}
          <circle cx="50" cy="50" r="8" fill="#ea580c" />
        </svg>
      </div>

      {/* Brand Wordmark & Tagline */}
      <div className="flex flex-col leading-none">
        <div className="flex items-baseline tracking-tight">
          <span className={`text-2xl font-black tracking-wider ${isDark ? 'text-white' : 'text-[#0b1e33]'}`}>
            SARVAM
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-extrabold tracking-[0.38em] text-[#ea580c]">
            PIPES
          </span>
        </div>
        <span className={`text-[8.5px] font-medium tracking-wide mt-0.5 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
          Engineering Strength. Delivering Precision.
        </span>
      </div>
    </div>
  );
};
