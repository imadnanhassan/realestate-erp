"use client";

import { createContext, useContext, useMemo, useState } from "react";

type Toast = { id: number; title?: string; message: string; type?: "success" | "error" | "info" };
type Ctx = {
  toasts: Toast[];
  push: (t: Omit<Toast, "id">) => void;
  remove: (id: number) => void;
};

const ToastContext = createContext<Ctx | null>(null);

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);
  const push: Ctx["push"] = (t) => {
    const toast: Toast = { id: Date.now() + Math.random(), ...t };
    setToasts((s) => [...s, toast]);
    setTimeout(() => {
      setToasts((s) => s.filter((x) => x.id !== toast.id));
    }, 3000);
  };
  const remove = (id: number) => setToasts((s) => s.filter((x) => x.id !== id));

  const value = useMemo(() => ({ toasts, push, remove }), [toasts]);

  return (
    <ToastContext.Provider value={value}>
      {children}
      <div className="fixed bottom-4 right-4 z-50 space-y-2 w-80">
        {toasts.map((t) => (
          <div
            key={t.id}
            className={`card p-3 border-l-4 ${
              t.type === "success" ? "border-green-500" :
              t.type === "error" ? "border-rose-500" : "border-accent"
            }`}
          >
            {t.title && <div className="text-sm font-semibold mb-0.5">{t.title}</div>}
            <div className="text-sm text-gray-700">{t.message}</div>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used within ToastProvider");
  return ctx;
}