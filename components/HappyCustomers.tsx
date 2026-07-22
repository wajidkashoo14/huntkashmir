"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ZoomIn, Heart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import AnimateOnScroll from "./AnimateOnScroll";

/* ── Real guest photos ───────────────────────────────────────────────────── */
const photos = [
  { id: 1, src: "/customers/1.jpeg" },
  { id: 2, src: "/customers/2.jpeg" },
  { id: 3, src: "/customers/3.jpeg" },
  { id: 4, src: "/customers/4.jpeg" },
  { id: 5, src: "/customers/5.jpeg" },
  { id: 6, src: "/customers/6.jpeg" },
];

export default function HappyCustomers() {
  const [lightbox, setLightbox] = useState<(typeof photos)[0] | null>(null);

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

        {/* Photo grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {photos.map((photo) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              className="group relative overflow-hidden rounded-2xl cursor-pointer bg-gray-100"
              style={{ aspectRatio: "4/5" }}
              onClick={() => setLightbox(photo)}
            >
              <Image
                src={photo.src}
                alt="Happy Hunt Kashmir 365 guest"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                quality={75}
              />
              {/* Zoom icon */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              <div className="absolute top-2.5 right-2.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-7 h-7 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <ZoomIn size={14} className="text-white" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

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
              style={{ maxHeight: "80vh" }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-full" style={{ minHeight: "40vh" }}>
                <Image
                  src={lightbox.src}
                  alt="Happy Hunt Kashmir 365 guest"
                  fill
                  className="object-contain"
                  sizes="100vw"
                  quality={80} // slightly higher for lightbox
                />
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