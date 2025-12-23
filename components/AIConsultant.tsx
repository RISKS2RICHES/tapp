import React, { useState } from 'react';
import { Sparkles, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { analyzePropertySuitability } from '../services/geminiService';
import { PropertyDetails, LoadingState } from '../types';

const AIConsultant: React.FC = () => {
  const [loading, setLoading] = useState<LoadingState>(LoadingState.IDLE);
  const [result, setResult] = useState<string | null>(null);
  
  const [formData, setFormData] = useState<PropertyDetails>({
    location: '',
    bedrooms: 2,
    type: 'Terraced House',
    condition: 'Ready to Let'
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!process.env.API_KEY) {
        alert("Demo Mode: API Key not configured. Please add API_KEY to environment variables to use real AI.");
        setResult("**Demo Result**: Based on your location in Manchester, a 2-bed terraced house is in **High Demand**. Estimated rent: £850-£950pcm. Verdict: **High Suitability**.");
        return;
    }

    setLoading(LoadingState.LOADING);
    const analysis = await analyzePropertySuitability(formData);
    setResult(analysis);
    setLoading(LoadingState.SUCCESS);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="ai-valuation" className="py-16 bg-brand-black text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-800/30 -skew-x-12 transform origin-top-right"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-2 gap-16 items-start">
          
          <div className="mb-8 lg:mb-0">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/20 text-brand-blue text-sm font-medium mb-6">
              <Sparkles size={16} />
              <span>AI Powered Analysis</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Is Your Property Suitable?
            </h2>
            <p className="text-slate-300 text-lg mb-6 leading-relaxed">
              Use our intelligent property analyzer to get an instant preliminary assessment. 
              Find out if your property fits the criteria for our guaranteed rent council schemes and get a rent estimate range instantly.
            </p>
            
            <div className="p-6 bg-slate-800/50 rounded-xl border border-slate-700">
              <h4 className="font-semibold text-white mb-2 flex items-center gap-2">
                <CheckCircle2 className="text-green-400" size={20} />
                Why use this tool?
              </h4>
              <ul className="space-y-3 text-slate-400 text-sm">
                <li>• Instant feedback on social housing demand in your area</li>
                <li>• Realistic rent estimations based on market data</li>
                <li>• Helps you decide before booking a full consultation</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-2xl text-slate-900">
            <form onSubmit={handleSubmit} className="space-y-6">
              <h3 className="text-xl font-bold mb-4">Property Quick Check</h3>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Property Location (City/Town)</label>
                <input 
                  type="text" 
                  name="location"
                  required
                  placeholder="e.g. Birmingham, B23"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all"
                  value={formData.location}
                  onChange={handleChange}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Bedrooms</label>
                  <select 
                    name="bedrooms"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-blue outline-none"
                    value={formData.bedrooms}
                    onChange={handleChange}
                  >
                    {[1, 2, 3, 4, 5, '6+'].map(num => (
                      <option key={num} value={num}>{num} Bed</option>
                    ))}
                  </select>
                </div>
                <div>
                   <label className="block text-sm font-medium text-slate-700 mb-1">Type</label>
                  <select 
                    name="type"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-blue outline-none"
                    value={formData.type}
                    onChange={handleChange}
                  >
                    <option value="Terraced House">Terraced House</option>
                    <option value="Semi-Detached">Semi-Detached</option>
                    <option value="Detached">Detached</option>
                    <option value="Apartment/Flat">Apartment/Flat</option>
                    <option value="HMO">HMO</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Current Condition</label>
                 <select 
                    name="condition"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-blue outline-none"
                    value={formData.condition}
                    onChange={handleChange}
                  >
                    <option value="Ready to Let">Ready to Let (Excellent)</option>
                    <option value="Minor Decor Needed">Minor Decor Needed</option>
                    <option value="Renovation Required">Renovation Required</option>
                  </select>
              </div>

              <button 
                type="submit" 
                disabled={loading === LoadingState.LOADING}
                className="w-full py-4 bg-black text-white font-bold rounded-lg hover:bg-slate-800 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading === LoadingState.LOADING ? (
                  <>
                    <Loader2 className="animate-spin" size={20} /> Analyzing...
                  </>
                ) : (
                  <>
                    <Sparkles size={20} /> Analyze Potential
                  </>
                )}
              </button>
            </form>

            {result && (
              <div className="mt-8 p-6 bg-brand-blue/10 rounded-xl border border-brand-blue/30 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <Sparkles className="text-brand-blueDark" size={18} />
                  AI Assessment Result
                </h4>
                <div className="prose prose-sm text-slate-700 whitespace-pre-wrap">
                  {result}
                </div>
                <div className="mt-4 pt-4 border-t border-slate-200 text-xs text-slate-500 flex items-center gap-2">
                  <AlertCircle size={14} />
                  <span>Estimates are indicative. Subject to formal inspection.</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIConsultant;