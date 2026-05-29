import React, { useState } from 'react';
import { Terminal, Copy, Check, Wifi } from 'lucide-react';

const codeTabs = [
  {
    name: 'api.ts',
    language: 'typescript',
    code: `import { TrisoftClient } from '@trisoft/sdk';

// Initialize secure client
const client = new TrisoftClient({
  apiKey: process.env.TRISOFT_KEY,
  environment: 'production',
  region: 'af-south-1'
});

// Execute AI-driven analytics
async function analyzeGrowth() {
  const stream = await client.ai.predict({
    dataset: 'sales_q4',
    model: 'forecaster-v3',
    parameters: {
      confidence: 0.99,
      horizon: '30d'
    }
  });

  // Stream real-time predictions
  for await (const chunk of stream) {
    console.log('Prediction:', chunk.data);
    // Automatically sync to dashboard
    await client.dashboard.update(chunk);
  }
}`,
  },
  {
    name: 'config.json',
    language: 'json',
    code: `{
  "app_name": "Trisoft_Enterprise_Core",
  "version": "2.4.0",
  "infrastructure": {
    "provider": "aws",
    "scaling": "auto_predictive",
    "regions": ["us-east-1", "eu-west-1"],
    "security": {
      "encryption": "AES-256-GCM",
      "compliance": ["GDPR", "POPIA", "HIPAA"],
      "audit_log": true
    }
  },
  "ai_modules": {
    "nlp": { "enabled": true, "model": "gpt-4-turbo" },
    "vision": { "enabled": true, "framerate": 60 },
    "sentiment": { "enabled": true, "realtime": true }
  }
}`,
  },
];

const highlight = (line: string) =>
  line
    .replace(
      /\b(import|from|const|async|function|await|return|export|class|for|of|new)\b/g,
      '<span class="text-fuchsia-300">$&</span>'
    )
    .replace(/'[^']*'|"[^"]*"/g, '<span class="text-emerald-300">$&</span>')
    .replace(/\/\/.*/g, '<span class="text-slate-500 italic">$&</span>')
    .replace(
      /\b(TrisoftClient|process|console|true|false)\b/g,
      '<span class="text-amber-300">$&</span>'
    );

const features = [
  'TypeScript by default',
  '100% test coverage',
  'Automated CI/CD pipelines',
  'Dockerized environments',
];

export const CodeDemo: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(codeTabs[activeTab].code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="border-y border-slate-200 bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Copy */}
          <div>
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-700">
              <Terminal className="h-3 w-3" />
              Developer Experience
            </span>
            <h2 className="mb-5 text-3xl font-bold tracking-tight text-navy md:text-4xl">
              Clean code.
              <br />
              <span className="text-slate-400">Scalable architecture.</span>
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-slate-600">
              We don't just build for today. We engineer typesafe, documented, and modular
              systems that your internal team will actually enjoy working with.
            </p>
            <ul className="space-y-4">
              {features.map((item) => (
                <li key={item} className="flex items-center gap-3 text-slate-700">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Code panel */}
          <div className="overflow-hidden rounded-xl border border-slate-800 bg-[#0f1729] shadow-float">
            <div className="flex items-center justify-between border-b border-white/5 bg-[#0b1120] px-4 py-3">
              <div className="flex gap-2">
                <span className="h-3 w-3 rounded-full bg-white/20" />
                <span className="h-3 w-3 rounded-full bg-white/20" />
                <span className="h-3 w-3 rounded-full bg-white/20" />
              </div>
              <div className="flex gap-1 rounded-lg bg-black/30 p-1">
                {codeTabs.map((tab, i) => (
                  <button
                    key={tab.name}
                    type="button"
                    onClick={() => setActiveTab(i)}
                    className={`rounded px-3 py-1 text-xs font-medium transition-colors ${
                      activeTab === i
                        ? 'bg-brand-600 text-white'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    {tab.name}
                  </button>
                ))}
              </div>
              <button
                type="button"
                onClick={handleCopy}
                aria-label="Copy code"
                className="text-slate-400 transition-colors hover:text-white"
              >
                {copied ? (
                  <Check className="h-4 w-4 text-emerald-400" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </button>
            </div>

            <div className="h-[420px] overflow-auto bg-[#0d1424] p-6">
              <pre className="font-mono text-sm leading-relaxed">
                <code className="block">
                  {codeTabs[activeTab].code.split('\n').map((line, i) => (
                    <div key={i} className="table-row">
                      <span className="table-cell w-8 select-none border-r border-white/5 pr-4 text-right text-slate-600">
                        {i + 1}
                      </span>
                      <span
                        className="table-cell pl-4 text-slate-200"
                        dangerouslySetInnerHTML={{ __html: highlight(line) || '&nbsp;' }}
                      />
                    </div>
                  ))}
                </code>
              </pre>
            </div>

            <div className="flex items-center justify-between border-t border-white/5 bg-[#0b1120] px-4 py-2 font-mono text-[10px] text-slate-500">
              <div className="flex gap-4">
                <span className="font-bold uppercase text-slate-400">
                  {codeTabs[activeTab].language}
                </span>
                <span>UTF-8</span>
              </div>
              <div className="flex items-center gap-1.5 rounded-full bg-brand-500/10 px-2 py-0.5 text-brand-300">
                <Wifi className="h-3 w-3" />
                <span className="font-bold">Connected</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
