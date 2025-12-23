import React from 'react';
import { Target, Heart, Map, Users } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-8 bg-white relative overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-brand-blue/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h2 className="text-brand-blueDark font-bold tracking-tight uppercase text-xs mb-2">Who We Are</h2>
          <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl mb-3">
            Bridging the Gap Between Investment & Impact
          </h3>
          <p className="text-base text-slate-600 leading-normal">
            The Access Pathway was founded on a simple principle: Property investment should be secure for landlords and beneficial for society. We connect the private rental sector with the urgent need for high-quality social housing.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 mb-8">
          <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 hover:shadow-md transition-shadow">
            <div className="w-10 h-10 bg-black text-brand-blue rounded-lg flex items-center justify-center mb-4">
              <Target size={20} />
            </div>
            <h4 className="text-lg font-bold text-slate-900 mb-2">Our Mission</h4>
            <p className="text-slate-600 leading-normal text-sm">To provide a seamless pathway for landlords to secure guaranteed income while simultaneously creating safe, high-standard homes for families and vulnerable individuals backed by local councils.</p>
          </div>

          <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 hover:shadow-md transition-shadow">
            <div className="w-10 h-10 bg-black text-brand-blue rounded-lg flex items-center justify-center mb-4">
              <Heart size={20} />
            </div>
            <h4 className="text-lg font-bold text-slate-900 mb-2">Social Responsibility</h4>
            <p className="text-slate-600 leading-normal text-sm">We believe everyone deserves a safe place to call home. Our properties support emergency accommodation, temporary housing, and long-term social solutions, giving dignity back to those in need.</p>
          </div>

          <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 hover:shadow-md transition-shadow">
            <div className="w-10 h-10 bg-black text-brand-blue rounded-lg flex items-center justify-center mb-4">
              <Map size={20} />
            </div>
            <h4 className="text-lg font-bold text-slate-900 mb-2">National Reach</h4>
            <p className="text-slate-600 leading-normal text-sm">Operating across the UK, from major cities to regional hubs. Wherever there is a demand for social housing, The Access Pathway is there to manage the supply.</p>
          </div>
        </div>

        <div className="bg-black rounded-xl p-8 text-center relative overflow-hidden">
           <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
           <div className="relative z-10">
            <div className="w-12 h-12 bg-brand-blue rounded-full flex items-center justify-center mx-auto mb-4 text-black">
                <Users size={24} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Dedicated to Excellence</h3>
            <p className="max-w-2xl mx-auto text-slate-300 text-sm leading-normal">
                "We don't just hand over keys. We fully manage every aspect of the property lifecycle, ensuring landlords have peace of mind and tenants have a respectful, well-maintained environment."
            </p>
           </div>
        </div>
      </div>
    </section>
  );
};

export default About;