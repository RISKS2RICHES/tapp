import React from 'react';
import { ShieldCheck, Home, Banknote, ClipboardCheck, Mail } from 'lucide-react';

interface HeroProps {
  onNavigateToHowItWorks: () => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigateToHowItWorks }) => {
  const scrollToCheck = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('standards-check');
    if (element) {
      const headerOffset = 130; 
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const scrollToContact = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const element = document.getElementById('contact');
    if (element) {
      const headerOffset = 130;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="relative pt-32 pb-10 md:pt-44 lg:pb-16 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-blue/30 text-slate-900 font-medium text-xs mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-black"></span>
          Council-Backed Guarantee
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight mb-4">
          Guaranteed Rent.<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-600">
            Zero Hassle.
          </span>
        </h1>
        <p className="text-base sm:text-lg text-slate-600 mb-8 leading-normal max-w-2xl mx-auto">
          We partner with landlords and councils across the UK to provide high-quality social housing. Enjoy fixed monthly income, full property management, and the peace of mind that comes with helping communities thrive.
        </p>
        
        <div className="flex flex-col items-center gap-4 mb-10">
          <div className="flex flex-col sm:flex-row items-center gap-3 justify-center w-full">
            <a 
              href="#standards-check"
              onClick={scrollToCheck}
              className="w-full sm:w-auto px-6 py-3 bg-brand-blue text-brand-black font-semibold rounded-lg hover:bg-brand-blueDark transition-all flex items-center justify-center gap-2 text-sm"
            >
              Check Eligibility <ClipboardCheck size={16} />
            </a>
            <button 
              onClick={onNavigateToHowItWorks}
              className="w-full sm:w-auto px-6 py-3 bg-white border border-slate-200 text-slate-900 font-semibold rounded-lg hover:border-black transition-all text-sm"
            >
              How It Works
            </button>
          </div>
          
          <button 
            onClick={scrollToContact}
            className="text-slate-500 hover:text-black font-medium text-sm flex items-center gap-2 px-4 py-2 hover:bg-slate-50 rounded-lg transition-colors"
          >
            <Mail size={16} /> Contact Us
          </button>
        </div>
        
        <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-10 text-slate-500 text-xs font-medium">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="text-black" size={16} />
            <span>Fully Managed</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Banknote className="text-black" size={16} />
            <span>Guaranteed Rent</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Home className="text-black" size={16} />
            <span>Nationwide</span>
          </div>
        </div>

        {/* Background blobs for visual interest without images */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-blue/5 blur-3xl rounded-full -z-10"></div>
      </div>
    </section>
  );
};

export default Hero;