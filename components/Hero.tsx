"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { MapPin, Calendar, Users, ChevronDown, Check, Sparkles } from "lucide-react";
import Image from "next/image";

// ─── Custom Unsplash loader ────────────────────────────────────────────────
const unsplashLoader = ({ src, width, quality }: { src: string; width: number; quality?: number }) => {
  const base = src.split("?")[0];
  return `${base}?w=${width}&q=${quality || 75}&auto=format&fit=crop`;
};

/* ─── Hero background images – now all Kashmir-specific ────────────────── */
const HERO_IMAGES = [
  "https://kimi-web-img.moonshot.cn/img/images.unsplash.com/898f615d60f7067119ea660a0e29af667f512c80", // Dal Lake shikaras
  "https://kimi-web-img.moonshot.cn/img/images.unsplash.com/102fc424abe089958cb63d1f2bbc4c0dc5d875a9", // Gulmarg gondola
  "https://kimi-web-img.moonshot.cn/img/images.unsplash.com/d56c979d853fb5e6ce473f399f23c7003846cf08", // Pahalgam river valley
];

const HERO_ALT = [
  "Dal Lake with traditional houseboats in Srinagar, Kashmir",
  "Snow-covered ski slopes and mountains in Gulmarg, Kashmir",
  "Lush green meadows and pine forests in Pahalgam, Kashmir",
];

/* ─── Slides ─────────────────────────────────────────────────────────────── */
const slides = [
  { title: "Discover the",    highlight: "Heaven on Earth", sub: "Experience Kashmir's breathtaking landscapes — serene lakes, snow-capped peaks, and lush meadows await you.", badge: "🏔️  Srinagar · Kashmir" },
  { title: "Adventure Awaits in", highlight: "Gulmarg",    sub: "Asia's highest gondola, world-class skiing, and meadows blanketed in wildflowers.",  badge: "⛷️  Gulmarg · Baramulla" },
  { title: "Romance Blooms in",   highlight: "Pahalgam",   sub: "Pine-forested valleys, sparkling rivers, and golden sunsets — the Valley of Shepherds.", badge: "🌸  Pahalgam · Anantnag" },
];

