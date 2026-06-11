"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { Camera, X, ChevronLeft, ChevronRight, MapPin, ArrowLeft } from "lucide-react";

/* ── All destination images grouped by place ─────────────────────────── */
const galleryData = [
  {
    destination: "Dal Lake",
    slug: "dal-lake",
    color: "#2563EB",
    images: [
      { src: "https://images.unsplash.com/photo-1715457573748-8e8a70b2c1be?w=1200&q=85", alt: "Shikaras on Dal Lake at sunrise" },
      { src: "https://images.unsplash.com/photo-1564327287902-0ccf559d839e?w=1200&q=85", alt: "Floating vegetable market, Dal Lake" },
      { src: "https://images.unsplash.com/photo-1569852837213-00d97a707a83?w=1200&q=85", alt: "Two wooden boats on the lake" },
      { src: "https://images.unsplash.com/photo-1596083332905-666e9acf8807?w=1200&q=85", alt: "Wooden houseboat on Dal Lake" },
      { src: "https://images.unsplash.com/photo-1689962722504-90a73cff0ef0?w=1200&q=85", alt: "Shikara boats at golden hour" },
      { src: "https://images.unsplash.com/photo-1614591276564-7b3e69347a48?w=1200&q=85", alt: "Wooden houses near the water" },
    ],
  },
  {
    destination: "Gulmarg",
    slug: "gulmarg",
    color: "#3B82F6",
    images: [
      { src: "https://images.unsplash.com/photo-1621232082074-1a7750ecc557?w=1200&q=85", alt: "Gulmarg snow-covered meadow" },
      { src: "https://images.unsplash.com/photo-1627894485200-b92fb4353967?w=1200&q=85", alt: "Gulmarg winter wonderland" },
      { src: "https://images.unsplash.com/photo-1552098933-a5ceb0e5dd91?w=1200&q=85", alt: "Skiing slopes at Gulmarg" },
      { src: "https://images.unsplash.com/photo-1567601169793-64703dc5324a?w=1200&q=85", alt: "Pine forest in Gulmarg" },
      { src: "https://images.unsplash.com/photo-1568889753852-196c487a536e?w=1200&q=85", alt: "Gulmarg landscape in winter" },
      { src: "https://images.unsplash.com/photo-1643449416258-5c8e7ec598b1?w=1200&q=85", alt: "Mountain views from Gulmarg" },
    ],
  },
  {
    destination: "Pahalgam",
    slug: "pahalgam",
    color: "#F43F5E",
    images: [
      { src: "https://plus.unsplash.com/premium_photo-1680260413569-7e28013a3d8a?w=1200&q=85", alt: "Pahalgam valley panorama" },
      { src: "https://images.unsplash.com/photo-1646204894165-95ed03d988ad?w=1200&q=85", alt: "Lidder River, Pahalgam" },
      { src: "https://images.unsplash.com/photo-1661747340818-df15f186554e?w=1200&q=85", alt: "Pine forests in Pahalgam" },
      { src: "https://images.unsplash.com/photo-1646204892016-711ed35535ec?w=1200&q=85", alt: "Pahalgam meadow landscape" },
      { src: "https://images.unsplash.com/photo-1641593758596-39b200b51e8d?w=1200&q=85", alt: "River flowing through Pahalgam" },
      { src: "https://images.unsplash.com/photo-1706628416838-0325e29521ee?w=1200&q=85", alt: "Snowy peaks above Pahalgam" },
    ],
  },
  {
    destination: "Sonamarg",
    slug: "sonamarg",
    color: "#059669",
    images: [
      { src: "https://images.unsplash.com/photo-1561287437-c69a30664793?w=1200&q=85", alt: "Sonamarg golden meadow" },
      { src: "https://images.unsplash.com/photo-1634041837617-b43ba4bef0a1?w=1200&q=85", alt: "Thajiwas Glacier, Sonamarg" },
      { src: "https://images.unsplash.com/photo-1643449415644-ba803f1cd03d?w=1200&q=85", alt: "Sonamarg alpine landscape" },
      { src: "https://images.unsplash.com/photo-1642781087094-0430c9390ca3?w=1200&q=85", alt: "Sindh River Valley, Sonamarg" },
      { src: "https://images.unsplash.com/photo-1623996243194-fd281057d568?w=1200&q=85", alt: "Sonamarg mountains at sunrise" },
      { src: "https://images.unsplash.com/photo-1630898749795-be8eb5a48ea7?w=1200&q=85", alt: "Sonamarg meadow panorama" },
    ],
  },
  {
    destination: "Yusmarg",
    slug: "yusmarg",
    color: "#16A34A",
    images: [
      { src: "https://images.unsplash.com/photo-1623612175509-30e97f5aa195?w=1200&q=85", alt: "Yusmarg green meadow" },
      { src: "https://images.unsplash.com/photo-1643449416258-5c8e7ec598b1?w=1200&q=85", alt: "Alpine valley, Yusmarg" },
      { src: "https://images.unsplash.com/photo-1627894485200-b92fb4353967?w=1200&q=85", alt: "Pine forests of Yusmarg" },
      { src: "https://images.unsplash.com/photo-1552098933-a5ceb0e5dd91?w=1200&q=85", alt: "Doodhganga River, Yusmarg" },
      { src: "https://images.unsplash.com/photo-1568889753852-196c487a536e?w=1200&q=85", alt: "Peaceful Yusmarg meadow" },
      { src: "https://images.unsplash.com/photo-1621232082074-1a7750ecc557?w=1200&q=85", alt: "Snow peaks above Yusmarg" },
    ],
  },
  {
    destination: "Betaab Valley",
    slug: "betaab-valley",
    color: "#EC4899",
    images: [
      { src: "https://images.unsplash.com/photo-1646204892016-711ed35535ec?w=1200&q=85", alt: "Betaab Valley lush meadow" },
      { src: "https://images.unsplash.com/photo-1641593758596-39b200b51e8d?w=1200&q=85", alt: "Lidder River in Betaab Valley" },
      { src: "https://images.unsplash.com/photo-1661747340818-df15f186554e?w=1200&q=85", alt: "Betaab Valley forest backdrop" },
      { src: "https://images.unsplash.com/photo-1706628416838-0325e29521ee?w=1200&q=85", alt: "Snow peaks framing Betaab Valley" },
      { src: "https://images.unsplash.com/photo-1646204894165-95ed03d988ad?w=1200&q=85", alt: "Pine canopy in Betaab Valley" },
      { src: "https://plus.unsplash.com/premium_photo-1680260413569-7e28013a3d8a?w=1200&q=85", alt: "Betaab Valley panorama" },
    ],
  },
  {
    destination: "Doodhpathri",
    slug: "doodhpathri",
    color: "#7C3AED",
    images: [
      { src: "https://images.unsplash.com/photo-1634041837617-b43ba4bef0a1?w=1200&q=85", alt: "Doodhpathri emerald meadow" },
      { src: "https://images.unsplash.com/photo-1642781087094-0430c9390ca3?w=1200&q=85", alt: "Milky white streams, Doodhpathri" },
      { src: "https://images.unsplash.com/photo-1623996243194-fd281057d568?w=1200&q=85", alt: "Mountain backdrop, Doodhpathri" },
      { src: "https://images.unsplash.com/photo-1561287437-589dfed82e17?w=1200&q=85", alt: "Wildflower fields, Doodhpathri" },
      { src: "https://images.unsplash.com/photo-1643449415644-ba803f1cd03d?w=1200&q=85", alt: "Silver fir forest edge, Doodhpathri" },
      { src: "https://images.unsplash.com/photo-1630898749795-be8eb5a48ea7?w=1200&q=85", alt: "Shepherd meadow, Doodhpathri" },
    ],
  },
];

