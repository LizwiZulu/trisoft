import React, { useEffect, useRef, useState } from 'react';

const stats = [
  { label: 'Revenue Generated', value: 50, suffix: 'M+', prefix: '$' },
  { label: 'Uptime Guaranteed', value: 99.9, suffix: '%', prefix: '' },
  { label: 'Faster Delivery', value: 2.5, suffix: 'x', prefix: '' },
  { label: 'Enterprise Partners', value: 100, suffix: '+', prefix: '' },
];

export const Stats: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="border-y border-white/5 bg-[#030014] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, idx) => (
            <StatItem key={idx} stat={stat} isVisible={isVisible} delay={idx * 200} />
          ))}
        </div>
      </div>
    </div>
  );
};

const StatItem: React.FC<{ stat: any; isVisible: boolean; delay: number }> = ({ stat, isVisible, delay }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    const duration = 2000;
    
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Ease out cubic
      const easeOut = 1 - Math.pow(1 - progress, 3);
      
      setCount(stat.value * easeOut);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    const timer = setTimeout(() => {
      requestAnimationFrame(animate);
    }, delay);

    return () => clearTimeout(timer);
  }, [isVisible, stat.value, delay]);

  return (
    <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
      <div className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight tabular-nums">
        {stat.prefix}{count.toFixed(stat.value % 1 !== 0 ? 1 : 0)}{stat.suffix}
      </div>
      <div className="text-sm text-slate-400 uppercase tracking-wider font-medium">
        {stat.label}
      </div>
    </div>
  );
};