import React, { useState } from 'react';
import { Menu, X, FileText, Send, Sun, Moon, Github, Linkedin, Twitter, Command, Layers, List } from 'lucide-react';
import { PageView } from '../types/portfolio';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  activeView: PageView;
  onNavigate: (view: PageView) => void;
  onOpenResume: () => void;
  onOpenCommandPalette: () => void;
  viewMode: 'single-page' | 'tabbed';
  onToggleViewMode: () => void;
  isDarkMode: boolean;
  onToggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeView,
  onNavigate,
  onOpenResume,
  onOpenCommandPalette,
  viewMode,
  onToggleViewMode,
  isDarkMode,
  onToggleTheme,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { id: PageView; label: string; code: string }[] = [
    { id: 'home', label: 'Index', code: '00' },
    { id: 'about', label: 'Profile', code: '01' },
    { id: 'projects', label: 'Work', code: '02' },
    { id: 'skills', label: 'Tools', code: '03' },
    { id: 'contact', label: 'Contact', code: '04' },
  ];

  const handleNavClick = (id: PageView) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top Header Bar matching Variation 6 */}
      <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-[var(--header-bg)] border-b border-[var(--border-subtle)] px-6 sm:px-12 py-5 flex justify-between items-center transition-colors">
        {/* Left: System Logo in Monospace */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2 group text-left focus:outline-none focus-visible:ring-1 focus-visible:ring-[var(--accent)]"
          aria-label="Aditya Swain Portfolio Home"
        >
          <span className="font-mono text-xs sm:text-sm font-medium tracking-[0.2em] text-[var(--accent-text)] group-hover:opacity-80 transition-opacity">
            AS.OS_v.01
          </span>
          <span className="hidden sm:inline-block text-[10px] font-mono text-[var(--ink-muted)] tracking-wider">
            / DEV.SYS
          </span>
        </button>

        {/* Center / Desktop Navigation bar */}
        <nav aria-label="Main Navigation" className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = activeView === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                aria-current={isActive ? 'page' : undefined}
                className={`font-mono text-[11px] uppercase tracking-[0.18em] transition-colors relative py-1 ${
                  isActive
                    ? 'text-[var(--accent-text)] font-semibold'
                    : 'text-[var(--ink-muted)] hover:text-[var(--ink)]'
                }`}
              >
                <span className="text-[9px] opacity-40 mr-1.5">{link.code}</span>
                <span>{link.label}</span>
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[var(--accent-border)]" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right: System Active + Controls (Theme Toggle, Mode, CV, Transmit) */}
        <div className="flex items-center gap-3 sm:gap-5">
          {/* Quick Socials */}
          <div className="hidden md:flex items-center gap-2.5 border-r border-[var(--border-subtle)] pr-4 text-[var(--ink-muted)]">
            <a
              href={PERSONAL_INFO.social.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile (Aditya1791)"
              title="GitHub Profile (Aditya1791)"
              className="p-1 hover:text-[var(--accent-text)] transition"
            >
              <Github className="w-3.5 h-3.5" />
            </a>
            <a
              href={PERSONAL_INFO.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile (Aditya Ranjan Swain)"
              title="LinkedIn Profile"
              className="p-1 hover:text-[var(--accent-text)] transition"
            >
              <Linkedin className="w-3.5 h-3.5" />
            </a>
            <a
              href={PERSONAL_INFO.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X Profile (@Monkey_D_Adi)"
              title="X Profile (@Monkey_D_Adi)"
              className="p-1 hover:text-[var(--accent-text)] transition"
            >
              <Twitter className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="hidden sm:flex items-center font-mono text-[10px] sm:text-[11px] text-[var(--status-active)] uppercase tracking-[0.12em]">
            <span
              className="w-2 h-2 rounded-full mr-2.5 animate-pulse"
              style={{
                backgroundColor: 'var(--status-active)',
                boxShadow: '0 0 10px var(--accent-glow)',
              }}
            />
            <span>System Active</span>
          </div>

          {/* Theme Toggle Button */}
          <button
            onClick={onToggleTheme}
            aria-label={isDarkMode ? 'Switch to high-contrast light mode' : 'Switch to dark mode'}
            title={isDarkMode ? 'Switch to high-contrast light mode' : 'Switch to dark mode'}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-[2px] font-mono text-[10px] uppercase tracking-wider border border-[var(--border-color)] text-[var(--ink)] hover:border-[var(--accent-border)] hover:text-[var(--accent-text)] transition cursor-pointer"
          >
            {isDarkMode ? (
              <>
                <Sun className="w-3.5 h-3.5 text-[var(--accent)]" />
                <span className="hidden sm:inline">Light</span>
              </>
            ) : (
              <>
                <Moon className="w-3.5 h-3.5 text-[var(--ink)]" />
                <span className="hidden sm:inline">Dark</span>
              </>
            )}
          </button>

          {/* Command Palette Trigger */}
          <button
            onClick={onOpenCommandPalette}
            title="Open Command Palette (Ctrl+K / ⌘K)"
            aria-label="Open Command Palette"
            className="hidden md:flex items-center gap-1.5 px-2.5 py-1.5 rounded-[2px] font-mono text-[10px] uppercase tracking-wider border border-[var(--border-color)] text-[var(--ink)] hover:border-[var(--accent-border)] hover:text-[var(--accent-text)] transition cursor-pointer"
          >
            <Command className="w-3.5 h-3.5 text-[var(--accent)]" />
            <span className="hidden xl:inline text-[var(--ink-muted)]">Cmd</span>
            <kbd className="px-1 py-0.5 text-[9px] bg-[var(--surface)] border border-[var(--border-color)] rounded-[2px] text-[var(--ink-muted)]">
              K
            </kbd>
          </button>

          {/* View mode toggle */}
          <button
            onClick={onToggleViewMode}
            title={
              viewMode === 'single-page'
                ? 'Current mode: All-in-One Continuous Scroll. Click to switch to Focus Tabs.'
                : 'Current mode: Focus Tabs. Click to switch to All-in-One Continuous Scroll.'
            }
            aria-label={`Current view mode is ${viewMode === 'single-page' ? 'All-in-One continuous scroll' : 'Focus Tabs'}. Click to switch.`}
            className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-[2px] text-[10px] font-mono uppercase tracking-[0.1em] border border-[var(--border-color)] text-[var(--ink)] hover:border-[var(--accent-border)] hover:text-[var(--accent-text)] transition cursor-pointer"
          >
            {viewMode === 'single-page' ? (
              <>
                <List className="w-3.5 h-3.5 text-[var(--accent)]" />
                <span>All-in-One</span>
              </>
            ) : (
              <>
                <Layers className="w-3.5 h-3.5 text-[var(--accent)]" />
                <span>Focus Tabs</span>
              </>
            )}
          </button>

          {/* CV Button */}
          <button
            onClick={onOpenResume}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[2px] text-[10px] font-mono uppercase tracking-[0.1em] border border-[var(--border-color)] text-[var(--ink)] hover:border-[var(--accent-border)] hover:text-[var(--accent-text)] transition cursor-pointer"
          >
            <FileText className="w-3 h-3 text-[var(--accent)]" />
            <span>CV</span>
          </button>

          {/* Transmit CTA */}
          <button
            onClick={() => handleNavClick('contact')}
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-1.5 rounded-[2px] text-[11px] font-mono uppercase tracking-[0.12em] bg-transparent border border-[var(--accent-border)] text-[var(--accent-text)] hover:bg-[var(--accent-border)] hover:text-[var(--accent-contrast)] transition font-medium cursor-pointer"
          >
            <Send className="w-3 h-3" />
            <span>Transmit</span>
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            className="lg:hidden p-2 text-[var(--ink)] hover:text-[var(--accent-text)] border border-[var(--border-color)] rounded-[2px] transition cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Variation 6 Vertical Nav for Desktop (Fixed bottom left) */}
      <nav
        aria-label="Side Navigation"
        className="hidden xl:block fixed bottom-12 left-10 z-30 vertical-nav pointer-events-auto"
      >
        <div className="flex gap-8">
          {navLinks.map((link) => {
            const isActive = activeView === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`font-mono text-[11px] uppercase tracking-[0.16em] transition-colors cursor-pointer ${
                  isActive
                    ? 'text-[var(--accent-text)] font-semibold'
                    : 'text-[var(--ink-muted)] hover:text-[var(--accent-text)]'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] z-50 bg-[var(--header-bg)] backdrop-blur-xl border-b border-[var(--border-color)] px-6 py-6 space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-[var(--border-subtle)]">
            <span className="font-mono text-xs text-[var(--accent-text)] tracking-widest uppercase">
              Navigation Index
            </span>
            <div className="flex items-center text-[10px] font-mono text-[var(--status-active)] uppercase tracking-wider">
              <span
                className="w-1.5 h-1.5 rounded-full mr-2"
                style={{ backgroundColor: 'var(--status-active)' }}
              />
              Online
            </div>
          </div>

          <div className="grid grid-cols-1 gap-2">
            {navLinks.map((link) => {
              const isActive = activeView === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`w-full text-left px-4 py-3 rounded-[2px] font-mono text-xs tracking-[0.15em] uppercase transition flex items-center justify-between ${
                    isActive
                      ? 'border border-[var(--accent-border)] text-[var(--accent-text)] bg-[var(--surface-card-hover)]'
                      : 'text-[var(--ink-muted)] hover:text-[var(--ink)] hover:bg-[var(--surface-card-hover)]'
                  }`}
                >
                  <span>{link.label}</span>
                  <span className="text-[10px] opacity-40">{link.code}</span>
                </button>
              );
            })}
          </div>

          <div className="pt-3 border-t border-[var(--border-subtle)] grid grid-cols-2 sm:grid-cols-4 gap-2">
            <button
              onClick={onToggleTheme}
              className="flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-[2px] font-mono text-[11px] uppercase tracking-wider border border-[var(--border-color)] text-[var(--ink)]"
            >
              {isDarkMode ? <Sun className="w-3.5 h-3.5 text-[var(--accent)]" /> : <Moon className="w-3.5 h-3.5" />}
              <span>{isDarkMode ? 'Light' : 'Dark'}</span>
            </button>

            <button
              onClick={() => {
                onOpenResume();
                setMobileMenuOpen(false);
              }}
              className="flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-[2px] font-mono text-[11px] uppercase tracking-wider border border-[var(--border-color)] text-[var(--ink)]"
            >
              <FileText className="w-3.5 h-3.5 text-[var(--accent)]" />
              <span>Resume</span>
            </button>

            <button
              onClick={() => {
                onToggleViewMode();
                setMobileMenuOpen(false);
              }}
              title="Toggle All-in-One vs Focus Tabs"
              className="flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-[2px] font-mono text-[11px] uppercase tracking-wider border border-[var(--border-color)] text-[var(--ink)]"
            >
              {viewMode === 'single-page' ? (
                <>
                  <Layers className="w-3.5 h-3.5 text-[var(--accent)]" />
                  <span>Tabs</span>
                </>
              ) : (
                <>
                  <List className="w-3.5 h-3.5 text-[var(--accent)]" />
                  <span>Scroll</span>
                </>
              )}
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCommandPalette();
              }}
              className="flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-[2px] font-mono text-[11px] uppercase tracking-wider border border-[var(--border-color)] text-[var(--ink)]"
            >
              <Command className="w-3.5 h-3.5 text-[var(--accent)]" />
              <span>Cmd K</span>
            </button>
          </div>

          {/* Mobile Socials */}
          <div className="pt-3 border-t border-[var(--border-subtle)] flex items-center justify-center gap-5 text-xs text-[var(--ink-muted)] font-mono">
            <a
              href={PERSONAL_INFO.social.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="hover:text-[var(--accent-text)] flex items-center gap-1.5 p-1"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <a
              href={PERSONAL_INFO.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="hover:text-[var(--accent-text)] flex items-center gap-1.5 p-1"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
            <a
              href={PERSONAL_INFO.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X Profile"
              className="hover:text-[var(--accent-text)] flex items-center gap-1.5 p-1"
            >
              <Twitter className="w-3.5 h-3.5" />
              <span>X</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
};
