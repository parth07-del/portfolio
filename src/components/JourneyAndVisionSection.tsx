import {useState} from 'react';
import {motion} from 'motion/react';
import {ArrowRight, Compass, RotateCcw} from 'lucide-react';
import {
  portfolioData,
  type JourneyMilestone,
  type MilestoneFocus,
} from '../data/portfolioData';

const focusCycle: MilestoneFocus[] = ['In Focus', 'Practicing', 'Ongoing'];

const focusStyle: Record<MilestoneFocus, string> = {
  'In Focus': 'font-semibold text-[#3F6212] dark:font-medium dark:text-[#C6FF3A]',
  Practicing: 'font-medium text-[#2449D8] dark:text-[#315BFF]',
  Ongoing: 'text-zinc-600 dark:text-[#A1A1AA]',
};

export default function JourneyAndVisionSection() {
  const [milestones, setMilestones] = useState<JourneyMilestone[]>(
    portfolioData.journeyMilestones
  );

  const cycleMilestoneFocus = (id: string) => {
    setMilestones((prev) =>
      prev.map((m) => {
        if (m.id !== id) return m;
        const nextIdx = (focusCycle.indexOf(m.focus) + 1) % focusCycle.length;
        return {...m, focus: focusCycle[nextIdx]};
      })
    );
  };

  const resetMilestones = () => {
    setMilestones(portfolioData.journeyMilestones);
  };

  const inFocusCount = milestones.filter((m) => m.focus === 'In Focus').length;
  const practicingCount = milestones.filter((m) => m.focus === 'Practicing').length;

  return (
    <>
      {/* SECTION 8: MY JOURNEY AND GROWTH */}
      <section
        id="journey"
        className="border-b border-zinc-200 bg-white py-20 transition-colors duration-200 dark:border-white/10 dark:bg-[#08080A] sm:py-24"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="font-mono text-xs text-[#2449D8] dark:text-[#315BFF]">
                Current Focus ·{' '}
                <span className="tabular-nums">
                  {inFocusCount} in focus / {practicingCount} practicing
                </span>
              </p>
              <h2
                className="mt-3 font-display text-3xl font-bold tracking-tight text-[#09090B] dark:text-[#F5F5F5] sm:text-4xl"
                style={{textWrap: 'balance'}}
              >
                Currently in the Making.
              </h2>
            </div>

            <div className="flex items-center gap-4">
              <p className="text-xs text-zinc-600 dark:text-[#A1A1AA]">
                Click any milestone status to cycle focus state
              </p>
              <button
                type="button"
                onClick={resetMilestones}
                className="inline-flex min-h-[36px] items-center gap-1.5 rounded-lg border border-zinc-200 bg-[#F8F9FB] px-3 py-1.5 text-xs text-zinc-600 transition-colors hover:border-[#315BFF] hover:text-[#09090B] dark:border-white/10 dark:bg-[#101114] dark:text-[#A1A1AA] dark:hover:text-[#F5F5F5] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#315BFF]"
              >
                <RotateCcw className="h-3.5 w-3.5" />
                <span>Reset</span>
              </button>
            </div>
          </div>

          {/* Clean architectural roadmap list */}
          <div className="mt-12 grid grid-cols-1 gap-x-10 gap-y-2 md:grid-cols-2">
            {milestones.map((milestone, index) => (
              <div
                key={milestone.id}
                className="flex items-start justify-between gap-4 border-b border-zinc-200 py-5 dark:border-white/10"
              >
                <div className="flex items-start gap-4">
                  <span className="pt-0.5 font-mono text-xs font-medium text-[#2449D8] dark:text-[#315BFF] tabular-nums">
                    0{index + 1}
                  </span>
                  <div>
                    <h3 className="font-display text-base font-semibold text-[#09090B] dark:text-[#F5F5F5]">
                      {milestone.title}
                    </h3>
                    <p className="mt-1 text-xs leading-relaxed text-zinc-600 dark:text-[#A1A1AA]">
                      {milestone.detail}
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => cycleMilestoneFocus(milestone.id)}
                  title="Click to update milestone focus state"
                  className={`min-h-[36px] shrink-0 rounded-md border border-zinc-200 bg-[#F8F9FB] px-2.5 py-1 font-mono text-[11px] transition-colors hover:border-[#315BFF] dark:border-white/10 dark:bg-[#101114] whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#315BFF] ${focusStyle[milestone.focus]}`}
                >
                  {milestone.focus}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9: FUTURE VISION */}
      <section
        id="vision"
        className="border-b border-zinc-200 bg-[#F8F9FB] py-20 transition-colors duration-200 dark:border-white/10 dark:bg-[#050505] sm:py-24"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="font-mono text-xs font-semibold text-[#3F6212] dark:font-medium dark:text-[#C6FF3A]">
                Long-Term Direction
              </p>
              <h2
                className="mt-3 font-display text-3xl font-bold tracking-tight text-[#09090B] dark:text-[#F5F5F5] sm:text-4xl"
                style={{textWrap: 'balance'}}
              >
                Where I&apos;m Heading.
              </h2>
            </div>
            <p className="max-w-md text-sm text-zinc-600 dark:text-[#A1A1AA]">
              Grounded ambitions built step by step — from core engineering fundamentals to meaningful products and future ventures.
            </p>
          </div>

          {/* Interconnected 3-Horizon Node Map */}
          <div className="relative mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {portfolioData.futureVision.map((item, idx) => (
              <motion.div
                key={item.horizon}
                initial={{opacity: 0, y: 12}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true, margin: '-60px'}}
                transition={{duration: 0.35, delay: idx * 0.08}}
                className="relative flex flex-col justify-between rounded-xl border border-zinc-200 bg-white p-6 shadow-xs transition-colors duration-200 hover:border-[#315BFF] dark:border-white/10 dark:bg-[#101114] dark:shadow-none"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono text-xs font-medium text-[#2449D8] dark:text-[#315BFF]">
                      {item.horizon}
                    </span>
                    <Compass className="h-4 w-4 text-zinc-500 dark:text-[#A1A1AA]" />
                  </div>

                  <h3 className="mt-3 font-display text-xl font-semibold text-[#09090B] dark:text-[#F5F5F5]">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-zinc-600 dark:text-[#A1A1AA]">
                    {item.description}
                  </p>
                </div>

                <ul className="mt-6 space-y-2.5 border-t border-zinc-200 pt-5 text-xs text-zinc-800 dark:border-white/10 dark:text-[#F5F5F5]/90">
                  {item.goals.map((goal) => (
                    <li key={goal} className="flex items-start gap-2">
                      <ArrowRight className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#4D7C0F] dark:text-[#C6FF3A]" />
                      <span>{goal}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
