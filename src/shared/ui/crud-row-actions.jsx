import { Eye, Pencil, Trash2 } from "lucide-react";

export default function CrudRowActions({ item, onView, onEdit, onDelete }) {
  return (
    <div className="flex justify-center gap-2">
      <button
        onClick={() => onView(item)}
        className="siqah-icon-action siqah-icon-action-view"
      >
        <Eye size={16} />
      </button>
      <button
        onClick={() => onEdit(item)}
        className="siqah-icon-action siqah-icon-action-edit"
      >
        <Pencil size={16} />
      </button>
      <button
        onClick={() => onDelete(item)}
        className="siqah-icon-action siqah-icon-action-delete"
      >
        <Trash2 size={16} />
      </button>
    </div>
  );
}
