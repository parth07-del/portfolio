import {useEffect, useState} from 'react';
import {Menu, X} from 'lucide-react';
import {portfolioData} from '../data/portfolioData';
import ThemeToggle, {type ThemeMode} from './ThemeToggle';

const desktopLinks = [
  {id: 'about', label: 'About'},
  {id: 'education', label: 'Education'},
  {id: 'skills', label: 'Skills'},
  {id: 'projects', label: 'Projects'},
  {id: 'journey', label: 'Journey'},
];

const mobileLinks = [
  {id: 'home', label: 'Home'},
  {id: 'about', label: 'About'},
  {id: 'education', label: 'Education'},
  {id: 'skills', label: 'Skills'},
  {id: 'projects', label: 'Projects'},
  {id: 'journey', label: 'Journey'},
  {id: 'contact', label: 'Contact'},
];

interface NavbarProps {
  theme: ThemeMode;
  onThemeChange: (nextTheme: ThemeMode) => void;
}

export default function Navbar({theme, onThemeChange}: NavbarProps) {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress =
        docHeight > 0 ? Math.min(1, Math.max(0, scrollTop / docHeight)) : 0;
      setScrollProgress(progress);

      const sections = [
        'home',
        'about',
        'education',
        'skills',
        'projects',
        'journey',
        'contact',
      ];
      let current = 'home';
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 160) {
            current = sectionId;
          }
        }
      }
      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, {passive: true});
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({behavior: 'smooth', block: 'start'});
    }
  };

  return (
    <header className="sticky top-0 z-40 border-b border-zinc-200 bg-[#F8F9FB]/90 backdrop-blur-md transition-colors duration-200 dark:border-white/10 dark:bg-[#050505]/90">
      {/* Scroll progress hairline */}
      <div aria-hidden="true" className="h-[2px] w-full bg-transparent">
        <div
          className="h-full origin-left bg-gradient-to-r from-[#315BFF] to-[#65A30D] dark:to-[#C6FF3A] transition-transform duration-150 ease-out"
          style={{transform: `scaleX(${scrollProgress})`}}
        />
      </div>

      {/* 3-Zone Top Bar Contract */}
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-8 px-4 sm:px-6 lg:px-8">
        {/* Zone 1: Single-line Wordmark */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('home');
          }}
          className="font-display text-base font-semibold tracking-tight text-[#09090B] transition-colors hover:text-[#315BFF] dark:text-[#F5F5F5] dark:hover:text-[#C6FF3A] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#315BFF] rounded-sm"
        >
          {portfolioData.identity.shortMark}
        </a>

        {/* Zone 2: Concise single-line navigation links */}
        <nav
          aria-label="Primary navigation"
          className="hidden md:flex items-center gap-7"
        >
          {desktopLinks.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.id);
                }}
                className={`relative py-1 text-sm font-medium transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#315BFF] rounded-sm ${
                  isActive
                    ? 'text-[#09090B] dark:text-[#F5F5F5]'
                    : 'text-zinc-600 hover:text-[#09090B] dark:text-[#A1A1AA] dark:hover:text-[#F5F5F5]'
                }`}
              >
                {item.label}
                <span
                  aria-hidden="true"
                  className={`absolute bottom-0 left-0 right-0 h-[2px] origin-left bg-[#315BFF] transition-transform duration-200 ${
                    isActive ? 'scale-x-100' : 'scale-x-0'
                  }`}
                />
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Single Primary Action + Mobile Menu Trigger */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('contact');
            }}
            className="hidden sm:inline-flex items-center justify-center rounded-lg border border-[#315BFF] bg-[#315BFF] px-4 py-1.5 text-xs font-medium text-white transition-all duration-150 hover:bg-[#2449D8] dark:bg-[#315BFF]/15 dark:text-[#F5F5F5] dark:hover:bg-[#315BFF] dark:hover:text-white whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6FF3A]"
          >
            Contact
          </a>

          <button
            type="button"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-200 bg-white text-[#09090B] transition-colors hover:border-[#315BFF] dark:border-white/10 dark:bg-[#101114] dark:text-[#F5F5F5] md:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#315BFF]"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Responsive Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <nav
          aria-label="Mobile navigation"
          className="border-t border-zinc-200 bg-[#F8F9FB] px-4 py-4 dark:border-white/10 dark:bg-[#08080A] md:hidden"
        >
          <div className="flex flex-col gap-1">
            {mobileLinks.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.id);
                  }}
                  className={`flex min-h-[44px] items-center justify-between rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? 'border border-[#315BFF]/40 bg-[#315BFF]/10 text-[#09090B] dark:border-[#315BFF]/50 dark:bg-[#315BFF]/15 dark:text-[#F5F5F5]'
                      : 'text-zinc-600 hover:bg-zinc-200/60 hover:text-[#09090B] dark:text-[#A1A1AA] dark:hover:bg-white/5 dark:hover:text-[#F5F5F5]'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="font-mono text-[11px] text-[#315BFF] dark:text-[#C6FF3A]">
                      Active
                    </span>
                  )}
                </a>
              );
            })}
          </div>

          <div className="mt-4 flex items-center justify-between border-t border-zinc-200 pt-4 dark:border-white/10">
            <span className="font-mono text-xs text-zinc-600 dark:text-[#A1A1AA]">
              Appearance
            </span>
            <ThemeToggle theme={theme} onChange={onThemeChange} />
          </div>
        </nav>
      )}
    </header>
  );
}
