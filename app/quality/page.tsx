
import type { Metadata } from "next";
import PageHeading from "@/components/PageHeading";

export const metadata: Metadata = {
  title: "Our Craft Process | Jhunuk Crafts",
};

const steps = [
  [
    "Creative Inspiration",
    "Every beautiful creation begins with an idea, inspiration and a little imagination.",
    "💡",
  ],
  [
    "Thoughtful Material Selection",
    "We choose suitable materials, colours and textures to bring each creative idea to life.",
    "🎨",
  ],
  [
    "Handcrafted with Love",
    "Each piece is carefully created with attention to detail, patience and creativity.",
    "🧶",
  ],
  [
    "Artistic Finishing",
    "We focus on the little details to give every handmade creation a beautiful finish.",
    "✨",
  ],
  [
    "Quality Checking",
    "Every creation is checked for its appearance, finishing and overall quality.",
    "🔍",
  ],
  [
    "Ready to Reach You",
    "Our handmade treasures are carefully prepared and packed, ready to find a new home.",
    "🎁",
  ],
];

export default function CraftProcess() {
  return (
    <main className="min-h-screen bg-[#faf7f2] text-[#3d3028]">

      <PageHeading
        title="Our Craft Process"
        intro="Behind every handmade creation is a journey of imagination, creativity and love. Discover how our crafts come to life."
      />

      <section className="container-x section">
        <div className="grid gap-6 md:grid-cols-2">

          {steps.map(([title, description, emoji], index) => (
            <div
              key={title}
              className="flex gap-5 rounded-2xl border border-spice/10 bg-white p-6 shadow-sm"
            >
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#eee3d5] text-2xl">
                {emoji}
              </div>

              <div>
                <p className="text-sm font-semibold text-[#98765b]">
                  STEP 0{index + 1}
                </p>

                <h2 className="mt-1 text-xl font-semibold">
                  {title}
                </h2>

                <p className="mt-2 text-charcoal/80">
                  {description}
                </p>
              </div>
            </div>
          ))}

        </div>
      </section>

      <section className="bg-[#eee3d5] px-6 py-16 text-center">
        <h2 className="text-3xl font-serif mb-5">
          Every Piece Has a Story
        </h2>

        <p className="max-w-2xl mx-auto leading-8">
          We believe handmade products are special because
          every creation carries a little imagination,
          creativity and personal touch.
        </p>
      </section>

    </main>
  );
}
