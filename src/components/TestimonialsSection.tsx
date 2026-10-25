import React from 'react';
import { TESTIMONIALS } from '../data/portfolioData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section
      aria-labelledby="testimonials-heading"
      className="py-20 lg:py-24 border-t border-[var(--border-subtle)] relative"
    >
      <div className="w-full space-y-12">
        <div className="space-y-3">
          <span className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[var(--accent-text)] block font-medium">
            // PEER & LEADERSHIP COMMENDATIONS
          </span>
          <h2
            id="testimonials-heading"
            className="font-serif italic font-semibold text-3xl sm:text-4xl lg:text-5xl text-[var(--ink-heading)] tracking-tight"
          >
            Endorsements from engineering collaborators
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="p-8 bg-[var(--surface-card)] border border-[var(--border-color)] hover:border-[var(--accent-border)] rounded-[2px] transition flex flex-col justify-between space-y-6 shadow-sm"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-1 font-mono text-[10px] text-[var(--accent-text)] font-semibold">
                  <span>★ ★ ★ ★ ★</span>
                  <span className="text-[var(--ink-muted)] ml-2">[0{idx + 1}]</span>
                </div>
                <p className="font-serif italic text-base sm:text-lg text-[var(--ink)] leading-relaxed">
                  "{t.content}"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-[var(--border-subtle)]">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover grayscale contrast-125 border border-[var(--accent-border)]"
                />
                <div>
                  <h4 className="font-mono text-xs font-semibold text-[var(--ink)]">
                    {t.name}
                  </h4>
                  <p className="font-mono text-[10px] text-[var(--ink-muted)]">
                    {t.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
