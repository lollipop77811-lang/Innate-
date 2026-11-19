import React from 'react';
import { CalendarDays, Video, UserCheck, PenLine, BookOpen, Users } from 'lucide-react';
import { TitleReveal } from '../TextReveal';
import { ParallaxImage } from '../motion/ParallaxImage';
import { ImageFrame, GlassCard, IconBadge } from '../ui/Visual';
import quantumWealthImg from '../../assets/images/quantum-wealth-matrix.jpg';
import phaseReleaseImg from '../../assets/images/phase-release.jpg';
import phaseElevateImg from '../../assets/images/phase-elevate.jpg';
import phaseSustainImg from '../../assets/images/phase-sustain.jpg';

const TRANSFORMATION_PHASES = [
  {
    number: '01',
    title: 'Release Your Root Blocks',
    img: phaseReleaseImg,
    alt: 'Journaling to release old patterns',
    description:
      'Identify and work through the fears, limiting beliefs, emotional blocks and old money stories that may be keeping you from moving forward.',
  },
  {
    number: '02',
    title: 'Elevate Your Money Mindset',
    img: phaseElevateImg,
    alt: 'Confident business owner at her desk',
    description:
      'Develop a healthier relationship with money, strengthen your sense of self-worth and build greater confidence around pricing, receiving, opportunities and financial growth.',
  },
  {
    number: '03',
    title: 'Sustain & Scale',
    img: phaseSustainImg,
    alt: 'Founder leading a team conversation',
    description:
      'Translate your internal transformation into more confident everyday actions, including pricing decisions, sales conversations, delegation, financial habits and business choices.',
  },
];

const JOURNEY_HIGHLIGHTS = [
  { icon: CalendarDays, text: 'A structured 9-week transformation journey.' },
  { icon: Video, text: 'Two live group sessions every week.' },
  { icon: UserCheck, text: 'Personal guidance and accountability.' },
  { icon: PenLine, text: 'Practical mindset and emotional transformation exercises.' },
  { icon: BookOpen, text: 'Guided practices, recordings and workbooks.' },
  { icon: Users, text: 'A supportive community of like-minded entrepreneurs.' },
];

export const QuantumWealthSection = ({ onOpenBooking }) => {
  return (
    <section
      id="quantum-wealth-matrix"
      className="py-14 sm:py-16 md:py-20 bg-[#F9F6F3] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center mb-14 sm:mb-16">
          <div className="lg:col-span-6">
            <span data-reveal className="inline-block text-[11px] uppercase tracking-[0.2em] text-[#866452] font-semibold mb-3">
              Signature Program
            </span>
            <TitleReveal
              as="h2"
              text="Introducing the Quantum Wealth Matrix Method"
              className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#2D201A] leading-[1.15] mb-3 tracking-tight"
              highlight="Quantum Wealth Matrix"
              highlightClass="italic font-display text-[#C78460] font-normal"
            />
            <p data-reveal data-reveal-delay="0.08" className="text-base sm:text-lg font-serif text-[#866452] font-medium mb-4">
              A 9-Week Money Mindset Transformation Journey for Business Owners, Founders and Entrepreneurs.
            </p>
            <div data-reveal data-reveal-delay="0.16" className="space-y-3 text-sm sm:text-[15px] text-[#6B584E] font-light leading-relaxed">
              <p>
                You have worked hard to build your business. Now it&apos;s time to work on the mindset that supports your next level of growth.
              </p>
              <p>
                The Quantum Wealth Matrix Method is a structured, high-accountability transformation program designed to help you identify money-related subconscious patterns, work through limiting beliefs and develop healthier, more empowering ways of thinking and responding to money.
              </p>
            </div>
          </div>
          <div data-reveal className="lg:col-span-6">
            <ImageFrame
              src={quantumWealthImg}
              alt="Group coaching session"
              aspect="aspect-[4/3] lg:aspect-[5/4]"
              overlay={
                <GlassCard className="border-l-4 !border-l-[#866452]">
                  <p className="font-serif text-base sm:text-lg font-medium text-[#2D201A] mb-1">
                    This is not another business strategy course.
                  </p>
                  <p className="text-[13px] sm:text-sm text-[#43342D] leading-relaxed">
                    It&apos;s an opportunity to work on the internal patterns that may be influencing your financial decisions, business behaviour and relationship with wealth.
                  </p>
                </GlassCard>
              }
            />
          </div>
        </div>

        <h3 data-reveal className="text-center text-xl sm:text-2xl md:text-3xl font-serif text-[#2D201A] font-medium mb-6 sm:mb-8">
          Your Three Phases of Transformation
        </h3>
        <div data-stagger className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12 sm:mb-14">
          {TRANSFORMATION_PHASES.map((phase) => (
            <article
              key={phase.number}
              className="group rounded-3xl bg-white border border-[#D9CEC7]/90 shadow-xs overflow-hidden transition-[transform,box-shadow] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 hover:shadow-serene"
            >
              <div className="relative aspect-[16/11] overflow-hidden bg-[#EAE1D6]">
                <ParallaxImage src={phase.img} alt={phase.alt} className="block w-full h-full object-cover" strength={4} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#140F0D]/60 via-transparent to-transparent" />
                <span className="absolute top-4 left-4 w-11 h-11 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-sm font-mono font-semibold text-[#C78460] shadow-md">
                  {phase.number}
                </span>
                <h4 className="absolute bottom-4 left-5 right-5 text-xl sm:text-2xl font-serif text-white font-medium leading-tight">
                  {phase.title}
                </h4>
              </div>
              <p className="p-5 sm:p-6 text-sm text-[#6B584E] font-light leading-relaxed">
                {phase.description}
              </p>
            </article>
          ))}
        </div>

        <div data-reveal className="p-5 sm:p-10 rounded-3xl bg-[#191412] border border-[#3A2E28] text-white shadow-velvet">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 mb-6 sm:mb-8">
            <h3 className="text-2xl sm:text-3xl font-serif text-white font-light leading-snug">
              What Makes This Journey Different?
            </h3>
            <button
              type="button"
              onClick={onOpenBooking}
              className="btn btn-gold py-3.5 px-6 text-xs sm:text-sm w-full md:w-auto shrink-0"
            >
              <span>Explore the Quantum Wealth Matrix Method</span>
            </button>
          </div>
          <ul data-stagger className="grid grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-3.5">
            {JOURNEY_HIGHLIGHTS.map(({ icon, text }) => (
              <li
                key={text}
                className="group p-3.5 sm:p-5 rounded-2xl bg-white/[0.04] border border-white/10 transition-colors duration-500 hover:bg-white/[0.08] hover:border-[#D4A373]/40"
              >
                <IconBadge icon={icon} tone="dark" />
                <p className="mt-3 text-[13px] sm:text-sm text-[#E5DDD7] font-light leading-relaxed">{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
