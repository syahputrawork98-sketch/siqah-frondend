export default function Button({
  type = "button",
  variant = "primary",
  size = "md",
  className = "",
  ...props
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-60";

  const variants = {
    primary: "bg-[#e2b97f] text-white hover:bg-[#caa268] focus-visible:outline-[#e2b97f]",
    ghost: "text-[#3b3b3b] hover:text-[#e2b97f] focus-visible:outline-[#e2b97f]",
    success: "bg-green-100 text-green-700 hover:bg-green-200 focus-visible:outline-green-400",
    danger: "bg-red-100 text-red-700 hover:bg-red-200 focus-visible:outline-red-400",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-2.5 text-base",
  };

  return (
    <button
      type={type}
      className={`${base} ${variants[variant] ?? variants.primary} ${
        sizes[size] ?? sizes.md
      } ${className}`.trim()}
      {...props}
    />
  );
}
