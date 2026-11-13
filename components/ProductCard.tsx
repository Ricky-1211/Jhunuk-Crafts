import Link from "next/link";
import type { Product } from "@/lib/data";
import SpiceArt from "./SpiceArt";

export default function ProductCard({ p }: { p: Product }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-spice/10 bg-white transition hover:-translate-y-1 hover:shadow-xl">
      <div className="overflow-hidden"><SpiceArt color={p.color} label={`${p.name} pack`} className="aspect-square w-full transition duration-500 group-hover:scale-105" /></div>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs font-medium text-herb">{p.category}</p>
        <h3 className="mt-1 text-xl">{p.name}</h3>
        <p className="mt-2 flex-1 text-sm text-charcoal/75">{p.short}</p>
        <p className="mt-3 text-xs text-charcoal/60">Pack sizes: {p.sizes.join(", ")}</p>
        <Link href={`/products/${p.slug}`} className="btn-outline mt-4">View details</Link>
      </div>
    </article>
  );
}
