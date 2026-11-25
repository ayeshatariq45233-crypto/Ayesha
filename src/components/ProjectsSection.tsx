import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowUpRight, CheckCircle2, X } from 'lucide-react';
import { FEATURED_PROJECTS, ProjectItem } from '../data/portfolioData';
import { MediaImage } from './MediaImage';

type FilterType = 'All' | 'Custom Code' | 'WordPress & Elementor';

export function ProjectsSection() {
  const [filter, setFilter] = useState<FilterType>('All');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(
    null
  );

  const filteredProjects =
    filter === 'All'
      ? FEATURED_PROJECTS
      : FEATURED_PROJECTS.filter((p) => p.track === filter);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedProject(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleConsultProject = (projectTitle: string) => {
    setSelectedProject(null);
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
    window.dispatchEvent(
      new CustomEvent('prefill-project-inquiry', { detail: projectTitle })
    );
  };

  return (
    <section id="projects" className="relative bg-[#100707] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end"
        >
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.2em] text-[#C62840]">
              06 · SELECTED PROJECTS
            </p>
            <h2
              className="mt-3 font-display text-3xl font-bold tracking-tight text-[#F5EDED] sm:text-4xl"
              style={{ textWrap: 'balance' }}
            >
              Selected Works
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#B9A8AA]">
              Curated luxury website previews spanning couture retail,
              architecture, skincare, hospitality, celebrations, and interior
              design.
            </p>
          </div>

          {/* Filter Tabs */}
          <div
            role="tablist"
            aria-label="Filter projects by technology"
            className="inline-flex w-fit flex-wrap items-center gap-1 rounded-xl border border-[#8B1828]/40 bg-[#180909] p-1"
          >
            {(['All', 'Custom Code', 'WordPress & Elementor'] as FilterType[]).map(
              (tab) => {
                const isActive = filter === tab;
                return (
                  <button
                    key={tab}
                    role="tab"
                    type="button"
                    aria-selected={isActive}
                    onClick={() => setFilter(tab)}
                    className={`min-h-[40px] shrink-0 whitespace-nowrap rounded-lg px-4 py-2 text-xs font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C62840] ${
                      isActive
                        ? 'bg-gradient-to-r from-[#8B1828] to-[#C62840] text-[#F5EDED] shadow-md'
                        : 'text-[#B9A8AA] hover:text-[#F5EDED]'
                    }`}
                  >
                    {tab}
                  </button>
                );
              }
            )}
          </div>
        </motion.div>

        {/* Alternating editorial showcase rows */}
        <div className="mt-14 space-y-10">
          {filteredProjects.map((project, idx) => {
            const reverseOrder = idx % 2 === 1;
            return (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="luxury-gloss-card luxury-gloss-card-hover group grid grid-cols-1 items-stretch overflow-hidden rounded-3xl lg:grid-cols-12"
              >
                {/* Project Image */}
                <div
                  className={`relative aspect-[4/3] overflow-hidden bg-[#180909] lg:col-span-7 lg:aspect-auto lg:min-h-[380px] ${
                    reverseOrder ? 'lg:order-2' : ''
                  }`}
                >
                  <MediaImage
                    src={project.imageUrl}
                    alt={`${project.title} preview showcase`}
                    fallbackTitle={project.title}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    aspectClassName="aspect-[4/3] lg:h-full lg:min-h-[380px]"
                  />
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#180909]/80 via-[#300B10]/15 to-transparent"
                  />
                </div>

                {/* Project Content */}
                <div
                  className={`flex flex-col justify-between p-7 sm:p-10 lg:col-span-5 ${
                    reverseOrder ? 'lg:order-1' : ''
                  }`}
                >
                  <div>
                    <div className="flex flex-wrap items-center gap-2 text-xs">
                      <span className="font-semibold text-[#C62840]">
                        {project.category}
                      </span>
                      <span aria-hidden="true" className="text-[#8B1828]">
                        ·
                      </span>
                      <span className="text-[#B9A8AA]">{project.track}</span>
                    </div>

                    <h3 className="mt-3 font-display text-2xl font-bold tracking-tight text-[#F5EDED] sm:text-3xl">
                      {project.title}
                    </h3>

                    <p className="mt-4 text-sm leading-relaxed text-[#B9A8AA] sm:text-base">
                      {project.shortDescription}
                    </p>
                  </div>

                  <div className="mt-8 border-t border-[#8B1828]/35 pt-6">
                    <p className="text-xs font-medium text-[#B9A8AA]">
                      {project.technologies.join(' · ')}
                    </p>

                    <div className="mt-5">
                      <button
                        type="button"
                        onClick={() => setSelectedProject(project)}
                        className="btn-luxury-crimson inline-flex min-h-[44px] items-center gap-2 rounded-xl px-5 py-2.5 text-xs font-semibold tracking-wider text-[#F5EDED] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5EDED]"
                      >
                        View Project
                        <ArrowUpRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>

      {/* Interactive Lightbox Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#100707]/88 p-4 backdrop-blur-md sm:p-6"
            onClick={() => setSelectedProject(null)}
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 16 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="luxury-gloss-card relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl"
            >
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                aria-label="Close project details"
                className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-[#C62840]/50 bg-[#180909]/90 text-[#F5EDED] transition-colors hover:border-[#F5EDED] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5EDED]"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#180909]">
                <MediaImage
                  src={selectedProject.imageUrl}
                  alt={selectedProject.title}
                  fallbackTitle={selectedProject.title}
                  className="h-full w-full object-cover"
                  aspectClassName="aspect-[16/10] w-full"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#180909] via-transparent to-transparent"
                />
              </div>

              <div className="p-6 sm:p-8">
                <div className="flex flex-wrap items-center gap-2 text-xs">
                  <span className="font-semibold text-[#C62840]">
                    {selectedProject.category}
                  </span>
                  <span aria-hidden="true" className="text-[#8B1828]">
                    ·
                  </span>
                  <span className="text-[#B9A8AA]">{selectedProject.track}</span>
                  <span aria-hidden="true" className="text-[#8B1828]">
                    ·
                  </span>
                  <span className="font-mono text-[#B9A8AA] tabular-nums">
                    {selectedProject.year}
                  </span>
                </div>

                <h3
                  id="project-modal-title"
                  className="mt-2 font-display text-2xl font-bold text-[#F5EDED] sm:text-3xl"
                >
                  {selectedProject.title}
                </h3>

                <p className="mt-4 text-sm leading-relaxed text-[#B9A8AA] sm:text-base">
                  {selectedProject.fullDescription}
                </p>

                <div className="mt-6 grid grid-cols-1 gap-6 border-y border-[#8B1828]/40 py-6 sm:grid-cols-2">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#F5EDED]">
                      Key Deliverables
                    </p>
                    <ul className="mt-3 space-y-2.5 text-sm text-[#B9A8AA]">
                      {selectedProject.deliverables.map((item) => (
                        <li key={item} className="flex items-start gap-2.5">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#C62840]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#F5EDED]">
                      Technologies Applied
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-[#B9A8AA]">
                      {selectedProject.technologies.join(' · ')}
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(null)}
                    className="btn-luxury-outline min-h-[44px] rounded-xl px-5 py-2.5 text-xs font-semibold tracking-wider text-[#F5EDED]"
                  >
                    CLOSE
                  </button>
                  <button
                    type="button"
                    onClick={() => handleConsultProject(selectedProject.title)}
                    className="btn-luxury-crimson inline-flex min-h-[44px] items-center gap-2 rounded-xl px-5 py-2.5 text-xs font-semibold tracking-wider text-[#F5EDED]"
                  >
                    INQUIRE ABOUT THIS STYLE
                    <ArrowUpRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
