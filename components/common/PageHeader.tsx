import { ReactNode } from "react";
import Breadcrumbs from "@/components/navigation/Breadcrumbs";

export default function PageHeader({ title, actions }: { title: ReactNode; actions?: ReactNode }) {
  return (
    <div className="mb-4">
      <div className="flex items-center justify-between gap-3">
        <h1 className="text-lg font-semibold">{title}</h1>
        {actions}
      </div>
      <div className="mt-1">
        <Breadcrumbs />
      </div>
    </div>
  );
}