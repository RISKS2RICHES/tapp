import React, { useState } from 'react';
import { Mail } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `New Inquiry from ${formData.firstName} ${formData.lastName}`;
    const body = `Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}

Message:
${formData.message}`;
    
    window.location.href = `mailto:info@theaccesspathway.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">Partner With Us</h2>
            <p className="text-slate-600 text-base mb-6 leading-normal">
              Ready to secure your rental income and make a difference? Get in touch with our team today to discuss your property portfolio.
            </p>
            
            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <div className="p-2.5 bg-slate-100 rounded-lg">
                  <Mail className="text-black" size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Email Us</h4>
                  <p className="text-slate-600 text-sm">info@theaccesspathway.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">First Name</label>
                  <input 
                    type="text" 
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-3 py-2.5 rounded-lg border border-slate-300 focus:ring-1 focus:ring-black outline-none bg-white text-sm" 
                    placeholder="John" 
                    required 
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">Last Name</label>
                  <input 
                    type="text" 
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-3 py-2.5 rounded-lg border border-slate-300 focus:ring-1 focus:ring-black outline-none bg-white text-sm" 
                    placeholder="Doe" 
                    required 
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">Email Address</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2.5 rounded-lg border border-slate-300 focus:ring-1 focus:ring-black outline-none bg-white text-sm" 
                  placeholder="john@example.com" 
                  required 
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">Message</label>
                <textarea 
                  rows={3} 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-3 py-2.5 rounded-lg border border-slate-300 focus:ring-1 focus:ring-black outline-none bg-white text-sm" 
                  placeholder="I have a 3 bed property in Leeds..." 
                  required
                ></textarea>
              </div>

              <button type="submit" className="w-full bg-brand-blue text-black font-bold py-3 rounded-lg hover:bg-brand-blueDark transition-colors text-sm">
                Send Message via Email
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;