export default function PageHeading({ title, intro }: { title: string; intro?: string }) {
  return (
    <div className="bg-spice py-14 sm:py-20">
      <div className="container-x">
        <h1 className="max-w-3xl text-4xl !text-cream sm:text-5xl">{title}</h1>
        {intro && <p className="mt-4 max-w-2xl text-lg text-cream/80">{intro}</p>}
      </div>
    </div>
  );
}
