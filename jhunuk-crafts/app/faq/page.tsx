
"use client";

import { useState } from "react";
import { Plus, Minus, MessageCircle, ArrowRight, Sparkles } from "lucide-react";

const faqGroups = [
  {
    title: "Orders & Customisation",
    subtitle: "Everything about creating something personal.",
    questions: [
      {
        q: "Can I customise a product according to my preferences?",
        a: "Absolutely! You can discuss your preferred colours, designs, names, themes and budget with us. We love turning your ideas into handmade creations.",
      },
      {
        q: "How can I place an order?",
        a: "Browse our Products page, add your favourite items to your cart and send your enquiry through WhatsApp. You can also contact us directly to discuss a custom order.",
      },
      {
        q: "Can I request a completely new design?",
        a: "Yes! If you have a reference picture, inspiration or a unique idea, share it with us. We will discuss the possibilities and customisation details.",
      },
      {
        q: "Can I order products for a special occasion?",
        a: "Of course! We create handmade gifts and decorations for weddings, birthdays, engagements, baby showers, festivals and other special occasions.",
      },
    ],
  },
  {
    title: "Pricing & Payments",
    subtitle: "A little clarity before you order.",
    questions: [
      {
        q: "Where can I find product prices?",
        a: "Since many creations are personalised, prices can vary depending on the design, materials, size and quantity. Contact us for a quote.",
      },
      {
        q: "Can I place bulk or corporate orders?",
        a: "You can contact us with your requirements for bulk gifting or corporate enquiries. Share the quantity, occasion and preferred budget so we can discuss your request.",
      },
      {
        q: "How do I confirm my order?",
        a: "Contact Sudharani through WhatsApp to discuss your product, customisation, price and order details. The owner will guide you through the confirmation process.",
      },
    ],
  },
  {
    title: "Delivery & Shipping",
    subtitle: "Handmade happiness, delivered to you.",
    questions: [
      {
        q: "Do you deliver outside Srikakulam?",
        a: "Yes! Jhunuk Crafts offers delivery across India and internationally.",
      },
      {
        q: "How long does delivery take?",
        a: "Delivery time can depend on the product, customisation requirements and delivery destination. Please confirm the estimated timeline with us before placing your order.",
      },
      {
        q: "Can I request an urgent order?",
        a: "You can contact us with your required date. We will let you know whether the requested design and delivery timeline are possible.",
      },
    ],
  },
  {
    title: "Products & Workshops",
    subtitle: "A few more things you might want to know.",
    questions: [
      {
        q: "What kind of products do you create?",
        a: "Our collection includes handmade nameplates, home décor, candles, photo frames, gift packaging, coasters, keyrings, keyholders, greeting cards, engagement trays, festival décor and more.",
      },
      {
        q: "Do you make handmade return gifts?",
        a: "Yes! You can enquire about personalised return gifts for birthdays, celebrations, students and other occasions.",
      },
      {
        q: "Do you conduct workshops?",
        a: "Please contact us directly to enquire about workshop availability, topics and upcoming sessions.",
      },
      {
        q: "Can I share a reference image?",
        a: "Definitely! You can send reference images through WhatsApp to help us understand the design and style you have in mind.",
      },
    ],
  },
];

