"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Home as HomeIcon, MapPin, Package, Award, BedDouble, Camera, MessageSquare } from "lucide-react";

const navLinks = [
  { label: "Home",         href: "/"             , icon: HomeIcon    },
  { label: "Destinations", href: "/#destinations" , icon: MapPin      },
  { label: "Packages",     href: "/#packages"     , icon: Package     },
  { label: "Why Us",       href: "/#why-us"       , icon: Award       },
  { label: "Hotels",        href: "/hotels"         , icon: BedDouble   },
  { label: "Gallery",      href: "/gallery"        , icon: Camera      },
  { label: "Contact",      href: "/#contact"      , icon: MessageSquare },
];

export default function Navbar() {
  const [scrolled,   setScrolled]   = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  /* Solid background once scrolled OR on any non-home page */
  const isHome  = pathname === "/";
  const solid   = scrolled || !isHome;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Close mobile menu on route change */
  useEffect(() => { setMobileOpen(false); }, [pathname]);

  return (
    <>
      {/* ── Top announcement bar ──────────────────────────────────────── */}
      <div className="hidden md:flex items-center justify-between bg-[#1B4332] text-white text-sm px-8 py-2">
        <span className="flex items-center gap-2 opacity-90">
          <span>✈️</span>
          <span>Book your dream Kashmir tour today — Limited slots available!</span>
        </span>
        <a
          href="tel:+919596041460"
          className="flex items-center gap-1.5 font-medium hover:text-[#C9A84C] transition-colors"
        >
          <Phone size={14} />
          +91 95960 41460
        </a>
      </div>

      {/* ── Main navbar ───────────────────────────────────────────────── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          solid ? "navbar-glass shadow-sm top-0" : "bg-transparent md:top-[36px]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">

            {/* Logo */}
            <Link href="/" className="flex items-center group">
              <Image
                src="/logo.png"
                alt="Hunt Kashmir 365"
                width={72}
                height={72}
                className="rounded-full object-cover transition-transform duration-300 group-hover:scale-105"
                priority
              />
            </Link>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive =
                  link.href === "/" ? pathname === "/" : pathname.startsWith(link.href.replace("/#", "/"));
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? "text-[#C9A84C] bg-white/10"
                        : solid
                        ? "text-[#1B4332] hover:text-[#C9A84C] hover:bg-[#1B4332]/5"
                        : "text-white/90 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            {/* CTA */}
            <div className="hidden md:flex items-center gap-3">
              <Link
                href="/#contact"
                className="btn-gold px-5 py-2.5 rounded-full text-sm font-semibold text-[#1B4332] shadow-md"
              >
                Book Now
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              className={`md:hidden p-2 rounded-lg transition-colors ${solid ? "text-[#1B4332]" : "text-white"}`}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            mobileOpen ? "max-h-[520px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="navbar-mobile-glass border-t border-white/10 px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-3 px-4 py-3 rounded-lg text-white/90 font-medium hover:bg-white/10 hover:text-[#C9A84C] transition-colors"
              >
                <link.icon size={18} className="text-[#C9A84C]" />
                {link.label}
              </Link>
            ))}
            <Link
              href="/#contact"
              onClick={() => setMobileOpen(false)}
              className="mt-2 btn-gold px-5 py-3 rounded-full text-sm font-semibold text-[#1B4332] text-center"
            >
              Book Now
            </Link>
            {/* Mobile phone */}
            <a
              href="tel:+919596041460"
              className="mt-1 flex items-center justify-center gap-2 text-white/90 text-sm font-medium py-2"
            >
              <Phone size={14} /> +91 95960 41460
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
