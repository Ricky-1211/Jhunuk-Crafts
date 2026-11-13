
"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import {
  ArrowLeft,
  ShoppingBag,
  MessageCircle,
  Sparkles,
} from "lucide-react";

import { products } from "@/lib/products";
import { useCart } from "@/components/CartContext";

export default function ProductDetailsPage() {
  const params = useParams<{ id: string }>();
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const product = products.find(
    (item) => item.id === Number(params.id)
  );

  if (!product) {
    return (
      <div className="min-h-screen bg-[#FFF9F5] flex flex-col items-center justify-center px-6">
        <h1 className="text-3xl font-serif text-[#51464A]">
          Product Not Found
        </h1>
        <Link
          href="/products"
          className="mt-6 rounded-md bg-[#A77D8B] px-8 py-3 text-white transition hover:bg-[#8A6570]"
        >
          Back to Products
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      image: product.image,
    });

    setAdded(true);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Sudharani! I'm interested in ${product.name}. Please share the price and customisation details.`
  );

  return (
    <main className="min-h-screen bg-[#FFF9F5] px-6 py-12 md:px-16">
      <Link
        href="/products"
        className="mb-10 inline-flex items-center gap-2 text-sm uppercase tracking-widest text-[#81747A] transition hover:text-[#A77D8B]"
      >
        <ArrowLeft size={16} />
        Back to Collection
      </Link>

      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 md:gap-20">
        <div className="overflow-hidden rounded-xl border border-[#EEDDE2] bg-[#F8E8EC]">
          <img
            src={product.image}
            alt={product.name}
            className="h-full min-h-[400px] w-full object-cover md:min-h-[600px]"
          />
        </div>

        <div className="flex flex-col justify-center">
          <p className="mb-5 text-xs uppercase tracking-[0.3em] text-[#A77D8B]">
            {product.category}
          </p>

          <h1 className="font-serif text-4xl leading-tight text-[#51464A] md:text-6xl">
            {product.name}
          </h1>

          <p className="mt-6 text-lg font-medium text-[#A77D8B]">
            Price on request
          </p>

          <div className="my-8 h-px bg-[#EEDDE2]" />

          <h2 className="mb-3 font-serif text-2xl text-[#51464A]">
            About This Creation
          </h2>

          <p className="leading-8 text-[#81747A]">
            {product.description}
          </p>

          <div className="my-8 flex gap-4 rounded-xl border border-[#DCEDE2] bg-[#DCEDE2] p-5">
            <Sparkles className="shrink-0 text-[#8A6570]" />
            <div>
              <h3 className="font-medium text-[#51464A]">
                Make It Yours
              </h3>
              <p className="mt-1 text-sm leading-6 text-[#81747A]">
                Customise colours, designs and budget to create
                something truly special.
              </p>
            </div>
          </div>

          <button
            onClick={handleAddToCart}
            className="flex w-full items-center justify-center gap-3 rounded-md bg-[#A77D8B] py-5 text-sm uppercase tracking-widest text-white transition hover:bg-[#8A6570]"
          >
            <ShoppingBag size={18} />
            Add to Cart
          </button>

          {added && (
            <p className="mt-3 text-center text-sm text-[#668B72]">
              Added to your cart successfully!
            </p>
          )}

          <a
            href={`https://wa.me/919399492716?text=${whatsappMessage}`}
            target="_blank"
            rel="noreferrer"
            className="mt-4 flex w-full items-center justify-center gap-3 rounded-md border border-[#A77D8B] py-5 text-sm uppercase tracking-widest text-[#8A6570] transition hover:bg-[#F8E8EC]"
          >
            <MessageCircle size={18} />
            Enquire on WhatsApp
          </a>
        </div>
      </div>
    </main>
  );
}
