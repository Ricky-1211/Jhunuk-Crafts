
import Link from "next/link";
import {
  ArrowRight,
  Heart,
  Sparkles,
  Palette,
  Gift,
  MapPin,
} from "lucide-react";

const milestones = [
  {
    year: "2013",
    title: "Where it all began",
    description:
      "Jhunuk Crafts began with Sudharani's childhood love for art, creativity and handmade things.",
  },
  {
    year: "2019",
    title: "Taking creativity further",
    description:
      "Jhunuk Crafts showcased its creations at exhibitions in Bhubaneswar and Kolkata.",
  },
  {
    year: "2020",
    title: "Reaching new places",
    description:
      "The creative journey continued with an exhibition in Mumbai.",
  },
  {
    year: "2022",
    title: "Growing the journey",
    description:
      "Jhunuk Crafts participated in exhibitions in Ranchi and Kolkata.",
  },
  {
    year: "2023",
    title: "More creative connections",
    description:
      "The journey continued with an exhibition in Bhubaneswar.",
  },
  {
    year: "2024",
    title: "A growing handmade journey",
    description:
      "Jhunuk Crafts returned to exhibitions in Bhubaneswar and Kolkata.",
  },
];

const values = [
  {
    icon: Heart,
    title: "Made with love",
    description:
      "Every creation begins with care, patience and a genuine love for handmade art.",
  },
  {
    icon: Palette,
    title: "Personalised creativity",
    description:
      "Colours, designs and details can be tailored to match your imagination and budget.",
  },
  {
    icon: Gift,
    title: "Meaningful gifting",
    description:
      "We believe even the smallest handmade gift can create a beautiful memory.",
  },
];

