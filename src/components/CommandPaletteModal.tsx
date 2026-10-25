import React, { useState, useEffect, useRef } from 'react';
import { Search, X, Code, GraduationCap, Briefcase, Mail, Phone, Moon, Sun, Download, FileText, Github, Linkedin, Twitter, ArrowRight, Layers } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS } from '../data/portfolioData';
import { PageView, Project } from '../types/portfolio';

interface CommandPaletteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (view: PageView) => void;
  onOpenResume: () => void;
  onSelectProject: (project: Project) => void;
  isDarkMode: boolean;
  onToggleTheme: () => void;
  viewMode: 'single-page' | 'tabbed';
  onToggleViewMode: () => void;
  onShowToast: (message: string) => void;
}

export const CommandPaletteModal: React.FC<CommandPaletteModalProps> = ({
  isOpen,
  onClose,
  onNavigate,
  onOpenResume,
  onSelectProject,
  isDarkMode,
  onToggleTheme,
  viewMode,
  onToggleViewMode,
  onShowToast,
}) => {
  const [search, setSearch] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setSearch('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  interface CommandItem {
    id: string;
    label: string;
    category: 'Navigation' | 'Actions' | 'Projects' | 'Social';
    icon: React.ReactNode;
    shortcut?: string;
    action: () => void;
  }

  const allCommands: CommandItem[] = [
    // Navigation
    {
      id: 'nav-home',
      label: 'Go to Index / Overview',
      category: 'Navigation',
      icon: <ArrowRight className="w-4 h-4 text-[var(--accent-text)]" />,
      action: () => {
        onNavigate('home');
        onClose();
      },
    },
    {
      id: 'nav-about',
      label: 'Go to Profile & Education (VSSUT Burla)',
      category: 'Navigation',
      icon: <GraduationCap className="w-4 h-4 text-[var(--accent-text)]" />,
      action: () => {
        onNavigate('about');
        onClose();
      },
    },
    {
      id: 'nav-projects',
      label: 'Go to Shipped Projects Showcase',
      category: 'Navigation',
      icon: <Code className="w-4 h-4 text-[var(--accent-text)]" />,
      action: () => {
        onNavigate('projects');
        onClose();
      },
    },
    {
      id: 'nav-skills',
      label: 'Go to Skills & Runtime Tooling',
      category: 'Navigation',
      icon: <Briefcase className="w-4 h-4 text-[var(--accent-text)]" />,
      action: () => {
        onNavigate('skills');
        onClose();
      },
    },
    {
      id: 'nav-contact',
      label: 'Go to Contact & Location (Burla, Sambalpur)',
      category: 'Navigation',
      icon: <Mail className="w-4 h-4 text-[var(--accent-text)]" />,
      action: () => {
        onNavigate('contact');
        onClose();
      },
    },

    // Actions
    {
      id: 'act-resume-pdf',
      label: 'Download Resume (Official PDF)',
      category: 'Actions',
      shortcut: 'PDF',
      icon: <Download className="w-4 h-4 text-[var(--accent-text)]" />,
      action: () => {
        const link = document.createElement('a');
        link.href = '/Aditya_Swain_WebDev_Resume.pdf';
        link.download = 'Aditya_Swain_Resume.pdf';
        link.click();
        onShowToast('Downloading official resume PDF...');
        onClose();
      },
    },
    {
      id: 'act-resume-modal',
      label: 'Open Interactive Curriculum Vitae (CV)',
      category: 'Actions',
      icon: <FileText className="w-4 h-4 text-[var(--accent-text)]" />,
      action: () => {
        onClose();
        onOpenResume();
      },
    },
    {
      id: 'act-copy-email',
      label: `Copy Email: ${PERSONAL_INFO.email}`,
      category: 'Actions',
      shortcut: 'COPY',
      icon: <Mail className="w-4 h-4 text-[var(--accent-text)]" />,
      action: () => {
        navigator.clipboard.writeText(PERSONAL_INFO.email);
        onShowToast(`Copied ${PERSONAL_INFO.email} to clipboard!`);
        onClose();
      },
    },
    {
      id: 'act-copy-phone',
      label: `Copy Phone: ${PERSONAL_INFO.phone}`,
      category: 'Actions',
      shortcut: 'COPY',
      icon: <Phone className="w-4 h-4 text-[var(--accent-text)]" />,
      action: () => {
        navigator.clipboard.writeText(PERSONAL_INFO.phone);
        onShowToast(`Copied ${PERSONAL_INFO.phone} to clipboard!`);
        onClose();
      },
    },
    {
      id: 'act-toggle-theme',
      label: `Toggle Theme: Switch to ${isDarkMode ? 'Light (Editorial Parchment)' : 'Dark (Architectural Obsidian)'}`,
      category: 'Actions',
      shortcut: 'T',
      icon: isDarkMode ? <Sun className="w-4 h-4 text-[var(--accent-text)]" /> : <Moon className="w-4 h-4 text-[var(--accent-text)]" />,
      action: () => {
        onToggleTheme();
        onShowToast(`Theme switched to ${isDarkMode ? 'Light Mode' : 'Dark Mode'}`);
        onClose();
      },
    },
    {
      id: 'act-toggle-view',
      label: `Toggle Page Mode: Switch to ${viewMode === 'single-page' ? 'Focus Tabbed Mode' : 'Continuous Scroll Mode'}`,
      category: 'Actions',
      shortcut: 'V',
      icon: <Layers className="w-4 h-4 text-[var(--accent-text)]" />,
      action: () => {
        onToggleViewMode();
        onShowToast(`Switched view to ${viewMode === 'single-page' ? 'Focus Tabbed Mode' : 'Continuous Scroll Mode'}`);
        onClose();
      },
    },

    // Projects
    ...PROJECTS.map((proj) => ({
      id: `proj-${proj.id}`,
      label: `Inspect Project: ${proj.title}`,
      category: 'Projects' as const,
      icon: <Code className="w-4 h-4 text-[var(--accent-text)]" />,
      action: () => {
        onClose();
        onSelectProject(proj);
      },
    })),

    // Social
    {
      id: 'soc-github',
      label: 'Open GitHub Profile (Aditya1791)',
      category: 'Social',
      icon: <Github className="w-4 h-4 text-[var(--accent-text)]" />,
      action: () => {
        window.open(PERSONAL_INFO.social.github, '_blank', 'noopener,noreferrer');
        onClose();
      },
    },
    {
      id: 'soc-linkedin',
      label: 'Open LinkedIn Profile (Aditya Ranjan Swain)',
      category: 'Social',
      icon: <Linkedin className="w-4 h-4 text-[var(--accent-text)]" />,
      action: () => {
        window.open(PERSONAL_INFO.social.linkedin, '_blank', 'noopener,noreferrer');
        onClose();
      },
    },
    {
      id: 'soc-x',
      label: 'Open X / Twitter Profile (@Monkey_D_Adi)',
      category: 'Social',
      icon: <Twitter className="w-4 h-4 text-[var(--accent-text)]" />,
      action: () => {
        window.open(PERSONAL_INFO.social.twitter, '_blank', 'noopener,noreferrer');
        onClose();
      },
    },
  ];

  const filtered = allCommands.filter((c) =>
    c.label.toLowerCase().includes(search.toLowerCase()) ||
    c.category.toLowerCase().includes(search.toLowerCase())
  );

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % (filtered.length || 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filtered.length) % (filtered.length || 1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filtered[selectedIndex]) {
        filtered[selectedIndex].action();
      }
    } else if (e.key === 'Escape') {
      onClose();
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Developer Command Palette"
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/70 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-[var(--surface-modal)] border border-[var(--border-color)] rounded-[2px] shadow-2xl overflow-hidden font-mono text-[var(--ink)]"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={handleKeyDown}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-[var(--border-subtle)] bg-[var(--surface-card)]">
          <Search className="w-4 h-4 text-[var(--accent-text)] mr-3 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setSelectedIndex(0);
            }}
            placeholder="Type a command or search (e.g. projects, resume, theme, github)..."
            className="w-full bg-transparent text-xs sm:text-sm text-[var(--ink)] placeholder:text-[var(--ink-muted)] focus:outline-none"
          />
          <button
            onClick={onClose}
            aria-label="Close command palette"
            className="p-1 text-[var(--ink-muted)] hover:text-[var(--accent-text)] transition cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Command Items List */}
        <div className="max-h-80 overflow-y-auto p-2 space-y-1">
          {filtered.length === 0 ? (
            <div className="p-8 text-center text-xs text-[var(--ink-muted)]">
              No commands matching "{search}"
            </div>
          ) : (
            filtered.map((cmd, idx) => {
              const isSelected = idx === selectedIndex;
              return (
                <button
                  key={cmd.id}
                  onClick={cmd.action}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-[2px] text-xs transition cursor-pointer text-left ${
                    isSelected
                      ? 'bg-[var(--accent-border)] text-[var(--accent-contrast)] font-medium'
                      : 'hover:bg-[var(--surface-card-hover)] text-[var(--ink)]'
                  }`}
                >
                  <div className="flex items-center gap-3 truncate">
                    <span className="shrink-0">{cmd.icon}</span>
                    <span className="truncate">{cmd.label}</span>
                  </div>

                  <div className="flex items-center gap-2 shrink-0 ml-3">
                    <span className="text-[9px] uppercase tracking-wider opacity-60">
                      {cmd.category}
                    </span>
                    {cmd.shortcut && (
                      <kbd className="px-1.5 py-0.5 text-[9px] rounded bg-[var(--surface-card)] border border-[var(--border-color)] text-[var(--ink-muted)]">
                        {cmd.shortcut}
                      </kbd>
                    )}
                  </div>
                </button>
              );
            })
          )}
        </div>

        {/* Footer shortcuts helper */}
        <div className="px-4 py-2 border-t border-[var(--border-subtle)] bg-[var(--surface-card)] flex items-center justify-between text-[10px] text-[var(--ink-muted)]">
          <div className="flex items-center gap-3">
            <span><kbd className="px-1 py-0.5 rounded bg-[var(--surface-modal)] border border-[var(--border-color)]">↑↓</kbd> Navigate</span>
            <span><kbd className="px-1 py-0.5 rounded bg-[var(--surface-modal)] border border-[var(--border-color)]">↵</kbd> Select</span>
            <span><kbd className="px-1 py-0.5 rounded bg-[var(--surface-modal)] border border-[var(--border-color)]">esc</kbd> Dismiss</span>
          </div>
          <span className="hidden sm:inline">Aditya Swain • AS.OS CLI</span>
        </div>
      </div>
    </div>
  );
};
