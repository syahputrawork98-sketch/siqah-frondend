export default function Modal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[var(--color-overlay)]">
      <div className="bg-[var(--color-bg-surface)] rounded-2xl shadow-[var(--shadow-lg)] w-full max-w-md overflow-hidden animate-fade-in">
        <div className="flex justify-between items-center px-5 py-3 border-b border-[var(--color-border-default)]">
          <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">{title}</h3>
          <button
            onClick={onClose}
            className="text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)] transition"
          >
            x
          </button>
        </div>
        <div className="p-5">{children}</div>
      </div>
    </div>
  );
}