/* Flat list with destination metadata for the lightbox */
const allImages = galleryData.flatMap((d) =>
  d.images.map((img, i) => ({ ...img, destination: d.destination, slug: d.slug, color: d.color, localIdx: i }))
);

const TABS = ["All", ...galleryData.map((d) => d.destination)];

export default function GalleryClient() {
  const [activeTab, setActiveTab]   = useState("All");
  const [lightbox,  setLightbox]    = useState<number | null>(null);

  const filtered =
    activeTab === "All"
      ? allImages
      : allImages.filter((img) => img.destination === activeTab);

  const prev = () => setLightbox((i) => (i !== null ? (i - 1 + filtered.length) % filtered.length : null));
  const next = () => setLightbox((i) => (i !== null ? (i + 1) % filtered.length : null));

  return (
    <>
      <Navbar />
      <main className="overflow-x-hidden bg-[#0F1923] min-h-screen">

        {/* ── Hero banner ─────────────────────────────────────────────── */}
        <section className="relative pt-28 pb-16 px-4 text-center overflow-hidden">
          <div className="absolute inset-0 opacity-15"
            style={{ backgroundImage: "url(https://images.unsplash.com/photo-1715457573748-8e8a70b2c1be?w=1600&q=50)", backgroundSize: "cover", backgroundPosition: "center" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0F1923]/60 to-[#0F1923]" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 text-white/80 text-xs font-medium mb-5 uppercase tracking-widest">
              <Camera size={13} className="text-[#C9A84C]" /> Kashmir Through the Lens
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight mb-4">
              Kashmir Gallery
            </h1>
            <p className="text-white/60 text-base sm:text-lg max-w-xl mx-auto">
              {allImages.length} photographs across {galleryData.length} breathtaking destinations — every frame a story worth living.
            </p>
          </div>
          {/* Bottom fade */}
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#0F1923] to-transparent pointer-events-none" />
        </section>

        {/* ── Filter tabs ─────────────────────────────────────────────── */}
        <section className="sticky top-16 md:top-20 z-30 bg-[#0F1923]/95 backdrop-blur-md border-b border-white/10 px-4 py-3">
          <div className="max-w-7xl mx-auto overflow-x-auto scrollbar-hide">
            <div className="flex gap-2 w-max mx-auto">
              {TABS.map((tab) => (
                <motion.button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  whileTap={{ scale: 0.95 }}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 ${
                    activeTab === tab
                      ? "bg-[#C9A84C] text-[#1B4332] shadow-lg"
                      : "bg-white/8 text-white/60 hover:bg-white/15 hover:text-white border border-white/10"
                  }`}
                >
                  {tab}
                  {tab !== "All" && (
                    <span className={`ml-1.5 text-[10px] ${activeTab === tab ? "opacity-70" : "opacity-40"}`}>
                      {galleryData.find((d) => d.destination === tab)?.images.length}
                    </span>
                  )}
                  {tab === "All" && (
                    <span className={`ml-1.5 text-[10px] ${activeTab === tab ? "opacity-70" : "opacity-40"}`}>
                      {allImages.length}
                    </span>
                  )}
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        {/* ── Masonry grid ────────────────────────────────────────────── */}
        <section className="px-3 sm:px-4 py-8 pb-16">
          <div className="max-w-7xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="columns-2 sm:columns-3 lg:columns-4 gap-2 sm:gap-3 space-y-2 sm:space-y-3"
              >
                {filtered.map((img, i) => (
                  <motion.div
                    key={`${img.destination}-${img.localIdx}`}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.03, duration: 0.3 }}
                    onClick={() => setLightbox(i)}
                    className="break-inside-avoid relative overflow-hidden rounded-xl cursor-pointer group"
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-auto block transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="flex items-center gap-1.5 text-white">
                        <MapPin size={11} style={{ color: img.color }} />
                        <span className="text-xs font-semibold">{img.destination}</span>
                      </div>
                      <p className="text-white/70 text-[10px] mt-0.5 line-clamp-1">{img.alt}</p>
                    </div>
                    {/* Zoom icon */}
                    <div className="absolute top-2 right-2 w-7 h-7 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Camera size={12} className="text-white" />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>

            {/* Destination CTA strip */}
            {activeTab !== "All" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-10 text-center"
              >
                <p className="text-white/50 text-sm mb-4">Love what you see?</p>
                <Link
                  href={`/destinations/${galleryData.find((d) => d.destination === activeTab)?.slug}`}
                  className="inline-flex items-center gap-2 bg-[#C9A84C] text-[#1B4332] px-7 py-3.5 rounded-full font-bold text-sm hover:bg-[#d4b55e] transition-colors shadow-lg"
                >
                  Explore {activeTab} <ArrowLeft size={15} className="rotate-180" />
                </Link>
              </motion.div>
            )}
          </div>
        </section>

      </main>

      {/* ── Lightbox ──────────────────────────────────────────────────── */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            {/* Close */}
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
            >
              <X size={20} />
            </button>

            {/* Prev */}
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-3 sm:left-6 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
            >
              <ChevronLeft size={22} />
            </button>

            {/* Image */}
            <motion.div
              key={lightbox}
              initial={{ opacity: 0, scale: 0.93 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.93 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full mx-12 sm:mx-16"
            >
              <img
                src={filtered[lightbox].src}
                alt={filtered[lightbox].alt}
                className="w-full max-h-[80vh] object-contain rounded-xl shadow-2xl"
              />
              {/* Caption */}
              <div className="mt-3 flex items-center justify-between px-1">
                <div className="flex items-center gap-2">
                  <span
                    className="w-2.5 h-2.5 rounded-full shrink-0"
                    style={{ background: filtered[lightbox].color }}
                  />
                  <span className="text-white font-semibold text-sm">{filtered[lightbox].destination}</span>
                  <span className="text-white/40 text-sm">·</span>
                  <span className="text-white/60 text-sm">{filtered[lightbox].alt}</span>
                </div>
                <span className="text-white/30 text-xs">{lightbox + 1} / {filtered.length}</span>
              </div>

              {/* Destination link */}
              <div className="mt-3 text-center">
                <Link
                  href={`/destinations/${filtered[lightbox].slug}`}
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-1.5 text-[#C9A84C] text-xs font-semibold hover:underline"
                >
                  <MapPin size={11} /> Explore {filtered[lightbox].destination} →
                </Link>
              </div>
            </motion.div>

            {/* Next */}
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-3 sm:right-6 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
            >
              <ChevronRight size={22} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </>
  );
}
