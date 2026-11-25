import { useState } from 'react';
import { motion } from 'motion/react';
import { JOURNEY_MILESTONES } from '../data/portfolioData';

export function JourneySection() {
  const [activeId, setActiveId] = useState<string>(JOURNEY_MILESTONES[0].id);

  return (
    <section
      id="journey"
      className="relative bg-gradient-to-b from-[#180909] via-[#300B10]/30 to-[#100707] py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl"
        >
          <p className="text-xs font-semibold tracking-[0.2em] text-[#C62840]">
            03 · MY JOURNEY
          </p>
          <h2
            className="mt-3 font-display text-3xl font-bold tracking-tight text-[#F5EDED] sm:text-4xl"
            style={{ textWrap: 'balance' }}
          >
            My Journey Into Digital Creation
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#B9A8AA]">
            Every milestone shaped how I approach modern layouts, visual polish,
            and clean frontend engineering today.
          </p>
        </motion.div>

        <div className="relative mt-14">
          {/* Glowing vertical crimson spine */}
          <div
            aria-hidden="true"
            className="absolute bottom-6 left-5 top-6 w-px bg-gradient-to-b from-[#8B1828] via-[#C62840] to-[#4A1018] opacity-60 md:left-1/2 md:-translate-x-1/2"
          />

          <div className="space-y-8 md:space-y-10">
            {JOURNEY_MILESTONES.map((item, idx) => {
              const isLeft = idx % 2 === 0;
              const isSelected = activeId === item.id;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.55,
                    delay: idx * 0.06,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="relative grid grid-cols-1 items-center md:grid-cols-2 md:gap-12"
                >
                  {/* Crimson Timeline Node */}
                  <button
                    type="button"
                    onClick={() => setActiveId(item.id)}
                    aria-label={`Select milestone ${item.step}: ${item.title}`}
                    className={`absolute left-5 top-7 z-10 flex h-5 w-5 -translate-x-1/2 items-center justify-center rounded-full border transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5EDED] md:left-1/2 md:top-1/2 md:-translate-y-1/2 ${
                      isSelected
                        ? 'scale-125 border-[#F5EDED] bg-[#8B1828] shadow-[0_0_24px_rgba(198,40,64,0.85)]'
                        : 'border-[#C62840]/70 bg-[#180909] hover:border-[#F5EDED]'
                    }`}
                  >
                    <span
                      className={`h-2 w-2 rounded-full ${
                        isSelected ? 'bg-[#F5EDED]' : 'bg-[#C62840]'
                      }`}
                    />
                  </button>

                  <div
                    className={`pl-12 md:pl-0 ${
                      isLeft ? 'md:col-start-1 md:pr-8' : 'md:col-start-2 md:pl-8'
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => setActiveId(item.id)}
                      className={`luxury-gloss-card luxury-gloss-card-hover w-full rounded-2xl p-6 text-left ${
                        isSelected
                          ? 'border-[#C62840]/70 shadow-[0_20px_55px_-20px_rgba(198,40,64,0.5)]'
                          : ''
                      }`}
                    >
                      <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
                        <span className="font-mono font-semibold text-[#C62840] tabular-nums">
                          {item.step}
                        </span>
                        <span className="text-[#B9A8AA]">{item.subtitle}</span>
                      </div>

                      <h3 className="mt-2.5 font-display text-lg font-semibold text-[#F5EDED]">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-sm leading-relaxed text-[#B9A8AA]">
                        {item.summary}
                      </p>
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
