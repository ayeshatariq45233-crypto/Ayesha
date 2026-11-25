import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { DEMO_TESTIMONIALS } from '../data/portfolioData';

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goPrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? DEMO_TESTIMONIALS.length - 1 : prev - 1
    );
  };

  const goNext = () => {
    setCurrentIndex((prev) =>
      prev === DEMO_TESTIMONIALS.length - 1 ? 0 : prev + 1
    );
  };

  const current = DEMO_TESTIMONIALS[currentIndex];

  return (
    <section
      id="testimonials"
      className="relative bg-gradient-to-b from-[#100707] to-[#180909] py-24 lg:py-32"
    >
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <p className="text-xs font-semibold tracking-[0.2em] text-[#C62840]">
            12 · TESTIMONIALS
          </p>
          <h2
            className="mt-3 font-display text-3xl font-bold tracking-tight text-[#F5EDED] sm:text-4xl"
            style={{ textWrap: 'balance' }}
          >
            Client Impressions
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-[#B9A8AA]">
            Demo placeholder slider — sample entries ready to be replaced with
            verified client reviews.
          </p>
        </motion.div>

        <div className="relative mt-12">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-4 rounded-3xl bg-gradient-to-r from-[#8B1828]/25 via-[#C62840]/15 to-[#4A1018]/25 blur-2xl"
          />

          <div className="luxury-gloss-card relative overflow-hidden rounded-3xl p-8 sm:p-12">
            <div className="flex items-center justify-between gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#C62840]/40 bg-[#4A1018]/80 text-[#C62840]">
                <Quote className="h-5 w-5" />
              </div>

              <span className="text-xs font-medium text-[#B9A8AA]">
                Placeholder Content · Demo Slider
              </span>
            </div>

            <div className="mt-8 min-h-[150px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                >
                  <blockquote className="font-display text-xl leading-relaxed text-[#F5EDED] sm:text-2xl">
                    “{current.quote}”
                  </blockquote>

                  <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-[#8B1828]/40 pt-6">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#C62840]/55 bg-gradient-to-br from-[#8B1828] to-[#300B10] font-display text-sm font-semibold text-[#F5EDED]">
                        {current.initials}
                      </div>
                      <div>
                        <p className="font-display text-base font-semibold text-[#F5EDED]">
                          {current.authorLabel}
                        </p>
                        <p className="text-xs text-[#B9A8AA]">
                          {current.roleLabel}
                        </p>
                      </div>
                    </div>

                    <p className="text-xs font-medium text-[#C62840]">
                      {current.projectCategory}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Slider Navigation */}
            <div className="mt-8 flex items-center justify-between">
              <div className="flex items-center gap-2">
                {DEMO_TESTIMONIALS.map((item, idx) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setCurrentIndex(idx)}
                    aria-label={`View demo testimonial ${idx + 1}`}
                    className={`h-2 rounded-full transition-all duration-200 ${
                      idx === currentIndex
                        ? 'w-8 bg-gradient-to-r from-[#8B1828] to-[#C62840]'
                        : 'w-2 bg-[#4A1018] hover:bg-[#8B1828]'
                    }`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={goPrev}
                  aria-label="Previous testimonial"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#8B1828]/50 bg-[#100707]/85 text-[#F5EDED] transition-colors hover:border-[#C62840] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C62840]"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={goNext}
                  aria-label="Next testimonial"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#8B1828]/50 bg-[#100707]/85 text-[#F5EDED] transition-colors hover:border-[#C62840] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C62840]"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
