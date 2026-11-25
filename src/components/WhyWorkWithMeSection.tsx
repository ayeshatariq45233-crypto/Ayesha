import { motion } from 'motion/react';
import {
  BookOpen,
  Code,
  Compass,
  Eye,
  Layers,
  MessageSquare,
  Smartphone,
  Wind,
} from 'lucide-react';
import { AdvantageItem, WHY_CHOOSE_ME } from '../data/portfolioData';

const ADVANTAGE_ICONS: Record<AdvantageItem['iconKey'], typeof Compass> = {
  compass: Compass,
  layers: Layers,
  code: Code,
  smartphone: Smartphone,
  eye: Eye,
  wind: Wind,
  message: MessageSquare,
  book: BookOpen,
};

export function WhyWorkWithMeSection() {
  return (
    <section id="why-me" className="relative bg-[#180909] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl"
        >
          <p className="text-xs font-semibold tracking-[0.2em] text-[#C62840]">
            11 · WHY CHOOSE ME
          </p>
          <h2
            className="mt-3 font-display text-3xl font-bold leading-[1.12] tracking-tight text-[#F5EDED] sm:text-4xl"
            style={{ textWrap: 'balance' }}
          >
            Built With Passion.
            <br />
            <span className="text-gradient-crimson">Finished With Precision.</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#B9A8AA]">
            Intentional creative direction paired with clean execution and
            dependable communication on every build.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {WHY_CHOOSE_ME.map((item, idx) => {
            const Icon = ADVANTAGE_ICONS[item.iconKey];
            const isEven = idx % 2 === 0;
            return (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.48,
                  delay: idx * 0.04,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`luxury-gloss-card luxury-gloss-card-hover flex items-start gap-5 rounded-2xl p-6 ${
                  isEven ? '' : 'md:translate-y-2'
                }`}
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#C62840]/40 bg-gradient-to-br from-[#4A1018] to-[#300B10] text-[#C62840]">
                  <Icon className="h-5 w-5" />
                </div>

                <div>
                  <div className="flex items-center gap-2.5 text-xs text-[#B9A8AA]">
                    <span className="font-mono font-semibold text-[#C62840] tabular-nums">
                      {item.number}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>Quality Standard</span>
                  </div>
                  <h3 className="mt-1.5 font-display text-lg font-semibold text-[#F5EDED]">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-[#B9A8AA]">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
