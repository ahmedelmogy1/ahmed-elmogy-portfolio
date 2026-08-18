import React from 'react';
import { FadeIn } from './FadeIn';
import { AnimatedText } from './AnimatedText';
import { ContactButton } from './ContactButton';
import { Award, GraduationCap, Code2, Globe } from 'lucide-react';

interface AboutSectionProps {
  onOpenContact?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenContact }) => {
  const bioText =
    "Graduated Front-End Developer with a degree in Information Systems (2026) and a strong foundation in HTML, CSS, JavaScript, TypeScript, and modern frameworks like Angular, Tailwind, and Bootstrap. Passionate about building responsive, high-performance web applications and translating complex designs into clean, maintainable code. Seeking full-time or freelance opportunities!";

  const certifications = [
    { title: 'Information Systems B.Sc.', org: 'Graduation Class of 2026', icon: GraduationCap },
    { title: 'Front-End Web Development', org: 'Route Academy Diploma', icon: Award },
    { title: 'Programming Fundamentals', org: 'Route Academy Diploma', icon: Code2 },
    { title: 'Front-End Web Development', org: 'Information Technology Institute (ITI)', icon: Globe },
  ];

  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col items-center justify-center px-5 sm:px-8 md:px-12 py-24 overflow-hidden bg-[#0C0C0C]"
    >
      {/* Decorative 3D elements in corners */}
      {/* Top-Left: Moon */}
      <FadeIn
        delay={0.1}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] z-0 pointer-events-none"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
          alt="3D Moon Icon"
          className="w-[120px] sm:w-[160px] md:w-[210px] object-contain drop-shadow-xl select-none"
          loading="lazy"
        />
      </FadeIn>

      {/* Top-Right: Lego */}
      <FadeIn
        delay={0.15}
        x={80}
        y={0}
        duration={0.9}
        className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] z-0 pointer-events-none"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
          alt="3D Lego Icon"
          className="w-[120px] sm:w-[160px] md:w-[210px] object-contain drop-shadow-xl select-none"
          loading="lazy"
        />
      </FadeIn>

      {/* Bottom-Left: 3D Object */}
      <FadeIn
        delay={0.25}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] z-0 pointer-events-none"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
          alt="3D Abstract Object"
          className="w-[100px] sm:w-[140px] md:w-[180px] object-contain drop-shadow-xl select-none"
          loading="lazy"
        />
      </FadeIn>

      {/* Bottom-Right: 3D Group */}
      <FadeIn
        delay={0.3}
        x={80}
        y={0}
        duration={0.9}
        className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] z-0 pointer-events-none"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
          alt="3D Cluster Group"
          className="w-[130px] sm:w-[170px] md:w-[220px] object-contain drop-shadow-xl select-none"
          loading="lazy"
        />
      </FadeIn>

      {/* Central Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-5xl mx-auto">
        {/* Heading */}
        <FadeIn delay={0} y={40} className="w-full">
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            About me
          </h2>
        </FadeIn>

        {/* Gap between heading and text */}
        <div className="h-10 sm:h-14 md:h-16" />

        {/* Large Central Animated paragraph */}
        <div className="max-w-4xl px-4 sm:px-6">
          <AnimatedText
            text={bioText}
            className="text-[#D7E2EA] font-medium text-center leading-relaxed sm:leading-snug"
            style={{ fontSize: 'clamp(1.35rem, 3.2vw, 2.5rem)', lineHeight: '1.4' }}
          />
        </div>

        {/* Education & Certifications Grid */}
        <FadeIn delay={0.15} y={30} className="w-full mt-12 sm:mt-16 max-w-4xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-left">
            {certifications.map((cert, index) => {
              const Icon = cert.icon;
              return (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 sm:p-5 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-white/20 transition-all backdrop-blur-sm shadow-md"
                >
                  <div className="p-3 rounded-xl bg-gradient-to-tr from-[#B600A8]/20 to-[#7621B0]/20 border border-white/10 text-white shrink-0">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-medium text-white uppercase tracking-wider">
                      {cert.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#D7E2EA]/60 font-light mt-0.5">
                      {cert.org}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </FadeIn>

        {/* Gap between text and button */}
        <div className="h-12 sm:h-16 md:h-20" />

        {/* Contact Button */}
        <FadeIn delay={0.2} y={30}>
          <ContactButton onClick={onOpenContact} href="#contact" />
        </FadeIn>
      </div>
    </section>
  );
};
