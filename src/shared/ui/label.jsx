export function Label({ children, className = "", htmlFor }) {
  return (
    <label
      htmlFor={htmlFor}
      className={`block text-sm font-medium text-[var(--color-text-secondary)] mb-1 ${className}`}
    >
      {children}
    </label>
  );
}
