import React from 'react';
import { X, Download, Printer, Mail, MapPin, Briefcase, GraduationCap, Award, Phone, Github, Linkedin, Code, Twitter } from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCES, EDUCATIONS, SKILLS, PROJECTS } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    const markdownResume = `# ${PERSONAL_INFO.name}
${PERSONAL_INFO.title}
Email: ${PERSONAL_INFO.email} | Phone: ${PERSONAL_INFO.phone} | Location: ${PERSONAL_INFO.location}
LinkedIn: ${PERSONAL_INFO.social.linkedin} | GitHub: ${PERSONAL_INFO.social.github} | X: ${PERSONAL_INFO.social.twitter}

## Professional Summary
${PERSONAL_INFO.bio}

## Education
${EDUCATIONS.map(
  (edu) => `### ${edu.degree}
${edu.institution} (${edu.period}) — ${edu.score}
${edu.highlights.map((h) => `- ${h}`).join('\n')}
`
).join('\n')}

## Flagship Projects
${PROJECTS.map(
  (p) => `### ${p.title}
Tags: ${p.tags.join(', ')}
${p.description}
${p.keyFeatures.map((k) => `- ${k}`).join('\n')}
`
).join('\n')}

## Internships & Experience
${EXPERIENCES.map(
  (e) => `### ${e.role} — ${e.company} (${e.period})
