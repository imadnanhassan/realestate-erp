"use client";

import { useEffect, useState } from "react";

export default function useFakeLoading(delay = 400) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), delay);
    return () => clearTimeout(t);
  }, [delay]);
  return loading;
}