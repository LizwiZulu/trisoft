import React, { useState } from 'react';
import { Terminal, Code, Copy, Check, Wifi } from 'lucide-react';

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
}`
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
  },
  "rate_limiting": {
    "strategy": "token_bucket",
    "max_requests": 10000
  }
}`
  }
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
    <section className="py-24 bg-[#030014] relative overflow-hidden">
      {/* Technical Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-900/30 border border-indigo-500/30 text-indigo-300 text-xs font-bold uppercase tracking-wider mb-6 backdrop-blur-sm">
               <Terminal className="w-3 h-3" />
               <span>Developer Experience</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
              Clean code. <br/>
              <span className="text-slate-400">Scalable architecture.</span>
            </h2>
            <p className="text-lg text-slate-400 leading-relaxed mb-8">
              We don't just build for today. We engineer typesafe, documented, and modular systems that your internal team will actually enjoy working with.
            </p>
            <ul className="space-y-4">
                {['TypeScript by default', '100% Test Coverage', 'Automated CI/CD Pipelines', 'Dockerized Environments'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-300">
                        <div className="w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center">
                            <Check className="w-3.5 h-3.5 text-indigo-400" />
                        </div>
                        {item}
                    </li>
                ))}
            </ul>
          </div>

          {/* Right Code Block */}
          <div className="relative group perspective-1000">
            {/* Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-fuchsia-500 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            
            <div className="relative rounded-xl bg-[#0f0c29] border border-white/10 shadow-2xl overflow-hidden transform transition-transform duration-500 hover:rotate-x-1 hover:rotate-y-1">
                {/* Window Bar */}
                <div className="flex items-center justify-between px-4 py-3 bg-[#1e1b2e] border-b border-white/5">
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
                    </div>
                    <div className="flex gap-1 bg-black/20 p-1 rounded-lg">
                        {codeTabs.map((tab, i) => (
                            <button
                                key={i}
                                onClick={() => setActiveTab(i)}
                                className={`px-3 py-1 rounded text-xs font-medium transition-all ${
                                    activeTab === i 
                                    ? 'bg-indigo-600 text-white shadow-sm' 
                                    : 'text-slate-500 hover:text-slate-300'
                                }`}
                            >
                                {tab.name}
                            </button>
                        ))}
                    </div>
                    <button onClick={handleCopy} className="text-slate-500 hover:text-white transition-colors">
                        {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                    </button>
                </div>

                {/* Code Area - Fixed Height */}
                <div className="p-6 overflow-auto h-[420px] custom-scrollbar bg-[#0d0b1e]">
                    <pre className="font-mono text-sm leading-relaxed">
                        <code className="block">
                            {codeTabs[activeTab].code.split('\n').map((line, i) => (
                                <div key={i} className="table-row group/line hover:bg-white/5 w-full">
                                    <span className="table-cell text-slate-700 select-none pr-6 text-right w-8 border-r border-white/5 group-hover/line:text-slate-500 transition-colors">{i + 1}</span>
                                    <span 
                                      className="table-cell pl-4"
                                      dangerouslySetInnerHTML={{
                                          __html: line
                                            .replace(/import|from|const|async|function|await|return|export|class/g, '<span class="text-fuchsia-400">$&</span>')
                                            .replace(/'[^']*'/g, '<span class="text-green-400">$&</span>')
                                            .replace(/"[^"]*"/g, '<span class="text-green-400">$&</span>')
                                            .replace(/\/\/.*/g, '<span class="text-slate-500 italic">$&</span>')
                                            .replace(/TrisoftClient|process|console|Promise/g, '<span class="text-yellow-300">$&</span>')
                                            .replace(/new|void|true|false/g, '<span class="text-indigo-400">$&</span>')
                                            .replace(/: \["/g, ': <span class="text-white">["</span>') // fix JSON array start
                                      }}
                                    />
                                </div>
                            ))}
                        </code>
                    </pre>
                </div>

                {/* Status Bar */}
                <div className="bg-[#1e1b2e] border-t border-white/5 px-4 py-2 flex justify-between items-center text-[10px] text-slate-500 font-mono select-none">
                    <div className="flex gap-4">
                        <span className="uppercase text-slate-400 font-bold">{codeTabs[activeTab].language}</span>
                        <span>UTF-8</span>
                        <span>4 Spaces</span>
                    </div>
                    <div className="flex gap-4 items-center">
                        <span>Ln {codeTabs[activeTab].code.split('\n').length}, Col 1</span>
                        <div className="flex items-center gap-1.5 text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded-full">
                            <Wifi className="w-3 h-3" />
                            <span className="font-bold">Connected</span>
                        </div>
                    </div>
                </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};