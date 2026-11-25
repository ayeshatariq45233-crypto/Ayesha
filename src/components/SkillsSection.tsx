import { motion } from 'motion/react';
import {
  Code,
  Globe,
  Layers,
  Layout,
  Palette,
  Smartphone,
  Terminal,
  Zap,
} from 'lucide-react';
import { SKILLS_LIST, SkillItem } from '../data/portfolioData';

const ICON_MAP: Record<SkillItem['iconKey'], typeof Code> = {
  code: Code,
  palette: Palette,
  zap: Zap,
  globe: Globe,
  layers: Layers,
  terminal: Terminal,
  smartphone: Smartphone,
  layout: Layout,
};

export function SkillsSection() {
  return (
    <section id="skills" className="relative bg-[#100707] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col justify-between gap-6 md:flex-row md:items-end"
        >
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.2em] text-[#C62840]">
              04 · TECHNICAL SKILLS
            </p>
            <h2
              className="mt-3 font-display text-3xl font-bold tracking-tight text-[#F5EDED] sm:text-4xl"
              style={{ textWrap: 'balance' }}
            >
              Tools Behind My Creativity
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-[#B9A8AA]">
            Every project blends structured frontend engineering with polished
            WordPress and Elementor systems.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SKILLS_LIST.map((skill, idx) => {
            const Icon = ICON_MAP[skill.iconKey];
            return (
              <motion.article
                key={skill.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: idx * 0.05,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{ y: -4 }}
                className="luxury-gloss-card luxury-gloss-card-hover group relative flex flex-col justify-between overflow-hidden rounded-2xl p-6"
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#C62840]/0 blur-2xl transition-all duration-300 group-hover:bg-[#C62840]/25"
                />

                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#C62840]/35 bg-[#300B10]/80 text-[#C62840] transition-colors group-hover:border-[#C62840]/70 group-hover:text-[#F5EDED]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="font-mono text-xs font-medium text-[#B9A8AA] tabular-nums">
                      {skill.level}%
                    </span>
                  </div>

                  <h3 className="mt-5 font-display text-lg font-semibold text-[#F5EDED]">
                    {skill.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#B9A8AA]">
                    {skill.description}
                  </p>
                </div>

                <div className="mt-6">
                  <div className="h-1.5 w-full overflow-hidden rounded-full bg-[#100707]">
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: skill.level / 100 }}
                      viewport={{ once: true, amount: 0.4 }}
                      transition={{
                        duration: 0.9,
                        delay: 0.14 + idx * 0.04,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      style={{ transformOrigin: 'left' }}
                      className="h-full w-full rounded-full bg-gradient-to-r from-[#8B1828] via-[#C62840] to-[#F5EDED]/85"
                    />
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
