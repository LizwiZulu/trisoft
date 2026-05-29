import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: 'What is your typical project timeline?',
    answer:
      'Timelines vary by scope, but we pride ourselves on speed without compromising quality. A typical MVP takes 4-8 weeks, while complex enterprise systems typically range from 3-6 months. We work in 2-week agile sprints, delivering testable code at the end of every cycle.',
  },
  {
    question: 'Do you work with startups or established enterprises?',
    answer:
      'Both! We love helping high-growth startups build their V1 to secure funding, and we have the compliance rigor and architectural expertise to support large-scale enterprise digital transformation projects.',
  },
  {
    question: 'What happens after the product is launched?',
    answer:
      'Software is a living organism. We offer comprehensive Service Level Agreements (SLAs) for post-launch maintenance, monitoring, and iterative improvements. We ensure your system stays secure, up-to-date, and scales with your user base.',
  },
  {
    question: 'Do you outsource development?',
    answer:
      'No. All our engineering is done in-house by our full-time team of senior developers. This ensures security, code quality control, and seamless communication throughout the project lifecycle.',
  },
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="border-t border-slate-200 bg-white py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <span className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
            <HelpCircle className="h-6 w-6" />
          </span>
          <h2 className="mb-3 text-3xl font-bold tracking-tight text-navy md:text-4xl">
            Frequently asked questions
          </h2>
          <p className="text-slate-600">Everything you need to know about working with Trisoft.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const panelId = `faq-panel-${index}`;
            const buttonId = `faq-button-${index}`;
            return (
              <div
                key={index}
                className={`overflow-hidden rounded-xl border transition-colors ${
                  isOpen ? 'border-brand-200 bg-brand-50/40' : 'border-slate-200 bg-white'
                }`}
              >
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="text-lg font-semibold text-navy">{faq.question}</span>
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors ${
                        isOpen ? 'bg-brand-600 text-white' : 'bg-slate-100 text-slate-500'
                      }`}
                    >
                      {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                    </span>
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  hidden={!isOpen}
                  className="border-t border-brand-100 px-6 pb-6 pt-4 leading-relaxed text-slate-600"
                >
                  {faq.answer}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
