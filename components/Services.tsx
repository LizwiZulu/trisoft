import React, { useRef, useState, useEffect } from 'react';
import {
    Smartphone, Cloud, Database, Lock, Zap, Cpu,
    ArrowUpRight, Code2, Activity, Globe,
    ShieldCheck, Fingerprint, Share2, Layers,
    Terminal, MessageCircle, Bell, Search, Menu,
    CheckCircle2, AlertCircle, Server, GitBranch,
    BarChart3, Wifi, RefreshCw, Shield, Command
} from 'lucide-react';
import { ServiceItem, ServiceType } from '../types';

// --- Interactive Dashboard Widgets ---

const CodeVisual = ({ isHovered }: { isHovered: boolean }) => {
    return (
        <div className="w-full h-full bg-[#0e0c1f] rounded-xl border border-white/10 overflow-hidden flex flex-col shadow-2xl relative group">
            {/* Editor Header */}
            <div className="flex items-center justify-between px-4 py-2 bg-[#030014] border-b border-white/5">
                <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                </div>
                <div className="flex items-center gap-2 text-[10px] font-mono text-slate-400">
                    <GitBranch className="w-3 h-3 text-indigo-400" />
                    <span>feature/ai-refactor</span>
                </div>
            </div>

            <div className="relative flex-1 font-mono text-[10px] leading-relaxed">
                {/* 'Before' State (Legacy Code) */}
                <div className="absolute inset-0 p-4 bg-[#0e0c1f] text-slate-500">
                    <div className="opacity-50">
                        <div className="mb-1"><span className="text-purple-400">function</span> fetchData(cb) {'{'}</div>
                        <div className="pl-4 mb-1"><span className="text-blue-400">var</span> xhr = <span className="text-yellow-400">new</span> XMLHttpRequest();</div>
                        <div className="pl-4 mb-1">xhr.open(<span className="text-green-400">'GET'</span>, url);</div>
                        <div className="pl-4 mb-1">xhr.onload = <span className="text-purple-400">function</span>() {'{'}</div>
                        <div className="pl-8 mb-1">cb(<span className="text-blue-400">null</span>, xhr.response);</div>
                        <div className="pl-4 mb-1">{'}'};</div>
                        <div className="pl-4">xhr.send();</div>
                        <div>{'}'}</div>
                    </div>
                    {/* Diff Overlay Indicator */}
                    <div className="absolute inset-y-0 right-0 w-1 bg-red-500/20"></div>
                </div>

                {/* 'After' State (Modern Code) - Revealed on Hover */}
                <div
                    className="absolute inset-0 bg-[#0b0919] border-l border-indigo-500/30 transition-all duration-700 ease-in-out"
                    style={{
                        clipPath: isHovered ? 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' : 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)'
                    }}
                >
                    <div className="p-4">
                        <div className="mb-1"><span className="text-fuchsia-400">const</span> fetchData = <span className="text-indigo-300">async</span> () =&gt; {'{'}</div>
                        <div className="pl-4 mb-1"><span className="text-fuchsia-400">try</span> {'{'}</div>
                        <div className="pl-8 mb-1"><span className="text-fuchsia-400">const</span> {'{'} data {'}'} = <span className="text-fuchsia-400">await</span> axios.get(url);</div>
                        <div className="pl-8 mb-1"><span className="text-fuchsia-400">return</span> data;</div>
                        <div className="pl-4 mb-1">{'}'} <span className="text-fuchsia-400">catch</span> (err) {'{'}</div>
                        <div className="pl-8 mb-1">logger.error(err);</div>
                        <div className="pl-4">{'}'}</div>
                        <div>{'}'}</div>
                    </div>
                    <div className="absolute bottom-4 right-4 bg-green-500/10 text-green-400 text-[9px] px-2 py-1 rounded border border-green-500/20 flex items-center gap-1 animate-pulse">
                        <CheckCircle2 className="w-3 h-3" />
                        Optimized
                    </div>
                </div>
            </div>
        </div>
    );
};

