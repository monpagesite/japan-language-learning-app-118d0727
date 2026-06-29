import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { siteContent } from '../lib/siteContent';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const sectionRef = useRef<HTMLElement>(null);
  const { faq } = siteContent;

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

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      ref={sectionRef}
      className="py-16 md:py-24 lg:py-32 bg-background"
    >
      <div className="max-w-4xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <p
            data-reveal
            className="text-sm font-medium tracking-wider uppercase text-primary mb-4 opacity-0 translate-y-4 transition-all duration-700 ease-out"
            style={{ fontFamily: 'Noto Sans JP, sans-serif' }}
          >
            {faq.overline}
          </p>
          <h2
            data-reveal
            className="text-4xl md:text-5xl font-bold text-text tracking-tight opacity-0 translate-y-4 transition-all duration-700 ease-out delay-100"
            style={{ fontFamily: 'Cormorant Garamond, serif', letterSpacing: '-0.02em' }}
          >
            {faq.heading}
          </h2>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faq.items.map((item, index) => (
            <div
              key={index}
              data-reveal
              className="opacity-0 translate-y-4 transition-all duration-700 ease-out"
              style={{ transitionDelay: `${200 + index * 50}ms` }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full bg-white rounded-2xl p-6 md:p-8 text-left hover:shadow-md transition-shadow duration-200"
              >
                <div className="flex items-start justify-between">
                  <h3 className="text-lg md:text-xl font-bold text-text pr-8 leading-snug">
                    {item.question}
                  </h3>
                  <ChevronDown
                    size={24}
                    className={`flex-shrink-0 text-primary transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </div>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96 mt-4' : 'max-h-0'
                  }`}
                >
                  <p className="text-base text-text-muted leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
