export default function SectionHeading({
  title,
  description,
  align = "center",
  className = "",
  titleClassName = "",
  descriptionClassName = "",
}) {
  const alignClassName = {
    left: "text-left",
    center: "text-center",
  };

  return (
    <div className={`${alignClassName[align] ?? alignClassName.center} ${className}`.trim()}>
      <h2
        className={`font-heading text-3xl font-bold text-[var(--color-public-primary)] sm:text-4xl md:text-5xl ${titleClassName}`.trim()}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mx-auto mt-4 max-w-3xl text-base leading-relaxed text-[color-mix(in_srgb,var(--color-public-primary)_82%,#fff)] sm:text-lg ${descriptionClassName}`.trim()}
        >
          {description}
        </p>
      )}
    </div>
  );
}
