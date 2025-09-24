interface Item {
  date: string;
  title: string;
  description?: string;
  status?: "done" | "pending";
}

export default function Timeline({ items }: { items: Item[] }) {
  return (
    <ol className="relative border-l border-gray-200 pl-4 space-y-4">
      {items.map((it, idx) => (
        <li key={idx} className="ml-2">
          <div className="absolute -left-[9px] mt-1 h-4 w-4 rounded-full border-2 border-white"
               style={{ backgroundColor: it.status === "done" ? "#4f46e5" : "#e5e7eb", boxShadow: "0 0 0 2px #e5e7eb" }} />
          <div className="text-xs text-gray-500">{it.date}</div>
          <div className="font-medium text-gray-900">{it.title}</div>
          {it.description && <div className="text-sm text-gray-600">{it.description}</div>}
        </li>
      ))}
    </ol>
  );
}