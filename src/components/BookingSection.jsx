import React from 'react';
import { TitleReveal, LineReveal } from './TextReveal';
import { ParallaxImage } from './motion/ParallaxImage';
import ctaPathImg from '../assets/images/cta-path.jpg';

export const BookingSection = ({ onOpenBookingModal }) => {
  return (
    <section id="contact" className="py-14 sm:py-16 md:py-20 bg-[#F9F6F3] text-[#2D201A] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 relative z-10">
        <div className="max-w-5xl mx-auto rounded-3xl sm:rounded-[2.5rem] bg-[#191412] border border-[#3A2E28] p-7 sm:p-12 md:p-16 text-center relative overflow-hidden shadow-velvet">
          <div aria-hidden="true" className="absolute inset-0">
            <ParallaxImage src={ctaPathImg} alt="" className="block w-full h-full object-cover opacity-90" strength={8} />
            <div className="absolute inset-0 bg-gradient-to-b from-[#191412]/45 via-[#191412]/35 to-[#191412]/80" />
          </div>
          <div className="relative z-10 flex flex-col items-center">
            <div data-reveal className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/10 text-[#D4A373] text-[10px] sm:text-xs uppercase tracking-[0.16em] mb-4 sm:mb-6">
              <span>Stop Solving. Start Evolving.</span>
            </div>
            <TitleReveal
              as="h2"
              text="Your Next Level Begins Within You."
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-white font-light leading-[1.14] mb-5 tracking-tight"
              highlight="Within You."
              highlightClass="italic font-display text-[#D4A373] font-normal"
            />
            <LineReveal delay={0.15} className="mb-8">
              <div className="space-y-2.5 text-sm sm:text-base text-[#D9CEC7] font-light leading-relaxed max-w-2xl mx-auto">
                <p>
                  You&apos;ve already invested time, effort and energy into building the business you have today.
                </p>
                <p>
                  Perhaps it&apos;s time to work on the patterns that may be holding you back from your next level.
                </p>
                <p className="text-white font-medium pt-1">
                  Stop solving the same problems. Start evolving into the person who can create different results.
                </p>
              </div>
            </LineReveal>
            <div data-reveal data-reveal-delay="0.08" className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <button
                type="button"
                onClick={onOpenBookingModal}
                className="btn btn-gold py-3.5 px-7 sm:px-9 text-xs sm:text-sm w-full sm:w-auto"
              >
                <span>Apply for a Wealth Breakthrough Call</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
