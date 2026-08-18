import React from 'react';
import { FadeIn } from './FadeIn';
import { ArrowUpRight } from 'lucide-react';
import { portfolioServices } from '../data/portfolioData';

interface ServicesSectionProps {
  onSelectService?: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  return (
    <section
      id="skills"
      className="relative bg-[#FFFFFF] text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 z-0 scroll-mt-10"
    >
      <div className="max-w-5xl mx-auto">
        {/* Heading: Skills */}
        <FadeIn delay={0} y={40} className="text-center mb-16 sm:mb-20 md:mb-28">
          <h2
            className="text-[#0C0C0C] font-black uppercase leading-none tracking-tight"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Skills
          </h2>
        </FadeIn>

        {/* Skills List */}
        <div className="divide-y divide-[rgba(12,12,12,0.15)] border-t border-b border-[rgba(12,12,12,0.15)]">
          {portfolioServices.map((service, index) => (
            <FadeIn
              key={service.number}
              delay={index * 0.1}
              y={30}
              className="py-8 sm:py-10 md:py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-12 group transition-all duration-300 hover:bg-black/[0.03] px-4 -mx-4 rounded-2xl cursor-pointer"
            >
              <div
                className="w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-12"
                onClick={() => onSelectService?.(service.name)}
              >
                {/* Left Number */}
                <div
                  className="font-black text-[#0C0C0C] leading-none shrink-0 w-24 sm:w-32 md:w-44 select-none tracking-tighter transition-transform duration-300 group-hover:translate-x-2"
                  style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
                >
                  {service.number}
                </div>

                {/* Right content: Name and Description */}
                <div className="flex-1 flex flex-col gap-2 md:gap-3">
                  <div className="flex items-center justify-between">
                    <h3
                      className="font-medium uppercase text-[#0C0C0C] leading-tight group-hover:text-black transition-colors"
                      style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                    >
                      {service.name}
                    </h3>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity p-2 rounded-full bg-black/5">
                      <ArrowUpRight className="w-5 h-5 text-[#0C0C0C]" />
                    </div>
                  </div>
                  <p
                    className="font-light leading-relaxed text-[#0C0C0C] opacity-75 max-w-2xl text-sm sm:text-base md:text-lg"
                  >
                    {service.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
