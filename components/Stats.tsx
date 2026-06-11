"use client";

import { Award, Users, Map, Star } from "lucide-react";
import { motion } from "framer-motion";
import { StaggerContainer, StaggerChild } from "./AnimateOnScroll";

const stats = [
  { icon: <Award size={30} className="text-[#C9A84C]" />, value: "15+", label: "Years of Experience", desc: "Trusted since 2009" },
  { icon: <Map   size={30} className="text-[#C9A84C]" />, value: "500+", label: "Tour Packages",      desc: "Across all Kashmir"  },
  { icon: <Users size={30} className="text-[#C9A84C]" />, value: "50K+", label: "Happy Travelers",    desc: "From 40+ countries"  },
  { icon: <Star  size={30} className="text-[#C9A84C]" />, value: "4.9★", label: "Average Rating",     desc: "Google & TripAdvisor" },
];

export default function Stats() {
  return (
    <section id="stats" className="stats-bg py-14 sm:py-16 px-4">
      <StaggerContainer
        stagger={0.12}
        className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8"
      >
        {stats.map((s, i) => (
          <StaggerChild key={i} direction="up">
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-white/20 transition-colors">
                {s.icon}
              </div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1">{s.value}</div>
              <div className="text-[#C9A84C] font-semibold text-xs sm:text-sm uppercase tracking-wider mb-1">{s.label}</div>
              <div className="text-white/55 text-xs">{s.desc}</div>
            </motion.div>
          </StaggerChild>
        ))}
      </StaggerContainer>
    </section>
  );
}
