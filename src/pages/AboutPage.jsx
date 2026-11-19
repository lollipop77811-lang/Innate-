import React from 'react';
import {
  Heart, Users, Briefcase, Wallet, Tv, Clock, Lightbulb, Brain, Compass, GraduationCap,
  Wrench, Hourglass, Layers, Search, TrendingUp, Quote,
} from 'lucide-react';
import { TitleReveal } from '../components/TextReveal';
import { ParallaxImage } from '../components/motion/ParallaxImage';
import { ImageFrame, GlassCard, IconBadge } from '../components/ui/Visual';
import { BRAND_INFO } from '../data/siteData';

import mindsetReframeImg from '../assets/images/mindset-reframe.jpg';
import quantumWealthImg from '../assets/images/quantum-wealth-matrix.jpg';
import pillarHealthImg from '../assets/images/pillar-health.jpg';
import pillarRelationshipsImg from '../assets/images/pillar-relationships.jpg';
import pillarCareerImg from '../assets/images/pillar-career.jpg';
import pillarMoneyImg from '../assets/images/pillar-money.jpg';

const LIFE_PILLARS = [
  { label: 'Money', icon: Wallet, img: pillarMoneyImg },
  { label: 'Health', icon: Heart, img: pillarHealthImg },
  { label: 'Relationships', icon: Users, img: pillarRelationshipsImg },
  { label: 'Career', icon: Briefcase, img: pillarCareerImg },
];

const STORY = [
  {
    icon: Tv,
    text: 'For nearly two decades, I worked in the media and corporate world, building my career, taking on responsibilities and working towards professional success.',
  },
  {
    icon: Clock,
    text: 'From the outside, everything looked fine. I had a stable career, professional recognition and a good income. But behind the scenes, I was working 14-hour days and constantly trying to achieve more.',
  },
  {
    icon: Lightbulb,
    highlight: true,
    text: "But over time, I began to realise that external success doesn't always translate into inner fulfilment.",
  },
  {
    icon: Brain,
    text: 'This curiosity led me to explore something deeper – the human mind, our subconscious beliefs, emotional patterns and the invisible factors that influence the way we think, behave and experience life.',
  },
  {
    icon: Compass,
    text: 'What started as a personal exploration gradually became my passion and purpose.',
  },
  {
    icon: GraduationCap,
    text: (
      <>
        I trained in <strong className="font-medium text-[#2D201A]">NLP, EFT, Ho&apos;oponopono</strong> and other transformation practices. Eventually, I made a conscious transition from the media world to coaching and founded <strong className="font-medium text-[#2D201A]">The Innate Bliss</strong> with a vision to help people create meaningful transformation.
      </>
    ),
  },
];

const MONEY_STEPS = [
  { icon: Wrench, text: 'For the longest time, I was trying to fix everything on the outside – my strategies, pricing and marketing funnels.' },
  { icon: Hourglass, text: 'I was working 14-hour days, putting in everything I had, yet my income seemed to be stuck at the same level.' },
  { icon: Lightbulb, text: 'Until I realised something that changed the way I looked at wealth and success.' },
];

const INSIGHTS = [
  { icon: Layers, text: 'Our external results are influenced by many factors, including our beliefs, subconscious patterns, emotional conditioning and the way we perceive ourselves and money.' },
  { icon: Search, text: 'I realised that if I wanted different financial results, I had to stop looking only at external strategies and start understanding my internal money patterns.' },
  { icon: TrendingUp, text: 'As I began working on my own beliefs and emotional blocks around money, I noticed changes in the way I thought, felt, made decisions and responded to opportunities.' },
];

