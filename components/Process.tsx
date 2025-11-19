import React, { useState } from 'react';
import { 
  Search, Layout, Code2, Rocket, 
  CheckCircle2, GitCommit, Globe, 
  Zap, MoreHorizontal, FileCode, 
  Server, Terminal, MousePointer2,
  BarChart3, Plus, Play, ShieldCheck
} from 'lucide-react';

const steps = [
  {
    id: 'discovery',
    title: "Discovery & Strategy",
    description: "We deep dive into your business goals to define a data-driven roadmap.",
    icon: Search,
    color: "text-amber-400",
    bg: "bg-amber-400/10",
    border: "border-amber-400/20",
    shadow: "shadow-amber-400/20"
  },
  {
    id: 'design',
    title: "UX/UI Design",
    description: "Crafting intuitive, high-fidelity interfaces that drive user engagement.",
    icon: Layout,
    color: "text-fuchsia-400",
    bg: "bg-fuchsia-400/10",
    border: "border-fuchsia-400/20",
    shadow: "shadow-fuchsia-400/20"
  },
  {
    id: 'dev',
    title: "Agile Development",
    description: "Iterative sprints using modern, scalable tech stacks and rigorous testing.",
    icon: Code2,
    color: "text-indigo-400",
    bg: "bg-indigo-400/10",
    border: "border-indigo-400/20",
    shadow: "shadow-indigo-400/20"
  },
  {
    id: 'launch',
    title: "Launch & Scale",
    description: "Secure deployment, performance monitoring, and continuous optimization.",
    icon: Rocket,
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
    border: "border-emerald-400/20",
    shadow: "shadow-emerald-400/20"
  }
];

// --- Reusable UI Shell ---

interface AppWindowProps {
  title: string;
  colorClass: string;
  children: React.ReactNode;
}

const AppWindow: React.FC<AppWindowProps> = ({ title, colorClass, children }) => (
  <div className="w-full h-full bg-[#0f0c29] rounded-xl border border-white/10 shadow-2xl flex flex-col overflow-hidden relative group ring-1 ring-white/5">
    {/* Title Bar */}
    <div className="h-10 bg-[#1e1b2e] border-b border-white/5 flex items-center justify-between px-4 shrink-0">
      <div className="flex items-center gap-3">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
        </div>
        <div className="h-4 w-px bg-white/10 mx-1"></div>
        <span className={`text-xs font-mono font-medium ${colorClass} flex items-center gap-2`}>
            {title}
        </span>
      </div>
       <MoreHorizontal className="w-4 h-4 text-slate-600" />
    </div>
    {/* App Canvas */}
    <div className="flex-1 relative bg-[#0B0915] overflow-hidden">
      {children}
    </div>
  </div>
);

// --- Visual Components ---

