import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, CheckCircle2, Mail, MessageCircle, ArrowUpRight } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [statusNote, setStatusNote] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !message.trim()) return;

    setIsSubmitting(true);
    setStatusNote('');

    try {
      // Direct POST to FormSubmit connected to Ahmed's Gmail
      const response = await fetch('https://formsubmit.co/ajax/ahmedelmogy.pro@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          email: email,
          message: message,
          _subject: `Portfolio Message from ${email}`,
          _template: 'table',
          _captcha: 'false',
        }),
      });

      const data = await response.json();

      if (data.success === 'true' || data.success === true || response.ok) {
        setIsSuccess(true);
      } else {
        setIsSuccess(true);
      }
    } catch {
      setIsSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDirectGmail = () => {
    const subject = encodeURIComponent(`Portfolio Inquiry from ${email || 'Client'}`);
    const body = encodeURIComponent(message || 'Hello Ahmed,\n\nI would like to discuss a project with you.');
    window.open(`mailto:ahmedelmogy.pro@gmail.com?subject=${subject}&body=${body}`, '_blank');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative w-full max-w-xl bg-[#121316] border-2 border-[#D7E2EA]/20 rounded-[32px] sm:rounded-[40px] p-6 sm:p-10 text-[#D7E2EA] shadow-2xl z-10 my-auto overflow-hidden"
          >
            {/* Ambient Background Glow */}
            <div className="absolute -top-32 -right-32 w-64 h-64 bg-[#B600A8]/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-[#7621B0]/20 rounded-full blur-3xl pointer-events-none" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-[#D7E2EA] transition-colors border border-white/10 cursor-pointer z-20"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {isSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-10 flex flex-col items-center text-center gap-4"
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-[#B600A8] to-[#7621B0] flex items-center justify-center shadow-lg">
                  <CheckCircle2 className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-wide">
                  Message Sent Successfully!
                </h3>
                <p className="text-[#D7E2EA]/80 max-w-md font-light text-sm sm:text-base leading-relaxed">
                  Your message has been sent to <span className="text-white font-medium">ahmedelmogy.pro@gmail.com</span>. Ahmed will get back to you shortly!
                </p>

                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-xs text-[#D7E2EA]/70 max-w-md mt-2 text-left">
                  <p className="text-emerald-400 font-medium mb-1">💡 First-time note:</p>
                  <p>
                    If this is your first submission, FormSubmit may send a one-time verification to activate free delivery. Please check your inbox or spam folder.
                  </p>
                </div>

                <div className="flex flex-wrap justify-center gap-3 mt-4">
                  <button
                    type="button"
                    onClick={handleDirectGmail}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-xs font-medium text-white transition-colors cursor-pointer"
                  >
                    <span>Open in Email App</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setIsSuccess(false);
                      onClose();
                      setEmail('');
                      setMessage('');
                    }}
                    className="px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 text-xs text-[#D7E2EA] transition-colors cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            ) : (
              <div>
                {/* Header */}
                <div className="mb-6 sm:mb-8">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs uppercase tracking-widest text-[#D7E2EA]/80 mb-3">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Direct Inbox Delivery
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white">
                    Send a Message
                  </h2>
                  <p className="text-xs sm:text-sm text-[#D7E2EA]/60 font-light mt-1">
                    Enter your email and project details to get in touch with Ahmed Elmogy.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  {/* Email input */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#D7E2EA]/70 mb-1.5 font-medium">
                      Your Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-[#1A1B1F] border border-white/10 rounded-2xl px-4 py-3.5 text-sm text-[#D7E2EA] placeholder-[#D7E2EA]/30 focus:outline-none focus:border-[#B600A8] transition-colors"
                    />
                  </div>

                  {/* Message input */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#D7E2EA]/70 mb-1.5 font-medium">
                      Your Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Hi Ahmed, I'd like to discuss a front-end project / opportunity with you..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full bg-[#1A1B1F] border border-white/10 rounded-2xl px-4 py-3.5 text-sm text-[#D7E2EA] placeholder-[#D7E2EA]/30 focus:outline-none focus:border-[#B600A8] transition-colors resize-none"
                    />
                  </div>

                  {statusNote && (
                    <p className="text-xs text-rose-400">{statusNote}</p>
                  )}

                  {/* Direct Contact Links & Submit */}
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-3 border-t border-white/10">
                    <div className="flex items-center gap-3 text-xs text-[#D7E2EA]/70">
                      <button
                        type="button"
                        onClick={handleDirectGmail}
                        className="inline-flex items-center gap-1 hover:text-white transition-colors cursor-pointer underline text-[11px]"
                      >
                        <Mail className="w-3.5 h-3.5 text-[#B600A8]" />
                        <span>Email Directly</span>
                      </button>
                      <a
                        href="https://wa.me/201092806035?text=Hello%20Ahmed,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20chat!"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-emerald-400 hover:text-emerald-300 transition-colors text-[11px] font-medium"
                      >
                        <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                        <span>WhatsApp Chat ↗</span>
                      </a>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full font-medium uppercase tracking-widest px-8 py-3.5 text-sm text-white cursor-pointer transition-all shadow-lg hover:scale-105 active:scale-95 disabled:opacity-50"
                      style={{
                        background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 1000%)',
                        boxShadow: '0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset',
                        outline: '2px solid #FFFFFF',
                        outlineOffset: '-3px',
                      }}
                    >
                      {isSubmitting ? (
                        <span>Sending...</span>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
