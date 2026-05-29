import React from 'react';
import {
  Cpu,
  Smartphone,
  Cloud,
  Zap,
  Database,
  ShieldCheck,
  ArrowUpRight,
  Command,
} from 'lucide-react';
import { ServiceItem, ServiceType } from '../types';

type Service = ServiceItem & { Icon: React.ComponentType<{ className?: string }> };

const services: Service[] = [
  {
    id: '1',
    title: 'Generative Engineering',
    type: ServiceType.CUSTOM_DEV,
    description:
      'We use LLMs to generate boilerplate, write tests, and refactor legacy code 10x faster.',
    icon: 'cpu',
    Icon: Cpu,
  },
  {
    id: '2',
    title: 'Smart Mobile Apps',
    type: ServiceType.MOBILE_APPS,
    description:
      'React Native architectures enhanced with on-device ML for personalized user experiences.',
    icon: 'smartphone',
    Icon: Smartphone,
  },
  {
    id: '3',
    title: 'Cloud Neural Nets',
    type: ServiceType.CLOUD,
    description:
      'Serverless infrastructure on AWS & Azure designed to auto-scale with organic traffic.',
    icon: 'cloud',
    Icon: Cloud,
  },
  {
    id: '4',
    title: 'System Synapses',
    type: ServiceType.INTEGRATION,
    description:
      'Event-driven architectures connecting your CRM, ERP, and AI agents into a single hive mind.',
    icon: 'zap',
    Icon: Zap,
  },
  {
    id: '5',
    title: 'Predictive Analytics',
    type: ServiceType.CONSULTING,
    description:
      'Turn dormant data lakes into future-gazing engines using custom trained models.',
    icon: 'database',
    Icon: Database,
  },
  {
    id: '6',
    title: 'Zero-Trust Security',
    type: ServiceType.CONSULTING,
    description:
      'AI-powered threat detection that evolves faster than new attack vectors.',
    icon: 'lock',
    Icon: ShieldCheck,
  },
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="bg-canvas py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-700">
            <Command className="h-3 w-3" />
            Capabilities
          </span>
          <h2 className="mb-5 text-3xl font-bold tracking-tight text-navy md:text-4xl">
            Full-stack engineering for <span className="text-brand-600">the AI era.</span>
          </h2>
          <p className="text-lg leading-relaxed text-slate-600">
            Traditional software development is too slow. We combine elite human engineers
            with autonomous AI agents to build robust systems at warp speed.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => {
  const { Icon } = service;
  return (
    <article className="group relative flex flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-soft transition-all duration-200 hover:-translate-y-1 hover:border-brand-200 hover:shadow-lift">
      <span className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
        <Icon className="h-6 w-6" />
      </span>
      <h3 className="mb-2 text-xl font-bold text-navy">{service.title}</h3>
      <p className="flex-1 text-sm leading-relaxed text-slate-600">{service.description}</p>
      <span className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-600">
        {service.type}
        <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </span>
    </article>
  );
};
