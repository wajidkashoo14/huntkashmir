"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Star, Wifi, Car, UtensilsCrossed, Phone, MessageCircle, ChevronRight } from "lucide-react";
import AnimateOnScroll, { StaggerContainer, StaggerChild } from "@/components/AnimateOnScroll";

/* ══════════════════════════════════════════════════════════════════════════════
   HOTEL DATA — Replace with real details when available
   Each hotel: name, location, category, stars, description, amenities,
               images (array of URLs), whatsapp enquiry text
══════════════════════════════════════════════════════════════════════════════ */
const hotels = [
  {
    id: "h1",
    name: "Hotel Name 1",
    location: "Dal Lake, Srinagar",
    area: "Srinagar",
    category: "Houseboat",
    stars: 5,
    tagline: "Wake up to the mist of Dal Lake",
    description: "A luxurious houseboat experience on the calm waters of Dal Lake. Cedar-wood interiors, hand-embroidered furnishings, and breathtaking mountain views make every morning unforgettable.",
    amenities: ["Free Wi-Fi", "Shikara Transfer", "All Meals", "Room Service", "Laundry"],
    image: "https://images.unsplash.com/photo-1715457573748-8e8a70b2c1be?w=800&q=80",
    badge: "Our Top Pick",
    badgeColor: "bg-[#C9A84C]",
  },
  {
    id: "h2",
    name: "Hotel Name 2",
    location: "Gulmarg",
    area: "Gulmarg",
    category: "Mountain Resort",
    stars: 4,
    tagline: "Ski-in, ski-out at 2,650 metres",
    description: "Nestled in the heart of Gulmarg, this resort offers stunning views of the Himalayan peaks with direct access to the Gondola. Perfect for both winter ski trips and summer meadow retreats.",
    amenities: ["Free Wi-Fi", "Restaurant", "Parking", "Room Heater", "Tour Desk"],
    image: "https://images.unsplash.com/photo-1621232082074-1a7750ecc557?w=800&q=80",
    badge: "Adventure Base",
    badgeColor: "bg-blue-500",
  },
  {
    id: "h3",
    name: "Hotel Name 3",
    location: "Pahalgam",
    area: "Pahalgam",
    category: "Valley Resort",
    stars: 4,
    tagline: "Beside the Lidder River, between the pines",
    description: "A peaceful retreat on the banks of the Lidder River in Pahalgam. Listen to the river from your balcony, surrounded by pine forests and the clean mountain air of the Valley of Shepherds.",
    amenities: ["Free Wi-Fi", "Riverside View", "Restaurant", "Parking", "Bonfire"],
    image: "https://plus.unsplash.com/premium_photo-1680260413569-7e28013a3d8a?w=800&q=80",
    badge: null,
    badgeColor: "",
  },
  {
    id: "h4",
    name: "Hotel Name 4",
    location: "Sonamarg",
    area: "Sonamarg",
    category: "Glacier Hotel",
    stars: 3,
    tagline: "Gateway to the Meadow of Gold",
    description: "Situated near the entrance of Sonamarg, this hotel provides a warm base for glacier treks, pony rides to Thajiwas and breathtaking valley walks. Clean rooms, hearty meals, and pure mountain hospitality.",
    amenities: ["Free Wi-Fi", "Restaurant", "Parking", "Heater", "Pony Booking"],
    image: "https://images.unsplash.com/photo-1561287437-c69a30664793?w=800&q=80",
    badge: null,
    badgeColor: "",
  },
  {
    id: "h5",
    name: "Hotel Name 5",
    location: "Srinagar City",
    area: "Srinagar",
    category: "City Hotel",
    stars: 4,
    tagline: "Central Srinagar, close to everything",
    description: "Located in the heart of Srinagar, close to Lal Chowk, Mughal Gardens and Dal Lake Boulevard. Modern amenities with traditional Kashmiri hospitality — ideal for city stays and day-trip bases.",
    amenities: ["Free Wi-Fi", "Restaurant", "24hr Front Desk", "Airport Transfer", "Laundry"],
    image: "https://images.unsplash.com/photo-1634041837617-b43ba4bef0a1?w=800&q=80",
    badge: null,
    badgeColor: "",
  },
  {
    id: "h6",
    name: "Hotel Name 6",
    location: "Dal Lake, Srinagar",
    area: "Srinagar",
    category: "Heritage Houseboat",
    stars: 5,
    tagline: "A century of Kashmiri craftsmanship",
    description: "A heritage houseboat with over 100 years of history on Dal Lake. Hand-carved walnut wood ceilings, antique Kashmiri carpets and personal butler service — stay here and step back in time.",
    amenities: ["Free Wi-Fi", "Butler Service", "All Meals", "Private Shikara", "Panoramic Deck"],
    image: "https://images.unsplash.com/photo-1646204892016-711ed35535ec?w=800&q=80",
    badge: "Heritage Stay",
    badgeColor: "bg-amber-600",
  },
];

