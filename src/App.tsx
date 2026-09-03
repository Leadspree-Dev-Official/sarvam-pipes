import React, { useState } from 'react';
import { TopBar } from './components/TopBar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductSection } from './components/ProductSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { IndustriesSection } from './components/IndustriesSection';
import { QualitySection } from './components/QualitySection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

import { ProductItem } from './types';
import { QuoteModal } from './components/QuoteModal';
import { BrochureModal } from './components/BrochureModal';
import { ProductDetailModal } from './components/ProductDetailModal';
import { PipeCalculatorModal } from './components/PipeCalculatorModal';
import { AboutModal } from './components/AboutModal';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isBrochureModalOpen, setIsBrochureModalOpen] = useState(false);
  const [isCalculatorModalOpen, setIsCalculatorModalOpen] = useState(false);
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  const [quoteInitialProduct, setQuoteInitialProduct] = useState<ProductItem | null>(null);
  const [quoteInitialIndustry, setQuoteInitialIndustry] = useState<string | undefined>();

  // Smooth scroll handler
  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenQuote = (product?: ProductItem, industryName?: string) => {
    if (product) {
      setQuoteInitialProduct(product);
    } else {
      setQuoteInitialProduct(null);
    }
    setQuoteInitialIndustry(industryName);
    setIsQuoteModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col selection:bg-orange-500 selection:text-white">
      {/* 1. Top Contact Bar (MIDC Pune, Phone, Email) */}
      <TopBar />

      {/* 2. Main Sticky Navigation Bar with Sarvam Logo & Request a Quote */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onRequestQuote={() => handleOpenQuote()}
        onOpenCalculator={() => setIsCalculatorModalOpen(true)}
        onOpenBrochure={() => setIsBrochureModalOpen(true)}
      />

      <main className="flex-1">
        {/* 3. Hero Section matching reference screenshot */}
        <Hero
          onExploreProducts={() => handleNavigate('products')}
          onDownloadBrochure={() => setIsBrochureModalOpen(true)}
          onRequestQuote={() => handleOpenQuote()}
        />

        {/* 4. Our PVC Pipe Products (5 Cards & View All Products) */}
        <ProductSection
          onSelectProduct={(product) => setSelectedProduct(product)}
          onRequestQuote={(product) => handleOpenQuote(product)}
          onOpenBrochure={() => setIsBrochureModalOpen(true)}
        />

        {/* 5. Why Choose Sarvam Pipes (Extrusion line photo, text, 3 orange stat boxes: 20+, 30,000+, 1000+) */}
        <WhyChooseUs
          onLearnMore={() => setIsAboutModalOpen(true)}
          onRequestQuote={() => handleOpenQuote()}
        />

        {/* 6. Industries We Serve (5 Illustrated cards matching reference) */}
        <IndustriesSection
          onRequestQuote={(industryName) => handleOpenQuote(undefined, industryName)}
          onExploreProducts={() => handleNavigate('products')}
        />

        {/* 7. Quality Assurance & Lab Testing Section */}
        <QualitySection
          onRequestQuote={() => handleOpenQuote()}
          onOpenBrochure={() => setIsBrochureModalOpen(true)}
        />

        {/* 8. Contact Us Section with MIDC Pune Plant address & Inquiry Form */}
        <ContactSection />
      </main>

      {/* 9. Navy Blue Footer matching reference screenshot */}
      <Footer
        onNavigate={handleNavigate}
        onRequestQuote={() => handleOpenQuote()}
        onOpenBrochure={() => setIsBrochureModalOpen(true)}
      />

      {/* --- Interactive Modals for Full Functionality --- */}
      {/* Request a Quote Modal / RFQ Engine */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        initialProduct={quoteInitialProduct}
        initialIndustry={quoteInitialIndustry}
      />

      {/* Download Brochure & Catalog Viewer */}
      <BrochureModal
        isOpen={isBrochureModalOpen}
        onClose={() => setIsBrochureModalOpen(false)}
        onRequestQuote={() => {
          setIsBrochureModalOpen(false);
          handleOpenQuote();
        }}
      />

      {/* Detailed Product Specifications Modal */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onRequestQuote={(prod) => {
          setSelectedProduct(null);
          handleOpenQuote(prod);
        }}
      />

      {/* Pipe Weight, Volume & Logistics Calculator */}
      <PipeCalculatorModal
        isOpen={isCalculatorModalOpen}
        onClose={() => setIsCalculatorModalOpen(false)}
        onRequestQuote={(calcSummary) => {
          setIsCalculatorModalOpen(false);
          handleOpenQuote();
        }}
      />

      {/* Detailed About Us & Extrusion Process Modal */}
      <AboutModal
        isOpen={isAboutModalOpen}
        onClose={() => setIsAboutModalOpen(false)}
        onRequestQuote={() => {
          setIsAboutModalOpen(false);
          handleOpenQuote();
        }}
        onOpenBrochure={() => {
          setIsAboutModalOpen(false);
          setIsBrochureModalOpen(true);
        }}
      />
    </div>
  );
}
