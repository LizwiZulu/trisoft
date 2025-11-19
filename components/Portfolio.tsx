import React, { useState } from 'react';
import { ArrowUpRight, ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "FinTrack Enterprise",
    category: "FinTech • Web App",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
    description: "A comprehensive financial dashboard for a leading African bank processing millions in daily transactions. We reduced latency by 60% through optimized caching and server-side rendering.",
    tags: ["React", "Node.js", "AWS Lambda", "Redis"]
  },
  {
    id: 2,
    title: "MediCore Systems",
    category: "Healthcare • Mobile",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2670&auto=format&fit=crop",
    description: "Patient management ecosystem simplifying records for over 50 clinics nationwide. HIPAA compliant and secure by design, featuring real-time doctor-patient messaging.",
    tags: ["React Native", "Firebase", "TypeScript", "WebRTC"]
  },
  {
    id: 3,
    title: "ShopFlow Commerce",
    category: "E-Commerce • Headless",
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?q=80&w=2664&auto=format&fit=crop",
    description: "Headless e-commerce architecture improving load times by 400% for a major retail giant. Integrated with multiple payment gateways and AI-driven recommendations.",
    tags: ["Next.js", "Shopify Plus", "Vercel", "Tailwind"]
  },
  {
    id: 4,
    title: "EduVerse AI",
    category: "EdTech • AI Platform",
    image: "https://images.unsplash.com/photo-1610484826967-09c5720778c7?q=80&w=2670&auto=format&fit=crop",
    description: "An adaptive learning platform powered by generative AI that personalizes curriculum for 50,000+ students. Features real-time tutoring and automated grading systems.",
    tags: ["Python", "TensorFlow", "React", "PostgreSQL"]
  },
  {
    id: 5,
    title: "OmniChain Logistics",
    category: "Supply Chain • IoT",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2670&auto=format&fit=crop",
    description: "Real-time fleet tracking and inventory management system using IoT sensors. Reduced delivery delays by 25% for a national logistics network.",
    tags: ["Go", "gRPC", "Flutter", "Kubernetes"]
  }
];

export const Portfolio: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="work" className="py-32 bg-[#030014] relative overflow-hidden">
        {/* Background Fluid Blobs */}
        <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-indigo-600/20 rounded-full blur-[100px] pointer-events-none animate-blob mix-blend-screen opacity-40"></div>
        <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-fuchsia-600/20 rounded-full blur-[100px] pointer-events-none animate-blob-delay mix-blend-screen opacity-40"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Header with Controls */}
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-20 gap-6">
                <div>
                    <h2 className="text-indigo-500 font-bold tracking-widest uppercase text-xs mb-4">Selected Work</h2>
                    <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                        Built for impact.
                    </h3>
                </div>
                
                <div className="hidden md:flex items-center gap-3">
                    <button 
                        onClick={prev}
                        className="w-12 h-12 rounded-lg border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-200 active:scale-95"
                        aria-label="Previous project"
                    >
                        <ArrowLeft className="w-5 h-5" />
                    </button>
                    <button 
                        onClick={next}
                        className="w-12 h-12 rounded-lg border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-200 active:scale-95"
                        aria-label="Next project"
                    >
                        <ArrowRight className="w-5 h-5" />
                    </button>
                </div>
            </div>

            {/* Carousel Track */}
            <div className="relative overflow-hidden -mx-4 px-4">
                <div 
                    className="flex transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {projects.map((project, index) => (
                        <div key={project.id} className="w-full flex-shrink-0 px-1 md:px-2">
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                                {/* Image Side */}
                                <div className="lg:col-span-7 relative group cursor-pointer">
                                    <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-fuchsia-500 rounded-lg blur opacity-20 group-hover:opacity-50 transition duration-1000"></div>
                                    <div className="relative rounded-lg overflow-hidden border border-white/10 shadow-2xl shadow-black/50 bg-[#0f0c29] aspect-[16/10]">
                                        <img 
                                            src={project.image} 
                                            alt={project.title} 
                                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 scale-105 group-hover:scale-110 transition-all duration-700 ease-out"
                                        />
                                        {/* Overlay Gradient */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#030014]/80 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-500"></div>
                                        
                                        <div className="absolute top-6 left-6">
                                            <span className="px-3 py-1.5 rounded-md bg-black/60 backdrop-blur-md text-white text-xs font-bold border border-white/10 shadow-xl tracking-wide uppercase group-hover:border-indigo-500/50 group-hover:text-indigo-300 group-hover:shadow-[0_0_15px_rgba(99,102,241,0.5)] transition-all duration-300">
                                                {project.category}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Content Side */}
                                <div className="lg:col-span-5 lg:pl-6">
                                    <div className="animate-fade-in-up">
                                        <div className="flex items-center gap-4 mb-6">
                                            <span className="text-indigo-400 font-mono text-xs font-bold tracking-wider">
                                                0{index + 1} / 0{projects.length}
                                            </span>
                                            <div className="h-px w-12 bg-white/10"></div>
                                        </div>
                                        
                                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                                            {project.title}
                                        </h3>
                                        
                                        <p className="text-slate-400 text-lg leading-relaxed mb-8 font-light">
                                            {project.description}
                                        </p>

                                        <div className="flex flex-wrap gap-2 mb-10">
                                            {project.tags.map(tag => (
                                                <span key={tag} className="px-3 py-1 rounded bg-white/5 text-slate-300 text-xs font-medium border border-white/10 hover:border-white/30 transition-colors cursor-default">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        <button className="group/btn inline-flex items-center gap-2 text-white font-semibold border-b border-indigo-500 pb-1 hover:text-indigo-400 hover:border-indigo-400 transition-colors">
                                            View Case Study 
                                            <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Mobile Navigation */}
            <div className="flex md:hidden items-center justify-between mt-8 pt-6 border-t border-white/5">
                 <button 
                    onClick={prev}
                    className="p-3 rounded-lg hover:bg-white/10 text-white transition-colors"
                >
                    <ChevronLeft className="w-6 h-6" />
                </button>
                 <span className="text-sm font-mono text-slate-500">
                    {currentIndex + 1} / {projects.length}
                </span>
                <button 
                    onClick={next}
                    className="p-3 rounded-lg hover:bg-white/10 text-white transition-colors"
                >
                    <ChevronRight className="w-6 h-6" />
                </button>
            </div>
        </div>
    </section>
  );
};