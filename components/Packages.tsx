"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, Check, ChevronDown, MapPin, Sparkles } from "lucide-react";
import Image from "next/image";

// ─── Custom Unsplash loader ────────────────────────────────────────────────
const unsplashLoader = ({ src, width, quality }: { src: string; width: number; quality?: number }) => {
  const base = src.split("?")[0];
  return `${base}?w=${width}&q=${quality || 75}&auto=format&fit=crop`;
};

// Motion-enhanced Image
const MotionImage = motion(Image);

/* ── Types ────────────────────────────────────────────────────────────────── */
type StyleId  = "romantic"|"family"|"adventure"|"spiritual"|"luxury"|"group";
type DurId    = "short"|"medium"|"long"|"extended";
type GroupId  = "solo"|"couple"|"small"|"family"|"large";

interface Selection { style: StyleId|null; duration: DurId|null; group: GroupId|null }

/* ── Step 1 — Travel Style ────────────────────────────────────────────────── */
const travelStyles: { id: StyleId; label: string; icon: string; desc: string; img: string }[] = [
  { id:"romantic",   label:"Romantic Escape",   icon:"🌹", desc:"Honeymoon & couples",          img:"https://images.unsplash.com/photo-1715457573748-8e8a70b2c1be"  },
  { id:"family",     label:"Family Adventure",  icon:"👨‍👩‍👧", desc:"Joy for every age",             img:"https://images.unsplash.com/photo-1621232082074-1a7750ecc557"  },
  { id:"adventure",  label:"Adventure Seeker",  icon:"🧗", desc:"Skiing, treks & thrills",       img:"https://images.unsplash.com/photo-1561287437-c69a30664793"  },
  { id:"spiritual",  label:"Sacred Journey",    icon:"🙏", desc:"Pilgrimages & serenity",        img:"https://plus.unsplash.com/premium_photo-1680260413569-7e28013a3d8a" },
  { id:"luxury",     label:"Luxury Retreat",    icon:"👑", desc:"Only the very finest",          img:"https://images.unsplash.com/photo-1634041837617-b43ba4bef0a1" },
  { id:"group",      label:"Group Getaway",     icon:"🎉", desc:"Friends & colleagues",          img:"https://images.unsplash.com/photo-1646204892016-711ed35535ec" },
];

/* ── Step 2 — Duration ────────────────────────────────────────────────────── */
const durations: { id: DurId; label: string; days: string; icon: string; tag?: string }[] = [
  { id:"short",    label:"Quick Escape",       days:"3 – 4 Days",  icon:"⚡" },
  { id:"medium",   label:"Classic Kashmir",    days:"5 – 6 Days",  icon:"✨", tag:"Most Popular" },
  { id:"long",     label:"Deep Immersion",     days:"7 – 8 Days",  icon:"🗺️" },
  { id:"extended", label:"Grand Kashmir",      days:"9 + Days",    icon:"🏔️" },
];

/* ── Step 3 — Group Size ──────────────────────────────────────────────────── */
const groupSizes: { id: GroupId; label: string; people: string; icon: string }[] = [
  { id:"solo",   label:"Solo Explorer",        people:"Just me",      icon:"🚶" },
  { id:"couple", label:"Just the Two of Us",   people:"2 people",     icon:"💑" },
  { id:"small",  label:"Small Group",          people:"3 – 5 people", icon:"👫" },
  { id:"family", label:"Family",               people:"Adults + Kids", icon:"👨‍👩‍👧‍👦" },
  { id:"large",  label:"Large Group",          people:"6 + people",   icon:"👥" },
];

/* ── Itineraries ──────────────────────────────────────────────────────────── */
interface DayPlan { day: number; title: string; places: string; desc: string }
interface Itinerary {
  id: string; name: string; tagline: string; image: string;
  days: number; nights: number;
  styles: StyleId[]; durations: DurId[]; groups: GroupId[];
  destinations: string[]; highlights: string[];
  includes: string[]; dayPlan: DayPlan[];
  badge?: string; badgeColor?: string;
}

