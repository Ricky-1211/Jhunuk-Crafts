
import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  Heart,
  Gift,
  Palette,
  Flower2,
} from "lucide-react";

const categories = [
  {
    name: "Home Décor",
    description: "Beautiful details for beautiful spaces.",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=85",
  },
  {
    name: "Personalised Gifts",
    description: "Thoughtful gifts made extra special.",
    image:
      "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=800&q=85",
  },
  {
    name: "Candles",
    description: "Little creations that brighten moments.",
    image:
      "https://images.unsplash.com/photo-1603006905003-be475563bc59?w=800&q=85",
  },
  {
    name: "Photo Frames",
    description: "Keep your favourite memories close.",
    image:
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&q=85",
  },
];

const highlights = [
  {
    number: "01",
    title: "Made by Hand",
    description: "Every creation receives individual care and attention.",
    icon: Heart,
  },
  {
    number: "02",
    title: "Made for You",
    description: "Choose your colours, designs and budget.",
    icon: Palette,
  },
  {
    number: "03",
    title: "Made to Gift",
    description: "Thoughtful creations for life's special occasions.",
    icon: Gift,
  },
];

const occasions = [
  "Birthdays",
  "Weddings",
  "Festivals",
  "Baby Showers",
  "Anniversaries",
  "Just Because",
];

