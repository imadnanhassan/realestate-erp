import { ReactNode } from "react";
import { cn } from "@/components/ui/cn";

interface Props {
  title?: ReactNode;
  subtitle?: ReactNode;
  className?: string;
  actions?: ReactNode;
  children?: ReactNode;
}

export default function Card({ title, subtitle, actions, className, children }: Props) {
  return (
    <section className={cn("card p-5", className)}>
      {(title || subtitle || actions) && (
        <header className="mb-4 flex items-start justify-between gap-4">
          <div>
            {title && <h3 className="text-sm font-semibold text-gray-900">{title}</h3>}
            {subtitle && <p className="text-xs text-gray-500 mt-0.5">{subtitle}</p>}
          </div>
          {actions && <div className="flex items-center gap-2">{actions}</div>}
        </header>
      )}
      {children}
    </section>
  );
}