
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Our Story", href: "/about" },
  { name: "Collection", href: "/products" },
  { name: "FAQs", href: "/faq" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-[#DCEDE2] px-4 py-2 text-center text-[10px] font-medium uppercase tracking-[0.2em] text-[#51464A] sm:text-xs">
        Handmade with love · Pan-India Shipping Available
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 border-b border-[#EEDDE2] bg-[#FFF9F5]/95 backdrop-blur-md">
        <div className="mx-auto flex min-h-[88px] max-w-7xl items-center justify-between gap-5 px-5 py-3 md:px-8">

          {/* Logo */}
          <Link
            href="/"
            aria-label="Jhunuk Crafts home"
            className="flex shrink-0 items-center"
          >
            <div className="flex h-[62px] w-[165px] items-center justify-start sm:w-[190px] md:h-[68px] md:w-[210px]">
              <Image
                src="/logo.png"
                alt="Jhunuk Crafts"
                width={420}
                height={140}
                priority
                className="h-full w-full object-contain object-left"
                sizes="(max-width: 640px) 165px, (max-width: 768px) 190px, 210px"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-7 lg:flex xl:gap-9">
            {navLinks.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(link.href));

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative py-2 text-[12px] font-medium tracking-wide transition-colors duration-200 ${
                    isActive
                      ? "text-[#A77D8B]"
                      : "text-[#51464A] hover:text-[#A77D8B]"
                  }`}
                >
                  {link.name}

                  <span
                    className={`absolute -bottom-1 left-0 h-[2px] rounded-full bg-[#C58FA0] transition-all duration-300 ${
                      isActive ? "w-full" : "w-0"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Desktop Button */}
          <Link
            href="/products"
            className="hidden shrink-0 items-center gap-2 rounded-full bg-[#A77D8B] px-5 py-3 text-[11px] font-medium uppercase tracking-wider text-white transition hover:bg-[#8A6570] lg:inline-flex"
          >
            Explore Collection
            <ArrowUpRight size={14} />
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#EEDDE2] text-[#51464A] transition hover:bg-[#F8E8EC] lg:hidden"
          >
            {mobileMenuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="border-t border-[#EEDDE2] bg-[#FFF9F5] px-6 py-5 lg:hidden">
            <nav className="mx-auto flex max-w-7xl flex-col">
              {navLinks.map((link) => {
                const isActive =
                  pathname === link.href ||
                  (link.href !== "/" && pathname.startsWith(link.href));

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`border-b border-[#EEDDE2] py-4 text-sm transition ${
                      isActive
                        ? "font-semibold text-[#A77D8B]"
                        : "text-[#51464A] hover:text-[#A77D8B]"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}

              <Link
                href="/products"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-5 flex items-center justify-center gap-2 rounded-full bg-[#A77D8B] px-5 py-4 text-sm font-medium text-white transition hover:bg-[#8A6570]"
              >
                Explore Collection
                <ArrowUpRight size={16} />
              </Link>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