Location: ${e.location}
${e.description.map((d) => `- ${d}`).join('\n')}
Tech Stack: ${e.skills.join(', ')}
`
).join('\n')}

## Technical Skills
${SKILLS.map((s) => `${s.name} (${s.category})`).join(', ')}
`;

    const blob = new Blob([markdownResume], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Resume-${PERSONAL_INFO.shortName.replace(/\s+/g, '_')}.md`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fade-in"
    >
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-[var(--surface-modal)] text-[var(--ink)] rounded-[2px] shadow-2xl border border-[var(--border-color)] flex flex-col overflow-hidden transition-colors">
        {/* Header bar */}
        <div className="flex items-center justify-between px-6 sm:px-8 py-5 border-b border-[var(--border-subtle)] bg-[var(--surface-card)]">
          <div>
            <span className="font-mono text-[9px] uppercase tracking-widest text-[var(--accent-text)] block font-semibold">
              // CURRICULUM VITAE
            </span>
            <h2 id="resume-modal-title" className="font-serif italic text-2xl text-[var(--ink-heading)]">
              {PERSONAL_INFO.name}
            </h2>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="/Aditya_Swain_WebDev_Resume.pdf"
              download="Aditya_Swain_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider bg-[var(--accent-border)] text-[var(--accent-contrast)] hover:opacity-90 rounded-[2px] transition cursor-pointer font-semibold"
              title="Download Original PDF Resume"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider text-[var(--ink)] border border-[var(--border-color)] hover:border-[var(--accent-border)] rounded-[2px] transition cursor-pointer"
              title="Print Resume"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print</span>
            </button>

            <button
              onClick={handleDownload}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider border border-[var(--border-color)] text-[var(--ink-muted)] hover:text-[var(--ink)] rounded-[2px] transition cursor-pointer font-medium"
              title="Download Markdown Resume"
            >
              <span>.md</span>
            </button>

            <button
              onClick={onClose}
              aria-label="Close resume modal"
              className="p-1.5 text-[var(--ink-muted)] hover:text-[var(--accent-text)] transition cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-10 space-y-8 font-light text-[var(--ink)]">
          {/* Header Summary */}
          <div className="border-b border-[var(--border-subtle)] pb-6">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
              <div>
                <h1 className="font-serif italic text-3xl sm:text-4xl text-[var(--ink-heading)]">
                  {PERSONAL_INFO.name}
                </h1>
                <p className="font-mono text-xs uppercase tracking-wider text-[var(--accent-text)] mt-1 font-semibold">
                  {PERSONAL_INFO.title}
                </p>
                <p className="font-mono text-[11px] text-[var(--ink-muted)] mt-0.5">
                  {PERSONAL_INFO.subtitle}
                </p>
              </div>

              <div className="font-mono text-[11px] space-y-1 text-[var(--ink-muted)]">
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[var(--accent-text)]" />
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-[var(--accent-text)]">
                    {PERSONAL_INFO.email}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[var(--accent-text)]" />
                  <a href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`} className="hover:text-[var(--accent-text)]">
                    {PERSONAL_INFO.phone}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[var(--accent-text)]" />
                  <span>{PERSONAL_INFO.location}</span>
                </div>
                <div className="flex flex-wrap items-center gap-3 pt-1">
                  <a
                    href={PERSONAL_INFO.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 hover:text-[var(--accent-text)] transition"
                  >
                    <Github className="w-3 h-3" />
                    <span>Aditya1791</span>
                  </a>
                  <a
                    href={PERSONAL_INFO.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 hover:text-[var(--accent-text)] transition"
                  >
                    <Linkedin className="w-3 h-3" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href={PERSONAL_INFO.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 hover:text-[var(--accent-text)] transition"
                  >
                    <Twitter className="w-3 h-3" />
                    <span>@Monkey_D_Adi</span>
                  </a>
                </div>
              </div>
            </div>

            <p className="mt-4 text-xs sm:text-sm text-[var(--ink-muted)] leading-relaxed">
              {PERSONAL_INFO.bio}
            </p>
          </div>

          {/* Education Section */}
          <section className="space-y-4">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[var(--accent-text)] font-semibold">
              <GraduationCap className="w-4 h-4" />
              <h3>Academic Foundations & Higher Education</h3>
            </div>

            <div className="space-y-4">
              {EDUCATIONS.map((edu) => (
                <div key={edu.id} className="p-5 bg-[var(--surface-card)] border border-[var(--border-color)] rounded-[2px] space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h4 className="font-mono text-xs sm:text-sm font-semibold text-[var(--ink)]">
                      {edu.degree}
                    </h4>
                    <span className="font-mono text-[11px] text-[var(--ink-muted)]">
                      {edu.period}
                    </span>
                  </div>
                  <p className="font-mono text-xs text-[var(--accent-text)] font-medium">
                    {edu.institution} — <span>{edu.score}</span>
                  </p>
                  <ul className="space-y-1 text-xs text-[var(--ink-muted)]">
                    {edu.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span
                          className="w-1.5 h-1.5 mt-1 shrink-0 rounded-[1px]"
                          style={{ backgroundColor: 'var(--tech-bullet)' }}
                        />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Flagship Production Projects */}
          <section className="space-y-4">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[var(--accent-text)] font-semibold">
              <Code className="w-4 h-4" />
              <h3>Shipped Full-Stack & AI Systems</h3>
            </div>

            <div className="space-y-4">
              {PROJECTS.map((proj) => (
                <div key={proj.id} className="p-5 bg-[var(--surface-card)] border border-[var(--border-color)] rounded-[2px] space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h4 className="font-mono text-xs sm:text-sm font-semibold text-[var(--ink)]">
                      {proj.title}
                    </h4>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--accent-text)] px-2 py-0.5 rounded-[1px] bg-[var(--surface-card-hover)] border border-[var(--border-subtle)]">
                      {proj.category}
                    </span>
                  </div>
                  <p className="text-xs text-[var(--ink-muted)] leading-relaxed">
                    {proj.description}
                  </p>
                  <div className="flex flex-wrap gap-1 pt-1">
                    {proj.tags.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-[9px] px-1.5 py-0.5 rounded-[1px] bg-[var(--surface-card-hover)] text-[var(--ink-muted)]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Internships & Experience */}
          <section className="space-y-4">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[var(--accent-text)] font-semibold">
              <Briefcase className="w-4 h-4" />
              <h3>Internships & Practical Training</h3>
            </div>

            <div className="space-y-4">
              {EXPERIENCES.map((exp) => (
                <div key={exp.id} className="relative pl-5 border-l border-[var(--border-color)] space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h4 className="font-mono text-xs sm:text-sm font-semibold text-[var(--ink)]">
                      {exp.role} <span className="text-[var(--accent-text)]">@ {exp.company}</span>
                    </h4>
                    <span className="font-mono text-[11px] text-[var(--ink-muted)]">
                      {exp.period} • {exp.location}
                    </span>
                  </div>

                  <ul className="space-y-1 text-xs text-[var(--ink-muted)] leading-relaxed">
                    {exp.description.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span
                          className="w-1.5 h-1.5 mt-1 shrink-0 rounded-[1px]"
                          style={{ backgroundColor: 'var(--tech-bullet)' }}
                        />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="font-mono text-[10px] px-2 py-0.5 rounded-[1px] bg-[var(--surface-card-hover)] border border-[var(--border-subtle)] text-[var(--ink)]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Core Technical Competencies */}
          <section className="space-y-3">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[var(--accent-text)] font-semibold">
              <Award className="w-4 h-4" />
              <h3>Validated Technical Skillset</h3>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 font-mono text-xs">
              {SKILLS.slice(0, 16).map((s) => (
                <div
                  key={s.name}
                  className="p-2.5 bg-[var(--surface-card)] border border-[var(--border-color)] flex justify-between items-center"
                >
                  <span className="truncate text-[var(--ink)] font-medium text-[11px]">{s.name}</span>
                  <span className="text-[var(--accent-text)] font-semibold ml-1 text-[11px]">
                    {s.level}%
                  </span>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Footer */}
        <div className="px-6 sm:px-8 py-4 border-t border-[var(--border-subtle)] bg-[var(--surface-card)] flex items-center justify-between font-mono text-[11px] text-[var(--ink-muted)]">
          <span>// STATUS: ACTIVE CANDIDATE • M.TECH SCHOLAR (VSSUT)</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 border border-[var(--border-color)] hover:border-[var(--accent-border)] text-[var(--ink)] hover:text-[var(--accent-text)] rounded-[2px] transition uppercase tracking-wider cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
