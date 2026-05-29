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
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={containerRef} className="bg-navy py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-12">
          {stats.map((stat, idx) => (
            <StatItem key={stat.label} stat={stat} isVisible={isVisible} delay={idx * 150} />
          ))}
        </div>
      </div>
    </section>
  );
};

type Stat = (typeof stats)[number];

const StatItem: React.FC<{ stat: Stat; isVisible: boolean; delay: number }> = ({
  stat,
  isVisible,
  delay,
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    let raf = 0;
    let startTime = 0;
    const duration = 1800;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(stat.value * easeOut);
      if (progress < 1) raf = requestAnimationFrame(animate);
    };

    const timer = setTimeout(() => {
      raf = requestAnimationFrame(animate);
    }, delay);

    return () => {
      clearTimeout(timer);
      cancelAnimationFrame(raf);
    };
  }, [isVisible, stat.value, delay]);

  return (
    <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
      <div className="mb-2 text-4xl font-bold tracking-tight tabular-nums text-white md:text-5xl">
        {stat.prefix}
        {count.toFixed(stat.value % 1 !== 0 ? 1 : 0)}
        {stat.suffix}
      </div>
      <div className="text-sm font-medium uppercase tracking-wider text-slate-400">
        {stat.label}
      </div>
    </div>
  );
};
