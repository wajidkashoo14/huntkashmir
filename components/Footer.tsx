"use client";

import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";

/* ── Inline SVG brand icons ─────────────────────────────────────────────── */
const FacebookIcon  = () => (<svg viewBox="0 0 24 24" fill="currentColor" width={18} height={18}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>);
const InstagramIcon = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width={18} height={18}><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>);
const YouTubeIcon   = () => (<svg viewBox="0 0 24 24" fill="currentColor" width={18} height={18}><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.96-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon fill="#0F1923" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/></svg>);
const WhatsAppIcon  = () => (<svg viewBox="0 0 24 24" fill="currentColor" width={18} height={18}><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.852L.057 23.57a.75.75 0 0 0 .918.919l5.85-1.486A11.95 11.95 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 0 1-5.01-1.374l-.36-.214-3.724.946.98-3.62-.234-.372A9.818 9.818 0 1 1 12 21.818z"/></svg>);

/* ── Data ───────────────────────────────────────────────────────────────── */
const quickLinks = [
  { label: "Home",          href: "/"            },
  { label: "Destinations",  href: "/#destinations"},
  { label: "Tour Packages", href: "/#packages"   },
  { label: "Why Choose Us", href: "/#why-us"     },
  { label: "Hotels",         href: "/hotels"      },
  { label: "Gallery",       href: "/#gallery"    },
  { label: "Contact Us",    href: "/#contact"    },
  { label: "Privacy Policy",href: "/privacy"     },
];

const destinations = [
  { label: "Dal Lake, Srinagar", href: "/destinations/dal-lake"      },
  { label: "Gulmarg",            href: "/destinations/gulmarg"        },
  { label: "Pahalgam",           href: "/destinations/pahalgam"       },
  { label: "Sonamarg",           href: "/destinations/sonamarg"       },
  { label: "Yusmarg",            href: "/destinations/yusmarg"        },
  { label: "Betaab Valley",      href: "/destinations/betaab-valley"  },
  { label: "Doodhpathri",        href: "/destinations/doodhpathri"    },
];

const socials = [
  { icon: <FacebookIcon />,  href: "https://www.facebook.com/share/1QbxhPnkKx/?mibextid=wwXIfr", label: "Facebook"  },
  { icon: <InstagramIcon />, href: "https://www.instagram.com/_huntkashmir365_/", label: "Instagram" },
  { icon: <YouTubeIcon />,   href: "#", label: "YouTube"   },
  { icon: <WhatsAppIcon />,  href: "https://wa.me/919596041460?text=Hi!%20I'd%20like%20to%20book%20a%20Kashmir%20tour.", label: "WhatsApp" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0F1923] text-white">

      {/* Newsletter strip */}
      <div className="bg-[#1B4332] py-10 px-4">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-white mb-1">Get Kashmir Travel Tips & Deals</h3>
            <p className="text-white/70 text-sm">Subscribe for exclusive offers, travel guides, and seasonal deals.</p>
          </div>
          <form className="flex flex-col sm:flex-row w-full md:w-auto gap-2" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 md:w-64 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/50 text-sm focus:outline-none focus:border-[#C9A84C] transition-colors"
            />
            <button type="submit" className="btn-gold px-5 py-3 rounded-xl text-[#1B4332] font-semibold text-sm whitespace-nowrap flex items-center justify-center gap-1.5">
              Subscribe <ArrowRight size={15} />
            </button>
          </form>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 py-12 sm:py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <Link href="/" className="flex items-center mb-5 group">
            <Image
              src="/logo.png"
              alt="Hunt Kashmir 365"
              width={80}
              height={80}
              className="rounded-full object-cover transition-transform duration-300 group-hover:scale-105"
              priority
              loading="eager"
            />
          </Link>
          <p className="text-white/55 text-sm leading-relaxed mb-5">
            Your trusted partner for premium Kashmir travel experiences since 2009. We bring the magic of the Himalayas to you — safely, beautifully, and unforgettably.
          </p>
          <div className="space-y-2.5 text-sm mb-6">
            <div className="flex items-start gap-2.5 text-white/65">
              <MapPin size={13} className="text-[#C9A84C] shrink-0 mt-0.5" />
              <span>Gousia Complex, Khayam Chowk<br />Near Khyber Hospital, Srinagar — 190001</span>
            </div>
            <a href="tel:+919596041460" className="flex items-center gap-2.5 text-white/65 hover:text-[#C9A84C] transition-colors">
              <Phone size={13} className="text-[#C9A84C] shrink-0" /> +91 95960 41460
            </a>
            <a href="tel:+917006754265" className="flex items-center gap-2.5 text-white/65 hover:text-[#C9A84C] transition-colors">
              <Phone size={13} className="text-[#C9A84C] shrink-0" /> +91 70067 54265
            </a>
            <a href="mailto:huntkashmir365@gmail.com" className="flex items-center gap-2.5 text-white/65 hover:text-[#C9A84C] transition-colors">
              <Mail size={13} className="text-[#C9A84C] shrink-0" /> huntkashmir365@gmail.com
            </a>
          </div>
          <div className="flex gap-2.5">
            {socials.map((s) => (
              <a key={s.label} href={s.href} aria-label={s.label} target={s.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-[#C9A84C] hover:text-[#1B4332] transition-all duration-200">
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-bold mb-5 uppercase tracking-wider text-xs sm:text-sm">Quick Links</h4>
          <ul className="space-y-2.5">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href}
                  className="text-white/55 text-sm hover:text-[#C9A84C] transition-colors flex items-center gap-2 group">
                  <ArrowRight size={11} className="opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all shrink-0" />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Destinations */}
        <div>
          <h4 className="text-white font-bold mb-5 uppercase tracking-wider text-xs sm:text-sm">Top Destinations</h4>
          <ul className="space-y-2.5">
            {destinations.map((dest) => (
              <li key={dest.label}>
                <Link href={dest.href}
                  className="text-white/55 text-sm hover:text-[#C9A84C] transition-colors flex items-center gap-2 group">
                  <ArrowRight size={11} className="opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all shrink-0" />
                  {dest.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Trust */}
        <div>
          <h4 className="text-white font-bold mb-5 uppercase tracking-wider text-xs sm:text-sm">Travel with Confidence</h4>
          <div className="space-y-4">
            {[
              { emoji: "🏆", title: "Award-Winning",  desc: "Best Kashmir Tour Operator 2023" },
              { emoji: "🛡️", title: "Fully Insured",  desc: "Travel & medical insurance included" },
              { emoji: "📞", title: "24/7 Support",   desc: "Always here when you need us" },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-3">
                <span className="text-xl mt-0.5">{item.emoji}</span>
                <div>
                  <p className="text-white text-sm font-semibold">{item.title}</p>
                  <p className="text-white/45 text-xs">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-5 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm text-white/35">
          <p>© 2025 Hunt Kashmir 365. All rights reserved.</p>
          <div className="flex gap-4 sm:gap-5">
            <a href="#" className="hover:text-[#C9A84C] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#C9A84C] transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-[#C9A84C] transition-colors">Sitemap</a>
          </div>
        </div>
      </div>

      {/* Developer credit strip */}
      <div className="bg-black/40 border-t border-white/5 py-2 px-4 text-center">
        <p className="text-white/25 text-xs">
          Designed &amp; Developed by{" "}
          <span className="text-[#C9A84C]/60 font-medium">Wajid Kashoo</span>
        </p>
      </div>
    </footer>
  );
}