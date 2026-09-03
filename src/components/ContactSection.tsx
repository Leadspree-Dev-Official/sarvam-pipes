import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, Building, ShieldCheck } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [inquiryType, setInquiryType] = useState('bulk-supply');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 text-[#ea580c] text-xs font-bold mb-3">
            <Building className="w-3.5 h-3.5" />
            <span>PUNE HEADQUARTERS & MANUFACTURING HUB</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0b1e33] tracking-tight">
            Connect With Sarvam Pipes
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Reach out to our MIDC Pune corporate office and manufacturing plant for dealership
            inquiries, bulk supply contracts, and project engineering support.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Factory Contact Info & Location Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
              <h3 className="text-lg font-bold text-[#0b1e33] pb-4 border-b border-slate-100">
                Manufacturing Plant & Office
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-slate-700">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-orange-50 text-[#ea580c] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block">Plant & Warehouse:</span>
                    <span>Plot No. 42/B, Phase II, MIDC Chakan Industrial Corridor, Pune, Maharashtra 410501, India</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-orange-50 text-[#ea580c] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block">Phone / Sales Desk:</span>
                    <a href="tel:+919876543210" className="hover:text-[#ea580c] text-slate-800 font-medium">
                      +91-9876543210
                    </a>
                    <span className="block text-slate-500 text-xs mt-0.5">Toll-free technical hotline</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-orange-50 text-[#ea580c] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block">Email:</span>
                    <a href="mailto:sales@sarvampipes.com" className="hover:text-[#ea580c] text-slate-800 font-medium">
                      sales@sarvampipes.com
                    </a>
                    <span className="block text-slate-500 text-xs mt-0.5">info@sarvampipes.com</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-orange-50 text-[#ea580c] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block">Operating Hours:</span>
                    <span>Monday - Saturday: 8:30 AM to 7:30 PM</span>
                    <span className="block text-slate-500 text-xs">Dispatch Operations: 24x7</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-xs text-emerald-700 font-semibold bg-emerald-50/80 p-3 rounded-xl border border-emerald-100">
                <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Authorized Government & Private Infrastructure Supplier</span>
              </div>
            </div>

            {/* Quick Map Visual Box */}
            <div className="bg-[#0b1e33] rounded-2xl p-5 text-white shadow relative overflow-hidden">
              <div className="relative z-10">
                <span className="text-[11px] font-bold uppercase tracking-widest text-orange-400">
                  Strategic Location
                </span>
                <h4 className="text-base font-bold mt-1">Pune MIDC Industrial Belt</h4>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  Located right on the Pune-Nashik highway intersection with immediate access
                  to the Mumbai-Pune Expressway for same-day dispatches.
                </p>
                <a
                  href="https://maps.google.com/?q=MIDC+Chakan+Pune"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 mt-3 text-xs font-semibold text-orange-400 hover:text-orange-300"
                >
                  <span>Open in Google Maps Navigation →</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
              {isSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="text-2xl font-extrabold text-[#0b1e33]">
                    Message Successfully Sent!
                  </h4>
                  <p className="text-sm text-slate-600 max-w-md mx-auto">
                    Thank you, {name}. Your inquiry has been dispatched to our sales & engineering
                    desk at MIDC Pune. A representative will contact you within 2 business hours.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setName('');
                      setPhone('');
                      setEmail('');
                      setMessage('');
                    }}
                    className="px-6 py-2.5 rounded-lg bg-[#ea580c] text-white text-xs font-semibold"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-lg font-bold text-[#0b1e33] mb-2">
                    Send Us an Inquiry
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Ramesh Patil"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#ea580c]"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Phone / Mobile Number *
                      </label>
                      <input
                        type="tel"
                        placeholder="+91-9876543210"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#ea580c]"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="name@company.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#ea580c]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Inquiry Category
                      </label>
                      <select
                        value={inquiryType}
                        onChange={(e) => setInquiryType(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#ea580c] bg-white"
                      >
                        <option value="bulk-supply">Bulk Project / Builder Procurement</option>
                        <option value="dealership">Authorized Dealership / Distributorship</option>
                        <option value="agriculture">Agricultural Pipeline Supply</option>
                        <option value="export">Export & Government Tenders</option>
                        <option value="technical">Technical Datasheets & Consultation</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Project Requirement / Message
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Specify pipe dimensions, estimated quantity, project site location, or questions..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#ea580c]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg bg-[#ea580c] hover:bg-[#c2410c] text-white text-sm font-semibold shadow-md transition-colors"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Inquiry</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
