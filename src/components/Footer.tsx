import React from 'react';
import { ArrowUp, Github, Linkedin, Twitter } from 'lucide-react';
import { PageView } from '../types/portfolio';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onNavigate: (view: PageView) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full border-t border-[var(--border-subtle)] bg-[var(--bg)] py-12 px-6 sm:px-12 relative z-10 transition-colors">
      <div className="w-full space-y-8">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
          {/* Left Metadata */}
          <div className="space-y-3">
            <div className="font-mono text-[10px] sm:text-[11px] text-[var(--ink-muted)] leading-[2] uppercase tracking-[0.12em]">
              ADITYA RANJAN SWAIN — FULL STACK &amp; AI DEVELOPER<br />
              BURLA, SAMBALPUR (VSSUT), ODISHA [21.5034° N, 83.8711° E]<br />
              M.TECH IN COMPUTER SCIENCE &amp; ENGINEERING // ACTIVE
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 text-xs font-mono text-[var(--ink-muted)]">
              <span className="text-[10px] uppercase tracking-wider text-[var(--accent-text)] font-semibold">CONNECT:</span>
              <a
                href={PERSONAL_INFO.social.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile (Aditya1791)"
                title="GitHub Profile"
                className="hover:text-[var(--accent-text)] transition flex items-center gap-1"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
              <a
                href={PERSONAL_INFO.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                title="LinkedIn Profile"
                className="hover:text-[var(--accent-text)] transition flex items-center gap-1"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>
              <a
                href={PERSONAL_INFO.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X Profile (@Monkey_D_Adi)"
                title="X Profile"
                className="hover:text-[var(--accent-text)] transition flex items-center gap-1"
              >
                <Twitter className="w-3.5 h-3.5" />
                <span>X</span>
              </a>
            </div>
          </div>

          {/* Quick Nav Links */}
          <nav aria-label="Footer Navigation" className="flex flex-wrap items-center gap-6 font-mono text-[11px] uppercase tracking-[0.15em]">
            <button
              onClick={() => onNavigate('home')}
              className="text-[var(--ink-muted)] hover:text-[var(--accent-text)] transition cursor-pointer"
            >
              Index
            </button>
            <button
              onClick={() => onNavigate('about')}
              className="text-[var(--ink-muted)] hover:text-[var(--accent-text)] transition cursor-pointer"
            >
              Profile
            </button>
            <button
              onClick={() => onNavigate('projects')}
              className="text-[var(--ink-muted)] hover:text-[var(--accent-text)] transition cursor-pointer"
            >
              Work
            </button>
            <button
              onClick={() => onNavigate('skills')}
              className="text-[var(--ink-muted)] hover:text-[var(--accent-text)] transition cursor-pointer"
            >
              Tools
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="text-[var(--ink-muted)] hover:text-[var(--accent-text)] transition cursor-pointer"
            >
              Contact
            </button>
          </nav>

          {/* Right Metadata */}
          <div className="flex flex-col items-start md:items-end gap-2">
            <div className="font-mono text-[10px] sm:text-[11px] text-[var(--ink-muted)] leading-[2] uppercase tracking-[0.12em] text-left md:text-right">
              DESIGN &amp; CODE © 2026<br />
              ALL RIGHTS RESERVED // AS.OS
            </div>

            <button
              onClick={scrollToTop}
              aria-label="Back to top of page"
              className="p-2 border border-[var(--border-color)] text-[var(--ink-muted)] hover:border-[var(--accent-border)] hover:text-[var(--accent-text)] rounded-[2px] transition mt-1 cursor-pointer"
              title="Return to index"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
