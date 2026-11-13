
"use client";

import { useState, type FormEvent } from "react";
import {
  ArrowRight,
  Mail,
  MapPin,
  Phone,
  MessageCircle,
  Instagram,
  Sparkles,
} from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "Custom Order",
    message: "",
  });

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const enquiry = [
      "Hello Sudharani!",
      "",
      "I'd like to enquire about Jhunuk Crafts.",
      "",
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Enquiry type: ${form.subject}`,
      "",
      "Message:",
      form.message,
    ].join("\n");

    window.open(
      `https://wa.me/919399492716?text=${encodeURIComponent(enquiry)}`,
      "_blank"
    );
  }

  return (
    <main className="bg-[#FFF9F5] text-[#51464A]">
      {/* HERO */}
      <section className="relative overflow-hidden px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-[#A77D8B]">
            We'd love to hear from you
          </p>

          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <h1 className="font-display text-5xl leading-tight md:text-7xl">
                Let's create
                <br />
                <span className="italic text-[#A77D8B]">
                  something special.
                </span>
              </h1>

              <p className="mt-7 max-w-lg text-base leading-8 text-[#81747A]">
                Have an idea, a special occasion or a gift in mind?
                Tell us what you're imagining. We'd love to bring
                your ideas to life with something handmade.
              </p>

              <a
                href="https://wa.me/919399492716"
                target="_blank"
                rel="noreferrer"
                className="mt-9 inline-flex items-center gap-3 rounded-md bg-[#A77D8B] px-8 py-4 text-sm text-white transition hover:bg-[#8A6570]"
              >
                <MessageCircle size={18} />
                Chat on WhatsApp
                <ArrowRight size={16} />
              </a>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=1200&q=90"
                alt="Creative handmade decorations"
                className="h-[330px] w-full rounded-xl object-cover md:h-[440px]"
              />

              <div className="absolute -bottom-5 -left-5 rounded-xl border border-[#EEDDE2] bg-white p-6 shadow-lg md:p-8">
                <Sparkles className="mb-2 text-[#A77D8B]" size={23} />
                <p className="font-display text-xl">Made with love</p>
                <p className="mt-1 text-xs text-[#81747A]">
                  Every detail matters.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT DETAILS */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="mb-3 text-xs uppercase tracking-[0.25em] text-[#A77D8B]">
              Get in touch
            </p>
            <h2 className="font-display text-4xl md:text-5xl">
              We'd love to connect
            </h2>
            <p className="mt-4 text-sm text-[#81747A]">
              Reach out to us for orders, customisations and collaborations.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <a
              href="tel:+919399492716"
              className="group rounded-xl border border-[#EEDDE2] bg-white p-8 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <Phone className="mb-6 text-[#A77D8B]" size={25} />
              <h3 className="font-display text-2xl">Call us</h3>
              <p className="mt-3 text-sm text-[#81747A]">
                Speak directly with Sudharani.
              </p>
              <p className="mt-5 text-sm font-medium">
                +91 93994 92716
              </p>
            </a>

            <a
              href="mailto:marndissudharani@gmail.com"
              className="group rounded-xl border border-[#EEDDE2] bg-white p-8 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <Mail className="mb-6 text-[#A77D8B]" size={25} />
              <h3 className="font-display text-2xl">Email us</h3>
              <p className="mt-3 text-sm text-[#81747A]">
                Send your ideas and enquiries.
              </p>
              <p className="mt-5 break-all text-sm font-medium">
                marndissudharani@gmail.com
              </p>
            </a>

            <div className="rounded-xl border border-[#EEDDE2] bg-white p-8">
              <MapPin className="mb-6 text-[#A77D8B]" size={25} />
              <h3 className="font-display text-2xl">Our location</h3>
              <p className="mt-3 text-sm text-[#81747A]">
                Handmade creations from
              </p>
              <p className="mt-5 text-sm font-medium">
                Srikakulam, Andhra Pradesh, India
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="bg-[#DFEAF7] px-6 py-20 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-14 md:grid-cols-2">
          <div className="flex flex-col justify-center">
            <p className="mb-4 text-xs uppercase tracking-[0.25em] text-[#8A6570]">
              Have something in mind?
            </p>

            <h2 className="font-display text-4xl leading-tight md:text-6xl">
              Tell us your
              <br />
              <span className="italic text-[#A77D8B]">heart's idea.</span>
            </h2>

            <p className="mt-6 max-w-md leading-8 text-[#81747A]">
              Whether it's a personalised gift, wedding decoration,
              handmade keepsake or a completely new idea, share your
              thoughts with us.
            </p>

            <div className="mt-9 space-y-5 text-sm text-[#81747A]">
              <p className="flex items-center gap-3">
                <Sparkles size={17} className="text-[#A77D8B]" />
                Custom colours and designs
              </p>
              <p className="flex items-center gap-3">
                <Sparkles size={17} className="text-[#A77D8B]" />
                Creations for every occasion
              </p>
              <p className="flex items-center gap-3">
                <Sparkles size={17} className="text-[#A77D8B]" />
                Personalised to your budget
              </p>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-xl border border-[#EEDDE2] bg-[#FFF9F5] p-7 shadow-sm md:p-10"
          >
            <h3 className="mb-2 font-display text-3xl">
              Send an enquiry
            </h3>
            <p className="mb-8 text-sm text-[#81747A]">
              Fill in the details and continue to WhatsApp.
            </p>

            <div className="space-y-6">
              <div>
                <label className="mb-2 block text-xs uppercase tracking-wider">
                  Your name
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) =>
                    setForm({ ...form, name: e.target.value })
                  }
                  placeholder="Enter your name"
                  className="w-full rounded-md border border-[#EEDDE2] bg-white px-4 py-4 text-sm outline-none transition focus:border-[#A77D8B]"
                />
              </div>

              <div>
                <label className="mb-2 block text-xs uppercase tracking-wider">
                  Email address
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) =>
                    setForm({ ...form, email: e.target.value })
                  }
                  placeholder="Enter your email"
                  className="w-full rounded-md border border-[#EEDDE2] bg-white px-4 py-4 text-sm outline-none transition focus:border-[#A77D8B]"
                />
              </div>

              <div>
                <label className="mb-2 block text-xs uppercase tracking-wider">
                  Enquiry type
                </label>
                <select
                  value={form.subject}
                  onChange={(e) =>
                    setForm({ ...form, subject: e.target.value })
                  }
                  className="w-full rounded-md border border-[#EEDDE2] bg-white px-4 py-4 text-sm outline-none focus:border-[#A77D8B]"
                >
                  <option>Custom Order</option>
                  <option>Product Enquiry</option>
                  <option>Bulk Orders</option>
                  <option>Corporate Gifting</option>
                  <option>Workshops</option>
                  <option>Collaboration</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-xs uppercase tracking-wider">
                  Your message
                </label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  placeholder="Tell us what you have in mind..."
                  className="w-full resize-none rounded-md border border-[#EEDDE2] bg-white px-4 py-4 text-sm outline-none transition focus:border-[#A77D8B]"
                />
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-3 rounded-md bg-[#A77D8B] px-6 py-4 text-sm text-white transition hover:bg-[#8A6570]"
              >
                Send Enquiry on WhatsApp
                <ArrowRight size={17} />
              </button>

              <p className="text-center text-xs leading-5 text-[#81747A]">
                Your enquiry will open in WhatsApp so you can review
                and send it directly to Jhunuk Crafts.
              </p>
            </div>
          </form>
        </div>
      </section>

      {/* SOCIAL AND DELIVERY */}
      <section className="px-6 py-16 text-center">
        <div className="mx-auto max-w-3xl">
          <Instagram className="mx-auto mb-5 text-[#A77D8B]" size={27} />
          <h2 className="font-display text-3xl md:text-4xl">
            Let's stay connected
          </h2>
          <p className="mt-4 leading-7 text-[#81747A]">
            From Srikakulam to your doorstep. Jhunuk Crafts offers
            delivery across India and internationally.
          </p>

          <p className="mt-3 text-sm font-medium text-[#A77D8B]">
            Pan-India Shipping Available
          </p>

          <a
            href="https://www.facebook.com/Jhunuk-Crafts-275225812628925"
            target="_blank"
            rel="noreferrer"
            className="mt-7 inline-flex items-center gap-2 border-b border-[#A77D8B] pb-2 text-sm transition hover:text-[#8A6570]"
          >
            Find us on Facebook <ArrowRight size={15} />
          </a>
        </div>
      </section>
    </main>
  );
}