const areas = ["All", "Srinagar", "Gulmarg", "Pahalgam", "Sonamarg"];
const categories = ["All", "Houseboat", "Heritage Houseboat", "Mountain Resort", "Valley Resort", "City Hotel", "Glacier Hotel"];

const amenityIcon: Record<string, React.ReactNode> = {
  "Free Wi-Fi": <Wifi size={13} />,
  "Parking": <Car size={13} />,
  "Airport Transfer": <Car size={13} />,
  "Restaurant": <UtensilsCrossed size={13} />,
  "All Meals": <UtensilsCrossed size={13} />,
};

function StarRow({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={13} className={i < count ? "fill-[#C9A84C] text-[#C9A84C]" : "text-gray-200 fill-gray-200"} />
      ))}
    </div>
  );
}

export default function HotelsClient() {
  const [area, setArea]         = useState("All");
  const [category, setCategory] = useState("All");

  const filtered = hotels.filter((h) => {
    if (area !== "All" && h.area !== area) return false;
    if (category !== "All" && h.category !== category) return false;
    return true;
  });

  function waLink(hotel: typeof hotels[0]) {
    const msg = encodeURIComponent(
      `Hi Hunt Kashmir 365! 👋\n\nI'm interested in booking *${hotel.name}* (${hotel.location}).\n\nCould you please share availability and rates?\n\nThank you!`
    );
    return `https://wa.me/919596041460?text=${msg}`;
  }

  return (
    <>
      {/* Hero banner */}
      <div className="relative h-64 sm:h-80 overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1715457573748-8e8a70b2c1be?w=1600&q=85"
          alt="Kashmir Hotels"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F1923]/60 via-[#1B4332]/50 to-[#0F1923]/80" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <span className="text-[#C9A84C] text-xs font-semibold uppercase tracking-widest mb-2">
            Handpicked by Hunt Kashmir 365
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold text-white leading-tight">
            Our Partner Hotels
          </h1>
          <p className="text-white/75 mt-3 text-sm sm:text-base max-w-xl">
            Carefully selected properties across Kashmir — comfort, warmth and mountain hospitality guaranteed.
          </p>
        </div>
      </div>

      <section className="py-12 px-4 bg-white min-h-screen">
        <div className="max-w-7xl mx-auto">

          {/* Filters */}
          <AnimateOnScroll direction="up" className="mb-8 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <div>
              <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-2">Location</p>
              <div className="flex flex-wrap gap-2">
                {areas.map((a) => (
                  <button
                    key={a}
                    onClick={() => setArea(a)}
                    className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                      area === a
                        ? "bg-[#1B4332] text-white shadow"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    {a}
                  </button>
                ))}
              </div>
            </div>
            <div className="sm:ml-auto">
              <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-2">Type</p>
              <div className="flex flex-wrap gap-2">
                {categories.map((c) => (
                  <button
                    key={c}
                    onClick={() => setCategory(c)}
                    className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                      category === c
                        ? "bg-[#C9A84C] text-white shadow"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>
          </AnimateOnScroll>

          {/* Results count */}
          <p className="text-sm text-gray-400 mb-6">
            Showing <span className="font-semibold text-[#1B4332]">{filtered.length}</span> propert{filtered.length === 1 ? "y" : "ies"}
          </p>

          {/* Hotel cards */}
          <StaggerContainer stagger={0.1} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {filtered.map((hotel) => (
                <StaggerChild key={hotel.id} direction="up">
                  <motion.div
                    layout
                    whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                    transition={{ duration: 0.25 }}
                    className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm flex flex-col"
                  >
                    {/* Image */}
                    <div className="relative h-52 overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={hotel.image}
                        alt={hotel.name}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        loading="lazy"
                      />
                      {hotel.badge && (
                        <span className={`absolute top-3 left-3 ${hotel.badgeColor} text-white text-xs font-bold px-3 py-1 rounded-full`}>
                          {hotel.badge}
                        </span>
                      )}
                      <span className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm text-white text-xs px-2.5 py-1 rounded-full">
                        {hotel.category}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="p-5 flex flex-col flex-1">
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <h2 className="text-lg font-bold text-[#0F1923] leading-tight">{hotel.name}</h2>
                        <StarRow count={hotel.stars} />
                      </div>
                      <div className="flex items-center gap-1.5 text-gray-500 text-xs mb-3">
                        <MapPin size={12} className="text-[#C9A84C] flex-shrink-0" />
                        {hotel.location}
                      </div>
                      <p className="text-[#1B4332] font-semibold text-sm italic mb-2">&ldquo;{hotel.tagline}&rdquo;</p>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1">{hotel.description}</p>

                      {/* Amenities */}
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {hotel.amenities.map((a) => (
                          <span
                            key={a}
                            className="flex items-center gap-1 bg-gray-50 border border-gray-100 text-gray-500 text-xs px-2.5 py-1 rounded-full"
                          >
                            {amenityIcon[a] ?? null}
                            {a}
                          </span>
                        ))}
                      </div>

                      {/* CTA buttons */}
                      <div className="flex gap-2 mt-auto">
                        <a
                          href={waLink(hotel)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-1.5 bg-[#25D366] text-white text-sm font-semibold py-2.5 rounded-xl hover:bg-[#1da851] transition-colors"
                        >
                          <MessageCircle size={15} />
                          WhatsApp
                        </a>
                        <a
                          href="tel:+919596041460"
                          className="flex-1 flex items-center justify-center gap-1.5 bg-[#1B4332] text-white text-sm font-semibold py-2.5 rounded-xl hover:bg-[#2D6A4F] transition-colors"
                        >
                          <Phone size={15} />
                          Call Now
                        </a>
                      </div>
                    </div>
                  </motion.div>
                </StaggerChild>
              ))}
            </AnimatePresence>
          </StaggerContainer>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-gray-400">
              <p className="text-lg">No hotels found for this filter.</p>
              <button
                onClick={() => { setArea("All"); setCategory("All"); }}
                className="mt-4 text-[#1B4332] font-semibold text-sm underline"
              >
                Clear filters
              </button>
            </div>
          )}

          {/* Bottom CTA */}
          <div className="mt-14 bg-[#F8F6F0] rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-[#0F1923] mb-2">Need help choosing the right hotel?</h3>
            <p className="text-gray-600 text-sm mb-6 max-w-md mx-auto">
              Our team knows every property personally. Tell us your dates and group size — we&apos;ll find the perfect match.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://wa.me/919596041460?text=Hi!%20I%20need%20help%20choosing%20a%20hotel%20for%20my%20Kashmir%20trip."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#25D366] text-white font-semibold rounded-full text-sm hover:bg-[#1da851] transition-colors"
              >
                <MessageCircle size={16} />
                Chat on WhatsApp
              </a>
              <a
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-[#1B4332] text-[#1B4332] font-semibold rounded-full text-sm hover:bg-[#1B4332] hover:text-white transition-colors"
              >
                <ChevronRight size={16} />
                Send an Enquiry
              </a>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
