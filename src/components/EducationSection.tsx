import {useState} from 'react';
import {AnimatePresence, motion} from 'motion/react';
import {ChevronDown, GraduationCap} from 'lucide-react';
import {portfolioData} from '../data/portfolioData';

export default function EducationSection() {
  const [expandedId, setExpandedId] = useState<string>(
    portfolioData.education[0]?.id ?? ''
  );

  const toggleItem = (id: string) => {
    setExpandedId((prev) => (prev === id ? '' : id));
  };

  return (
    <section
      id="education"
      className="border-b border-zinc-200 bg-[#F8F9FB] py-20 transition-colors duration-200 dark:border-white/10 dark:bg-[#050505] sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="font-mono text-xs text-[#2449D8] dark:text-[#315BFF]">
              Academic Path
            </p>
            <h2
              className="mt-3 font-display text-3xl font-bold tracking-tight text-[#09090B] dark:text-[#F5F5F5] sm:text-4xl"
              style={{textWrap: 'balance'}}
            >
              Education Timeline
            </h2>
          </div>
          <p className="max-w-md text-sm text-zinc-600 dark:text-[#A1A1AA]">
            Click any milestone below to inspect coursework, subjects, and institution details.
          </p>
        </div>

        <div className="mt-12 space-y-4">
          {portfolioData.education.map((edu, idx) => {
            const isExpanded = expandedId === edu.id;

            return (
              <div
                key={edu.id}
                className={`rounded-xl border transition-colors duration-200 ${
                  isExpanded
                    ? 'border-[#315BFF] bg-white shadow-sm dark:bg-[#101114] dark:shadow-none'
                    : 'border-zinc-200 bg-white/80 hover:border-zinc-300 dark:border-white/10 dark:bg-[#101114]/60 dark:hover:border-white/25'
                }`}
              >
                <button
                  type="button"
                  aria-expanded={isExpanded}
                  onClick={() => toggleItem(edu.id)}
                  className="flex w-full items-start justify-between gap-4 rounded-xl p-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#315BFF] sm:items-center sm:p-6"
                >
                  <div className="flex items-start gap-4 sm:items-center">
                    {/* College Logo Placeholder Crest */}
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border font-mono text-xs font-medium ${
                        isExpanded
                          ? 'border-[#315BFF]/50 bg-[#315BFF]/10 text-[#2449D8] dark:border-[#315BFF]/60 dark:bg-[#315BFF]/15 dark:text-[#F5F5F5]'
                          : 'border-zinc-200 bg-[#F8F9FB] text-zinc-600 dark:border-white/10 dark:bg-[#050505] dark:text-[#A1A1AA]'
                      }`}
                      title="College logo placeholder"
                    >
                      {edu.logoPlaceholderCode}
                    </div>

                    <div>
                      <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-zinc-600 dark:text-[#A1A1AA]">
                        <span className="font-mono font-semibold text-[#3F6212] dark:font-medium dark:text-[#C6FF3A]">
                          0{idx + 1}.
                        </span>
                        <span>{edu.period}</span>
                        <span aria-hidden="true">·</span>
                        <span>{edu.entryType}</span>
                        <span aria-hidden="true">·</span>
                        <span>{edu.location}</span>
                      </div>

                      <h3 className="mt-1.5 font-display text-lg font-semibold text-[#09090B] dark:text-[#F5F5F5] sm:text-xl">
                        {edu.institution}
                      </h3>
                      <p className="mt-1 text-sm text-zinc-600 dark:text-[#A1A1AA]">
                        {edu.degree} — {edu.branch}
                      </p>
                    </div>
                  </div>

                  <span
                    aria-hidden="true"
                    className={`mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-zinc-200 bg-[#F8F9FB] text-zinc-600 transition-transform duration-200 dark:border-white/10 dark:bg-[#050505] dark:text-[#A1A1AA] sm:mt-0 ${
                      isExpanded
                        ? 'rotate-180 border-[#315BFF]/60 text-[#2449D8] dark:text-[#F5F5F5]'
                        : ''
                    }`}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{opacity: 0, y: -6}}
                      animate={{opacity: 1, y: 0}}
                      exit={{opacity: 0, y: -6}}
                      transition={{duration: 0.2, ease: [0.16, 1, 0.3, 1]}}
                      className="border-t border-zinc-200 px-5 pb-6 pt-5 dark:border-white/10 sm:px-6"
                    >
                      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
                        <div className="space-y-4 lg:col-span-7">
                          <div>
                            <h4 className="font-mono text-xs text-zinc-500 dark:text-[#A1A1AA]">
                              Learning Journey
                            </h4>
                            <p className="mt-2 text-sm leading-relaxed text-[#09090B] dark:text-[#F5F5F5]/90">
                              {edu.summary}
                            </p>
                            <p className="mt-2.5 text-sm leading-relaxed text-zinc-600 dark:text-[#A1A1AA]">
                              {edu.learningJourney}
                            </p>
                          </div>

                          <div className="pt-2">
                            <h4 className="font-mono text-xs text-zinc-500 dark:text-[#A1A1AA]">
                              Academic Highlights Placeholder
                            </h4>
                            <p className="mt-1.5 text-xs leading-relaxed text-zinc-600 dark:text-[#A1A1AA]">
                              {edu.achievementsPlaceholder}
                            </p>
                          </div>

                          {edu.institutionEditableNote && (
                            <p className="font-mono text-[11px] text-[#2449D8] dark:text-[#315BFF]">
                              Note: {edu.institutionEditableNote}
                            </p>
                          )}
                        </div>

                        <div className="lg:col-span-5">
                          <div className="rounded-lg border border-zinc-200 bg-[#F8F9FB] p-4 dark:border-white/10 dark:bg-[#08080A]">
                            <div className="flex items-center justify-between gap-2">
                              <h4 className="font-mono text-xs font-semibold text-[#3F6212] dark:font-medium dark:text-[#C6FF3A]">
                                Relevant Subjects &amp; Focus
                              </h4>
                              <GraduationCap className="h-4 w-4 text-zinc-500 dark:text-[#A1A1AA]" />
                            </div>
                            <ul className="mt-3 divide-y divide-zinc-200 text-sm dark:divide-white/8">
                              {edu.subjectsAndSkills.map((subject) => (
                                <li
                                  key={subject}
                                  className="py-2 text-zinc-800 first:pt-0 last:pb-0 dark:text-[#F5F5F5]/90"
                                >
                                  {subject}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
