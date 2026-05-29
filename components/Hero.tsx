import React from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Shield,
  Users,
  Activity,
  Server,
  Globe,
  Database,
  Zap,
} from 'lucide-react';

const chartData = [42, 58, 50, 68, 60, 78, 70, 85, 74, 66, 88, 95];

const kpis = [
  { icon: Server, label: 'System load', value: '34%' },
  { icon: Globe, label: 'CDN status', value: 'Global' },
  { icon: Database, label: 'DB latency', value: '12ms' },
  { icon: Zap, label: 'API uptime', value: '99.9%' },
];

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pb-20 pt-36"
    >
      {/* Soft ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-50/60 via-canvas to-canvas" />
        <div className="absolute -top-24 right-0 h-[28rem] w-[28rem] rounded-full bg-brand-200/40 blur-[120px]" />
      </div>

      <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-16 px-4 sm:px-6 lg:px-8">
        {/* Copy */}
        <div className="flex max-w-3xl flex-col items-center text-center">
          <span className="mb-7 inline-flex animate-fade-up items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-700">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-600" />
            </span>
            Available for new projects
          </span>

          <h1
            className="mb-6 animate-fade-up text-4xl font-extrabold leading-[1.1] tracking-tight text-navy sm:text-5xl md:text-6xl"
            style={{ animationDelay: '0.05s' }}
          >
            Digital solutions
            <br />
            <span className="text-brand-600">engineered for growth.</span>
          </h1>

          <p
            className="mb-10 max-w-2xl animate-fade-up text-lg leading-relaxed text-slate-600"
            style={{ animationDelay: '0.1s' }}
          >
            Trisoft transforms complex business challenges into elegant software solutions.
            From cloud architecture to AI integration, we build the technology that powers
            your future.
          </p>

          <div
            className="flex animate-fade-up flex-col gap-3 sm:flex-row"
            style={{ animationDelay: '0.15s' }}
          >
            <a
              href="#work"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-600 px-7 py-3.5 text-base font-semibold text-white shadow-lift transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
            >
              View Case Studies
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-7 py-3.5 text-base font-semibold text-navy transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-400 hover:bg-slate-50"
            >
              Contact Sales
            </a>
          </div>
        </div>

        {/* Product preview */}
        <div
          className="relative hidden w-full max-w-5xl animate-fade-up md:block"
          style={{ animationDelay: '0.25s' }}
        >
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-float">
            {/* Window chrome */}
            <div className="flex h-11 items-center justify-between border-b border-slate-100 bg-slate-50 px-5">
              <div className="flex gap-1.5">
                <span className="h-3 w-3 rounded-full bg-slate-300" />
                <span className="h-3 w-3 rounded-full bg-slate-300" />
                <span className="h-3 w-3 rounded-full bg-slate-300" />
              </div>
              <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                <span className="font-mono text-[10px] uppercase tracking-wider text-slate-500">
                  Live preview
                </span>
              </div>
              <div className="w-12" />
            </div>

            {/* Dashboard body */}
            <div className="grid grid-cols-1 gap-6 p-6 lg:grid-cols-[1fr_auto]">
              <div>
                <div className="mb-6 flex items-start justify-between">
                  <div>
                    <p className="mb-1 text-xs font-medium text-slate-500">Total Revenue</p>
                    <p className="text-3xl font-bold tracking-tight text-navy">$124,500</p>
                    <p className="mt-1 flex items-center gap-1 text-xs font-semibold text-emerald-600">
                      <ArrowUpRight className="h-3.5 w-3.5" />
                      +12.5% vs last month
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500">
                      <Activity className="h-4 w-4" />
                    </span>
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-600 text-white shadow-soft">
                      <BarChart3 className="h-4 w-4" />
                    </span>
                  </div>
                </div>

                {/* Bar chart */}
                <div className="flex h-44 items-end justify-between gap-1.5 rounded-xl border border-slate-100 bg-slate-50/60 p-4">
                  {chartData.map((h, i) => (
                    <div
                      key={i}
                      className="w-full rounded-t bg-brand-500/80 transition-colors hover:bg-brand-600"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>

                {/* KPI tiles */}
                <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {kpis.map(({ icon: Icon, label, value }) => (
                    <div
                      key={label}
                      className="rounded-xl border border-slate-100 bg-white p-3 shadow-soft"
                    >
                      <Icon className="mb-2 h-4 w-4 text-brand-600" />
                      <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-500">
                        {label}
                      </p>
                      <p className="text-base font-bold text-navy">{value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Floating cards */}
          <div className="absolute -right-6 top-16 hidden w-52 animate-float rounded-xl border border-slate-200 bg-white p-4 shadow-float lg:block">
            <div className="mb-3 flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                <Shield className="h-5 w-5" />
              </span>
              <div>
                <p className="text-[10px] font-semibold uppercase text-slate-500">Security Audit</p>
                <p className="text-sm font-bold text-navy">Passed</p>
              </div>
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100">
              <div className="h-full w-full bg-emerald-500" />
            </div>
          </div>

          <div
            className="absolute -left-6 bottom-12 hidden animate-float rounded-xl border border-slate-200 bg-white p-4 shadow-float lg:block"
            style={{ animationDelay: '2s' }}
          >
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                <Users className="h-5 w-5" />
              </span>
              <div>
                <p className="text-[10px] font-semibold uppercase text-slate-500">New Users</p>
                <p className="text-sm font-bold text-navy">+1,240</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
