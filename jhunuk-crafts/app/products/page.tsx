
"use client";

import { useState } from "react";
import Link from "next/link";
import { useCart } from "@/components/CartContext";
import { products } from "@/lib/products";
import {
  ShoppingBag,
  ShoppingCart,
  Plus,
  Minus,
  Trash2,
  X,
  ArrowRight,
  MessageCircle,
  Sparkles,
} from "lucide-react";

const categories = [
  "All Products",
  "Nameplates",
  "Home Décor",
  "Candles",
  "Cash Envelopes",
  "Gift Packaging",
  "Photo Frames",
  "Rakhi",
  "Party Décor",
  "Corporate Gifting",
  "Coasters",
  "Fridge Magnets",
  "Keyholders",
  "Return Gifts",
  "Engagement Trays",
  "Keyrings",
  "Workshops",
  "Greeting Cards",
  "Festival Décor",
];

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("All Products");
  const [cartOpen, setCartOpen] = useState(false);

  const {
    cart,
    cartCount,
    addToCart,
    changeQuantity,
    removeFromCart,
  } = useCart();

  const filteredProducts =
    activeCategory === "All Products"
      ? products
      : products.filter(
          (product) => product.category === activeCategory
        );

  function handleAddToCart(product: (typeof products)[number]) {
    addToCart({
      id: product.id,
      name: product.name,
      image: product.image,
    });

    setCartOpen(true);
  }

  function sendEnquiry() {
    const message = [
      "Hello Sudharani! I'm interested in these Jhunuk Crafts products:",
      "",
      ...cart.map(
        (item) => `${item.name} — Quantity: ${item.quantity}`
      ),
      "",
      "Please share the prices and customisation details.",
    ].join("\n");

    window.open(
      `https://wa.me/919399492716?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  }

  return (
    <main className="bg-[#FFF9F1] text-[#51464A]">

      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-[#F8E8EC] px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">

          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-[#A77D8B]">
            The Jhunuk Crafts Collection
          </p>

          <div className="grid items-center gap-12 md:grid-cols-2">

            <div>
              <h1 className="font-display text-5xl leading-tight md:text-7xl">
                Little things.
                <br />
                <span className="italic text-[#A77D8B]">
                  Big feelings.
                </span>
              </h1>

              <p className="mt-7 max-w-lg text-base leading-8 text-[#81747A]">
                Explore thoughtfully handmade creations, personalised
                gifts and beautiful details made to make every moment
                special.
              </p>

              <a
                href="#shop"
                className="mt-9 inline-flex items-center gap-3 rounded-sm bg-[#A77D8B] px-8 py-4 text-sm text-white transition hover:bg-[#8A6570]"
              >
                Explore Products
                <ArrowRight size={17} />
              </a>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=1200&q=90"
                alt="Handcrafted home décor"
                className="h-[330px] w-full rounded-sm object-cover md:h-[460px]"
              />

              <div className="absolute -bottom-5 -left-5 rounded-sm bg-[#DCEDE2] p-5 shadow-lg md:p-7">
                <Sparkles
                  className="mb-2 text-[#A77D8B]"
                  size={23}
                />
                <p className="font-display text-xl">
                  Made with love
                </p>
                <p className="mt-1 text-xs text-[#81747A]">
                  Handmade since 2013
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* PAN INDIA SHIPPING */}
      <section className="bg-[#DCEDE2] px-6 py-5 text-center">
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#51464A]">
          <span className="mr-2 text-[#A77D8B]">✦</span>
          Pan-India Shipping Available
          <span className="ml-2 text-[#A77D8B]">✦</span>
        </p>
      </section>

      {/* PRODUCTS SECTION */}
      <section id="shop" className="px-6 py-20 md:py-24">
        <div className="mx-auto max-w-7xl">

          <div className="mb-10 flex flex-wrap items-end justify-between gap-5">

            <div>
              <p className="mb-3 text-xs uppercase tracking-[0.25em] text-[#A77D8B]">
                Find your favourite
              </p>

              <h2 className="font-display text-4xl md:text-5xl">
                Shop our creations
              </h2>

              <p className="mt-3 text-sm text-[#81747A]">
                Every piece can be customised to your taste.
              </p>
            </div>

            <button
              onClick={() => setCartOpen(true)}
              className="relative flex items-center gap-3 rounded-sm border border-[#EEDDE2] px-5 py-3 text-sm transition hover:bg-[#F8E8EC]"
            >
              <ShoppingBag size={18} />
              My Cart

              <span className="flex h-6 min-w-6 items-center justify-center rounded-full bg-[#A77D8B] px-1 text-xs text-white">
                {cartCount}
              </span>
            </button>

          </div>

          {/* CATEGORY FILTER */}
          <div className="mb-10 flex gap-3 overflow-x-auto pb-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`shrink-0 rounded-sm px-5 py-3 text-xs transition ${
                  activeCategory === category
                    ? "bg-[#A77D8B] text-white"
                    : "border border-[#EEDDE2] bg-white text-[#665B60] hover:bg-[#F8E8EC]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* PRODUCT GRID */}
          <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

            {filteredProducts.map((product) => (
              <article key={product.id} className="group">

                <div className="relative overflow-hidden rounded-sm bg-[#F8E8EC]">

                  {/* CLICKABLE PRODUCT IMAGE */}
                  <Link
                    href={`/products/${product.id}`}
                    className="block"
                    aria-label={`View ${product.name} details`}
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-[310px] w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                  </Link>

                  <span className="absolute left-4 top-4 rounded-sm bg-[#FFF9F1] px-3 py-2 text-[10px] uppercase tracking-wider text-[#51464A]">
                    Handmade
                  </span>

                  {/* ADD TO CART BUTTON */}
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="absolute bottom-4 left-4 right-4 flex items-center justify-center gap-2 rounded-sm bg-[#A77D8B] py-4 text-xs font-medium uppercase tracking-widest text-white transition hover:bg-[#8A6570]"
                  >
                    <ShoppingBag size={16} />
                    Add to Cart
                  </button>

                </div>

                <div className="pt-5">

                  <p className="mb-2 text-[10px] uppercase tracking-[0.2em] text-[#A77D8B]">
                    {product.category}
                  </p>

                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display text-xl">
                      {product.name}
                    </h3>

                    <span className="shrink-0 text-xs text-[#81747A]">
                      Custom quote
                    </span>
                  </div>

                  <p className="mt-2 min-h-[48px] text-sm leading-6 text-[#81747A]">
                    {product.description}
                  </p>

                  <Link
                    href={`/products/${product.id}`}
                    className="mt-4 inline-flex items-center gap-2 border-b border-[#A77D8B] pb-1 text-xs uppercase tracking-wider text-[#665B60] transition hover:text-[#A77D8B]"
                  >
                    View Details
                    <ArrowRight size={14} />
                  </Link>

                </div>
              </article>
            ))}

          </div>

          {filteredProducts.length === 0 && (
            <p className="py-16 text-center text-[#81747A]">
              No products found in this category.
            </p>
          )}

        </div>
      </section>

      {/* CUSTOMISATION SECTION */}
      <section className="bg-[#DFEAF7] px-6 py-20 text-center">
        <div className="mx-auto max-w-2xl">

          <Sparkles
            className="mx-auto mb-5 text-[#A77D8B]"
            size={28}
          />

          <p className="mb-3 text-xs uppercase tracking-[0.25em] text-[#8A6570]">
            Made just for you
          </p>

          <h2 className="font-display text-4xl md:text-5xl">
            Your idea, our creativity.
          </h2>

          <p className="mt-5 leading-8 text-[#71666B]">
            Have a special design in mind? Choose your colours,
            designs and budget. Sudharani would love to create
            something personal for you.
          </p>

          <a
            href="https://wa.me/919399492716"
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-3 rounded-sm bg-[#A77D8B] px-8 py-4 text-sm text-white transition hover:bg-[#8A6570]"
          >
            <MessageCircle size={17} />
            Discuss Your Custom Order
          </a>

        </div>
      </section>

      {/* CART DRAWER */}
      {cartOpen && (
        <div className="fixed inset-0 z-[100]">

          <button
            aria-label="Close cart"
            onClick={() => setCartOpen(false)}
            className="absolute inset-0 h-full w-full bg-black/50"
          />

          <aside className="absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-[#FFF9F1] shadow-2xl">

            <div className="flex items-center justify-between border-b border-[#EEDDE2] bg-[#F8E8EC] p-6">

              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-[#A77D8B]">
                  Your selections
                </p>

                <h2 className="mt-1 font-display text-2xl">
                  Shopping Cart
                </h2>
              </div>

              <button
                onClick={() => setCartOpen(false)}
                aria-label="Close cart"
                className="rounded-sm p-2 transition hover:bg-[#EEDDE2]"
              >
                <X size={22} />
              </button>

            </div>

            <div className="flex-1 overflow-y-auto p-6">

              {cart.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center text-center">

                  <ShoppingCart
                    size={42}
                    className="mb-5 text-[#A77D8B]"
                  />

                  <h3 className="font-display text-2xl">
                    Your cart is empty
                  </h3>

                  <p className="mt-2 text-sm text-[#81747A]">
                    Explore our creations and add something you love.
                  </p>

                  <button
                    onClick={() => setCartOpen(false)}
                    className="mt-6 rounded-sm bg-[#A77D8B] px-6 py-3 text-xs uppercase tracking-wider text-white transition hover:bg-[#8A6570]"
                  >
                    Continue Shopping
                  </button>

                </div>
              ) : (
                <div className="space-y-6">

                  {cart.map((item) => (
                    <div
                      key={item.id}
                      className="flex gap-4 border-b border-[#EEDDE2] pb-6"
                    >

                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-24 w-24 rounded-sm object-cover"
                      />

                      <div className="min-w-0 flex-1">

                        <h3 className="font-display text-lg">
                          {item.name}
                        </h3>

                        <p className="mt-1 text-xs text-[#81747A]">
                          Price on request
                        </p>

                        <div className="mt-3 flex items-center justify-between">

                          <div className="flex items-center gap-3">

                            <button
                              onClick={() => changeQuantity(item.id, -1)}
                              aria-label="Decrease quantity"
                              className="rounded-sm border border-[#EEDDE2] p-1 transition hover:bg-[#F8E8EC]"
                            >
                              <Minus size={13} />
                            </button>

                            <span className="text-sm">
                              {item.quantity}
                            </span>

                            <button
                              onClick={() => changeQuantity(item.id, 1)}
                              aria-label="Increase quantity"
                              className="rounded-sm border border-[#EEDDE2] p-1 transition hover:bg-[#F8E8EC]"
                            >
                              <Plus size={13} />
                            </button>

                          </div>

                          <button
                            onClick={() => removeFromCart(item.id)}
                            aria-label={`Remove ${item.name}`}
                            className="text-[#A77D8B] transition hover:text-red-700"
                          >
                            <Trash2 size={16} />
                          </button>

                        </div>
                      </div>
                    </div>
                  ))}

                </div>
              )}

            </div>

            {cart.length > 0 && (
              <div className="border-t border-[#EEDDE2] bg-[#F8E8EC] p-6">

                <p className="mb-4 text-xs leading-6 text-[#81747A]">
                  Final prices will be shared by the owner based
                  on your selected designs and customisation.
                </p>

                <button
                  onClick={sendEnquiry}
                  className="flex w-full items-center justify-center gap-3 rounded-sm bg-[#A77D8B] py-4 text-sm text-white transition hover:bg-[#8A6570]"
                >
                  <MessageCircle size={18} />
                  Send Cart Enquiry on WhatsApp
                </button>

              </div>
            )}

          </aside>
        </div>
      )}

    </main>
  );
}
