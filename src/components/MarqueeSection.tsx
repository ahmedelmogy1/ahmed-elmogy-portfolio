import React, { useEffect, useRef, useState, useMemo } from 'react';
import { marqueeShowcase } from '../data/portfolioData';
import { ExternalLink } from 'lucide-react';

export const MarqueeSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollOffset, setScrollOffset] = useState(0);

  // Triple items for seamless infinite loop
  const row1 = useMemo(() => [...marqueeShowcase, ...marqueeShowcase, ...marqueeShowcase], []);
  const row2 = useMemo(() => {
    const reversed = [...marqueeShowcase].reverse();
    return [...reversed, ...reversed, ...reversed];
  }, []);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (sectionRef.current) {
            const rect = sectionRef.current.getBoundingClientRect();
            const sectionTop = window.scrollY + rect.top;
            const offset = (window.scrollY - sectionTop + window.innerHeight) * 0.28;
            setScrollOffset(offset);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden select-none"
    >
      <div className="flex flex-col gap-4">
        {/* Row 1: Moves RIGHT on scroll */}
        <div
          className="flex gap-4 whitespace-nowrap transition-transform ease-out duration-75"
          style={{
            transform: `translateX(${scrollOffset - 200}px)`,
            willChange: 'transform',
          }}
        >
          {row1.map((item, index) => (
            <a
              key={`row1-${index}`}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-[320px] h-[200px] sm:w-[380px] sm:h-[240px] md:w-[440px] md:h-[280px] flex-shrink-0 rounded-2xl overflow-hidden bg-[#18191C] border border-white/10 shadow-lg hover:border-white/30 transition-all duration-300 cursor-pointer block"
            >
              <img
                src={item.src}
                alt={item.title}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover object-top select-none pointer-events-none transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity p-4 flex flex-col justify-end">
                <span className="text-[11px] uppercase tracking-widest text-[#B600A8] font-semibold">
                  {item.tag}
                </span>
                <div className="flex items-center justify-between">
                  <h4 className="text-sm sm:text-base font-medium text-white">
                    {item.title}
                  </h4>
                  <div className="p-1.5 rounded-full bg-white/10 text-white group-hover:bg-[#B600A8] transition-colors">
                    <ExternalLink className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Row 2: Moves LEFT on scroll */}
        <div
          className="flex gap-4 whitespace-nowrap transition-transform ease-out duration-75"
          style={{
            transform: `translateX(${-(scrollOffset - 200)}px)`,
            willChange: 'transform',
          }}
        >
          {row2.map((item, index) => (
            <a
              key={`row2-${index}`}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-[320px] h-[200px] sm:w-[380px] sm:h-[240px] md:w-[440px] md:h-[280px] flex-shrink-0 rounded-2xl overflow-hidden bg-[#18191C] border border-white/10 shadow-lg hover:border-white/30 transition-all duration-300 cursor-pointer block"
            >
              <img
                src={item.src}
                alt={item.title}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover object-top select-none pointer-events-none transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity p-4 flex flex-col justify-end">
                <span className="text-[11px] uppercase tracking-widest text-[#7621B0] font-semibold">
                  {item.tag}
                </span>
                <div className="flex items-center justify-between">
                  <h4 className="text-sm sm:text-base font-medium text-white">
                    {item.title}
                  </h4>
                  <div className="p-1.5 rounded-full bg-white/10 text-white group-hover:bg-[#7621B0] transition-colors">
                    <ExternalLink className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
