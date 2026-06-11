"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface Props {
  image: string;
  quote: string;
  author: string;
  flip?: boolean;
}

export default function ParallaxDivider({ image, quote, author, flip = false }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y       = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale   = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.92, 1, 1, 0.92]);

  return (
    <div ref={ref} className="relative h-48 sm:h-64 md:h-80 overflow-hidden">
      {/* Parallax background */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        style={{ y, scale: 1.2 }}
      >
        <img src={image} alt="Kashmir" className="w-full h-full object-cover" loading="lazy" />
      </motion.div>

      {/* Overlay */}
      <div className={`absolute inset-0 ${flip ? "bg-gradient-to-l" : "bg-gradient-to-r"} from-[#1B4332]/85 via-black/60 to-[#0F1923]/75`} />

      {/* Quote */}
      <motion.div
        style={{ opacity, scale }}
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 sm:px-12"
      >
        <span className="text-[#C9A84C] text-4xl sm:text-5xl font-serif leading-none mb-3 opacity-60">&ldquo;</span>
        <p className="text-white text-base sm:text-xl md:text-2xl font-light italic max-w-3xl leading-relaxed">
          {quote}
        </p>
        <p className="mt-3 text-[#C9A84C] font-semibold text-xs sm:text-sm uppercase tracking-widest">
          — {author}
        </p>
      </motion.div>
    </div>
  );
}
