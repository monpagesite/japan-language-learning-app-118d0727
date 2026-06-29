import React, { useEffect, useRef } from 'react';
import { Book, PenTool, RefreshCw, LucideIcon } from 'lucide-react';
import { siteContent } from '../lib/siteContent';

const iconMap: Record<string, LucideIcon> = {
  Book,
  PenTool,
  RefreshCw
};

export const MethodSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { method } = siteContent;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('[data-reveal]');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="method"
      ref={sectionRef}
      className="py-16 md:py-24 lg:py-32 bg-surface"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <p
            data-reveal
            className="text-sm font-medium tracking-wider uppercase text-primary mb-4 opacity-0 translate-y-4 transition-all duration-700 ease-out"
            style={{ fontFamily: 'Noto Sans JP, sans-serif' }}
          >
            {method.overline}
          </p>
          <h2
            data-reveal
            className="text-4xl md:text-5xl font-bold text-text tracking-tight max-w-[600px] mx-auto opacity-0 translate-y-4 transition-all duration-700 ease-out delay-100"
            style={{ fontFamily: 'Cormorant Garamond, serif', letterSpacing: '-0.02em' }}
          >
            {method.heading}
          </h2>
          <p
            data-reveal
            className="mt-4 text-lg text-text-muted max-w-[560px] mx-auto leading-relaxed opacity-0 translate-y-4 transition-all duration-700 ease-out delay-200"
          >
            {method.subtext}
          </p>
        </div>

        {/* Three-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {method.steps.map((step, index) => {
            const Icon = iconMap[step.icon];
            return (
              <div
                key={step.number}
                data-reveal
                className="relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 ease-out opacity-0 translate-y-4"
                style={{ transitionDelay: `${300 + index * 100}ms` }}
              >
                {/* Number Badge */}
                <div className="absolute top-6 right-6 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="w-14 h-14 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-6">
                  <Icon size={28} />
                </div>

                {/* Title */}
                <h3
                  className="text-2xl font-bold text-text mb-1"
                  style={{ fontFamily: 'Noto Sans JP, sans-serif' }}
                >
                  {step.titleJa}
                </h3>
                <p className="text-base text-text-muted mb-4 font-medium">
                  {step.titleEn}
                </p>

                {/* Description */}
                <p className="text-base text-text-muted leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
