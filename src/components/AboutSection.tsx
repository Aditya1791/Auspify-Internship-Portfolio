import React, { useState } from 'react';
import { Download } from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCES, EDUCATIONS } from '../data/portfolioData';

interface AboutSectionProps {
  onOpenResume: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenResume }) => {
  const [timelineTab, setTimelineTab] = useState<'experience' | 'education'>('experience');

  const values = [
    {
      code: '01/ARCH',
      title: 'Clean Architecture',
      description: 'Decoupled, modular, and self-documenting codebases that scale smoothly across teams.',
    },
    {
      code: '02/PERF',
      title: 'Velocity & Zero-Jank',
      description: 'Obsessed with sub-second page loads, lean bundle budgets, and zero cumulative layout shift.',
    },
    {
      code: '03/A11Y',
      title: 'Accessibility By Default',
      description: 'Semantic HTML markup, strict WCAG compliance, full keyboard navigability, and clear hierarchy.',
    },
    {
      code: '04/SYNC',
      title: 'Team Craftsmanship',
      description: 'Transparent engineering communication, thorough code reviews, and high ownership standards.',
    },
  ];

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="py-20 lg:py-28 border-t border-[var(--border-subtle)] relative"
    >
      <div className="w-full space-y-16">
        {/* Section Header */}
        <div className="space-y-3">
          <span className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[var(--accent-text)] block font-medium">
            // 01. PROFILE & SYSTEM ARCHITECTURE
          </span>
          <h2
            id="about-heading"
            className="font-serif italic font-semibold text-4xl sm:text-5xl lg:text-6xl text-[var(--ink-heading)] tracking-tight"
          >
            Engineering scalable systems with surgical craft
          </h2>
          <p className="text-sm sm:text-base text-[var(--ink-muted)] max-w-2xl font-light leading-relaxed">
            A journey focused on technical precision, resilience, and building products that make a measurable impact.
          </p>
        </div>

        {/* Bio & Core Architectural Values */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Bio text */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-[var(--surface-card)] backdrop-blur-md border border-[var(--border-color)] p-8 sm:p-10 rounded-[2px] space-y-6 transition-colors">
              <div className="flex items-center justify-between pb-4 border-b border-[var(--border-subtle)]">
                <span className="font-mono text-xs uppercase tracking-widest text-[var(--accent-text)] font-semibold">
                  IDENTITY RECORD
                </span>
                <span className="font-mono text-[10px] text-[var(--ink-muted)]">
                  ID: SWAIN-ADITYA
                </span>
              </div>

              <p className="text-sm sm:text-base text-[var(--ink)] leading-[1.8] font-light">
                {PERSONAL_INFO.bio}
              </p>

              <p className="text-sm sm:text-base text-[var(--ink)] leading-[1.8] font-light">
                Over the past 4+ years, I have architected and deployed solutions ranging from high-frequency cluster monitoring dashboards to edge-rendered retail platforms and AI retrieval engines.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href="/Aditya_Swain_WebDev_Resume.pdf"
                  download="Aditya_Swain_Resume.pdf"
                  className="px-6 py-3 bg-[var(--accent-border)] text-[var(--accent-contrast)] hover:opacity-90 font-mono text-xs uppercase tracking-[0.12em] rounded-[2px] transition flex items-center gap-2 cursor-pointer font-semibold"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Resume (PDF)</span>
                </a>
                <button
                  onClick={onOpenResume}
                  className="px-6 py-3 bg-transparent border border-[var(--border-color)] text-[var(--ink)] hover:border-[var(--accent-border)] hover:text-[var(--accent-text)] font-mono text-xs uppercase tracking-[0.12em] rounded-[2px] transition flex items-center gap-2 cursor-pointer font-medium"
                >
                  <span>View Full CV</span>
                </button>
              </div>
            </div>

            {/* Quick credentials */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-5 bg-[var(--surface-card)] border border-[var(--border-color)] rounded-[2px]">
                <span className="font-mono text-[10px] text-[var(--accent-text)] uppercase tracking-wider block mb-1 font-semibold">
                  POSTGRADUATE
                </span>
                <div className="font-medium text-xs sm:text-sm text-[var(--ink)]">M.Tech in CSE (Pursuing)</div>
                <div className="font-mono text-[11px] text-[var(--ink-muted)] mt-0.5">VSSUT, Burla • Aug 2026–Present</div>
              </div>

              <div className="p-5 bg-[var(--surface-card)] border border-[var(--border-color)] rounded-[2px]">
                <span className="font-mono text-[10px] text-[var(--accent-text)] uppercase tracking-wider block mb-1 font-semibold">
                  UNDERGRADUATE
                </span>
                <div className="font-medium text-xs sm:text-sm text-[var(--ink)]">B.Tech in CSE (6.8 CGPA)</div>
                <div className="font-mono text-[11px] text-[var(--ink-muted)] mt-0.5">Trident Academy of Tech (2022–2026)</div>
              </div>
            </div>
          </div>

          {/* 4 Pillars */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {values.map((val, idx) => (
              <div
                key={idx}
                className="p-6 bg-[var(--surface-card)] border border-[var(--border-color)] hover:border-[var(--accent-border)] rounded-[2px] transition-colors space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] text-[var(--accent-text)] font-semibold tracking-widest">
                    {val.code}
                  </span>
                  <div
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: 'var(--tech-bullet)' }}
                  />
                </div>
                <h3 className="font-mono text-sm font-semibold text-[var(--ink)] tracking-wide">
                  {val.title}
                </h3>
                <p className="text-xs text-[var(--ink-muted)] leading-relaxed font-light">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8 pt-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[var(--border-subtle)]">
            <div>
              <span className="font-mono text-[10px] text-[var(--ink-muted)] uppercase tracking-widest block">
                CHRONOLOGY
              </span>
              <h3 className="font-serif italic font-semibold text-2xl sm:text-3xl text-[var(--ink-heading)]">
                Career Track & Academic Honors
              </h3>
            </div>

            {/* Tab switch */}
            <div className="flex items-center gap-2 p-1 border border-[var(--border-color)] rounded-[2px] bg-[var(--surface-card)] self-start sm:self-auto">
              <button
                onClick={() => setTimelineTab('experience')}
                className={`font-mono text-xs uppercase tracking-wider px-3 py-1.5 transition rounded-[2px] cursor-pointer ${
                  timelineTab === 'experience'
                    ? 'bg-[var(--accent-border)] text-[var(--accent-contrast)] font-semibold'
                    : 'text-[var(--ink-muted)] hover:text-[var(--ink)]'
                }`}
              >
                Experience ({EXPERIENCES.length})
              </button>

              <button
                onClick={() => setTimelineTab('education')}
                className={`font-mono text-xs uppercase tracking-wider px-3 py-1.5 transition rounded-[2px] cursor-pointer ${
                  timelineTab === 'education'
                    ? 'bg-[var(--accent-border)] text-[var(--accent-contrast)] font-semibold'
                    : 'text-[var(--ink-muted)] hover:text-[var(--ink)]'
                }`}
              >
                Education ({EDUCATIONS.length})
              </button>
            </div>
          </div>

          {timelineTab === 'experience' ? (
            <div className="space-y-6">
              {EXPERIENCES.map((exp, idx) => (
                <div
                  key={exp.id}
                  className="bg-[var(--surface-card)] border border-[var(--border-color)] hover:border-[var(--accent-border)] p-6 sm:p-8 rounded-[2px] transition space-y-4"
                >
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-[var(--border-subtle)] pb-4">
                    <div>
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs text-[var(--accent-text)] font-semibold">0{idx + 1}.</span>
                        <h4 className="text-base sm:text-lg font-semibold text-[var(--ink)]">
                          {exp.role}
                        </h4>
                        <span className="text-xs text-[var(--accent-text)] font-mono font-medium">
                          @ {exp.company}
                        </span>
                      </div>
                      <span className="font-mono text-[11px] text-[var(--ink-muted)] block mt-1">
                        {exp.location}
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      {exp.current && (
                        <span className="font-mono text-[9px] uppercase tracking-widest px-2 py-0.5 rounded-[2px] border border-[var(--accent-border)] text-[var(--accent-text)] font-semibold">
                          CURRENT
                        </span>
                      )}
                      <span className="font-mono text-xs text-[var(--ink-muted)]">
                        {exp.period}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-2 text-xs sm:text-sm text-[var(--ink)] font-light leading-relaxed">
                    {exp.description.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <span
                          className="w-1.5 h-1.5 mt-1.5 shrink-0 rounded-[1px]"
                          style={{ backgroundColor: 'var(--tech-bullet)' }}
                        />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="font-mono text-[10px] uppercase tracking-wider px-2 py-1 rounded-[2px] bg-[var(--surface-card-hover)] border border-[var(--border-subtle)] text-[var(--ink)]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {EDUCATIONS.map((edu) => (
                <div
                  key={edu.id}
                  className="bg-[var(--surface-card)] border border-[var(--border-color)] p-6 sm:p-8 rounded-[2px] space-y-4"
                >
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-[var(--border-subtle)] pb-4">
                    <div>
                      <h4 className="text-base sm:text-lg font-semibold text-[var(--ink)]">
                        {edu.degree}
                      </h4>
                      <p className="font-mono text-xs text-[var(--accent-text)] mt-0.5 font-medium">
                        {edu.institution} • {edu.location}
                      </p>
                    </div>
                    <span className="font-mono text-xs text-[var(--ink-muted)]">
                      {edu.period}
                    </span>
                  </div>

                  {edu.score && (
                    <div className="inline-block font-mono text-[11px] px-2.5 py-1 rounded-[2px] border border-[var(--accent-border)] text-[var(--accent-text)] font-semibold">
                      {edu.score}
                    </div>
                  )}

                  <ul className="space-y-2 text-xs sm:text-sm text-[var(--ink)] font-light">
                    {edu.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <span
                          className="w-1.5 h-1.5 mt-1.5 shrink-0 rounded-[1px]"
                          style={{ backgroundColor: 'var(--tech-bullet)' }}
                        />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