const itineraries: Itinerary[] = [
  {
    id:"honeymoon-bliss",
    name:"Honeymoon Bliss",
    tagline:"Romance woven into every sunset",
    image:"https://images.unsplash.com/photo-1715457573748-8e8a70b2c1be",
    days:5, nights:4,
    styles:["romantic","luxury"],
    durations:["medium"],
    groups:["couple"],
    destinations:["Dal Lake","Pahalgam","Betaab Valley"],
    highlights:["Luxury houseboat on Dal Lake","Private sunset shikara","Betaab Valley stroll","Lidder River picnic"],
    includes:["Heritage houseboat","All meals","Private cab","Expert guide","Shikara ride"],
    dayPlan:[
      { day:1, title:"Arrival in Paradise",       places:"Srinagar · Dal Lake",     desc:"VIP airport welcome, houseboat check-in, magical golden-hour shikara ride." },
      { day:2, title:"Gardens of the Mughals",    places:"Srinagar",                desc:"Shalimar Bagh, Nishat Bagh, Chashme Shahi — romantic garden picnic." },
      { day:3, title:"Valley of Shepherds",       places:"Pahalgam",                desc:"Scenic mountain drive, Betaab Valley walk hand-in-hand, riverside lunch." },
      { day:4, title:"Mini Switzerland",          places:"Baisaran · Aru Valley",   desc:"Pony ride to Baisaran meadows, sunset at Aru Valley — completely serene." },
      { day:5, title:"Farewell to Heaven",        places:"Dal Lake · Airport",      desc:"Dawn floating market shikara, souvenir shopping, fond farewell." },
    ],
    badge:"Most Booked", badgeColor:"bg-rose-500",
  },
  {
    id:"grand-romance",
    name:"Grand Romance",
    tagline:"Eight days of pure Kashmiri magic",
    image:"https://images.unsplash.com/photo-1596083332905-666e9acf8807",
    days:8, nights:7,
    styles:["romantic","luxury"],
    durations:["long","extended"],
    groups:["couple"],
    destinations:["Dal Lake","Gulmarg","Pahalgam","Sonamarg"],
    highlights:["Heritage houseboat & 5-star hotel","Gulmarg gondola sunset","Sonamarg glacier walk","Betaab Valley & Baisaran"],
    includes:["5-star & heritage houseboat","All meals","Private cab throughout","Gondola tickets","Personal photographer"],
    dayPlan:[
      { day:1, title:"Welcome to Paradise",       places:"Srinagar · Dal Lake",     desc:"Royal airport welcome, heritage houseboat, champagne sunset on the lake." },
      { day:2, title:"Mughal Love Gardens",       places:"Srinagar",                desc:"Shalimar Bagh, Nishat Bagh, Hazratbal — romantic morning stroll." },
      { day:3, title:"Meadow of Flowers",         places:"Gulmarg",                 desc:"Gondola to Kongdori, snow play, alpine café lunch — pure mountain romance." },
      { day:4, title:"Snow & Stars",              places:"Gulmarg overnight",       desc:"Sunrise on the Himalayas, evening bonfire, stargazing at 2,650 m." },
      { day:5, title:"Valley of Shepherds",       places:"Pahalgam",                desc:"Betaab Valley, riverside picnic, boutique hotel with mountain-view suite." },
      { day:6, title:"Mini Switzerland",          places:"Baisaran · Aru",          desc:"Pony to Baisaran meadows, Aru Valley trek, candlelit dinner." },
      { day:7, title:"Meadow of Gold",            places:"Sonamarg",                desc:"Glacier walk, Sindh River side — the most dramatic landscape in Kashmir." },
      { day:8, title:"Last Morning on the Lake",  places:"Dal Lake · Airport",      desc:"Floating market at dawn, last kahwa, airport send-off with memories forever." },
    ],
    badge:"Premium Pick", badgeColor:"bg-amber-500",
  },
  {
    id:"family-magic",
    name:"Family Kashmir Magic",
    tagline:"Adventures the whole family will cherish",
    image:"https://images.unsplash.com/photo-1621232082074-1a7750ecc557",
    days:7, nights:6,
    styles:["family"],
    durations:["long","medium"],
    groups:["family","small"],
    destinations:["Dal Lake","Gulmarg","Pahalgam","Sonamarg"],
    highlights:["Houseboat experience for kids","Gondola & snow play","Pony rides through meadows","Glacier walk on Thajiwas"],
    includes:["Family rooms","All meals","AC cab","Gondola (all)","Activities for kids"],
    dayPlan:[
      { day:1, title:"Welcome to Kashmir!",       places:"Srinagar · Houseboat",    desc:"Airport pickup, houseboat check-in — kids' first shikara ride!" },
      { day:2, title:"Lakes & Gardens",           places:"Srinagar",                desc:"Floating market discovery, Mughal Gardens, butterfly spotting." },
      { day:3, title:"Snow Day!",                 places:"Gulmarg",                 desc:"Gondola to Kongdori, snowball fights, snow tubing — kids go crazy!" },
      { day:4, title:"River & Forest",            places:"Pahalgam",                desc:"Betaab Valley, pony rides for the kids, Lidder River skipping stones." },
      { day:5, title:"Mini Switzerland",          places:"Baisaran",                desc:"Pony ride to Baisaran meadows — the highlight for every child." },
      { day:6, title:"Glacier Explorer",          places:"Sonamarg",                desc:"Walk on Thajiwas Glacier — touch real ancient ice, unforgettable." },
      { day:7, title:"Last Family Morning",       places:"Dal Lake · Airport",      desc:"Souvenir shopping, fond farewell — photos for a lifetime." },
    ],
  },
  {
    id:"adventure-trail",
    name:"Kashmir Adventure Trail",
    tagline:"For those who live for the thrill",
    image:"https://images.unsplash.com/photo-1561287437-c69a30664793",
    days:7, nights:6,
    styles:["adventure"],
    durations:["long","medium"],
    groups:["solo","small","large"],
    destinations:["Gulmarg","Pahalgam","Sonamarg"],
    highlights:["Gulmarg Gondola Phase I & II","Apharwat Peak trek","Lidder River rafting","Thajiwas Glacier hike"],
    includes:["Hotel & tents","Meals","4x4 cab","Gondola Phase I+II","Rafting & trek gear"],
    dayPlan:[
      { day:1, title:"Gear Up in Srinagar",       places:"Srinagar",                desc:"Arrive, gear briefing, early sleep — big days ahead." },
      { day:2, title:"Highest Gondola in Asia",   places:"Gulmarg",                 desc:"Gondola Phase II to Apharwat (4,200 m) — Himalayas at arm's reach." },
      { day:3, title:"Trek to Alpather Lake",     places:"Gulmarg",                 desc:"8 km trek through alpine wilderness to the frozen Alpather Lake." },
      { day:4, title:"Whitewater Rush",           places:"Pahalgam",                desc:"Grade II-III rafting on the Lidder River — adrenaline guaranteed." },
      { day:5, title:"Baisaran & Forest Trek",    places:"Pahalgam",                desc:"Full-day trek through pine forests to Baisaran and Tulian Lake." },
      { day:6, title:"Glacier Trek",              places:"Sonamarg",                desc:"Hike to Thajiwas Glacier, walk on ancient ice at 3,000 m." },
      { day:7, title:"Victory Lap",               places:"Srinagar · Airport",      desc:"Certificate of adventure, celebratory Wazwan feast, departure." },
    ],
    badge:"Adrenaline Rush", badgeColor:"bg-blue-500",
  },
  {
    id:"quick-getaway",
    name:"Kashmir Quick Escape",
    tagline:"Best of Kashmir in just 4 days",
    image:"https://images.unsplash.com/photo-1564327287902-0ccf559d839e",
    days:4, nights:3,
    styles:["romantic","family","group","adventure","spiritual","luxury"],
    durations:["short"],
    groups:["solo","couple","small","family","large"],
    destinations:["Srinagar","Pahalgam","Gulmarg"],
    highlights:["Arrival & Srinagar local sightseeing","Pahalgam Valley day trip","Gulmarg Gondola experience","Mughal Gardens & Dal Lake shikara"],
    includes:["Hotel","Meals","Cab","Gondola (Phase I)","Guide"],
    dayPlan:[
      { day:1, title:"Srinagar Arrival & Sightseeing", places:"Srinagar · Dal Lake", desc:"Airport welcome & hotel check-in. Visit Mughal Gardens (Shalimar Bagh, Nishat Bagh, Chashme Shahi) & Hazratbal Shrine. Optional evening Shikara ride on Dal Lake." },
      { day:2, title:"Pahalgam Day Trip",              places:"Pahalgam · Betaab Valley", desc:"Drive to Pahalgam — the 'Valley of Shepherds.' En route visit Pampore saffron fields & apple orchards. Explore Betaab Valley, Aru Valley & Chandanwari (by local union cab). Return to Srinagar." },
      { day:3, title:"Gulmarg Day Trip",               places:"Gulmarg · Gondola", desc:"Drive to Gulmarg. Enjoy breathtaking meadows & mountain views. Optional Gulmarg Gondola ride. Visit golf course, local market & scenic viewpoints. Return to Srinagar." },
      { day:4, title:"Departure",                      places:"Srinagar · Airport", desc:"After breakfast, check out from hotel. Transfer to Srinagar Airport for onward journey. Tour concludes with unforgettable memories of Kashmir." },
    ],
  },
  {
    id:"classic-kashmir",
    name:"Classic Kashmir",
    tagline:"The perfect 5-day Kashmir experience",
    image:"https://images.unsplash.com/photo-1715457573748-8e8a70b2c1be",
    days:5, nights:4,
    styles:["romantic","family","group","adventure","spiritual","luxury"],
    durations:["medium"],
    groups:["solo","couple","small","family","large"],
    destinations:["Srinagar","Pahalgam","Gulmarg","Sonamarg"],
    highlights:["Srinagar local sightseeing","Pahalgam Valley day trip","Gulmarg Gondola experience","Sonamarg & Thajiwas Glacier"],
    includes:["Hotel","All meals","AC cab","Gondola (Phase I)","Expert guide"],
    dayPlan:[
      { day:1, title:"Srinagar Arrival & Sightseeing", places:"Srinagar · Dal Lake", desc:"Arrival at Srinagar Airport & meet our representative. Hotel check-in. Visit Mughal Gardens: Shalimar Bagh, Nishat Bagh & Chashme Shahi. Visit Hazratbal Shrine. Optional evening Shikara ride on Dal Lake." },
      { day:2, title:"Pahalgam Day Trip",              places:"Pahalgam · Betaab Valley", desc:"After breakfast, drive to Pahalgam — the 'Valley of Shepherds.' En route visit Pampore saffron fields & apple orchards. Explore Pahalgam market. Optional visits by local union cab: Aru Valley, Betaab Valley & Chandanwari. Return to Srinagar." },
      { day:3, title:"Gulmarg Day Trip",               places:"Gulmarg · Gondola", desc:"After breakfast, drive to Gulmarg. Enjoy breathtaking meadows & mountain views. Optional Gulmarg Gondola ride. Visit golf course, local market & scenic viewpoints. Return to Srinagar." },
      { day:4, title:"Sonamarg Day Trip",              places:"Sonamarg · Thajiwas Glacier", desc:"After breakfast, drive to Sonamarg — the 'Meadow of Gold.' Spectacular views of glaciers, rivers & snow-capped peaks. Optional pony ride to Thajiwas Glacier. Quality time amid nature & photography spots. Return to Srinagar." },
      { day:5, title:"Departure",                      places:"Srinagar · Airport", desc:"After breakfast, check out from hotel. Transfer to Srinagar Airport for onward journey. Tour concludes with beautiful memories of Kashmir." },
    ],
    badge:"Most Popular", badgeColor:"bg-emerald-600",
  },
  {
    id:"valley-explorer",
    name:"Kashmir Valley Explorer",
    tagline:"Six days of immersive Kashmir discovery",
    image:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4",
    days:6, nights:5,
    styles:["romantic","family","group","adventure","spiritual","luxury"],
    durations:["medium","long"],
    groups:["solo","couple","small","family","large"],
    destinations:["Srinagar","Pahalgam","Gulmarg","Sonamarg"],
    highlights:["Srinagar sightseeing & Dal Lake","Overnight stay in Pahalgam","Lidder River & Betaab Valley","Gulmarg & Sonamarg day trips"],
    includes:["Hotel & Pahalgam resort","All meals","AC cab","Gondola (Phase I)","Expert guide"],
    dayPlan:[
      { day:1, title:"Srinagar Arrival & Sightseeing", places:"Srinagar · Dal Lake", desc:"Arrival at Srinagar Airport. Hotel check-in. Visit Mughal Gardens (Nishat Bagh, Shalimar Bagh, Chashme Shahi) & Hazratbal Shrine. Optional Shikara ride on Dal Lake." },
      { day:2, title:"Srinagar to Pahalgam",           places:"Pahalgam · Betaab Valley", desc:"After breakfast, drive to Pahalgam. En route visit Pampore saffron fields & apple orchards. Hotel check-in. Visit local market & Lidder River surroundings. Optional: Betaab Valley, Aru Valley & Chandanwari by local union cab." },
      { day:3, title:"Pahalgam to Srinagar",           places:"Pahalgam · Srinagar", desc:"After breakfast, leisure time in Pahalgam. Explore scenic beauty & local attractions. Drive back to Srinagar in the afternoon. Free time for shopping & personal activities." },
      { day:4, title:"Gulmarg Day Trip",               places:"Gulmarg · Gondola", desc:"After breakfast, drive to Gulmarg. Breathtaking meadows & mountain views. Optional Gulmarg Gondola ride. Visit golf course & scenic viewpoints. Return to Srinagar by evening." },
      { day:5, title:"Sonamarg Day Trip",              places:"Sonamarg · Thajiwas Glacier", desc:"After breakfast, drive to Sonamarg — the 'Meadow of Gold.' Stunning views of glaciers, rivers & snow-capped mountains. Optional pony ride to Thajiwas Glacier. Return to Srinagar in the evening." },
      { day:6, title:"Departure",                      places:"Srinagar · Airport", desc:"After breakfast, check out from hotel. Transfer to Srinagar Airport for onward journey. Tour concludes with unforgettable memories of Kashmir." },
    ],
  },
  {
    id:"sacred-kashmir",
    name:"Sacred Kashmir",
    tagline:"A journey of soul and serenity",
    image:"https://plus.unsplash.com/premium_photo-1680260413569-7e28013a3d8a",
    days:6, nights:5,
    styles:["spiritual"],
    durations:["medium","long"],
    groups:["solo","couple","small","large"],
    destinations:["Srinagar","Pahalgam","Yusmarg"],
    highlights:["Hazratbal Shrine visit","Charar-e-Sharif pilgrimage","Yusmarg solitude","Shankaracharya Temple"],
    includes:["Hotel","Meals","Cab","Guide","Permit assistance"],
    dayPlan:[
      { day:1, title:"Sacred Arrival",            places:"Srinagar",                desc:"Arrive, check in, evening prayers at Hazratbal Shrine on Dal Lake." },
      { day:2, title:"Ancient Srinagar",          places:"Srinagar",                desc:"Shankaracharya Temple at sunrise, Hari Parbat Fort, Shah Hamdan Mosque." },
      { day:3, title:"Patron Saint's Shrine",    places:"Charar-e-Sharif",         desc:"Visit the revered shrine of Nund Rishi, then Yusmarg meadow in silence." },
      { day:4, title:"Shepherd's Valley",         places:"Pahalgam",                desc:"Chandanwari snowfields, Betaab Valley meditation walk by the Lidder." },
      { day:5, title:"Alpine Solitude",           places:"Aru Valley",              desc:"Full day in Aru Valley — one of Kashmir's most peaceful spots." },
      { day:6, title:"Peaceful Departure",        places:"Srinagar · Airport",      desc:"Early morning Hazratbal dawn prayer, final blessings, departure." },
    ],
    badge:"Soul-Nourishing", badgeColor:"bg-purple-500",
  },
  {
    id:"luxury-grand",
    name:"Luxury Grand Kashmir",
    tagline:"Uncompromising. Unforgettable.",
    image:"https://images.unsplash.com/photo-1643449415644-ba803f1cd03d",
    days:9, nights:8,
    styles:["luxury","romantic"],
    durations:["extended"],
    groups:["couple","small"],
    destinations:["Dal Lake","Gulmarg","Pahalgam","Sonamarg","Yusmarg"],
    highlights:["Heritage houseboat suite","Khyber Resort stay","Private gondola reservation","Personal photographer throughout"],
    includes:["5-star & heritage houseboat","All meals & evening snacks","Private luxury cab","Gondola I & II","Personal photographer","Travel insurance"],
    dayPlan:[
      { day:1, title:"Royal Welcome",             places:"Srinagar · Heritage Boat", desc:"Rose-petal welcome, heritage houseboat, private chef dinner on the lake." },
      { day:2, title:"Mughal Gardens at Dawn",    places:"Srinagar",                 desc:"Private Shalimar Bagh sunrise tour before tourists arrive — magical." },
      { day:3, title:"Luxury in the Mountains",   places:"Gulmarg · Khyber Resort",  desc:"Check into the Khyber, gondola to Apharwat, Himalayan panorama dinner." },
      { day:4, title:"Snow & Silence",            places:"Gulmarg",                  desc:"Private snowcat ride, helicopter option to higher peaks, spa afternoon." },
      { day:5, title:"Valley of Shepherds",       places:"Pahalgam",                 desc:"Boutique lodge check-in, private Betaab Valley walk, candlelit dinner." },
      { day:6, title:"Hidden Meadows",            places:"Baisaran · Aru",           desc:"Private pony to Baisaran, sunrise photography session with guide." },
      { day:7, title:"Untouched Yusmarg",         places:"Yusmarg",                  desc:"Private meadow picnic, Nilnag Lake trek, zero crowds — pure Kashmir." },
      { day:8, title:"Meadow of Gold",            places:"Sonamarg",                 desc:"Thajiwas Glacier private trek, Sindh River sunset — breathtaking." },
      { day:9, title:"Grand Farewell",            places:"Dal Lake · Airport",       desc:"Final private shikara, Wazwan farewell feast, luxury airport transfer." },
    ],
    badge:"Ultra Premium", badgeColor:"bg-amber-600",
  },
  {
    id:"group-explorer",
    name:"Group Kashmir Explorer",
    tagline:"More people, more memories",
    image:"https://images.unsplash.com/photo-1646204894165-95ed03d988ad",
    days:7, nights:6,
    styles:["group","adventure","family"],
    durations:["long","medium"],
    groups:["large","small"],
    destinations:["Dal Lake","Gulmarg","Pahalgam","Sonamarg"],
    highlights:["Group houseboat & hotel","Gondola for the whole group","River rafting","Glacier walk"],
    includes:["Group hotel & houseboat","All meals (buffet)","Tempo traveller","Activities for all","Group discount"],
    dayPlan:[
      { day:1, title:"Group Arrives!",            places:"Srinagar · Dal Lake",     desc:"Group houseboat check-in, welcome Wazwan dinner, evening shikara." },
      { day:2, title:"Srinagar City Day",         places:"Srinagar",                desc:"Mughal Gardens, old city tour, group photo at the Boulevard." },
      { day:3, title:"Snow Day",                  places:"Gulmarg",                 desc:"Group gondola, snowball tournament, ski lessons for beginners." },
      { day:4, title:"River Adventure",           places:"Pahalgam",                desc:"Group rafting on the Lidder — shouts, laughter, unforgettable moments." },
      { day:5, title:"Betaab & Baisaran",         places:"Pahalgam",                desc:"Betaab Valley picnic, group pony ride to Baisaran meadows." },
      { day:6, title:"Glacier Day",               places:"Sonamarg",                desc:"Thajiwas Glacier walk, group camp dinner beside the Sindh River." },
      { day:7, title:"Last Group Morning",        places:"Dal Lake · Airport",      desc:"Group souvenir hunt, farewell chai, group photo on Dal Lake." },
    ],
  },
];

