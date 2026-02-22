// client/src/components/ui/Tabs.jsx
export function Tabs({ children }) {
  return <div>{children}</div>;
}

export function TabsList({ children, className = "" }) {
  return (
    <div className={`flex gap-2 flex-wrap ${className}`}>
      {children}
    </div>
  );
}

export function TabsTrigger({ value, active, children, onClick }) {
  return (
    <button
      onClick={() => onClick?.(value)}
      className={`px-4 py-2 text-sm font-medium rounded-t-md border-b-2 transition-all ${
        active
          ? "border-[#e2b97f] text-[#e2b97f] bg-[#fefbf7]"
          : "border-transparent text-[#3b3b3b] hover:text-[#e2b97f] hover:border-[#eee6da]"
      }`}
    >
      {children}
    </button>
  );
}

export function TabsContent({ children }) {
  return <div className="mt-4">{children}</div>;
}