export const AboutPage = ({ onOpenBooking }) => {
  return (
    <div className="pt-16 sm:pt-20 bg-[#F9F6F3]">
      <section className="py-10 sm:py-16 md:py-20 bg-[#F9F6F3] border-b border-[#D9CEC7]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <div data-reveal className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F2ECE5] border border-[#D9CEC7] text-[#6B584E] text-[10px] sm:text-xs uppercase tracking-[0.16em] mb-4 shadow-xs">
            <span>Founder, The Innate Bliss | Wealth Mindset Coach</span>
          </div>
          <TitleReveal
            as="h1"
            text="Meet Payal Gulati: From Media to Mindset Coaching"
            className="text-3xl sm:text-5xl md:text-6xl font-serif text-[#2D201A] leading-[1.12] mb-5 max-w-4xl mx-auto tracking-tight"
            highlight="Mindset Coaching"
            highlightClass="italic font-display text-[#C78460] font-normal"
          />
          <p data-reveal data-reveal-delay="0.08" className="text-base sm:text-lg md:text-xl text-[#6B584E] font-light leading-relaxed max-w-2xl mx-auto">
            A Journey of Discovering What Truly Creates Success.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-[#F2ECE5]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14 items-start">
            <div data-reveal className="md:col-span-5 md:sticky md:top-28">
              <div className="rounded-[2.2rem] bg-white border border-[#D9CEC7] overflow-hidden shadow-premium max-w-md mx-auto">
                <div className="aspect-[4/5] relative bg-[#F2ECE5]">
                  <img
                    src={BRAND_INFO.founderPhoto}
                    alt="Payal Gulati - Founder, The Innate Bliss"
                    fetchpriority="high"
                    className="block w-full h-full object-cover object-top"
                    onError={(e) => {
                      e.target.src = BRAND_INFO.coachPayal;
                    }}
                  />
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#140F0D]/80 via-[#140F0D]/25 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-2xl bg-white/95 backdrop-blur-xl border border-white/85 text-center shadow-lg">
                    <h3 className="text-lg font-serif text-[#2D201A] font-semibold">
                      Payal Gulati
                    </h3>
                    <p className="text-[11px] text-[#6B584E]">
                      Founder, The Innate Bliss · Wealth Mindset Coach
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:col-span-7">
              <span data-reveal className="text-xs uppercase tracking-[0.18em] text-[#C78460] font-semibold mb-2 block">
                About the Founder
              </span>
              <h2 data-reveal className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#2D201A] leading-snug mb-8">
                From Media to Mindset Coaching – A Journey of Discovering What Truly Creates Success.
              </h2>
              <ol data-stagger className="relative">
                {STORY.map(({ icon, text, highlight }, idx) => (
                  <li key={idx} className="group relative flex gap-4 sm:gap-5 pb-6 last:pb-0">
                    {idx < STORY.length - 1 && (
                      <span aria-hidden="true" className="absolute left-[21px] top-12 bottom-1 w-px bg-gradient-to-b from-[#C9B3A5] to-[#D9CEC7]/30" />
                    )}
                    <IconBadge icon={icon} tone={highlight ? 'light' : 'white'} className={highlight ? '!bg-[#866452] !text-white' : 'border border-[#D9CEC7]'} />
                    {highlight ? (
                      <p className="flex-1 p-4 sm:p-5 rounded-2xl bg-white border-l-4 border-[#866452] shadow-xs font-serif text-lg sm:text-xl text-[#2D201A] font-medium leading-snug">
                        {text}
                      </p>
                    ) : (
                      <p className="flex-1 pt-2 text-sm sm:text-base text-[#6B584E] font-light leading-relaxed">{text}</p>
                    )}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16 md:py-20 bg-[#F9F6F3]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-14 items-center">
            <div className="md:col-span-6">
              <TitleReveal
                as="h2"
                text="My Personal Journey with Money Changed Everything."
                className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#2D201A] leading-[1.16] mb-6 tracking-tight"
                highlight="Changed Everything."
                highlightClass="italic font-display text-[#C78460] font-normal"
              />
              <div data-stagger className="space-y-3">
                {MONEY_STEPS.map(({ icon, text }) => (
                  <div key={text} className="group flex items-start gap-4 p-4 rounded-2xl bg-white border border-[#D9CEC7]/80 shadow-xs">
                    <IconBadge icon={icon} className="!w-10 !h-10" />
                    <p className="text-sm sm:text-[15px] text-[#6B584E] leading-relaxed pt-1">{text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div data-reveal className="md:col-span-6">
              <ImageFrame
                src={mindsetReframeImg}
                alt="Tree roots"
                aspect="aspect-[4/3] md:aspect-[4/5]"
                overlay={
                  <GlassCard className="sm:p-6">
                    <Quote className="w-6 h-6 text-[#C78460] mb-2" strokeWidth={1.6} />
                    <p className="text-lg sm:text-2xl font-serif text-[#2D201A] font-semibold leading-snug mb-2">
                      I was trying to change the fruit while ignoring the roots.
                    </p>
                    <p className="text-[13px] sm:text-sm text-[#43342D] leading-relaxed">
                      Think about a tree. When it stops bearing healthy fruit, you don&apos;t try to fix each fruit individually. You look at the roots. The same applies to our lives.
                    </p>
                  </GlassCard>
                }
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 bg-[#F2ECE5]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div data-stagger className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-5 mb-10 sm:mb-12">
            {INSIGHTS.map(({ icon, text }, idx) => (
              <div key={text} className="group relative p-6 rounded-3xl bg-white border border-[#D9CEC7]/80 shadow-xs transition-[transform,box-shadow] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:shadow-serene">
                <div className="flex items-center justify-between mb-4">
                  <IconBadge icon={icon} />
                  <span className="text-xs font-mono tracking-widest text-[#C78460] font-semibold">0{idx + 1}</span>
                </div>
                <p className="text-sm sm:text-[15px] text-[#6B584E] font-light leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div data-reveal className="md:col-span-5 order-2 md:order-1">
              <ImageFrame src={quantumWealthImg} alt="Coaching session" />
            </div>
            <div className="md:col-span-7 order-1 md:order-2">
              <p data-reveal className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#2D201A] font-medium leading-snug mb-5">
                That personal journey became the foundation of my{' '}
                <span className="italic text-[#866452]">Quantum Wealth Matrix Method.</span>
              </p>
              <p data-reveal data-reveal-delay="0.1" className="text-sm sm:text-base text-[#6B584E] font-light leading-relaxed">
                Today, I bring together my personal experience, coaching practice and training in transformation modalities to help business owners work on their money mindset and create a stronger foundation for growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16 md:py-20 bg-[#F9F6F3]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div data-stagger className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-10">
            {LIFE_PILLARS.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.label}
                  className="relative rounded-2xl overflow-hidden border border-[#D9CEC7] bg-white shadow-xs group transition-[transform,box-shadow] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:shadow-serene"
                >
                  <div className="aspect-[4/5] overflow-hidden bg-[#EAE1D6]">
                    <img
                      src={pillar.img}
                      alt={pillar.label}
                      className="block w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)]"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#140F0D]/70 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-white/90 backdrop-blur-md">
                    <Icon className="w-4 h-4 text-[#866452]" />
                    <span className="font-serif text-base font-medium text-[#2D201A]">
                      {pillar.label}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
          <div data-reveal className="relative max-w-5xl mx-auto rounded-3xl sm:rounded-[2.5rem] bg-[#191412] border border-[#3A2E28] p-7 sm:p-12 md:p-14 text-center shadow-velvet overflow-hidden">
            <div aria-hidden="true" className="absolute inset-0">
              <ParallaxImage src={mindsetReframeImg} alt="" className="block w-full h-full object-cover opacity-80" strength={8} />
              <div className="absolute inset-0 bg-gradient-to-b from-[#191412]/55 via-[#191412]/45 to-[#191412]/85" />
            </div>
            <div className="relative">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/10 text-[#D4A373] text-[10px] sm:text-xs uppercase tracking-[0.18em] mb-4">
                <span>My Belief</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-white font-light leading-snug mb-5">
                You don&apos;t always need another strategy. Sometimes, you need to work on the{' '}
                <span className="italic text-[#D4A373]">roots</span> that are influencing your results.
              </h2>
              <div className="space-y-3 text-sm sm:text-base text-[#D9CEC7] font-light leading-relaxed max-w-2xl mx-auto mb-8">
                <p>
                  At The Innate Bliss, I believe that a truly fulfilling life is built on four important pillars – <strong className="text-white font-medium">Money, Health, Relationships and Career.</strong>
                </p>
                <p>
                  My mission is to help people transform from within so they can create greater success, experience deeper fulfilment and enjoy the life they are working so hard to build.
                </p>
              </div>
              <button
                type="button"
                onClick={onOpenBooking}
                className="btn btn-gold py-3.5 px-8 text-xs sm:text-sm w-full sm:w-auto"
              >
                <span>Book a 1:1 Call With Payal</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
