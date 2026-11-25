import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';

interface AnimatedCounterProps {
  target: number;
  suffix?: string;
}

function AnimatedCounter({ target, suffix = '' }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let frame = 0;
    const totalFrames = 36;
    const timer = window.setInterval(() => {
      frame += 1;
      const progress = Math.min(frame / totalFrames, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress >= 1) window.clearInterval(timer);
    }, 24);

    return () => window.clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref} className="tabular-nums">
      {value}
      {suffix}
    </span>
  );
}

export function AchievementsSection() {
  return (
    <section
      id="achievements"
      className="relative bg-gradient-to-b from-[#100707] via-[#300B10]/25 to-[#180909] py-24 lg:py-28"
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
            10 · EXPERIENCE &amp; STATS
          </p>
          <h2
            className="mt-3 font-display text-3xl font-bold tracking-tight text-[#F5EDED] sm:text-4xl"
            style={{ textWrap: 'balance' }}
          >
            Built With Dedicated Craft
          </h2>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="luxury-gloss-card luxury-gloss-card-hover rounded-2xl p-7"
          >
            <p className="font-display text-4xl font-bold sm:text-5xl">
              <span className="text-gradient-crimson">
                <AnimatedCounter target={3} suffix="+" />
              </span>
            </p>
            <p className="mt-3 font-display text-base font-semibold text-[#F5EDED]">
              Years Experience
            </p>
            <p className="mt-1.5 text-sm text-[#B9A8AA]">
              Hands-on web development and visual frontend refinement.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="luxury-gloss-card luxury-gloss-card-hover rounded-2xl p-7"
          >
            <p className="font-display text-4xl font-bold sm:text-5xl">
              <span className="text-gradient-crimson">Multiple</span>
            </p>
            <p className="mt-3 font-display text-base font-semibold text-[#F5EDED]">
              Creative Projects
            </p>
            <p className="mt-1.5 text-sm text-[#B9A8AA]">
              Luxury retail, construction, dining, salon, and studio sites.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
            className="luxury-gloss-card luxury-gloss-card-hover rounded-2xl p-7"
          >
            <p className="font-display text-4xl font-bold sm:text-5xl">
              <span className="text-gradient-crimson">
                <AnimatedCounter target={8} suffix="+" />
              </span>
            </p>
            <p className="mt-3 font-display text-base font-semibold text-[#F5EDED]">
              Core Skills
            </p>
            <p className="mt-1.5 text-sm text-[#B9A8AA]">
              HTML5, CSS3, JavaScript, WordPress, Elementor &amp; custom code.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
            className="luxury-gloss-card luxury-gloss-card-hover rounded-2xl p-7"
          >
            <p className="font-display text-4xl font-bold sm:text-5xl">
              <span className="text-gradient-crimson">
                <AnimatedCounter target={100} suffix="%" />
              </span>
            </p>
            <p className="mt-3 font-display text-base font-semibold text-[#F5EDED]">
              Responsive Focus
            </p>
            <p className="mt-1.5 text-sm text-[#B9A8AA]">
              Precision layouts across phones, tablets, and desktops.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
