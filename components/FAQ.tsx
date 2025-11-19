import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "What is your typical project timeline?",
    answer: "Timelines vary by scope, but we pride ourselves on speed without compromising quality. A typical MVP (Minimum Viable Product) takes 4-8 weeks, while complex enterprise systems typically range from 3-6 months. We work in 2-week agile sprints, delivering testable code at the end of every cycle."
  },
  {
    question: "Do you work with startups or established enterprises?",
    answer: "Both! We love helping high-growth startups build their V1 to secure funding, and we have the compliance rigor and architectural expertise to support large-scale enterprise digital transformation projects."
  },
  {
    question: "What happens after the product is launched?",
    answer: "Software is a living organism. We offer comprehensive Service Level Agreements (SLAs) for post-launch maintenance, monitoring, and iterative improvements. We ensure your system stays secure, up-to-date, and scales with your user base."
  },
  {
    question: "Do you outsource development?",
    answer: "No. All our engineering is done in-house by our full-time team of senior developers. This ensures security, code quality control, and seamless communication throughout the project lifecycle."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-[#020005] relative overflow-hidden">
       {/* Decorative Elements */}
       <div className="absolute right-0 top-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
       
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 mb-6 border border-white/10">
            <HelpCircle className="w-6 h-6 text-indigo-400" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-400">
            Everything you need to know about working with Trisoft.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
                <div 
                    key={index} 
                    className={`group rounded-xl border transition-all duration-300 overflow-hidden ${isOpen ? 'bg-white/5 border-indigo-500/50 shadow-[0_0_30px_rgba(99,102,241,0.1)]' : 'bg-transparent border-white/10 hover:bg-white/[0.02]'}`}
                >
                <button 
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full text-left px-6 py-5 flex items-center justify-between cursor-pointer focus:outline-none"
                >
                    <span className={`font-medium text-lg transition-colors ${isOpen ? 'text-white' : 'text-slate-300 group-hover:text-white'}`}>
                        {faq.question}
                    </span>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-indigo-500 text-white rotate-180' : 'bg-white/5 text-slate-500 group-hover:bg-white/10'}`}>
                        {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </div>
                </button>
                
                <div 
                    className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                    <div className="px-6 pb-6 pr-12 text-slate-400 leading-relaxed border-t border-white/5 pt-4">
                    {faq.answer}
                    </div>
                </div>
                </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};