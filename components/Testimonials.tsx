import React from 'react';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote:
      "Trisoft didn't just build an app; they revolutionized our entire workflow. The AI integration saved us 40 hours a week in manual data processing.",
    author: 'Sarah Jenkins',
    role: 'CTO',
    company: 'FinTech Global',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop',
  },
  {
    id: 2,
    quote:
      'The scalability of the architecture they designed allowed us to handle Black Friday traffic without a single hiccup. Exceptional engineering standards.',
    author: 'David Okafor',
    role: 'Head of Product',
    company: 'ShopEasy Africa',
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop',
  },
  {
    id: 3,
    quote:
      'Professional, agile, and transparent. It felt like they were part of our core team rather than an external agency. The React Native app is flawless.',
    author: 'Elena Rodriguez',
    role: 'Founder',
    company: 'EduTech Solutions',
    image:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=150&auto=format&fit=crop',
  },
];

export const Testimonials: React.FC = () => {
  return (
    <section className="bg-canvas py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-brand-600">
            Testimonials
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-navy md:text-4xl">
            Trusted by <span className="text-brand-600">innovators.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.id}
              className="flex flex-col rounded-2xl border border-slate-200 bg-white p-8 shadow-soft transition-all duration-200 hover:-translate-y-1 hover:shadow-lift"
            >
              <div className="mb-6 flex items-center justify-between">
                <div className="flex gap-1" aria-label="5 out of 5 stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current text-amber-400" />
                  ))}
                </div>
                <Quote className="h-8 w-8 text-slate-200" />
              </div>
              <blockquote className="mb-8 flex-1 leading-relaxed text-slate-700">
                "{t.quote}"
              </blockquote>
              <figcaption className="flex items-center gap-4 border-t border-slate-100 pt-6">
                <img
                  src={t.image}
                  alt={t.author}
                  loading="lazy"
                  className="h-12 w-12 rounded-full object-cover ring-2 ring-brand-100"
                />
                <div>
                  <div className="text-sm font-bold text-navy">{t.author}</div>
                  <div className="text-xs font-medium text-brand-600">
                    {t.role}, {t.company}
                  </div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};
