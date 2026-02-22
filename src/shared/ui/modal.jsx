export default function Modal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[var(--color-overlay)]">
      <div className="bg-[var(--color-bg-surface)] rounded-2xl shadow-[var(--shadow-lg)] w-full max-w-md overflow-hidden animate-fade-in">
        <div className="flex justify-between items-center px-5 py-3 border-b border-[var(--color-border-default)]">
          <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">{title}</h3>
          <button
            onClick={onClose}
            className="rounded-md px-2 py-1 text-[var(--color-text-muted)] hover:bg-[var(--color-brand-primary-soft)] hover:text-[var(--color-text-secondary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-brand-primary)] transition"
            aria-label="Tutup modal"
          >
            x
          </button>
        </div>
        <div className="p-5">{children}</div>
      </div>
    </div>
  );
}
