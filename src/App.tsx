import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import EducationSection from './components/EducationSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import JourneyAndVisionSection from './components/JourneyAndVisionSection';
import BeyondCodeAndCertsSection from './components/BeyondCodeAndCertsSection';
import ContactAndFooter from './components/ContactAndFooter';
import type {ThemeMode} from './components/ThemeToggle';
import {useEffect, useState} from 'react';

function getInitialTheme(): ThemeMode {
  try {
    const saved = localStorage.getItem('parth-portfolio-theme');
    if (saved === 'light' || saved === 'dark') {
      return saved;
    }
  } catch {
    // Fallback if storage is unavailable
  }
  return 'dark';
}

export default function App() {
  const [theme, setTheme] = useState<ThemeMode>(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('dark', theme === 'dark');
    try {
      localStorage.setItem('parth-portfolio-theme', theme);
    } catch {
      // Ignore storage errors
    }
  }, [theme]);

  return (
    <div className="min-h-screen bg-[#F8F9FB] text-[#09090B] transition-colors duration-200 dark:bg-[#050505] dark:text-[#F5F5F5]">
      <Navbar theme={theme} onThemeChange={setTheme} />
      <main>
        <HeroSection theme={theme} onThemeChange={setTheme} />
        <AboutSection />
        <EducationSection />
        <SkillsSection />
        <ProjectsSection />
        <JourneyAndVisionSection />
        <BeyondCodeAndCertsSection />
        <ContactAndFooter theme={theme} onThemeChange={setTheme} />
      </main>
    </div>
  );
}
