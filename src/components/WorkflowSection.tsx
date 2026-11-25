import { motion } from 'motion/react';
import { WORK_PROCESS_STEPS } from '../data/portfolioData';

export function WorkflowSection() {
  return (
    <section
      id="workflow"
      className="relative bg-gradient-to-b from-[#180909] to-[#100707] py-24 lg:py-32"
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
            09 · MY WORK PROCESS
          </p>
          <h2
            className="mt-3 font-display text-3xl font-bold tracking-tight text-[#F5EDED] sm:text-4xl"
            style={{ textWrap: 'balance' }}
          >
            From Idea to Experience
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#B9A8AA]">
            A focused five-stage cadence designed to turn raw concepts into
            polished, responsive digital experiences.
          </p>
        </motion.div>

        <div className="relative mt-14">
          {/* Desktop horizontal glowing line */}
          <div
            aria-hidden="true"
            className="absolute left-8 right-8 top-6 hidden h-px bg-gradient-to-r from-[#8B1828] via-[#C62840] to-[#4A1018] lg:block"
          />

          {/* Mobile vertical glowing line */}
          <div
            aria-hidden="true"
            className="absolute bottom-8 left-6 top-8 w-px bg-gradient-to-b from-[#8B1828] via-[#C62840] to-[#4A1018] lg:hidden"
          />

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-5 lg:gap-6">
            {WORK_PROCESS_STEPS.map((step, idx) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: idx * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="relative pl-16 lg:pl-0"
              >
                <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-full border border-[#C62840]/60 bg-gradient-to-br from-[#4A1018] to-[#180909] font-mono text-sm font-semibold text-[#F5EDED] shadow-[0_0_24px_-4px_rgba(198,40,64,0.75)] tabular-nums lg:relative lg:mb-6">
                  {step.number}
                </div>

                <div className="luxury-gloss-card luxury-gloss-card-hover rounded-2xl p-6">
                  <h3 className="font-display text-lg font-semibold text-[#F5EDED]">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#B9A8AA]">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
