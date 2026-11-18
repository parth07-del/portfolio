import {useCallback, useEffect, useState} from 'react';
import {AnimatePresence, motion} from 'motion/react';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  Code2,
  FolderGit2,
  X,
} from 'lucide-react';
import {portfolioData, type ProjectItem} from '../data/portfolioData';

const categories = ['All', 'AI & Security', 'Networking', 'Optimization', 'Web'] as const;

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [expandedCardId, setExpandedCardId] = useState<string | null>(null);
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});
  const [githubNoticeId, setGithubNoticeId] = useState<string | null>(null);

  const projects =
    selectedCategory === 'All'
      ? portfolioData.projects
      : portfolioData.projects.filter((p) => p.category === selectedCategory);

  const stepModalProject = useCallback(
    (direction: -1 | 1) => {
      if (!activeModalProject) return;
      const list = portfolioData.projects;
      const currentIdx = list.findIndex((p) => p.id === activeModalProject.id);
      if (currentIdx === -1) return;
      const nextIdx = (currentIdx + direction + list.length) % list.length;
      setActiveModalProject(list[nextIdx]);
    },
    [activeModalProject]
  );

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (!activeModalProject) return;
      if (e.key === 'Escape') {
        setActiveModalProject(null);
      } else if (e.key === 'ArrowRight') {
        stepModalProject(1);
      } else if (e.key === 'ArrowLeft') {
        stepModalProject(-1);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [activeModalProject, stepModalProject]);

  const handleGithubClick = (project: ProjectItem) => {
    if (project.githubUrlPlaceholder.startsWith('http')) {
      window.open(project.githubUrlPlaceholder, '_blank', 'noopener,noreferrer');
      return;
    }
    setGithubNoticeId((prev) => (prev === project.id ? null : project.id));
  };

  return (
    <section
      id="projects"
      className="border-b border-zinc-200 bg-[#F8F9FB] py-20 transition-colors duration-200 dark:border-white/10 dark:bg-[#050505] sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <p className="font-mono text-xs text-[#2449D8] dark:text-[#315BFF]">
              Selected Builds ·{' '}
              <span className="tabular-nums">{projects.length} shown</span>
            </p>
            <h2
              className="mt-3 font-display text-3xl font-bold tracking-tight text-[#09090B] dark:text-[#F5F5F5] sm:text-4xl"
              style={{textWrap: 'balance'}}
            >
              Projects &amp; Experimental Prototypes
            </h2>
          </div>

          {/* Interactive Filter Bar */}
          <div
            role="tablist"
            aria-label="Filter projects by domain"
            className="flex flex-wrap items-center gap-1 rounded-xl border border-zinc-200 bg-white p-1 dark:border-white/10 dark:bg-[#101114]"
          >
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setSelectedCategory(cat)}
                  className={`min-h-[38px] rounded-lg px-3.5 py-1.5 text-xs font-medium transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#315BFF] ${
                    isSelected
                      ? 'bg-[#315BFF] text-white'
                      : 'text-zinc-600 hover:text-[#09090B] dark:text-[#A1A1AA] dark:hover:text-[#F5F5F5]'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Project Grid */}
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((project, index) => {
            const isExpanded = expandedCardId === project.id;
            const imgFailed = failedImages[project.id];

            return (
              <motion.article
                key={project.id}
                layout="position"
                initial={{opacity: 0, y: 12}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true, margin: '-60px'}}
                transition={{duration: 0.3, delay: index * 0.04}}
                className="flex flex-col overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-xs transition-colors duration-200 hover:border-[#315BFF] dark:border-white/10 dark:bg-[#101114] dark:shadow-none dark:hover:border-[#315BFF]/60"
              >
                {/* Project Visual Header */}
                <div className="relative aspect-[4/3] w-full overflow-hidden border-b border-zinc-200 bg-[#08080A] dark:border-white/10">
                  {!imgFailed ? (
                    <img
                      src={project.imageUrl}
                      alt={project.imageAlt}
                      referrerPolicy="no-referrer"
                      onError={() =>
                        setFailedImages((prev) => ({...prev, [project.id]: true}))
                      }
                      className="h-full w-full object-cover transition-transform duration-300 hover:scale-[1.02]"
                    />
                  ) : (
                    <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-[#101114] via-[#08080A] to-[#315BFF]/15 p-6 text-center">
                      <Code2 className="h-8 w-8 text-[#315BFF]" />
                      <p className="mt-3 font-display text-base font-semibold text-[#F5F5F5]">
                        {project.title}
                      </p>
                    </div>
                  )}
                </div>

                {/* Project Body */}
                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    {/* Quiet unboxed metadata line */}
                    <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-zinc-500 dark:text-[#A1A1AA]">
                      <span className="font-semibold text-[#3F6212] dark:font-medium dark:text-[#C6FF3A]">
                        {project.category}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span>{project.status}</span>
                    </div>

                    <h3 className="mt-2.5 font-display text-xl font-semibold tracking-tight text-[#09090B] dark:text-[#F5F5F5]">
                      {project.title}
                    </h3>

                    <p className="mt-2.5 text-sm leading-relaxed text-zinc-600 dark:text-[#A1A1AA]">
                      {project.shortDescription}
                    </p>

                    {/* Clean unboxed technology list */}
                    <p className="mt-4 font-mono text-xs text-zinc-700 dark:text-[#F5F5F5]/80">
                      {project.technologies.join(' · ')}
                    </p>

                    {/* Expandable inline breakdown */}
                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          initial={{opacity: 0, y: -4}}
                          animate={{opacity: 1, y: 0}}
                          exit={{opacity: 0, y: -4}}
                          transition={{duration: 0.18}}
                          className="mt-5 space-y-3 border-t border-zinc-200 pt-4 text-xs leading-relaxed text-zinc-600 dark:border-white/10 dark:text-[#A1A1AA]"
                        >
                          <div>
                            <span className="font-mono font-medium text-[#09090B] dark:text-[#F5F5F5]">
                              Objective:{' '}
                            </span>
                            {project.objective}
                          </div>
                          <div>
                            <span className="font-mono font-medium text-[#09090B] dark:text-[#F5F5F5]">
                              Concept:{' '}
                            </span>
                            {project.concept}
                          </div>
                          <div>
                            <p className="font-mono font-medium text-[#09090B] dark:text-[#F5F5F5]">
                              Learning Outcomes:
                            </p>
                            <ul className="mt-1.5 list-disc space-y-1 pl-4">
                              {project.learningOutcomes.map((item) => (
                                <li key={item}>{item}</li>
                              ))}
                            </ul>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {githubNoticeId === project.id && (
                      <p className="mt-3 rounded-lg border border-[#315BFF]/40 bg-[#315BFF]/10 px-3 py-2 font-mono text-[11px] text-[#09090B] dark:text-[#F5F5F5]">
                        Repository link placeholder — update{' '}
                        <span className="font-semibold text-[#2449D8] dark:text-[#C6FF3A]">
                          githubUrlPlaceholder
                        </span>{' '}
                        in src/data/portfolioData.ts when you publish your repo.
                      </p>
                    )}
                  </div>

                  {/* Card Actions */}
                  <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-zinc-200 pt-4 dark:border-white/10">
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => setActiveModalProject(project)}
                        className="inline-flex min-h-[40px] items-center gap-1.5 rounded-lg bg-[#315BFF] px-4 py-2 text-xs font-medium text-white transition-colors hover:bg-[#2449D8] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#315BFF] dark:focus-visible:ring-[#C6FF3A]"
                      >
                        <span>View Project</span>
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </button>

                      <button
                        type="button"
                        onClick={() => handleGithubClick(project)}
                        className="inline-flex min-h-[40px] items-center gap-1.5 rounded-lg border border-zinc-300 bg-[#F8F9FB] px-3.5 py-2 text-xs font-medium text-[#09090B] transition-colors hover:border-[#315BFF] dark:border-white/15 dark:bg-[#08080A] dark:text-[#F5F5F5] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#315BFF]"
                      >
                        <FolderGit2 className="h-3.5 w-3.5 text-zinc-500 dark:text-[#A1A1AA]" />
                        <span>GitHub</span>
                      </button>
                    </div>

                    <button
                      type="button"
                      aria-expanded={isExpanded}
                      onClick={() =>
                        setExpandedCardId((prev) =>
                          prev === project.id ? null : project.id
                        )
                      }
                      className="inline-flex min-h-[40px] items-center gap-1 rounded-md px-2 text-xs font-medium text-zinc-600 transition-colors hover:text-[#2449D8] dark:text-[#A1A1AA] dark:hover:text-[#C6FF3A] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#315BFF]"
                    >
                      <span>{isExpanded ? 'Hide Details' : 'Details'}</span>
                      <ChevronDown
                        className={`h-3.5 w-3.5 transition-transform duration-150 ${
                          isExpanded ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>

      {/* Fullscreen Project Case Study Modal with Prev/Next Navigation */}
      <AnimatePresence>
        {activeModalProject && (
          <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 0.15}}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm"
            onClick={() => setActiveModalProject(null)}
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
          >
            <motion.div
              initial={{opacity: 0, scale: 0.97, y: 8}}
              animate={{opacity: 1, scale: 1, y: 0}}
              exit={{opacity: 0, scale: 0.97, y: 8}}
              transition={{duration: 0.2, ease: [0.16, 1, 0.3, 1]}}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-xl border border-zinc-200 bg-white p-6 shadow-xl dark:border-[#315BFF]/50 dark:bg-[#101114] dark:shadow-none sm:p-8"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-xs font-semibold text-[#3F6212] dark:font-medium dark:text-[#C6FF3A]">
                    {activeModalProject.category} · {activeModalProject.status}
                  </p>
                  <h3
                    id="project-modal-title"
                    className="mt-2 font-display text-2xl font-bold text-[#09090B] dark:text-[#F5F5F5]"
                  >
                    {activeModalProject.title}
                  </h3>
                </div>

                <button
                  type="button"
                  aria-label="Close project details"
                  onClick={() => setActiveModalProject(null)}
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-zinc-200 bg-[#F8F9FB] text-zinc-600 transition-colors hover:border-[#315BFF] hover:text-[#09090B] dark:border-white/10 dark:bg-[#050505] dark:text-[#A1A1AA] dark:hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#315BFF]"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="mt-6 overflow-hidden rounded-lg border border-zinc-200 bg-[#050505] dark:border-white/10">
                {!failedImages[activeModalProject.id] ? (
                  <img
                    src={activeModalProject.imageUrl}
                    alt={activeModalProject.imageAlt}
                    referrerPolicy="no-referrer"
                    className="aspect-[16/9] w-full object-cover"
                  />
                ) : (
                  <div className="flex aspect-[16/9] items-center justify-center bg-[#08080A]">
                    <Code2 className="h-10 w-10 text-[#315BFF]" />
                  </div>
                )}
              </div>

              <div className="mt-6 space-y-5 text-sm leading-relaxed text-zinc-600 dark:text-[#A1A1AA]">
                <div>
                  <h4 className="font-mono text-xs font-medium text-[#09090B] dark:text-[#F5F5F5]">
                    Overview
                  </h4>
                  <p className="mt-1.5">{activeModalProject.shortDescription}</p>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <h4 className="font-mono text-xs font-medium text-[#09090B] dark:text-[#F5F5F5]">
                      Objective
                    </h4>
                    <p className="mt-1.5">{activeModalProject.objective}</p>
                  </div>
                  <div>
                    <h4 className="font-mono text-xs font-medium text-[#09090B] dark:text-[#F5F5F5]">
                      Architecture &amp; Concept
                    </h4>
                    <p className="mt-1.5">{activeModalProject.concept}</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-mono text-xs font-medium text-[#09090B] dark:text-[#F5F5F5]">
                    Key Learning Outcomes
                  </h4>
                  <ul className="mt-2 list-disc space-y-1.5 pl-5">
                    {activeModalProject.learningOutcomes.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-zinc-200 pt-4 dark:border-white/10">
                  <p className="font-mono text-xs font-medium text-[#09090B] dark:text-[#F5F5F5]">
                    Technologies: {activeModalProject.technologies.join(' · ')}
                  </p>
                </div>
              </div>

              {/* Prev / Next Project Navigation */}
              <div className="mt-6 flex items-center justify-between gap-4 border-t border-zinc-200 pt-5 dark:border-white/10">
                <button
                  type="button"
                  onClick={() => stepModalProject(-1)}
                  className="inline-flex min-h-[38px] items-center gap-1.5 rounded-lg border border-zinc-200 bg-[#F8F9FB] px-3.5 py-2 text-xs font-medium text-[#09090B] transition-colors hover:border-[#315BFF] dark:border-white/10 dark:bg-[#08080A] dark:text-[#F5F5F5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#315BFF]"
                >
                  <ArrowLeft className="h-3.5 w-3.5" />
                  <span>Previous</span>
                </button>

                <span className="font-mono text-[11px] text-zinc-500 dark:text-[#A1A1AA] tabular-nums">
                  {portfolioData.projects.findIndex(
                    (p) => p.id === activeModalProject.id
                  ) + 1}{' '}
                  / {portfolioData.projects.length}
                </span>

                <button
                  type="button"
                  onClick={() => stepModalProject(1)}
                  className="inline-flex min-h-[38px] items-center gap-1.5 rounded-lg border border-zinc-200 bg-[#F8F9FB] px-3.5 py-2 text-xs font-medium text-[#09090B] transition-colors hover:border-[#315BFF] dark:border-white/10 dark:bg-[#08080A] dark:text-[#F5F5F5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#315BFF]"
                >
                  <span>Next</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
