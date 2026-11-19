import React from 'react';
import { Wallet, Activity, Tag, Percent, ShoppingBag, Users, BarChart3, Scale } from 'lucide-react';
import { TitleReveal } from '../TextReveal';
import { ImageFrame, GlassCard, IconTile } from '../ui/Visual';
import mindsetProblemImg from '../../assets/images/mindset-problem.jpg';

const PROBLEM_POINTS = [
  { icon: Wallet, text: "Your revenue goes up, but somehow there's never enough left at the end of the month." },
  { icon: Activity, text: 'Your income fluctuates between a great month and financially uncertain periods.' },
  { icon: Tag, text: 'You struggle to charge what your products or services are actually worth.' },
  { icon: Percent, text: "You offer discounts even when you know you shouldn't." },
  { icon: ShoppingBag, text: 'You feel guilty spending on yourself, or anxious every time you check your account.' },
  { icon: Users, text: 'You find it difficult to delegate, trust others or let go of control.' },
  { icon: BarChart3, text: 'Despite working harder, your income seems to have reached a plateau.' },
  { icon: Scale, text: 'Your business demands so much of you that your personal life and peace of mind suffer.' },
];

export const ProblemSection = () => {
  return (
    <section id="the-problem" className="py-12 sm:py-16 md:py-20 bg-[#F9F6F3] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-7 lg:gap-14 items-center mb-12 sm:mb-16">
          <div data-reveal className="md:col-span-6 order-2 md:order-1">
            <ImageFrame
              src={mindsetProblemImg}
              alt="Business owner thinking at his desk"
              overlay={
                <GlassCard className="inline-block">
                  <p className="font-serif text-lg sm:text-xl text-[#2D201A] font-medium">
                    Yet, something still feels stuck.
                  </p>
                </GlassCard>
              }
            />
          </div>
          <div className="md:col-span-6 order-1 md:order-2">
            <span data-reveal className="inline-block text-[11px] uppercase tracking-[0.2em] text-[#866452] font-semibold mb-3">
              The Problem
            </span>
            <TitleReveal
              as="h2"
              text="You know how to run a business. So why does money still feel like a struggle?"
              className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#2D201A] leading-[1.16] mb-5 tracking-tight"
              highlight="struggle?"
              highlightClass="italic font-display text-[#C78460] font-normal"
            />
            <div data-stagger className="space-y-3">
              <p className="pl-4 border-l-2 border-[#D9CEC7] text-sm sm:text-[15px] text-[#6B584E] font-light leading-relaxed">
                You have invested your time, money and energy into building your business.
              </p>
              <p className="pl-4 border-l-2 border-[#D9CEC7] text-sm sm:text-[15px] text-[#6B584E] font-light leading-relaxed">
                You have tried new strategies, invested in marketing, built a team and explored different opportunities.
              </p>
            </div>
          </div>
        </div>

        <h3 data-reveal className="text-center text-xl sm:text-2xl md:text-3xl font-serif text-[#2D201A] font-medium mb-6 sm:mb-8">
          Does any of this sound familiar?
        </h3>
        <div data-stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 mb-10 sm:mb-14">
          {PROBLEM_POINTS.map(({ icon, text }) => (
            <IconTile key={text} icon={icon}>
              {text}
            </IconTile>
          ))}
        </div>

        <div data-reveal className="max-w-3xl mx-auto text-center">
          <p className="text-sm sm:text-[15px] text-[#6B584E] font-light leading-relaxed mb-3">
            You may have already tried changing your strategy. But have you explored the patterns influencing the way you think, feel and make decisions about money?
          </p>
          <p className="text-xl sm:text-2xl md:text-[28px] font-serif text-[#2D201A] font-medium leading-snug">
            Because sometimes, the problem isn&apos;t what you are doing.{' '}
            <span className="italic text-[#866452]">
              It&apos;s the unconscious patterns driving what you do.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};
