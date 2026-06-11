"use client";

import { useState } from "react";
import { X, ZoomIn, Heart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import AnimateOnScroll from "./AnimateOnScroll";

/* ── Placeholder photos — replace src with real customer photos ────────────
   Each entry: src = your customer photo URL, name = customer name,
   location = where they're from, caption = what they said / where taken    */
const photos = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
    name: "Rahul & Priya",
    location: "Mumbai",
    caption: "Honeymoon at Dal Lake — pure magic!",
    tag: "Dal Lake",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1621232082074-1a7750ecc557?w=600&q=80",
    name: "The Sharma Family",
    location: "Delhi",
    caption: "Kids loved the Gulmarg snow!",
    tag: "Gulmarg",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1715457573748-8e8a70b2c1be?w=600&q=80",
    name: "Ahmed & Fatima",
    location: "Dubai",
    caption: "Dal Lake at sunrise — unforgettable.",
    tag: "Dal Lake",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1561287437-c69a30664793?w=600&q=80",
    name: "Vikram Singh",
    location: "Bangalore",
    caption: "Sonamarg glacier was breathtaking.",
    tag: "Sonamarg",
  },
  {
    id: 5,
    src: "https://plus.unsplash.com/premium_photo-1680260413569-7e28013a3d8a?w=600&q=80",
    name: "The Kapoor Family",
    location: "Pune",
    caption: "Pahalgam — our favourite place on Earth!",
    tag: "Pahalgam",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1634041837617-b43ba4bef0a1?w=600&q=80",
    name: "Sarah & James",
    location: "London, UK",
    caption: "The greenest valley we've ever seen.",
    tag: "Doodhpathri",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1646204892016-711ed35535ec?w=600&q=80",
    name: "College Friends Group",
    location: "Hyderabad",
    caption: "Best group trip ever — 12 of us!",
    tag: "Betaab Valley",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1564327287902-0ccf559d839e?w=600&q=80",
    name: "Arjun Mehta",
    location: "Jaipur",
    caption: "Shikara ride at dusk — dreamlike.",
    tag: "Dal Lake",
  },
];

const tags = ["All", "Dal Lake", "Gulmarg", "Pahalgam", "Sonamarg", "Betaab Valley", "Doodhpathri"];

export default function HappyCustomers() {
  const [activeTag, setActiveTag] = useState("All");
  const [lightbox, setLightbox] = useState<(typeof photos)[0] | null>(null);

  const filtered = activeTag === "All" ? photos : photos.filter((p) => p.tag === activeTag);

  return (
    <section id="customers" className="py-16 sm:py-20 px-4 bg-[#F8F6F0]">
      <div className="max-w-7xl mx-auto">

        <AnimateOnScroll direction="up" className="text-center mb-10">
          <span className="inline-block text-[#C9A84C] font-semibold text-xs sm:text-sm uppercase tracking-widest mb-3">
            Our Happy Travellers
          </span>
          <h2 className="section-title text-3xl sm:text-4xl md:text-5xl font-bold text-[#0F1923]">
            Moments They&apos;ll Never Forget
          </h2>
          <p className="mt-4 text-gray-600 text-base sm:text-lg max-w-xl mx-auto">
            Real guests, real smiles — from Kashmir with love.
          </p>
        </AnimateOnScroll>

        {/* Filter tags */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                activeTag === tag
                  ? "bg-[#1B4332] text-white shadow-md"
                  : "bg-white border border-gray-200 text-gray-600 hover:border-[#1B4332] hover:text-[#1B4332]"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Photo grid */}
        <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          <AnimatePresence>
            {filtered.map((photo) => (
              <motion.div
                key={photo.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative overflow-hidden rounded-2xl cursor-pointer bg-gray-100"
                style={{ aspectRatio: "4/5" }}
                onClick={() => setLightbox(photo)}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={photo.src}
                  alt={photo.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Location tag top-left */}
                <div className="absolute top-2.5 left-2.5">
                  <span className="bg-[#1B4332]/80 backdrop-blur-sm text-white text-[10px] font-semibold px-2 py-0.5 rounded-full">
                    {photo.tag}
                  </span>
                </div>

                {/* Zoom icon */}
                <div className="absolute top-2.5 right-2.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-7 h-7 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <ZoomIn size={14} className="text-white" />
                  </div>
                </div>

                {/* Caption on hover */}
                <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-white font-semibold text-sm leading-tight">{photo.name}</p>
                  <p className="text-white/70 text-xs mt-0.5">{photo.location}</p>
                  <p className="text-[#C9A84C] text-xs mt-1 italic line-clamp-1">&ldquo;{photo.caption}&rdquo;</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA */}
        <AnimateOnScroll direction="up" delay={0.2} className="mt-10 text-center">
          <div className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-2xl px-6 py-4 shadow-sm">
            <Heart size={18} className="text-rose-500 fill-rose-500 flex-shrink-0" />
            <p className="text-gray-700 text-sm">
              <span className="font-bold text-[#1B4332]">Share your Kashmir photos</span> with us on Instagram{" "}
              <a
                href="https://www.instagram.com/_huntkashmir365_/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#C9A84C] font-semibold hover:underline"
              >
                @_huntkashmir365_
              </a>{" "}
              and get featured here!
            </p>
          </div>
        </AnimateOnScroll>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative max-w-2xl w-full rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={lightbox.src}
                alt={lightbox.caption}
                className="w-full object-cover max-h-[70vh]"
              />
              <div className="bg-[#0F1923] px-5 py-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-white font-bold">{lightbox.name}</p>
                    <p className="text-gray-400 text-sm">{lightbox.location}</p>
                    <p className="text-[#C9A84C] text-sm italic mt-1">&ldquo;{lightbox.caption}&rdquo;</p>
                  </div>
                  <span className="bg-[#1B4332] text-white text-xs px-3 py-1 rounded-full flex-shrink-0">
                    {lightbox.tag}
                  </span>
                </div>
              </div>
              <button
                onClick={() => setLightbox(null)}
                className="absolute top-3 right-3 w-8 h-8 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-colors"
              >
                <X size={16} className="text-white" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
