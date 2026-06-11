"use client";

import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";
import AnimateOnScroll, { StaggerContainer, StaggerChild } from "./AnimateOnScroll";

const testimonials = [
  { name: "Priya Sharma",        location: "Mumbai, India",   avatar: "PS", avatarBg: "bg-rose-100 text-rose-700",    package: "Premium Package", rating: 5, review: "Hunt Kashmir 365 made our honeymoon absolutely magical! The houseboat on Dal Lake was a dream — the staff, the food, the attention to detail was flawless. We're already planning our next trip!", date: "October 2024" },
  { name: "Ahmed Al-Rashid",     location: "Dubai, UAE",      avatar: "AA", avatarBg: "bg-blue-100 text-blue-700",    package: "Luxury Package",  rating: 5, review: "Coming from Dubai, I expected good service — but Hunt Kashmir 365 exceeded every expectation. The Sonamarg glacier trek was breathtaking. Incredibly hospitable team.", date: "September 2024" },
  { name: "Sarah & James Miller",location: "London, UK",      avatar: "SJ", avatarBg: "bg-emerald-100 text-emerald-700", package: "Explorer Package", rating: 5, review: "As first-time visitors to India, we were nervous, but the team made everything seamless. Gulmarg was absolutely stunning — the gondola ride above the clouds was once-in-a-lifetime!", date: "August 2024" },
  { name: "Arjun Mehta",         location: "Bangalore, India",avatar: "AM", avatarBg: "bg-amber-100 text-amber-700",  package: "Premium Package", rating: 5, review: "Booked for a family of 6 — everyone from grandparents to kids had a wonderful time. The customised itinerary with easy pacing for elders was so thoughtful. Kashmir is heaven!", date: "July 2024" },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={13} className="fill-[#C9A84C] text-[#C9A84C]" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 bg-[#F8F6F0]">
      <div className="max-w-7xl mx-auto">

        <AnimateOnScroll direction="up" className="text-center mb-10 sm:mb-14">
          <span className="inline-block text-[#C9A84C] font-semibold text-xs sm:text-sm uppercase tracking-widest mb-3">
            Traveller Stories
          </span>
          <h2 className="section-title text-3xl sm:text-4xl md:text-5xl font-bold text-[#0F1923]">
            What Our Guests Say
          </h2>
          <p className="mt-4 sm:mt-6 text-gray-600 text-base sm:text-lg max-w-xl mx-auto">
            Real experiences from real travellers — because their words mean more than ours.
          </p>
        </AnimateOnScroll>

        <StaggerContainer stagger={0.12} className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
          {testimonials.map((t, i) => (
            <StaggerChild key={i} direction="up">
              <motion.div
                whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                transition={{ duration: 0.25 }}
                className="testimonial-card rounded-2xl p-5 sm:p-6 shadow-sm"
              >
                <div className="flex justify-between items-start mb-4">
                  <Quote size={32} className="text-[#C9A84C]/30 -scale-x-100" />
                  <span className="text-xs text-gray-400 bg-gray-100 px-3 py-1 rounded-full font-medium">{t.package}</span>
                </div>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base italic mb-5">&ldquo;{t.review}&rdquo;</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 sm:w-11 sm:h-11 rounded-full ${t.avatarBg} flex items-center justify-center font-bold text-xs sm:text-sm shrink-0`}>
                      {t.avatar}
                    </div>
                    <div>
                      <p className="font-bold text-[#0F1923] text-sm">{t.name}</p>
                      <p className="text-gray-500 text-xs">{t.location}</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <Stars count={t.rating} />
                    <span className="text-xs text-gray-400">{t.date}</span>
                  </div>
                </div>
              </motion.div>
            </StaggerChild>
          ))}
        </StaggerContainer>

        <AnimateOnScroll direction="up" delay={0.2} className="mt-10 sm:mt-14 flex flex-wrap justify-center items-center gap-6 sm:gap-10 text-center">
          {[
            { platform: "Google Reviews", rating: "4.8/5", count: "25 verified reviews" },
            { platform: "Happy Travelers", rating: "5/5",  count: "50,000+ served"      },
            { platform: "Years Experience", rating: "15+", count: "Est. 2009"            },
          ].map((p) => (
            <motion.div key={p.platform} whileHover={{ scale: 1.05 }} className="flex flex-col items-center">
              <p className="text-xl sm:text-2xl font-bold text-[#1B4332]">{p.rating}</p>
              <p className="text-[#C9A84C] font-semibold text-xs sm:text-sm">{p.platform}</p>
              <p className="text-gray-500 text-xs">{p.count}</p>
            </motion.div>
          ))}
        </AnimateOnScroll>
      </div>
    </section>
  );
}
