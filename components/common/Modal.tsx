"use client";

import { ReactNode } from "react";
import { X } from "lucide-react";

interface Props {
  open: boolean;
  onClose: () => void;
  title?: ReactNode;
  children?: ReactNode;
}

export default function Modal({ open, onClose, title, children }: Props) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} aria-hidden />
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div className="card w-full max-w-lg">
          <header className="flex items-center justify-between p-4 border-b border-gray-100">
            <h3 className="text-sm font-semibold">{title}</h3>
            <button className="btn btn-ghost" onClick={onClose} aria-label="Close">
              <X className="h-5 w-5" />
            </button>
          </header>
          <div className="p-4">{children}</div>
        </div>
      </div>
    </div>
  );
}