import React from 'react';

const logos = [
  'Acme Corp', 'GlobalBank', 'NebulaAI', 'Vertex', 'Oasis Systems', 
  'Quantico', 'HyperGrid', 'Solaris', 'NextGen', 'CyberDyne',
  'Acme Corp', 'GlobalBank', 'NebulaAI', 'Vertex', 'Oasis Systems', 
  'Quantico', 'HyperGrid', 'Solaris', 'NextGen', 'CyberDyne'
];

export const LogoTicker: React.FC = () => {
  return (
    <div className="py-12 bg-[#020005] border-b border-white/5 overflow-hidden relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#020005] to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#020005] to-transparent z-10"></div>

        <div className="flex items-center gap-8 overflow-hidden">
           <p className="text-xs font-bold uppercase tracking-widest text-slate-600 whitespace-nowrap mr-8 hidden md:block">
             Trusted by Industry Leaders
           </p>
           
           <div className="flex animate-scroll gap-16 pause-on-hover">
             {logos.map((logo, idx) => (
               <div key={idx} className="flex items-center gap-2 opacity-30 grayscale hover:opacity-80 hover:grayscale-0 transition-all duration-500 cursor-default shrink-0">
                 <div className="w-6 h-6 rounded bg-white/20"></div>
                 <span className="text-lg font-bold text-white font-sans tracking-tight">{logo}</span>
               </div>
             ))}
           </div>
        </div>

      </div>
    </div>
  );
};