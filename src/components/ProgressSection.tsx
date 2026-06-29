import React, { useEffect, useRef } from 'react';
import { BarChart3, Calendar, TrendingUp, LucideIcon } from 'lucide-react';
import { siteContent } from '../lib/siteContent';

const iconMap: Record<string, LucideIcon> = {
  BarChart3,
  Calendar,
  TrendingUp
};

export const ProgressSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { progress } = siteContent;

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
      id="progress"
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
            {progress.overline}
          </p>
          <h2
            data-reveal
            className="text-4xl md:text-5xl font-bold text-text tracking-tight max-w-[600px] mx-auto opacity-0 translate-y-4 transition-all duration-700 ease-out delay-100"
            style={{ fontFamily: 'Cormorant Garamond, serif', letterSpacing: '-0.02em' }}
          >
            {progress.heading}
          </h2>
          <p
            data-reveal
            className="mt-4 text-lg text-text-muted max-w-[560px] mx-auto leading-relaxed opacity-0 translate-y-4 transition-all duration-700 ease-out delay-200"
          >
            {progress.subtext}
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Feature List */}
          <div className="space-y-8">
            {progress.features.map((feature, index) => {
              const Icon = iconMap[feature.icon];
              return (
                <div
                  key={feature.titleEn}
                  data-reveal
                  className="flex items-start space-x-4 opacity-0 translate-y-4 transition-all duration-700 ease-out"
                  style={{ transitionDelay: `${300 + index * 100}ms` }}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center">
                    <Icon size={24} />
                  </div>
                  <div>
                    <h3
                      className="text-xl font-bold text-text mb-1"
                      style={{ fontFamily: 'Noto Sans JP, sans-serif' }}
                    >
                      {feature.titleJa}
                    </h3>
                    <p className="text-base text-text-muted mb-2 font-medium">
                      {feature.titleEn}
                    </p>
                    <p className="text-base text-text-muted leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right - Visual Mockup */}
          <div
            data-reveal
            className="opacity-0 translate-x-8 transition-all duration-700 ease-out delay-500"
          >
            <div className="bg-white rounded-2xl shadow-xl p-8">
              {/* Progress Stats Card */}
              <div className="mb-6">
                <h4 className="text-lg font-bold text-text mb-4">Your Progress</h4>
                
                {/* Vocabulary Progress */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-text">Vocabulary</span>
                    <span className="text-sm font-bold text-primary">340/1200</span>
                  </div>
                  <div className="w-full bg-surface rounded-full h-2.5">
                    <div
                      className="bg-primary h-2.5 rounded-full transition-all duration-300"
                      style={{ width: '28%' }}
                    />
                  </div>
                </div>

                {/* Kanji Progress */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-text">Kanji</span>
                    <span className="text-sm font-bold text-primary">85/300</span>
                  </div>
                  <div className="w-full bg-surface rounded-full h-2.5">
                    <div
                      className="bg-primary h-2.5 rounded-full transition-all duration-300"
                      style={{ width: '28%' }}
                    />
                  </div>
                </div>

                {/* Mastery Level */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-text">Mastery Level</span>
                    <span className="text-sm font-bold text-primary">68%</span>
                  </div>
                  <div className="w-full bg-surface rounded-full h-2.5">
                    <div
                      className="bg-accent h-2.5 rounded-full transition-all duration-300"
                      style={{ width: '68%' }}
                    />
                  </div>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-border">
                <div className="bg-surface rounded-xl p-4">
                  <p className="text-2xl font-bold text-text">21</p>
                  <p className="text-xs text-text-muted mt-1">Day streak</p>
                </div>
                <div className="bg-surface rounded-xl p-4">
                  <p className="text-2xl font-bold text-text">156</p>
                  <p className="text-xs text-text-muted mt-1">Words reviewed</p>
                </div>
                <div className="bg-surface rounded-xl p-4">
                  <p className="text-2xl font-bold text-text">4.2h</p>
                  <p className="text-xs text-text-muted mt-1">Study time</p>
                </div>
                <div className="bg-surface rounded-xl p-4">
                  <p className="text-2xl font-bold text-text">92%</p>
                  <p className="text-xs text-text-muted mt-1">Accuracy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
