import {useState} from 'react';
import {motion} from 'motion/react';
import {portfolioData, type SkillStage} from '../data/portfolioData';

const stageOrder: Record<SkillStage, number> = {
  Practicing: 4,
  Fundamentals: 3,
  Learning: 2,
  Exploring: 2,
  Beginner: 1,
};

const stageAccentText: Record<SkillStage, string> = {
  Practicing: 'font-semibold text-[#3F6212] dark:font-medium dark:text-[#C6FF3A]',
  Fundamentals: 'font-medium text-[#2449D8] dark:text-[#315BFF]',
  Learning: 'text-[#09090B] dark:text-[#F5F5F5]',
  Exploring: 'text-zinc-600 dark:text-[#A1A1AA]',
  Beginner: 'text-zinc-600 dark:text-[#A1A1AA]',
};

const stageFilters: Array<'All' | SkillStage> = [
  'All',
  'Practicing',
  'Fundamentals',
  'Learning',
  'Exploring',
  'Beginner',
];

export default function SkillsSection() {
  const [activeCategoryId, setActiveCategoryId] = useState<string>('all');
  const [activeStage, setActiveStage] = useState<'All' | SkillStage>('All');

  const categories = portfolioData.skillCategories;
  const filteredByCategory =
    activeCategoryId === 'all'
      ? categories
      : categories.filter((c) => c.id === activeCategoryId);

  const visibleCategories = filteredByCategory
    .map((category) => ({
      ...category,
      skills:
        activeStage === 'All'
          ? category.skills
          : category.skills.filter((s) => s.stage === activeStage),
    }))
    .filter((category) => category.skills.length > 0);

  const totalVisibleSkills = visibleCategories.reduce(
    (sum, cat) => sum + cat.skills.length,
    0
  );

  return (
    <section
      id="skills"
      className="border-b border-zinc-200 bg-white py-20 transition-colors duration-200 dark:border-white/10 dark:bg-[#08080A] sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <p className="font-mono text-xs text-[#2449D8] dark:text-[#315BFF]">
              Technical Capabilities ·{' '}
              <span className="tabular-nums">{totalVisibleSkills} shown</span>
            </p>
            <h2
              className="mt-3 font-display text-3xl font-bold tracking-tight text-[#09090B] dark:text-[#F5F5F5] sm:text-4xl"
              style={{textWrap: 'balance'}}
            >
              Skills &amp; Active Learning Stack
            </h2>
          </div>

          <p className="max-w-md text-sm text-zinc-600 dark:text-[#A1A1AA]">
            Honest progress stages instead of arbitrary percentages — reflecting what I practice today and where I am actively growing.
          </p>
        </div>

        {/* Interactive Category & Stage Controls */}
        <div className="mt-10 flex flex-col gap-3">
          <div
            role="tablist"
            aria-label="Skill categories"
            className="flex flex-wrap items-center gap-1.5 rounded-xl border border-zinc-200 bg-[#F8F9FB] p-1.5 dark:border-white/10 dark:bg-[#101114]"
          >
            <button
              type="button"
              role="tab"
              aria-selected={activeCategoryId === 'all'}
              onClick={() => setActiveCategoryId('all')}
              className={`min-h-[40px] rounded-lg px-4 py-2 text-xs font-medium transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#315BFF] ${
                activeCategoryId === 'all'
                  ? 'bg-[#315BFF] text-white'
                  : 'text-zinc-600 hover:text-[#09090B] dark:text-[#A1A1AA] dark:hover:text-[#F5F5F5]'
              }`}
            >
              All Categories
            </button>

            {categories.map((cat) => {
              const isSelected = activeCategoryId === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setActiveCategoryId(cat.id)}
                  className={`min-h-[40px] rounded-lg px-4 py-2 text-xs font-medium transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#315BFF] ${
                    isSelected
                      ? 'bg-[#315BFF] text-white'
                      : 'text-zinc-600 hover:text-[#09090B] dark:text-[#A1A1AA] dark:hover:text-[#F5F5F5]'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Stage Filter Row */}
          <div
            role="group"
            aria-label="Filter by learning stage"
            className="flex flex-wrap items-center gap-2 text-xs"
          >
            <span className="font-mono text-[11px] text-zinc-500 dark:text-[#A1A1AA]">
              Stage:
            </span>
            {stageFilters.map((stage) => {
              const active = activeStage === stage;
              return (
                <button
                  key={stage}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setActiveStage(stage)}
                  className={`min-h-[32px] rounded-md border px-3 py-1 font-mono text-[11px] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#315BFF] ${
                    active
                      ? 'border-[#315BFF] bg-[#315BFF]/10 text-[#2449D8] dark:bg-[#315BFF]/20 dark:text-[#F5F5F5]'
                      : 'border-zinc-200 bg-white text-zinc-600 hover:border-zinc-300 hover:text-[#09090B] dark:border-white/10 dark:bg-[#101114] dark:text-[#A1A1AA] dark:hover:border-white/25 dark:hover:text-[#F5F5F5]'
                  }`}
                >
                  {stage}
                </button>
              );
            })}
          </div>
        </div>

        {/* Skill Category Groups */}
        {visibleCategories.length === 0 ? (
          <div className="mt-10 rounded-xl border border-zinc-200 bg-[#F8F9FB] p-8 text-center dark:border-white/10 dark:bg-[#101114]">
            <p className="text-sm text-zinc-600 dark:text-[#A1A1AA]">
              No skills in this category match the <span className="font-mono text-[#09090B] dark:text-[#F5F5F5]">{activeStage}</span> stage.
            </p>
            <button
              type="button"
              onClick={() => {
                setActiveCategoryId('all');
                setActiveStage('All');
              }}
              className="mt-4 inline-flex min-h-[38px] items-center rounded-lg bg-[#315BFF] px-4 py-2 text-xs font-medium text-white transition-colors hover:bg-[#2449D8]"
            >
              Show All Skills
            </button>
          </div>
        ) : (
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            {visibleCategories.map((category) => (
              <motion.div
                key={category.id}
                initial={{opacity: 0, y: 10}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.25, ease: [0.16, 1, 0.3, 1]}}
                className={`rounded-xl border border-zinc-200 bg-[#F8F9FB] p-6 dark:border-white/10 dark:bg-[#101114] ${
                  visibleCategories.length === 1 ? 'md:col-span-2' : ''
                }`}
              >
                <div className="flex items-baseline justify-between gap-4 border-b border-zinc-200 pb-4 dark:border-white/10">
                  <div>
                    <h3 className="font-display text-xl font-semibold text-[#09090B] dark:text-[#F5F5F5]">
                      {category.label}
                    </h3>
                    <p className="mt-1 text-xs leading-relaxed text-zinc-600 dark:text-[#A1A1AA]">
                      {category.summary}
                    </p>
                  </div>
                  <span className="font-mono text-xs text-zinc-500 dark:text-[#A1A1AA] tabular-nums shrink-0">
                    {category.skills.length} items
                  </span>
                </div>

                <div className="mt-4 divide-y divide-zinc-200 dark:divide-white/8">
                  {category.skills.map((skill) => {
                    const blocks = stageOrder[skill.stage];
                    return (
                      <div
                        key={skill.name}
                        className="group py-3.5 first:pt-1 last:pb-1"
                      >
                        <div className="flex items-center justify-between gap-4">
                          <span className="font-medium text-[#09090B] transition-colors group-hover:text-[#2449D8] dark:text-[#F5F5F5] dark:group-hover:text-[#315BFF]">
                            {skill.name}
                          </span>

                          <div className="flex items-center gap-3 shrink-0">
                            <span
                              className={`font-mono text-xs ${stageAccentText[skill.stage]}`}
                            >
                              {skill.stage}
                            </span>
                            {/* Clean 4-segment indicator instead of fake % */}
                            <div
                              aria-hidden="true"
                              className="flex items-center gap-1"
                            >
                              {[1, 2, 3, 4].map((step) => (
                                <span
                                  key={step}
                                  className={`h-1.5 w-3 rounded-xs transition-colors ${
                                    step <= blocks
                                      ? skill.stage === 'Practicing'
                                        ? 'bg-[#65A30D] dark:bg-[#C6FF3A]'
                                        : 'bg-[#315BFF]'
                                      : 'bg-zinc-200 dark:bg-white/10'
                                  }`}
                                />
                              ))}
                            </div>
                          </div>
                        </div>

                        <p className="mt-1.5 text-xs leading-relaxed text-zinc-600 dark:text-[#A1A1AA]">
                          {skill.note}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
