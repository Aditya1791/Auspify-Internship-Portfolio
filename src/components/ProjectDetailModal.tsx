import React from 'react';
import { X, ExternalLink, Github } from 'lucide-react';
import { Project } from '../types/portfolio';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fade-in"
    >
      <div className="relative w-full max-w-3xl max-h-[90vh] bg-[var(--surface-modal)] text-[var(--ink)] rounded-[2px] shadow-2xl border border-[var(--border-color)] flex flex-col overflow-hidden transition-colors">
        {/* Modal Header Image */}
        <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-slate-900 border-b border-[var(--border-subtle)]">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover grayscale contrast-125 opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--surface-modal)] via-transparent to-transparent opacity-90" />

          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close project modal"
            className="absolute top-4 right-4 p-2 bg-[var(--surface-modal)] border border-[var(--border-color)] text-[var(--ink)] hover:text-[var(--accent-text)] hover:border-[var(--accent-border)] rounded-[2px] transition z-10 cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Header Title overlay */}
          <div className="absolute bottom-5 left-6 right-6 space-y-1">
            <div className="flex items-center gap-2">
              <span className="font-mono text-[9px] uppercase tracking-widest px-2 py-0.5 rounded-[1px] bg-[var(--badge-bg)] text-[var(--badge-text)] font-bold">
                {project.category}
              </span>
              {project.featured && (
                <span className="font-mono text-[9px] uppercase tracking-widest px-2 py-0.5 rounded-[1px] border border-[var(--accent-border)] text-[var(--accent-text)] font-semibold">
                  CASE STUDY
                </span>
              )}
            </div>
            <h2 id="project-modal-title" className="font-serif italic text-3xl sm:text-4xl text-[var(--ink-heading)]">
              {project.title}
            </h2>
            <p className="font-mono text-xs text-[var(--ink-muted)]">
              {project.tagline}
            </p>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6">
          {/* Key Metrics */}
          <div className="grid grid-cols-3 gap-3 p-4 bg-[var(--surface-card)] border border-[var(--border-color)] rounded-[2px] font-mono text-center">
            {project.metrics.map((metric, idx) => (
              <div key={idx}>
                <div className="text-base sm:text-lg font-semibold text-[var(--accent-text)]">
                  {metric.value}
                </div>
                <div className="text-[9px] text-[var(--ink-muted)] uppercase tracking-wider">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>

          {/* Overview */}
          <div className="space-y-2">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--accent-text)] block font-semibold">
              // OVERVIEW & OBJECTIVE
            </span>
            <p className="text-xs sm:text-sm text-[var(--ink)] font-light leading-relaxed">
              {project.fullDescription || project.description}
            </p>
          </div>

          {/* Key Features */}
          <div className="space-y-2">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--accent-text)] block font-semibold">
              // CORE CAPABILITIES
            </span>
            <ul className="space-y-2 font-light">
              {project.keyFeatures.map((feat, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--ink)]">
                  <span
                    className="w-1.5 h-1.5 mt-1.5 shrink-0 rounded-[1px]"
                    style={{ backgroundColor: 'var(--tech-bullet)' }}
                  />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Architecture */}
          <div className="space-y-2">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--accent-text)] block font-semibold">
              // ARCHITECTURAL IMPLEMENTATION
            </span>
            <div className="space-y-2">
              {project.architecture.map((arch, i) => (
                <div
                  key={i}
                  className="p-3 bg-[var(--surface-card)] border border-[var(--border-color)] font-mono text-xs text-[var(--ink)] rounded-[2px]"
                >
                  {arch}
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div className="space-y-2">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--accent-text)] block font-semibold">
              // TECHNOLOGY STACK
            </span>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-[1px] bg-[var(--surface-card-hover)] border border-[var(--border-subtle)] text-[var(--ink)] font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-[var(--border-subtle)] bg-[var(--surface-card)] flex items-center justify-between">
          <div className="flex items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 border border-[var(--accent-border)] text-[var(--accent-text)] hover:bg-[var(--accent-border)] hover:text-[var(--accent-contrast)] font-mono text-xs uppercase tracking-wider rounded-[2px] transition font-semibold"
              >
                <span>Live Deploy</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 border border-[var(--border-color)] text-[var(--ink)] hover:border-[var(--accent-border)] hover:text-[var(--accent-text)] font-mono text-xs uppercase tracking-wider rounded-[2px] transition"
              >
                <Github className="w-3.5 h-3.5" />
                <span>Source</span>
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 font-mono text-xs uppercase tracking-wider border border-[var(--border-color)] text-[var(--ink-muted)] hover:text-[var(--ink)] hover:border-[var(--accent-border)] rounded-[2px] transition cursor-pointer"
          >
            Dismiss
          </button>
        </div>
      </div>
    </div>
  );
};
