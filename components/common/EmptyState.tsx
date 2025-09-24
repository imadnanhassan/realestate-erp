import { ReactNode } from "react";

export default function EmptyState({ title = "Nothing here", description = "Try changing filters or adding data.", action }: { title?: string; description?: string; action?: ReactNode }) {
  return (
    <div className="card p-6 text-center">
      <div className="text-sm font-semibold text-gray-900">{title}</div>
      <div className="text-sm text-gray-500 mt-1">{description}</div>
      {action && <div className="mt-3">{action}</div>}
    </div>
  );
}