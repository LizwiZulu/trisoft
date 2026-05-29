import React, { useState } from 'react';
import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react';

const inputClasses =
  'w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-navy placeholder-slate-400 transition-colors focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-600/20';

const contactDetails = [
  { icon: Mail, label: 'hello@trisoft.co.za', href: 'mailto:hello@trisoft.co.za' },
  { icon: Phone, label: '+27 11 123 4567', href: 'tel:+27111234567' },
  { icon: MapPin, label: 'Sandton, Johannesburg', href: undefined },
];

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormState({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="bg-canvas py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-navy md:text-4xl">
            Ready to transform?
          </h2>
          <p className="text-lg text-slate-600">Start your project with Trisoft today.</p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-lift md:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="block text-xs font-bold uppercase tracking-wider text-slate-500"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className={inputClasses}
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="block text-xs font-bold uppercase tracking-wider text-slate-500"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className={inputClasses}
                  placeholder="john@company.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="message"
                className="block text-xs font-bold uppercase tracking-wider text-slate-500"
              >
                How can we help?
              </label>
              <textarea
                id="message"
                rows={4}
                required
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                className={`${inputClasses} resize-none`}
                placeholder="Tell us about your project goals..."
              />
            </div>

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-brand-600 py-3.5 font-semibold text-white shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
            >
              Send Message
              <ArrowRight className="h-5 w-5" />
            </button>

            {submitted && (
              <p
                role="status"
                className="rounded-lg bg-emerald-50 px-4 py-3 text-center text-sm font-medium text-emerald-700"
              >
                Thanks for contacting Trisoft! We'll be in touch shortly.
              </p>
            )}
          </form>

          <div className="mt-10 flex flex-col gap-4 border-t border-slate-100 pt-8 text-sm text-slate-600 sm:flex-row sm:justify-between">
            {contactDetails.map(({ icon: Icon, label, href }) => {
              const content = (
                <span className="flex items-center gap-2">
                  <Icon className="h-4 w-4 text-brand-600" />
                  {label}
                </span>
              );
              return href ? (
                <a key={label} href={href} className="transition-colors hover:text-navy">
                  {content}
                </a>
              ) : (
                <span key={label}>{content}</span>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
