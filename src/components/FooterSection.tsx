import React from 'react';
import { ContactButton } from './ContactButton';
import { ArrowUp, Github, Linkedin, Mail, MapPin, MessageCircle } from 'lucide-react';

interface FooterSectionProps {
  onOpenContact: () => void;
}

export const FooterSection: React.FC<FooterSectionProps> = ({ onOpenContact }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="relative bg-[#080808] border-t border-white/10 px-6 sm:px-10 py-16 sm:py-24 text-[#D7E2EA] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-48 bg-gradient-to-b from-[#B600A8]/10 via-[#7621B0]/5 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto flex flex-col items-center text-center gap-10 sm:gap-14 relative z-10">
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs uppercase tracking-widest text-[#D7E2EA]">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span>Available for Full-Time Roles & Freelance Projects (2026)</span>
        </div>

        {/* Big Call to Action */}
        <div className="flex flex-col gap-4 max-w-2xl">
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight"
            style={{ fontSize: 'clamp(2.5rem, 8vw, 5.5rem)' }}
          >
            Let&apos;s Build Together
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#D7E2EA]/70 font-light leading-relaxed">
            Looking for a passionate Front-End Developer to elevate your web application? Let&apos;s create high-impact, clean, and responsive digital products.
          </p>
        </div>

        {/* Contact info badges with direct WhatsApp & Email */}
        <div className="flex flex-wrap justify-center items-center gap-4 text-xs sm:text-sm text-[#D7E2EA]/80">
          <a
            href="mailto:ahmedelmogy.pro@gmail.com"
            className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:text-white transition-all shadow-sm"
          >
            <Mail className="w-4 h-4 text-[#B600A8]" />
            <span>ahmedelmogy.pro@gmail.com</span>
          </a>
          <a
            href="https://wa.me/201092806035?text=Hello%20Ahmed,%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect!"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20 hover:text-emerald-300 transition-all shadow-sm cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span>WhatsApp: +20 1092806035</span>
          </a>
          <div className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/5 border border-white/10 text-[#D7E2EA]/60">
            <MapPin className="w-4 h-4 text-white/50" />
            <span>Egypt (Remote / On-site)</span>
          </div>
        </div>

        {/* Contact Button */}
        <ContactButton onClick={onOpenContact} href="#contact" />

        {/* Divider */}
        <div className="w-full border-t border-white/10 pt-10 mt-6 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-[#D7E2EA]/60">
          <div className="flex items-center gap-6 flex-wrap justify-center">
            <a
              href="https://linkedin.com/in/ahmed-elmogy-591535324"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/ahmedelmogy1"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <a
              href="https://wa.me/201092806035"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
            <a
              href="mailto:ahmedelmogy.pro@gmail.com"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>Email</span>
            </a>
          </div>

          <div className="flex items-center gap-4">
            <span>© 2026 Ahmed Elmogy. All rights reserved.</span>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-full bg-white/5 hover:bg-white/15 text-white transition-all cursor-pointer border border-white/10"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
