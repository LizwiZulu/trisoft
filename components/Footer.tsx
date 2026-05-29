import React from 'react';
import { Code2, Github, Twitter, Linkedin } from 'lucide-react';

const columns = [
  {
    title: 'Product',
    links: ['Features', 'Integrations', 'Pricing', 'Changelog'],
  },
  {
    title: 'Company',
    links: ['About', 'Blog', 'Careers', 'Contact'],
  },
  {
    title: 'Legal',
    links: ['Privacy', 'Terms', 'Security'],
  },
];

const socials = [
  { label: 'Twitter', Icon: Twitter },
  { label: 'GitHub', Icon: Github },
  { label: 'LinkedIn', Icon: Linkedin },
];

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-200 bg-white pb-12 pt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="mb-5 flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-navy text-white">
                <Code2 className="h-5 w-5" />
              </span>
              <span className="text-2xl font-bold tracking-tight text-navy">Trisoft</span>
            </div>
            <p className="mb-6 max-w-sm text-lg leading-snug text-slate-600">
              Building the digital future, one line of code at a time.
            </p>
            <div className="flex gap-3">
              {socials.map(({ label, Icon }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 transition-colors hover:border-navy hover:bg-navy hover:text-white"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title} className="md:col-span-2 md:[&:nth-of-type(2)]:col-start-7">
              <h4 className="mb-5 font-semibold text-navy">{col.title}</h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-slate-600 transition-colors hover:text-brand-600">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-8 md:flex-row">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Trisoft (Pty) Ltd.
          </p>
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            All systems operational
          </div>
        </div>
      </div>
    </footer>
  );
};
