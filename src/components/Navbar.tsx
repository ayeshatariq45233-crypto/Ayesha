import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../data/portfolioData';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 28);

      const offsets = NAV_LINKS.map((link) => {
        const el = document.getElementById(link.id);
        if (!el) return { id: link.id, top: Infinity };
        return { id: link.id, top: Math.abs(el.getBoundingClientRect().top - 140) };
      });

      const nearest = offsets.reduce((prev, curr) =>
        curr.top < prev.top ? curr : prev
      );
      if (nearest.top < Infinity) {
        setActiveSection(nearest.id);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const id = href.replace('#', '');
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled ? 'luxury-glass-nav py-3.5' : 'bg-transparent py-5'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-8 px-6 lg:px-10">
        {/* Zone 1: Single text wordmark */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('#home');
          }}
          className="font-display shrink-0 whitespace-nowrap text-xl font-bold tracking-[0.14em] text-[#F5EDED] transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C62840]"
        >
          AYESHA
        </a>

        {/* Zone 2: Single-line nav links */}
        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-7 md:flex"
        >
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`relative shrink-0 whitespace-nowrap py-1 text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C62840] ${
                  isActive ? 'text-[#F5EDED]' : 'text-[#B9A8AA] hover:text-[#F5EDED]'
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-crimson-underline"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    className="absolute inset-x-0 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-[#8B1828] via-[#C62840] to-[#F5EDED]/80"
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Luxury Red CTA + Mobile Menu Button */}
        <div className="flex shrink-0 items-center gap-3">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#contact');
            }}
            className="btn-luxury-crimson hidden shrink-0 items-center gap-1.5 whitespace-nowrap rounded-xl px-5 py-2.5 text-xs font-semibold tracking-wider text-[#F5EDED] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5EDED] md:inline-flex"
          >
            LET'S TALK
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[#8B1828]/60 bg-[#300B10]/70 text-[#F5EDED] transition-colors hover:border-[#C62840] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C62840] md:hidden"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="luxury-gloss-card mx-4 mt-3 rounded-2xl p-5 md:hidden"
          >
            <nav aria-label="Mobile navigation" className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className={`flex min-h-[44px] items-center justify-between rounded-xl px-4 py-2.5 text-base font-medium transition-colors ${
                      isActive
                        ? 'bg-[#4A1018]/75 text-[#F5EDED]'
                        : 'text-[#B9A8AA] hover:bg-[#300B10]/60 hover:text-[#F5EDED]'
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && (
                      <span className="h-1.5 w-6 rounded-full bg-gradient-to-r from-[#8B1828] to-[#C62840]" />
                    )}
                  </a>
                );
              })}
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#contact');
                }}
                className="btn-luxury-crimson mt-2 flex min-h-[44px] items-center justify-center gap-2 rounded-xl px-5 py-3 text-xs font-semibold tracking-wider text-[#F5EDED]"
              >
                LET'S TALK
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
