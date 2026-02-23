export default function PublicBadge({
  children,
  tone = "accent",
  className = "",
}) {
  const toneClassName = {
    accent:
      "bg-[color-mix(in_srgb,var(--color-public-accent)_18%,white)] text-[var(--color-public-accent)] border-[color-mix(in_srgb,var(--color-public-accent)_35%,white)]",
    primary:
      "bg-[color-mix(in_srgb,var(--color-public-primary)_12%,white)] text-[var(--color-public-primary)] border-[color-mix(in_srgb,var(--color-public-primary)_28%,white)]",
    light: "bg-white/80 text-[var(--color-public-primary)] border-white/70",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold tracking-wide ${toneClassName[tone] ?? toneClassName.accent} ${className}`.trim()}
    >
      {children}
    </span>
  );
}
