import {useState, type MouseEvent} from 'react';
import {motion} from 'motion/react';
import {ArrowDownRight, ArrowRight, ArrowUpRight, Layers} from 'lucide-react';
import {portfolioData} from '../data/portfolioData';
import ThemeToggle, {type ThemeMode} from './ThemeToggle';

interface HeroSectionProps {
  theme: ThemeMode;
  onThemeChange: (nextTheme: ThemeMode) => void;
}

export default function HeroSection({
  theme,
  onThemeChange,
}: HeroSectionProps) {
  const [imageError, setImageError] = useState(false);
  const [pointerPos, setPointerPos] = useState<{x: number; y: number} | null>(null);
  const {hero, identity} = portfolioData;

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({behavior: 'smooth', block: 'start'});
    }
  };

  const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPointerPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section
      id="home"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setPointerPos(null)}
      className="relative overflow-hidden border-b border-zinc-200 bg-[#F8F9FB] transition-colors duration-200 dark:border-white/10 dark:bg-[#050505]"
    >
      {/* Subtle architectural grid backdrop */}
      <div
        aria-hidden="true"
        className="architectural-grid subtle-radial-mask pointer-events-none absolute inset-0"
      />

      {/* Subtle interactive pointer illumination */}
      {pointerPos && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 hidden transition-opacity duration-300 lg:block"
          style={{
            background:
              theme === 'dark'
                ? `radial-gradient(480px circle at ${pointerPos.x}px ${pointerPos.y}px, rgba(49, 91, 255, 0.08), transparent 70%)`
                : `radial-gradient(480px circle at ${pointerPos.x}px ${pointerPos.y}px, rgba(49, 91, 255, 0.06), transparent 70%)`,
          }}
        />
      )}

      <div className="relative mx-auto max-w-6xl px-4 pb-16 pt-10 sm:px-6 sm:pt-14 lg:px-8 lg:pb-20 lg:pt-16">
        {/* Top Hero Utility Bar: Kicker + Accessible Dark/Light Theme Switcher */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-zinc-200 pb-4 dark:border-white/10">
          <p className="font-mono text-xs tracking-wide text-zinc-600 dark:text-[#A1A1AA]">
            {hero.kicker}
          </p>
          <ThemeToggle theme={theme} onChange={onThemeChange} />
        </div>

        {/* Split-screen hero grid */}
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Typographic Column */}
          <motion.div
            initial={{opacity: 0, y: 16}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.45, ease: [0.16, 1, 0.3, 1]}}
            className="flex flex-col justify-between lg:col-span-7"
          >
            <div>
              {/* Main Heading */}
              <h1
                className="font-display text-4xl font-bold tracking-tight text-[#09090B] dark:text-[#F5F5F5] sm:text-5xl lg:text-[3.75rem] lg:leading-[1.06]"
                style={{textWrap: 'balance'}}
              >
                {hero.headline}
              </h1>

              {/* Creative personal name & subtitle */}
              <div className="mt-5 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <span className="font-display text-xl font-semibold text-[#2449D8] dark:text-[#315BFF] sm:text-2xl">
                  {identity.name}
                </span>
                <span aria-hidden="true" className="text-zinc-400 dark:text-[#A1A1AA]">
                  /
                </span>
                <span className="text-sm font-semibold text-[#3F6212] dark:font-medium dark:text-[#C6FF3A]">
                  {hero.subHeadline}
                </span>
              </div>

              {/* Introduction copy */}
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-600 dark:text-[#A1A1AA] sm:text-[17px]">
                {hero.intro}
              </p>

              {/* Clean status line */}
              <p className="mt-5 font-mono text-xs text-zinc-700 dark:text-[#F5F5F5]/80">
                {hero.statusText}
              </p>
            </div>

            {/* Focused Primary & Secondary Action Controls */}
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => scrollTo('about')}
                className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-[#315BFF] px-5 py-2.5 text-sm font-medium text-white transition-all duration-150 hover:bg-[#2449D8] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#315BFF] dark:focus-visible:ring-[#C6FF3A]"
              >
                <span>Explore My Journey</span>
                <ArrowDownRight className="h-4 w-4" />
              </button>

              <button
                type="button"
                onClick={() => scrollTo('projects')}
                className="inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-zinc-300 bg-white px-5 py-2.5 text-sm font-medium text-[#09090B] transition-colors duration-150 hover:border-[#315BFF] dark:border-white/15 dark:bg-[#101114] dark:text-[#F5F5F5] dark:hover:border-[#315BFF] dark:hover:text-white whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#315BFF]"
              >
                <span>View My Projects</span>
                <ArrowRight className="h-4 w-4 text-zinc-500 dark:text-[#A1A1AA]" />
              </button>
            </div>
          </motion.div>

          {/* Right Architectural Visual Column */}
          <motion.div
            initial={{opacity: 0, scale: 0.98}}
            animate={{opacity: 1, scale: 1}}
            transition={{duration: 0.5, delay: 0.08, ease: [0.16, 1, 0.3, 1]}}
            className="lg:col-span-5"
          >
            <div className="group relative h-full min-h-[320px] overflow-hidden rounded-xl border border-zinc-200 bg-[#101114] shadow-sm dark:border-white/10 dark:shadow-none">
              {!imageError ? (
                <img
                  src={hero.heroImage}
                  alt={hero.heroImageAlt}
                  referrerPolicy="no-referrer"
                  onError={() => setImageError(true)}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02] lg:min-h-[420px]"
                />
              ) : (
                <div className="flex h-full min-h-[360px] flex-col items-center justify-center bg-gradient-to-br from-[#101114] via-[#08080A] to-[#315BFF]/20 p-8 text-center">
                  <Layers className="h-10 w-10 text-[#315BFF]" />
                  <p className="mt-4 font-display text-lg font-semibold text-[#F5F5F5]">
                    {identity.name}
                  </p>
                  <p className="mt-1 text-xs text-[#A1A1AA]">
                    {identity.currentDegree}
                  </p>
                </div>
              )}

              {/* Subtle bottom gradient scrim for clean readable caption */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#050505]/95 via-[#050505]/50 to-transparent"
              />

              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5">
                <div>
                  <p className="font-mono text-[11px] text-[#C6FF3A]">
                    B.E. CSE (AI &amp; ML)
                  </p>
                  <p className="mt-1 text-xs text-[#F5F5F5]/90">
                    {identity.diplomaFoundation} · {identity.location}
                  </p>
                </div>
                <span className="font-mono text-[11px] text-[#A1A1AA] tabular-nums">
                  2026
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Full-width 4-column interactive foundation strip below hero split */}
        <div className="mt-12 grid grid-cols-1 gap-4 border-t border-zinc-200 pt-8 dark:border-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {hero.highlights.map((item) => (
            <button
              key={item.label}
              type="button"
              onClick={() => scrollTo(item.targetSection)}
              className="group flex flex-col justify-between rounded-lg border border-zinc-200 bg-white p-4 text-left transition-all duration-150 hover:-translate-y-0.5 hover:border-[#315BFF] dark:border-white/8 dark:bg-[#101114]/70 dark:hover:border-[#315BFF]/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#315BFF]"
            >
              <div className="flex w-full items-center justify-between gap-2">
                <p className="font-mono text-[11px] text-zinc-500 dark:text-[#A1A1AA]">
                  {item.label}
                </p>
                <ArrowUpRight className="h-3.5 w-3.5 text-zinc-400 transition-colors group-hover:text-[#315BFF] dark:text-[#A1A1AA]/60 dark:group-hover:text-[#C6FF3A]" />
              </div>
              <p className="mt-2 font-display text-base font-semibold text-[#09090B] dark:text-[#F5F5F5]">
                {item.value}
              </p>
              <p className="mt-1 text-xs text-zinc-600 dark:text-[#A1A1AA]">
                {item.detail}
              </p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
