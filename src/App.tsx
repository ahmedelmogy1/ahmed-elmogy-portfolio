import React, { useState } from 'react';
import { HeroSection } from './components/HeroSection';
import { MarqueeSection } from './components/MarqueeSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { ProjectsSection } from './components/ProjectsSection';
import { FooterSection } from './components/FooterSection';
import { ContactModal } from './components/ContactModal';
import { ProjectModal } from './components/ProjectModal';
import { PricingModal } from './components/PricingModal';
import { ProjectItem } from './types/portfolio';

export const App: React.FC = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isPricingOpen, setIsPricingOpen] = useState(false);
  const [selectedServiceForContact, setSelectedServiceForContact] = useState('Angular SPA Development');
  const [activeProjectForModal, setActiveProjectForModal] = useState<ProjectItem | null>(null);

  const handleOpenContact = (initialService = 'Angular SPA Development') => {
    setSelectedServiceForContact(initialService);
    setIsContactOpen(true);
  };

  const handleSelectPackageFromPricing = (pkgName: string) => {
    setIsPricingOpen(false);
    setSelectedServiceForContact(pkgName);
    setIsContactOpen(true);
  };

  return (
    <div
      className="bg-[#0C0C0C] min-h-screen text-[#D7E2EA] font-sans selection:bg-[#B600A8]/30 selection:text-white"
      style={{ overflowX: 'clip' }}
    >
      {/* 1. Hero Section */}
      <HeroSection
        onOpenContact={() => handleOpenContact('Angular SPA Development')}
        onOpenPrice={() => setIsPricingOpen(true)}
      />

      {/* 2. Marquee Section */}
      <MarqueeSection />

      {/* 3. About Section */}
      <AboutSection onOpenContact={() => handleOpenContact('General Opportunity')} />

      {/* 4. Services Section */}
      <ServicesSection
        onSelectService={(serviceName) => handleOpenContact(serviceName)}
      />

      {/* 5. Projects Section */}
      <ProjectsSection
        onOpenProjectModal={(project) => setActiveProjectForModal(project)}
      />

      {/* 6. Footer Section */}
      <FooterSection onOpenContact={() => handleOpenContact('General Inquiry')} />

      {/* Interactive Modals */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        initialService={selectedServiceForContact}
      />

      <PricingModal
        isOpen={isPricingOpen}
        onClose={() => setIsPricingOpen(false)}
        onSelectPackage={handleSelectPackageFromPricing}
      />

      <ProjectModal
        project={activeProjectForModal}
        onClose={() => setActiveProjectForModal(null)}
      />
    </div>
  );
};

export default App;
