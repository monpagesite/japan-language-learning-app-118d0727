import React, { useEffect, useRef } from 'react';
import { MessageCircle } from 'lucide-react';
import { siteContent } from '../lib/siteContent';

export const HeroSection: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);
  const { hero } = siteContent;

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

    const elements = heroRef.current?.querySelectorAll('[data-reveal]');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleCTAClick = () => {
    const contactSection = document.querySelector('#contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${siteContent.contact.whatsappNumber.replace(/[^0-9]/g, '')}`, '_blank');
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex items-center pt-20 pb-16 md:pb-24 bg-background overflow-hidden"
    >
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] via-transparent to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 md:px-10 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="lg:col-span-7">
            {/* Badge */}
            <div data-reveal className="opacity-0 translate-y-4 transition-all duration-700 ease-out">
              <span className="inline-block px-4 py-2 bg-surface text-primary text-sm font-medium rounded-full">
                {hero.badge}
              </span>
            </div>

            {/* Headline */}
            <h1
              data-reveal
              className="mt-6 text-5xl md:text-6xl lg:text-7xl font-bold text-text leading-[1.1] tracking-tight opacity-0 translate-y-4 transition-all duration-700 ease-out delay-150"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              Master{' '}
              <span className="text-primary">essential Japanese</span>, one lesson at a time
            </h1>

            {/* Subtext */}
            <p
              data-reveal
              className="mt-6 text-lg md:text-xl text-text-muted leading-relaxed max-w-[540px] opacity-0 translate-y-4 transition-all duration-700 ease-out delay-300"
            >
              {hero.subtext}
            </p>

            {/* CTA Button */}
            <div
              data-reveal
              className="mt-8 opacity-0 translate-y-4 transition-all duration-700 ease-out delay-450"
            >
              <button
                onClick={handleCTAClick}
                className="px-8 py-4 bg-primary text-white font-medium rounded-full hover:bg-secondary hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200"
              >
                {hero.cta.primary}
              </button>
            </div>

            {/* WhatsApp Link */}
            <button
              data-reveal
              onClick={handleWhatsAppClick}
              className="mt-6 flex items-center space-x-2 text-sm text-text-muted hover:text-primary transition-colors duration-200 opacity-0 translate-y-4 delay-500"
            >
              <MessageCircle size={18} />
              <span>{hero.cta.secondary}</span>
            </button>
          </div>

          {/* Right Column - Visual Mockup */}
          <div
            data-reveal
            className="lg:col-span-5 opacity-0 translate-x-8 transition-all duration-700 ease-out delay-500"
          >
            <div className="relative">
              {/* Main Mockup Card */}
              <div className="relative bg-white rounded-2xl shadow-xl p-8">
                {/* Lesson Header */}
                <div className="mb-6">
                  <p
                    className="text-sm font-medium text-text-muted mb-1"
                    style={{ fontFamily: 'Noto Sans JP, sans-serif' }}
                  >
                    {hero.mockup.lessonTitle}
                  </p>
                </div>

                {/* Vocabulary Card */}
                <div className="bg-surface rounded-xl p-6 mb-6">
                  <div className="text-center">
                    <p
                      className="text-5xl font-bold text-text mb-2"
                      style={{ fontFamily: 'Noto Sans JP, sans-serif' }}
                    >
                      {hero.mockup.wordJapanese}
                    </p>
                    <p className="text-lg text-text-muted mb-1">{hero.mockup.wordRomaji}</p>
                    <p className="text-xl font-medium text-text">{hero.mockup.wordEnglish}</p>
                  </div>
                  {/* Icon placeholder */}
                  <div className="mt-4 flex justify-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-3xl">🍎</span>
                    </div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-text-muted">
                      {hero.mockup.progress}
                    </span>
                  </div>
                  <div className="w-full bg-surface rounded-full h-2.5">
                    <div
                      className="bg-primary h-2.5 rounded-full transition-all duration-300"
                      style={{ width: '60%' }}
                    />
                  </div>
                </div>
              </div>

              {/* Floating Streak Badge */}
              <div className="absolute -top-4 -right-4 bg-accent text-white px-4 py-2 rounded-full shadow-lg font-medium text-sm">
                {hero.mockup.badge}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
