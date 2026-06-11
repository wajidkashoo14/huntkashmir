"use client";

import Link from "next/link";
import { Camera } from "lucide-react";
import { motion } from "framer-motion";
import AnimateOnScroll, { StaggerContainer, StaggerChild } from "./AnimateOnScroll";

const images = [
  { src: "https://images.unsplash.com/photo-1715457573748-8e8a70b2c1be?w=800&q=80",             alt: "Shikaras on Dal Lake",       span: "col-span-2 row-span-2", label: "Dal Lake"          },
  { src: "https://images.unsplash.com/photo-1621232082074-1a7750ecc557?w=600&q=80",             alt: "Gulmarg Snow Slopes",        span: "",                  label: "Gulmarg"              },
  { src: "https://plus.unsplash.com/premium_photo-1680260413569-7e28013a3d8a?w=600&q=80",       alt: "Pahalgam Valley",            span: "",                  label: "Pahalgam"             },
  { src: "https://images.unsplash.com/photo-1561287437-c69a30664793?w=600&q=80",               alt: "Sonamarg Glacier Meadow",    span: "",                  label: "Sonamarg"             },
  { src: "https://images.unsplash.com/photo-1552098933-a5ceb0e5dd91?w=600&q=80",               alt: "Gulmarg Winter Landscape",   span: "",                  label: "Gulmarg Winter"       },
  { src: "https://images.unsplash.com/photo-1564327287902-0ccf559d839e?w=600&q=80",             alt: "Dal Lake Floating Market",   span: "",                  label: "Floating Market"      },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-16 sm:py-20 lg:py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <AnimateOnScroll direction="up" className="text-center mb-10 sm:mb-14">
          <span className="inline-block text-[#C9A84C] font-semibold text-xs sm:text-sm uppercase tracking-widest mb-3">
            Kashmir Through the Lens
          </span>
          <h2 className="section-title text-3xl sm:text-4xl md:text-5xl font-bold text-[#0F1923]">
            Visual Journey
          </h2>
          <p className="mt-4 sm:mt-6 text-gray-600 text-base sm:text-lg max-w-xl mx-auto">
            A glimpse of the extraordinary landscapes, colours, and moments that await you in Kashmir.
          </p>
        </AnimateOnScroll>

        <StaggerContainer
          stagger={0.08}
          className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 auto-rows-[160px] sm:auto-rows-[200px]"
        >
          {images.map((img, i) => (
            <StaggerChild key={i} direction="scale">
              <motion.div
                className={`${img.span} relative overflow-hidden rounded-xl sm:rounded-2xl group cursor-pointer h-full`}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.35 }}
              >
                <motion.img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.5 }}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  className="absolute bottom-3 left-3 flex items-center gap-1.5 text-white"
                >
                  <Camera size={13} className="text-[#C9A84C]" />
                  <span className="text-xs sm:text-sm font-semibold">{img.label}</span>
                </motion.div>
              </motion.div>
            </StaggerChild>
          ))}
        </StaggerContainer>

        <AnimateOnScroll direction="up" delay={0.2} className="mt-8 sm:mt-10 text-center">
          <Link href="/gallery">
            <motion.span
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 text-[#1B4332] font-semibold border-2 border-[#1B4332] px-5 sm:px-6 py-3 rounded-full hover:bg-[#1B4332] hover:text-white transition-all duration-300 text-sm sm:text-base cursor-pointer"
            >
              <Camera size={17} />
              View Full Gallery
            </motion.span>
          </Link>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
