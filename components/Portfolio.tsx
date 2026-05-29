import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'FinTrack Enterprise',
    category: 'FinTech • Web App',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop',
    description:
      'A comprehensive financial dashboard for a leading African bank processing millions in daily transactions. We reduced latency by 60% through optimized caching and server-side rendering.',
    tags: ['React', 'Node.js', 'AWS Lambda', 'Redis'],
  },
  {
    id: 2,
    title: 'MediCore Systems',
    category: 'Healthcare • Mobile',
    image:
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1600&auto=format&fit=crop',
    description:
      'Patient management ecosystem simplifying records for over 50 clinics nationwide. HIPAA compliant and secure by design, featuring real-time doctor-patient messaging.',
    tags: ['React Native', 'Firebase', 'TypeScript', 'WebRTC'],
  },
  {
    id: 3,
    title: 'ShopFlow Commerce',
    category: 'E-Commerce • Headless',
    image:
      'https://images.unsplash.com/photo-1661956602116-aa6865609028?q=80&w=1600&auto=format&fit=crop',
    description:
      'Headless e-commerce architecture improving load times by 400% for a major retail giant. Integrated with multiple payment gateways and AI-driven recommendations.',
    tags: ['Next.js', 'Shopify Plus', 'Vercel', 'Tailwind'],
  },
  {
    id: 4,
    title: 'EduVerse AI',
    category: 'EdTech • AI Platform',
    image:
      'https://images.unsplash.com/photo-1610484826967-09c5720778c7?q=80&w=1600&auto=format&fit=crop',
    description:
      'An adaptive learning platform powered by generative AI that personalizes curriculum for 50,000+ students. Features real-time tutoring and automated grading systems.',
    tags: ['Python', 'TensorFlow', 'React', 'PostgreSQL'],
  },
  {
    id: 5,
    title: 'OmniChain Logistics',
    category: 'Supply Chain • IoT',
    image:
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1600&auto=format&fit=crop',
    description:
      'Real-time fleet tracking and inventory management system using IoT sensors. Reduced delivery delays by 25% for a national logistics network.',
    tags: ['Go', 'gRPC', 'Flutter', 'Kubernetes'],
  },
];

export const Portfolio: React.FC = () => {
  return (
    <section id="work" className="bg-canvas py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 max-w-2xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-brand-600">
            Selected Work
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-navy md:text-4xl">
            Built for impact.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project, idx) => (
            <article
              key={project.id}
              className={`group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft transition-all duration-200 hover:-translate-y-1 hover:shadow-lift ${
                idx === 0 ? 'md:col-span-2 md:flex-row' : ''
              }`}
            >
              <div
                className={`relative overflow-hidden ${
                  idx === 0 ? 'md:w-1/2' : ''
                }`}
              >
                <img
                  src={project.image}
                  alt={`${project.title} — ${project.category}`}
                  loading="lazy"
                  className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                    idx === 0 ? 'h-full min-h-64' : 'h-52'
                  }`}
                />
              </div>
              <div className={`flex flex-1 flex-col p-7 ${idx === 0 ? 'md:w-1/2 md:justify-center' : ''}`}>
                <p className="mb-2 text-xs font-bold uppercase tracking-wider text-brand-600">
                  {project.category}
                </p>
                <h3 className="mb-3 flex items-center gap-2 text-xl font-bold text-navy md:text-2xl">
                  {project.title}
                  <ArrowUpRight className="h-5 w-5 text-slate-300 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand-600" />
                </h3>
                <p className="mb-5 text-sm leading-relaxed text-slate-600">
                  {project.description}
                </p>
                <div className="mt-auto flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
