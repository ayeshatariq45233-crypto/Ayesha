import { ArrowUp, Github, Globe, Linkedin, Mail, Phone } from 'lucide-react';
import { NAV_LINKS } from '../data/portfolioData';

export function FooterSection() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href: string) => {
    const id = href.replace('#', '');
    const target = document.getElementById(id);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer
      id="footer"
      className="relative border-t border-[#8B1828]/40 bg-gradient-to-b from-[#180909] to-[#100707] py-16"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-center">
          <div>
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
              className="font-display text-2xl font-bold tracking-[0.14em] text-[#F5EDED]"
            >
              AYESHA
            </a>
            <p className="mt-2.5 max-w-sm text-sm text-[#B9A8AA]">
              Creative ideas. Thoughtful design. Powerful digital experiences.
            </p>
          </div>

          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap items-center gap-x-7 gap-y-3"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className="text-sm font-medium text-[#B9A8AA] transition-colors hover:text-[#F5EDED]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Glowing Crimson Back-to-Top Button */}
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top"
            className="btn-luxury-crimson inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-[#F5EDED] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5EDED]"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-6 border-t border-[#8B1828]/35 pt-8 sm:flex-row sm:items-center">
          <p className="text-xs text-[#B9A8AA]">
            © 2026 Ayesha. All Rights Reserved.
          </p>

          <div className="flex flex-wrap items-center gap-5">
            <a
              href="mailto:ayeshtariq45233@gmail.com"
              className="inline-flex items-center gap-2 text-xs font-medium text-[#B9A8AA] transition-colors hover:text-[#F5EDED]"
            >
              <Mail className="h-3.5 w-3.5 text-[#C62840]" />
              ayeshtariq45233@gmail.com
            </a>

            <a
              href="tel:+923213745233"
              className="inline-flex items-center gap-2 font-mono text-xs font-medium text-[#B9A8AA] tabular-nums transition-colors hover:text-[#F5EDED]"
            >
              <Phone className="h-3.5 w-3.5 text-[#C62840]" />
              +923213745233
            </a>

            <div className="flex items-center gap-2">
              {[
                { label: 'GitHub', icon: Github },
                { label: 'LinkedIn', icon: Linkedin },
                { label: 'Portfolio', icon: Globe },
              ].map(({ label, icon: Icon }) => (
                <a
                  key={label}
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('#contact');
                  }}
                  aria-label={`${label} contact section`}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#8B1828]/50 bg-[#300B10]/60 text-[#B9A8AA] transition-colors hover:border-[#C62840] hover:text-[#F5EDED]"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