export default function HomePage() {
  return (
    <main className="overflow-hidden bg-[#FFF9F1] text-[#51464A]">

      {/* HERO */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">

          <div className="order-2 md:order-1">
            <p className="mb-6 flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#A77D8B]">
              <Sparkles size={15} />
              Handmade with love since 2013
            </p>

            <h1 className="font-display text-5xl leading-[1.12] md:text-7xl">
              Art that speaks.
              <br />
              <span className="italic text-[#A77D8B]">
                Gifts that feel.
              </span>
            </h1>

            <p className="mt-7 max-w-lg text-base leading-8 text-[#81747A]">
              Discover thoughtful handmade creations, personalised gifts
              and little pieces of art made to celebrate your special moments.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/products"
                className="inline-flex items-center gap-3 rounded-sm bg-[#A77D8B] px-8 py-4 text-sm text-white transition hover:bg-[#8A6570]"
              >
                Explore Products
                <ArrowRight size={17} />
              </Link>

              <Link
                href="/about"
                className="inline-flex items-center gap-3 rounded-sm border border-[#D9BAC4] px-8 py-4 text-sm transition hover:bg-[#F8E8EC]"
              >
                Our Story
              </Link>
            </div>

            <div className="mt-12 flex gap-10 border-t border-[#EEDDE2] pt-7">
              <div>
                <p className="font-display text-3xl">2013</p>
                <p className="mt-1 text-xs text-[#81747A]">Our beginning</p>
              </div>
              <div>
                <p className="font-display text-3xl">Custom</p>
                <p className="mt-1 text-xs text-[#81747A]">Made for you</p>
              </div>
              <div>
                <p className="font-display text-3xl">Pan India</p>
                <p className="mt-1 text-xs text-[#81747A]">Delivery</p>
              </div>
            </div>
          </div>

          <div className="relative order-1 md:order-2">
            <img
              src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=1200&q=90"
              alt="Handmade creative home décor"
              className="h-[360px] w-full rounded-sm object-cover md:h-[570px]"
            />

            <div className="absolute -bottom-6 -left-4 max-w-[220px] rounded-sm bg-[#F8E8EC] p-6 shadow-xl md:-left-8">
              <Flower2 className="mb-3 text-[#A77D8B]" size={25} />
              <p className="font-display text-xl">A little something special</p>
              <p className="mt-2 text-xs leading-5 text-[#81747A]">
                Created with care, creativity and love.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="bg-[#DCEDE2] px-6 py-16 text-center text-[#51464A] md:py-20">
        <div className="mx-auto max-w-3xl">
          <p className="mb-5 text-xs uppercase tracking-[0.3em] text-[#8A6570]">
            Welcome to Jhunuk Crafts
          </p>

          <h2 className="font-display text-3xl leading-snug md:text-5xl">
            Not just handmade.
            <br />
            Made with a little piece of heart.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-[#71666B]">
            From personalised nameplates to thoughtful gift boxes, we believe
            the smallest handmade details can make the biggest memories.
            Every idea deserves its own special touch.
          </p>

          <Link
            href="/about"
            className="mt-8 inline-flex items-center gap-2 border-b border-[#A77D8B] pb-2 text-sm text-[#51464A] transition hover:text-[#A77D8B]"
          >
            Discover our story <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* CATEGORY COLLECTION */}
      <section className="px-6 py-20 md:py-24">
        <div className="mx-auto max-w-7xl">

          <div className="mb-12 flex flex-wrap items-end justify-between gap-5">
            <div>
              <p className="mb-3 text-xs uppercase tracking-[0.25em] text-[#A77D8B]">
                Explore our world
              </p>
              <h2 className="font-display text-4xl md:text-5xl">
                Made for every moment
              </h2>
              <p className="mt-3 text-sm text-[#81747A]">
                Find something that feels just right.
              </p>
            </div>

            <Link
              href="/products"
              className="inline-flex items-center gap-2 border-b border-[#A77D8B] pb-2 text-sm transition hover:text-[#A77D8B]"
            >
              View All Products <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category, index) => (
              <Link
                href="/products"
                key={category.name}
                className="group"
              >
                <div className="relative overflow-hidden rounded-sm">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="h-[320px] w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-sm bg-[#FFF9F1] px-3 py-2 text-[10px] tracking-widest text-[#51464A]">
                    0{index + 1}
                  </span>
                </div>

                <div className="flex items-start justify-between pt-5">
                  <div>
                    <h3 className="font-display text-2xl">
                      {category.name}
                    </h3>
                    <p className="mt-2 text-xs leading-6 text-[#81747A]">
                      {category.description}
                    </p>
                  </div>

                  <ArrowRight
                    size={19}
                    className="mt-1 shrink-0 text-[#A77D8B] transition group-hover:translate-x-2"
                  />
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* WHY JHUNUK */}
      <section className="bg-[#DFEAF7] px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <p className="mb-3 text-xs uppercase tracking-[0.25em] text-[#A77D8B]">
              The Jhunuk difference
            </p>
            <h2 className="font-display text-4xl md:text-5xl">
              Creativity in every detail.
            </h2>
          </div>

          <div className="grid gap-10 md:grid-cols-3">
            {highlights.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.number}
                  className="border-t border-[#C8D5E5] pt-7"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs tracking-widest text-[#A77D8B]">
                      {item.number}
                    </span>
                    <Icon size={25} className="text-[#A77D8B]" />
                  </div>

                  <h3 className="mt-7 font-display text-2xl">
                    {item.title}
                  </h3>

                  <p className="mt-3 max-w-xs text-sm leading-7 text-[#81747A]">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* OCCASIONS */}
      <section className="px-6 py-20 md:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">

          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.25em] text-[#A77D8B]">
              Celebrate beautifully
            </p>

            <h2 className="font-display text-4xl leading-tight md:text-5xl">
              Every occasion deserves something personal.
            </h2>

            <p className="mt-6 max-w-lg text-sm leading-8 text-[#81747A]">
              Whether it is a birthday, wedding, festival or a simple
              thoughtful surprise, find handmade creations that make
              your moments more memorable.
            </p>

            <Link
              href="/products"
              className="mt-8 inline-flex items-center gap-3 rounded-sm bg-[#A77D8B] px-8 py-4 text-sm text-white transition hover:bg-[#8A6570]"
            >
              Find Your Gift <ArrowRight size={17} />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {occasions.map((occasion, index) => (
              <Link
                href="/products"
                key={occasion}
                className={`flex min-h-[115px] items-center justify-center rounded-sm p-5 text-center font-display text-xl transition hover:bg-[#A77D8B] hover:text-white ${
                  index % 2 === 0
                    ? "bg-[#F8E8EC]"
                    : "border border-[#EEDDE2] bg-[#DCEDE2]"
                }`}
              >
                {occasion}
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* CUSTOM ORDER CTA */}
      <section className="bg-[#F8E8EC] px-6 py-20 text-center text-[#51464A] md:py-24">
        <div className="mx-auto max-w-2xl">
          <Sparkles className="mx-auto mb-6 text-[#A77D8B]" size={30} />

          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#8A6570]">
            Have something in mind?
          </p>

          <h2 className="font-display text-4xl leading-tight md:text-6xl">
            Let's create something beautiful together.
          </h2>

          <p className="mt-6 text-sm leading-8 text-[#81747A]">
            Tell us your idea, preferred colours and budget. We would love
            to bring your imagination to life.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Link
              href="/products"
              className="inline-flex items-center gap-3 rounded-sm bg-[#A77D8B] px-8 py-4 text-sm text-white transition hover:bg-[#8A6570]"
            >
              Browse Products <ArrowRight size={17} />
            </Link>

            <a
              href="https://wa.me/919399492716"
              target="_blank"
              rel="noreferrer"
              className="rounded-sm border border-[#CDAAB6] px-8 py-4 text-sm transition hover:bg-[#DCEDE2]"
            >
              Contact Sudharani
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
