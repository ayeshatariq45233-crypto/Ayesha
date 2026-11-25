import { useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Code2, Eye, Layers } from 'lucide-react';
import { CUSTOM_CODE_FEATURES } from '../data/portfolioData';

type CodeTab = 'html' | 'css' | 'js';

const CODE_SNIPPETS: Record<CodeTab, { filename: string; lines: string[] }> = {
  html: {
    filename: 'index.html',
    lines: [
      '<article class="luxury-panel">',
      '  <span class="kicker">BESPOKE CODE</span>',
      '  <h2>Built From Scratch</h2>',
      '  <p>Clean semantic architecture without bloat.</p>',
      '  <button class="crimson-cta">Preview State</button>',
      '</article>',
    ],
  },
  css: {
    filename: 'styles.css',
    lines: [
      '.luxury-panel {',
      '  background: linear-gradient(155deg, #4A1018, #180909);',
      '  border: 1px solid rgba(198, 40, 64, 0.35);',
      '  border-radius: 1.25rem;',
      '  transition: transform 240ms cubic-bezier(0.16, 1, 0.3, 1);',
      '}',
      '.luxury-panel:hover { transform: translateY(-4px); }',
    ],
  },
  js: {
    filename: 'interactions.js',
    lines: [
      'const cta = document.querySelector(".crimson-cta");',
      'const panel = document.querySelector(".luxury-panel");',
      '',
      'cta?.addEventListener("click", () => {',
      '  panel?.classList.toggle("is-illuminated");',
      '  syncInteractiveState();',
      '});',
    ],
  },
};

export function CustomCodeSection() {
  const [activeTab, setActiveTab] = useState<CodeTab>('html');
  const [previewIlluminated, setPreviewIlluminated] = useState(false);

  return (
    <section id="custom-code" className="relative bg-[#100707] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Left Side: Luxury Coding Studio Editor + Live Browser Preview */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="order-2 lg:order-1 lg:col-span-7"
          >
            <div className="luxury-gloss-card grid grid-cols-1 gap-4 rounded-3xl p-4 sm:grid-cols-12 sm:p-5">
              {/* Stylish Dark Red Code Editor */}
              <div className="flex flex-col rounded-2xl border border-[#8B1828]/40 bg-[#100707] sm:col-span-7">
                <div className="flex items-center justify-between border-b border-[#8B1828]/35 px-3 py-2.5">
                  <div className="flex items-center gap-1.5">
                    {(Object.keys(CODE_SNIPPETS) as CodeTab[]).map((tab) => (
                      <button
                        key={tab}
                        type="button"
                        onClick={() => setActiveTab(tab)}
                        className={`rounded-lg px-2.5 py-1 font-mono text-xs transition-colors ${
                          activeTab === tab
                            ? 'bg-[#4A1018] text-[#F5EDED]'
                            : 'text-[#B9A8AA] hover:text-[#F5EDED]'
                        }`}
                      >
                        {CODE_SNIPPETS[tab].filename}
                      </button>
                    ))}
                  </div>
                  <Code2 className="h-4 w-4 text-[#C62840]" />
                </div>

                <div className="flex-1 overflow-x-auto p-4 font-mono text-xs leading-6">
                  {CODE_SNIPPETS[activeTab].lines.map((line, i) => (
                    <motion.div
                      key={`${activeTab}-${i}`}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.22, delay: i * 0.03 }}
                      className="flex gap-4 whitespace-pre"
                    >
                      <span className="select-none text-[#8B1828] tabular-nums">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="text-[#F5EDED]">{line || ' '}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Live Browser Preview */}
              <div className="flex flex-col justify-between rounded-2xl border border-[#8B1828]/40 bg-[#180909] p-4 sm:col-span-5">
                <div className="flex items-center justify-between border-b border-[#8B1828]/35 pb-3">
                  <span className="flex items-center gap-1.5 text-xs font-medium text-[#B9A8AA]">
                    <Eye className="h-3.5 w-3.5 text-[#C62840]" />
                    Browser Preview
                  </span>
                  <span className="font-mono text-[11px] text-[#B9A8AA]">
                    {activeTab.toUpperCase()}
                  </span>
                </div>

                <motion.div
                  animate={{
                    y: previewIlluminated ? -4 : 0,
                    borderColor: previewIlluminated
                      ? 'rgba(198, 40, 64, 0.85)'
                      : 'rgba(139, 24, 40, 0.45)',
                    boxShadow: previewIlluminated
                      ? '0 18px 40px -12px rgba(198, 40, 64, 0.55)'
                      : '0 8px 24px -12px rgba(0, 0, 0, 0.7)',
                  }}
                  transition={{ duration: 0.22 }}
                  className="my-5 rounded-2xl border bg-gradient-to-br from-[#300B10] to-[#100707] p-4"
                >
                  <p className="text-[10px] font-semibold tracking-widest text-[#C62840]">
                    BESPOKE CODE
                  </p>
                  <h3 className="mt-1.5 font-display text-base font-semibold text-[#F5EDED]">
                    Built From Scratch
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-[#B9A8AA]">
                    {activeTab === 'html'
                      ? 'Clean semantic HTML5 architecture without bloat.'
                      : activeTab === 'css'
                      ? 'Hand-tuned crimson gradients and reflective borders.'
                      : 'Interactive JavaScript state control active.'}
                  </p>
                  <button
                    type="button"
                    onClick={() => setPreviewIlluminated((prev) => !prev)}
                    className="btn-luxury-crimson mt-4 inline-flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-xs font-semibold text-[#F5EDED]"
                  >
                    <Layers className="h-3.5 w-3.5" />
                    {previewIlluminated ? 'Reset Glow' : 'Preview State'}
                  </button>
                </motion.div>

                <p className="text-[11px] text-[#B9A8AA]">
                  Switch code tabs or trigger the preview button.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Editorial Explanation */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="order-1 lg:order-2 lg:col-span-5"
          >
            <p className="text-xs font-semibold tracking-[0.2em] text-[#C62840]">
              08 · BUILT FROM SCRATCH
            </p>
            <h2
              className="mt-3 font-display text-3xl font-bold leading-[1.12] tracking-tight text-[#F5EDED] sm:text-4xl"
              style={{ textWrap: 'balance' }}
            >
              Beyond Builders.
              <br />
              <span className="text-gradient-crimson">Into Custom Code.</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#B9A8AA]">
              Beyond visual builders, I craft websites directly with HTML, CSS,
              and JavaScript—giving your brand complete originality, clean
              structure, and tailored interactions.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {CUSTOM_CODE_FEATURES.map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#C62840]" />
                  <div>
                    <h3 className="font-display text-sm font-semibold text-[#F5EDED]">
                      {item.title}
                    </h3>
                    <p className="mt-0.5 text-xs leading-relaxed text-[#B9A8AA]">
                      {item.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
