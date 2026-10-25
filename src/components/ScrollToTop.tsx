import React, { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

export const ScrollToTop: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
          if (totalHeight > 0) {
            const progress = (window.scrollY / totalHeight) * 100;
            setScrollProgress(Math.min(100, Math.max(0, progress)));
          }
          setIsVisible(window.scrollY > 300);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!isVisible) return null;

  const radius = 18;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <div className="fixed bottom-8 right-8 z-40 animate-fade-in">
      <button
        onClick={scrollToTop}
        aria-label="Scroll smoothly to top of page"
        title={`Scroll to top (${Math.round(scrollProgress)}%)`}
        className="relative group w-12 h-12 rounded-full bg-[var(--surface-card)] border border-[var(--border-color)] hover:border-[var(--accent-border)] flex items-center justify-center shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer backdrop-blur-md"
      >
        {/* Circular Progress Ring */}
        <svg className="absolute inset-0 w-12 h-12 -rotate-90 pointer-events-none" viewBox="0 0 48 48">
          <circle
            cx="24"
            cy="24"
            r={radius}
            fill="transparent"
            stroke="var(--border-subtle)"
            strokeWidth="2.5"
          />
          <circle
            cx="24"
            cy="24"
            r={radius}
            fill="transparent"
            stroke="var(--accent-border)"
            strokeWidth="2.5"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="transition-all duration-150"
          />
        </svg>

        {/* Center Arrow */}
        <ArrowUp className="w-4 h-4 text-[var(--ink)] group-hover:text-[var(--accent-text)] group-hover:-translate-y-0.5 transition-all duration-200" />
      </button>
    </div>
  );
};
