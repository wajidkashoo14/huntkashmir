"use client";

import { useRef } from "react";
import { ArrowRight, Phone, MessageCircle } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import AnimateOnScroll from "./AnimateOnScroll";

export default function CTABanner() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={ref} className="relative py-20 sm:py-28 px-4 overflow-hidden">
      {/* Parallax bg */}
      <motion.div
        className="absolute inset-0"
        style={{ y: bgY, scale: 1.15 }}
      >
        <img
          src="https://images.unsplash.com/photo-1593181629936-11c609b8db9b?w=1600&q=85"
          alt="Kashmir"
          className="w-full h-full object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#0F1923]/92 via-[#1B4332]/82 to-[#0F1923]/92" />

      {/* Decorative rings */}
      <motion.div
        animate={{ scale: [1, 1.08, 1], opacity: [0.2, 0.35, 0.2] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        className="absolute top-6 left-6 w-32 h-32 rounded-full border-2 border-[#C9A84C]/30"
      />
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-6 right-6 w-52 h-52 rounded-full border-2 border-white/15"
      />

      <AnimateOnScroll direction="up" className="relative z-10 max-w-4xl mx-auto text-center">
        <span className="inline-block text-[#C9A84C] font-semibold text-xs sm:text-sm uppercase tracking-widest mb-4">
          Limited Time Offer
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5">
          Your Kashmir Dream{" "}
          <span className="text-shimmer">Starts Today</span>
        </h2>
        <p className="text-white/80 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed">
          Get up to <span className="text-[#C9A84C] font-bold">30% off</span> on all packages booked this month.
          Our travel experts are ready to craft your perfect Kashmir itinerary — for free!
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          {[
            { href: "#packages", icon: <ArrowRight size={19} />, label: "Explore Packages", cls: "btn-gold text-[#1B4332]" },
            { href: "tel:+919596041460", icon: <Phone size={19} />, label: "Call Us Now", cls: "border-2 border-white/50 text-white hover:bg-white/15" },
            { href: "https://wa.me/919596041460", icon: <MessageCircle size={19} />, label: "WhatsApp", cls: "bg-[#25D366]/20 border-2 border-[#25D366]/50 text-white hover:bg-[#25D366]/30" },
          ].map((btn) => (
            <motion.a
              key={btn.label}
              href={btn.href}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className={`${btn.cls} px-6 sm:px-8 py-3.5 rounded-full font-bold text-sm sm:text-base inline-flex items-center justify-center gap-2 transition-all shadow-xl`}
            >
              {btn.icon} {btn.label}
            </motion.a>
          ))}
        </div>

        <p className="mt-7 text-white/45 text-xs sm:text-sm">
          ✓ Free itinerary planning &nbsp;·&nbsp; ✓ No booking fees
        </p>
      </AnimateOnScroll>
    </section>
  );
}
