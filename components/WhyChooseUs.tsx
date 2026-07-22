"use client";

import { ShieldCheck, HeartHandshake, Clock, Wallet, MapPinned, Headphones } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import AnimateOnScroll, { StaggerContainer, StaggerChild } from "./AnimateOnScroll";

// ─── Custom Unsplash loader ────────────────────────────────────────────────
const unsplashLoader = ({ src, width, quality }: { src: string; width: number; quality?: number }) => {
  const base = src.split("?")[0];
  return `${base}?w=${width}&q=${quality || 75}&auto=format&fit=crop`;
};

// Motion‑enhanced Image
const MotionImage = motion(Image);

const features = [
  { icon: <ShieldCheck size={26} className="text-[#1B4332]" />, title: "100% Safe & Secure",    desc: "All tours are fully insured, safety-audited, and led by certified local guides with deep knowledge of the terrain." },
  { icon: <HeartHandshake size={26} className="text-[#1B4332]" />, title: "Personalised Service", desc: "We tailor every itinerary to your preferences — dietary needs, pace of travel, special occasions — nothing is too small." },
  { icon: <Clock size={26} className="text-[#1B4332]" />,          title: "15+ Years of Expertise", desc: "Operating since 2009, we know Kashmir like the back of our hand — every hidden gem, best season, and local secret." },
  { icon: <Wallet size={26} className="text-[#1B4332]" />,          title: "Best Price Guarantee", desc: "We promise the best value. Find a lower price for the same package? We'll match it — guaranteed." },
  { icon: <MapPinned size={26} className="text-[#1B4332]" />,       title: "Local Ground Support", desc: "Our on-ground team is stationed at every destination, ensuring seamless transitions and zero surprises." },
  { icon: <Headphones size={26} className="text-[#1B4332]" />,      title: "24/7 Support",         desc: "Travel with peace of mind — our support team is available round the clock, every day of the year." },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-16 sm:py-20 lg:py-24 px-4 bg-[#F8F6F0]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left */}
          <AnimateOnScroll direction="left">
            <span className="inline-block text-[#C9A84C] font-semibold text-xs sm:text-sm uppercase tracking-widest mb-3">
              Why Hunt Kashmir 365
            </span>
            <h2 className="section-title-left text-3xl sm:text-4xl md:text-5xl font-bold text-[#0F1923] leading-tight">
              Travel Smarter,<br />
              <span className="text-[#1B4332]">Experience More</span>
            </h2>
            <p className="mt-5 text-gray-600 text-base sm:text-lg leading-relaxed">
              We&apos;re not just a travel agency — we&apos;re storytellers, adventure-seekers, and Kashmir natives passionate about sharing the paradise we call home.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {["TripAdvisor Certified", "IATA Accredited", "Ministry of Tourism"].map((badge) => (
                <div key={badge} className="flex items-center gap-2 bg-white border border-[#1B4332]/15 rounded-full px-3 sm:px-4 py-2 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-[#C9A84C]" />
                  <span className="text-xs sm:text-sm font-medium text-[#1B4332]">{badge}</span>
                </div>
              ))}
            </div>

            {/* Image with floating badge – using Next.js Image */}
            <div className="mt-8 relative h-48 sm:h-56 rounded-2xl overflow-hidden shadow-xl">
              <MotionImage
                loader={unsplashLoader}
                src="https://images.unsplash.com/photo-1551632811-561732d1e306"
                alt="Breathtaking Kashmir landscape with mountains and lush greenery"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={75}
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#1B4332]/50 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-xl sm:text-2xl font-bold">50,000+</p>
                <p className="text-xs sm:text-sm text-white/80">Happy travelers served</p>
              </div>
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
                className="absolute -top-2 -right-2 w-18 h-18 w-[72px] h-[72px] bg-[#C9A84C] rounded-2xl flex flex-col items-center justify-center shadow-xl text-[#1B4332] font-bold"
              >
                <span className="text-2xl font-extrabold leading-none">4.9</span>
                <span className="text-[9px] uppercase tracking-wide">Rating</span>
              </motion.div>
            </div>
          </AnimateOnScroll>

          {/* Right — feature grid */}
          <StaggerContainer stagger={0.1} className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {features.map((f, i) => (
              <StaggerChild key={i} direction="up">
                <motion.div
                  whileHover={{ y: -6, boxShadow: "0 16px 32px rgba(0,0,0,0.1)" }}
                  transition={{ duration: 0.25 }}
                  className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-gray-100 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#1B4332]/8 flex items-center justify-center mb-3 group-hover:bg-[#1B4332]/15 transition-colors">
                    {f.icon}
                  </div>
                  <h3 className="font-bold text-[#0F1923] mb-1.5 text-sm sm:text-base">{f.title}</h3>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{f.desc}</p>
                </motion.div>
              </StaggerChild>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}