
import Link from "next/link";
import { ArrowRight, Palette, Heart, Gift, Sparkles } from "lucide-react";

export const metadata = {
  title: "Custom Creations",
  description: "Explore personalised handmade creations at Jhunuk Crafts.",
};

const ideas = [
  {
    icon: Palette,
    title: "Personalised Art",
    description:
      "Creative artwork inspired by your favourite colours, themes and ideas.",
  },
  {
    icon: Heart,
    title: "Handmade Keepsakes",
    description:
      "Thoughtful little creations to celebrate memories and special moments.",
  },
  {
    icon: Gift,
    title: "Customised Gifts",
    description:
      "Unique gifting ideas made to add a personal touch to your celebrations.",
  },
  {
    icon: Sparkles,
    title: "Creative Décor",
    description:
      "Decorative handmade pieces designed to bring personality into your space.",
  },
];

export default function CustomCreationsPage() {
  return (
    <main className="bg-[#F5F1E9] text-[#39352E]">
      <section className="relative flex min-h-[500px] items-center overflow-hidden bg-[#39352E]">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-45"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=1800&q=85')",
          }}
        />
        <div className="relative mx-auto w-full max-w-7xl px-6 py-24 lg:px-10">
          <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#D2B99B]">
            Your imagination, our creativity
          </p>
          <h1 className="mt-6 max-w-2xl font-serif text-5xl leading-tight text-white sm:text-7xl">
            Made just for you.
            <span className="block italic text-[#D2B99B]">
              Made to be special.
            </span>
          </h1>
          <p className="mt-7 max-w-xl text-sm leading-8 text-white/80">
            Have an idea in mind? Let's turn your imagination into
            a thoughtful handmade creation.
          </p>
          <Link
            href="/contact"
            className="mt-9 inline-flex items-center gap-3 bg-[#F5F1E9] px-8 py-4 text-xs font-semibold tracking-widest text-[#39352E] transition hover:bg-[#D2B99B]"
          >
            SHARE YOUR IDEA <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#A47750]">
            A little something different
          </p>
          <h2 className="mt-4 font-serif text-4xl sm:text-5xl">
            Your idea. Your style. Your creation.
          </h2>
          <p className="mt-5 text-sm leading-8 text-[#81796F]">
            Sometimes the most meaningful things are the ones created
            especially for someone. Explore a few ideas for your next
            personalised creation.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ideas.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="border border-[#E5D9C8] bg-white p-8 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="text-xs tracking-widest text-[#A47750]">
                  0{index + 1}
                </span>
                <Icon
                  size={32}
                  strokeWidth={1.3}
                  className="mt-7 text-[#A47750]"
                />
                <h3 className="mt-6 font-serif text-2xl">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#81796F]">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="grid bg-[#E9E2D8] md:grid-cols-2">
        <div className="min-h-[360px] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=1100&q=85"
            alt="Creative handmade workspace"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex items-center px-8 py-16 sm:px-16">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#A47750]">
              Let's make it personal
            </p>
            <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl">
              Something made with you in mind.
            </h2>
            <p className="mt-6 text-sm leading-8 text-[#81796F]">
              Tell us what you have imagined. Share your inspiration,
              preferred colours or the occasion. We can discuss your
              idea and explore the possibilities together.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-3 border-b border-[#A47750] pb-2 text-xs font-semibold tracking-widest"
            >
              START A CONVERSATION <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