/* ── Scoring / filtering ──────────────────────────────────────────────────── */
function matchItineraries(sel: Selection): Itinerary[] {
  const scored = itineraries.map((it) => {
    let score = 0;
    if (sel.style    && it.styles.includes(sel.style))       score += 3;
    if (sel.duration && it.durations.includes(sel.duration)) score += 3;
    if (sel.group    && it.groups.includes(sel.group))       score += 3;
    return { it, score };
  });
  return scored
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .map((x) => x.it);
}

/* ── Include icons ────────────────────────────────────────────────────────── */
const includeIcon: Record<string, string> = {
  "Houseboat":"🛖", "Heritage houseboat":"🛖", "heritage houseboat":"🛖", "5-star & heritage houseboat":"🏨",
  "Hotel":"🏨", "Hotel & tents":"⛺", "hotel":"🏨", "All meals":"🍽️", "All meals (buffet)":"🍽️",
  "Meals":"🍽️", "All meals & evening snacks":"🍽️", "Private cab":"🚗", "AC cab":"🚗",
  "Cab":"🚗", "Private luxury cab":"🚗", "Tempo traveller":"🚌", "Guide":"🧭",
  "Expert guide":"🧭", "Personal photographer":"📸", "Gondola":"🚡", "Gondola (Phase I)":"🚡",
  "Gondola (all)":"🚡", "Gondola I & II":"🚡", "Gondola Phase I+II":"🚡",
  "Gondola tickets":"🚡", "Shikara ride":"🚣", "Shikara":"🚣",
  "Rafting & trek gear":"🎿", "Activities for kids":"🎪", "Activities for all":"🎪",
  "Travel insurance":"🛡️", "Permit assistance":"📋", "Group discount":"🎁",
};

