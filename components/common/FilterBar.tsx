import { ReactNode } from "react";

export default function FilterBar({ children }: { children: ReactNode }) {
  return (
    <div className="card p-3 mb-4">
      <div className="flex flex-wrap items-center gap-2">
        {children}
      </div>
    </div>
  );
}