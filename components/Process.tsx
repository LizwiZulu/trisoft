import React, { useState } from 'react';
import { Search, Layout, Code2, Rocket } from 'lucide-react';

const steps = [
  {
    id: 'discovery',
    label: 'Phase 01',
    title: 'Discovery & Strategy',
    description:
      'We deep dive into your business goals to define a data-driven roadmap, scoping the architecture, milestones, and success metrics before a line of code is written.',
    icon: Search,
    detail: ['Stakeholder workshops', 'Technical audit', 'Product roadmap'],
  },
  {
    id: 'design',
    label: 'Phase 02',
    title: 'UX/UI Design',
    description:
      'Crafting intuitive, high-fidelity interfaces that drive user engagement, backed by a reusable design system and validated through interactive prototypes.',
    icon: Layout,
    detail: ['Wireframes', 'Design system', 'Clickable prototype'],
  },
  {
    id: 'dev',
    label: 'Phase 03',
    title: 'Agile Development',
    description:
      'Iterative sprints using modern, scalable tech stacks and rigorous automated testing, with shippable, reviewable code delivered at the end of every cycle.',
    icon: Code2,
    detail: ['2-week sprints', 'CI/CD pipelines', 'Automated testing'],
  },
  {
    id: 'launch',
    label: 'Phase 04',
    title: 'Launch & Scale',
    description:
      'Secure deployment, performance monitoring, and continuous optimization, with SLAs that keep your system fast, observable, and ready for growth.',
    icon: Rocket,
    detail: ['Zero-downtime deploy', 'Observability', 'Ongoing SLAs'],
  },
];

export const Process: React.FC = () => {
  const [active, setActive] = useState(0);
  const ActiveIcon = steps[active].icon;

  return (
    <section id="process" className="border-y border-slate-200 bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 max-w-2xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-brand-600">
            Workflow
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-navy md:text-4xl">
            From concept to <span className="text-brand-600">code.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Step list */}
          <ol className="relative space-y-2 border-l border-slate-200 pl-0">
            {steps.map((step, idx) => {
              const isActive = active === idx;
              const StepIcon = step.icon;
              return (
                <li key={step.id}>
                  <button
                    type="button"
                    onClick={() => setActive(idx)}
                    aria-current={isActive}
                    className={`group flex w-full items-start gap-4 rounded-r-xl border-l-2 py-4 pl-5 pr-4 text-left transition-colors ${
                      isActive
                        ? 'border-brand-600 bg-brand-50/60'
                        : 'border-transparent hover:bg-slate-50'
                    }`}
                  >
                    <span
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-colors ${
                        isActive
                          ? 'bg-brand-600 text-white'
                          : 'bg-slate-100 text-slate-500 group-hover:bg-slate-200'
                      }`}
                    >
                      <StepIcon className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="mb-1 block text-xs font-bold uppercase tracking-wider text-brand-600">
                        {step.label}
                      </span>
                      <span
                        className={`block text-lg font-bold ${
                          isActive ? 'text-navy' : 'text-slate-700'
                        }`}
                      >
                        {step.title}
                      </span>
                      <span className="mt-1 block text-sm leading-relaxed text-slate-600">
                        {step.description}
                      </span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>

          {/* Detail panel */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 shadow-soft">
              <span className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-600 text-white shadow-lift">
                <ActiveIcon className="h-7 w-7" />
              </span>
              <p className="mb-2 text-xs font-bold uppercase tracking-wider text-brand-600">
                {steps[active].label}
              </p>
              <h3 className="mb-3 text-2xl font-bold text-navy">{steps[active].title}</h3>
              <p className="mb-6 leading-relaxed text-slate-600">
                {steps[active].description}
              </p>
              <ul className="space-y-3">
                {steps[active].detail.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm font-medium text-slate-700">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
