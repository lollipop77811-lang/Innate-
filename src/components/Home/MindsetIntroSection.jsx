import React from 'react';
import { TitleReveal } from '../TextReveal';
import { ImageFrame, GlassCard } from '../ui/Visual';
import platinumLifestyleImg from '../../assets/images/platinum-lifestyle.jpg';

export const MindsetIntroSection = ({ onOpenBooking }) => {
  return (
    <section
      id="mindset-shift"
      className="py-12 sm:py-16 md:py-20 bg-[#F2ECE5] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-14 items-center">
          <div className="md:col-span-6">
            <span data-reveal className="inline-block text-[11px] uppercase tracking-[0.2em] text-[#866452] font-semibold mb-3">
              THE INNATE BLISS · Stop Solving. Start Evolving.
            </span>
            <TitleReveal
              as="h2"
              text="You Can't Scale Your Business Beyond the Mindset That Got You Here."
              className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#2D201A] leading-[1.15] mb-4 tracking-tight"
              highlight="Mindset"
              highlightClass="italic font-display text-[#C78460] font-normal"
            />
            <p data-reveal data-reveal-delay="0.08" className="text-base sm:text-lg font-serif text-[#5A483E] leading-snug mb-4">
              Transform your relationship with money, break through your financial ceiling and develop the mindset to support your next level of business growth.
            </p>
            <p data-reveal data-reveal-delay="0.16" className="text-sm sm:text-[15px] text-[#6B584E] font-light leading-relaxed max-w-xl mb-6">
              At The Innate Bliss, we help business owners, founders and entrepreneurs identify and transform the subconscious money patterns, limiting beliefs and emotional blocks that may be influencing their financial decisions and business growth.
            </p>
            <div data-reveal data-reveal-delay="0.24" className="flex flex-col items-stretch sm:items-start gap-2.5">
              <button
                type="button"
                onClick={onOpenBooking}
                className="btn btn-primary py-3.5 px-6 text-xs sm:text-sm font-medium inline-flex items-center justify-center w-full sm:w-auto"
              >
                <span>Apply for a Wealth Breakthrough Call</span>
              </button>
              <p className="text-xs sm:text-[13px] text-[#8A766C] leading-relaxed max-w-md">
                Discover what&apos;s holding you back and explore whether the Quantum Wealth Matrix Method is right for you.
              </p>
            </div>
          </div>
          <div data-reveal className="md:col-span-6">
            <ImageFrame
              src={platinumLifestyleImg}
              alt="Workspace with notebook and tea"
              aspect="aspect-[4/3] md:aspect-[4/5] lg:aspect-[5/4]"
              overlay={
                <GlassCard className="max-w-md">
                  <p className="font-serif text-base sm:text-lg text-[#2D201A] leading-snug">
                    Because growing a business isn&apos;t always about doing more. Sometimes, the next breakthrough begins with changing what&apos;s happening within.
                  </p>
                </GlassCard>
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};
