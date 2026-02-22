export default function Table({ columns = [], data = [] }) {
  return (
    <div className="overflow-x-auto bg-[var(--color-bg-surface)] border border-[var(--color-border-default)] rounded-2xl shadow-[var(--shadow-sm)]">
      <table className="min-w-full text-sm text-left text-[var(--color-text-secondary)]">
        <thead className="bg-[var(--color-bg-subtle)] border-b border-[var(--color-border-default)]">
          <tr>
            {columns.map((col, i) => (
              <th key={i} className="px-4 py-2 font-semibold text-[var(--color-text-primary)]">
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td
                colSpan={columns.length}
                className="text-center py-6 text-[var(--color-text-muted)]"
              >
                Tidak ada data tersedia
              </td>
            </tr>
          ) : (
            data.map((row, i) => (
              <tr key={i} className="hover:bg-[var(--color-bg-subtle)] transition">
                {columns.map((col, j) => (
                  <td key={j} className="px-4 py-2 border-t border-[var(--color-border-default)]">
                    {typeof col.render === "function" ? col.render(row) : row[col.accessor]}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
