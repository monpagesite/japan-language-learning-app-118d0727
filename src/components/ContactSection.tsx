import React, { useEffect, useRef } from 'react';
import { MessageCircle } from 'lucide-react';
import { siteContent } from '../lib/siteContent';

export const ContactSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { contact } = siteContent;

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

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${contact.whatsappNumber.replace(/[^0-9]/g, '')}`, '_blank');
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-16 md:py-24 lg:py-32 bg-surface"
    >
      <div className="max-w-4xl mx-auto px-6 md:px-10">
        {/* Contact Card */}
        <div className="bg-gradient-to-br from-primary to-secondary rounded-3xl p-10 md:p-16 text-center shadow-xl">
          <p
            data-reveal
            className="text-sm font-medium tracking-wider uppercase text-white/80 mb-4 opacity-0 translate-y-4 transition-all duration-700 ease-out"
            style={{ fontFamily: 'Noto Sans JP, sans-serif' }}
          >
            {contact.overline}
          </p>
          <h2
            data-reveal
            className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-6 opacity-0 translate-y-4 transition-all duration-700 ease-out delay-100"
            style={{ fontFamily: 'Cormorant Garamond, serif', letterSpacing: '-0.02em' }}
          >
            {contact.heading}
          </h2>
          <p
            data-reveal
            className="text-lg text-white/90 leading-relaxed max-w-2xl mx-auto mb-10 opacity-0 translate-y-4 transition-all duration-700 ease-out delay-200"
          >
            {contact.subtext}
          </p>

          {/* CTA Buttons */}
          <div
            data-reveal
            className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 translate-y-4 transition-all duration-700 ease-out delay-300"
          >
            <button
              onClick={handleWhatsAppClick}
              className="px-8 py-4 bg-white text-primary font-medium rounded-full hover:bg-white/90 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200"
            >
              {contact.cta.primary}
            </button>
            <button
              onClick={handleWhatsAppClick}
              className="px-8 py-4 bg-white/10 backdrop-blur text-white font-medium rounded-full hover:bg-white/20 transition-all duration-200 flex items-center space-x-2"
            >
              <MessageCircle size={20} />
              <span>{contact.cta.whatsapp}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
