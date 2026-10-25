import React, { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import { SKILLS } from '../data/portfolioData';
import { filterSkills } from '../utils/portfolioUtils';

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Frontend', 'Backend', 'Database & Cloud', 'Tools & DevOps'];

  const filteredSkills = useMemo(() => {
    return filterSkills(SKILLS, selectedCategory, searchQuery);
  }, [selectedCategory, searchQuery]);

  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="py-20 lg:py-28 border-t border-[var(--border-subtle)] relative"
    >
      <div className="w-full space-y-12">
        {/* Section Header */}
        <div className="space-y-3">
          <span className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[var(--accent-text)] block font-medium">
            // 02. TECHNICAL SPECIFICATIONS & TOOLS
          </span>
          <h2
            id="skills-heading"
            className="font-serif italic font-semibold text-4xl sm:text-5xl lg:text-6xl text-[var(--ink-heading)] tracking-tight"
          >
            Capabilities & runtime competencies
          </h2>
          <p className="text-sm sm:text-base text-[var(--ink-muted)] max-w-2xl font-light leading-relaxed">
            Proficiencies across contemporary frontend architectures, distributed backends, persistent databases, and CI/CD pipelines.
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
              placeholder="SEARCH STACK (E.G. REACT, DOCKER)..."
              aria-label="Filter skills by keyword"
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

        {/* Skills Grid */}
        {filteredSkills.length === 0 ? (
          <div className="p-12 text-center border border-[var(--border-color)] bg-[var(--surface-card)] rounded-[2px] space-y-3">
            <span className="font-mono text-xs text-[var(--accent-text)] uppercase tracking-widest block font-semibold">
              // NO SYSTEM MATCH
            </span>
            <p className="text-sm font-mono text-[var(--ink-muted)]">
              No technical capabilities found for query "{searchQuery}"
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredSkills.map((skill) => (
              <div
                key={skill.name}
                className="p-5 bg-[var(--surface-card)] border border-[var(--border-color)] hover:border-[var(--accent-border)] rounded-[2px] transition duration-200 group space-y-3"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span
                      className="w-1.5 h-1.5 rounded-[1px] group-hover:scale-125 transition-transform"
                      style={{ backgroundColor: 'var(--tech-bullet)' }}
                    />
                    <h3 className="font-mono text-xs sm:text-sm font-semibold text-[var(--ink)] tracking-wide">
                      {skill.name}
                    </h3>
                  </div>
                  <span className="font-mono text-xs font-semibold text-[var(--accent-text)]">
                    {skill.level}%
                  </span>
                </div>

                {/* Progress bar with dynamic accent */}
                <div className="w-full h-1 bg-[var(--border-subtle)] overflow-hidden rounded-[1px]">
                  <div
                    className="h-full transition-all duration-500"
                    style={{
                      width: `${skill.level}%`,
                      backgroundColor: 'var(--tech-bullet)',
                    }}
                    role="progressbar"
                    aria-valuenow={skill.level}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-label={`${skill.name} proficiency level`}
                  />
                </div>

                <div className="flex items-center justify-between font-mono text-[10px] text-[var(--ink-muted)] uppercase tracking-wider">
                  <span>{skill.category}</span>
                  <span>{skill.experienceYears} {skill.experienceYears === 1 ? 'yr' : 'yrs'} exp</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
