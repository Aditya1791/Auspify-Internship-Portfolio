/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useCallback } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { CommandPaletteModal } from './components/CommandPaletteModal';
import { ScrollToTop } from './components/ScrollToTop';
import { Toast } from './components/Toast';
import { PageView, Project } from './types/portfolio';
import { Layers, List } from 'lucide-react';

export default function App() {
  const [activeView, setActiveView] = useState<PageView>('home');
  const [viewMode, setViewMode] = useState<'single-page' | 'tabbed'>('single-page');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = useCallback((msg: string) => {
    setToastMessage(msg);
  }, []);

  // Theme state with localStorage persistence
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    try {
      const savedTheme = localStorage.getItem('portfolio_theme');
      if (savedTheme) return savedTheme === 'dark';
      return true; // Default to architectural dark
    } catch {
      return true;
    }
  });

  // Apply dark or light mode class to root document element
  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
      root.classList.remove('light');
      try {
        localStorage.setItem('portfolio_theme', 'dark');
      } catch {}
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
      try {
        localStorage.setItem('portfolio_theme', 'light');
      } catch {}
    }
  }, [isDarkMode]);

  // Global Keyboard shortcuts: Escape to close, Ctrl+K / Cmd+K for Command Palette
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
        setIsResumeOpen(false);
        setIsCommandPaletteOpen(false);
      } else if ((e.metaKey || e.ctrlKey) && (e.key === 'k' || e.key === 'K')) {
        e.preventDefault();
        setIsCommandPaletteOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Update active view on scroll in single-page mode (optimized with rAF)
  useEffect(() => {
    if (viewMode !== 'single-page') return;

    const sections: PageView[] = ['home', 'about', 'projects', 'skills', 'contact'];
    let ticking = false;
    let animFrameId: number;

    const handleScroll = () => {
      if (!ticking) {
        animFrameId = window.requestAnimationFrame(() => {
          const scrollPosition = window.scrollY + 250;

          for (let i = sections.length - 1; i >= 0; i--) {
            const sectionId = sections[i];
            if (sectionId === 'home' && window.scrollY < 300) {
              setActiveView('home');
              break;
            }
            const el = document.getElementById(sectionId);
            if (el && el.offsetTop <= scrollPosition) {
              setActiveView(sectionId);
              break;
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.cancelAnimationFrame(animFrameId);
    };
  }, [viewMode]);

  const handleNavigate = (view: PageView) => {
    setActiveView(view);

    if (viewMode === 'single-page') {
      if (view === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const el = document.getElementById(view);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleToggleViewMode = () => {
    setViewMode((prev) => {
      const next = prev === 'single-page' ? 'tabbed' : 'single-page';
      showToast(
        next === 'single-page'
          ? 'Switched to All-in-One continuous scroll mode'
          : 'Switched to Focus Tabs mode'
      );
      return next;
    });
  };

  const handleToggleTheme = () => {
    setIsDarkMode((prev) => {
      const next = !prev;
      showToast(next ? 'Dark architectural mode enabled' : 'High-contrast light mode enabled');
      return next;
    });
  };

  const tabItems: { id: PageView; label: string; code: string }[] = [
    { id: 'home', label: 'Overview', code: '00' },
    { id: 'about', label: 'Profile', code: '01' },
    { id: 'projects', label: 'Work', code: '02' },
    { id: 'skills', label: 'Tools', code: '03' },
    { id: 'contact', label: 'Contact', code: '04' },
  ];

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--ink)] font-sans selection:bg-[var(--selection-bg)] selection:text-[var(--selection-text)] relative overflow-x-hidden transition-colors duration-200">
      {/* Background Dot Grid */}
      <div className="dots-grid" aria-hidden="true" />

      {/* Top Header & Vertical Navigation */}
      <Navbar
        activeView={activeView}
        onNavigate={handleNavigate}
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
        viewMode={viewMode}
        onToggleViewMode={handleToggleViewMode}
        isDarkMode={isDarkMode}
        onToggleTheme={handleToggleTheme}
      />

      {/* Main content container with architectural padding */}
      <main className="relative z-10 w-full px-6 sm:px-12 xl:pl-28 xl:pr-16 max-w-[1560px] mx-auto">
        {viewMode === 'single-page' ? (
          /* Continuous Scrollable Architecture Flow */
          <>
            <div id="home">
              <Hero
                onExploreProjects={() => handleNavigate('projects')}
                onContactClick={() => handleNavigate('contact')}
                onOpenResume={() => setIsResumeOpen(true)}
              />
            </div>

            <AboutSection onOpenResume={() => setIsResumeOpen(true)} />

            <SkillsSection />

            <ProjectsSection onSelectProject={(project) => setSelectedProject(project)} />

            <TestimonialsSection />

            <ContactSection />
          </>
        ) : (
          /* Focus Tabbed View with Dedicated Tab Navigation Bar */
          <div className="min-h-[calc(100vh-200px)] py-6">
            {/* Focus Tabs Secondary Bar */}
            <div className="sticky top-20 z-30 mb-8 py-3 px-4 bg-[var(--surface-card)]/90 backdrop-blur-md border border-[var(--border-color)] rounded-[2px] flex flex-wrap items-center justify-between gap-3 shadow-sm">
              <div className="flex items-center gap-1.5 overflow-x-auto py-1 scrollbar-none">
                {tabItems.map((tab) => {
                  const isActive = activeView === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => handleNavigate(tab.id)}
                      className={`flex items-center gap-2 px-3.5 py-1.5 rounded-[2px] font-mono text-xs uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap ${
                        isActive
                          ? 'bg-[var(--accent)] text-[var(--accent-contrast)] font-semibold shadow-sm'
                          : 'text-[var(--ink-muted)] hover:text-[var(--ink)] hover:bg-[var(--surface-hover)]'
                      }`}
                    >
                      <span className="text-[10px] opacity-70">{tab.code}</span>
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-[var(--ink-muted)]">
                <span className="hidden sm:inline">Focus Mode Active</span>
                <button
                  onClick={handleToggleViewMode}
                  className="flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-mono uppercase tracking-wider border border-[var(--border-color)] hover:border-[var(--accent-border)] hover:text-[var(--accent-text)] rounded-[2px] cursor-pointer"
                  title="Switch back to continuous single page scroll"
                >
                  <List className="w-3 h-3 text-[var(--accent)]" />
                  <span>Switch to All-in-One</span>
                </button>
              </div>
            </div>

            {/* Tab Contents */}
            {activeView === 'home' && (
              <>
                <Hero
                  onExploreProjects={() => handleNavigate('projects')}
                  onContactClick={() => handleNavigate('contact')}
                  onOpenResume={() => setIsResumeOpen(true)}
                />
                <ProjectsSection onSelectProject={(project) => setSelectedProject(project)} />
              </>
            )}

            {activeView === 'about' && (
              <div className="py-2">
                <AboutSection onOpenResume={() => setIsResumeOpen(true)} />
                <TestimonialsSection />
              </div>
            )}

            {activeView === 'projects' && (
              <div className="py-2">
                <ProjectsSection onSelectProject={(project) => setSelectedProject(project)} />
              </div>
            )}

            {activeView === 'skills' && (
              <div className="py-2">
                <SkillsSection />
              </div>
            )}

            {activeView === 'contact' && (
              <div className="py-2">
                <ContactSection />
              </div>
            )}
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Floating Scroll To Top with Progress Ring */}
      <ScrollToTop />

      {/* Non-blocking Action Feedback Toast */}
      <Toast message={toastMessage} onClose={() => setToastMessage(null)} />

      {/* Interactive Command Palette Modal (Ctrl+K / Cmd+K) */}
      <CommandPaletteModal
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        onNavigate={handleNavigate}
        onOpenResume={() => setIsResumeOpen(true)}
        onSelectProject={(project) => setSelectedProject(project)}
        isDarkMode={isDarkMode}
        onToggleTheme={handleToggleTheme}
        viewMode={viewMode}
        onToggleViewMode={handleToggleViewMode}
        onShowToast={showToast}
      />

      {/* Resume Viewer Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      {/* Project Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