const MobileVisual = ({ isHovered }: { isHovered: boolean }) => {
    return (
        <div className="w-full h-full flex items-center justify-center bg-[#0e0c1f] rounded-xl border border-white/10 relative overflow-hidden">
            {/* Grid Lines */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px]"></div>

            {/* Phone Mockup */}
            <div className={`relative w-32 h-48 bg-[#030014] rounded-[1.5rem] border-4 border-slate-700 shadow-xl transition-transform duration-500 ${isHovered ? 'scale-105 -translate-y-2' : ''}`}>
                {/* Notch */}
                <div className="absolute top-0 inset-x-0 h-4 bg-slate-800 rounded-b-lg mx-8 z-20"></div>

                {/* Screen */}
                <div className="w-full h-full bg-slate-900 rounded-[1.2rem] overflow-hidden relative">
                    {/* App Header */}
                    <div className="h-8 bg-indigo-600 flex items-center justify-between px-3 pt-2">
                        <Menu className="w-2 h-2 text-white" />
                        <div className="w-2 h-2 rounded-full bg-white/50"></div>
                    </div>

                    {/* App Content */}
                    <div className="p-2 space-y-2">
                        {/* Chart Widget */}
                        <div className="bg-white/5 rounded-lg p-2 h-16 flex items-end gap-0.5">
                            {[30, 50, 40, 70, 60, 80, 50, 90].map((h, i) => (
                                <div
                                    key={i}
                                    className="flex-1 bg-indigo-500 rounded-t-sm transition-all duration-500"
                                    style={{ height: isHovered ? `${h}%` : '20%' }}
                                ></div>
                            ))}
                        </div>

                        {/* List Items */}
                        {[1, 2].map(i => (
                            <div key={i} className="flex items-center gap-2 bg-white/5 p-1.5 rounded-lg">
                                <div className="w-6 h-6 rounded-full bg-fuchsia-500/20"></div>
                                <div className="flex-1 h-1.5 bg-slate-700 rounded"></div>
                            </div>
                        ))}
                    </div>

                    {/* Floating Notification */}
                    <div
                        className={`absolute top-10 inset-x-2 bg-white/10 backdrop-blur-md border border-white/20 p-2 rounded-lg flex items-center gap-2 transition-all duration-500 ${isHovered ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}
                    >
                        <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
                            <CheckCircle2 className="w-3 h-3 text-white" />
                        </div>
                        <div className="text-[8px] text-white font-medium">
                            Build Deployed
                            <div className="text-slate-400 text-[7px]">v2.4.0 • 2s ago</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Connection Badge */}
            <div className="absolute bottom-4 right-4 bg-black/40 backdrop-blur border border-white/10 px-2 py-1 rounded text-[9px] text-slate-400 font-mono flex items-center gap-1.5">
                <Wifi className={`w-3 h-3 ${isHovered ? 'text-green-400' : 'text-slate-600'}`} />
                {isHovered ? 'Connected' : 'Offline'}
            </div>
        </div>
    );
};

const CloudVisual = ({ isHovered }: { isHovered: boolean }) => {
    return (
        <div className="w-full h-full bg-[#0e0c1f] rounded-xl border border-white/10 relative overflow-hidden flex items-center justify-center">
            {/* Background Radial */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(99,102,241,0.1)_0%,_transparent_60%)]"></div>

            {/* Central Cluster Node */}
            <div className="relative z-10 group">
                <div className={`w-16 h-16 bg-[#1e1b2e] rounded-xl border border-indigo-500 flex items-center justify-center shadow-[0_0_30px_rgba(99,102,241,0.2)] transition-all duration-500 ${isHovered ? 'shadow-[0_0_50px_rgba(99,102,241,0.6)] border-indigo-400' : ''}`}>
                    <Server className={`w-8 h-8 text-indigo-400 transition-transform duration-1000 ${isHovered ? 'rotate-180' : ''}`} />
                </div>
                {/* Label */}
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[9px] text-indigo-300 font-mono bg-indigo-900/30 px-2 py-0.5 rounded border border-indigo-500/20 whitespace-nowrap">
                    us-east-1
                </div>
            </div>

            {/* Orbiting Microservices */}
            {[0, 72, 144, 216, 288].map((deg, i) => {
                const isActive = isHovered;
                return (
                    <div
                        key={i}
                        className="absolute"
                        style={{
                            transform: `rotate(${deg}deg) translateY(${isActive ? '-60px' : '-40px'})`,
                            transition: 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)'
                        }}
                    >
                        <div
                            className={`w-8 h-8 bg-[#0f0c29] rounded-lg border border-white/10 flex items-center justify-center transition-all duration-300 ${isActive ? 'bg-white/5 border-fuchsia-500/50 shadow-[0_0_15px_rgba(217,70,239,0.3)]' : 'opacity-50'}`}
                            style={{ transform: `rotate(-${deg}deg)` }} // Keep icon upright
                        >
                            <Database className="w-3.5 h-3.5 text-slate-300" />
                        </div>
                        {/* Connecting Line */}
                        <div
                            className={`absolute top-1/2 left-1/2 w-0.5 bg-gradient-to-b from-indigo-500/50 to-transparent -z-10 transition-all duration-500`}
                            style={{
                                height: isActive ? '30px' : '10px',
                                transform: `translate(-50%, 0)`,
                                opacity: isActive ? 1 : 0
                            }}
                        ></div>
                    </div>
                );
            })}

            {/* Auto-scale indicator */}
            <div className={`absolute top-4 right-4 text-[9px] font-mono transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
                <div className="flex items-center gap-2 text-green-400 mb-1">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
                    Auto-scaling Active
                </div>
                <div className="text-slate-500">Nodes: 5/12</div>
            </div>
        </div>
    );
};

const IntegrationVisual = ({ isHovered }: { isHovered: boolean }) => {
    return (
        <div className="w-full h-full bg-[#0e0c1f] rounded-xl border border-white/10 flex flex-col relative overflow-hidden">
            {/* Header */}
            <div className="px-4 py-2 border-b border-white/5 bg-black/20 flex justify-between items-center">
                <span className="text-[9px] font-mono text-slate-400 uppercase tracking-wider">API Gateway</span>
                <div className="flex gap-1">
                    <div className={`w-1.5 h-1.5 rounded-full ${isHovered ? 'bg-green-500 animate-pulse' : 'bg-slate-700'}`}></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-700"></div>
                </div>
            </div>

            {/* Flow Visualization */}
            <div className="flex-1 flex items-center justify-between px-6 relative">
                {/* Left Nodes (Inputs) */}
                <div className="flex flex-col gap-4">
                    {['Stripe', 'Auth0', 'Twilio'].map((label, i) => (
                        <div key={i} className="relative group">
                            <div className={`w-20 h-8 bg-white/5 border border-white/10 rounded flex items-center justify-center text-[10px] text-slate-300 font-medium transition-colors ${isHovered ? 'border-indigo-500/30 bg-indigo-500/10' : ''}`}>
                                {label}
                            </div>
                            {/* Particle */}
                            <div
                                className={`absolute top-1/2 right-0 w-2 h-2 bg-indigo-400 rounded-full shadow-[0_0_10px_#818cf8] transition-all duration-[1.5s] ease-linear`}
                                style={{
                                    opacity: isHovered ? 1 : 0,
                                    transform: isHovered ? 'translateX(140px)' : 'translateX(0)',
                                    transitionDelay: `${i * 0.2}s`
                                }}
                            ></div>
                        </div>
                    ))}
                </div>

                {/* Center Processing Hub */}
                <div className="relative z-10">
                    <div className={`w-12 h-12 rounded-full bg-[#030014] border-2 flex items-center justify-center transition-all duration-300 ${isHovered ? 'border-fuchsia-500 shadow-[0_0_20px_rgba(217,70,239,0.4)] scale-110' : 'border-slate-700'}`}>
                        <RefreshCw className={`w-5 h-5 text-fuchsia-400 ${isHovered ? 'animate-spin' : ''}`} />
                    </div>
                </div>

                {/* Right Node (Output) */}
                <div className="relative">
                    <div className={`w-20 h-20 bg-white/5 border border-white/10 rounded-lg flex flex-col items-center justify-center gap-2 transition-all duration-300 ${isHovered ? 'bg-green-500/10 border-green-500/30' : ''}`}>
                        <Database className={`w-5 h-5 ${isHovered ? 'text-green-400' : 'text-slate-500'}`} />
                        <span className="text-[9px] text-slate-400">Postgres</span>
                    </div>
                    {/* Success Badge */}
                    <div className={`absolute -top-2 -right-2 bg-green-500 text-black text-[8px] font-bold px-1.5 py-0.5 rounded-full transition-all duration-300 ${isHovered ? 'scale-100' : 'scale-0'}`}>
                        200 OK
                    </div>
                </div>
            </div>

            {/* Connection Lines (SVG Background) */}
            <svg className="absolute inset-0 pointer-events-none opacity-20">
                <path d="M 90 40 C 130 40, 130 90, 170 90" stroke="white" fill="none" strokeWidth="1" />
                <path d="M 90 90 C 130 90, 130 90, 170 90" stroke="white" fill="none" strokeWidth="1" />
                <path d="M 90 140 C 130 140, 130 90, 170 90" stroke="white" fill="none" strokeWidth="1" />
                <path d="M 220 90 L 260 90" stroke="white" fill="none" strokeWidth="1" />
            </svg>
        </div>
    );
};

