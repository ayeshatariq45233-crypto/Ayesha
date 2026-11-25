import { useState } from 'react';
import { motion } from 'motion/react';
import {
  Check,
  LayoutGrid,
  Monitor,
  Sliders,
  Smartphone,
  Tablet,
} from 'lucide-react';
import { WORDPRESS_FEATURES } from '../data/portfolioData';

type BreakpointMode = 'desktop' | 'tablet' | 'mobile';
type InspectorLayer = 'layout' | 'typography' | 'custom-css';

export function WordPressSection() {
  const [breakpoint, setBreakpoint] = useState<BreakpointMode>('desktop');
  const [layer, setLayer] = useState<InspectorLayer>('layout');

  const previewWidthClass =
    breakpoint === 'desktop'
      ? 'w-full'
      : breakpoint === 'tablet'
      ? 'w-[78%] mx-auto'
      : 'w-[54%] mx-auto';

  return (
    <section
      id="wordpress"
      className="relative overflow-hidden bg-gradient-to-b from-[#180909] via-[#300B10]/30 to-[#180909] py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Left Column: Copy & 8 Features */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <p className="text-xs font-semibold tracking-[0.2em] text-[#C62840]">
              07 · WORDPRESS &amp; ELEMENTOR
            </p>
            <h2
              className="mt-3 font-display text-3xl font-bold leading-[1.12] tracking-tight text-[#F5EDED] sm:text-4xl"
              style={{ textWrap: 'balance' }}
            >
              Beautiful Websites.
              <br />
              <span className="text-gradient-crimson">Powerful WordPress.</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#B9A8AA]">
              I combine the flexibility of WordPress and Elementor with custom
              CSS and responsive fine-tuning to deliver refined websites that are
              effortless to update and manage.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {WORDPRESS_FEATURES.map((cap) => (
                <div
                  key={cap.title}
                  className="luxury-gloss-card luxury-gloss-card-hover rounded-2xl p-4"
                >
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 shrink-0 text-[#C62840]" />
                    <h3 className="font-display text-sm font-semibold text-[#F5EDED]">
                      {cap.title}
                    </h3>
                  </div>
                  <p className="mt-1.5 text-xs leading-relaxed text-[#B9A8AA]">
                    {cap.detail}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Luxury Burgundy Elementor Studio Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative lg:col-span-7"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-3 rounded-3xl bg-gradient-to-tr from-[#8B1828]/35 via-transparent to-[#C62840]/20 blur-2xl"
            />
            <div className="luxury-gloss-card relative rounded-3xl p-4 sm:p-6">
              {/* Toolbar */}
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#8B1828]/40 pb-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#C62840]/50 bg-gradient-to-br from-[#8B1828] to-[#4A1018] text-[#F5EDED]">
                    <LayoutGrid className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-display text-sm font-semibold text-[#F5EDED]">
                      WordPress &amp; Elementor Studio
                    </p>
                    <p className="text-xs text-[#B9A8AA]">
                      Custom Layout &amp; Breakpoint Inspector
                    </p>
                  </div>
                </div>

                <div
                  role="group"
                  aria-label="Preview responsive viewport"
                  className="flex items-center gap-1 rounded-xl border border-[#8B1828]/40 bg-[#100707] p-1"
                >
                  {(
                    [
                      { key: 'desktop', icon: Monitor, label: 'Desktop' },
                      { key: 'tablet', icon: Tablet, label: 'Tablet' },
                      { key: 'mobile', icon: Smartphone, label: 'Mobile' },
                    ] as const
                  ).map(({ key, icon: Icon, label }) => (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setBreakpoint(key)}
                      aria-label={`Switch preview to ${label}`}
                      aria-pressed={breakpoint === key}
                      className={`flex h-9 w-9 items-center justify-center rounded-lg transition-colors ${
                        breakpoint === key
                          ? 'bg-gradient-to-r from-[#8B1828] to-[#C62840] text-[#F5EDED]'
                          : 'text-[#B9A8AA] hover:text-[#F5EDED]'
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Workspace Split */}
              <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-12">
                <div className="space-y-3 rounded-2xl border border-[#8B1828]/35 bg-[#100707]/85 p-4 sm:col-span-4">
                  <p className="flex items-center gap-2 text-xs font-semibold text-[#F5EDED]">
                    <Sliders className="h-3.5 w-3.5 text-[#C62840]" />
                    Dashboard Layers
                  </p>

                  <div className="space-y-2">
                    {(
                      [
                        {
                          key: 'layout',
                          label: 'Elementor Layouts',
                          note: 'Grid Containers · Gap 24px',
                        },
                        {
                          key: 'typography',
                          label: 'Theme Customization',
                          note: 'Global Scale · Luxury Serif/Sans',
                        },
                        {
                          key: 'custom-css',
                          label: 'Custom CSS Layer',
                          note: 'Glossy Cards · Crimson Glow',
                        },
                      ] as const
                    ).map((item) => (
                      <button
                        key={item.key}
                        type="button"
                        onClick={() => setLayer(item.key)}
                        className={`w-full rounded-xl border p-3 text-left transition-all ${
                          layer === item.key
                            ? 'border-[#C62840] bg-[#4A1018]/65'
                            : 'border-[#8B1828]/30 bg-[#180909]/80 hover:border-[#8B1828]/70'
                        }`}
                      >
                        <p className="text-xs font-semibold text-[#F5EDED]">
                          {item.label}
                        </p>
                        <p className="mt-0.5 text-[11px] text-[#B9A8AA]">
                          {item.note}
                        </p>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Live Canvas Mockup */}
                <div className="flex items-center justify-center rounded-2xl border border-[#8B1828]/35 bg-[#100707]/80 p-4 sm:col-span-8">
                  <div
                    className={`rounded-2xl border border-[#C62840]/35 bg-[#180909] p-4 transition-all duration-300 ${previewWidthClass}`}
                  >
                    <div className="flex items-center justify-between border-b border-[#8B1828]/35 pb-3">
                      <span className="font-display text-xs font-bold tracking-wider text-[#F5EDED]">
                        ATELIER THEME
                      </span>
                      <div className="flex gap-2.5 text-[10px] text-[#B9A8AA]">
                        <span>Home</span>
                        <span>Works</span>
                        <span>Inquire</span>
                      </div>
                    </div>

                    <div
                      className={`mt-3 rounded-xl border p-4 transition-colors duration-300 ${
                        layer === 'layout'
                          ? 'border-[#C62840]/60 bg-[#300B10]/70'
                          : layer === 'typography'
                          ? 'border-[#F5EDED]/35 bg-[#300B10]/60'
                          : 'border-[#C62840]/80 bg-gradient-to-br from-[#4A1018]/80 to-[#180909]'
                      }`}
                    >
                      <p className="text-[10px] font-semibold tracking-wider text-[#C62840]">
                        {layer === 'layout'
                          ? 'ELEMENTOR FLEX CONTAINER'
                          : layer === 'typography'
                          ? 'GLOBAL TYPOGRAPHY SCALE'
                          : 'CUSTOM CSS REFLECTION'}
                      </p>
                      <p className="mt-1.5 font-display text-base font-semibold text-[#F5EDED]">
                        Bespoke Landing Experience
                      </p>
                      <p className="mt-1 text-[11px] leading-relaxed text-[#B9A8AA]">
                        Editable WordPress sections paired with custom CSS polish
                        and responsive tuning.
                      </p>
                    </div>

                    <div
                      className={`mt-3 grid gap-2.5 ${
                        breakpoint === 'mobile' ? 'grid-cols-1' : 'grid-cols-3'
                      }`}
                    >
                      {['Theme Setup', 'Plugins', 'Custom CSS'].map((card) => (
                        <div
                          key={card}
                          className="rounded-xl border border-[#8B1828]/35 bg-[#100707]/85 p-2.5"
                        >
                          <div className="h-1.5 w-8 rounded-full bg-gradient-to-r from-[#8B1828] to-[#C62840]" />
                          <p className="mt-2 text-[11px] font-medium text-[#F5EDED]">
                            {card}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
