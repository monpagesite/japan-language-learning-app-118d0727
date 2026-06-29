import React from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { MethodSection } from './components/MethodSection';
import { ContentSection } from './components/ContentSection';
import { ProgressSection } from './components/ProgressSection';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <MethodSection />
        <ContentSection />
        <ProgressSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
