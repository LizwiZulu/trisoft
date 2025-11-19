import React from 'react';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote: "Trisoft didn't just build an app; they revolutionized our entire workflow. The AI integration saved us 40 hours a week in manual data processing.",
    author: "Sarah Jenkins",
    role: "CTO",
    company: "FinTech Global",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop"
  },
  {
    id: 2,
    quote: "The scalability of the architecture they designed allowed us to handle Black Friday traffic without a single hiccup. Exceptional engineering standards.",
    author: "David Okafor",
    role: "Head of Product",
    company: "ShopEasy Africa",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop"
  },
  {
    id: 3,
    quote: "Professional, agile, and transparent. It felt like they were part of our core team rather than an external agency. The React Native app is flawless.",
    author: "Elena Rodriguez",
    role: "Founder",
    company: "EduTech Solutions",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=150&auto=format&fit=crop"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-32 bg-[#030014] relative overflow-hidden border-t border-white/5">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-full z-0">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-indigo-600/10 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-fuchsia-600/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-indigo-500 font-bold tracking-widest uppercase text-xs mb-4">Testimonials</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-fuchsia-400">innovators.</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div 
                key={t.id} 
                className="group relative p-8 rounded-2xl bg-[#0f0c29] border border-white/10 hover:border-indigo-500/30 transition-all duration-300 hover:-translate-y-1 shadow-2xl shadow-black/50"
            >
              {/* Gradient Border Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>

              <div className="relative z-10 flex flex-col h-full">
                <div className="mb-6 flex items-center justify-between">
                    <div className="flex gap-1">
                        {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 text-amber-400 fill-current" />)}
                    </div>
                    <Quote className="text-slate-700 group-hover:text-indigo-500/50 w-8 h-8 transition-colors" />
                </div>
                
                <p className="text-slate-300 leading-relaxed mb-8 flex-grow italic">
                  "{t.quote}"
                </p>
                
                <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                  <img 
                    src={t.image} 
                    alt={t.author} 
                    className="w-12 h-12 rounded-full border-2 border-indigo-500/20 object-cover group-hover:border-indigo-500 transition-colors" 
                  />
                  <div>
                    <div className="text-white font-bold text-sm tracking-wide">{t.author}</div>
                    <div className="text-indigo-400 text-xs font-medium">{t.role}, {t.company}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};