const AnalyticsVisual = ({ isHovered }: { isHovered: boolean }) => {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const ref = useRef<HTMLDivElement>(null);

    const handleMove = (e: React.MouseEvent) => {
        if (ref.current) {
            const rect = ref.current.getBoundingClientRect();
            setMousePos({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top
            });
        }
    };

    return (
        <div
            ref={ref}
            onMouseMove={handleMove}
            className="w-full h-full bg-[#0e0c1f] rounded-xl border border-white/10 flex flex-col relative overflow-hidden group cursor-crosshair"
        >
            {/* Header */}
            <div className="px-4 py-2 border-b border-white/5 bg-black/20 flex justify-between items-center">
                <div className="flex gap-2 items-center">
                    <BarChart3 className="w-3 h-3 text-indigo-400" />
                    <span className="text-[9px] font-mono text-slate-300">TRAFFIC_VOL_Q4</span>
                </div>
                <div className="text-[9px] font-mono text-green-400">+24.5%</div>
            </div>

            {/* Chart Area */}
            <div className="flex-1 relative px-4 pt-4 pb-0">
                <div className="h-full flex items-end gap-1">
                    {[20, 45, 30, 60, 55, 80, 65, 90, 75, 60, 95, 85].map((h, i) => (
                        <div
                            key={i}
                            className="flex-1 rounded-t-sm bg-slate-800 hover:bg-indigo-500 transition-all duration-300 relative group/bar"
                            style={{
                                height: `${h}%`,
                                backgroundColor: isHovered ? 'rgba(99, 102, 241, 0.6)' : undefined
                            }}
                        >
                            {/* Individual Bar Tooltip */}
                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 opacity-0 group-hover/bar:opacity-100 bg-white text-black text-[8px] px-1 rounded">
                                {h * 10}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Crosshair Line (follows mouse) */}
                {isHovered && (
                    <>
                        <div
                            className="absolute top-0 bottom-0 w-[1px] bg-white/20 pointer-events-none"
                            style={{ left: mousePos.x }}
                        >
                            <div className="absolute top-4 -right-8 bg-indigo-600 text-white text-[9px] font-mono px-1.5 py-0.5 rounded">
                                {(mousePos.x * 1.5).toFixed(0)}
                            </div>
                        </div>
                    </>
                )}
            </div>

            {/* Bottom Gradient */}
            <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-indigo-600/10 to-transparent pointer-events-none"></div>
        </div>
    );
};

const SecurityVisual = ({ isHovered }: { isHovered: boolean }) => {
    return (
        <div className="w-full h-full bg-[#0e0c1f] rounded-xl border border-white/10 flex flex-col relative overflow-hidden">
            {/* Header */}
            <div className="absolute top-4 left-4 z-10">
                <div className="flex items-center gap-2 mb-1">
                    <Shield className={`w-4 h-4 ${isHovered ? 'text-green-400' : 'text-slate-500'}`} />
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-300">Threat Monitor</span>
                </div>
                <div className={`text-[9px] font-mono transition-colors ${isHovered ? 'text-green-500' : 'text-slate-500'}`}>
                    STATUS: {isHovered ? 'SECURE' : 'SCANNING...'}
                </div>
            </div>

            {/* Radar Screen */}
            <div className="absolute inset-0 flex items-center justify-center">
                {/* Radar Grid */}
                <div className="w-48 h-48 rounded-full border border-white/5 relative">
                    <div className="absolute inset-0 rounded-full border border-white/5 scale-75"></div>
                    <div className="absolute inset-0 rounded-full border border-white/5 scale-50"></div>
                    <div className="absolute inset-0 rounded-full border border-white/5 scale-25"></div>
                    <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-white/5 -translate-x-1/2"></div>
                    <div className="absolute left-0 right-0 top-1/2 h-[1px] bg-white/5 -translate-y-1/2"></div>

                    {/* Scanner Sweep */}
                    <div
                        className="absolute inset-0 rounded-full bg-[conic-gradient(transparent_270deg,rgba(34,197,94,0.2)_360deg)] animate-[spin_2s_linear_infinite]"
                        style={{ opacity: isHovered ? 1 : 0.3 }}
                    ></div>

                    {/* Target Blips */}
                    {isHovered && (
                        <>
                            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-red-500 rounded-full animate-ping"></div>
                            <div className="absolute bottom-1/3 right-1/4 w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse delay-300"></div>
                        </>
                    )}

                    {/* Neutralized Target (Center) */}
                    <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${isHovered ? 'scale-100' : 'scale-0'}`}>
                        <div className="w-12 h-12 border-2 border-green-500 rounded-full opacity-50 animate-ping"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <ShieldCheck className="w-6 h-6 text-green-500" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Stats Footer */}
            <div className="absolute bottom-0 inset-x-0 bg-black/40 backdrop-blur border-t border-white/5 p-2 flex justify-between text-[8px] font-mono text-slate-400">
                <div>THREATS: 0</div>
                <div>IP: 192.168.x.x</div>
                <div>UPTIME: 99.9%</div>
            </div>
        </div>
    );
};

const services: (ServiceItem & { Visual: React.FC<{ isHovered: boolean }> })[] = [
    {
        id: '1',
        title: 'Generative Engineering',
        type: ServiceType.CUSTOM_DEV,
        description: 'We use LLMs to generate boilerplate, write tests, and refactor legacy code 10x faster.',
        icon: 'cpu',
        Visual: CodeVisual
    },
    {
        id: '2',
        title: 'Smart Mobile Apps',
        type: ServiceType.MOBILE_APPS,
        description: 'React Native architectures enhanced with on-device ML for personalized user experiences.',
        icon: 'smartphone',
        Visual: MobileVisual
    },
    {
        id: '3',
        title: 'Cloud Neural Nets',
        type: ServiceType.CLOUD,
        description: 'Serverless infrastructure on AWS & Azure designed to auto-scale with organic traffic.',
        icon: 'cloud',
        Visual: CloudVisual
    },
    {
        id: '4',
        title: 'System Synapses',
        type: ServiceType.INTEGRATION,
        description: 'Event-driven architectures connecting your CRM, ERP, and AI Agents into a single hive mind.',
        icon: 'zap',
        Visual: IntegrationVisual
    },
    {
        id: '5',
        title: 'Predictive Analytics',
        type: ServiceType.CONSULTING,
        description: 'Turn dormant data lakes into future-gazing engines using custom trained models.',
        icon: 'database',
        Visual: AnalyticsVisual
    },
    {
        id: '6',
        title: 'Zero-Trust Security',
        type: ServiceType.CONSULTING,
        description: 'AI-powered threat detection that evolves faster than new attack vectors.',
        icon: 'lock',
        Visual: SecurityVisual
    }
];

const IconMap: Record<string, React.ReactNode> = {
    cpu: <Cpu className="w-6 h-6" />,
    monitor: <Code2 className="w-6 h-6" />,
    smartphone: <Smartphone className="w-6 h-6" />,
    cloud: <Cloud className="w-6 h-6" />,
    zap: <Zap className="w-6 h-6" />,
    database: <Activity className="w-6 h-6" />,
    lock: <ShieldCheck className="w-6 h-6" />
};

export const Services: React.FC = () => {
    return (
        <div id="services" className="py-32 relative z-10 bg-[#030014]">
            {/* Background Accents */}
            <div className="absolute right-0 top-1/3 w-96 h-96 bg-secondary/10 blur-[100px] rounded-full pointer-events-none"></div>
            <div className="absolute left-0 bottom-1/3 w-96 h-96 bg-primary/10 blur-[100px] rounded-full pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="mb-20 md:text-center max-w-3xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-primary text-xs font-bold uppercase tracking-wider mb-6 backdrop-blur-sm">
                        <Command className="w-3 h-3" />
                        <span>Capabilities</span>
                    </div>
                    <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
                        Full-stack engineering for <br />
                        <span className="text-primary">the AI era.</span>
                    </h3>
                    <p className="text-lg text-slate-400 leading-relaxed">
                        Traditional software development is too slow. We combine elite human engineers with autonomous AI agents to build robust systems at warp speed.
                    </p>
                </div>

                {/* Bento Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr">
                    {services.map((service, index) => (
                        <ServiceCard key={service.id} service={service} index={index} />
                    ))}
                </div>
            </div>
        </div>
    );
};

const ServiceCard: React.FC<{ service: any; index: number }> = ({ service, index }) => {
    const divRef = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!divRef.current) return;
        const rect = divRef.current.getBoundingClientRect();
        setPosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    // Grid Layout Logic: 2-1, 1-2, 1-2 pattern
    const isLarge = index === 0 || index === 3 || index === 5;

    return (
        <div
            ref={divRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`
                group relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden hover:bg-white/[0.08] transition-all duration-500 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10
                ${isLarge ? 'md:col-span-2' : 'md:col-span-1'}
                min-h-[320px] md:min-h-[340px]
            `}
        >
            {/* Spotlight Effect */}
            <div
                className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition duration-300"
                style={{
                    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(0,242,255,0.06), transparent 40%)`,
                }}
            />

            <div className={`h-full flex ${isLarge ? 'flex-col md:flex-row' : 'flex-col'}`}>
                {/* Content Section */}
                <div className={`p-8 flex flex-col justify-between relative z-10 ${isLarge ? 'md:w-1/2' : 'w-full flex-1'}`}>
                    <div>
                        <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 border border-white/10 group-hover:scale-110 group-hover:bg-primary/20 group-hover:border-primary/50 transition-all duration-300 shadow-lg shadow-black/20">
                            {React.cloneElement(IconMap[service.icon] as React.ReactElement<any>, {
                                className: "w-6 h-6 text-slate-300 group-hover:text-primary transition-colors"
                            })}
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                        <p className="text-slate-400 leading-relaxed text-sm font-light">
                            {service.description}
                        </p>
                    </div>
                    <div className="mt-6">
                        <span className="inline-flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-wider opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                            Explore <ArrowUpRight className="w-3 h-3" />
                        </span>
                    </div>
                </div>

                {/* Visual Section */}
                <div className={`
                    relative overflow-hidden bg-black/20
                    ${isLarge ? 'md:w-1/2 border-t md:border-t-0 md:border-l border-white/5' : 'w-full h-56 border-t border-white/5'}
                `}>
                    <div className="absolute inset-0 p-6 flex items-center justify-center">
                        <service.Visual isHovered={isHovered} />
                    </div>
                </div>
            </div>
        </div>
    );
};