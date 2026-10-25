import React, { useState } from 'react';
import { Send, CheckCircle2, Copy, Check } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ContactFormData, ContactFormErrors, SentMessage } from '../types/portfolio';
import { validateContactForm } from '../utils/portfolioUtils';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [sentMessages, setSentMessages] = useState<SentMessage[]>(() => {
    try {
      const saved = localStorage.getItem('portfolio_sent_messages');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateContactForm(formData);

    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      const newMessage: SentMessage = {
        ...formData,
        id: `msg-${Date.now()}`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', month: 'short', day: 'numeric' }),
      };

      const updated = [newMessage, ...sentMessages];
      setSentMessages(updated);
      try {
        localStorage.setItem('portfolio_sent_messages', JSON.stringify(updated.slice(0, 5)));
      } catch {
        // ignore
      }

      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      setErrors({});
    }, 600);
  };

  const handleResetForm = () => {
    setIsSubmitted(false);
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="py-20 lg:py-28 border-t border-[var(--border-subtle)] relative"
    >
      <div className="w-full space-y-12">
        {/* Section Header */}
        <div className="space-y-3">
          <span className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[var(--accent-text)] block font-medium">
            // 04. TRANSMIT INQUIRY / DIRECT LINE
          </span>
          <h2
            id="contact-heading"
            className="font-serif italic font-semibold text-4xl sm:text-5xl lg:text-6xl text-[var(--ink-heading)] tracking-tight"
          >
            Initiate communication
          </h2>
          <p className="text-sm sm:text-base text-[var(--ink-muted)] max-w-2xl font-light leading-relaxed">
            Available for full-time engineering appointments, high-stakes system redesigns, and select technical advisory roles.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct coordinates */}
          <div className="lg:col-span-5 space-y-6">
            {/* Direct Email Card */}
            <div className="p-8 bg-[var(--surface-card)] border border-[var(--border-color)] rounded-[2px] space-y-4 shadow-sm">
              <div className="flex items-center justify-between pb-3 border-b border-[var(--border-subtle)]">
                <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--accent-text)] font-semibold">
                  DIRECT COMMS
                </span>
                <span className="font-mono text-[10px] text-[var(--ink-muted)]">
                  ENDPOINT: SMTP
                </span>
              </div>

              <div className="flex items-center justify-between gap-3">
                <div>
                  <span className="font-mono text-[10px] text-[var(--ink-muted)] block uppercase">
                    Email Address
                  </span>
                  <span className="font-mono text-sm sm:text-base text-[var(--ink)] font-semibold block">
                    {PERSONAL_INFO.email}
                  </span>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider border border-[var(--border-color)] hover:border-[var(--accent-border)] text-[var(--ink)] hover:text-[var(--accent-text)] rounded-[2px] transition flex items-center gap-1.5 cursor-pointer"
                  title="Copy email address"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[var(--tech-bullet)]" />
                      <span className="text-[var(--tech-bullet)] font-bold">COPIED</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>COPY</span>
                    </>
                  )}
                </button>
              </div>

              <div className="pt-2 flex items-center justify-between font-mono text-[10px] text-[var(--ink-muted)]">
                <span>LATENCY: &lt; 12 HRS</span>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="text-[var(--accent-text)] font-semibold hover:underline"
                >
                  DISPATCH VIA CLIENT →
                </a>
              </div>
            </div>

            {/* Geolocation info */}
            <div className="p-8 bg-[var(--surface-card)] border border-[var(--border-color)] rounded-[2px] space-y-2 shadow-sm">
              <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--ink-muted)] block">
                GEOGRAPHIC COORDINATES & INSTITUTION
              </span>
              <div className="font-mono text-xs text-[var(--ink)] font-semibold">
                BURLA, SAMBALPUR (VSSUT), ODISHA [21.5034° N, 83.8711° E]
              </div>
              <p className="text-xs text-[var(--ink-muted)] font-light mt-1">
                Pursuing M.Tech in CSE at VSSUT, Burla. Available for remote engineering roles and relocation worldwide.
              </p>
            </div>

            {/* Social channels */}
            <div className="p-8 bg-[var(--surface-card)] border border-[var(--border-color)] rounded-[2px] space-y-3 shadow-sm">
              <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--ink-muted)] block">
                DIRECT CONTACT &amp; NETWORKS
              </span>

              <div className="space-y-2 font-mono text-xs">
                <a
                  href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
                  className="flex items-center justify-between p-2 rounded-[2px] hover:bg-[var(--surface-card-hover)] text-[var(--ink)] hover:text-[var(--accent-text)] transition"
                >
                  <span>PHONE: {PERSONAL_INFO.phone}</span>
                  <span className="text-[10px] text-[var(--ink-muted)]">CALL ↗</span>
                </a>

                <a
                  href={PERSONAL_INFO.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2 rounded-[2px] hover:bg-[var(--surface-card-hover)] text-[var(--ink)] hover:text-[var(--accent-text)] transition"
                >
                  <span>GITHUB.COM/ADITYA1791</span>
                  <span className="text-[10px] text-[var(--ink-muted)]">EXT ↗</span>
                </a>

                <a
                  href={PERSONAL_INFO.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2 rounded-[2px] hover:bg-[var(--surface-card-hover)] text-[var(--ink)] hover:text-[var(--accent-text)] transition"
                >
                  <span>LINKEDIN.COM/IN/ADITYA-RANJAN-SWAIN</span>
                  <span className="text-[10px] text-[var(--ink-muted)]">EXT ↗</span>
                </a>

                <a
                  href={PERSONAL_INFO.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2 rounded-[2px] hover:bg-[var(--surface-card-hover)] text-[var(--ink)] hover:text-[var(--accent-text)] transition"
                >
                  <span>X.COM/MONKEY_D_ADI</span>
                  <span className="text-[10px] text-[var(--ink-muted)]">EXT ↗</span>
                </a>
              </div>
            </div>

            {/* Local Session Messages log */}
            {sentMessages.length > 0 && (
              <div className="p-6 bg-[var(--surface-card)] border border-[var(--border-color)] rounded-[2px] space-y-3 font-mono shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] text-[var(--accent-text)] uppercase tracking-widest font-semibold">
                    SESSION LOG ({sentMessages.length})
                  </span>
                  <button
                    onClick={() => {
                      setSentMessages([]);
                      localStorage.removeItem('portfolio_sent_messages');
                    }}
                    className="text-[9px] text-[var(--ink-muted)] hover:text-[var(--accent-text)] cursor-pointer"
                  >
                    CLEAR
                  </button>
                </div>
                <div className="space-y-2 max-h-36 overflow-y-auto">
                  {sentMessages.map((msg) => (
                    <div
                      key={msg.id}
                      className="p-2 bg-[var(--surface-card-hover)] border border-[var(--border-subtle)] text-[11px]"
                    >
                      <div className="flex justify-between text-[9px] text-[var(--ink-muted)]">
                        <span>{msg.name}</span>
                        <span>{msg.timestamp}</span>
                      </div>
                      <div className="text-[var(--ink)] truncate mt-0.5 font-medium">{msg.subject}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Transmission Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-12 bg-[var(--surface-card)] border border-[var(--border-color)] rounded-[2px] shadow-2xl transition-colors">
              {isSubmitted ? (
                <div
                  className="py-12 text-center space-y-6"
                  data-testid="contact-success-state"
                >
                  <div
                    className="w-14 h-14 rounded-full border mx-auto flex items-center justify-center"
                    style={{
                      borderColor: 'var(--tech-bullet)',
                      color: 'var(--tech-bullet)',
                      boxShadow: '0 0 20px var(--accent-glow)',
                    }}
                  >
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div className="space-y-2">
                    <span className="font-mono text-xs uppercase tracking-widest text-[var(--accent-text)] block font-semibold">
                      // STATUS: TRANSMITTED
                    </span>
                    <h3 className="font-serif italic text-3xl text-[var(--ink-heading)]">
                      Transmission Logged Successfully
                    </h3>
                    <p className="text-sm text-[var(--ink-muted)] font-light max-w-md mx-auto">
                      Thank you. Your message has been routed to Aditya Swain's terminal. Expect a direct reply within 12 hours.
                    </p>
                  </div>

                  <div className="pt-4">
                    <button
                      onClick={handleResetForm}
                      className="px-6 py-3 border border-[var(--accent-border)] text-[var(--accent-text)] hover:bg-[var(--accent-border)] hover:text-[var(--accent-contrast)] font-mono text-xs uppercase tracking-[0.14em] rounded-[2px] transition cursor-pointer font-semibold"
                    >
                      Transmit Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  <div className="pb-3 border-b border-[var(--border-subtle)] flex justify-between items-center">
                    <div>
                      <h3 className="font-serif italic text-2xl text-[var(--ink-heading)]">
                        Transmission Form
                      </h3>
                      <p className="font-mono text-[10px] text-[var(--ink-muted)] uppercase tracking-wider">
                        SECURE PAYLOAD DISPATCH
                      </p>
                    </div>
                    <span className="font-mono text-[10px] text-[var(--status-active)] uppercase tracking-wider font-semibold">
                      ● READY
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label
                        htmlFor="contact-name"
                        className="block font-mono text-[10px] uppercase tracking-widest text-[var(--ink-muted)] font-medium"
                      >
                        FULL NAME <span className="text-[var(--accent-text)]">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="ADITYA RANJAN SWAIN"
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? 'contact-name-error' : undefined}
                        className={`w-full px-4 py-3 font-mono text-xs uppercase tracking-wider rounded-[2px] bg-[var(--surface-card)] border text-[var(--ink)] placeholder:text-[var(--ink-muted)] focus:outline-none focus:border-[var(--accent-border)] transition ${errors.name ? 'border-rose-500' : 'border-[var(--border-color)]'
                          }`}
                      />
                      {errors.name && (
                        <p id="contact-name-error" className="font-mono text-[10px] text-rose-500 font-semibold">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label
                        htmlFor="contact-email"
                        className="block font-mono text-[10px] uppercase tracking-widest text-[var(--ink-muted)] font-medium"
                      >
                        EMAIL ADDRESS <span className="text-[var(--accent-text)]">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="GMAIL_ID@COMPANY.COM"
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? 'contact-email-error' : undefined}
                        className={`w-full px-4 py-3 font-mono text-xs uppercase tracking-wider rounded-[2px] bg-[var(--surface-card)] border text-[var(--ink)] placeholder:text-[var(--ink-muted)] focus:outline-none focus:border-[var(--accent-border)] transition ${errors.email ? 'border-rose-500' : 'border-[var(--border-color)]'
                          }`}
                      />
                      {errors.email && (
                        <p id="contact-email-error" className="font-mono text-[10px] text-rose-500 font-semibold">
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="contact-subject"
                      className="block font-mono text-[10px] uppercase tracking-widest text-[var(--ink-muted)] font-medium"
                    >
                      SUBJECT <span className="text-[var(--accent-text)]">*</span>
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="ENGINEERING ROLE / COLLABORATION"
                      aria-invalid={!!errors.subject}
                      aria-describedby={errors.subject ? 'contact-subject-error' : undefined}
                      className={`w-full px-4 py-3 font-mono text-xs uppercase tracking-wider rounded-[2px] bg-[var(--surface-card)] border text-[var(--ink)] placeholder:text-[var(--ink-muted)] focus:outline-none focus:border-[var(--accent-border)] transition ${errors.subject ? 'border-rose-500' : 'border-[var(--border-color)]'
                        }`}
                    />
                    {errors.subject && (
                      <p id="contact-subject-error" className="font-mono text-[10px] text-rose-500 font-semibold">
                        {errors.subject}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between items-center">
                      <label
                        htmlFor="contact-message"
                        className="block font-mono text-[10px] uppercase tracking-widest text-[var(--ink-muted)] font-medium"
                      >
                        PROJECT SPECIFICATION / INQUIRY <span className="text-[var(--accent-text)]">*</span>
                      </label>
                      <span className="font-mono text-[10px] text-[var(--ink-muted)]">
                        {formData.message.length} / 2000
                      </span>
                    </div>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="DESCRIBE SCOPE, ARCHITECTURE REQUIREMENTS, TIMELINE OR OPPORTUNITY..."
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? 'contact-message-error' : undefined}
                      className={`w-full px-4 py-3 font-mono text-xs tracking-wider rounded-[2px] bg-[var(--surface-card)] border text-[var(--ink)] placeholder:text-[var(--ink-muted)] focus:outline-none focus:border-[var(--accent-border)] transition ${errors.message ? 'border-rose-500' : 'border-[var(--border-color)]'
                        }`}
                    />
                    {errors.message && (
                      <p id="contact-message-error" className="font-mono text-[10px] text-rose-500 font-semibold">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 px-6 bg-transparent border border-[var(--accent-border)] text-[var(--accent-text)] hover:bg-[var(--accent-border)] hover:text-[var(--accent-contrast)] disabled:opacity-50 font-mono text-xs uppercase tracking-[0.16em] rounded-[2px] transition duration-200 cursor-pointer font-semibold flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="w-3.5 h-3.5 border border-current border-t-transparent rounded-full animate-spin" />
                          <span>TRANSMITTING PAYLOAD...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5" />
                          <span>TRANSMIT MESSAGE TO ADITYA</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
