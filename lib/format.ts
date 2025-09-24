export function currency(n: number, c: string = "USD") {
  return n.toLocaleString(undefined, { style: "currency", currency: c, maximumFractionDigits: 0 });
}

export function percent(n: number) {
  return `${n.toFixed(0)}%`;
}

export function date(d: string | Date) {
  const dt = typeof d === "string" ? new Date(d) : d;
  return dt.toLocaleDateString();
}