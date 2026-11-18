import {useEffect, useState} from 'react';
import {AnimatePresence, motion} from 'motion/react';
import {
  Award,
  BookOpen,
  Compass,
  Cpu,
  Dumbbell,
  ExternalLink,
  Palette,
  Rocket,
  Trophy,
  X,
} from 'lucide-react';
import {portfolioData, type CertificationItem} from '../data/portfolioData';

const interestIcons: Record<string, typeof Trophy> = {
  cricket: Trophy,
  fitness: Dumbbell,
  painting: Palette,
  'ai-tools': Cpu,
  learning: BookOpen,
  entrepreneurship: Rocket,
};

export default function BeyondCodeAndCertsSection() {
  const [selectedCert, setSelectedCert] = useState<CertificationItem | null>(null);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedCert(null);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  return (
    <>
      {/* SECTION 10: BEYOND CODE */}
      <section
        id="beyond-code"
        className="border-b border-zinc-200 bg-white py-20 transition-colors duration-200 dark:border-white/10 dark:bg-[#08080A] sm:py-24"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="font-mono text-xs text-[#2449D8] dark:text-[#315BFF]">
                Personality &amp; Interests
              </p>
              <h2
                className="mt-3 font-display text-3xl font-bold tracking-tight text-[#09090B] dark:text-[#F5F5F5] sm:text-4xl"
                style={{textWrap: 'balance'}}
              >
                Beyond Code.
              </h2>
            </div>
            <p className="max-w-md text-sm text-zinc-600 dark:text-[#A1A1AA]">
              The habits, sports, and creative pursuits that shape how I think, collaborate, and stay consistent.
            </p>
          </div>

          {/* Asymmetrical Editorial Mosaic */}
          <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-6">
            {portfolioData.beyondCode.map((item) => {
              const Icon = interestIcons[item.id] ?? Compass;
              const colSpanClass =
                item.span === 'wide' ? 'md:col-span-3' : 'md:col-span-2';

              return (
                <div
                  key={item.id}
                  className={`group flex flex-col justify-between rounded-xl border border-zinc-200 bg-[#F8F9FB] p-6 transition-colors duration-200 hover:border-[#315BFF] dark:border-white/10 dark:bg-[#101114] dark:hover:border-[#315BFF]/60 ${colSpanClass}`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-4">
                      <span className="font-mono text-xs font-semibold text-[#3F6212] dark:font-medium dark:text-[#C6FF3A]">
                        {item.subtitle}
                      </span>
                      <Icon className="h-4 w-4 text-zinc-500 transition-colors group-hover:text-[#2449D8] dark:text-[#A1A1AA] dark:group-hover:text-[#315BFF]" />
                    </div>
                    <h3 className="mt-3 font-display text-xl font-semibold text-[#09090B] dark:text-[#F5F5F5]">
                      {item.title}
                    </h3>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-zinc-600 dark:text-[#A1A1AA]">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 11: CERTIFICATIONS AND LEARNING */}
      <section
        id="certifications"
        className="border-b border-zinc-200 bg-[#F8F9FB] py-20 transition-colors duration-200 dark:border-white/10 dark:bg-[#050505] sm:py-24"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="font-mono text-xs text-[#2449D8] dark:text-[#315BFF]">
                Verified Learning
              </p>
              <h2
                className="mt-3 font-display text-3xl font-bold tracking-tight text-[#09090B] dark:text-[#F5F5F5] sm:text-4xl"
                style={{textWrap: 'balance'}}
              >
                Certifications &amp; Continuous Study
              </h2>
            </div>
            <p className="max-w-md text-sm text-zinc-600 dark:text-[#A1A1AA]">
              Structured foundational coursework completed alongside engineering and diploma studies.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            {portfolioData.certifications.map((cert) => (
              <div
                key={cert.id}
                className="flex flex-col justify-between rounded-xl border border-zinc-200 bg-white p-6 shadow-xs transition-colors duration-200 hover:border-[#315BFF] dark:border-white/10 dark:bg-[#101114] dark:shadow-none dark:hover:border-[#315BFF]/60"
              >
                <div>
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-mono text-xs font-semibold text-[#3F6212] dark:font-medium dark:text-[#C6FF3A]">
                      {cert.platform} · {cert.status}
                    </span>
                    <Award className="h-4 w-4 text-[#2449D8] dark:text-[#315BFF]" />
                  </div>

                  <h3 className="mt-3 font-display text-xl font-semibold text-[#09090B] dark:text-[#F5F5F5]">
                    {cert.title}
                  </h3>

                  <p className="mt-2.5 text-sm leading-relaxed text-zinc-600 dark:text-[#A1A1AA]">
                    {cert.description}
                  </p>

                  <p className="mt-4 font-mono text-xs text-zinc-700 dark:text-[#F5F5F5]/80">
                    {cert.topics.join(' · ')}
                  </p>
                </div>

                <div className="mt-6 flex items-center justify-between gap-4 border-t border-zinc-200 pt-4 dark:border-white/10">
                  <span className="font-mono text-[11px] text-zinc-500 dark:text-[#A1A1AA]">
                    Certificate preview slot ready
                  </span>
                  <button
                    type="button"
                    onClick={() => setSelectedCert(cert)}
                    className="inline-flex min-h-[40px] items-center gap-1.5 rounded-lg border border-zinc-300 bg-[#F8F9FB] px-4 py-2 text-xs font-medium text-[#09090B] transition-colors hover:border-[#315BFF] dark:border-white/15 dark:bg-[#08080A] dark:text-[#F5F5F5] dark:hover:text-white whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#315BFF]"
                  >
                    <span>View Certificate</span>
                    <ExternalLink className="h-3.5 w-3.5 text-zinc-500 dark:text-[#A1A1AA]" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificate Preview Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 0.15}}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm"
            onClick={() => setSelectedCert(null)}
            role="dialog"
            aria-modal="true"
            aria-labelledby="cert-modal-title"
          >
            <motion.div
              initial={{opacity: 0, scale: 0.97, y: 8}}
              animate={{opacity: 1, scale: 1, y: 0}}
              exit={{opacity: 0, scale: 0.97, y: 8}}
              transition={{duration: 0.2, ease: [0.16, 1, 0.3, 1]}}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-lg rounded-xl border border-zinc-200 bg-white p-6 shadow-xl dark:border-[#315BFF]/50 dark:bg-[#101114] dark:shadow-none sm:p-8"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-xs font-semibold text-[#3F6212] dark:font-medium dark:text-[#C6FF3A]">
                    {selectedCert.platform} · {selectedCert.status}
                  </p>
                  <h3
                    id="cert-modal-title"
                    className="mt-2 font-display text-2xl font-bold text-[#09090B] dark:text-[#F5F5F5]"
                  >
                    {selectedCert.title}
                  </h3>
                </div>
                <button
                  type="button"
                  aria-label="Close certificate preview"
                  onClick={() => setSelectedCert(null)}
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-zinc-200 bg-[#F8F9FB] text-zinc-600 transition-colors hover:border-[#315BFF] hover:text-[#09090B] dark:border-white/10 dark:bg-[#050505] dark:text-[#A1A1AA] dark:hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#315BFF]"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* Clean architectural certificate placeholder */}
              <div className="mt-6 flex aspect-[16/10] flex-col items-center justify-center rounded-lg border border-dashed border-zinc-300 bg-[#F8F9FB] p-6 text-center dark:border-white/20 dark:bg-[#08080A]">
                <Award className="h-9 w-9 text-[#2449D8] dark:text-[#315BFF]" />
                <p className="mt-3 font-display text-base font-semibold text-[#09090B] dark:text-[#F5F5F5]">
                  {selectedCert.title}
                </p>
                <p className="mt-1 font-mono text-xs text-zinc-600 dark:text-[#A1A1AA]">
                  Issued via {selectedCert.platform}
                </p>
                <p className="mt-4 max-w-sm text-xs text-zinc-600 dark:text-[#A1A1AA]">
                  {selectedCert.certificateImagePlaceholderNote}
                </p>
              </div>

              <div className="mt-5 text-sm leading-relaxed text-zinc-600 dark:text-[#A1A1AA]">
                {selectedCert.description}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
