import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Layers, Cpu, Github } from 'lucide-react';
import { ProjectItem } from '../types/portfolio';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [activeImage, setActiveImage] = useState<number>(0);

  if (!project) return null;

  const images = [project.col2Img, project.col1Img1, project.col1Img2];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 30 }}
          transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative w-full max-w-5xl bg-[#101114] border-2 border-[#D7E2EA]/20 rounded-[32px] sm:rounded-[48px] p-6 sm:p-10 text-[#D7E2EA] shadow-2xl z-10 my-auto max-h-[90vh] overflow-y-auto"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2.5 rounded-full bg-white/5 hover:bg-white/15 text-[#D7E2EA] transition-colors border border-white/10 cursor-pointer z-20"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="flex flex-wrap items-baseline gap-3 sm:gap-6 border-b border-white/10 pb-6 mb-6">
            <span
              className="font-black text-[#D7E2EA] leading-none tracking-tighter select-none"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
            >
              {project.number}
            </span>
            <div className="flex flex-col">
              <span className="text-xs uppercase tracking-widest text-[#D7E2EA]/60 font-light">
                {project.category} Project Details
              </span>
              <h2
                className="font-medium text-white uppercase tracking-wide"
                style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)' }}
              >
                {project.name}
              </h2>
            </div>
          </div>

          {/* Main Visual Carousel / Gallery */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start mb-8">
            {/* Main Featured Image */}
            <div className="lg:col-span-8 flex flex-col gap-4">
              <div className="w-full h-[280px] sm:h-[400px] md:h-[480px] rounded-[28px] sm:rounded-[36px] overflow-hidden bg-[#18191C] border border-white/10 relative">
                <img
                  src={images[activeImage]}
                  alt={`${project.name} showcase`}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-contain bg-black/50 transition-all duration-500"
                />
              </div>

              {/* Thumbnails */}
              <div className="flex gap-3 overflow-x-auto pb-2">
                {images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(i)}
                    className={`h-20 w-32 rounded-2xl overflow-hidden border-2 transition-all cursor-pointer flex-shrink-0 ${
                      activeImage === i
                        ? 'border-white scale-105 shadow-md'
                        : 'border-white/20 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="thumb" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Project Specs & Metadata */}
            <div className="lg:col-span-4 flex flex-col gap-5 bg-white/5 border border-white/10 rounded-[28px] p-6">
              <div>
                <h4 className="text-xs uppercase tracking-widest text-[#D7E2EA]/60 font-medium mb-1">
                  Project Overview
                </h4>
                <p className="text-sm text-white font-normal leading-relaxed">
                  {project.overview}
                </p>
              </div>

              <div>
                <h4 className="text-xs uppercase tracking-widest text-[#D7E2EA]/60 font-medium mb-2 flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5 text-[#B600A8]" />
                  Tech Stack & Frameworks
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-2.5 py-1 rounded-lg bg-white/10 text-xs font-light text-white/90"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs uppercase tracking-widest text-[#D7E2EA]/60 font-medium mb-2 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-[#7621B0]" />
                  Key Features & Deliverables
                </h4>
                <ul className="text-xs text-[#D7E2EA]/80 flex flex-col gap-1.5">
                  {project.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#B600A8]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2 flex flex-col gap-2">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest py-3 text-xs hover:bg-[#D7E2EA]/15 transition-all cursor-pointer shadow-md"
                >
                  <span>Launch Live Project</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-white/10 text-white font-medium uppercase tracking-widest py-2.5 text-xs hover:bg-white/20 transition-all cursor-pointer"
                >
                  <span>View On GitHub</span>
                  <Github className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
