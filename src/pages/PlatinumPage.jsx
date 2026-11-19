import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import {
  Heart, Users, Briefcase, Wallet, Brain, Moon, Flame, CloudRain, HeartPulse, Frown, Coffee,
  MessagesSquare, Home, Ear, HeartHandshake, Building2, Handshake, MessageCircle, Network,
  Search, Hourglass, Mountain, Eye, Megaphone, Compass, BarChart3, PiggyBank, GitBranch,
  IndianRupee, Landmark, TrendingUp,
} from 'lucide-react';
import { TitleReveal, EASE } from '../components/TextReveal';
import { ParallaxImage } from '../components/motion/ParallaxImage';
import { ImageFrame, IconBadge } from '../components/ui/Visual';

import platinumLifestyleImg from '../assets/images/platinum-lifestyle.jpg';
import pillarHealthImg from '../assets/images/pillar-health.jpg';
import pillarRelationshipsImg from '../assets/images/pillar-relationships.jpg';
import pillarCareerImg from '../assets/images/pillar-career.jpg';
import pillarMoneyImg from '../assets/images/pillar-money.jpg';
import ctaPathImg from '../assets/images/cta-path.jpg';

const PILLARS = [
  {
    id: 'pillar-money',
    label: 'MONEY',
    number: '01',
    title: 'Money',
    icon: Wallet,
    img: pillarMoneyImg,
    alt: 'Money and financial growth',
    groups: [
      {
        items: [
          { icon: BarChart3, text: 'Is your income stuck at the same level despite your efforts?' },
          { icon: PiggyBank, text: 'Are you struggling to save money or build financial security?' },
          { icon: GitBranch, text: 'Do you feel dependent on a single source of income?' },
          { icon: Handshake, text: 'Are you finding it difficult to close business deals or convert leads into sales?' },
          { icon: IndianRupee, text: 'Do you struggle to sell confidently, communicate your value or ask for the price you deserve?' },
          { icon: Hourglass, text: 'Are your business deals getting delayed or stuck?' },
          { icon: Landmark, text: 'Do debts, loans or financial responsibilities feel overwhelming?' },
          { icon: TrendingUp, text: 'Do you feel your business or financial growth is not matching your potential?' },
        ],
      },
    ],
  },
  {
    id: 'pillar-health',
    label: 'HEALTH',
    number: '02',
    title: 'Health & Emotional Well-being',
    icon: Heart,
    img: pillarHealthImg,
    alt: 'Health and emotional well-being',
    groups: [
      {
        items: [
          { icon: Brain, text: 'Struggling with stress, anxiety, overthinking or racing thoughts.' },
          { icon: Moon, text: 'Finding it difficult to relax, unwind or get restful sleep.' },
          { icon: Flame, text: 'Experiencing anger, hurt, frustration or emotional outbursts.' },
          { icon: CloudRain, text: 'Carrying unresolved emotions or repeating negative patterns that hold you back.' },
          { icon: HeartPulse, text: 'Experiencing stress-related physical discomfort and tension.' },
          { icon: Frown, text: 'Feeling empty, stuck or unfulfilled despite having everything you once wished for.' },
          { icon: Coffee, text: 'Struggling with emotional eating or cravings for sweets, junk food, tea or coffee.' },
        ],
      },
    ],
  },
  {
    id: 'pillar-relationships',
    label: 'RELATIONSHIPS',
    number: '03',
    title: 'Relationships',
    icon: Users,
    img: pillarRelationshipsImg,
    alt: 'Personal and professional relationships',
    groups: [
      {
        title: 'Personal Relationships',
        items: [
          { icon: Heart, text: 'Struggling with self-love, self-confidence and emotional balance.' },
          { icon: MessagesSquare, text: 'Conflicts, misunderstandings or disconnection with your spouse.' },
          { icon: Home, text: 'Facing challenges with parents, children or friends.' },
          { icon: Ear, text: 'Feeling unheard, unsupported, unappreciated or misunderstood.' },
          { icon: HeartHandshake, text: 'Wanting love, trust, connection, understanding and harmony in your relationships.' },
        ],
      },
      {
        title: 'Professional Relationships',
        items: [
          { icon: Building2, text: 'Experiencing difficult relationships with your boss, colleagues or teams.' },
          { icon: Handshake, text: 'Facing challenges in managing client relationships.' },
          { icon: MessageCircle, text: 'Struggling with effective communication or setting healthy boundaries.' },
          { icon: Network, text: 'Wanting stronger professional relationships and collaboration.' },
        ],
      },
    ],
  },
  {
    id: 'pillar-career',
    label: 'CAREER',
    number: '04',
    title: 'Career',
    icon: Briefcase,
    img: pillarCareerImg,
    alt: 'Career growth',
    groups: [
      {
        items: [
          { icon: Search, text: 'Are you currently jobless or struggling to find the right job?' },
          { icon: Hourglass, text: 'Have you been waiting for an increment or promotion for a long time?' },
          { icon: Mountain, text: 'Do you feel stuck in your current role with limited opportunities for growth?' },
          { icon: Eye, text: 'Do you feel your skills and potential are not being recognised?' },
          { icon: Megaphone, text: 'Are you struggling with confidence, workplace relationships or communication?' },
          { icon: Compass, text: 'Do you feel unfulfilled or unsure about the next step in your career?' },
        ],
      },
    ],
  },
];

