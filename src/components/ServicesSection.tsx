import { motion } from 'motion/react';
import { Code2, Globe, Layers, Monitor, Tablet, Zap } from 'lucide-react';
import { SERVICES_LIST, ServiceItem } from '../data/portfolioData';

const SERVICE_ICONS: Record<ServiceItem['iconKey'], typeof Monitor> = {
  monitor: Monitor,
  globe: Globe,
  layers: Layers,
  code2: Code2,
  zap: Zap,
  tablet: Tablet,
};

export function ServicesSection() {
  return (
    <section
      id="services"
      className="relative bg-gradient-to-b from-[#180909] via-[#300B10]/25 to-[#180909] py-24 lg:py-32"
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
            05 · MY SERVICES
          </p>
          <h2
            className="mt-3 font-display text-3xl font-bold tracking-tight text-[#F5EDED] sm:text-4xl"
            style={{ textWrap: 'balance' }}
          >
            What I Can Create For You
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#B9A8AA]">
            Tailored web services crafted with precision, dark-luxury visual
            polish, and dependable responsiveness.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES_LIST.map((service, idx) => {
            const Icon = SERVICE_ICONS[service.iconKey];
            return (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: idx * 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{ y: -5 }}
                className="luxury-gloss-card luxury-gloss-card-hover group relative flex h-full flex-col justify-between rounded-2xl p-7"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#C62840]/40 bg-gradient-to-br from-[#4A1018] to-[#300B10] text-[#F5EDED] transition-transform duration-200 group-hover:scale-105">
                      <Icon className="h-5 w-5 text-[#C62840] transition-colors group-hover:text-[#F5EDED]" />
                    </div>
                    <span className="font-mono text-xs font-medium text-[#B9A8AA] tabular-nums">
                      {service.number}
                    </span>
                  </div>

                  <h3 className="mt-6 font-display text-xl font-semibold text-[#F5EDED]">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#B9A8AA]">
                    {service.description}
                  </p>
                </div>

                <div className="mt-6 h-px w-full bg-gradient-to-r from-[#C62840]/60 via-[#8B1828]/30 to-transparent opacity-70 transition-opacity group-hover:opacity-100" />
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
