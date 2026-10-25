import React, { useState, useMemo } from 'react';
import { ExternalLink, Github, Search, ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types/portfolio';
import { filterProjects } from '../utils/portfolioUtils';

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Full Stack', 'AI & ML', 'Frontend / UI', 'Mobile & Cloud'];

  const filteredProjects = useMemo(() => {
    return filterProjects(PROJECTS, selectedCategory, searchQuery);
  }, [selectedCategory, searchQuery]);

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="py-20 lg:py-28 border-t border-[var(--border-subtle)] relative"
    >
      <div className="w-full space-y-12">
        {/* Section Header */}
        <div className="space-y-3">
          <span className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[var(--accent-text)] block font-medium">
            // 03. INDEX OF SELECTED WORKS
          </span>
          <h2
            id="projects-heading"
            className="font-serif italic font-semibold text-4xl sm:text-5xl lg:text-6xl text-[var(--ink-heading)] tracking-tight"
          >
            Digital systems & production deployments
          </h2>
          <p className="text-sm sm:text-base text-[var(--ink-muted)] max-w-2xl font-light leading-relaxed">
            Engineered with a focus on real-time throughput, developer ergonomic tooling, and high-conversion user journeys.
          </p>
        </div>

        {/* Toolbar: Category tabs and search */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 pb-4 border-b border-[var(--border-subtle)]">
          {/* Categories */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  aria-pressed={isSelected}
                  className={`font-mono text-xs uppercase tracking-wider px-3.5 py-1.5 rounded-[2px] transition cursor-pointer ${
                    isSelected
                      ? 'bg-[var(--accent-border)] text-[var(--accent-contrast)] font-semibold shadow-sm'
                      : 'border border-[var(--border-color)] text-[var(--ink-muted)] hover:text-[var(--ink)] hover:border-[var(--accent-border)] bg-[var(--surface-card)]'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Search bar */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--ink-muted)]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="SEARCH BY TECH OR KEYWORD..."
              aria-label="Search projects"
              className="w-full pl-10 pr-4 py-2 font-mono text-xs uppercase tracking-wider rounded-[2px] bg-[var(--surface-card)] border border-[var(--border-color)] text-[var(--ink)] placeholder:text-[var(--ink-muted)] focus:outline-none focus:border-[var(--accent-border)] transition"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 font-mono text-[10px] text-[var(--ink-muted)] hover:text-[var(--accent-text)] cursor-pointer"
              >
                CLEAR
              </button>
            )}
          </div>
        </div>

        {/* Project Grid */}
        {filteredProjects.length === 0 ? (
          <div className="p-12 text-center border border-[var(--border-color)] bg-[var(--surface-card)] rounded-[2px] space-y-3">
            <span className="font-mono text-xs text-[var(--accent-text)] uppercase tracking-widest block font-semibold">
              // ZERO RESULTS
            </span>
            <p className="text-sm font-mono text-[var(--ink-muted)]">
              No deployed works found matching query "{searchQuery}"
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="px-4 py-2 font-mono text-xs uppercase tracking-wider border border-[var(--accent-border)] text-[var(--accent-text)] hover:bg-[var(--accent-border)] hover:text-[var(--accent-contrast)] rounded-[2px] transition cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProjects.map((project, idx) => (
              <article
                key={project.id}
                className="group bg-[var(--surface-card)] border border-[var(--border-color)] hover:border-[var(--accent-border)] rounded-[2px] transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-lg"
              >
                <div>
                  {/* Image container */}
                  <div className="relative h-48 w-full overflow-hidden bg-slate-900 border-b border-[var(--border-subtle)]">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      decoding="async"
                      width="600"
                      height="300"
                      className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500 opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] via-transparent to-transparent opacity-80" />

                    <div className="absolute top-3 left-3 flex items-center gap-2">
                      <span className="font-mono text-[9px] uppercase tracking-widest px-2 py-0.5 rounded-[2px] bg-[var(--bg)] border border-[var(--border-color)] text-[var(--ink)]">
                        {project.category}
                      </span>
                      {project.featured && (
                        <span className="font-mono text-[9px] uppercase tracking-widest px-2 py-0.5 rounded-[2px] bg-[var(--badge-bg)] text-[var(--badge-text)] font-bold">
                          FEATURED
                        </span>
                      )}
                    </div>

                    <div className="absolute top-3 right-3 font-mono text-[10px] text-[var(--ink-muted)]">
                      0{idx + 1}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="font-serif italic text-2xl text-[var(--ink-heading)] group-hover:text-[var(--accent-text)] transition-colors leading-tight">
                        {project.title}
                      </h3>
                      <p className="font-mono text-xs text-[var(--ink-muted)] mt-1">
                        {project.tagline}
                      </p>
                    </div>

                    <p className="text-xs sm:text-sm text-[var(--ink-muted)] font-light leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                    {/* Technical metrics */}
                    <div className="grid grid-cols-3 gap-2 py-3 border-y border-[var(--border-subtle)] font-mono text-center">
                      {project.metrics.map((m, i) => (
                        <div key={i}>
                          <div className="text-xs font-semibold text-[var(--ink)]">
                            {m.value}
                          </div>
                          <div className="text-[9px] text-[var(--ink-muted)] uppercase tracking-wider truncate">
                            {m.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Tech badges */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.tags.slice(0, 4).map((tag) => (
                        <span
                          key={tag}
                          className="font-mono text-[10px] px-2 py-0.5 rounded-[1px] bg-[var(--surface-card-hover)] border border-[var(--border-subtle)] text-[var(--ink)]"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 4 && (
                        <span className="font-mono text-[10px] text-[var(--ink-muted)] px-1 py-0.5">
                          +{project.tags.length - 4}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Card footer actions */}
                <div className="px-6 py-4 bg-[var(--surface-card)] border-t border-[var(--border-subtle)] flex items-center justify-between">
                  <button
                    onClick={() => onSelectProject(project)}
                    className="font-mono text-xs uppercase tracking-wider text-[var(--accent-text)] hover:underline flex items-center gap-1 cursor-pointer font-semibold"
                  >
                    <span>Case Study</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  <div className="flex items-center gap-3 text-[var(--ink-muted)]">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Open demo for ${project.title}`}
                        title={`Open live demo for ${project.title}`}
                        className="hover:text-[var(--accent-text)] transition"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Open source for ${project.title}`}
                        title={`Open GitHub repository for ${project.title}`}
                        className="hover:text-[var(--accent-text)] transition"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
