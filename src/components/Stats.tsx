"use client";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 6, suffix: "+", label: "Core Service Lines" },
  { value: 50, suffix: "+", label: "Premium Screen Locations" },
  { value: 3, suffix: "M+", label: "Monthly Audience Reach" },
  { value: 100, suffix: "%", label: "End-to-End Capability" },
];

function Counter({
  value,
  suffix,
  active,
}: {
  value: number;
  suffix: string;
  active: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [active, value]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="py-16 bg-white border-b border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="gold-line mx-auto mb-4" />
          <p className="text-navy/50 text-sm font-semibold tracking-widest uppercase">
            By the Numbers
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="stat-card text-white rounded-2xl p-8 text-center"
            >
              <div className="text-4xl md:text-5xl font-black text-gold font-display mb-2">
                <Counter value={stat.value} suffix={stat.suffix} active={active} />
              </div>
              <div className="text-white/80 text-sm font-medium leading-tight">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