/* ── WhatsApp message builder ─────────────────────────────────────────────── */
function buildWaMessage(sel: Selection, it: Itinerary): string {
  const style   = travelStyles.find((s) => s.id === sel.style)?.label  ?? "";
  const dur     = durations.find((d)    => d.id === sel.duration)?.days ?? "";
  const group   = groupSizes.find((g)   => g.id === sel.group)?.label   ?? "";
  return encodeURIComponent(
    `Hi Hunt Kashmir 365! 👋\n\nI'm interested in the *${it.name}* itinerary.\n\n` +
    `🗺️ Destinations: ${it.destinations.join(", ")}\n` +
    `📅 Duration: ${dur}\n` +
    `✈️ Travel style: ${style}\n` +
    `👥 Group: ${group}\n\n` +
    `Could you please share pricing and availability?\n\nThank you!`
  );
}

/* ══════════════════════════════════════════════════════════════════════════════
   MAIN COMPONENT
══════════════════════════════════════════════════════════════════════════════ */
export default function Packages() {
  const [step,    setStep]    = useState<0|1|2|3>(0);  // 0=style, 1=duration, 2=group, 3=results
  const [sel,     setSel]     = useState<Selection>({ style:null, duration:null, group:null });
  const [openDay, setOpenDay] = useState<string|null>(null);

  const results = step === 3 ? matchItineraries(sel) : [];

  const choose = (field: keyof Selection, value: string) => {
    const next = { ...sel, [field]: value as never };
    setSel(next);
    if (field === "style")    setStep(1);
    if (field === "duration") setStep(2);
    if (field === "group")    { setSel(next); setStep(3); }
  };

  const reset = () => { setSel({ style:null, duration:null, group:null }); setStep(0); setOpenDay(null); };

  /* step labels */
  const STEPS = ["Travel Style","Duration","Group Size","Your Matches"];
  const stepLabel = (s: Selection) => [
    travelStyles.find((x) => x.id === s.style)?.label,
    durations.find((x) => x.id === s.duration)?.days,
    groupSizes.find((x) => x.id === s.group)?.label,
  ];

  const slideVariants = {
    enter: { opacity:0, x:40  },
    center:{ opacity:1, x:0   },
    exit:  { opacity:0, x:-40 },
  };

  return (
    <section id="packages" className="relative py-16 sm:py-20 lg:py-24 px-4 bg-[#0F1923] overflow-hidden">

      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage:"radial-gradient(circle at 25% 25%, #C9A84C 0%, transparent 50%), radial-gradient(circle at 75% 75%, #1B4332 0%, transparent 50%)" }} />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* ── Header ──────────────────────────────────────────────────────── */}
        <div className="text-center mb-12">
          <span className="inline-block text-[#C9A84C] font-semibold text-xs sm:text-sm uppercase tracking-widest mb-3">
            Craft Your Journey
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
            Build Your Perfect<br />
            <span className="text-[#C9A84C]">Kashmir Story</span>
          </h2>
          <p className="text-white/55 text-base sm:text-lg max-w-xl mx-auto">
            Tell us how you like to travel — we'll craft a personalised itinerary and quote just for you.
          </p>
        </div>

        {/* ── Progress bar ────────────────────────────────────────────────── */}
        <div className="flex items-center justify-center gap-2 mb-10 flex-wrap">
          {STEPS.map((s, i) => (
            <div key={s} className="flex items-center gap-2">
              <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 ${
                i === step   ? "bg-[#C9A84C] text-[#1B4332]" :
                i  < step    ? "bg-[#1B4332] text-[#C9A84C] border border-[#C9A84C]/30" :
                               "bg-white/8 text-white/30 border border-white/10"
              }`}>
                <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                  i < step ? "bg-[#C9A84C]/20" : ""
                }`}>
                  {i < step ? <Check size={10} strokeWidth={3}/> : i+1}
                </span>
                <span className="hidden sm:inline">{s}</span>
                {i < step && stepLabel(sel)[i] && (
                  <span className="hidden sm:inline text-[#C9A84C]/80 font-normal">· {stepLabel(sel)[i]}</span>
                )}
              </div>
              {i < STEPS.length-1 && <div className={`w-4 sm:w-6 h-px ${i < step ? "bg-[#C9A84C]/50" : "bg-white/10"}`} />}
            </div>
          ))}
        </div>

        {/* ── Steps ───────────────────────────────────────────────────────── */}
        <AnimatePresence mode="wait">

          {/* STEP 0 — Travel Style */}
          {step === 0 && (
            <motion.div key="step0" variants={slideVariants} initial="enter" animate="center" exit="exit" transition={{ duration:0.3 }}>
              <p className="text-center text-white/60 text-sm mb-6">How do you want to experience Kashmir?</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                {travelStyles.map((style) => (
                  <motion.button
                    key={style.id}
                    onClick={() => choose("style", style.id)}
                    whileHover={{ y:-4, scale:1.02 }}
                    whileTap={{ scale:0.97 }}
                    className="relative overflow-hidden rounded-2xl aspect-[4/3] group cursor-pointer text-left"
                  >
                    <MotionImage
                      loader={unsplashLoader}
                      src={style.img}
                      alt={style.label}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      quality={75}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/10 group-hover:from-black/70 transition-all duration-300" />
                    <div className="absolute inset-0 flex flex-col justify-end p-3 sm:p-4">
                      <span className="text-2xl sm:text-3xl mb-1.5">{style.icon}</span>
                      <p className="text-white font-bold text-sm sm:text-base leading-tight">{style.label}</p>
                      <p className="text-white/60 text-xs mt-0.5">{style.desc}</p>
                    </div>
                    <div className="absolute inset-0 border-2 border-[#C9A84C] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}

          {/* STEP 1 — Duration */}
          {step === 1 && (
            <motion.div key="step1" variants={slideVariants} initial="enter" animate="center" exit="exit" transition={{ duration:0.3 }}>
              <p className="text-center text-white/60 text-sm mb-6">How long can you stay in heaven?</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                {durations.map((dur) => (
                  <motion.button
                    key={dur.id}
                    onClick={() => choose("duration", dur.id)}
                    whileHover={{ y:-4, boxShadow:"0 20px 40px rgba(0,0,0,0.4)" }}
                    whileTap={{ scale:0.97 }}
                    className="relative bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#C9A84C]/60 rounded-2xl p-5 sm:p-6 text-center cursor-pointer transition-all duration-300 group"
                  >
                    {dur.tag && (
                      <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-[#C9A84C] text-[#1B4332] text-[10px] font-bold px-3 py-0.5 rounded-full whitespace-nowrap">
                        {dur.tag}
                      </span>
                    )}
                    <div className="text-4xl mb-3">{dur.icon}</div>
                    <p className="text-white font-bold text-base sm:text-lg mb-1">{dur.label}</p>
                    <p className="text-[#C9A84C] text-sm font-semibold">{dur.days}</p>
                  </motion.button>
                ))}
              </div>
              <button onClick={() => setStep(0)} className="mt-6 flex items-center gap-1.5 text-white/40 hover:text-white/70 text-sm mx-auto transition-colors">
                <ArrowLeft size={14} /> Back
              </button>
            </motion.div>
          )}

          {/* STEP 2 — Group Size */}
          {step === 2 && (
            <motion.div key="step2" variants={slideVariants} initial="enter" animate="center" exit="exit" transition={{ duration:0.3 }}>
              <p className="text-center text-white/60 text-sm mb-6">Who's travelling with you?</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
                {groupSizes.map((g) => (
                  <motion.button
                    key={g.id}
                    onClick={() => choose("group", g.id)}
                    whileHover={{ y:-4, boxShadow:"0 20px 40px rgba(0,0,0,0.4)" }}
                    whileTap={{ scale:0.97 }}
                    className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#C9A84C]/60 rounded-2xl p-5 text-center cursor-pointer transition-all duration-300"
                  >
                    <div className="text-4xl mb-3">{g.icon}</div>
                    <p className="text-white font-bold text-sm mb-1">{g.label}</p>
                    <p className="text-white/45 text-xs">{g.people}</p>
                  </motion.button>
                ))}
              </div>
              <button onClick={() => setStep(1)} className="mt-6 flex items-center gap-1.5 text-white/40 hover:text-white/70 text-sm mx-auto transition-colors">
                <ArrowLeft size={14} /> Back
              </button>
            </motion.div>
          )}

          {/* STEP 3 — Results */}
          {step === 3 && (
            <motion.div key="step3" variants={slideVariants} initial="enter" animate="center" exit="exit" transition={{ duration:0.3 }}>
              <p className="text-center text-white/60 text-sm mb-8">
                We found <span className="text-[#C9A84C] font-bold">{results.length} perfect itineraries</span> for you
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                {results.map((it, idx) => (
                  <motion.div
                    key={it.id}
                    initial={{ opacity:0, y:30 }}
                    animate={{ opacity:1, y:0 }}
                    transition={{ delay: idx * 0.12 }}
                    className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden flex flex-col"
                  >
                    {/* Image header */}
                    <div className="relative h-44 overflow-hidden">
                      <MotionImage
                        loader={unsplashLoader}
                        src={it.image}
                        alt={it.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        quality={75}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"/>
                      {it.badge && (
                        <span className={`absolute top-3 right-3 ${it.badgeColor ?? "bg-[#C9A84C]"} text-white text-[10px] font-bold px-2.5 py-1 rounded-full`}>
                          {it.badge}
                        </span>
                      )}
                      {idx === 0 && (
                        <span className="absolute top-3 left-3 bg-[#C9A84C] text-[#1B4332] text-[10px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1">
                          <Sparkles size={9}/> Best Match
                        </span>
                      )}
                      <div className="absolute bottom-3 left-4">
                        <p className="text-white font-extrabold text-xl leading-tight">{it.name}</p>
                        <p className="text-white/65 text-xs mt-0.5 italic">{it.tagline}</p>
                      </div>
                    </div>

                    <div className="p-4 sm:p-5 flex flex-col flex-1">
                      {/* Duration & destinations */}
                      <div className="flex items-center gap-3 mb-4">
                        <span className="bg-[#1B4332]/60 text-[#C9A84C] text-xs font-bold px-3 py-1 rounded-full">
                          {it.days}D / {it.nights}N
                        </span>
                        <div className="flex flex-wrap gap-1">
                          {it.destinations.map((d) => (
                            <span key={d} className="text-white/40 text-[10px]">
                              <MapPin size={8} className="inline mr-0.5"/>{d}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Highlights */}
                      <div className="mb-4 space-y-1.5">
                        {it.highlights.slice(0,3).map((h) => (
                          <div key={h} className="flex items-start gap-2 text-xs text-white/70">
                            <Check size={11} className="text-[#C9A84C] shrink-0 mt-0.5" strokeWidth={3}/>
                            {h}
                          </div>
                        ))}
                      </div>

                      {/* Includes chips */}
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {it.includes.slice(0,4).map((inc) => (
                          <span key={inc} className="text-[10px] bg-white/8 text-white/55 px-2 py-1 rounded-lg">
                            {includeIcon[inc] ?? "✓"} {inc}
                          </span>
                        ))}
                      </div>

                      {/* Day-by-day accordion */}
                      <div className="mb-4 flex-1">
                        <button
                          onClick={() => setOpenDay(openDay === it.id ? null : it.id)}
                          className="w-full flex items-center justify-between text-xs text-white/50 hover:text-white/80 transition-colors py-1.5 border-t border-white/8"
                        >
                          <span className="font-semibold uppercase tracking-wide">Day-by-Day Itinerary</span>
                          <motion.span animate={{ rotate: openDay === it.id ? 180 : 0 }} transition={{ duration:0.2 }}>
                            <ChevronDown size={14}/>
                          </motion.span>
                        </button>
                        <AnimatePresence>
                          {openDay === it.id && (
                            <motion.div
                              initial={{ height:0, opacity:0 }}
                              animate={{ height:"auto", opacity:1 }}
                              exit={{ height:0, opacity:0 }}
                              transition={{ duration:0.3 }}
                              className="overflow-hidden"
                            >
                              <div className="pt-3 space-y-3">
                                {it.dayPlan.map((day) => (
                                  <div key={day.day} className="flex gap-3">
                                    <div className="w-7 h-7 rounded-full bg-[#C9A84C]/15 border border-[#C9A84C]/30 flex items-center justify-center shrink-0 mt-0.5">
                                      <span className="text-[#C9A84C] text-[10px] font-bold">{day.day}</span>
                                    </div>
                                    <div>
                                      <p className="text-white text-xs font-semibold">{day.title}</p>
                                      <p className="text-[#C9A84C]/70 text-[10px] mb-0.5">{day.places}</p>
                                      <p className="text-white/45 text-[10px] leading-relaxed">{day.desc}</p>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>

                      {/* CTA */}
                      <motion.a
                        href={`https://wa.me/919596041460?text=${buildWaMessage(sel, it)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale:1.02 }}
                        whileTap={{ scale:0.97 }}
                        className="w-full bg-[#25D366] hover:bg-[#1ebd5a] text-white font-bold py-3 rounded-xl text-sm flex items-center justify-center gap-2 transition-colors mt-auto"
                      >
                        <svg viewBox="0 0 24 24" fill="currentColor" width={16} height={16}>
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.852L.057 23.57a.75.75 0 0 0 .918.919l5.85-1.486A11.95 11.95 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 0 1-5.01-1.374l-.36-.214-3.724.946.98-3.62-.234-.372A9.818 9.818 0 1 1 12 21.818z"/>
                        </svg>
                        Get My Personalised Quote
                      </motion.a>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Bottom actions */}
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={() => setStep(2)}
                  className="flex items-center gap-1.5 text-white/40 hover:text-white/70 text-sm transition-colors"
                >
                  <ArrowLeft size={14}/> Change selections
                </button>
                <span className="text-white/20 hidden sm:inline">|</span>
                <button
                  onClick={reset}
                  className="flex items-center gap-1.5 text-[#C9A84C]/60 hover:text-[#C9A84C] text-sm transition-colors"
                >
                  ↺ Start over
                </button>
                <span className="text-white/20 hidden sm:inline">|</span>
                <a
                  href="/#contact"
                  className="flex items-center gap-1.5 text-white/40 hover:text-white/70 text-sm transition-colors"
                >
                  Prefer a custom itinerary? <ArrowRight size={13}/>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── Trust strip ─────────────────────────────────────────────────── */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-white/8 pt-10">
          {[
            { icon:"🛡️", label:"No Hidden Costs",    desc:"Transparent pricing" },
            { icon:"📞", label:"24/7 Support",        desc:"Always here for you"  },
            { icon:"🎯", label:"100% Customisable",   desc:"Your trip, your way"  },
          ].map((t) => (
            <div key={t.label} className="text-center">
              <div className="text-2xl mb-1.5">{t.icon}</div>
              <p className="text-white text-xs sm:text-sm font-semibold">{t.label}</p>
              <p className="text-white/35 text-xs">{t.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}