"use client";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { categories, type Product } from "@/lib/data";
import ProductCard from "./ProductCard";

export default function ProductBrowser({ products }: { products: Product[] }) {
  const [cat, setCat] = useState<string>("All");
  const [q, setQ] = useState("");
  const list = useMemo(() => products.filter((p) =>
    (cat === "All" || p.category === cat) && `${p.name} ${p.short}`.toLowerCase().includes(q.trim().toLowerCase())), [products, cat, q]);
  return (
    <div>
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by category">
          {["All", ...categories].map((c) => (
            <button key={c} onClick={() => setCat(c)} aria-pressed={cat === c}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition ${cat === c ? "border-saffron bg-saffron text-white" : "border-spice/25 text-spice hover:border-saffron"}`}>{c}</button>
          ))}
        </div>
        <label className="relative block md:w-72">
          <span className="sr-only">Search products</span>
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-spice/50" />
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search spices and masalas" className="input pl-9" />
        </label>
      </div>
      <p className="mt-6 text-sm text-charcoal/60" aria-live="polite">{list.length} product{list.length !== 1 && "s"}</p>
      {list.length ? (
        <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">{list.map((p) => <ProductCard key={p.slug} p={p} />)}</div>
      ) : (
        <div className="mt-8 rounded-2xl bg-white p-10 text-center">
          <p className="text-lg text-spice">No products match your search.</p>
          <button className="btn-primary mt-4" onClick={() => { setQ(""); setCat("All"); }}>Clear filters</button>
        </div>
      )}
    </div>
  );
}