const PointItem = ({ icon, text }) => (
  <li className="group flex items-start gap-3 p-3.5 rounded-2xl bg-[#F9F6F3] border border-[#D9CEC7]/70 transition-colors duration-500 hover:bg-white hover:border-[#C9B3A5]">
    <IconBadge icon={icon} tone="white" className="!w-9 !h-9 [&>svg]:!w-4 [&>svg]:!h-4" />
    <span className="text-sm text-[#43342D] leading-relaxed pt-1">{text}</span>
  </li>
);

export const PlatinumPage = ({ onOpenBooking }) => {
  const { hash } = useLocation();
  const [active, setActive] = useState(PILLARS[0].id);
  const pillar = PILLARS.find((p) => p.id === active);

  useEffect(() => {
    const id = hash.replace('#', '');
    if (PILLARS.some((p) => p.id === id)) setActive(id);
  }, [hash]);

  const openPillar = (id) => {
    setActive(id);
    document.getElementById('pillars')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="bg-[#F9F6F3] pt-16 sm:pt-20">
      <section className="py-10 sm:py-16 md:py-20 bg-[#F9F6F3] relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#D4A373]/15 rounded-full blur-3xl pointer-events-none animate-drift" />
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="md:col-span-7">
              <div data-reveal className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#D9CEC7] text-[#866452] text-[10px] sm:text-xs uppercase tracking-[0.18em] font-semibold mb-4 shadow-xs">
                <span>Platinum Lifetime Membership</span>
              </div>
              <TitleReveal
                as="h1"
                text="True Success Is More Than Financial Growth. It's About Creating a Better Life."
                className="text-3xl sm:text-4xl md:text-[44px] font-serif text-[#2D201A] leading-[1.12] mb-5 tracking-tight"
                highlight="Creating a Better Life."
                highlightClass="italic font-display text-[#C78460] font-normal"
              />
              <div data-reveal data-reveal-delay="0.08" className="space-y-3.5 text-sm sm:text-base text-[#6B584E] font-light leading-relaxed mb-6">
                <p className="font-serif text-xl sm:text-2xl text-[#2D201A] font-medium">
                  Money matters. But is money alone enough to make you feel successful?
                </p>
                <p>
                  What is the value of business growth if your health suffers? What is the joy of financial abundance if your relationships are constantly strained? And what is the point of professional success if you don&apos;t feel fulfilled?
                </p>
                <p>
                  At The Innate Bliss, we believe a fulfilling life is built around four interconnected pillars:
                </p>
              </div>
              <div data-stagger className="flex flex-wrap items-center gap-2.5">
                {PILLARS.map((p) => (
                  <a
                    key={p.id}
                    href={`#${p.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      openPillar(p.id);
                    }}
                    className="group flex items-center gap-2.5 pl-1 pr-4 py-1 rounded-full bg-white border border-[#D9CEC7] hover:border-[#866452] text-xs font-semibold tracking-[0.16em] text-[#2D201A] transition-[border-color,box-shadow] duration-300 shadow-xs hover:shadow-serene"
                  >
                    <img src={p.img} alt="" className="w-8 h-8 rounded-full object-cover" />
                    {p.label}
                  </a>
                ))}
              </div>
            </div>
            <div data-reveal className="md:col-span-5">
              <ImageFrame
                src={platinumLifestyleImg}
                alt="Platinum Lifetime Membership"
                fetchpriority="high"
                className="shadow-premium sm:rounded-[2rem]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 bg-[#F2ECE5] border-y border-[#D9CEC7]/70">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-14 items-center">
            <div data-stagger className="md:col-span-5 grid grid-cols-2 gap-3 sm:gap-4">
              {PILLARS.map((p, idx) => (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => openPillar(p.id)}
                  className={`group relative rounded-2xl overflow-hidden border border-[#D9CEC7] shadow-xs aspect-square ${idx % 2 ? 'translate-y-6' : ''}`}
                >
                  <img src={p.img} alt={p.alt} className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105" />
                  <span className="absolute inset-0 bg-gradient-to-t from-[#140F0D]/65 via-transparent to-transparent" />
                  <span className="absolute bottom-2.5 left-2.5 right-2 sm:bottom-3 sm:left-3 flex items-center gap-1.5 text-white text-[9.5px] sm:text-[11px] font-semibold tracking-[0.08em] sm:tracking-[0.16em]">
                    <p.icon className="w-3.5 h-3.5" />
                    {p.label}
                  </span>
                </button>
              ))}
            </div>
            <div className="md:col-span-7 space-y-4 pt-6 lg:pt-0">
              <h2 data-reveal className="text-2xl sm:text-3xl md:text-[34px] font-serif text-[#2D201A] font-medium leading-snug">
                That&apos;s why we created{' '}
                <span className="italic text-[#866452]">
                  Platinum – Your Lifetime Journey of Holistic Transformation.
                </span>{' '}
                Platinum is not a course. It&apos;s a lifestyle.
              </h2>
              <p data-reveal data-reveal-delay="0.08" className="text-sm sm:text-base text-[#6B584E] font-light leading-relaxed">
                It&apos;s about making personal growth a part of your everyday life, continuously evolving and creating positive changes across every important area of life.
              </p>
              <p data-reveal data-reveal-delay="0.16" className="text-sm sm:text-base text-[#6B584E] font-light leading-relaxed">
                Whether you want to improve your emotional wellbeing, build stronger relationships, find greater career fulfilment or develop a healthier relationship with money, Platinum gives you a space to work on the inner patterns, beliefs and emotions that influence these areas.
              </p>
              <p data-reveal data-reveal-delay="0.24" className="pl-4 border-l-2 border-[#866452] text-base sm:text-lg font-serif text-[#2D201A] font-medium">
                Because true success isn&apos;t just about earning more. It&apos;s about creating a life where you feel healthier, happier, more fulfilled and connected.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="pillars" className="py-14 sm:py-20 bg-[#F9F6F3] scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div data-reveal role="tablist" aria-label="Four pillars" className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3 mb-6 sm:mb-8">
            {PILLARS.map((p) => {
              const selected = p.id === active;
              return (
                <button
                  key={p.id}
                  id={p.id}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  aria-controls={`${p.id}-panel`}
                  onClick={() => setActive(p.id)}
                  className={`relative flex items-center gap-2.5 sm:gap-3 p-2.5 pr-3 sm:pr-4 min-h-[60px] rounded-2xl border text-left scroll-mt-28 transition-[background-color,border-color,box-shadow,color] duration-500 ${
                    selected
                      ? 'bg-[#191412] border-[#191412] text-white shadow-velvet'
                      : 'bg-white border-[#D9CEC7] text-[#2D201A] hover:border-[#866452]'
                  }`}
                >
                  <img src={p.img} alt="" className="hidden min-[380px]:block w-10 h-10 sm:w-12 sm:h-12 rounded-xl object-cover shrink-0" />
                  <span className="min-w-0">
                    <span className={`block text-[10px] uppercase tracking-[0.16em] font-semibold ${selected ? 'text-[#D4A373]' : 'text-[#C78460]'}`}>
                      Pillar {p.number}
                    </span>
                    <span className="block font-serif text-[13px] sm:text-base font-medium leading-tight line-clamp-2 break-words">{p.title}</span>
                  </span>
                </button>
              );
            })}
          </div>

          <AnimatePresence mode="wait">
            <motion.article
              key={pillar.id}
              id={`${pillar.id}-panel`}
              role="tabpanel"
              aria-labelledby={pillar.id}
              initial={{ opacity: 0, y: 16, filter: 'blur(6px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -10, filter: 'blur(6px)' }}
              transition={{ duration: 0.5, ease: EASE }}
              className="rounded-[2rem] bg-white border border-[#D9CEC7] overflow-hidden shadow-premium grid grid-cols-1 lg:grid-cols-12"
            >
              <div className="lg:col-span-5 relative aspect-[16/11] lg:aspect-auto lg:min-h-[420px] bg-[#EAE1D6] overflow-hidden">
                <ParallaxImage src={pillar.img} alt={pillar.alt} className="absolute inset-0 block w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#140F0D]/75 via-[#140F0D]/10 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 sm:bottom-7 sm:left-7">
                  <span className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.16em] text-[#E8CBAE] font-semibold mb-1.5">
                    <pillar.icon className="w-4 h-4" />
                    Pillar {pillar.number}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-serif text-white font-medium leading-tight">
                    {pillar.title}
                  </h2>
                </div>
              </div>
              <div className="lg:col-span-7 p-5 sm:p-8 flex flex-col justify-center">
                <div className={`grid gap-5 ${pillar.groups.length > 1 ? 'md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2' : ''}`}>
                  {pillar.groups.map((group, gi) => (
                    <div key={gi}>
                      {group.title && (
                        <h3 className="text-lg font-serif text-[#2D201A] font-semibold mb-3">{group.title}</h3>
                      )}
                      <ul className={`grid gap-2.5 ${pillar.groups.length > 1 ? '' : 'sm:grid-cols-2'}`}>
                        {group.items.map((item) => (
                          <PointItem key={item.text} {...item} />
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </motion.article>
          </AnimatePresence>
        </div>
      </section>

      <section className="py-14 sm:py-20 bg-[#F2ECE5]">
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <div data-reveal className="relative rounded-3xl sm:rounded-[2.5rem] bg-[#191412] border border-[#3A2E28] p-8 sm:p-14 text-center shadow-velvet overflow-hidden">
            <div aria-hidden="true" className="absolute inset-0">
              <ParallaxImage src={ctaPathImg} alt="" className="block w-full h-full object-cover opacity-90" strength={8} />
              <div className="absolute inset-0 bg-gradient-to-b from-[#191412]/45 via-[#191412]/35 to-[#191412]/80" />
            </div>
            <div className="relative">
              <p className="text-base sm:text-lg md:text-xl font-serif text-[#E5DDD7] font-light leading-relaxed mb-7 max-w-2xl mx-auto">
                Whether you want to feel more balanced, strengthen your relationships, grow professionally or create a more empowering relationship with money, Platinum gives you a pathway to keep evolving.
              </p>
              <button
                type="button"
                onClick={onOpenBooking}
                className="btn btn-gold py-3.5 px-7 sm:px-9 text-xs sm:text-sm w-full sm:w-auto"
              >
                <span>Discover Platinum Lifetime Membership</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
