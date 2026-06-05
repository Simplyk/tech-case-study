"use client";

export default function FormActions({
  formId,
  isActive,
  onToggleActive,
  onDelete,
}: {
  formId: number;
  isActive: boolean;
  onToggleActive: (id: number, active: boolean) => void;
  onDelete: (id: number) => void;
}) {
  return (
    <div className="flex items-center gap-2">
      <a
        href={`/forms/${formId}`}
        className="inline-flex items-center justify-center text-sm font-medium px-3 py-1.5 rounded-md border border-blue-600 bg-blue-600 text-white shadow-sm hover:bg-blue-700 hover:border-blue-700 transition-colors"
      >
        View
      </a>
      <button
        onClick={() => onToggleActive(formId, !isActive)}
        className={`inline-flex items-center justify-center text-sm font-medium px-3 py-1.5 rounded-md border bg-white shadow-sm transition-colors ${
          isActive
            ? "border-yellow-300 text-yellow-700 hover:bg-yellow-50"
            : "border-green-300 text-green-700 hover:bg-green-50"
        }`}
      >
        {isActive ? "Deactivate" : "Activate"}
      </button>
      <button
        onClick={() => {
          if (confirm("Are you sure you want to delete this form?")) {
            onDelete(formId);
          }
        }}
        className="inline-flex items-center justify-center text-sm font-medium px-3 py-1.5 rounded-md border border-red-300 bg-white text-red-600 shadow-sm hover:bg-red-50 transition-colors"
      >
        Delete
      </button>
    </div>
  );
}
