import React, { useEffect } from 'react';
import { CheckCircle2, X } from 'lucide-react';

interface ToastProps {
  message: string | null;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, onClose }) => {
  useEffect(() => {
    if (!message) return;
    const timer = setTimeout(() => {
      onClose();
    }, 3200);
    return () => clearTimeout(timer);
  }, [message, onClose]);

  if (!message) return null;

  return (
    <div className="fixed bottom-8 left-8 z-50 animate-fade-in max-w-sm">
      <div className="flex items-center gap-3 px-4 py-3 bg-[var(--surface-card)] border border-[var(--accent-border)] rounded-[2px] shadow-2xl font-mono text-xs text-[var(--ink)] backdrop-blur-md">
        <CheckCircle2 className="w-4 h-4 text-[var(--accent-text)] shrink-0" />
        <span className="flex-1 font-medium">{message}</span>
        <button
          onClick={onClose}
          aria-label="Dismiss notification"
          className="p-1 text-[var(--ink-muted)] hover:text-[var(--accent-text)] cursor-pointer"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
