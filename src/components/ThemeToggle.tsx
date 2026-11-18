import {Moon, Sun} from 'lucide-react';

export type ThemeMode = 'dark' | 'light';

interface ThemeToggleProps {
  theme: ThemeMode;
  onChange: (nextTheme: ThemeMode) => void;
  compact?: boolean;
}

export default function ThemeToggle({
  theme,
  onChange,
  compact = false,
}: ThemeToggleProps) {
  return (
    <div
      role="group"
      aria-label="Color theme"
      className="inline-flex items-center gap-1 rounded-lg border border-zinc-200 bg-white p-1 shadow-xs dark:border-white/10 dark:bg-[#101114] dark:shadow-none"
    >
      <button
        type="button"
        aria-pressed={theme === 'light'}
        onClick={() => onChange('light')}
        className={`inline-flex min-h-[32px] items-center gap-1.5 rounded-md px-2.5 py-1 text-xs font-medium transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#315BFF] ${
          theme === 'light'
            ? 'bg-[#315BFF] text-white'
            : 'text-zinc-600 hover:text-zinc-950 dark:text-[#A1A1AA] dark:hover:text-[#F5F5F5]'
        }`}
      >
        <Sun className="h-3.5 w-3.5" />
        {!compact && <span>Light</span>}
      </button>

      <button
        type="button"
        aria-pressed={theme === 'dark'}
        onClick={() => onChange('dark')}
        className={`inline-flex min-h-[32px] items-center gap-1.5 rounded-md px-2.5 py-1 text-xs font-medium transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#315BFF] ${
          theme === 'dark'
            ? 'bg-[#315BFF] text-white'
            : 'text-zinc-600 hover:text-zinc-950 dark:text-[#A1A1AA] dark:hover:text-[#F5F5F5]'
        }`}
      >
        <Moon className="h-3.5 w-3.5" />
        {!compact && <span>Dark</span>}
      </button>
    </div>
  );
}
