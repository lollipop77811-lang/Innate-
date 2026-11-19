import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { BRAND_INFO } from '../data/siteData';

const Heading = ({ children }) => (
  <h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-[#D4A373] pt-2">{children}</h4>
);

const PrivacyContent = () => (
  <>
    <p>
      At <strong className="text-white font-medium">The Innate Bliss</strong>, founded by Payal Gulati, we respect your
      privacy and keep everything you share with us confidential.
    </p>
    <Heading>1. Information we collect</Heading>
    <p>
      When you book a call or apply for a program, we collect the details you give us, such as your name, email address,
      phone/WhatsApp number and any notes you add.
    </p>
    <Heading>2. Confidentiality</Heading>
    <p>
      Sessions, financial discussions and personal notes are kept strictly confidential. Client stories and testimonials
      are only shared with the client&apos;s permission.
    </p>
    <Heading>3. Contact</Heading>
    <p>
      For privacy questions or data requests, email us at{' '}
      <a href={`mailto:${BRAND_INFO.contact.email}`} className="text-[#D4A373] underline underline-offset-2">
        {BRAND_INFO.contact.email}
      </a>
      .
    </p>
  </>
);

const TermsContent = () => (
  <>
    <p>
      By using this website or booking a session with <strong className="text-white font-medium">The Innate Bliss</strong>,
      you agree to these terms.
    </p>
    <Heading>1. Nature of services</Heading>
    <p>
      Our programs and consultations are mindset, NLP and holistic coaching. They are not medical, psychiatric or licensed
      financial advice.
    </p>
    <Heading>2. Individual results</Heading>
    <p>
      Client results, such as funding raised or growth in leads, are individual experiences. Results depend on each
      person&apos;s circumstances and effort and are not guaranteed.
    </p>
    <Heading>3. Intellectual property</Heading>
    <p>
      All frameworks, recordings, workbooks and other program content belong to The Innate Bliss and Payal Gulati.
    </p>
  </>
);

export const LegalModal = ({ isOpen, onClose, type = 'privacy' }) => {
  useEffect(() => {
    if (!isOpen) return undefined;
    const onKey = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;
  const isPrivacy = type === 'privacy';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        onClick={onClose}
        className="fixed inset-0 bg-[#140F0D]/80 backdrop-blur-md"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        role="dialog"
        aria-modal="true"
        aria-label={isPrivacy ? 'Privacy Policy' : 'Terms of Service'}
        className="relative z-10 w-full max-w-2xl max-h-[85vh] flex flex-col bg-[#191412] border border-white/10 rounded-3xl p-6 sm:p-8 text-[#D9CEC7] shadow-velvet"
      >
        <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/10">
          <h3 className="text-xl sm:text-2xl font-serif text-white">
            {isPrivacy ? 'Privacy Policy' : 'Terms of Service'}
          </h3>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="p-1.5 rounded-full text-[#AC9A90] hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="overflow-y-auto pr-1 text-sm font-light leading-relaxed space-y-3">
          {isPrivacy ? <PrivacyContent /> : <TermsContent />}
        </div>
        <div className="pt-4 mt-5 border-t border-white/10 flex justify-end">
          <button type="button" onClick={onClose} className="btn btn-gold !py-2.5 !px-6 text-xs">
            Close
          </button>
        </div>
      </motion.div>
    </div>
  );
};
