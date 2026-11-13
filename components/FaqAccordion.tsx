"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FaqAccordion({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="divide-y divide-spice/15 rounded-2xl border border-spice/10 bg-white">
      {items.map((it, i) => (
        <div key={it.q}>
          <button className="flex w-full items-center justify-between gap-4 p-5 text-left font-medium text-spice" aria-expanded={open === i}
            onClick={() => setOpen(open === i ? null : i)}>
            {it.q}<ChevronDown size={18} className={`shrink-0 transition ${open === i ? "rotate-180" : ""}`} />
          </button>
          {open === i && <p className="px-5 pb-5 text-charcoal/80">{it.a}</p>}
        </div>
      ))}
    </div>
  );
}
