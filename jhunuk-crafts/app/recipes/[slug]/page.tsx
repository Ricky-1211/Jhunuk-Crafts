import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Clock, ChefHat, Users } from "lucide-react";
import { getProduct, getRecipe, recipes } from "@/lib/data";
import SpiceArt from "@/components/SpiceArt";

export const generateStaticParams = () => recipes.map((r) => ({ slug: r.slug }));
export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const r = getRecipe(params.slug);
  return { title: r?.title ?? "Recipe", description: r?.intro };
}

export default function RecipePage({ params }: { params: { slug: string } }) {
  const r = getRecipe(params.slug);
  if (!r) notFound();
  const used = r.relatedProducts.map(getProduct).filter((p) => !!p);
  return (
    <>
      <div className="container-x pt-6 text-sm text-charcoal/60"><Link href="/recipes" className="hover:text-saffron">Recipes</Link> / {r.title}</div>
      <section className="container-x grid gap-10 py-10 lg:grid-cols-2">
        <SpiceArt variant="bowl" color={r.color} label={`${r.title} illustration`} className="w-full rounded-3xl" />
        <div>
          <h1 className="text-4xl sm:text-5xl">{r.title}</h1>
          <p className="mt-4 text-lg text-charcoal/80">{r.intro}</p>
          <div className="mt-6 flex flex-wrap gap-5 text-sm">
            <span className="flex items-center gap-2"><Clock size={16} /> Prep {r.prep} min</span>
            <span className="flex items-center gap-2"><Clock size={16} /> Cook {r.cook} min</span>
            <span className="flex items-center gap-2"><ChefHat size={16} /> {r.difficulty}</span>
            <span className="flex items-center gap-2"><Users size={16} /> Serves {r.serves}</span>
          </div>
          <h2 className="mt-8 text-2xl">Spices used</h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {used.map((p) => p && <Link key={p.slug} href={`/products/${p.slug}`} className="btn-outline !py-2">{p.name}</Link>)}
          </div>
        </div>
      </section>
      <section className="bg-white section">
        <div className="container-x grid gap-12 lg:grid-cols-3">
          <div>
            <h2 className="text-2xl">Ingredients</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-charcoal/85">{r.ingredients.map((i) => <li key={i}>{i}</li>)}</ul>
          </div>
          <div className="lg:col-span-2">
            <h2 className="text-2xl">Method</h2>
            <ol className="mt-4 space-y-5">
              {r.steps.map((s, i) => (
                <li key={i} className="flex gap-4">
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-saffron text-sm font-bold text-white">{i + 1}</span>
                  <p className="pt-1 text-charcoal/85">{s}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </>
  );
}
