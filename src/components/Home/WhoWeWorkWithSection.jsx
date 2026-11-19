import React from 'react';
import { BarChart3, HeartHandshake, IndianRupee, Repeat, Sprout, CheckCircle2, XCircle } from 'lucide-react';
import { TitleReveal } from '../TextReveal';
import { ImageFrame, IconBadge } from '../ui/Visual';
import whoWeWorkWithImg from '../../assets/images/who-we-work-with.jpg';

const IDEAL_FOR_POINTS = [
  { icon: BarChart3, text: 'Business owners who feel stuck at an income or revenue plateau.' },
  { icon: HeartHandshake, text: 'Founders who want to develop a stronger relationship with money and growth.' },
  { icon: IndianRupee, text: 'Entrepreneurs who struggle with pricing, receiving, sales or financial confidence.' },
  { icon: Repeat, text: 'Business owners who are tired of repeating the same financial patterns.' },
  { icon: Sprout, text: 'Individuals who are ready to invest in their personal growth alongside their business growth.' },
];

export const WhoWeWorkWithSection = () => {
  return (
    <section id="who-we-work-with" className="py-12 sm:py-16 md:py-20 bg-[#F2ECE5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center mb-10 sm:mb-12">
          <div data-reveal className="lg:col-span-5 order-2 lg:order-1">
            <ImageFrame
              src={whoWeWorkWithImg}
              alt="Entrepreneur by the window"
              aspect="aspect-[16/10] lg:aspect-[4/5]"
            />
          </div>
          <div className="lg:col-span-7 order-1 lg:order-2">
            <span data-reveal className="inline-block text-[11px] uppercase tracking-[0.2em] text-[#866452] font-semibold mb-3">
              Who We Work With
            </span>
            <TitleReveal
              as="h2"
              text="For Business Owners Who Know They Are Capable of More."
              className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#2D201A] leading-[1.15] mb-3 tracking-tight"
              highlight="Capable of More."
              highlightClass="italic font-display text-[#C78460] font-normal"
            />
            <p data-reveal data-reveal-delay="0.08" className="text-sm sm:text-base text-[#6B584E] font-light mb-5">
              The Quantum Wealth Matrix Method is designed for:
            </p>
            <ul data-stagger className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {IDEAL_FOR_POINTS.map(({ icon, text }, idx) => (
                <li
                  key={text}
                  className={`group flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-[#D9CEC7]/80 shadow-xs transition-[transform,box-shadow] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:shadow-serene ${
                    idx === IDEAL_FOR_POINTS.length - 1 ? 'sm:col-span-2' : ''
                  }`}
                >
                  <IconBadge icon={icon} className="!w-10 !h-10" />
                  <span className="text-sm text-[#43342D] leading-relaxed pt-0.5">{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div data-stagger className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-start gap-4 p-5 sm:p-6 rounded-3xl bg-white border border-[#D9CEC7] shadow-xs">
            <CheckCircle2 className="w-7 h-7 text-[#866452] shrink-0" strokeWidth={1.6} />
            <p className="text-sm sm:text-[15px] text-[#2D201A] font-medium leading-relaxed">
              This program is for you if you are willing to look within, take responsibility for your growth and consistently apply what you learn.
            </p>
          </div>
          <div className="flex items-start gap-4 p-5 sm:p-6 rounded-3xl bg-[#F9F6F3]/70 border border-dashed border-[#D9CEC7]">
            <XCircle className="w-7 h-7 text-[#B8A69B] shrink-0" strokeWidth={1.6} />
            <p className="text-sm sm:text-[15px] text-[#8A766C] leading-relaxed">
              It is not for those looking for stock tips, guaranteed income, quick-money schemes or someone to do the work for them.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
