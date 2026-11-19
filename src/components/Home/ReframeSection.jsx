import React from 'react';
import { Target, Sprout, Tag, Handshake, HandCoins, Dice5, GitBranch, Lightbulb } from 'lucide-react';
import { TitleReveal } from '../TextReveal';
import { ParallaxImage } from '../motion/ParallaxImage';
import { IconBadge } from '../ui/Visual';
import mindsetReframeImg from '../../assets/images/mindset-reframe.jpg';

const PATTERN_AREAS = [
  { icon: Tag, text: 'Price your products and services.' },
  { icon: Handshake, text: 'Negotiate and close deals.' },
  { icon: HandCoins, text: 'Receive and manage money.' },
  { icon: Dice5, text: 'Take calculated risks.' },
  { icon: GitBranch, text: 'Delegate and make business decisions.' },
  { icon: Lightbulb, text: 'Recognise and act on opportunities.' },
];

const LAYERS = [
  {
    icon: Target,
    text: 'Your conscious goals may be clear. You want more revenue, better profits, financial stability and greater opportunities.',
    position: 'lg:top-6 lg:left-6',
  },
  {
    icon: Sprout,
    text: 'But beneath those goals are beliefs, fears, emotional conditioning and habits that influence how you respond to money.',
    position: 'lg:bottom-6 lg:right-6',
  },
];

export const ReframeSection = () => {
  return (
    <section id="the-reframe" className="py-14 sm:py-16 md:py-20 bg-[#F2ECE5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 lg:gap-12 items-center mb-12 sm:mb-16">
          <div className="lg:col-span-5">
            <span data-reveal className="inline-block text-[11px] uppercase tracking-[0.2em] text-[#866452] font-semibold mb-3">
              The Reframe
            </span>
            <TitleReveal
              as="h2"
              text="It May Not Be Another Strategy You Need. It May Be a Different Money Mindset."
              className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-serif text-[#2D201A] leading-[1.15] tracking-tight"
              highlight="Money Mindset."
              highlightClass="italic font-display text-[#C78460] font-normal"
            />
          </div>
          <div data-reveal className="lg:col-span-7">
            <div className="relative">
              <div className="rounded-3xl overflow-hidden border border-[#D9CEC7] shadow-serene aspect-[4/3] lg:aspect-[16/11] bg-[#EAE1D6]">
                <ParallaxImage src={mindsetReframeImg} alt="Tree roots" className="block w-full h-full object-cover" />
              </div>
              <div className="mt-4 grid gap-3 lg:mt-0">
                {LAYERS.map(({ icon, text, position }) => (
                  <div
                    key={text}
                    className={`group flex items-start gap-3 p-4 rounded-2xl bg-white/90 backdrop-blur-xl border border-white/80 shadow-lg lg:absolute lg:max-w-[300px] ${position}`}
                  >
                    <IconBadge icon={icon} className="!w-10 !h-10" />
                    <p className="text-sm text-[#43342D] leading-relaxed">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <p data-reveal className="text-center text-base sm:text-lg font-serif text-[#2D201A] font-medium mb-6">
          These patterns can show up in the way you:
        </p>
        <div data-stagger className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 mb-10 sm:mb-14">
          {PATTERN_AREAS.map(({ icon, text }) => (
            <div
              key={text}
              className="group h-full p-4 sm:p-5 rounded-2xl bg-white border border-[#D9CEC7]/80 shadow-xs text-center flex flex-col items-center transition-[transform,box-shadow] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:shadow-serene"
            >
              <IconBadge icon={icon} />
              <p className="mt-3 text-[13px] sm:text-sm text-[#43342D] leading-snug">{text}</p>
            </div>
          ))}
        </div>

        <div data-reveal className="max-w-3xl mx-auto text-center">
          <p className="text-sm sm:text-[15px] text-[#6B584E] leading-relaxed mb-3">
            Until you begin addressing these underlying patterns, you may find yourself repeating familiar behaviours despite knowing what needs to change.
          </p>
          <p className="text-xl sm:text-2xl md:text-[28px] font-serif text-[#2D201A] font-medium leading-snug">
            The first step towards different results is understanding what&apos;s driving your existing patterns.
          </p>
        </div>
      </div>
    </section>
  );
};
