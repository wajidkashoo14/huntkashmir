"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Star, Wifi, Car, UtensilsCrossed, Phone, MessageCircle, ChevronRight, X, ChevronLeft, ZoomIn, Tv } from "lucide-react";
import AnimateOnScroll from "@/components/AnimateOnScroll";

/* ══════════════════════════════════════════════════════════════════════════════
   HOTEL DATA — Two real partner properties
══════════════════════════════════════════════════════════════════════════════ */
const hotels = [
  {
    id: "al-asha-retreat",
    name: "Al Asha Retreat",
    location: "Srinagar",
    area: "Srinagar",
    category: "Boutique Hotel",
    stars: 4,
    tagline: "Refined comfort in the heart of Srinagar",
    description: "A boutique stay with marble-clad interiors, a grand chandelier-lit lobby, and warmly appointed rooms with Smart TVs. Al Asha Retreat blends elegant design with attentive Kashmiri hospitality — ideal as your city base or houseboat stopover.",
    amenities: ["Free Wi-Fi", "Smart TV", "Air Conditioning", "Room Service", "24hr Front Desk", "Fruit Basket"],
    images: [
      "/hotels/al-asha-retreat/1.jpeg",
      "/hotels/al-asha-retreat/2.jpeg",
      "/hotels/al-asha-retreat/3.jpeg",
      "/hotels/al-asha-retreat/4.jpeg",
      "/hotels/al-asha-retreat/5.jpeg",
      "/hotels/al-asha-retreat/6.jpeg",
    ],
    badge: "Our Top Pick",
    badgeColor: "bg-[#C9A84C]",
  },
  {
    id: "deodar-resort",
    name: "Deodar Resort",
    location: "Pahalgam",
    area: "Pahalgam",
    category: "Mountain Resort",
    stars: 4,
    tagline: "Themed cottages beneath the pines of Pahalgam",
    description: "Set against the deodar-forested slopes of Pahalgam, this resort offers uniquely themed rooms with hand-crafted starry ceilings and bold interiors. Cozy outdoor seating, mountain views, and a peaceful garden make it a favourite for couples and families alike.",
    amenities: ["Free Wi-Fi", "Smart TV", "Air Conditioning", "Garden Seating", "Parking", "Mountain View"],
    images: [
      "/hotels/deodar-resort/1.jpeg",
      "/hotels/deodar-resort/2.jpeg",
      "/hotels/deodar-resort/3.jpeg",
      "/hotels/deodar-resort/4.jpeg",
      "/hotels/deodar-resort/5.jpeg",
    ],
    badge: "Mountain Escape",
    badgeColor: "bg-emerald-600",
  },
];

const amenityIcon: Record<string, React.ReactNode> = {
  "Free Wi-Fi": <Wifi size={13} />,
  "Parking": <Car size={13} />,
  "Smart TV": <Tv size={13} />,
  "Restaurant": <UtensilsCrossed size={13} />,
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

type Hotel = typeof hotels[0];

export default function HotelsClient() {
  const [gallery, setGallery] = useState<{ hotel: Hotel; index: number } | null>(null);

  function waLink(hotel: Hotel) {
    const msg = encodeURIComponent(
      `Hi Hunt Kashmir 365! 👋\n\nI'm interested in booking *${hotel.name}* (${hotel.location}).\n\nCould you please share availability and rates?\n\nThank you!`
    );
    return `https://wa.me/919596041460?text=${msg}`;
  }

  const next = () => {
    if (!gallery) return;
    setGallery({ ...gallery, index: (gallery.index + 1) % gallery.hotel.images.length });
  };
  const prev = () => {
    if (!gallery) return;
    setGallery({ ...gallery, index: (gallery.index - 1 + gallery.hotel.images.length) % gallery.hotel.images.length });
  };

  return (
    <>
      {/* Hero banner */}
      <div className="relative h-72 sm:h-80 overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/hotels/al-asha-retreat/1.jpeg"
          alt="Kashmir Hotels"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F1923]/60 via-[#1B4332]/50 to-[#0F1923]/80" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 pt-14 sm:pt-0">
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
        <div className="max-w-6xl mx-auto">

          {/* Hotel cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <AnimatePresence>
              {hotels.map((hotel) => (
                <AnimateOnScroll key={hotel.id} direction="up">
                  <motion.div
                    whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                    transition={{ duration: 0.25 }}
                    className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm flex flex-col h-full"
                  >
                    {/* Main image + thumbnail strip */}
                    <div className="relative h-60 sm:h-72 overflow-hidden cursor-pointer" onClick={() => setGallery({ hotel, index: 0 })}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={hotel.images[0]}
                        alt={hotel.name}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                      {hotel.badge && (
                        <span className={`absolute top-3 left-3 ${hotel.badgeColor} text-white text-xs font-bold px-3 py-1 rounded-full`}>
                          {hotel.badge}
                        </span>
                      )}
                      <span className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm text-white text-xs px-2.5 py-1 rounded-full">
                        {hotel.category}
                      </span>
                      <div className="absolute bottom-3 right-3 flex items-center gap-1.5 bg-black/55 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full">
                        <ZoomIn size={13} />
                        {hotel.images.length} Photos
                      </div>
                    </div>

                    {/* Thumbnail row */}
                    <div className="flex gap-1.5 p-2 bg-gray-50 overflow-x-auto">
                      {hotel.images.map((img, i) => (
                        <button
                          key={img}
                          onClick={() => setGallery({ hotel, index: i })}
                          className="relative w-14 h-14 rounded-lg overflow-hidden shrink-0 border-2 border-transparent hover:border-[#C9A84C] transition-colors"
                        >
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={img} alt={`${hotel.name} ${i + 1}`} className="w-full h-full object-cover" loading="lazy" />
                        </button>
                      ))}
                    </div>

                    {/* Content */}
                    <div className="p-5 sm:p-6 flex flex-col flex-1">
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <h2 className="text-xl font-bold text-[#0F1923] leading-tight">{hotel.name}</h2>
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
                </AnimateOnScroll>
              ))}
            </AnimatePresence>
          </div>

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
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#25D366] text-white font-semibold rounded-full text-sm hover:bg-[#1da851] transition-colors w-full sm:w-auto"
              >
                <MessageCircle size={16} />
                Chat on WhatsApp
              </a>
              <a
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-[#1B4332] text-[#1B4332] font-semibold rounded-full text-sm hover:bg-[#1B4332] hover:text-white transition-colors w-full sm:w-auto"
              >
                <ChevronRight size={16} />
                Send an Enquiry
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Gallery Lightbox */}
      <AnimatePresence>
        {gallery && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setGallery(null)}
          >
            <button
              onClick={() => setGallery(null)}
              className="absolute top-4 right-4 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors z-10"
            >
              <X size={20} className="text-white" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors z-10"
            >
              <ChevronLeft size={22} className="text-white" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors z-10"
            >
              <ChevronRight size={22} className="text-white" />
            </button>

            <motion.div
              key={gallery.index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-3xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={gallery.hotel.images[gallery.index]}
                alt={`${gallery.hotel.name} ${gallery.index + 1}`}
                className="w-full max-h-[75vh] object-contain rounded-xl"
              />
              <div className="text-center mt-4">
                <p className="text-white font-semibold">{gallery.hotel.name}</p>
                <p className="text-white/50 text-sm mt-1">{gallery.index + 1} / {gallery.hotel.images.length}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
