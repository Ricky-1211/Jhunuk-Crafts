
import Link from "next/link";
import {
  ArrowUpRight,
  Heart,
  Mail,
  MapPin,
  Phone,
  Facebook,
  Truck,
} from "lucide-react";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Our Story", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Custom Creations", href: "/recipes" },
  { label: "FAQs", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#F8E8EC] text-[#51464A]">

      {/* TOP BRAND SECTION */}
      <div className="mx-auto grid max-w-7xl gap-14 px-6 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1fr] lg:px-10 lg:py-20">

        {/* BRAND */}
        <div>
          <Link href="/" className="inline-block">
            <span className="font-serif text-3xl font-semibold tracking-wide text-[#51464A]">
              Jhunuk Crafts
            </span>
            <span className="mt-2 block text-[9px] uppercase tracking-[0.35em] text-[#A77D8B]">
              Handmade with love
            </span>
          </Link>

          <p className="mt-7 max-w-sm text-sm leading-8 text-[#81747A]">
            Celebrating creativity, thoughtful details and the timeless
            charm of handmade creations. Little things that bring lasting joy.
          </p>

          <div className="mt-7 flex items-center gap-2 text-xs text-[#A77D8B]">
            <Heart size={14} fill="currentColor" />
            Made with creativity and love.
          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A77D8B]">
            Explore
          </h3>

          <ul className="mt-7 space-y-4">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="inline-flex items-center gap-2 text-sm text-[#81747A] transition hover:translate-x-1 hover:text-[#A77D8B]"
                >
                  {link.label}
                  <ArrowUpRight size={12} />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACT DETAILS */}
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A77D8B]">
            Get in touch
          </h3>

          <div className="mt-7 space-y-6">

            {/* EMAIL */}
            <a
              href="mailto:marndissudharani@gmail.com"
              className="flex items-start gap-4 transition hover:text-[#A77D8B]"
            >
              <Mail size={17} className="mt-1 shrink-0 text-[#A77D8B]" />
              <div>
                <p className="text-xs text-[#A3989C]">Email us</p>
                <p className="mt-1 break-all text-sm text-[#51464A]">
                  marndissudharani@gmail.com
                </p>
              </div>
            </a>

            {/* PHONE */}
            <a
              href="tel:+919399492716"
              className="flex items-start gap-4 transition hover:text-[#A77D8B]"
            >
              <Phone size={17} className="mt-1 shrink-0 text-[#A77D8B]" />
              <div>
                <p className="text-xs text-[#A3989C]">Call us</p>
                <p className="mt-1 text-sm text-[#51464A]">
                  +91 93994 92716
                </p>
              </div>
            </a>

            {/* ADDRESS */}
            <div className="flex items-start gap-4">
              <MapPin size={17} className="mt-1 shrink-0 text-[#A77D8B]" />
              <div>
                <p className="text-xs text-[#A3989C]">Our location</p>
                <p className="mt-1 text-sm text-[#51464A]">
                  Srikakulam, Andhra Pradesh, India
                </p>
              </div>
            </div>

            {/* SHIPPING */}
            <div className="flex items-start gap-4">
              <Truck size={17} className="mt-1 shrink-0 text-[#A77D8B]" />
              <div>
                <p className="text-xs text-[#A3989C]">Shipping</p>
                <p className="mt-1 text-sm text-[#51464A]">
                  Pan-India Shipping Available
                </p>
              </div>
            </div>

            {/* FACEBOOK */}
            <a
              href="https://www.facebook.com/Jhunuk-Crafts-275225812628925"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-sm text-[#A77D8B] transition hover:text-[#51464A]"
            >
              <Facebook size={18} />
              Follow us on Facebook
              <ArrowUpRight size={13} />
            </a>

          </div>
        </div>
      </div>

      {/* BRAND STATEMENT */}
      <div className="border-y border-[#EEDDE2] bg-[#DCEDE2] px-6 py-10 text-center">
        <Facebook
          size={22}
          strokeWidth={1.4}
          className="mx-auto text-[#A77D8B]"
        />

        <p className="mt-4 font-serif text-2xl italic text-[#51464A] sm:text-3xl">
          Little creations, endless possibilities.
        </p>

        <p className="mt-3 text-[10px] uppercase tracking-[0.25em] text-[#81747A]">
          Discover the beauty of handmade
        </p>
      </div>

      {/* COPYRIGHT */}
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-center sm:flex-row lg:px-10">
        <p className="text-[11px] text-[#81747A]">
          © {new Date().getFullYear()} Jhunuk Crafts. All rights reserved.
        </p>

        <div className="flex items-center gap-6">
          <Link
            href="/privacy"
            className="text-[11px] text-[#81747A] transition hover:text-[#A77D8B]"
          >
            Privacy Policy
          </Link>

          <span className="text-[11px] text-[#81747A]">
            Crafted with <Heart size={11} className="mx-1 inline text-[#A77D8B]" /> love
          </span>
        </div>
      </div>

    </footer>
  );
}
