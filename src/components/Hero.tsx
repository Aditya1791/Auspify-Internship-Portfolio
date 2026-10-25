import React from 'react';
import { ArrowUpRight, Download, Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onExploreProjects: () => void;
  onContactClick: () => void;
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreProjects,
  onContactClick,
  onOpenResume,
}) => {
  const coreTech = [
    'React.js',
    'Node.js',
    'Python & Flask',
    'MongoDB',
    'Socket.io',
    'OpenCV / DeepFace',
    'Redux Toolkit',
    'Docker',
  ];

  return (
    <section
      aria-labelledby="hero-title"
      className="relative min-h-[calc(100vh-140px)] flex items-center py-12 lg:py-16"
    >
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Editorial Typography & CTAs */}
        <div className="lg:col-span-6 xl:col-span-6 space-y-8">
          <div className="space-y-4">
            <span className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.22em] text-[var(--accent-text)] block font-medium">
              M.Tech CSE Scholar @ VSSUT &bull; Full-Stack &amp; AI Developer
            </span>

            {/* Cormorant Garamond Italic 600 Display Headline */}
            <h1
              id="hero-title"
              className="font-serif italic font-semibold text-6xl sm:text-7xl md:text-8xl lg:text-[7.5rem] xl:text-[8.5rem] leading-[0.88] text-[var(--ink-heading)] tracking-tight select-none"
            >
              Aditya
              <br />
              <span className="text-[var(--ink-heading)] hover:text-[var(--accent-text)] transition-colors duration-300">
                Swain
              </span>
            </h1>
          </div>

          <p className="text-sm sm:text-base leading-[1.8] text-[var(--ink-muted)] max-w-xl font-light">
            Crafting production-grade web platforms with surgical precision. Specializing in MERN stack architecture, real-time Socket.io state synchronization, and AI computer vision integration.
          </p>

          {/* Action Row */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2">
            <button
              onClick={onExploreProjects}
              className="px-8 py-4 bg-transparent border border-[var(--accent-border)] text-[var(--accent-text)] hover:bg-[var(--accent-border)] hover:text-[var(--accent-contrast)] font-mono text-xs uppercase tracking-[0.14em] rounded-[2px] transition duration-200 cursor-pointer flex items-center gap-2 group font-semibold"
            >
              <span>View Projects</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>

            <button
              onClick={onContactClick}
              className="text-[var(--ink)] font-mono text-xs uppercase tracking-[0.14em] underline underline-offset-4 decoration-[var(--border-color)] hover:decoration-[var(--accent-border)] hover:text-[var(--accent-text)] bg-transparent border-none cursor-pointer transition py-2 font-medium"
            >
              Contact
            </button>

            <button
              onClick={onOpenResume}
              className="font-mono text-xs uppercase tracking-[0.14em] text-[var(--ink-muted)] hover:text-[var(--ink)] flex items-center gap-1.5 transition py-2"
            >
              <Download className="w-3.5 h-3.5 text-[var(--accent)]" />
              <span>Curriculum Vitae</span>
            </button>
          </div>

          {/* Social meta line */}
          <div className="pt-6 border-t border-[var(--border-subtle)] flex items-center gap-5 text-xs text-[var(--ink-muted)] font-mono">
            <span className="uppercase tracking-widest text-[10px]">Net:</span>
            <a
              href={PERSONAL_INFO.social.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile (Aditya1791)"
              title="GitHub Profile (Aditya1791)"
              className="hover:text-[var(--accent-text)] transition flex items-center gap-1.5"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GH</span>
            </a>
            <a
              href={PERSONAL_INFO.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile (Aditya Ranjan Swain)"
              title="LinkedIn Profile (Aditya Ranjan Swain)"
              className="hover:text-[var(--accent-text)] transition flex items-center gap-1.5"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>IN</span>
            </a>
            <a
              href={PERSONAL_INFO.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X Profile (@Monkey_D_Adi)"
              title="X Profile (@Monkey_D_Adi)"
              className="hover:text-[var(--accent-text)] transition flex items-center gap-1.5"
            >
              <Twitter className="w-3.5 h-3.5" />
              <span>X</span>
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              aria-label="Send Email to Aditya Swain"
              title="Send Email"
              className="hover:text-[var(--accent-text)] transition flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>EMAIL</span>
            </a>
          </div>
        </div>

        {/* Right Column: Architectural Data-Visual Panel */}
        <div className="lg:col-span-6 xl:col-span-6">
          <div className="bg-[var(--surface-card)] backdrop-blur-md border border-[var(--border-color)] p-8 sm:p-12 rounded-[2px] shadow-2xl relative overflow-hidden transition-colors">
            {/* Corner technical crosshairs */}
            <div className="absolute top-2 left-2 text-[9px] font-mono text-[var(--ink-muted)] opacity-50">
              +0.1
            </div>
            <div className="absolute top-2 right-2 text-[9px] font-mono text-[var(--ink-muted)] opacity-50">
              SEC.01
            </div>
            <div className="absolute bottom-2 right-2 text-[9px] font-mono text-[var(--ink-muted)] opacity-50">
              SYS.OK
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-y-10 gap-x-6 sm:gap-x-10 mb-10 pb-8 border-b border-[var(--border-subtle)]">
              <div className="space-y-1">
                <span className="font-mono text-3xl sm:text-4xl text-[var(--ink-heading)] block font-normal tracking-tight">
                  M.Tech
                </span>
                <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-[var(--ink-muted)] font-medium">
                  VSSUT CSE Scholar
                </span>
              </div>

              <div className="space-y-1">
                <span className="font-mono text-3xl sm:text-4xl text-[var(--ink-heading)] block font-normal tracking-tight">
                  03
                </span>
                <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-[var(--ink-muted)] font-medium">
                  Production Apps
                </span>
              </div>

              <div className="space-y-1">
                <span className="font-mono text-3xl sm:text-4xl text-[var(--ink-heading)] block font-normal tracking-tight">
                  15+
                </span>
                <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-[var(--ink-muted)] font-medium">
                  Online Compilers
                </span>
              </div>

              <div className="space-y-1">
                <span className="font-mono text-3xl sm:text-4xl text-[var(--tech-bullet)] block font-semibold tracking-tight">
                  MERN
                </span>
                <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-[var(--ink-muted)] font-medium">
                  &amp; Python / AI
                </span>
              </div>
            </div>

            {/* Core Tech Stack Box with dynamic markers */}
            <div className="space-y-4">
              <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-[var(--ink-muted)] block font-medium">
                Core Tech Stack
              </span>

              <div className="flex flex-wrap gap-x-5 gap-y-3">
                {coreTech.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-xs text-[var(--ink)] flex items-center tracking-wide"
                  >
                    <span
                      className="w-1.5 h-1.5 inline-block mr-2.5 rounded-[1px]"
                      style={{
                        backgroundColor: 'var(--tech-bullet)',
                        boxShadow: '0 0 6px var(--accent-glow)',
                      }}
                    />
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Status Ticker */}
            <div className="mt-8 pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between text-[10px] font-mono text-[var(--ink-muted)]">
              <span>LOC: BURLA,SAMBALPUR,ODISHA IN</span>
              <span className="text-[var(--status-active)] font-medium">● REAL-TIME DISPATCH</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
