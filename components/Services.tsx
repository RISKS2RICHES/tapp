import React from 'react';
import { ShieldCheck, Banknote, Hammer, Home, Briefcase, FileCheck, Users } from 'lucide-react';

const Services: React.FC = () => {
  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('contact');
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="services" className="py-8 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h2 className="text-brand-blueDark font-bold tracking-tight uppercase text-xs mb-2">What We Offer</h2>
          <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl mb-3">
            Comprehensive Property Solutions
          </h3>
          <p className="text-base text-slate-600 leading-normal">
            We operate a dual-service model, providing unmatched security for private landlords and essential housing stock for local authorities.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Landlord Services */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
            <div className="bg-black p-5 text-white">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <Briefcase className="text-brand-blue" size={20} />
                For Landlords
              </h3>
              <p className="text-slate-400 mt-1 text-sm">
                Guaranteed rent and complete peace of mind.
              </p>
            </div>
            <div className="p-5 space-y-4">
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-brand-blue/20 rounded-lg flex items-center justify-center text-black">
                  <Banknote size={16} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Guaranteed Rent</h4>
                  <p className="text-slate-600 text-xs mt-0.5 leading-normal">
                    Receive 100% of your rent every month, even if the property is empty. We cover the payments through our council-backed contracts.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-brand-blue/20 rounded-lg flex items-center justify-center text-black">
                  <ShieldCheck size={16} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Full Management & Maintenance</h4>
                  <p className="text-slate-600 text-xs mt-0.5 leading-normal">
                    We handle all repairs, tenant queries, and inspections. Minor maintenance is covered at no cost to you.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-brand-blue/20 rounded-lg flex items-center justify-center text-black">
                  <FileCheck size={16} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Long-Term Corporate Leases</h4>
                  <p className="text-slate-600 text-xs mt-0.5 leading-normal">
                    Contracts typically run from 3 to 5 years, providing long-term financial stability without the need to find new tenants.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Council/Social Services */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
            <div className="bg-brand-blue p-5 text-black">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <Home className="text-white" size={20} />
                For Councils
              </h3>
              <p className="text-slate-800 mt-1 font-medium text-sm">
                High-quality housing stock for communities.
              </p>
            </div>
            <div className="p-5 space-y-4">
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-black/5 rounded-lg flex items-center justify-center text-black">
                  <ShieldCheck size={16} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Standards & Compliance</h4>
                  <p className="text-slate-600 text-xs mt-0.5 leading-normal">
                    All properties are vetted to meet strict safety and living standards before being offered for social schemes.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-black/5 rounded-lg flex items-center justify-center text-black">
                  <Hammer size={16} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Emergency Accommodation</h4>
                  <p className="text-slate-600 text-xs mt-0.5 leading-normal">
                    Rapid turnaround housing solutions for urgent cases, helping councils meet their statutory duties efficiently.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-black/5 rounded-lg flex items-center justify-center text-black">
                  <Users size={16} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Vulnerable Support</h4>
                  <p className="text-slate-600 text-xs mt-0.5 leading-normal">
                    We work specifically to house vulnerable people and families, providing stable foundations for them to rebuild their lives.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
            <a 
              href="#contact" 
              onClick={scrollToContact}
              className="inline-block bg-black text-brand-blue px-6 py-3 rounded-full font-bold hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 text-sm"
            >
                Discuss Our Services
            </a>
        </div>
      </div>
    </section>
  );
};

export default Services;