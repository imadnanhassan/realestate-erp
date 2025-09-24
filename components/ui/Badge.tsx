import { HTMLAttributes } from "react";
import { cn } from "./cn";

type Tone = "success" | "warning" | "danger" | "muted";

interface Props extends HTMLAttributes<HTMLSpanElement> {
  tone?: Tone;
}

export default function Badge({ className, tone = "muted", children, ...props }: Props) {
  return (
    <span
      className={cn(
        "badge",
        tone === "success" && "badge-success",
        tone === "warning" && "badge-warning",
        tone === "danger" && "badge-danger",
        tone === "muted" && "badge-muted",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}