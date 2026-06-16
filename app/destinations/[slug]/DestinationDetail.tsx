"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import {
  ArrowLeft, ArrowRight, MapPin, Thermometer, Calendar, Navigation,
  Check, ChevronRight, ChevronDown, Phone, MessageCircle,
} from "lucide-react";
import type { Destination } from "@/lib/destinations";
import AnimateOnScroll, { StaggerContainer, StaggerChild } from "@/components/AnimateOnScroll";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface Props { dest: Destination; allDestinations: Destination[] }

function RatingBar({ n }: { n: number }) {
  return (
    <div className="flex justify-center gap-1 my-2">
      {[...Array(5)].map((_, i) => (
        <div key={i} className={`h-2 w-6 rounded-full ${i < n ? "bg-[#C9A84C]" : "bg-gray-100"}`} />
      ))}
    </div>
  );
}

export default function DestinationDetail({ dest, allDestinations }: Props) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroImgY  = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const heroTextY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const heroOp    = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const others = allDestinations.filter((d) => d.slug !== dest.slug);

  return (
    <>
      <Navbar />
      <main className="overflow-x-hidden bg-white">

        {/* ════════════ HERO ══════════════════════════════════════════════ */}
        <div ref={heroRef} className="relative h-[70vh] sm:h-[85vh] min-h-[520px] overflow-hidden">
          <motion.div className="absolute inset-0 w-full h-full" style={{ y: heroImgY, scale: 1.15 }}>
            <img src={dest.heroImage} alt={dest.name} className="w-full h-full object-cover" />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/25 to-black/85" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F1923]/50 to-transparent" />

          {/* Breadcrumb */}
          <div className="absolute top-20 sm:top-24 left-4 sm:left-8 z-10 flex items-center flex-wrap gap-1 text-xs sm:text-sm">
            <Link href="/" className="text-white/65 hover:text-white transition-colors flex items-center gap-1">
              <ArrowLeft size={12} /> Home
            </Link>
            <span className="text-white/30 mx-1">/</span>
            <span className="text-[#C9A84C] font-medium">Destinations</span>
            <span className="text-white/30 mx-1">/</span>
            <span className="text-white font-medium">{dest.name}</span>
          </div>

          {/* Hero text */}
          <motion.div style={{ y: heroTextY, opacity: heroOp }}
            className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10 pb-12">
            <motion.span initial={{ opacity:0, y:-20 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.2 }}
              className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md border border-white/25 rounded-full px-4 py-2 text-white text-xs sm:text-sm font-medium mb-4">
              <MapPin size={12} className="text-[#C9A84C]" />{dest.location}
            </motion.span>

            <motion.h1 initial={{ opacity:0, y:40 }} animate={{ opacity:1, y:0 }}
              transition={{ delay:0.35, duration:0.7, ease:[0.25,0.46,0.45,0.94] }}
              className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white leading-tight mb-4">
              {dest.name}
            </motion.h1>

            <motion.p initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:0.55 }}
              className="text-base sm:text-xl text-white/85 max-w-xl font-light italic mb-8">
              &ldquo;{dest.tagline}&rdquo;
            </motion.p>

            <motion.div initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.7 }}
              className="flex flex-col sm:flex-row gap-3">
              <a href="#packages" className="btn-gold px-7 py-3.5 rounded-full font-bold text-[#1B4332] text-sm shadow-xl text-center w-full sm:w-auto">
                Book This Tour
              </a>
              <a href="#gallery" className="px-7 py-3.5 rounded-full font-bold text-white text-sm border-2 border-white/50 hover:bg-white/15 transition-all text-center w-full sm:w-auto">
                View Gallery
              </a>
            </motion.div>
          </motion.div>

          <div className="absolute bottom-0 left-0 right-0 z-20 pointer-events-none">
            <svg viewBox="0 0 1440 60" fill="none"><path d="M0 60V40C360 10 720 60 1080 30C1260 15 1380 45 1440 30V60H0Z" fill="white"/></svg>
          </div>
        </div>

        {/* ════════════ QUICK INFO ════════════════════════════════════════ */}
        <section className="py-8 sm:py-10 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <StaggerContainer stagger={0.1} className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              {[
                { icon:<Navigation size={20} className="text-[#1B4332]"/>, label:"Altitude",      value:dest.altitude },
                { icon:<Thermometer size={20} className="text-[#1B4332]"/>, label:"Temperature",  value:dest.temperature },
                { icon:<Calendar size={20} className="text-[#1B4332]"/>,   label:"Best Time",     value:dest.bestMonth },
                { icon:<MapPin size={20} className="text-[#1B4332]"/>,     label:"From Srinagar", value:dest.distanceFromSrinagar },
              ].map((item,i) => (
                <StaggerChild key={i} direction="up">
                  <motion.div whileHover={{ y:-4, boxShadow:"0 12px 24px rgba(0,0,0,0.08)" }}
                    className="bg-[#F8F6F0] rounded-2xl p-4 text-center border border-gray-100">
                    <div className="w-10 h-10 rounded-xl bg-[#1B4332]/10 flex items-center justify-center mx-auto mb-2">{item.icon}</div>
                    <p className="text-[10px] text-gray-400 uppercase tracking-widest font-semibold mb-0.5">{item.label}</p>
                    <p className="font-bold text-[#0F1923] text-xs sm:text-sm leading-tight">{item.value}</p>
                  </motion.div>
                </StaggerChild>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* ════════════ ABOUT ═════════════════════════════════════════════ */}
        <section className="py-14 sm:py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <AnimateOnScroll direction="left">
              <span className="inline-block text-[#C9A84C] font-semibold text-xs uppercase tracking-widest mb-3">About {dest.name}</span>
              <h2 className="section-title-left text-3xl sm:text-4xl font-bold text-[#0F1923] mb-6">{dest.tagline}</h2>
              {dest.longDescription.split("\n\n").map((p,i) => (
                <p key={i} className="text-gray-600 leading-relaxed mb-4 text-sm sm:text-base">{p}</p>
              ))}
              <div className="mt-6 space-y-2">
                {dest.highlights.map((h) => (
                  <div key={h} className="flex items-start gap-2.5">
                    <Check size={14} className="text-[#1B4332] mt-0.5 shrink-0 stroke-[2.5]"/>
                    <span className="text-gray-700 text-sm">{h}</span>
                  </div>
                ))}
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll direction="right">
              <div className="grid grid-cols-2 gap-3">
                {dest.images.slice(0,4).map((img,i) => (
                  <motion.div key={i} whileHover={{ scale:1.03 }} transition={{ duration:0.3 }}
                    className={`overflow-hidden rounded-2xl ${i===0?"col-span-2 h-52 sm:h-64":"h-36 sm:h-44"}`}>
                    <img src={img} alt={`${dest.name} ${i+1}`} className="w-full h-full object-cover" loading="lazy"/>
                  </motion.div>
                ))}
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* ════════════ HISTORY ═══════════════════════════════════════════ */}
        <section className="py-14 sm:py-20 px-4 bg-[#F8F6F0]">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <AnimateOnScroll direction="left" className="order-2 lg:order-1">
              <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden shadow-xl">
                <img src={dest.images[4] ?? dest.images[0]} alt={`${dest.name} history`} className="w-full h-full object-cover" loading="lazy"/>
                <div className="absolute inset-0 bg-gradient-to-t from-[#1B4332]/60 to-transparent"/>
                <div className="absolute bottom-4 left-4">
                  <span className="text-[#C9A84C] text-xs font-bold uppercase tracking-widest">Est. History</span>
                </div>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll direction="right" className="order-1 lg:order-2">
              <span className="inline-block text-[#C9A84C] font-semibold text-xs uppercase tracking-widest mb-3">History &amp; Heritage</span>
              <h2 className="section-title-left text-3xl sm:text-4xl font-bold text-[#0F1923] mb-6">The Story of {dest.name}</h2>
              {dest.history.split("\n\n").map((p,i) => (
                <p key={i} className="text-gray-600 leading-relaxed mb-4 text-sm sm:text-base">{p}</p>
              ))}
            </AnimateOnScroll>
          </div>
        </section>

        {/* ════════════ ACTIVITIES ════════════════════════════════════════ */}
        <section className="py-14 sm:py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <AnimateOnScroll direction="up" className="text-center mb-10 sm:mb-14">
              <span className="inline-block text-[#C9A84C] font-semibold text-xs uppercase tracking-widest mb-3">Things To Do</span>
              <h2 className="section-title text-3xl sm:text-4xl font-bold text-[#0F1923]">Experiences in {dest.name}</h2>
            </AnimateOnScroll>
            <StaggerContainer stagger={0.1} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {dest.activities.map((act,i) => (
                <StaggerChild key={i} direction="up">
                  <motion.div whileHover={{ y:-8, boxShadow:"0 20px 40px rgba(0,0,0,0.1)" }} transition={{ duration:0.3 }}
                    className="bg-[#F8F6F0] rounded-2xl p-5 sm:p-6 border border-gray-100">
                    <span className="text-3xl block mb-3">{act.icon}</span>
                    <h3 className="font-bold text-[#1B4332] mb-2 text-base sm:text-lg">{act.name}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{act.desc}</p>
                  </motion.div>
                </StaggerChild>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* ════════════ GALLERY ═══════════════════════════════════════════ */}
        <section id="gallery" className="py-14 sm:py-20 px-4 bg-[#F8F6F0]">
          <div className="max-w-6xl mx-auto">
            <AnimateOnScroll direction="up" className="text-center mb-10">
              <span className="inline-block text-[#C9A84C] font-semibold text-xs uppercase tracking-widest mb-3">Photo Gallery</span>
              <h2 className="section-title text-3xl sm:text-4xl font-bold text-[#0F1923]">{dest.name} in Pictures</h2>
            </AnimateOnScroll>
            <StaggerContainer stagger={0.07} className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
              {dest.images.map((img,i) => (
                <StaggerChild key={i} direction="scale">
                  <motion.div whileHover={{ scale:1.03 }} transition={{ duration:0.3 }}
                    className="relative overflow-hidden rounded-xl sm:rounded-2xl aspect-square group">
                    <motion.img src={img} alt={`${dest.name} ${i+1}`} className="w-full h-full object-cover"
                      whileHover={{ scale:1.08 }} transition={{ duration:0.5 }} loading="lazy"/>
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
                  </motion.div>
                </StaggerChild>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* ════════════ BEST TIME ═════════════════════════════════════════ */}
        <section className="py-14 sm:py-20 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <AnimateOnScroll direction="up" className="text-center mb-10">
              <span className="inline-block text-[#C9A84C] font-semibold text-xs uppercase tracking-widest mb-3">Plan Your Visit</span>
              <h2 className="section-title text-3xl sm:text-4xl font-bold text-[#0F1923]">Best Time to Visit</h2>
            </AnimateOnScroll>
            <StaggerContainer stagger={0.12} className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {dest.seasons.map((s,i) => (
                <StaggerChild key={i} direction="up">
                  <motion.div whileHover={{ y:-6, boxShadow:"0 16px 32px rgba(0,0,0,0.1)" }}
                    className="bg-[#F8F6F0] rounded-2xl p-4 sm:p-5 text-center border border-gray-100">
                    <div className="text-3xl sm:text-4xl mb-2">{s.icon}</div>
                    <h3 className="font-bold text-[#1B4332] text-sm sm:text-base mb-0.5">{s.name}</h3>
                    <p className="text-[#C9A84C] font-semibold text-xs mb-2">{s.months}</p>
                    <RatingBar n={s.rating}/>
                    <p className="text-gray-500 text-xs leading-relaxed mt-2">{s.desc}</p>
                  </motion.div>
                </StaggerChild>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* ════════════ LOCAL CUISINE ══════════════════════════════════════ */}
        <section className="py-14 sm:py-20 px-4 bg-[#F8F6F0]">
          <div className="max-w-6xl mx-auto">
            <AnimateOnScroll direction="up" className="text-center mb-10 sm:mb-14">
              <span className="inline-block text-[#C9A84C] font-semibold text-xs uppercase tracking-widest mb-3">Food &amp; Flavours</span>
              <h2 className="section-title text-3xl sm:text-4xl font-bold text-[#0F1923]">Must-Try Kashmiri Cuisine</h2>
              <p className="mt-4 text-gray-500 text-sm sm:text-base max-w-xl mx-auto">
                Every meal in Kashmir is a story. These are the dishes you must try during your visit to {dest.name}.
              </p>
            </AnimateOnScroll>
            <StaggerContainer stagger={0.09} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {dest.cuisine.map((dish,i) => (
                <StaggerChild key={i} direction="up">
                  <motion.div whileHover={{ y:-6, boxShadow:"0 16px 32px rgba(0,0,0,0.08)" }}
                    className="bg-white rounded-2xl p-5 flex gap-4 items-start border border-gray-100 shadow-sm">
                    <span className="text-3xl shrink-0">{dish.icon}</span>
                    <div>
                      <h3 className="font-bold text-[#1B4332] mb-1.5 text-sm sm:text-base">{dish.name}</h3>
                      <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{dish.desc}</p>
                    </div>
                  </motion.div>
                </StaggerChild>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* ════════════ NEARBY ATTRACTIONS ════════════════════════════════ */}
        <section className="py-14 sm:py-20 px-4 bg-[#F8F6F0]">
          <div className="max-w-6xl mx-auto">
            <AnimateOnScroll direction="up" className="text-center mb-10 sm:mb-14">
              <span className="inline-block text-[#C9A84C] font-semibold text-xs uppercase tracking-widest mb-3">Explore More</span>
              <h2 className="section-title text-3xl sm:text-4xl font-bold text-[#0F1923]">Nearby Attractions</h2>
            </AnimateOnScroll>
            <StaggerContainer stagger={0.1} className="space-y-4">
              {dest.nearbyAttractions.map((a,i) => (
                <StaggerChild key={i} direction="left">
                  <motion.div whileHover={{ x:6, boxShadow:"0 8px 24px rgba(0,0,0,0.07)" }}
                    className="bg-white rounded-2xl p-4 sm:p-5 flex items-start gap-4 border border-gray-100 shadow-sm">
                    <div className="w-14 sm:w-16 shrink-0 text-center">
                      <div className="w-12 h-12 rounded-xl bg-[#1B4332]/10 flex items-center justify-center mx-auto mb-1">
                        <MapPin size={18} className="text-[#1B4332]"/>
                      </div>
                      <p className="text-[10px] text-gray-500 font-semibold">{a.distance}</p>
                    </div>
                    <div>
                      <h3 className="font-bold text-[#1B4332] mb-1 text-sm sm:text-base">{a.name}</h3>
                      <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{a.desc}</p>
                    </div>
                  </motion.div>
                </StaggerChild>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* ════════════ TRAVEL TIPS ════════════════════════════════════════ */}
        <section className="py-14 sm:py-20 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <AnimateOnScroll direction="up" className="text-center mb-10">
              <span className="inline-block text-[#C9A84C] font-semibold text-xs uppercase tracking-widest mb-3">Expert Advice</span>
              <h2 className="section-title text-3xl sm:text-4xl font-bold text-[#0F1923]">Travel Tips for {dest.name}</h2>
            </AnimateOnScroll>
            <StaggerContainer stagger={0.09} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {dest.tips.map((t,i) => (
                <StaggerChild key={i} direction="up">
                  <motion.div whileHover={{ y:-4, boxShadow:"0 12px 24px rgba(0,0,0,0.07)" }}
                    className="flex items-start gap-3.5 bg-[#F8F6F0] rounded-2xl p-4 sm:p-5 border border-gray-100">
                    <span className="text-2xl shrink-0 mt-0.5">{t.icon}</span>
                    <p className="text-gray-700 text-sm leading-relaxed">{t.tip}</p>
                  </motion.div>
                </StaggerChild>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* ════════════ HOW TO REACH ═══════════════════════════════════════ */}
        <section className="py-14 sm:py-20 px-4 bg-[#F8F6F0]">
          <div className="max-w-4xl mx-auto">
            <AnimateOnScroll direction="up" className="text-center mb-10">
              <span className="inline-block text-[#C9A84C] font-semibold text-xs uppercase tracking-widest mb-3">Getting There</span>
              <h2 className="section-title text-3xl sm:text-4xl font-bold text-[#0F1923]">How to Reach {dest.name}</h2>
            </AnimateOnScroll>
            <StaggerContainer stagger={0.15} className="space-y-4">
              {dest.howToReach.map((item,i) => (
                <StaggerChild key={i} direction="left">
                  <motion.div whileHover={{ x:6 }}
                    className="flex items-start gap-4 bg-white rounded-2xl p-4 sm:p-5 border border-gray-100 shadow-sm">
                    <div className="w-12 h-12 rounded-xl bg-[#1B4332]/10 flex items-center justify-center shrink-0 text-xl">
                      {item.mode.split(" ")[0]}
                    </div>
                    <div>
                      <h4 className="font-bold text-[#1B4332] mb-1 text-sm sm:text-base">
                        {item.mode.replace(item.mode.split(" ")[0], "").trim()}
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                </StaggerChild>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* ════════════ FAQ ════════════════════════════════════════════════ */}
        <section className="py-14 sm:py-20 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <AnimateOnScroll direction="up" className="text-center mb-10">
              <span className="inline-block text-[#C9A84C] font-semibold text-xs uppercase tracking-widest mb-3">FAQ</span>
              <h2 className="section-title text-3xl sm:text-4xl font-bold text-[#0F1923]">Frequently Asked Questions</h2>
            </AnimateOnScroll>
            <StaggerContainer stagger={0.1} className="space-y-3">
              {dest.faqs.map((faq,i) => (
                <StaggerChild key={i} direction="up">
                  <div className="border border-gray-200 rounded-2xl overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full flex items-center justify-between gap-4 p-4 sm:p-5 text-left bg-white hover:bg-[#F8F6F0] transition-colors cursor-pointer"
                    >
                      <span className="font-semibold text-[#0F1923] text-sm sm:text-base">{faq.q}</span>
                      <motion.span animate={{ rotate: openFaq===i ? 180 : 0 }} transition={{ duration:0.25 }} className="shrink-0">
                        <ChevronDown size={18} className="text-[#1B4332]"/>
                      </motion.span>
                    </button>
                    <AnimatePresence initial={false}>
                      {openFaq === i && (
                        <motion.div
                          initial={{ height:0, opacity:0 }} animate={{ height:"auto", opacity:1 }}
                          exit={{ height:0, opacity:0 }} transition={{ duration:0.3, ease:"easeInOut" }}
                        >
                          <div className="px-4 sm:px-5 pb-4 sm:pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4 bg-[#F8F6F0]">
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </StaggerChild>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* ════════════ BOOK CTA ═══════════════════════════════════════════ */}
        <section id="packages" className="relative py-16 sm:py-24 px-4 overflow-hidden">
          <div className="absolute inset-0" style={{ backgroundImage:`url(${dest.heroImage})`, backgroundSize:"cover", backgroundPosition:"center", backgroundAttachment:"fixed" }}/>
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F1923]/92 via-[#1B4332]/82 to-[#0F1923]/92"/>
          <AnimateOnScroll direction="up" className="relative z-10 max-w-3xl mx-auto text-center">
            <span className="inline-block text-[#C9A84C] font-semibold text-xs uppercase tracking-widest mb-4">Ready to Explore?</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5">
              Book Your <span className="text-shimmer">{dest.name}</span> Tour
            </h2>
            <p className="text-white/80 text-base sm:text-lg mb-8 leading-relaxed">
              Let our Kashmir travel experts craft the perfect {dest.name} itinerary for you —
              free planning, no hidden fees, full support throughout your journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <motion.a href="/#packages" whileHover={{ scale:1.04 }} whileTap={{ scale:0.97 }}
                className="btn-gold px-7 py-3.5 rounded-full font-bold text-[#1B4332] text-sm sm:text-base inline-flex items-center justify-center gap-2 w-full sm:w-auto">
                View All Packages <ArrowRight size={17}/>
              </motion.a>
              <motion.a href="tel:+919596041460" whileHover={{ scale:1.04 }}
                className="px-7 py-3.5 rounded-full font-bold text-white text-sm sm:text-base border-2 border-white/50 hover:bg-white/15 transition-all inline-flex items-center justify-center gap-2 w-full sm:w-auto">
                <Phone size={17}/> Call Now
              </motion.a>
              <motion.a href="https://wa.me/919596041460?text=Hi!%20I'd%20like%20to%20book%20a%20Kashmir%20tour%20to%20explore%20the%20destinations.%20Please%20help%20me%20plan%20my%20trip." target="_blank" rel="noopener noreferrer" whileHover={{ scale:1.04 }}
                className="px-7 py-3.5 rounded-full font-bold text-white text-sm sm:text-base bg-[#25D366]/20 border-2 border-[#25D366]/50 hover:bg-[#25D366]/35 transition-all inline-flex items-center justify-center gap-2 w-full sm:w-auto">
                <MessageCircle size={17}/> WhatsApp
              </motion.a>
            </div>
          </AnimateOnScroll>
        </section>

        {/* ════════════ OTHER DESTINATIONS ════════════════════════════════ */}
        <section className="py-14 sm:py-20 px-4 bg-[#F8F6F0]">
          <div className="max-w-6xl mx-auto">
            <AnimateOnScroll direction="up" className="text-center mb-10">
              <span className="inline-block text-[#C9A84C] font-semibold text-xs uppercase tracking-widest mb-3">Keep Exploring</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0F1923]">More Destinations in Kashmir</h2>
            </AnimateOnScroll>
            <StaggerContainer stagger={0.12} className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {others.map((d) => (
                <StaggerChild key={d.slug} direction="up">
                  <Link href={`/destinations/${d.slug}`}>
                    <motion.div whileHover={{ y:-8, boxShadow:"0 24px 48px rgba(0,0,0,0.14)" }} transition={{ duration:0.3 }}
                      className="relative overflow-hidden rounded-2xl group h-52 sm:h-56">
                      <img src={d.heroImage} alt={d.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy"/>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"/>
                      <div className="absolute inset-0 flex flex-col justify-end p-5">
                        <span className={`text-xs font-bold px-2.5 py-1 rounded-full w-fit mb-2 ${d.badgeColor}`}>{d.badge}</span>
                        <h3 className="text-white font-bold text-xl mb-0.5">{d.name}</h3>
                        <p className="text-white/65 text-xs flex items-center gap-1 mb-3"><MapPin size={10}/>{d.location}</p>
                        <div className="flex items-center gap-1 text-[#C9A84C] text-xs font-semibold group-hover:gap-2 transition-all">
                          Explore <ChevronRight size={12}/>
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                </StaggerChild>
              ))}
            </StaggerContainer>

            <AnimateOnScroll direction="up" delay={0.2} className="mt-10 text-center">
              <Link href="/">
                <motion.button whileHover={{ scale:1.03 }} whileTap={{ scale:0.97 }}
                  className="btn-primary text-white px-7 py-3.5 rounded-full font-semibold inline-flex items-center gap-2 text-sm sm:text-base">
                  <ArrowLeft size={15}/> Back to Home
                </motion.button>
              </Link>
            </AnimateOnScroll>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
