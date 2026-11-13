import Link from "next/link";
import { Clock, ChefHat } from "lucide-react";
import type { Recipe } from "@/lib/data";
import SpiceArt from "./SpiceArt";

export default function RecipeCard({ r }: { r: Recipe }) {
  return (
    <Link href={`/recipes/${r.slug}`} className="group block overflow-hidden rounded-2xl border border-spice/10 bg-white transition hover:-translate-y-1 hover:shadow-xl">
      <div className="overflow-hidden"><SpiceArt variant="bowl" color={r.color} label={`${r.title} illustration`} className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105" /></div>
      <div className="p-5">
        <h3 className="text-xl">{r.title}</h3>
        <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm text-charcoal/70">
          <span className="flex items-center gap-1"><Clock size={14} /> Prep {r.prep} min</span>
          <span className="flex items-center gap-1"><Clock size={14} /> Cook {r.cook} min</span>
          <span className="flex items-center gap-1"><ChefHat size={14} /> {r.difficulty}</span>
        </div>
      </div>
    </Link>
  );
}
