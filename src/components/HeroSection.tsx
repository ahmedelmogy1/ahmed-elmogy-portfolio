import React from 'react';
import { motion } from 'framer-motion';
import { ContactButton } from './ContactButton';
import { Magnet } from './Magnet';

interface HeroSectionProps {
  onOpenContact?: () => void;
  onOpenPrice?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenContact,
  onOpenPrice,
}) => {
  const handleNavClick = (href: string, e: React.MouseEvent) => {
    if (href === '#contact' && onOpenContact) {
      e.preventDefault();
      onOpenContact();
    } else if (href === '#price' && onOpenPrice) {
      e.preventDefault();
      onOpenPrice();
    }
  };

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <section className="relative h-screen flex flex-col justify-between overflow-x-clip bg-[#0C0C0C] select-none">
      {/* Navbar */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0, ease: [0.25, 0.1, 0.25, 1] }}
        className="w-full px-6 md:px-10 pt-6 md:pt-8 z-30 flex items-center justify-between"
      >
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={(e) => handleNavClick(link.href, e)}
            className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.3rem] hover:opacity-70 transition-opacity duration-200 cursor-pointer"
          >
            {link.name}
          </a>
        ))}
      </motion.nav>

      {/* Hero Heading */}
      <div className="w-full overflow-hidden text-center z-0 pointer-events-none mt-4 sm:mt-2 md:-mt-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
          className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[13vw] sm:text-[14.5vw] md:text-[15.5vw] lg:text-[17vw]"
        >
          Hi, i&apos;m ahmed
        </motion.h1>
      </div>

      {/* Hero Portrait with Magnet effect (Full-body cutout in suit) */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className="absolute left-1/2 -translate-x-1/2 z-10 bottom-0 pointer-events-auto flex justify-center items-end"
      >
        <Magnet
          padding={160}
          strength={3}
          activeTransition="transform 0.3s ease-out"
          inactiveTransition="transform 0.6s ease-in-out"
        >
          <div className="relative group flex items-end justify-center">
            {/* Ambient Background Aura */}
            <div className="absolute bottom-16 left-1/2 -translate-x-1/2 w-3/4 h-3/4 bg-gradient-to-t from-[#B600A8]/35 via-[#7621B0]/20 to-transparent rounded-full blur-3xl opacity-80 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <img
              src="/ahmed_suit.png"
              alt="Ahmed Elmogy - Front-End Developer"
              className="w-[250px] sm:w-[330px] md:w-[400px] lg:w-[460px] xl:w-[500px] max-h-[76vh] object-contain drop-shadow-[0_25px_60px_rgba(0,0,0,0.85)] select-none pointer-events-none transition-transform duration-500 group-hover:scale-[1.02]"
              loading="eager"
            />
          </div>
        </Magnet>
      </motion.div>

      {/* Bottom bar */}
      <div className="w-full px-6 md:px-10 pb-7 sm:pb-8 md:pb-10 flex justify-between items-end z-20">
        {/* Left text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[170px] sm:max-w-[240px] md:max-w-[280px]"
          style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.4rem)' }}
        >
          a front-end developer driven by crafting responsive & high-performance web experiences
        </motion.p>

        {/* Right Contact Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <ContactButton onClick={onOpenContact} href="#contact" />
        </motion.div>
      </div>
    </section>
  );
};
