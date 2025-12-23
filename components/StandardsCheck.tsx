import React, { useState } from 'react';
import { ClipboardCheck, Check, AlertTriangle, CheckCircle2, XCircle } from 'lucide-react';

const StandardsCheck: React.FC = () => {
  const [checklist, setChecklist] = useState({
    gasSafety: false,
    electricalSafety: false,
    epc: false,
    smokeAlarms: false,
    dampFree: false,
    heating: false,
    secure: false,
    decor: false
  });

  const [showResult, setShowResult] = useState(false);

  const requirements = [
    { key: 'gasSafety', label: 'Valid Gas Safety Certificate', desc: 'Annual check by a Gas Safe engineer.' },
    { key: 'electricalSafety', label: 'Valid EICR Certificate', desc: 'Electrical Installation Condition Report.' },
    { key: 'epc', label: 'EPC Rating E or Above', desc: 'Valid Energy Performance Certificate.' },
    { key: 'smokeAlarms', label: 'Smoke & CO Alarms', desc: 'Working alarms on every floor/appliance.' },
    { key: 'dampFree', label: 'Free from Damp & Mould', desc: 'No visible damp, mould, or condensation.' },
    { key: 'heating', label: 'Heating & Hot Water', desc: 'Boiler and radiators in good order.' },
    { key: 'secure', label: 'Secure Doors & Windows', desc: 'All external entries are lockable.' },
    { key: 'decor', label: 'Good State of Repair', desc: 'Clean, neutral decor, no hazards.' }
  ];

  const toggleItem = (key: string) => {
    setChecklist(prev => ({ ...prev, [key as keyof typeof checklist]: !prev[key as keyof typeof checklist] }));
    setShowResult(false);
  };

  const handleCheck = () => {
    setShowResult(true);
  };

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const headerOffset = 80;
      const elementPosition = contactSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const allChecked = Object.values(checklist).every(Boolean);
  const checkedCount = Object.values(checklist).filter(Boolean).length;

  return (
    <section id="standards-check" className="py-8 bg-white text-slate-900 relative overflow-hidden scroll-mt-24">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 -skew-x-12 transform origin-top-right"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-10 items-start">
          
          <div className="lg:col-span-5 mb-5 lg:mb-0">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/20 text-brand-blueDark text-xs font-medium mb-4">
              <ClipboardCheck size={14} />
              <span>Compliance Check</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">
              Is Your Property Ready?
            </h2>
            <p className="text-slate-600 text-base mb-4 leading-normal">
              To participate in our council-backed guaranteed rent scheme, properties must meet specific safety and quality standards. Use this checklist to see if your property qualifies immediately.
            </p>
            
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
              <h4 className="font-semibold text-slate-900 mb-1 flex items-center gap-2 text-sm">
                <AlertTriangle className="text-brand-blueDark" size={16} />
                Why these standards matter?
              </h4>
              <p className="text-slate-600 text-xs leading-normal">
                Local authorities require strict compliance to ensure safe housing for vulnerable tenants. Meeting these standards ensures a faster lease agreement and immediate rent commencement.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 bg-white rounded-xl p-5 sm:p-6 shadow-xl border border-slate-100 text-slate-900">
            <h3 className="text-lg font-bold mb-4">Property Standards Checklist</h3>
            
            <div className="grid sm:grid-cols-2 gap-3 mb-6">
              {requirements.map((req) => (
                <button
                  key={req.key}
                  onClick={() => toggleItem(req.key)}
                  className={`text-left p-3 rounded-lg border transition-all duration-200 relative group ${
                    checklist[req.key as keyof typeof checklist]
                      ? 'border-brand-blue bg-brand-blue/5'
                      : 'border-slate-100 hover:border-slate-300'
                  }`}
                >
                  <div className="flex justify-between items-start mb-0.5">
                    <span className={`font-bold text-xs ${checklist[req.key as keyof typeof checklist] ? 'text-black' : 'text-slate-700'}`}>
                      {req.label}
                    </span>
                    <div className={`w-4 h-4 rounded-full flex items-center justify-center border ${
                      checklist[req.key as keyof typeof checklist]
                        ? 'bg-brand-blue border-brand-blue text-black'
                        : 'border-slate-300 bg-white'
                    }`}>
                      {checklist[req.key as keyof typeof checklist] && <Check size={10} strokeWidth={4} />}
                    </div>
                  </div>
                  <p className="text-[10px] text-slate-500">{req.desc}</p>
                </button>
              ))}
            </div>

            {!showResult ? (
              <button 
                onClick={handleCheck}
                className="w-full py-3 bg-black text-white font-bold rounded-lg hover:bg-slate-800 transition-all flex items-center justify-center gap-2 text-sm"
              >
                Check Eligibility
              </button>
            ) : (
              <div className={`p-5 rounded-xl border animate-in fade-in slide-in-from-bottom-4 duration-500 ${allChecked ? 'bg-green-50 border-green-200' : 'bg-amber-50 border-amber-200'}`}>
                {allChecked ? (
                  <div className="flex items-start gap-3">
                    <div className="p-1.5 bg-green-100 rounded-full text-green-700">
                      <CheckCircle2 size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-green-800 text-base">Excellent! Your Property Qualifies.</h4>
                      <p className="text-green-700 text-xs mt-1 mb-3">
                        Your property meets all the core requirements for our guaranteed rent scheme. We can proceed directly to a valuation and lease agreement.
                      </p>
                      <a 
                        href="#contact" 
                        onClick={scrollToContact}
                        className="inline-block bg-green-700 text-white px-5 py-2 rounded-lg font-semibold text-xs hover:bg-green-800 transition-colors"
                      >
                        Book Valuation Now
                      </a>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-start gap-3">
                     <div className="p-1.5 bg-amber-100 rounded-full text-amber-700">
                      <XCircle size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-amber-800 text-base">Almost There ({checkedCount}/8)</h4>
                      <p className="text-amber-700 text-xs mt-1 mb-3">
                        Your property has potential, but requires a few updates to be compliant. We can often help arrange these certificates or works as part of our management service.
                      </p>
                      <a 
                        href="#contact" 
                        onClick={scrollToContact}
                        className="inline-block bg-amber-700 text-white px-5 py-2 rounded-lg font-semibold text-xs hover:bg-amber-800 transition-colors"
                      >
                        Discuss Upgrades With Us
                      </a>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StandardsCheck;