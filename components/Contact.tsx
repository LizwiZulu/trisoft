import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thanks for contacting Trisoft! We'll be in touch shortly.");
    setFormState({ name: '', email: '', message: '' });
  };

  return (
    <div id="contact" className="py-32 bg-[#030014] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      <div className="absolute right-0 top-1/4 w-[30vw] h-[30vw] bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-6">Ready to transform?</h2>
            <p className="text-slate-400 text-lg">Start your project with Trisoft today.</p>
        </div>

        <div className="rounded-2xl p-8 md:p-12 border border-white/10 shadow-2xl bg-[#0f0c29]/50 backdrop-blur-xl relative overflow-hidden group">
            {/* Glass shine effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-50 pointer-events-none"></div>
            
            <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                    <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-slate-400 ml-1">Name</label>
                    <input
                    type="text"
                    id="name"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({...formState, name: e.target.value})}
                    className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-4 text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all text-sm backdrop-blur-sm hover:bg-black/30"
                    placeholder="John Doe"
                    />
                </div>
                <div className="space-y-2">
                    <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-slate-400 ml-1">Email</label>
                    <input
                    type="email"
                    id="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({...formState, email: e.target.value})}
                    className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-4 text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all text-sm backdrop-blur-sm hover:bg-black/30"
                    placeholder="john@company.com"
                    />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-slate-400 ml-1">How can we help?</label>
                <textarea
                  id="message"
                  rows={4}
                  required
                  value={formState.message}
                  onChange={(e) => setFormState({...formState, message: e.target.value})}
                  className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-4 text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all resize-none text-sm backdrop-blur-sm hover:bg-black/30"
                  placeholder="Tell us about your project goals..."
                />
              </div>

              <button 
                type="submit"
                className="w-full bg-white text-black hover:bg-indigo-50 font-bold py-4 rounded-lg transition-all transform hover:scale-[1.01] flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
              >
                Send Message
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
            
            <div className="mt-10 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500 gap-4 font-mono relative z-10">
                <p>hello@trisoft.co.za</p>
                <p>+27 11 123 4567</p>
                <p>Sandton, Johannesburg</p>
            </div>
        </div>
      </div>
    </div>
  );
};