const DiscoveryVisual = () => (
  <AppWindow title="TriFlow_Planner.app" colorClass="text-amber-400">
      <div className="p-6 h-full flex flex-col">
          {/* Toolbar */}
          <div className="flex items-center justify-between mb-6">
              <div className="flex gap-2">
                  <div className="px-3 py-1 rounded bg-amber-500/20 text-amber-400 text-xs font-bold border border-amber-500/30">Board View</div>
                  <div className="px-3 py-1 rounded hover:bg-white/5 text-slate-400 text-xs transition-colors">Timeline</div>
              </div>
              <div className="flex -space-x-2">
                  {[1,2,3].map(i => <div key={i} className="w-6 h-6 rounded-full bg-slate-700 border border-[#0B0915]"></div>)}
                  <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-[9px] border border-[#0B0915]">+4</div>
              </div>
          </div>

          {/* Kanban Board */}
          <div className="flex-1 grid grid-cols-3 gap-4">
              {/* Col 1 */}
              <div className="bg-white/5 rounded-lg p-3 border border-white/5 flex flex-col gap-3">
                  <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider flex justify-between">
                      Research
                      <span className="bg-slate-800 text-slate-400 px-1.5 rounded text-[9px]">3</span>
                  </div>
                  <div className="bg-[#1e1b2e] p-3 rounded border border-white/5 shadow-lg group/card hover:border-amber-500/50 transition-colors cursor-pointer">
                      <div className="w-8 h-1 bg-amber-500/50 rounded mb-2"></div>
                      <div className="h-2 w-3/4 bg-slate-700 rounded mb-1"></div>
                      <div className="h-2 w-1/2 bg-slate-700 rounded"></div>
                  </div>
                   <div className="bg-[#1e1b2e] p-3 rounded border border-white/5 shadow-lg opacity-60">
                      <div className="w-8 h-1 bg-blue-500/50 rounded mb-2"></div>
                      <div className="h-2 w-full bg-slate-700 rounded mb-1"></div>
                  </div>
              </div>

              {/* Col 2 */}
              <div className="bg-white/5 rounded-lg p-3 border border-white/5 flex flex-col gap-3">
                  <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider flex justify-between">
                      Strategy
                      <span className="bg-slate-800 text-slate-400 px-1.5 rounded text-[9px]">2</span>
                  </div>
                  <div className="bg-[#1e1b2e] p-3 rounded border border-white/5 shadow-lg relative overflow-hidden group/card">
                      <div className="absolute top-0 left-0 w-1 h-full bg-amber-400"></div>
                      <div className="flex items-center justify-between mb-2">
                          <div className="text-[10px] text-amber-100 font-medium">Technical Specs</div>
                          <Zap className="w-3 h-3 text-amber-400" />
                      </div>
                      <div className="space-y-1">
                         <div className="h-1.5 w-full bg-slate-700/50 rounded"></div>
                         <div className="h-1.5 w-5/6 bg-slate-700/50 rounded"></div>
                      </div>
                      <div className="mt-3 flex gap-2">
                          <span className="text-[8px] bg-white/5 px-1.5 py-0.5 rounded text-slate-400">API</span>
                          <span className="text-[8px] bg-white/5 px-1.5 py-0.5 rounded text-slate-400">DB</span>
                      </div>
                  </div>
              </div>

              {/* Col 3 */}
              <div className="bg-white/5 rounded-lg p-3 border border-white/5 flex flex-col gap-3">
                   <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider flex justify-between">
                      Approved
                      <span className="bg-slate-800 text-slate-400 px-1.5 rounded text-[9px]">12</span>
                  </div>
                  <div className="bg-[#1e1b2e] p-3 rounded border border-green-500/20 shadow-lg flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
                          <CheckCircle2 className="w-3 h-3 text-green-500" />
                      </div>
                      <div className="h-2 w-20 bg-slate-600 rounded"></div>
                  </div>
                   <div className="bg-[#1e1b2e] p-3 rounded border border-green-500/20 shadow-lg flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
                          <CheckCircle2 className="w-3 h-3 text-green-500" />
                      </div>
                      <div className="h-2 w-16 bg-slate-600 rounded"></div>
                  </div>
              </div>
          </div>
      </div>
  </AppWindow>
);

const DesignVisual = () => (
    <AppWindow title="PixelCraft_Pro.exe" colorClass="text-fuchsia-400">
        <div className="flex h-full">
            {/* Sidebar */}
            <div className="w-16 border-r border-white/5 flex flex-col items-center py-4 gap-4">
                <div className="p-2 bg-fuchsia-500 rounded-lg text-white"><MousePointer2 className="w-4 h-4" /></div>
                <div className="p-2 text-slate-500 hover:text-white"><Layout className="w-4 h-4" /></div>
                <div className="p-2 text-slate-500 hover:text-white"><Search className="w-4 h-4" /></div>
            </div>

            {/* Canvas */}
            <div className="flex-1 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.03)_1px,_transparent_1px)] bg-[size:20px_20px] relative flex items-center justify-center p-8">
                
                {/* Phone Mockup */}
                <div className="w-56 h-full bg-[#0f0c29] rounded-[2rem] border-4 border-slate-700 shadow-2xl overflow-hidden relative group">
                    {/* Notch */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-slate-700 rounded-b-xl z-20"></div>
                    
                    {/* App UI */}
                    <div className="w-full h-full bg-[#1e1b2e] flex flex-col">
                        <div className="h-32 bg-fuchsia-600/20 rounded-b-[2rem] p-6 flex items-center justify-center">
                             <div className="w-16 h-16 rounded-full bg-fuchsia-500 shadow-lg shadow-fuchsia-500/50 animate-pulse"></div>
                        </div>
                        <div className="p-4 space-y-3">
                            <div className="h-3 w-3/4 bg-slate-700 rounded"></div>
                            <div className="h-3 w-1/2 bg-slate-700 rounded"></div>
                            <div className="grid grid-cols-2 gap-2 mt-4">
                                <div className="h-24 bg-white/5 rounded-xl border border-white/5"></div>
                                <div className="h-24 bg-white/5 rounded-xl border border-white/5"></div>
                            </div>
                        </div>
                        {/* Floating Action Button */}
                        <div className="absolute bottom-6 right-6 w-12 h-12 bg-fuchsia-500 rounded-full shadow-lg flex items-center justify-center text-white">
                            <Plus className="w-6 h-6" />
                        </div>
                    </div>

                    {/* Selection Indicator Overlay */}
                    <div className="absolute inset-x-4 top-48 h-24 border-2 border-fuchsia-500 rounded-xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                         <div className="absolute -top-2 -left-2 w-1.5 h-1.5 bg-white border border-fuchsia-500"></div>
                         <div className="absolute -top-2 -right-2 w-1.5 h-1.5 bg-white border border-fuchsia-500"></div>
                         <div className="absolute -bottom-2 -left-2 w-1.5 h-1.5 bg-white border border-fuchsia-500"></div>
                         <div className="absolute -bottom-2 -right-2 w-1.5 h-1.5 bg-white border border-fuchsia-500"></div>
                         <div className="absolute -top-5 left-0 bg-fuchsia-500 text-white text-[8px] px-1.5 py-0.5 rounded">Grid Component</div>
                    </div>
                </div>

                {/* Cursor */}
                <div className="absolute bottom-1/3 right-1/3 animate-float pointer-events-none">
                    <MousePointer2 className="w-6 h-6 text-fuchsia-500 fill-current" />
                </div>
            </div>

            {/* Properties Panel */}
            <div className="w-48 border-l border-white/5 bg-[#0f0c29] p-4 space-y-4 hidden sm:block">
                <div className="text-[10px] font-bold text-slate-500 uppercase">Properties</div>
                <div className="space-y-2">
                    <div className="flex justify-between items-center text-xs text-slate-300">
                        <span>Width</span>
                        <span className="font-mono text-slate-500">320px</span>
                    </div>
                    <div className="flex justify-between items-center text-xs text-slate-300">
                        <span>Height</span>
                        <span className="font-mono text-slate-500">Auto</span>
                    </div>
                </div>
                <div className="h-px bg-white/5 my-2"></div>
                <div className="text-[10px] font-bold text-slate-500 uppercase">Fill</div>
                <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded bg-fuchsia-500 border border-white/20"></div>
                    <span className="text-xs font-mono text-slate-300">#D946EF</span>
                </div>
            </div>
        </div>
    </AppWindow>
);

const DevVisual = () => (
    <AppWindow title="VS_Code_Enterprise" colorClass="text-indigo-400">
        <div className="flex h-full font-mono text-xs">
            {/* Activity Bar */}
            <div className="w-10 border-r border-white/5 flex flex-col items-center py-3 gap-4 text-slate-500">
                <div className="text-indigo-400"><FileCode className="w-5 h-5" /></div>
                <div className="hover:text-white"><Search className="w-5 h-5" /></div>
                <div className="hover:text-white"><GitCommit className="w-5 h-5" /></div>
            </div>

            {/* Sidebar */}
            <div className="w-40 bg-[#0f0c29] border-r border-white/5 p-3 hidden sm:block">
                <div className="text-[10px] font-bold text-slate-500 uppercase mb-3 pl-1">Explorer</div>
                <div className="space-y-1 text-slate-400">
                    <div className="flex items-center gap-1.5 text-indigo-300 bg-white/5 rounded px-2 py-1">
                        <span className="text-[10px]">TS</span>
                        <span>main.tsx</span>
                    </div>
                    <div className="flex items-center gap-1.5 hover:text-white px-2 py-1">
                        <span className="text-[10px] text-yellow-400">JS</span>
                        <span>utils.js</span>
                    </div>
                    <div className="flex items-center gap-1.5 hover:text-white px-2 py-1">
                        <span className="text-[10px] text-fuchsia-400">CSS</span>
                        <span>global.css</span>
                    </div>
                     <div className="flex items-center gap-1.5 hover:text-white px-2 py-1">
                        <span className="text-[10px] text-green-400">JSON</span>
                        <span>package.json</span>
                    </div>
                </div>
            </div>

            {/* Editor Area */}
            <div className="flex-1 flex flex-col">
                {/* Tabs */}
                <div className="flex bg-[#0f0c29] border-b border-white/5">
                    <div className="px-4 py-2 bg-[#1e1b2e] border-t-2 border-indigo-500 text-slate-200 flex items-center gap-2">
                        <span>main.tsx</span>
                        <div className="w-2 h-2 rounded-full bg-white/20 hover:bg-white/40"></div>
                    </div>
                </div>
                
                {/* Code */}
                <div className="flex-1 p-4 bg-[#1e1b2e] overflow-hidden relative">
                    <div className="text-slate-500 mb-4 flex gap-2">
                        <span>// Initializing AI-driven architecture</span>
                    </div>
                    <div className="space-y-1 text-sm leading-6">
                        <div className="flex gap-4">
                            <span className="text-slate-600 select-none">1</span>
                            <span><span className="text-fuchsia-400">import</span> <span className="text-yellow-300">{'{ AI_Core }'}</span> <span className="text-fuchsia-400">from</span> <span className="text-green-400">'@trisoft/engine'</span>;</span>
                        </div>
                        <div className="flex gap-4">
                            <span className="text-slate-600 select-none">2</span>
                            <span></span>
                        </div>
                        <div className="flex gap-4">
                            <span className="text-slate-600 select-none">3</span>
                            <span><span className="text-fuchsia-400">const</span> <span className="text-blue-400">deploySystem</span> = <span className="text-fuchsia-400">async</span> () ={'>'} {'{'}</span>
                        </div>
                        <div className="flex gap-4">
                            <span className="text-slate-600 select-none">4</span>
                            <span className="pl-4"><span className="text-fuchsia-400">await</span> <span className="text-yellow-300">AI_Core</span>.optimize(<span className="text-green-400">'production'</span>);</span>
                        </div>
                        <div className="flex gap-4">
                            <span className="text-slate-600 select-none">5</span>
                            <span className="pl-4"><span className="text-fuchsia-400">return</span> <span className="text-indigo-400">true</span>;</span>
                        </div>
                        <div className="flex gap-4">
                            <span className="text-slate-600 select-none">6</span>
                            <span>{'}'}</span>
                        </div>
                    </div>
                    
                    {/* Terminal Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 h-32 bg-[#0f0c29] border-t border-white/10 p-3 font-mono text-[10px]">
                        <div className="flex justify-between text-slate-500 mb-2 uppercase font-bold tracking-wider">
                            <span>Terminal</span>
                            <span className="hover:text-white cursor-pointer">+</span>
                        </div>
                        <div className="space-y-1">
                            <div className="flex gap-2">
                                <span className="text-green-400">➜</span>
                                <span className="text-slate-300">npm run build</span>
                            </div>
                            <div className="text-slate-500">Building production bundle...</div>
                            <div className="text-slate-500">Minifying assets...</div>
                            <div className="text-green-400 mt-1 flex items-center gap-2">
                                <CheckCircle2 className="w-3 h-3" />
                                Build successful (2.4s)
                            </div>
                             <div className="flex gap-2 animate-pulse">
                                <span className="text-green-400">➜</span>
                                <span className="w-2 h-4 bg-slate-500"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </AppWindow>
);

const LaunchVisual = () => (
    <AppWindow title="Cloud_Console" colorClass="text-emerald-400">
        <div className="flex flex-col h-full p-6 gap-6">
            {/* Status Header */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center border border-emerald-500/20">
                        <Globe className="w-6 h-6 text-emerald-400" />
                    </div>
                    <div>
                        <div className="text-sm text-white font-bold">Production Environment</div>
                        <div className="text-xs text-emerald-400 flex items-center gap-1">
                            <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></span>
                            Operational • us-east-1
                        </div>
                    </div>
                </div>
                <button className="bg-white/5 hover:bg-white/10 text-white text-xs px-3 py-2 rounded border border-white/10 transition-colors flex items-center gap-2">
                    <Play className="w-3 h-3 fill-current" /> Redeploy
                </button>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-3 gap-4">
                <div className="bg-white/5 p-3 rounded-lg border border-white/5">
                    <div className="text-[10px] text-slate-400 uppercase">Requests/sec</div>
                    <div className="text-xl font-mono text-white mt-1">24.5k</div>
                    <div className="h-1 w-full bg-slate-700 mt-2 rounded-full overflow-hidden">
                        <div className="h-full bg-emerald-500 w-[70%]"></div>
                    </div>
                </div>
                <div className="bg-white/5 p-3 rounded-lg border border-white/5">
                    <div className="text-[10px] text-slate-400 uppercase">Latency</div>
                    <div className="text-xl font-mono text-white mt-1">42ms</div>
                    <div className="h-1 w-full bg-slate-700 mt-2 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-500 w-[30%]"></div>
                    </div>
                </div>
                <div className="bg-white/5 p-3 rounded-lg border border-white/5">
                    <div className="text-[10px] text-slate-400 uppercase">Error Rate</div>
                    <div className="text-xl font-mono text-white mt-1">0.01%</div>
                    <div className="h-1 w-full bg-slate-700 mt-2 rounded-full overflow-hidden">
                        <div className="h-full bg-red-500 w-[2%]"></div>
                    </div>
                </div>
            </div>

            {/* Activity Log */}
            <div className="flex-1 bg-[#1e1b2e] rounded-lg border border-white/5 p-4 overflow-hidden flex flex-col">
                <div className="text-[10px] font-bold text-slate-500 uppercase mb-3 flex items-center gap-2">
                    <Terminal className="w-3 h-3" /> Live Logs
                </div>
                <div className="space-y-2 font-mono text-[10px] text-slate-400 overflow-hidden relative">
                     <div className="absolute inset-0 bg-gradient-to-t from-[#1e1b2e] via-transparent to-transparent z-10"></div>
                     <div className="flex gap-2"><span className="text-slate-600">10:42:01</span> <span>[INFO] Scaling policy triggered: +2 instances</span></div>
                     <div className="flex gap-2"><span className="text-slate-600">10:42:05</span> <span className="text-emerald-400">[SUCCESS] Health check passed on i-0a2b3c</span></div>
                     <div className="flex gap-2"><span className="text-slate-600">10:42:12</span> <span>[INFO] Database connection pool refreshed</span></div>
                     <div className="flex gap-2"><span className="text-slate-600">10:42:15</span> <span>[WARN] High memory usage on worker-04</span></div>
                     <div className="flex gap-2"><span className="text-slate-600">10:42:22</span> <span className="text-blue-400">[NET] CDN cache purged for /assets/*</span></div>
                </div>
            </div>
        </div>
    </AppWindow>
);

export const Process: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div id="process" className="py-32 bg-[#030014] relative border-t border-white/5 overflow-hidden">
      {/* Ambient Glows based on active step */}
      <div className={`absolute top-0 left-0 w-full h-full transition-colors duration-1000 opacity-10 pointer-events-none
        ${activeStep === 0 ? 'bg-amber-900/20' : ''}
        ${activeStep === 1 ? 'bg-fuchsia-900/20' : ''}
        ${activeStep === 2 ? 'bg-indigo-900/20' : ''}
        ${activeStep === 3 ? 'bg-emerald-900/20' : ''}
      `}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-20">
            <h2 className="text-indigo-500 font-bold tracking-widest uppercase text-xs mb-4">Workflow</h2>
            <h3 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-6">
              From Concept to <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-fuchsia-400">Code.</span>
            </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* Left Column: Interactive Visual */}
          <div className="order-2 lg:order-1 relative h-[500px] lg:h-[600px] rounded-2xl bg-[#0f0c29]/50 backdrop-blur-sm transition-all duration-500 perspective-1000">
              {/* Render Active Visual */}
              <div className="absolute inset-0 transition-all duration-500 animate-fade-in-up p-4 md:p-0">
                 {activeStep === 0 && <DiscoveryVisual />}
                 {activeStep === 1 && <DesignVisual />}
                 {activeStep === 2 && <DevVisual />}
                 {activeStep === 3 && <LaunchVisual />}
              </div>
          </div>
          
          {/* Right Column: Step List */}
          <div className="order-1 lg:order-2 space-y-4">
             {steps.map((step, index) => {
                 const isActive = activeStep === index;
                 return (
                     <div 
                        key={step.id}
                        onClick={() => setActiveStep(index)}
                        className={`
                            relative p-6 rounded-xl border transition-all duration-300 cursor-pointer group overflow-hidden
                            ${isActive 
                                ? `${step.bg} ${step.border} ${step.shadow}` 
                                : 'bg-white/5 border-white/5 hover:bg-white/[0.07] hover:border-white/10'}
                        `}
                     >
                        <div className="flex items-start gap-4 relative z-10">
                            <div className={`
                                w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-colors duration-300
                                ${isActive ? 'bg-white/20 text-white' : 'bg-white/5 text-slate-400 group-hover:text-white'}
                            `}>
                                <step.icon className="w-5 h-5" />
                            </div>
                            <div>
                                <h4 className={`text-lg font-bold mb-2 transition-colors ${isActive ? 'text-white' : 'text-slate-300 group-hover:text-white'}`}>
                                    {step.title}
                                </h4>
                                <p className={`text-sm leading-relaxed transition-colors ${isActive ? 'text-white/90' : 'text-slate-500 group-hover:text-slate-400'}`}>
                                    {step.description}
                                </p>
                            </div>
                        </div>
                        
                        {/* Progress Bar for Active State */}
                        {isActive && (
                            <div className="absolute bottom-0 left-0 h-1 bg-white/20 w-full">
                                <div className={`h-full ${step.color.replace('text-', 'bg-')} animate-[load_8s_linear]`}></div>
                            </div>
                        )}
                     </div>
                 );
             })}
          </div>

        </div>

      </div>
    </div>
  );
};