/* ─── Destinations for planner ───────────────────────────────────────────── */
const DESTINATIONS = [
  { id:"dal-lake",      label:"Dal Lake",      sub:"Srinagar",  img:"https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b",           emoji:"🛶" },
  { id:"gulmarg",       label:"Gulmarg",       sub:"Baramulla", img:"https://images.unsplash.com/photo-1544735716-392fe2489ffa",            emoji:"⛷️" },
  { id:"pahalgam",      label:"Pahalgam",      sub:"Anantnag",  img:"https://images.unsplash.com/photo-1504384308090-c894fdcc538d",      emoji:"🌸" },
  { id:"sonamarg",      label:"Sonamarg",      sub:"Ganderbal", img:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4",      emoji:"🏔️" },
  { id:"yusmarg",       label:"Yusmarg",       sub:"Budgam",    img:"https://images.unsplash.com/photo-1501785888041-af3ef285b470",      emoji:"🌿" },
  { id:"betaab-valley", label:"Betaab Valley", sub:"Pahalgam",  img:"https://images.unsplash.com/photo-1469474968028-56623f02e42e",      emoji:"🎬" },
];

const TRAVELER_TYPES = [
  { id:"solo",   label:"Solo",    icon:"🚶", desc:"Just me"       },
  { id:"couple", label:"Couple",  icon:"💑", desc:"2 people"      },
  { id:"family", label:"Family",  icon:"👨‍👩‍👧", desc:"With kids"     },
  { id:"group",  label:"Group",   icon:"👥", desc:"6+ people"     },
];

/* ─── Month picker helpers ────────────────────────────────────────────────── */
const MONTH_NAMES = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
const PEAK_MONTHS = [3,4,5,8,9,10];

function getUpcomingMonths(count: number) {
  const now = new Date();
  return Array.from({ length: count }, (_, i) => {
    const d = new Date(now.getFullYear(), now.getMonth() + i + 1, 1);
    return { month: d.getMonth(), year: d.getFullYear(), label: MONTH_NAMES[d.getMonth()], isPeak: PEAK_MONTHS.includes(d.getMonth()) };
  });
}

const MotionImage = motion(Image);

export default function Hero() {
  const [slide,      setSlide]      = useState(0);
  const [imgLoaded,  setImgLoaded]  = useState(false);

  /* Planner state */
  const [open,         setOpen]         = useState<"dest"|"date"|"travelers"|null>(null);
  const [selDest,      setSelDest]      = useState<typeof DESTINATIONS[0]|null>(null);
  const [selMonth,     setSelMonth]     = useState<{ month:number; year:number; label:string }|null>(null);
  const [selTravType,  setSelTravType]  = useState<typeof TRAVELER_TYPES[0]>(TRAVELER_TYPES[1]);
  const [adultCount,   setAdultCount]   = useState(2);
  const [childCount,   setChildCount]   = useState(0);

  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const bgY     = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY   = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  useEffect(() => {
    const id = setInterval(() => setSlide((s) => (s + 1) % slides.length), 5500);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const planner = document.getElementById("hero-planner");
      if (planner && !planner.contains(e.target as Node)) setOpen(null);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const upcomingMonths = getUpcomingMonths(9);

  const travelersLabel = () => {
    const parts: string[] = [];
    if (adultCount > 0) parts.push(`${adultCount} ${adultCount === 1 ? "Adult":"Adults"}`);
    if (childCount > 0) parts.push(`${childCount} ${childCount === 1 ? "Child":"Children"}`);
    return parts.join(", ") || "Select";
  };

  const handleSearch = () => {
    const dest     = selDest?.label   ?? "Any destination";
    const month    = selMonth ? `${selMonth.label} ${selMonth.year}` : "Flexible dates";
    const travelers = `${travelersLabel()} (${selTravType.label})`;
    const msg = encodeURIComponent(
      `Hi Hunt Kashmir 365! 👋\n\nI'd like to plan a Kashmir trip:\n\n` +
      `📍 Destination: ${dest}\n📅 Month: ${month}\n👥 Travelers: ${travelers}\n\n` +
      `Could you please help me plan an itinerary and share pricing?\n\nThank you!`
    );
    window.open(`https://wa.me/919596041460?text=${msg}`, "_blank");
  };

  const plannerComplete = selDest && selMonth;

  return (
    <section id="home" ref={sectionRef} className="relative w-full min-h-screen overflow-hidden flex flex-col">

      {/* ── Background Images (carousel) ────────────────────────────────── */}
      <motion.div className="absolute inset-0 w-full h-full" style={{ y: bgY, scale: 1.12 }}>
        {HERO_IMAGES.map((src, i) => (
          <MotionImage
          key={src}
          loader={unsplashLoader}
          src={src}
          fill
          className="object-cover"
          sizes="100vw"
          quality={60}
          priority={i === 0}
          fetchPriority={i === 0 ? "high" : "auto"}
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
          onLoad={i === 0 ? () => setImgLoaded(true) : undefined}
          initial={i === 0 ? { opacity: 1 } : { opacity: 0 }}
          animate={{ opacity: slide === i ? 1 : 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />
        ))}
        {/* Fallback / loading placeholder */}
        {!imgLoaded && (
          <div className="absolute inset-0 bg-gradient-to-br from-[#1B4332] via-[#2D6A4F] to-[#0a1612]" />
        )}
      </motion.div>

      {/* Overlays – reduced opacity to let the image show better */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/60 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#1B4332]/30 via-transparent to-transparent pointer-events-none" />

      {/* ── Main content ────────────────────────────────────────────────── */}
      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-10 flex flex-col items-center justify-center flex-1 px-4 sm:px-6 pt-28 pb-10 text-center"
      >
        {/* Location badge */}
        <AnimatePresence mode="wait">
          <motion.div key={slide+"-badge"} initial={{ opacity:0, y:-20 }} animate={{ opacity:1, y:0 }} exit={{ opacity:0, y:20 }} transition={{ duration:0.5 }}
            className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md border border-white/25 rounded-full px-4 py-2 text-white text-xs sm:text-sm font-medium mb-5">
            {slides[slide].badge}
          </motion.div>
        </AnimatePresence>

        {/* Headline */}
        <AnimatePresence mode="wait">
          <motion.h1 key={slide+"-title"} initial={{ opacity:0, y:40 }} animate={{ opacity:1, y:0 }} exit={{ opacity:0, y:-40 }} transition={{ duration:0.65, ease:[0.25,0.46,0.45,0.94] }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight max-w-4xl">
            {slides[slide].title}{" "}
            <span className="text-shimmer">{slides[slide].highlight}</span>
          </motion.h1>
        </AnimatePresence>

        {/* Subtitle */}
        <AnimatePresence mode="wait">
          <motion.p key={slide+"-sub"} initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }} transition={{ duration:0.5, delay:0.2 }}
            className="mt-4 sm:mt-5 text-base sm:text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed px-2">
            {slides[slide].sub}
          </motion.p>
        </AnimatePresence>

        {/* CTA buttons */}
        <motion.div initial={{ opacity:0, y:30 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.4, duration:0.6 }}
          className="flex flex-col sm:flex-row gap-3 mt-6 w-full sm:w-auto px-4 sm:px-0">
          <a href="#packages" className="btn-gold px-7 py-3.5 rounded-full font-bold text-[#1B4332] text-sm sm:text-base shadow-xl text-center w-full sm:w-auto">
            Explore Packages
          </a>
          <a href="#destinations" className="px-7 py-3.5 rounded-full font-bold text-white text-sm sm:text-base border-2 border-white/50 hover:bg-white/15 transition-all text-center w-full sm:w-auto">
            View Destinations
          </a>
        </motion.div>

        {/* ══ QUICK JOURNEY PLANNER ═══════════════════════════════════════ */}
        <motion.div
          id="hero-planner"
          initial={{ opacity:0, y:50, scale:0.96 }}
          animate={{ opacity:1, y:0, scale:1 }}
          transition={{ delay:0.65, duration:0.65, ease:[0.25,0.46,0.45,0.94] }}
          className="mt-8 w-full max-w-3xl"
        >
          {/* Header chip */}
          <div className="flex items-center justify-center gap-2 mb-3">
            <Sparkles size={13} className="text-[#C9A84C]" />
            <span className="text-white text-xs font-bold uppercase tracking-widest drop-shadow">Quick Journey Planner</span>
            <Sparkles size={13} className="text-[#C9A84C]" />
          </div>

          <div className="bg-[#0a1612]/80 backdrop-blur-2xl border border-white/20 rounded-2xl sm:rounded-3xl p-3 sm:p-4 shadow-[0_8px_64px_rgba(0,0,0,0.7)] ring-1 ring-white/5">

            {/* ── Three selector buttons ── */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-3">

              {/* Destination selector */}
              <button onClick={() => setOpen(open === "dest" ? null : "dest")}
                className={`relative flex flex-col items-start gap-0.5 px-3 sm:px-4 py-3 sm:py-3.5 rounded-xl sm:rounded-2xl border transition-all duration-200 text-left cursor-pointer ${
                  open === "dest" ? "bg-white/25 border-[#C9A84C]" : "bg-white/12 border-white/20 hover:bg-white/22 hover:border-[#C9A84C]/50"
                }`}>
                <div className="flex items-center gap-1.5 w-full">
                  <MapPin size={12} className="text-[#C9A84C] shrink-0" />
                  <span className="text-[#C9A84C]/90 text-[9px] sm:text-[10px] font-bold uppercase tracking-widest">Where</span>
                  {selDest && <Check size={9} className="text-[#C9A84C] ml-auto shrink-0" strokeWidth={3}/>}
                </div>
                <p className={`text-xs sm:text-sm font-semibold truncate w-full ${selDest ? "text-white" : "text-white/70"}`}>
                  {selDest ? selDest.label : "Destination"}
                </p>
                {selDest && <p className="text-[#C9A84C] text-[10px] leading-none">{selDest.sub}</p>}
              </button>

              {/* Date selector */}
              <button onClick={() => setOpen(open === "date" ? null : "date")}
                className={`relative flex flex-col items-start gap-0.5 px-3 sm:px-4 py-3 sm:py-3.5 rounded-xl sm:rounded-2xl border transition-all duration-200 text-left cursor-pointer ${
                  open === "date" ? "bg-white/25 border-[#C9A84C]" : "bg-white/12 border-white/20 hover:bg-white/22 hover:border-[#C9A84C]/50"
                }`}>
                <div className="flex items-center gap-1.5 w-full">
                  <Calendar size={12} className="text-[#C9A84C] shrink-0" />
                  <span className="text-[#C9A84C]/90 text-[9px] sm:text-[10px] font-bold uppercase tracking-widest">When</span>
                  {selMonth && <Check size={9} className="text-[#C9A84C] ml-auto shrink-0" strokeWidth={3}/>}
                </div>
                <p className={`text-xs sm:text-sm font-semibold truncate w-full ${selMonth ? "text-white" : "text-white/70"}`}>
                  {selMonth ? `${selMonth.label} ${selMonth.year}` : "Travel Month"}
                </p>
                {selMonth && PEAK_MONTHS.includes(selMonth.month) && (
                  <p className="text-[#C9A84C] text-[10px] leading-none">✨ Peak season</p>
                )}
              </button>

              {/* Travelers selector */}
              <button onClick={() => setOpen(open === "travelers" ? null : "travelers")}
                className={`relative flex flex-col items-start gap-0.5 px-3 sm:px-4 py-3 sm:py-3.5 rounded-xl sm:rounded-2xl border transition-all duration-200 text-left cursor-pointer ${
                  open === "travelers" ? "bg-white/25 border-[#C9A84C]" : "bg-white/12 border-white/20 hover:bg-white/22 hover:border-[#C9A84C]/50"
                }`}>
                <div className="flex items-center gap-1.5 w-full">
                  <Users size={12} className="text-[#C9A84C] shrink-0" />
                  <span className="text-[#C9A84C]/90 text-[9px] sm:text-[10px] font-bold uppercase tracking-widest">Who</span>
                </div>
                <p className="text-xs sm:text-sm font-semibold text-white truncate w-full">{travelersLabel()}</p>
                <p className="text-[#C9A84C] text-[10px] leading-none">{selTravType.icon} {selTravType.label}</p>
              </button>
            </div>

            {/* ── Dropdown panels ── */}
            <AnimatePresence>

              {/* Destination panel */}
              {open === "dest" && (
                <motion.div key="dest-panel" initial={{ opacity:0, y:-8, height:0 }} animate={{ opacity:1, y:0, height:"auto" }} exit={{ opacity:0, y:-8, height:0 }} transition={{ duration:0.2 }}
                  className="overflow-hidden mb-3">
                  <div className="grid grid-cols-3 gap-2 pt-1">
                    {DESTINATIONS.map((d) => (
                      <motion.button key={d.id} whileHover={{ scale:1.03 }} whileTap={{ scale:0.97 }}
                        onClick={() => { setSelDest(d); setOpen(null); }}
                        className={`relative overflow-hidden rounded-xl aspect-[3/2] group cursor-pointer border-2 transition-all duration-200 ${
                          selDest?.id === d.id ? "border-[#C9A84C]" : "border-transparent"
                        }`}>
                        <div className="relative w-full h-full">
                          <Image
                            loader={unsplashLoader}
                            src={d.img}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                            sizes="(max-width: 640px) 33vw, (max-width: 1024px) 25vw, 20vw"
                            quality={75}
                            alt={`${d.label} in ${d.sub}, Kashmir`}
                          />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"/>
                        {selDest?.id === d.id && (
                          <div className="absolute top-1.5 right-1.5 w-4 h-4 bg-[#C9A84C] rounded-full flex items-center justify-center">
                            <Check size={9} strokeWidth={3} className="text-[#1B4332]"/>
                          </div>
                        )}
                        <div className="absolute bottom-1.5 left-2">
                          <p className="text-white font-bold text-[10px] sm:text-xs leading-tight">{d.label}</p>
                          <p className="text-white/55 text-[9px]">{d.sub}</p>
                        </div>
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Date panel */}
              {open === "date" && (
                <motion.div key="date-panel" initial={{ opacity:0, y:-8, height:0 }} animate={{ opacity:1, y:0, height:"auto" }} exit={{ opacity:0, y:-8, height:0 }} transition={{ duration:0.2 }}
                  className="overflow-hidden mb-3">
                  <p className="text-white/45 text-[10px] text-center mb-2 uppercase tracking-widest">Pick your travel month</p>
                  <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                    {upcomingMonths.map((m) => (
                      <motion.button key={`${m.month}-${m.year}`} whileHover={{ scale:1.05 }} whileTap={{ scale:0.95 }}
                        onClick={() => { setSelMonth(m); setOpen(null); }}
                        className={`relative rounded-xl py-2.5 px-2 text-center border transition-all duration-200 cursor-pointer ${
                          selMonth?.month === m.month && selMonth?.year === m.year
                            ? "bg-[#C9A84C] border-[#C9A84C] text-[#1B4332]"
                            : "bg-white/10 border-white/15 text-white hover:bg-white/20 hover:border-white/30"
                        }`}>
                        {m.isPeak && selMonth?.month !== m.month && (
                          <span className="absolute -top-1 -right-1 w-3 h-3 bg-rose-400 rounded-full text-[7px] flex items-center justify-center text-white font-bold">✨</span>
                        )}
                        <p className="font-bold text-sm sm:text-base">{m.label}</p>
                        <p className={`text-[10px] ${selMonth?.month === m.month && selMonth?.year === m.year ? "text-[#1B4332]/70" : "text-white/40"}`}>
                          {m.year}
                        </p>
                        {m.isPeak && (
                          <p className={`text-[9px] mt-0.5 font-semibold ${selMonth?.month === m.month && selMonth?.year === m.year ? "text-[#1B4332]" : "text-[#C9A84C]"}`}>
                            Peak
                          </p>
                        )}
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Travelers panel */}
              {open === "travelers" && (
                <motion.div key="travelers-panel" initial={{ opacity:0, y:-8, height:0 }} animate={{ opacity:1, y:0, height:"auto" }} exit={{ opacity:0, y:-8, height:0 }} transition={{ duration:0.2 }}
                  className="overflow-hidden mb-3">
                  {/* Type buttons */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-3">
                    {TRAVELER_TYPES.map((t) => (
                      <button key={t.id} onClick={() => setSelTravType(t)}
                        className={`rounded-xl py-2 px-1 text-center border transition-all duration-200 cursor-pointer ${
                          selTravType.id === t.id
                            ? "bg-[#C9A84C] border-[#C9A84C] text-[#1B4332]"
                            : "bg-white/10 border-white/15 text-white hover:bg-white/20"
                        }`}>
                        <div className="text-lg mb-0.5">{t.icon}</div>
                        <p className="font-bold text-[10px] sm:text-xs">{t.label}</p>
                        <p className={`text-[9px] ${selTravType.id === t.id ? "text-[#1B4332]/70" : "text-white/40"}`}>{t.desc}</p>
                      </button>
                    ))}
                  </div>
                  {/* Counters */}
                  <div className="flex flex-col gap-3 justify-center">
                    {[
                      { label:"Adults",   value:adultCount,  set:setAdultCount,  min:1, max:20 },
                      { label:"Children", value:childCount,  set:setChildCount,  min:0, max:10 },
                    ].map((c) => (
                      <div key={c.label} className="flex items-center gap-3 bg-white/10 rounded-xl px-4 py-2.5">
                        <span className="text-white/60 text-xs font-semibold w-14">{c.label}</span>
                        <button onClick={() => c.set(Math.max(c.min, c.value-1))}
                          className="w-7 h-7 rounded-full bg-white/15 hover:bg-white/30 text-white flex items-center justify-center transition-colors cursor-pointer font-bold text-lg leading-none">
                          −
                        </button>
                        <span className="text-white font-bold text-lg w-5 text-center">{c.value}</span>
                        <button onClick={() => c.set(Math.min(c.max, c.value+1))}
                          className="w-7 h-7 rounded-full bg-white/15 hover:bg-white/30 text-white flex items-center justify-center transition-colors cursor-pointer font-bold text-lg leading-none">
                          +
                        </button>
                      </div>
                    ))}
                  </div>
                  <div className="mt-2 text-center">
                    <button onClick={() => setOpen(null)}
                      className="text-[#C9A84C] text-xs font-semibold hover:text-[#C9A84C]/80 transition-colors cursor-pointer">
                      Done ✓
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* ── Search button ── */}
            <motion.button
              onClick={handleSearch}
              whileHover={{ scale: plannerComplete ? 1.02 : 1 }}
              whileTap={{ scale: plannerComplete ? 0.98 : 1 }}
              className={`w-full py-3.5 rounded-xl sm:rounded-2xl font-bold text-sm sm:text-base flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer ${
                plannerComplete
                  ? "bg-[#C9A84C] hover:bg-[#d4b55a] text-[#1B4332] shadow-lg shadow-[#C9A84C]/30"
                  : "bg-white/15 text-white/80 border border-white/30"
              }`}
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width={17} height={17}>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.852L.057 23.57a.75.75 0 0 0 .918.919l5.85-1.486A11.95 11.95 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 0 1-5.01-1.374l-.36-.214-3.724.946.98-3.62-.234-.372A9.818 9.818 0 1 1 12 21.818z"/>
              </svg>
              {plannerComplete
                ? "Plan My Kashmir Trip →"
                : <><span className="sm:hidden">Select destination first</span><span className="hidden sm:inline">Select destination &amp; month to continue</span></>
              }
            </motion.button>

            {!plannerComplete && (
              <p className="text-center text-white/30 text-[10px] mt-2">
                {!selDest ? "Pick a destination to get started" : "Now choose your travel month"}
              </p>
            )}
          </div>
        </motion.div>

        {/* Slide dots */}
        <div className="flex gap-2 mt-6">
          {slides.map((_, i) => (
            <button key={i} onClick={() => setSlide(i)}
              className={`transition-all duration-300 rounded-full cursor-pointer ${i===slide ? "w-8 h-2.5 bg-[#C9A84C]" : "w-2.5 h-2.5 bg-white/40 hover:bg-white/70"}`}
            />
          ))}
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:1.2 }}
        className="relative z-10 flex justify-center pb-6 sm:pb-8">
        <a href="#stats" className="animate-bounce-slow flex flex-col items-center text-white/60 hover:text-white transition-colors">
          <span className="text-[10px] uppercase tracking-widest mb-1">Scroll</span>
          <ChevronDown size={18} />
        </a>
      </motion.div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 z-10 pointer-events-none">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 60V30C360 0 720 60 1080 30C1260 15 1380 40 1440 30V60H0Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}