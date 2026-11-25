import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowDownRight } from 'lucide-react';
import { ABOUT_IMAGE } from '../data/portfolioData';
import { MediaImage } from './MediaImage';

const FEATURE_PILLARS = [
  {
    number: '01',
    title: 'Creative Development',
    detail:
      'Blending editorial aesthetic direction with clean, dependable frontend engineering.',
  },
  {
    number: '02',
    title: 'Responsive Design',
    detail:
      'Fluid layouts refined across smartphones, tablets, laptops, and large monitors.',
  },
  {
    number: '03',
    title: 'Custom Experiences',
    detail:
      'Tailored WordPress, Elementor, and from-scratch builds shaped around each brand.',
  },
];

export function AboutSection() {
  const [activePillar, setActivePillar] = useState<string>('01');

  const scrollToJourney = () => {
    const el = document.getElementById('journey');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="about"
      className="relative bg-gradient-to-b from-[#100707] via-[#180909] to-[#180909] py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Top Asymmetric Editorial Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 gap-6 border-b border-[#8B1828]/40 pb-10 lg:grid-cols-12 lg:items-end"
        >
          <div className="lg:col-span-4">
            <p className="text-xs font-semibold tracking-[0.22em] text-[#C62840]">
              02 · ABOUT ME
            </p>
            <p className="mt-2 text-sm text-[#B9A8AA]">
              Ayesha · Web Developer &amp; Designer
            </p>
          </div>

          <div className="lg:col-span-8">
            <h2
              className="font-display text-3xl font-bold leading-[1.08] tracking-tight text-[#F5EDED] sm:text-5xl"
              style={{ textWrap: 'balance' }}
            >
              More Than Websites.{' '}
              <span className="text-gradient-crimson">
                I Create Digital Experiences.
              </span>
            </h2>
          </div>
        </motion.div>

        {/* 3-Column Offset Monolith Composition */}
        <div className="mt-12 grid grid-cols-1 items-stretch gap-8 lg:mt-16 lg:grid-cols-12 lg:gap-8">
          {/* Column 1: Glossy Story Monolith + CTA */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="luxury-gloss-card flex flex-col justify-between rounded-3xl p-7 sm:p-9 lg:col-span-5"
          >
            <div>
              <p className="font-mono text-xs font-medium tracking-widest text-[#C62840]">
                PROFILE &amp; APPROACH
              </p>
              <p className="mt-5 text-base leading-[1.75] text-[#B9A8AA]">
                I'm Ayesha, a passionate Web Developer with 3 years of
                experience in building modern, responsive, and visually engaging
                websites. I work with HTML, CSS, JavaScript, WordPress, and
                Elementor, transforming ideas into polished digital experiences. I
                also love building custom websites from scratch with clean code
                and creative layouts.
              </p>
            </div>

            <div className="mt-8 border-t border-[#8B1828]/40 pt-7">
              <div className="mb-6 flex items-baseline justify-between">
                <span className="text-xs font-medium uppercase tracking-wider text-[#B9A8AA]">
                  Experience
                </span>
                <span className="font-display text-2xl font-bold text-[#F5EDED] tabular-nums">
                  3+ Years
                </span>
              </div>

              <button
                type="button"
                onClick={scrollToJourney}
                className="btn-luxury-crimson inline-flex min-h-[50px] w-full items-center justify-between rounded-xl px-6 py-3 text-xs font-semibold tracking-[0.14em] text-[#F5EDED] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5EDED]"
              >
                <span>DISCOVER MY JOURNEY</span>
                <ArrowDownRight className="h-4 w-4" />
              </button>
            </div>
          </motion.div>

          {/* Column 2: Sculptural Arched/Rounded Crimson Portrait Frame (Vertically Offset) */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.68, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="relative lg:col-span-4 lg:-mt-8"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-3 rounded-[2.25rem] bg-gradient-to-b from-[#C62840]/30 via-[#8B1828]/20 to-transparent blur-2xl"
            />
            <div className="relative h-full min-h-[430px] overflow-hidden rounded-[2rem] border border-[#C62840]/45 bg-[#300B10] p-2 shadow-[0_28px_70px_-20px_rgba(139,24,40,0.65)]">
              <div className="relative h-full w-full overflow-hidden rounded-[1.55rem]">
                <MediaImage
                  src={ABOUT_IMAGE}
                  alt="Editorial portrait of Ayesha inside her luxury dark burgundy web studio"
                  fallbackTitle="Ayesha — Web Developer"
                  className="h-full w-full object-cover object-top"
                  aspectClassName="h-full min-h-[410px]"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#100707]/90 via-[#300B10]/15 to-transparent"
                />
                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-3">
                  <div>
                    <p className="text-[11px] font-semibold tracking-widest text-[#C62840]">
                      AYESHA STUDIO
                    </p>
                    <p className="mt-0.5 font-display text-base font-semibold text-[#F5EDED]">
                      Code &amp; Visual Direction
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Column 3: Interactive Glossy Feature Stack */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, delay: 0.14, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-between gap-4 lg:col-span-3"
          >
            {FEATURE_PILLARS.map((pillar) => {
              const isSelected = activePillar === pillar.number;
              return (
                <button
                  key={pillar.number}
                  type="button"
                  onClick={() => setActivePillar(pillar.number)}
                  onMouseEnter={() => setActivePillar(pillar.number)}
                  className={`luxury-gloss-card luxury-gloss-card-hover flex flex-1 flex-col justify-between rounded-2xl p-6 text-left transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C62840] ${
                    isSelected
                      ? 'border-[#C62840]/75 shadow-[0_18px_46px_-18px_rgba(198,40,64,0.55)]'
                      : 'opacity-85 hover:opacity-100'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-semibold text-[#C62840] tabular-nums">
                      {pillar.number}
                    </span>
                    <span
                      className={`h-1.5 w-8 rounded-full transition-colors ${
                        isSelected
                          ? 'bg-gradient-to-r from-[#8B1828] to-[#C62840]'
                          : 'bg-[#4A1018]'
                      }`}
                    />
                  </div>

                  <div className="mt-4">
                    <h3 className="font-display text-lg font-semibold text-[#F5EDED]">
                      {pillar.title}
                    </h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-[#B9A8AA]">
                      {pillar.detail}
                    </p>
                  </div>
                </button>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
