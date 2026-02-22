export function Tabs({ children }) {
  return <div>{children}</div>;
}

export function TabsList({ children, className = "" }) {
  return <div className={`flex gap-2 flex-wrap ${className}`}>{children}</div>;
}

export function TabsTrigger({ value, active, children, onClick }) {
  return (
    <button
      onClick={() => onClick?.(value)}
      className={`px-4 py-2 text-sm font-medium rounded-t-md border-b-2 transition-all ${
        active
          ? "border-[var(--color-brand-primary)] text-[var(--color-brand-primary)] bg-[var(--color-brand-primary-soft)]"
          : "border-transparent text-[var(--color-text-default)] hover:text-[var(--color-brand-primary)] hover:border-[var(--color-brand-border-soft)]"
      }`}
    >
      {children}
    </button>
  );
}

export function TabsContent({ children }) {
  return <div className="mt-4">{children}</div>;
}
