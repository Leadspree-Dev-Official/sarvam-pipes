import React from 'react';
import { MapPin, Phone, Mail, Clock, ShieldCheck } from 'lucide-react';

export const TopBar: React.FC = () => {
  return (
    <header className="bg-[#071927] text-slate-200 text-xs py-2 px-4 sm:px-8 border-b border-slate-800" id="top-contact-bar">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-y-2 gap-x-6">
        {/* Left: Contact Info matching reference */}
        <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-[12px]">
          <div className="flex items-center gap-1.5 hover:text-orange-400 transition-colors">
            <MapPin className="w-3.5 h-3.5 text-orange-500 flex-shrink-0" />
            <span>MIDC, Pune, India</span>
          </div>
          <a
            href="tel:+919876543210"
            className="flex items-center gap-1.5 hover:text-orange-400 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-orange-500 flex-shrink-0" />
            <span>+91-9876543210</span>
          </a>
          <a
            href="mailto:sales@sarvampipes.com"
            className="flex items-center gap-1.5 hover:text-orange-400 transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-orange-500 flex-shrink-0" />
            <span>sales@sarvampipes.com</span>
          </a>
        </div>

        {/* Right: Operational Status & Certifications */}
        <div className="hidden md:flex items-center gap-5 text-slate-300 text-[11.5px]">
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-slate-400" />
            <span>Plant Hours: Mon - Sat 8:30 AM - 7:30 PM</span>
          </div>
          <div className="h-3 w-[1px] bg-slate-700" />
          <div className="flex items-center gap-1.5 text-orange-400 font-medium">
            <ShieldCheck className="w-3.5 h-3.5 text-orange-500" />
            <span>BIS / ISI & ISO 9001:2015 Approved</span>
          </div>
        </div>
      </div>
    </header>
  );
};
