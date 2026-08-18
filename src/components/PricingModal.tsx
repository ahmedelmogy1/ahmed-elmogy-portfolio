import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, Code2, Clock, ShieldCheck } from 'lucide-react';
import { portfolioPackages } from '../data/portfolioData';

interface PricingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectPackage: (pkgName: string, estimatedPrice: number) => void;
}

export const PricingModal: React.FC<PricingModalProps> = ({
  isOpen,
  onClose,
  onSelectPackage,
}) => {
  const [selectedTier, setSelectedTier] = useState<string>('spa');

  if (!isOpen) return null;

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

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative w-full max-w-5xl bg-[#121316] border-2 border-[#D7E2EA]/20 rounded-[32px] sm:rounded-[48px] p-6 sm:p-10 text-[#D7E2EA] shadow-2xl z-10 my-auto max-h-[92vh] overflow-y-auto"
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
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs uppercase tracking-widest text-[#D7E2EA]/80 mb-3">
              <Code2 className="w-3.5 h-3.5 text-[#B600A8]" />
              Front-End Services & Engagement
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white">
              Work & Collaboration
            </h2>
            <p className="text-xs sm:text-sm text-[#D7E2EA]/60 font-light mt-2">
              Flexible collaboration models tailored for product teams, startups, and agencies.
            </p>
          </div>

          {/* 3 Package Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
            {portfolioPackages.map((tier) => {
              const isSelected = selectedTier === tier.id;
              return (
                <div
                  key={tier.id}
                  onClick={() => setSelectedTier(tier.id)}
                  className={`relative rounded-[28px] sm:rounded-[32px] p-6 sm:p-7 flex flex-col justify-between border-2 transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? 'bg-white/[0.08] border-[#D7E2EA] shadow-xl scale-[1.02]'
                      : 'bg-white/[0.03] border-white/10 hover:border-white/20'
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-to-r from-[#B600A8] to-[#7621B0] text-[10px] uppercase tracking-widest font-semibold text-white shadow-md">
                      Featured
                    </div>
                  )}

                  <div>
                    <h3 className="text-xl font-bold uppercase text-white mb-1">
                      {tier.name}
                    </h3>
                    <p className="text-xs text-[#D7E2EA]/60 mb-4 h-8">
                      {tier.tagline}
                    </p>

                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-xs text-[#D7E2EA]/80 mb-5">
                      <Clock className="w-3.5 h-3.5 text-[#B600A8]" />
                      <span>{tier.timeline}</span>
                    </div>

                    <div className="border-t border-white/10 pt-4 flex flex-col gap-2.5">
                      {tier.features.map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-[#D7E2EA]/80">
                          <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectPackage(tier.name, 0);
                    }}
                    className={`w-full mt-6 py-3 rounded-full text-xs font-medium uppercase tracking-widest transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-gradient-to-r from-[#B600A8] to-[#7621B0] text-white shadow-lg'
                        : 'bg-white/10 text-white hover:bg-white/20'
                    }`}
                  >
                    Inquire About This
                  </button>
                </div>
              );
            })}
          </div>

          {/* Guarantee Footer */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 text-xs text-[#D7E2EA]/70">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Clean Code Standard • Modular Structure • GitHub Commits & Documentation</span>
            </div>
            <button
              onClick={() => onSelectPackage('Custom Project Inquiry', 0)}
              className="text-[#D7E2EA] hover:text-white font-medium underline uppercase tracking-wider text-xs cursor-pointer"
            >
              Discuss Custom Scope
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