export default function FAQPage() {
  const [activeGroup, setActiveGroup] = useState(0);
  const [openQuestion, setOpenQuestion] = useState<string | null>(
    faqGroups[0].questions[0].q
  );

  const currentGroup = faqGroups[activeGroup];

  return (
    <main className="bg-[#FFF9F5] text-[#51464A]">
      {/* HERO */}
      <section className="px-6 py-20 text-center md:py-28">
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-[#A77D8B]">
          A little help goes a long way
        </p>

        <h1 className="font-display text-5xl leading-tight md:text-7xl">
          Frequently asked
          <br />
          <span className="italic text-[#A77D8B]">questions.</span>
        </h1>

        <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-[#81747A]">
          Curious about custom orders, handmade creations or delivery?
          We've gathered answers to help you shop with confidence.
        </p>
      </section>

      {/* FAQ CONTENT */}
      <section className="px-6 pb-24">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[280px_1fr]">
          {/* CATEGORY SIDEBAR */}
          <aside>
            <p className="mb-5 text-xs uppercase tracking-[0.25em] text-[#A77D8B]">
              Explore topics
            </p>

            <div className="flex gap-2 overflow-x-auto pb-3 md:flex-col md:overflow-visible">
              {faqGroups.map((group, index) => (
                <button
                  key={group.title}
                  onClick={() => {
                    setActiveGroup(index);
                    setOpenQuestion(null);
                  }}
                  className={`shrink-0 rounded-md border px-5 py-4 text-left text-sm transition ${
                    activeGroup === index
                      ? "border-[#A77D8B] bg-[#A77D8B] text-white"
                      : "border-[#EEDDE2] bg-white text-[#665D52] hover:border-[#A77D8B] hover:bg-[#F8E8EC]"
                  }`}
                >
                  {group.title}
                </button>
              ))}
            </div>

            <div className="mt-8 hidden rounded-xl border border-[#DCEDE2] bg-[#DCEDE2] p-6 md:block">
              <Sparkles className="mb-4 text-[#8A6570]" size={24} />
              <h3 className="font-display text-2xl">
                Still curious?
              </h3>
              <p className="mt-3 text-sm leading-6 text-[#81747A]">
                Have a question that isn't answered here? We'd be happy
                to help.
              </p>
              <a
                href="https://wa.me/919399492716"
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[#8A6570] hover:text-[#A77D8B]"
              >
                Ask us <ArrowRight size={14} />
              </a>
            </div>
          </aside>

          {/* QUESTIONS */}
          <div>
            <div className="mb-8 border-b border-[#EEDDE2] pb-7">
              <p className="mb-3 text-xs uppercase tracking-[0.25em] text-[#A77D8B]">
                Questions & answers
              </p>
              <h2 className="font-display text-3xl md:text-4xl">
                {currentGroup.title}
              </h2>
              <p className="mt-3 text-sm text-[#81747A]">
                {currentGroup.subtitle}
              </p>
            </div>

            <div className="divide-y divide-[#EEDDE2]">
              {currentGroup.questions.map((item, index) => {
                const isOpen = openQuestion === item.q;

                return (
                  <div key={item.q} className="py-6">
                    <button
                      onClick={() =>
                        setOpenQuestion(isOpen ? null : item.q)
                      }
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-5 text-left"
                    >
                      <span className="flex items-start gap-4">
                        <span className="pt-1 text-xs text-[#A77D8B]">
                          0{index + 1}
                        </span>
                        <span className="font-display text-lg md:text-xl">
                          {item.q}
                        </span>
                      </span>

                      <span className="shrink-0 text-[#A77D8B]">
                        {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="ml-9 mt-5 max-w-2xl text-sm leading-8 text-[#81747A]">
                        {item.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="mt-10 rounded-xl border border-[#EEDDE2] bg-[#F8E8EC] p-6 md:p-8">
              <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
                <div>
                  <h3 className="font-display text-2xl">
                    Didn't find your answer?
                  </h3>
                  <p className="mt-2 text-sm text-[#81747A]">
                    Talk to Sudharani directly on WhatsApp.
                  </p>
                </div>

                <a
                  href="https://wa.me/919399492716"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex shrink-0 items-center justify-center gap-3 rounded-md bg-[#A77D8B] px-6 py-4 text-sm text-white transition hover:bg-[#8A6570]"
                >
                  <MessageCircle size={17} />
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="bg-[#DCEDE2] px-6 py-20 text-center text-[#51464A]">
        <Sparkles className="mx-auto mb-5 text-[#8A6570]" size={27} />

        <p className="mb-4 text-xs uppercase tracking-[0.25em] text-[#8A6570]">
          Your imagination, handmade
        </p>

        <h2 className="font-display text-4xl md:text-5xl">
          Have an idea?
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#81747A]">
          Let's turn your special moments into something beautiful.
          Explore our collection and find your next favourite creation.
        </p>

        <a
          href="/products"
          className="mt-8 inline-flex items-center gap-3 rounded-md bg-[#A77D8B] px-8 py-4 text-sm text-white transition hover:bg-[#8A6570]"
        >
          Explore Products <ArrowRight size={17} />
        </a>
      </section>
    </main>
  );
}
