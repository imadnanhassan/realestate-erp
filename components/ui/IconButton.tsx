"use client";

import { ButtonHTMLAttributes } from "react";
import { cn } from "./cn";

export default function IconButton({
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(
        "inline-flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-600 hover:text-gray-900 hover:bg-gray-50 hover:shadow-sm transition-all duration-200 hover:-translate-y-0.5",
        className
      )}
      {...props}
    />
  );
}