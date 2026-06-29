import React, { useEffect, useRef } from 'react';
import { BookOpen, FileText, Volume2, Layers, CheckSquare, LucideIcon } from 'lucide-react';
import { siteContent } from '../lib/siteContent';

const iconMap: Record<string, LucideIcon> = {
  BookOpen,
  FileText,
  Volume2,
  Layers,
  CheckSquare
};

export const ContentSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { content } = siteContent;

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
      id="content"
      ref={sectionRef}
      className="py-16 md:py-24 lg:py-32 bg-background"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <p
            data-reveal
            className="text-sm font-medium tracking-wider uppercase text-primary mb-4 opacity-0 translate-y-4 transition-all duration-700 ease-out"
            style={{ fontFamily: 'Noto Sans JP, sans-serif' }}
          >
            {content.overline}
          </p>
          <h2
            data-reveal
            className="text-4xl md:text-5xl font-bold text-text tracking-tight max-w-[600px] mx-auto opacity-0 translate-y-4 transition-all duration-700 ease-out delay-100"
            style={{ fontFamily: 'Cormorant Garamond, serif', letterSpacing: '-0.02em' }}
          >
            {content.heading}
          </h2>
          <p
            data-reveal
            className="mt-4 text-lg text-text-muted max-w-[560px] mx-auto leading-relaxed opacity-0 translate-y-4 transition-all duration-700 ease-out delay-200"
          >
            {content.subtext}
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6 md:gap-8">
          {/* Large Card - Vocabulary */}
          <div
            data-reveal
            className="md:col-span-3 bg-white rounded-2xl p-8 md:p-10 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 opacity-0 translate-y-4 delay-300"
          >
            <div className="w-14 h-14 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-6">
              <BookOpen size={28} />
            </div>
            <h3
              className="text-2xl md:text-3xl font-bold text-text mb-1"
              style={{ fontFamily: 'Noto Sans JP, sans-serif' }}
            >
              {content.items[0].titleJa}
            </h3>
            <p className="text-base text-text-muted mb-3 font-medium">
              {content.items[0].titleEn}
            </p>
            <p className="text-base text-text-muted leading-relaxed mb-4">
              {content.items[0].description}
            </p>
            <span className="inline-block px-3 py-1.5 bg-surface text-primary text-sm font-medium rounded-full">
              {content.items[0].stats}
            </span>
          </div>

          {/* Medium Card - Kanji */}
          <div
            data-reveal
            className="md:col-span-3 bg-white rounded-2xl p-8 md:p-10 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 opacity-0 translate-y-4 delay-400"
          >
            <div className="w-14 h-14 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-6">
              <FileText size={28} />
            </div>
            <h3
              className="text-2xl md:text-3xl font-bold text-text mb-1"
              style={{ fontFamily: 'Noto Sans JP, sans-serif' }}
            >
              {content.items[1].titleJa}
            </h3>
            <p className="text-base text-text-muted mb-3 font-medium">
              {content.items[1].titleEn}
            </p>
            <p className="text-base text-text-muted leading-relaxed mb-4">
              {content.items[1].description}
            </p>
            <span className="inline-block px-3 py-1.5 bg-surface text-primary text-sm font-medium rounded-full">
              {content.items[1].stats}
            </span>
          </div>

          {/* Medium Card - Audio */}
          <div
            data-reveal
            className="md:col-span-2 bg-white rounded-2xl p-8 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 opacity-0 translate-y-4 delay-500"
          >
            <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-4">
              <Volume2 size={24} />
            </div>
            <h3
              className="text-xl font-bold text-text mb-1"
              style={{ fontFamily: 'Noto Sans JP, sans-serif' }}
            >
              {content.items[2].titleJa}
            </h3>
            <p className="text-sm text-text-muted mb-3 font-medium">
              {content.items[2].titleEn}
            </p>
            <p className="text-sm text-text-muted leading-relaxed mb-3">
              {content.items[2].description}
            </p>
            <span className="inline-block px-3 py-1.5 bg-surface text-primary text-xs font-medium rounded-full">
              {content.items[2].stats}
            </span>
          </div>

          {/* Small Card - Flashcards */}
          <div
            data-reveal
            className="md:col-span-2 bg-white rounded-2xl p-8 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 opacity-0 translate-y-4 delay-600"
          >
            <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-4">
              <Layers size={24} />
            </div>
            <h3
              className="text-xl font-bold text-text mb-1"
              style={{ fontFamily: 'Noto Sans JP, sans-serif' }}
            >
              {content.items[3].titleJa}
            </h3>
            <p className="text-sm text-text-muted mb-3 font-medium">
              {content.items[3].titleEn}
            </p>
            <p className="text-sm text-text-muted leading-relaxed mb-3">
              {content.items[3].description}
            </p>
            <span className="inline-block px-3 py-1.5 bg-surface text-primary text-xs font-medium rounded-full">
              {content.items[3].stats}
            </span>
          </div>

          {/* Small Card - Quizzes */}
          <div
            data-reveal
            className="md:col-span-2 bg-white rounded-2xl p-8 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 opacity-0 translate-y-4 delay-700"
          >
            <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-4">
              <CheckSquare size={24} />
            </div>
            <h3
              className="text-xl font-bold text-text mb-1"
              style={{ fontFamily: 'Noto Sans JP, sans-serif' }}
            >
              {content.items[4].titleJa}
            </h3>
            <p className="text-sm text-text-muted mb-3 font-medium">
              {content.items[4].titleEn}
            </p>
            <p className="text-sm text-text-muted leading-relaxed mb-3">
              {content.items[4].description}
            </p>
            <span className="inline-block px-3 py-1.5 bg-surface text-primary text-xs font-medium rounded-full">
              {content.items[4].stats}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
