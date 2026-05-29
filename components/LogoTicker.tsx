import React from 'react';

const logos = [
  'Acme Corp', 'GlobalBank', 'NebulaAI', 'Vertex', 'Oasis Systems',
  'Quantico', 'HyperGrid', 'Solaris', 'NextGen', 'CyberDyne',
];

export const LogoTicker: React.FC = () => {
  return (
    <div className="border-y border-slate-200 bg-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-8 text-center text-xs font-semibold uppercase tracking-widest text-slate-400">
          Trusted by industry leaders
        </p>
        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent" />
          <div className="flex w-max animate-marquee gap-16 pause-on-hover">
            {[...logos, ...logos].map((logo, idx) => (
              <div
                key={idx}
                className="flex shrink-0 items-center gap-2 opacity-60 transition-opacity duration-300 hover:opacity-100"
              >
                <span className="h-6 w-6 rounded bg-slate-200" />
                <span className="text-lg font-bold tracking-tight text-slate-500">{logo}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