export default function AboutPage() {
  return (
    <main className="bg-[#FFF9F5] text-[#51464A]">
      {/* HERO */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-[#A77D8B]">
            The story behind every creation
          </p>

          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <h1 className="font-display text-5xl leading-tight md:text-7xl">
                A little art.
                <br />
                <span className="italic text-[#A77D8B]">
                  A lot of heart.
                </span>
              </h1>

              <p className="mt-7 max-w-lg text-base leading-8 text-[#81747A]">
                Behind every handmade creation is a story, an idea and
                a little piece of someone's imagination. Welcome to
                Jhunuk Crafts, where creativity finds a personal touch.
              </p>

              <Link
                href="/products"
                className="mt-9 inline-flex items-center gap-3 rounded-md bg-[#A77D8B] px-8 py-4 text-sm text-white transition hover:bg-[#8A6570]"
              >
                Explore Our Creations <ArrowRight size={17} />
              </Link>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=1200&q=90"
                alt="Creative handmade art and craft workspace"
                className="h-[350px] w-full rounded-xl object-cover md:h-[480px]"
              />

              <div className="absolute -bottom-5 -left-5 rounded-xl border border-[#EEDDE2] bg-white p-6 shadow-lg md:p-8">
                <p className="font-display text-4xl text-[#A77D8B]">2013</p>
                <p className="mt-1 text-xs uppercase tracking-wider text-[#81747A]">
                  The beginning of our journey
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BRAND INTRODUCTION */}
      <section className="bg-[#F8E8EC] px-6 py-20 md:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 md:grid-cols-2">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=1100&q=90"
              alt="Art materials and creative handmade work"
              className="h-[340px] w-full rounded-xl object-cover md:h-[470px]"
            />
          </div>

          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.25em] text-[#A77D8B]">
              More than just crafts
            </p>

            <h2 className="font-display text-4xl leading-tight md:text-5xl">
              Creativity that
              <br />
              comes from the heart.
            </h2>

            <div className="mt-7 space-y-5 text-sm leading-8 text-[#81747A]">
              <p>
                Jhunuk Crafts was born from Sudharani Marndi's love
                for art, which began in her childhood. What started
                as a passion for creating beautiful things grew into
                a handmade craft journey in 2013.
              </p>

              <p>
                Over the years, that passion has grown into a collection
                of handmade creations, thoughtful gifts and personalised
                decorations for life's special moments.
              </p>

              <p>
                Today, Jhunuk Crafts continues to celebrate creativity
                by making every piece feel a little more personal.
              </p>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <div className="h-px w-12 bg-[#A77D8B]" />
              <div>
                <p className="font-display text-2xl italic">
                  Sudharani Marndi
                </p>
                <p className="mt-1 text-xs uppercase tracking-wider text-[#81747A]">
                  Founder, Jhunuk Crafts
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="px-6 py-20 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <p className="mb-4 text-xs uppercase tracking-[0.25em] text-[#A77D8B]">
              What makes us special
            </p>

            <h2 className="font-display text-4xl md:text-5xl">
              The little things we believe in.
            </h2>

            <p className="mt-5 text-sm leading-7 text-[#81747A]">
              Our love for handmade art is reflected in the details,
              the personal touches and the thought behind every creation.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <article
                  key={value.title}
                  className="rounded-xl border border-[#EEDDE2] bg-white p-8 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <p className="mb-7 text-xs text-[#A77D8B]">
                    0{index + 1}
                  </p>

                  <Icon size={29} className="mb-6 text-[#A77D8B]" />

                  <h3 className="font-display text-2xl">
                    {value.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-[#81747A]">
                    {value.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* JOURNEY TIMELINE */}
      <section className="bg-[#DFEAF7] px-6 py-20 text-[#51464A] md:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="mb-14 text-center">
            <p className="mb-4 text-xs uppercase tracking-[0.25em] text-[#8A6570]">
              Our journey through the years
            </p>

            <h2 className="font-display text-4xl md:text-5xl">
              Every year, a new chapter.
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#81747A]">
              From a passion for art to exhibitions across different
              cities, every milestone has been part of our story.
            </p>
          </div>

          <div className="space-y-0">
            {milestones.map((milestone) => (
              <div
                key={milestone.year}
                className="grid gap-4 border-t border-[#C8D7E9] py-8 md:grid-cols-[140px_1fr]"
              >
                <p className="font-display text-3xl text-[#A77D8B]">
                  {milestone.year}
                </p>

                <div>
                  <h3 className="font-display text-2xl">
                    {milestone.title}
                  </h3>

                  <p className="mt-3 max-w-2xl text-sm leading-7 text-[#81747A]">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PERSONALISATION */}
      <section className="px-6 py-20 md:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.25em] text-[#A77D8B]">
              Made for your moments
            </p>

            <h2 className="font-display text-4xl leading-tight md:text-5xl">
              Your imagination.
              <br />
              Our handmade touch.
            </h2>

            <p className="mt-6 text-sm leading-8 text-[#81747A]">
              We understand that every person, celebration and occasion
              is different. That's why we welcome your ideas and offer
              customisation based on colours, designs and budget.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-3 border-b border-[#A77D8B] pb-2 text-sm transition hover:text-[#A77D8B]"
            >
              Let's discuss your idea <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=700&q=85"
              alt="Creative gift packaging inspiration"
              className="h-64 w-full rounded-xl object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1603006905003-be475563bc59?w=700&q=85"
              alt="Decorative handmade candles"
              className="mt-10 h-64 w-full rounded-xl object-cover"
            />
          </div>
        </div>
      </section>

      {/* LOCATION AND CTA */}
      <section className="bg-[#DCEDE2] px-6 py-20 text-center">
        <MapPin className="mx-auto mb-5 text-[#8A6570]" size={27} />

        <p className="mb-4 text-xs uppercase tracking-[0.25em] text-[#8A6570]">
          Rooted in creativity
        </p>

        <h2 className="font-display text-4xl md:text-5xl">
          From Srikakulam, with love.
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-sm leading-8 text-[#81747A]">
          Based in Srikakulam, Andhra Pradesh, Jhunuk Crafts shares
          handmade creations with customers across India and internationally.
        </p>

        <p className="mt-3 text-sm font-medium text-[#8A6570]">
          Pan-India Shipping Available
        </p>

        <Link
          href="/products"
          className="mt-8 inline-flex items-center gap-3 rounded-md bg-[#A77D8B] px-8 py-4 text-sm text-white transition hover:bg-[#8A6570]"
        >
          Discover Our Collection <ArrowRight size={17} />
        </Link>
      </section>
    </main>
  );
}
