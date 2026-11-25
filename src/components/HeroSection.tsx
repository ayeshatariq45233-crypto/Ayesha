import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useScroll, useTransform } from 'motion/react';
import { ArrowDownRight, ArrowRight, Award, Code2, Layers } from 'lucide-react';
import { HERO_IMAGE, HERO_ROLES } from '../data/portfolioData';
import { MediaImage } from './MediaImage';

export function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);
  const { scrollY } = useScroll();
  const imageParallax = useTransform(scrollY, [0, 700], [0, 60]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % HERO_ROLES.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gradient-to-b from-[#180909] via-[#100707] to-[#100707] pt-28 pb-20 lg:pt-32 lg:pb-24"
    >
      {/* Subtle architectural grid & ambient crimson spotlight */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="bg-luxury-grid absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_at_top_right,black_25%,transparent_75%)]" />
        <div className="absolute -right-28 top-10 h-[36rem] w-[36rem] rounded-full bg-[#8B1828]/25 blur-[160px]" />
        <div className="absolute -left-24 bottom-12 h-[26rem] w-[26rem] rounded-full bg-[#4A1018]/30 blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-10">
        {/* Top Editorial Masthead Strip */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center justify-between gap-4 border-b border-[#8B1828]/40 pb-4"
        >
          <p className="text-xs font-semibold tracking-[0.24em] text-[#C62840]">
            INDEPENDENT WEB DEVELOPER
          </p>

          <div className="flex items-center gap-3 text-xs sm:text-sm">
            <span className="text-[#B9A8AA]">Specialty</span>
            <span aria-hidden="true" className="text-[#8B1828]">
              /
            </span>
            <div className="relative h-5 min-w-[180px] overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.span
                  key={HERO_ROLES[roleIndex]}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute left-0 top-0 whitespace-nowrap font-semibold text-[#F5EDED]"
                >
                  {HERO_ROLES[roleIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        {/* Monumental Staggered Editorial Headline */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.72, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 lg:mt-10"
        >
          <h1
            className="font-display text-4xl font-bold leading-[0.98] tracking-tight text-[#F5EDED] sm:text-6xl lg:text-[4.65rem] xl:text-[5.25rem]"
            style={{ textWrap: 'balance' }}
          >
            <span className="block">Digital Experiences.</span>
            <span className="text-gradient-crimson mt-1.5 block lg:pl-[12%]">
              Crafted With Purpose.
            </span>
          </h1>
        </motion.div>

        {/* Asymmetric Lower Composition: Offset Copy Rail + Panoramic Studio Stage */}
        <div className="mt-10 grid grid-cols-1 items-start gap-10 lg:mt-14 lg:grid-cols-12 lg:gap-10">
          {/* Left Rail: Intro Copy + Glossy Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-between lg:col-span-4 lg:pt-6"
          >
            <p className="text-base leading-relaxed text-[#B9A8AA] sm:text-lg">
              I'm Ayesha, a Web Developer creating premium websites through
              creativity, clean code, and thoughtful design.
            </p>

            <div className="mt-8 flex flex-col gap-3.5 sm:flex-row lg:flex-col">
              <button
                type="button"
                onClick={() => scrollToSection('projects')}
                className="btn-luxury-crimson inline-flex min-h-[52px] w-full items-center justify-between gap-3 rounded-xl px-6 py-3.5 text-xs font-semibold tracking-[0.14em] text-[#F5EDED] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5EDED] sm:w-auto lg:w-full"
              >
                <span>EXPLORE MY WORK</span>
                <ArrowRight className="h-4 w-4 shrink-0" />
              </button>

              <button
                type="button"
                onClick={() => scrollToSection('contact')}
                className="btn-luxury-outline inline-flex min-h-[52px] w-full items-center justify-between gap-3 rounded-xl px-6 py-3.5 text-xs font-semibold tracking-[0.14em] text-[#F5EDED] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C62840] sm:w-auto lg:w-full"
              >
                <span>LET'S BUILD SOMETHING</span>
                <ArrowDownRight className="h-4 w-4 shrink-0 text-[#C62840]" />
              </button>
            </div>

            <div className="mt-10 hidden border-t border-[#8B1828]/35 pt-5 lg:block">
              <button
                type="button"
                onClick={() => scrollToSection('about')}
                className="group inline-flex items-center gap-2 text-xs font-medium tracking-wider text-[#B9A8AA] transition-colors hover:text-[#F5EDED]"
              >
                <span>SCROLL TO DISCOVER</span>
                <ArrowDownRight className="h-3.5 w-3.5 text-[#C62840] transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
              </button>
            </div>
          </motion.div>

          {/* Right Stage: Panoramic Luxury Crimson Studio Visual + Docked Floating Cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.78, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="relative lg:col-span-8"
          >
            {/* Cinematic red aura behind image */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-4 rounded-[2rem] bg-gradient-to-tr from-[#8B1828]/45 via-[#C62840]/20 to-[#4A1018]/35 blur-3xl"
            />

            <div className="relative overflow-hidden rounded-[1.75rem] border border-[#C62840]/45 bg-[#180909] shadow-[0_32px_90px_-24px_rgba(139,24,40,0.65)]">
              <motion.div
                style={{ y: imageParallax }}
                className="aspect-[16/10] w-full overflow-hidden sm:aspect-[16/9]"
              >
                <MediaImage
                  src={HERO_IMAGE}
                  alt="Ayesha working on a laptop in a luxury dark burgundy creative workspace"
                  fallbackTitle="Ayesha — Independent Web Developer"
                  className="h-full w-full scale-105 object-cover"
                  aspectClassName="aspect-[16/10] sm:aspect-[16/9]"
                />
              </motion.div>

              {/* Editorial dark crimson atmosphere vignette */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#100707] via-[#300B10]/20 to-transparent"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#100707]/60 via-transparent to-transparent"
              />

              {/* Docked Floating Glossy Capabilities Strip */}
              <div className="relative z-10 grid grid-cols-1 gap-3 p-4 sm:grid-cols-3 sm:p-5 lg:absolute lg:inset-x-5 lg:bottom-5 lg:p-0">
                <motion.div
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.2 }}
                  className="luxury-gloss-card flex items-center gap-3.5 rounded-2xl px-4 py-3.5"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-[#C62840]/45 bg-[#4A1018]/85 text-[#C62840]">
                    <Award className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-display text-xs font-semibold tracking-wider text-[#F5EDED] tabular-nums">
                      03+ YEARS EXPERIENCE
                    </p>
                    <p className="text-[11px] text-[#B9A8AA]">
                      Creative Web Studio
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.2 }}
                  className="luxury-gloss-card flex items-center gap-3.5 rounded-2xl px-4 py-3.5"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-[#C62840]/45 bg-[#4A1018]/85 text-[#C62840]">
                    <Layers className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-display text-xs font-semibold tracking-wider text-[#F5EDED]">
                      WORDPRESS &amp; ELEMENTOR
                    </p>
                    <p className="text-[11px] text-[#B9A8AA]">
                      Custom Page Systems
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.2 }}
                  className="luxury-gloss-card flex items-center gap-3.5 rounded-2xl px-4 py-3.5"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-[#C62840]/45 bg-[#4A1018]/85 text-[#C62840]">
                    <Code2 className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-display text-xs font-semibold tracking-wider text-[#F5EDED]">
                      CUSTOM WEB DEVELOPMENT
                    </p>
                    <p className="text-[11px] text-[#B9A8AA]">
                      HTML · CSS · JavaScript
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
