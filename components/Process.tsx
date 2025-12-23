import React from 'react';
import { ArrowLeft, Phone, Search, FileSignature, Key, Banknote, ArrowDown } from 'lucide-react';

interface ProcessProps {
  onBack: () => void;
}

const Process: React.FC<ProcessProps> = ({ onBack }) => {
  const steps = [
    {
      icon: Phone,
      title: "Initial Consultation",
      desc: "Contact us via our form or phone. We'll discuss your property details, location, and your financial goals. We provide a preliminary rental valuation based on current Local Housing Allowance (LHA) rates and market demand."
    },
    {
      icon: Search,
      title: "Property Inspection",
      desc: "Our team conducts a physical inspection to ensure the property meets safety standards (Gas Safety, EICR, EPC). We advise on any minor works required to make the property compliant for social housing use."
    },
    {
      icon: FileSignature,
      title: "Lease Agreement",
      desc: "Once the property is ready, we sign a corporate lease agreement with you. This is the moment your income becomes guaranteed. The Access Pathway becomes your tenant, taking on full liability for the rent."
    },
    {
      icon: Key,
      title: "Tenant Placement & Management",
      desc: "We work with our council partners to place families or individuals. You don't need to interview tenants or handle viewings. We manage the move-in process and all ongoing tenant relationships."
    },
    {
      icon: Banknote,
      title: "Monthly Guaranteed Rent",
      desc: "You receive your fixed rental payment on the same day every month. No deductions for commission, no worries about voids, and no stress about maintenance issues."
    }
  ];

  return (
    <section className="pt-32 md:pt-44 pb-16 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <button 
          onClick={onBack}
          className="group flex items-center gap-2 text-slate-500 hover:text-black mb-8 font-medium text-sm transition-colors"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </button>

        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-medium mb-4">
            Step-by-Step Guide
          </div>
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-4">
            How It Works
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Our process is designed to be as simple and hands-off as possible for landlords. Here is exactly what happens when you partner with The Access Pathway.
          </p>
        </div>

        <div className="relative">
            {/* Connecting line */}
            <div className="absolute left-8 md:left-1/2 top-4 bottom-4 w-0.5 bg-slate-100 -translate-x-1/2 hidden md:block"></div>

            <div className="space-y-12 relative">
              {steps.map((step, idx) => (
                <div key={idx} className={`flex flex-col md:flex-row gap-8 items-center ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  
                  <div className="flex-1 w-full md:w-auto">
                     <div className={`bg-white border border-slate-100 p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 relative ${idx % 2 === 0 ? 'text-left' : 'text-left md:text-right'}`}>
                        <div className={`hidden md:flex absolute top-8 ${idx % 2 === 0 ? '-left-3' : '-right-3'} w-6 h-6 bg-white border-t border-r border-slate-100 rotate-45 transform ${idx % 2 === 0 ? '-scale-x-100' : ''}`}></div>
                        <h4 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h4>
                        <p className="text-slate-600 leading-relaxed text-sm">{step.desc}</p>
                     </div>
                  </div>

                  <div className="relative flex-shrink-0 z-10">
                    <div className="w-16 h-16 bg-black text-brand-blue rounded-full flex items-center justify-center shadow-xl border-4 border-white">
                      <step.icon size={24} />
                    </div>
                    <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs font-bold text-slate-300">
                      0{idx + 1}
                    </div>
                  </div>

                  <div className="flex-1 hidden md:block"></div>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center bg-slate-50 rounded-2xl p-8 border border-slate-100">
                <h3 className="text-xl font-bold mb-2">Ready to start?</h3>
                <p className="text-slate-600 mb-6 text-sm">
                  The first step is a simple conversation. Let's see if your property is a good fit.
                </p>
                 <button 
                   onClick={onBack}
                   className="inline-flex flex-col items-center text-brand-blueDark hover:text-black transition-colors"
                 >
                    <span className="text-sm font-bold">Contact Us on the Homepage</span>
                    <ArrowDown size={20} className="mt-1 animate-bounce" />
                 </button>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Process;