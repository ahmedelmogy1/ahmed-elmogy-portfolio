import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { FadeIn } from './FadeIn';
import { LiveProjectButton } from './LiveProjectButton';
import { ProjectItem } from '../types/portfolio';
import { portfolioProjects } from '../data/portfolioData';
import { Info } from 'lucide-react';

interface CardProps {
  project: ProjectItem;
  index: number;
  totalCards: number;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
  onOpenModal: (project: ProjectItem) => void;
}

const Card: React.FC<CardProps> = ({
  project,
  index,
  progress,
  range,
  targetScale,
  onOpenModal,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={containerRef}
      className="sticky top-20 sm:top-24 md:top-28 flex items-center justify-center mb-16 sm:mb-20 md:mb-24"
      style={{
        top: `calc(5rem + ${index * 28}px)`,
      }}
    >
      <motion.div
        style={{
          scale,
        }}
        className="w-full max-w-6xl rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 flex flex-col gap-6 sm:gap-8 shadow-2xl origin-top"
      >
        {/* Top row */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#D7E2EA]/20 pb-4 sm:pb-6">
          <div className="flex items-baseline gap-3 sm:gap-6 flex-wrap">
            <span
              className="font-black text-[#D7E2EA] leading-none tracking-tighter select-none"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
            >
              {project.number}
            </span>
            <div className="flex flex-col">
              <span className="text-xs sm:text-sm uppercase tracking-widest text-[#D7E2EA]/60 font-light">
                {project.category}
              </span>
              <h3
                className="font-medium text-[#D7E2EA] uppercase tracking-wide"
                style={{ fontSize: 'clamp(1.1rem, 2.5vw, 2rem)' }}
              >
                {project.name}
              </h3>
            </div>
          </div>

          {/* Action buttons: Direct Live Project URL & Details Modal */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => onOpenModal(project)}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-white/5 hover:bg-white/10 text-xs uppercase tracking-widest text-[#D7E2EA] border border-white/10 transition-colors cursor-pointer"
            >
              <Info className="w-3.5 h-3.5" />
              <span>Details</span>
            </button>
            <LiveProjectButton href={project.liveUrl} />
          </div>
        </div>

        {/* Bottom row: Two-column image grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 items-stretch">
          {/* Left Column (40% width / 5 cols) */}
          <div className="md:col-span-5 flex flex-col gap-4 sm:gap-6">
            <div
              onClick={() => onOpenModal(project)}
              className="w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden bg-[#18191C] border border-white/5 cursor-pointer group relative"
              style={{ height: 'clamp(130px, 16vw, 230px)' }}
            >
              <img
                src={project.col1Img1}
                alt={`${project.name} preview 1`}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover object-top select-none transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-xs uppercase tracking-widest text-white font-medium backdrop-blur-[2px]">
                View Project Details
              </div>
            </div>
            <div
              onClick={() => onOpenModal(project)}
              className="w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden bg-[#18191C] border border-white/5 cursor-pointer group relative"
              style={{ height: 'clamp(160px, 22vw, 340px)' }}
            >
              <img
                src={project.col1Img2}
                alt={`${project.name} preview 2`}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover object-center select-none transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-xs uppercase tracking-widest text-white font-medium backdrop-blur-[2px]">
                View Project Details
              </div>
            </div>
          </div>

          {/* Right Column (60% width / 7 cols) */}
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="md:col-span-7 h-[300px] sm:h-[400px] md:h-auto min-h-[300px] rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden bg-[#18191C] border border-white/5 cursor-pointer group relative block"
          >
            <img
              src={project.col2Img}
              alt={`${project.name} main view`}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover object-top select-none transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-xs uppercase tracking-widest text-white font-medium backdrop-blur-[2px]">
              Open Live Website ↗
            </div>
          </a>
        </div>
      </motion.div>
    </div>
  );
};

interface ProjectsSectionProps {
  onOpenProjectModal?: (project: ProjectItem) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onOpenProjectModal }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <section
      id="projects"
      ref={containerRef}
      className="relative bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-10 px-4 sm:px-6 md:px-10 pt-20 sm:pt-28 md:pt-36 pb-32"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <FadeIn delay={0} y={40} className="text-center mb-16 sm:mb-24 md:mb-32">
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Projects
          </h2>
        </FadeIn>

        {/* Sticky Stacking Project Cards */}
        <div className="relative">
          {portfolioProjects.map((project, index) => {
            const totalCards = portfolioProjects.length;
            const targetScale = 1 - (totalCards - 1 - index) * 0.03;
            const startRange = index * (1 / totalCards);
            const endRange = 1;

            return (
              <Card
                key={project.id}
                project={project}
                index={index}
                totalCards={totalCards}
                progress={scrollYProgress}
                range={[startRange, endRange]}
                targetScale={targetScale}
                onOpenModal={(proj) => onOpenProjectModal?.(proj)}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};
