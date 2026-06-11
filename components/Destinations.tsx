"use client";

import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { StaggerContainer, StaggerChild } from "./AnimateOnScroll";
import AnimateOnScroll from "./AnimateOnScroll";

const destinations = [
  {
    slug: "dal-lake",
    name: "Dal Lake",
    location: "Srinagar",
    tagline: "Float on the Jewel of Kashmir",
    desc: "Experience iconic shikaras, floating markets, and luxury houseboats on Asia's most beautiful lake.",
    image: "https://images.unsplash.com/photo-1715457573748-8e8a70b2c1be?w=800&q=80",
    badge: "Most Popular",
    badgeColor: "bg-[#C9A84C] text-[#1B4332]",
    tours: "42 tours",
    accentColor: "#2563EB",
  },
  {
    slug: "gulmarg",
    name: "Gulmarg",
    location: "Baramulla District",
    tagline: "The Meadow of Flowers",
    desc: "Asia's highest cable car, world-class skiing, and meadows blanketed in wildflowers — pure magic.",
    image: "https://images.unsplash.com/photo-1621232082074-1a7750ecc557?w=800&q=80",
    badge: "Adventure",
    badgeColor: "bg-blue-500 text-white",
    tours: "38 tours",
    accentColor: "#3B82F6",
  },
  {
    slug: "pahalgam",
    name: "Pahalgam",
    location: "Anantnag District",
    tagline: "Valley of the Shepherds",
    desc: "Pine-forested valleys, the Lidder River, and the gateway to Amarnath Yatra — a romantic paradise.",
    image: "https://plus.unsplash.com/premium_photo-1680260413569-7e28013a3d8a?w=800&q=80",
    badge: "Romantic",
    badgeColor: "bg-rose-500 text-white",
    tours: "29 tours",
    accentColor: "#F43F5E",
  },
  {
    slug: "sonamarg",
    name: "Sonamarg",
    location: "Ganderbal District",
    tagline: "The Meadow of Gold",
    desc: "Shimmering glaciers, alpine meadows, and the mighty Sindh River — the ultimate Himalayan retreat.",
    image: "https://images.unsplash.com/photo-1561287437-c69a30664793?w=800&q=80",
    badge: "Scenic",
    badgeColor: "bg-emerald-600 text-white",
    tours: "24 tours",
    accentColor: "#059669",
  },
];

export default function Destinations() {
  return (
    <section id="destinations" className="py-16 sm:py-20 lg:py-24 px-4 bg-[#F8F6F0]">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <AnimateOnScroll direction="up" className="text-center mb-10 sm:mb-14">
          <span className="inline-block text-[#C9A84C] font-semibold text-xs sm:text-sm uppercase tracking-widest mb-3">
            Explore Kashmir
          </span>
          <h2 className="section-title text-3xl sm:text-4xl md:text-5xl font-bold text-[#0F1923]">
            Top Destinations
          </h2>
          <p className="mt-4 sm:mt-6 text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
            From mirror-calm lakes to snow-dusted peaks — every corner of Kashmir tells a story worth living.
          </p>
        </AnimateOnScroll>

        {/* Grid */}
        <StaggerContainer
          stagger={0.12}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6"
        >
          {destinations.map((dest) => (
            <StaggerChild key={dest.slug} direction="up">
              <Link href={`/destinations/${dest.slug}`} className="block h-full">
                <motion.div
                  whileHover={{ y: -10, boxShadow: "0 28px 50px rgba(0,0,0,0.16)" }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="dest-card bg-white rounded-2xl overflow-hidden shadow-md group cursor-pointer h-full flex flex-col"
                >
                  {/* Image */}
                  <div className="relative h-52 sm:h-56 overflow-hidden">
                    <motion.img
                      src={dest.image}
                      alt={dest.name}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
                    <span className={`absolute top-3 left-3 ${dest.badgeColor} text-xs font-bold px-3 py-1 rounded-full`}>
                      {dest.badge}
                    </span>
                    <span className="absolute top-3 right-3 bg-black/40 backdrop-blur-sm text-white text-xs px-2.5 py-1 rounded-full">
                      {dest.tours}
                    </span>
                    <div className="absolute bottom-3 left-3 flex items-center gap-1 text-white text-xs">
                      <MapPin size={11} className="text-[#C9A84C]" />
                      {dest.location}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="text-lg sm:text-xl font-bold text-[#1B4332] mb-1">{dest.name}</h3>
                    <p className="text-[#C9A84C] text-sm font-medium italic mb-2">{dest.tagline}</p>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1 line-clamp-3">{dest.desc}</p>
                    <div className="flex items-center gap-1.5 text-[#1B4332] font-semibold text-sm group-hover:text-[#C9A84C] transition-colors">
                      Explore More
                      <motion.span
                        className="inline-block"
                        animate={{ x: [0, 4, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                      >
                        <ArrowRight size={15} />
                      </motion.span>
                    </div>
                  </div>
                </motion.div>
              </Link>
            </StaggerChild>
          ))}
        </StaggerContainer>

        {/* View all */}
        <AnimateOnScroll direction="up" delay={0.2} className="mt-10 sm:mt-12 text-center">
          <Link href="/destinations">
            <motion.span
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="btn-primary text-white px-7 sm:px-8 py-3.5 rounded-full font-semibold inline-flex items-center gap-2 text-sm sm:text-base cursor-pointer"
            >
              View All Destinations
              <ArrowRight size={17} />
            </motion.span>
          </Link>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
