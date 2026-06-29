import React from 'react';
import { siteContent } from '../lib/siteContent';

export const Footer: React.FC = () => {
  const { footer } = siteContent;

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-background border-t border-border py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo and Tagline */}
          <div className="text-center md:text-left">
            <div className="text-2xl font-bold text-primary mb-2">日本語</div>
            <p className="text-sm text-text-muted">{footer.tagline}</p>
          </div>

          {/* Navigation Links */}
          <nav className="flex items-center gap-6 md:gap-8">
            {footer.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm text-text-muted hover:text-primary transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-text-muted">{footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
};
