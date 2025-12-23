import React from 'react';
import { Hammer, Coins, Users, Clock, Shield, MapPin } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: Coins,
      title: "Guaranteed Rent",
      description: "Receive your rent every month, regardless of occupancy. Backed by long-term council contracts, minimizing your financial risk."
    },
    {
      icon: Hammer,
      title: "Full Maintenance",
      description: "We handle all day-to-day maintenance and repairs. Your property is kept in excellent condition without you lifting a finger."
    },
    {
      icon: Shield,
      title: "Zero Risk",
      description: "No fear of property misuse. We vet tenants via council referrals and conduct regular inspections to ensure standards are met."
    },
    {
      icon: Users,
      title: "Social Impact",
      description: "Directly contribute to solving the housing crisis. Provide safe, warm homes for vulnerable families and individuals in need."
    },
    {
      icon: Clock,
      title: "Long-Term Leases",
      description: "We typically sign 3-5 year corporate lease agreements, giving you long-term stability and security for your investment."
    },
    {
      icon: MapPin,
      title: "Nationwide Service",
      description: "From London to Leeds, Birmingham to Bristol. We operate across the UK, managing portfolios of all sizes."
    }
  ];

  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-blue font-bold tracking-wide uppercase text-sm mb-3">Our Promise</h2>
          <h3 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-6">
            Everything a Landlord Needs.<br/> Nothing They Don't.
          </h3>
          <p className="text-lg text-slate-600">
            The Access Pathway bridges the gap between private investment and public sector housing needs. We take the stress out of letting while ensuring you get paid.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 bg-brand-blue/30 rounded-xl flex items-center justify-center text-black mb-6">
                <feature.icon size={28} strokeWidth={1.5} />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h4>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;