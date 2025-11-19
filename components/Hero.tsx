import React, { useEffect, useState } from 'react';
import { ArrowRight, Command, Activity, BarChart3, Shield, Users, Zap, Globe, Server, Bell, Search, Home, PieChart, FileText, Settings, Database, Clock, Blocks } from 'lucide-react';

interface HeroProps {
  onOpenChat: (initialMsg?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenChat }) => {
  const [scrollY, setScrollY] = useState(0);
  const [prompt, setPrompt] = useState('');
  
  // Dashboard State
  const [activeTab, setActiveTab] = useState('overview');
  const [hoveredBar, setHoveredBar] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        setScrollY(window.scrollY);
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCommandSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (prompt.trim()) {
      onOpenChat(prompt);
      setPrompt('');
    }
  };

  // Mock Data for Dashboard
  const chartData = [35, 55, 45, 70, 60, 85, 65, 90, 75, 60, 80, 95, 70, 85, 65, 75, 50, 85, 90, 60];
  
  const renderDashboardContent = () => {
    switch(activeTab) {
        case 'analytics':
            return (
                <div className="animate-fade-in-up space-y-4">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-white font-semibold">Real-time Traffic</h3>
                        <div className="flex gap-2">
                             <button className="text-[10px] bg-white/10 text-white px-2 py-1 rounded hover:bg-white/20 transition-colors">Export</button>
                             <select className="bg-black/20 border border-white/10 rounded text-xs text-slate-400 px-2 py-1 outline-none hover:border-white/20 transition-colors">
                                <option>Last 24h</option>
                                <option>Last 7d</option>
                                <option>Last 30d</option>
                            </select>
                        </div>
                    </div>
                    <div className="h-56 flex items-end justify-between gap-2 px-2 border-b border-white/5 pb-4">
                         {chartData.map((h, i) => (
                             <div 
                                key={i} 
                                onMouseEnter={() => setHoveredBar(i)}
                                onMouseLeave={() => setHoveredBar(null)}
                                className="w-full bg-indigo-500/20 rounded-t transition-all duration-300 relative group cursor-pointer hover:bg-indigo-500" 
                                style={{ height: `${h}%` }}
                             >
                                {hoveredBar === i && (
                                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black/90 backdrop-blur text-white text-[10px] font-bold px-2 py-1 rounded shadow-lg whitespace-nowrap z-20 border border-white/10">
                                        {h * 142} Users
                                    </div>
                                )}
                             </div>
                         ))}
                    </div>
                    <div className="grid grid-cols-4 gap-2 mt-4">
                        <div className="bg-white/5 rounded p-3 border border-white/5">
                            <div className="text-slate-400 text-[10px] uppercase">Bounce Rate</div>
                            <div className="text-white font-mono text-lg">42%</div>
                        </div>
                        <div className="bg-white/5 rounded p-3 border border-white/5">
                            <div className="text-slate-400 text-[10px] uppercase">Duration</div>
                            <div className="text-white font-mono text-lg">4m 12s</div>
                        </div>
                        <div className="bg-white/5 rounded p-3 border border-white/5">
                            <div className="text-slate-400 text-[10px] uppercase">Conversion</div>
                            <div className="text-white font-mono text-lg">2.4%</div>
                        </div>
                        <div className="bg-white/5 rounded p-3 border border-white/5">
                            <div className="text-slate-400 text-[10px] uppercase">Active</div>
                            <div className="text-green-400 font-mono text-lg flex items-center gap-1">
                                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                                892
                            </div>
                        </div>
                    </div>
                </div>
            );
        case 'customers':
            return (
                <div className="animate-fade-in-up space-y-3">
                    <div className="flex justify-between items-center mb-2">
                        <h3 className="text-white font-semibold">Recent Signups</h3>
                        <button className="text-xs text-indigo-400 hover:text-indigo-300">View All</button>
                    </div>
                    {[1,2,3,4,5,6].map(i => (
                        <div key={i} className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/5 hover:bg-white/10 transition-colors cursor-pointer group">
                            <div className="flex items-center gap-3">
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${i % 2 === 0 ? 'bg-purple-500/20 text-purple-400' : 'bg-indigo-500/20 text-indigo-400'}`}>
                                    {String.fromCharCode(64 + i)}
                                </div>
                                <div>
                                    <div className="text-xs text-white font-medium group-hover:text-indigo-300 transition-colors">Client_Enterprise_{100 + i}</div>
                                    <div className="text-[10px] text-slate-500">Premium Plan • Active</div>
                                </div>
                            </div>
                            <div className="text-[10px] text-slate-400 font-mono">$2,400/m</div>
                        </div>
                    ))}
                </div>
            );
        case 'activity':
            return (
                <div className="animate-fade-in-up space-y-4">
                    <h3 className="text-white font-semibold mb-2">System Activity</h3>
                    <div className="space-y-4 pl-2 border-l border-white/10 ml-2">
                        {[1,2,3,4,5].map(i => (
                            <div key={i} className="relative pl-6 group">
                                <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-[#0f0c29] border border-indigo-500 group-hover:bg-indigo-500 transition-colors"></div>
                                <div className="text-xs text-white mb-0.5 font-medium group-hover:text-indigo-300 transition-colors">Deployed Microservice v2.{i}</div>
                                <div className="text-[10px] text-slate-400 mb-2">Triggered by automated CI/CD pipeline via GitHub Actions.</div>
                                <div className="text-[10px] font-mono text-slate-600 bg-white/5 inline-block px-1.5 py-0.5 rounded">14:3{i} PM</div>
                            </div>
                        ))}
                    </div>
                </div>
            );
        case 'integrations':
            return (
                <div className="animate-fade-in-up">
                    <h3 className="text-white font-semibold mb-4">Active Integrations</h3>
                    <div className="grid grid-cols-2 gap-3">
                        {['Slack', 'GitHub', 'Jira', 'AWS', 'Stripe', 'Sentry'].map((tool, i) => (
                            <div key={i} className="p-3 bg-white/5 rounded border border-white/5 hover:border-indigo-500/50 hover:bg-white/10 transition-all cursor-pointer flex items-center gap-3">
                                <div className="w-8 h-8 rounded bg-white/10 flex items-center justify-center">
                                    <Zap className="w-4 h-4 text-yellow-400" />
                                </div>
                                <div>
                                    <div className="text-xs font-medium text-white">{tool}</div>
                                    <div className="text-[10px] text-green-400 flex items-center gap-1">
                                        <span className="w-1 h-1 rounded-full bg-green-500"></span> Connected
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            );
        case 'reports':
            return (
                <div className="animate-fade-in-up space-y-3">
                    <h3 className="text-white font-semibold mb-4">Generated Reports</h3>
                    {[1,2,3,4,5].map(i => (
                        <div key={i} className="flex items-center justify-between p-3 bg-white/5 rounded border border-white/5 hover:bg-white/10 transition-colors cursor-pointer">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded bg-slate-800 flex items-center justify-center text-slate-400">
                                    <FileText className="w-4 h-4" />
                                </div>
                                <div>
                                    <div className="text-xs text-white font-medium">Q{i} Financial Summary</div>
                                    <div className="text-[10px] text-slate-500">Generated automatically</div>
                                </div>
                            </div>
                            <button className="text-[10px] bg-indigo-600/20 text-indigo-300 hover:bg-indigo-600 hover:text-white px-2 py-1 rounded transition-colors">Download</button>
                        </div>
                    ))}
                </div>
            );
        default: // Overview
            return (
                <div className="animate-fade-in-up space-y-6">
                    <div className="flex justify-between items-center">
                         <div>
                             <div className="text-slate-400 text-xs font-medium mb-1">Total Revenue</div>
                             <div className="text-4xl font-bold text-white tracking-tight">$124,500.00</div>
                             <div className="text-[10px] text-green-400 mt-1 font-medium flex items-center gap-1">
                                <ArrowRight className="w-3 h-3 -rotate-45" />
                                +12.5% vs last month
                             </div>
                         </div>
                         <div className="flex gap-2">
                             <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-slate-400 hover:bg-white/10 cursor-pointer transition-colors border border-white/5 backdrop-blur-sm">
                                 <Activity className="w-5 h-5" />
                             </div>
                             <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center text-white shadow-lg shadow-indigo-500/20 hover:bg-indigo-500 transition-colors">
                                 <BarChart3 className="w-5 h-5" />
                             </div>
                         </div>
                    </div>

                    {/* Interactive Chart Area */}
                    <div className="h-56 bg-gradient-to-b from-white/5 to-transparent rounded-xl border border-white/5 p-4 relative overflow-hidden flex items-end justify-between gap-2 group">
                         {chartData.slice(0, 20).map((h, i) => (
                             <div 
                                key={i} 
                                onMouseEnter={() => setHoveredBar(i)}
                                onMouseLeave={() => setHoveredBar(null)}
                                className={`w-full rounded-t-sm transition-all duration-300 cursor-pointer ${hoveredBar === i ? 'bg-indigo-400 shadow-[0_0_10px_rgba(129,140,248,0.5)]' : 'bg-indigo-600/50'}`} 
                                style={{ height: `${h}%`, transform: hoveredBar === i ? 'scaleY(1.1)' : 'scaleY(1)' }}
                             >
                             </div>
                         ))}
                         {/* Tooltip overlay */}
                         {hoveredBar !== null && (
                             <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-xl text-white text-xs px-3 py-2 rounded-lg border border-white/10 shadow-xl animate-fade-in-up">
                                 <div className="text-[10px] text-slate-400">Data Point {hoveredBar + 1}</div>
                                 <div className="font-bold text-indigo-300">Volume: {chartData[hoveredBar] * 124}</div>
                             </div>
                         )}
                    </div>

                    {/* Info Cards */}
                    <div className="grid grid-cols-4 gap-3">
                        <div className="bg-white/5 rounded-xl border border-white/5 p-4 hover:bg-white/10 hover:border-indigo-500/30 transition-all cursor-pointer group">
                            <div className="w-8 h-8 rounded-lg bg-fuchsia-500/20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                                <Server className="w-4 h-4 text-fuchsia-400" />
                            </div>
                            <div className="text-[10px] text-slate-400 uppercase font-bold tracking-wider mb-1">System Load</div>
                            <div className="text-lg font-bold text-white">34%</div>
                        </div>
                        <div className="bg-white/5 rounded-xl border border-white/5 p-4 hover:bg-white/10 hover:border-blue-500/30 transition-all cursor-pointer group">
                             <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                                <Globe className="w-4 h-4 text-blue-400" />
                            </div>
                            <div className="text-[10px] text-slate-400 uppercase font-bold tracking-wider mb-1">CDN Status</div>
                            <div className="text-lg font-bold text-white">Global</div>
                        </div>
                         <div className="bg-white/5 rounded-xl border border-white/5 p-4 hover:bg-white/10 hover:border-green-500/30 transition-all cursor-pointer group">
                             <div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                                <Database className="w-4 h-4 text-green-400" />
                            </div>
                            <div className="text-[10px] text-slate-400 uppercase font-bold tracking-wider mb-1">Database Latency</div>
                            <div className="text-lg font-bold text-white">12ms</div>
                        </div>
                         <div className="bg-white/5 rounded-xl border border-white/5 p-4 hover:bg-white/10 hover:border-yellow-500/30 transition-all cursor-pointer group">
                             <div className="w-8 h-8 rounded-lg bg-yellow-500/20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                                <Zap className="w-4 h-4 text-yellow-400" />
                            </div>
                            <div className="text-[10px] text-slate-400 uppercase font-bold tracking-wider mb-1">API Uptime</div>
                            <div className="text-lg font-bold text-white">99.9%</div>
                        </div>
                    </div>
                </div>
            );
    }
  }

  return (
    <div id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-40 pb-20">
      
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center gap-20">
        
        {/* Text Content */}
        <div className="text-center max-w-4xl mx-auto flex flex-col items-center">
            <div 
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-950/30 border border-indigo-500/30 backdrop-blur-md mb-8 animate-fade-in-up hover:bg-indigo-900/40 transition-colors cursor-default shadow-[0_0_20px_rgba(79,70,229,0.15)]"
                style={{ transform: `translateY(${scrollY * 0.1}px)` }}
            >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            <span className="text-indigo-200 text-xs font-bold uppercase tracking-widest">Available for new projects</span>
            </div>

            <h1 
                className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1] animate-fade-in-up drop-shadow-2xl" 
                style={{ animationDelay: '0.1s' }}
            >
            Digital solutions <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-fuchsia-400">
                engineered for growth.
            </span>
            </h1>
            
            <p 
                className="text-lg md:text-xl text-slate-400 max-w-2xl mb-10 leading-relaxed animate-fade-in-up font-light" 
                style={{ animationDelay: '0.2s' }}
            >
            Trisoft transforms complex business challenges into elegant software solutions. From cloud architecture to AI integration, we build the technology that powers your future.
            </p>

            <div 
                className="flex flex-col items-center gap-8 animate-fade-in-up w-full" 
                style={{ animationDelay: '0.3s' }}
            >
                {/* Interaction: AI Prompt Bar */}
                <form onSubmit={handleCommandSubmit} className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl p-2 pl-4 w-full max-w-lg backdrop-blur-xl hover:bg-white/10 hover:border-indigo-500/30 transition-all group cursor-text shadow-2xl">
                    <Command className="w-5 h-5 text-slate-500 group-hover:text-indigo-400 transition-colors" />
                    <input 
                        type="text" 
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                        className="bg-transparent border-none outline-none text-slate-200 text-sm flex-grow placeholder-slate-500"
                        placeholder="Ask our AI about services..."
                    />
                    <button type="submit" className="bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-bold px-6 py-2.5 rounded-lg transition-all shadow-lg shadow-indigo-600/20">
                        Ask AI
                    </button>
                </form>

                <div className="flex gap-4">
                    <button className="bg-white text-black hover:bg-slate-200 px-8 py-3.5 rounded-lg font-bold text-base transition-all transform hover:-translate-y-1 flex items-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                        View Case Studies
                        <ArrowRight className="w-4 h-4" />
                    </button>
                     <button onClick={() => onOpenChat()} className="px-8 py-3.5 rounded-lg font-bold text-base text-white border border-white/10 hover:bg-white/5 transition-all backdrop-blur-sm">
                        Contact Sales
                    </button>
                </div>
            </div>
        </div>

        {/* Visual: Interactive Dashboard - GLASSMORPHISM & WIDER */}
        <div 
            className="relative w-full max-w-7xl animate-fade-in-up group select-none hidden md:block perspective-1000" 
            style={{ animationDelay: '0.5s' }}
        >
            {/* Main App Window */}
            <div className="relative rounded-2xl bg-[#0f0c29]/40 border border-white/10 shadow-2xl overflow-hidden backdrop-blur-xl z-10 h-[650px] flex flex-col hover:shadow-indigo-500/10 transition-shadow duration-500 mx-auto ring-1 ring-white/5">
                {/* Window Header */}
                <div className="h-12 border-b border-white/5 flex items-center justify-between px-6 bg-white/5 shrink-0 backdrop-blur-md">
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/40 border border-red-500/50 shadow-[0_0_10px_rgba(239,68,68,0.2)]"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500/40 border border-yellow-500/50 shadow-[0_0_10px_rgba(234,179,8,0.2)]"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500/40 border border-green-500/50 shadow-[0_0_10px_rgba(34,197,94,0.2)]"></div>
                    </div>
                    <div className="flex items-center gap-3 bg-black/20 px-4 py-1.5 rounded-full border border-white/5">
                        <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse shadow-[0_0_10px_#6366f1]"></div>
                        <span className="text-[10px] text-indigo-200 font-mono uppercase tracking-wider">Live Preview</span>
                    </div>
                    <div className="flex gap-4 text-slate-500">
                        <Search className="w-4 h-4 hover:text-white cursor-pointer transition-colors" />
                        <Bell className="w-4 h-4 hover:text-white cursor-pointer transition-colors" />
                    </div>
                </div>
                
                {/* Window Content */}
                <div className="flex-1 flex overflow-hidden">
                    {/* Sidebar */}
                    <div className="w-64 border-r border-white/5 bg-white/[0.02] flex flex-col p-4 gap-1 shrink-0 backdrop-blur-sm">
                        <div className="mb-6 px-2 py-2 flex items-center gap-2">
                             <div className="w-6 h-6 bg-indigo-600 rounded flex items-center justify-center">
                                 <Activity className="w-3.5 h-3.5 text-white" />
                             </div>
                             <div className="text-sm font-bold text-white tracking-wide">Admin Panel</div>
                        </div>
                        <div className="space-y-1">
                            {[
                                { id: 'overview', icon: Home, label: 'Overview' },
                                { id: 'analytics', icon: PieChart, label: 'Analytics' },
                                { id: 'customers', icon: Users, label: 'Customers' },
                                { id: 'activity', icon: Clock, label: 'Activity' },
                                { id: 'integrations', icon: Blocks, label: 'Integrations' },
                                { id: 'reports', icon: FileText, label: 'Reports' },
                            ].map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => setActiveTab(item.id)}
                                    className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all w-full text-left ${
                                        activeTab === item.id 
                                        ? 'bg-indigo-600/20 text-indigo-300 border border-indigo-500/20 shadow-[0_0_15px_rgba(99,102,241,0.1)]' 
                                        : 'text-slate-400 hover:text-white hover:bg-white/5 border border-transparent'
                                    }`}
                                >
                                    <item.icon className={`w-4 h-4 ${activeTab === item.id ? 'text-indigo-400' : ''}`} />
                                    {item.label}
                                </button>
                            ))}
                        </div>
                        
                        <div className="mt-auto pt-4 border-t border-white/5">
                            <button className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-slate-400 hover:text-white hover:bg-white/5 w-full transition-colors">
                                <Settings className="w-4 h-4" />
                                Settings
                            </button>
                        </div>
                    </div>

                    {/* Main Area */}
                    <div className="flex-1 p-8 bg-gradient-to-br from-transparent to-indigo-900/10 overflow-y-auto custom-scrollbar">
                       {renderDashboardContent()}
                    </div>
                </div>
            </div>

            {/* Floating Elements - Glassmorphism */}
            <div className="absolute -right-8 lg:-right-16 top-32 bg-[#1e1b2e]/80 backdrop-blur-xl border border-white/10 p-5 rounded-xl shadow-2xl animate-float z-20 max-w-[220px] hover:scale-105 transition-transform cursor-help ring-1 ring-white/5">
                <div className="flex items-center gap-4 mb-3">
                    <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center border border-green-500/30">
                        <Shield className="w-5 h-5 text-green-400" />
                    </div>
                    <div>
                        <div className="text-xs text-slate-400 uppercase font-bold">Security Audit</div>
                        <div className="text-base font-bold text-white">Passed</div>
                    </div>
                </div>
                <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                    <div className="bg-green-500 h-full w-full shadow-[0_0_10px_#22c55e]"></div>
                </div>
            </div>

            <div className="absolute -left-8 lg:-left-16 bottom-32 bg-[#1e1b2e]/80 backdrop-blur-xl border border-white/10 p-5 rounded-xl shadow-2xl animate-float z-20 hover:scale-105 transition-transform cursor-help ring-1 ring-white/5" style={{ animationDelay: '2s' }}>
                <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center border border-indigo-500/30">
                        <Users className="w-5 h-5 text-indigo-400" />
                    </div>
                    <div>
                        <div className="text-xs text-slate-400 uppercase font-bold">New Users</div>
                        <div className="text-base font-bold text-white">+1,240</div>
                    </div>
                </div>
            </div>
            
            {/* Back Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-indigo-600/10 rounded-full blur-[120px] -z-10 group-hover:bg-indigo-500/20 transition-colors duration-700"></div>
        </div>

      </div>
    </div>
  );
};