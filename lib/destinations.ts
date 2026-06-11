export interface Activity  { name: string; icon: string; desc: string }
export interface Season    { name: string; months: string; desc: string; icon: string; rating: number }
export interface Hotel     { name: string; type: string; price: string; stars: number; desc: string }
export interface Dish      { name: string; icon: string; desc: string }
export interface Tip       { icon: string; tip: string }
export interface FAQ       { q: string; a: string }
export interface Attraction{ name: string; distance: string; desc: string }

export interface Destination {
  slug: string;
  name: string;
  location: string;
  tagline: string;
  description: string;
  longDescription: string;
  history: string;
  heroImage: string;
  images: string[];
  accentColor: string;
  altitude: string;
  temperature: string;
  bestMonth: string;
  distanceFromSrinagar: string;
  activities: Activity[];
  highlights: string[];
  seasons: Season[];
  howToReach: { mode: string; desc: string }[];
  hotels: Hotel[];
  cuisine: Dish[];
  tips: Tip[];
  faqs: FAQ[];
  nearbyAttractions: Attraction[];
  badge: string;
  badgeColor: string;
  tours: number;
}

export const destinationData: Destination[] = [
  /* ═══════════════════════════════════════════════════════ DAL LAKE */
  {
    slug: "dal-lake",
    name: "Dal Lake",
    location: "Srinagar, J&K",
    tagline: "The Jewel of Kashmir",
    description:
      "Glide through shikaras, sleep on ornate houseboats, and wake to floating gardens — Dal Lake is Kashmir in its most iconic form.",
    longDescription:
      "Dal Lake is the crown jewel of Kashmir, spanning over 18 km² in the heart of Srinagar. Often called the 'Venice of the East', this iconic lake is fringed by the majestic Zabarwan Mountains and dotted with colorful shikaras, floating gardens, and centuries-old houseboats.\n\nThe lake is a living, breathing community — over 50,000 people live on and around the water. Every dawn the floating vegetable market bursts to life, with farmers paddling their produce to buyers before the world wakes up.\n\nAs the sun sets behind Hari Parbat fort and paints the sky amber and rose, a shikara ride on Dal Lake becomes a memory that lives in your heart forever.",
    history:
      "Dal Lake has been the soul of Srinagar for over 2,000 years. The Mughal emperors — Akbar, Jahangir and Shah Jahan — were so captivated by its beauty that they built spectacular gardens along its shores. Emperor Jahangir famously declared, 'If there is paradise on earth, it is here, it is here, it is here!' The lake's name derives from the Sanskrit word 'dal', meaning 'large body of water'. The tradition of living on houseboats dates to the 19th century — the British colonial administration forbade non-Kashmiris from owning land, so enterprising locals built elaborate floating homes instead, giving birth to the legendary houseboat culture that survives to this day.",
    heroImage:
      "https://images.unsplash.com/photo-1715457573748-8e8a70b2c1be?w=1920&q=80",
    images: [
      "https://images.unsplash.com/photo-1715457573748-8e8a70b2c1be?w=800&q=80",
      "https://images.unsplash.com/photo-1564327287902-0ccf559d839e?w=800&q=80",
      "https://images.unsplash.com/photo-1569852837213-00d97a707a83?w=800&q=80",
      "https://images.unsplash.com/photo-1596083332905-666e9acf8807?w=800&q=80",
      "https://images.unsplash.com/photo-1689962722504-90a73cff0ef0?w=800&q=80",
      "https://images.unsplash.com/photo-1614591276564-7b3e69347a48?w=800&q=80",
    ],
    accentColor: "#2563EB",
    altitude: "1,587 m",
    temperature: "1°C – 29°C",
    bestMonth: "Apr – Oct",
    distanceFromSrinagar: "In city",
    badge: "Most Popular",
    badgeColor: "bg-[#C9A84C] text-[#1B4332]",
    tours: 42,
    highlights: [
      "UNESCO Tentative World Heritage Site",
      "18 km² of breathtaking water expanse",
      "Over 1,000 ornate heritage houseboats",
      "Iconic floating vegetable & flower markets",
      "Three Mughal Gardens: Shalimar, Nishat, Chashme Shahi",
      "Hari Parbat Fort with panoramic views",
    ],
    activities: [
      { name: "Shikara Ride",     icon: "🚣", desc: "Glide across the lake in a traditional wooden shikara at sunrise or sunset — utterly peaceful and romantic." },
      { name: "Houseboat Stay",   icon: "🛖", desc: "Sleep in a handcrafted cedar houseboat decorated with walnut carvings, Persian rugs, and antique furnishings." },
      { name: "Floating Market",  icon: "🛒", desc: "Rise before dawn to witness the sabzi mandi — farmers selling produce from their paddling boats." },
      { name: "Mughal Gardens",   icon: "🌷", desc: "Explore the terraced Shalimar Bagh and Nishat Bagh, built by Mughal emperors centuries ago." },
      { name: "Fishing",          icon: "🎣", desc: "Try traditional Kashmiri fishing in the tranquil waters, surrounded by snow-capped peaks." },
      { name: "Photography",      icon: "📸", desc: "Every corner is a postcard — misty mornings, lotus blooms, golden hour reflections." },
    ],
    seasons: [
      { name: "Spring",  months: "Mar – May", desc: "Tulips and cherry blossoms bloom. Crisp, perfect sightseeing weather.",                icon: "🌸", rating: 5 },
      { name: "Summer",  months: "Jun – Aug", desc: "Warm, ideal for shikara rides, gardens and outdoor exploration.",                       icon: "☀️", rating: 4 },
      { name: "Autumn",  months: "Sep – Nov", desc: "Chinar trees turn gold and crimson — the most photographed season.",                    icon: "🍂", rating: 5 },
      { name: "Winter",  months: "Dec – Feb", desc: "Lake partially freezes. Snow-dusted scenery is magical but very cold.",                 icon: "❄️", rating: 3 },
    ],
    howToReach: [
      { mode: "✈️ By Air",    desc: "Fly directly to Sheikh ul-Alam International Airport, Srinagar (SXR). Daily flights from Delhi, Mumbai, Bengaluru and other major cities." },
      { mode: "🚗 By Road",   desc: "Jammu–Srinagar National Highway (NH44) connects to the rest of India. Scenic but takes 8–10 hours from Jammu." },
      { mode: "🚢 Shikara",   desc: "From the Boulevard Road or Nehru Park ghat, hop on a shikara to reach the heart of the lake in minutes." },
    ],
    hotels: [
      { name: "The Lalit Grand Palace",   type: "5-star Heritage",    price: "₹18,000/night", stars: 5, desc: "A restored royal palace overlooking Dal Lake — the grandest address in Srinagar." },
      { name: "Vivanta Dal View",         type: "5-star Luxury",      price: "₹14,000/night", stars: 5, desc: "Contemporary luxury with panoramic lake and mountain views from every room." },
      { name: "Houseboat Heritage",       type: "Heritage Houseboat", price: "₹8,000/night",  stars: 4, desc: "Handcrafted cedar houseboat on the lake — an experience unique to Kashmir." },
      { name: "Broadway Hotel",           type: "4-star Boutique",    price: "₹5,500/night",  stars: 4, desc: "Elegant property close to the Boulevard with great lake access and dining." },
    ],
    cuisine: [
      { name: "Rogan Josh",      icon: "🍖", desc: "Slow-cooked lamb in aromatic Kashmiri spices — the king of Wazwan cuisine." },
      { name: "Dum Aloo",        icon: "🥔", desc: "Baby potatoes in a rich, spiced yoghurt gravy — a vegetarian masterpiece." },
      { name: "Kahwa",           icon: "☕", desc: "Saffron-infused green tea with cinnamon, cardamom, almonds and rose petals — served in a traditional samovar." },
      { name: "Modur Pulao",     icon: "🍚", desc: "Fragrant rice cooked with dried fruits, nuts and saffron — Kashmiri festive rice at its finest." },
      { name: "Sheermal",        icon: "🥖", desc: "Soft saffron bread baked in a tandoor — perfect with noon chai." },
      { name: "Noon Chai",       icon: "🍵", desc: "Pink salted tea made with gunpowder tea leaves and milk — iconic to Kashmiri mornings." },
    ],
    tips: [
      { icon: "💡", tip: "Book houseboat stays at least 2 weeks in advance during peak season (April–June and September–October)." },
      { icon: "🌅", tip: "Take your shikara ride at sunrise — the lake is mirror-calm, the light is golden, and there are almost no tourists." },
      { icon: "🛍️", tip: "Shop for Kashmiri handicrafts (papier-mâché, pashmina, walnut wood) at the fixed-price Government Emporium to avoid being overcharged." },
      { icon: "🧥", tip: "Even in summer, carry a light jacket for shikara rides — it gets breezy on the water in the evenings." },
      { icon: "📵", tip: "Negotiate shikara prices before boarding. A 1-hour lake ride typically costs ₹300–500." },
      { icon: "🔒", tip: "Keep valuables secure on houseboats. Most reputable boats have safety lockers — ask before booking." },
    ],
    faqs: [
      { q: "What is the best time to visit Dal Lake?",              a: "April to October is ideal. Spring (April–May) brings tulips and blossoms; Autumn (Sep–Oct) is famous for golden chinar leaves. Avoid December–February unless you enjoy cold winters." },
      { q: "How much does a houseboat stay cost?",                  a: "Prices range from ₹2,500/night for basic houseboats to ₹25,000+/night for premium heritage boats. Our packages include hand-picked, verified houseboats." },
      { q: "Is Dal Lake safe for tourists?",                        a: "Yes, absolutely. Dal Lake is one of India's most visited tourist spots with a strong tourism infrastructure and friendly locals." },
      { q: "Can I swim in Dal Lake?",                               a: "Swimming is not recommended due to water quality and boat traffic. Stick to shikara rides and houseboat experiences." },
      { q: "How many days are enough for Dal Lake?",                a: "2–3 days is ideal — one for a shikara tour, one for the Mughal Gardens, and one for the floating market at dawn." },
    ],
    nearbyAttractions: [
      { name: "Shalimar Bagh",        distance: "11 km",   desc: "The grandest of Mughal gardens, built by Emperor Jahangir in 1619 as a love gift for Empress Nur Jahan." },
      { name: "Nishat Bagh",          distance: "11 km",   desc: "The 'Garden of Joy' — a 12-terraced garden with sweeping Dal Lake views, built in 1633." },
      { name: "Shankaracharya Temple",distance: "6 km",    desc: "Ancient Hindu temple atop a 1,100 ft hill with panoramic views of Srinagar and Dal Lake." },
      { name: "Hari Parbat Fort",     distance: "4 km",    desc: "18th-century Durrani fort that dominates Srinagar's skyline, with sweeping valley views." },
      { name: "Hazratbal Shrine",     distance: "8 km",    desc: "Kashmir's holiest Muslim shrine, housing a relic of Prophet Muhammad, on the western shore of Dal Lake." },
    ],
  },

  /* ═══════════════════════════════════════════════════════ GULMARG */
  {
    slug: "gulmarg",
    name: "Gulmarg",
    location: "Baramulla District, J&K",
    tagline: "The Meadow of Flowers",
    description:
      "Asia's highest gondola, world-class skiing, and meadows carpeted in wildflowers — Gulmarg is where adventure meets paradise.",
    longDescription:
      "Gulmarg — literally 'Meadow of Flowers' — sits at 2,650 metres in the Pir Panjal range, 56 km from Srinagar. Once a favourite retreat of Mughal Emperor Jahangir, today it is one of India's premier ski destinations and a year-round adventure paradise.\n\nIn winter, Gulmarg becomes a pristine white wonderland, drawing skiers from across the world to its legendary slopes. The Gulmarg Gondola, one of the highest cable cars in the world, whisks you to Kongdori (3,100 m) and Apharwat Peak (4,200 m) — where views of the Karakoram stretch to Nanga Parbat.\n\nIn summer, snow melts to reveal lush green meadows alive with wildflowers, and trekking trails offering the most spectacular vistas in the entire Himalayas. The 18-hole golf course, one of the highest in the world, adds to Gulmarg's unique allure.",
    history:
      "Gulmarg's history stretches back to the 16th century when Mughal Emperor Yusuf Shah Chak first discovered its natural beauty and named it 'Gaurimarg' (later corrupted to Gulmarg). Emperor Jahangir was so enchanted that he collected 21 species of flowers from the meadow for his royal gardens. The British fell in love with Gulmarg in the mid-19th century and developed it as a premier hill station, establishing the golf course in 1891 — one of the world's oldest mountain courses. The first ski club in Asia was founded here in 1927 by the British, making Gulmarg the cradle of skiing on the Asian continent. Today it is recognised as one of the top 10 ski resorts in Asia.",
    heroImage:
      "https://images.unsplash.com/photo-1621232082074-1a7750ecc557?w=1920&q=80",
    images: [
      "https://images.unsplash.com/photo-1621232082074-1a7750ecc557?w=800&q=80",
      "https://images.unsplash.com/photo-1627894485200-b92fb4353967?w=800&q=80",
      "https://images.unsplash.com/photo-1552098933-a5ceb0e5dd91?w=800&q=80",
      "https://images.unsplash.com/photo-1567601169793-64703dc5324a?w=800&q=80",
      "https://images.unsplash.com/photo-1568889753852-196c487a536e?w=800&q=80",
      "https://images.unsplash.com/photo-1643449416258-5c8e7ec598b1?w=800&q=80",
    ],
    accentColor: "#3B82F6",
    altitude: "2,650 m",
    temperature: "-8°C – 20°C",
    bestMonth: "Dec–Feb (ski), Jun–Sep (trek)",
    distanceFromSrinagar: "56 km",
    badge: "Adventure",
    badgeColor: "bg-blue-500 text-white",
    tours: 38,
    highlights: [
      "World's highest cable car — Gulmarg Gondola",
      "Asia's premier skiing & snowboarding destination",
      "One of the world's highest golf courses (2,650 m)",
      "Unobstructed views of Nanga Parbat (8,126 m)",
      "Alpine meadows carpeted in wildflowers in summer",
      "Kongdori and Apharwat Peak treks",
    ],
    activities: [
      { name: "Skiing",         icon: "⛷️", desc: "World-class slopes for beginners to experts. Equipment rental and certified instructors available on-site." },
      { name: "Gondola Ride",   icon: "🚡", desc: "Ride the iconic Gulmarg Gondola to Kongdori (Phase I) or Apharwat (Phase II) for jaw-dropping mountain views." },
      { name: "Trekking",       icon: "🥾", desc: "Trek to Alpather Lake, Ferozepur Nallah, or Khilanmarg for stunning Himalayan vistas in summer." },
      { name: "Horse Riding",   icon: "🐎", desc: "Explore Gulmarg's meadows on horseback — a popular and scenic experience for all ages." },
      { name: "Golf",           icon: "⛳", desc: "Tee off at the Gulmarg Golf Club — one of the highest courses on Earth at 2,650 m." },
      { name: "Snow Activities",icon: "❄️", desc: "Snowboarding, snow tubing, sledging, snowball fights — Gulmarg's winter playground is pure joy!" },
    ],
    seasons: [
      { name: "Spring",  months: "Mar – May", desc: "Snow melts, wildflowers emerge. Ideal for horse riding and nature walks.",                     icon: "🌸", rating: 4 },
      { name: "Summer",  months: "Jun – Sep", desc: "Green meadows and clear skies. Best for trekking, golf, and family trips.",                     icon: "☀️", rating: 5 },
      { name: "Autumn",  months: "Oct – Nov", desc: "Golden colours, early snowfall on peaks. Magical photography season.",                          icon: "🍂", rating: 4 },
      { name: "Winter",  months: "Dec – Feb", desc: "Peak ski season. Fresh powder and gondola rides above the clouds.",                             icon: "⛷️", rating: 5 },
    ],
    howToReach: [
      { mode: "✈️ By Air",    desc: "Fly to Srinagar Airport (SXR), then drive 1.5 hours to Gulmarg via the scenic mountain road through Tangmarg." },
      { mode: "🚗 By Road",   desc: "Drive from Srinagar via Tangmarg (56 km). Shared taxis and private cabs are readily available from Srinagar." },
      { mode: "🐎 On Horseback", desc: "From Tangmarg, traditional horseback rides through a beautiful pine forest lead to Gulmarg meadows." },
    ],
    hotels: [
      { name: "Khyber Himalayan Resort",  type: "5-star Luxury",   price: "₹22,000/night", stars: 5, desc: "Kashmir's first 5-star mountain resort, with panoramic Himalayan views and a world-class spa." },
      { name: "The Vintage Gulmarg",      type: "4-star Heritage", price: "₹9,000/night",  stars: 4, desc: "Colonial-era property lovingly restored, combining old-world charm with modern comforts." },
      { name: "Hotel Highlands Park",     type: "4-star Classic",  price: "₹7,500/night",  stars: 4, desc: "A Gulmarg institution since the 1960s — friendly service, great views and value for money." },
      { name: "Snow Flake Guest House",   type: "Budget Comfort",  price: "₹2,800/night",  stars: 3, desc: "Clean, cozy rooms close to the gondola — excellent base for skiers on a budget." },
    ],
    cuisine: [
      { name: "Harissa",     icon: "🥣", desc: "Slow-cooked mutton and rice porridge — a Gulmarg/Kashmiri winter morning staple cooked overnight." },
      { name: "Seekh Kebab", icon: "🍢", desc: "Minced lamb kebabs spiced with Kashmiri red chilli — grilled over charcoal and served with girda bread." },
      { name: "Tabak Maaz",  icon: "🍖", desc: "Crispy fried lamb ribs — a Wazwan classic, golden brown outside and meltingly tender inside." },
      { name: "Kashmiri Saag", icon: "🥬", desc: "Wild greens slow-cooked with mustard oil and Kashmiri spices — earthy and deeply satisfying." },
      { name: "Shufta",      icon: "🍮", desc: "Sweet dish of dried fruits, cottage cheese and sugar — a festive Kashmiri dessert." },
      { name: "Kehwa",       icon: "☕", desc: "Classic Kashmiri saffron tea with almonds, cinnamon and cardamom — perfect after a day on the slopes." },
    ],
    tips: [
      { icon: "⛷️", tip: "Book Gondola Phase II tickets online in advance — queues can be 2–3 hours long in peak winter season." },
      { icon: "🧤", tip: "In winter, carry thermal layers, waterproof gloves and snow boots. Temperatures drop to -15°C at Apharwat." },
      { icon: "📸", tip: "For the best Himalayan views, trek to Khilanmarg (a 6 km hike from Gulmarg) on a clear morning." },
      { icon: "🕐", tip: "Arrive early in summer — Gulmarg gets busy by 10am. The meadows are most peaceful at dawn." },
      { icon: "🏂", tip: "Beginners should take a 1-day ski lesson before hitting the slopes — certified instructors are available at the gondola base." },
      { icon: "🌡️", tip: "Even in June the nights are cold (8–10°C). Always carry a warm jacket regardless of the season." },
    ],
    faqs: [
      { q: "When is the best time to visit Gulmarg for skiing?",     a: "December to February is peak ski season. January typically has the most fresh powder. The gondola operates daily and ski equipment is available for rent." },
      { q: "How much does the Gondola ride cost?",                    a: "Phase I (Gulmarg to Kongdori) costs approximately ₹900/person. Phase II (Kongdori to Apharwat) costs ₹1,500/person. Book tickets online to avoid queues." },
      { q: "Can beginners ski in Gulmarg?",                          a: "Absolutely! There are gentle beginner slopes near the gondola base. Certified ski instructors offer half-day and full-day lessons for all skill levels." },
      { q: "Is Gulmarg accessible in winter?",                       a: "Yes. The Srinagar–Gulmarg road is kept clear by the BRO (Border Roads Organisation) even during heavy snowfall." },
      { q: "What should I wear visiting Gulmarg in summer?",         a: "Light layers during the day (15–22°C) and a warm jacket for evenings. Good walking shoes are essential for meadow treks." },
    ],
    nearbyAttractions: [
      { name: "Alpather Lake",    distance: "13 km",  desc: "A stunning frozen alpine lake at 4,511 m — frozen until June each year, accessible by trek or horseback from Gulmarg." },
      { name: "Khilanmarg",       distance: "6 km",   desc: "A gorgeous mini-meadow above Gulmarg offering 360-degree Himalayan panoramas — perfect sunrise/sunset spot." },
      { name: "Ningle Nallah",    distance: "8 km",   desc: "Pristine mountain stream cascading through a pine forest — popular for picnics and photography." },
      { name: "Drung Waterfall",  distance: "14 km",  desc: "A dramatic cascade on the Ferozepore Nallah — accessible by a pleasant forest walk from Tangmarg." },
      { name: "Tangmarg",         distance: "13 km",  desc: "The gateway town to Gulmarg, famous for its apple orchards and the starting point for horseback rides." },
    ],
  },

  /* ═══════════════════════════════════════════════════════ PAHALGAM */
  {
    slug: "pahalgam",
    name: "Pahalgam",
    location: "Anantnag District, J&K",
    tagline: "Valley of the Shepherds",
    description:
      "Pine-forested valleys, the crystal-clear Lidder River, romance in the air — Pahalgam is Kashmir's most beloved retreat.",
    longDescription:
      "Pahalgam — 'Valley of Shepherds' — sits at 2,740 metres, cradled between pine-forested mountains and the sparkling Lidder River, 96 km southeast of Srinagar. It is one of Kashmir's most beloved hill stations and the base camp for the sacred Amarnath Yatra pilgrimage.\n\nThe valley offers something magical for every traveller. Couples walk through Betaab Valley (named after the 1983 Bollywood film), while adventurers tackle the Tarsar Marsar trek or go white-water rafting on the Lidder.\n\nBaisaran — often called 'Mini Switzerland' — is a lush meadow accessible only on foot or horseback, offering 360-degree views of snow-draped peaks that will leave you breathless.",
    history:
      "Pahalgam has been a place of spiritual significance for thousands of years. The sacred Amarnath cave, believed to house a naturally forming Shiva lingam made of ice, has been a pilgrimage site since at least the 5th century CE. Hindu scriptures mention Pahalgam as the 'Paha Gaon' — the village of the shepherds.\n\nIn the medieval period, the valley served as a retreat for Kashmiri royalty and mystic poets. The 14th-century Sufi saint Sheikh Nuruddin Wali ('Nund Rishi') is said to have meditated in the forests around Pahalgam. The Mughals used the valley as a staging post for their journeys to the Verinag spring.\n\nIn the 20th century, Pahalgam gained international fame when it was chosen as a filming location for dozens of Bollywood classics, earning it the nickname 'Film City of Kashmir'. The 1983 film 'Betaab' was shot entirely here, and the valley where it was filmed permanently adopted the name 'Betaab Valley'.",
    heroImage:
      "https://plus.unsplash.com/premium_photo-1680260413569-7e28013a3d8a?w=1920&q=80",
    images: [
      "https://plus.unsplash.com/premium_photo-1680260413569-7e28013a3d8a?w=800&q=80",
      "https://images.unsplash.com/photo-1646204894165-95ed03d988ad?w=800&q=80",
      "https://images.unsplash.com/photo-1661747340818-df15f186554e?w=800&q=80",
      "https://images.unsplash.com/photo-1646204892016-711ed35535ec?w=800&q=80",
      "https://images.unsplash.com/photo-1641593758596-39b200b51e8d?w=800&q=80",
      "https://images.unsplash.com/photo-1706628416838-0325e29521ee?w=800&q=80",
    ],
    accentColor: "#F43F5E",
    altitude: "2,740 m",
    temperature: "0°C – 25°C",
    bestMonth: "May – Oct",
    distanceFromSrinagar: "96 km",
    badge: "Romantic",
    badgeColor: "bg-rose-500 text-white",
    tours: 29,
    highlights: [
      "Base camp for the sacred Amarnath Yatra pilgrimage",
      "Betaab Valley — Kashmir's Bollywood icon",
      "Baisaran — 'Mini Switzerland' meadows",
      "White-water rafting on the crystal River Lidder",
      "Tarsar Marsar — one of India's finest high-altitude treks",
      "Aru Valley — pristine alpine meadow and camping ground",
    ],
    activities: [
      { name: "Betaab Valley",   icon: "🎬", desc: "Walk through the lush valley made famous by the 1983 Bollywood film — stunning year-round." },
      { name: "River Rafting",   icon: "🚣", desc: "Tackle the rapids of the Lidder River — exciting Grade II-III rafting through scenic gorges." },
      { name: "Baisaran Trek",   icon: "🥾", desc: "Hike or ride to Baisaran meadows — the 'Mini Switzerland' of Kashmir with unbeatable Himalayan views." },
      { name: "Pony Rides",      icon: "🐴", desc: "Explore remote meadows on horseback — the most scenic and fun way to see Pahalgam." },
      { name: "Trout Fishing",   icon: "🎣", desc: "The Lidder River is famous for brown trout — try your luck with a rod in crystal-clear water." },
      { name: "Amarnath Trek",   icon: "⛰️", desc: "Begin the sacred Amarnath Yatra pilgrimage from Chandanwari, 16 km from Pahalgam (July–August)." },
    ],
    seasons: [
      { name: "Spring",  months: "Apr – May", desc: "Flowers bloom, river lively. Great for photography and trekking.",                          icon: "🌸", rating: 4 },
      { name: "Summer",  months: "Jun – Aug", desc: "Peak tourist season. All activities open. Amarnath Yatra in July–August.",                  icon: "☀️", rating: 5 },
      { name: "Autumn",  months: "Sep – Nov", desc: "Crisp weather, fewer crowds, golden forests. Best for serious trekkers.",                   icon: "🍂", rating: 5 },
      { name: "Winter",  months: "Dec – Mar", desc: "Heavy snowfall, very quiet and beautiful. Only for the adventurous.",                       icon: "❄️", rating: 3 },
    ],
    howToReach: [
      { mode: "✈️ By Air",   desc: "Fly to Srinagar Airport (SXR), then drive 2.5 hours to Pahalgam via Anantnag along the Srinagar–Jammu Highway." },
      { mode: "🚗 By Road",  desc: "96 km from Srinagar via the Srinagar–Leh Highway. Taxis, shared cabs and buses are available from Srinagar TRC Bus Stand." },
      { mode: "🚌 By Bus",   desc: "JKRTC buses operate regularly from Srinagar's TRC Bus Stand to Pahalgam from April to November." },
    ],
    hotels: [
      { name: "The Pine N Peak",       type: "5-star Luxury",    price: "₹16,000/night", stars: 5, desc: "Premium resort overlooking the Lidder River, with private balconies and a world-class spa." },
      { name: "Hotel Heevan Retreat",  type: "4-star Heritage",  price: "₹8,500/night",  stars: 4, desc: "Swiss chalet-style property in lush pine forest — cozy, warm and beautifully appointed." },
      { name: "Pahalgam Hotel",        type: "3-star Classic",   price: "₹4,500/night",  stars: 3, desc: "A Pahalgam institution, centrally located with river views and reliable service." },
      { name: "Alpine Guest House",    type: "Budget Comfort",   price: "₹1,800/night",  stars: 2, desc: "Clean, comfortable rooms with mountain views and home-cooked Kashmiri food." },
    ],
    cuisine: [
      { name: "Yakhni Mutton",    icon: "🍲", desc: "Mutton cooked in a yoghurt-based broth with whole spices — light, aromatic and deeply satisfying." },
      { name: "Lyodur Tschaman", icon: "🧀", desc: "Cottage cheese cooked in a turmeric and yoghurt gravy — a beloved Kashmiri Pandit dish." },
      { name: "Aab Gosht",       icon: "🥛", desc: "Lamb slow-cooked in milk — a delicate, creamy delicacy from the Wazwan feast tradition." },
      { name: "Kashmiri Bread",  icon: "🥐", desc: "Freshly baked sesame-topped girda bread from tandoor ovens — perfect with noon chai." },
      { name: "Phirni",          icon: "🍮", desc: "Ground rice pudding set in earthen bowls with saffron and rose water — Kashmir's favourite dessert." },
      { name: "Muji Chetin",     icon: "🌶️", desc: "Radish chutney with walnuts and dried red chillies — a zingy accompaniment to any Kashmiri meal." },
    ],
    tips: [
      { icon: "📅", tip: "Book accommodation at least 3 weeks ahead during the Amarnath Yatra season (July–August) — Pahalgam fills up fast." },
      { icon: "🥾", tip: "For the Baisaran trek, hire a pony at the Pahalgam pony stand — it is a 4 km walk and ponies make it fun for all ages." },
      { icon: "🌊", tip: "Rafting on the Lidder is best from May to September when the water level is ideal for adventure." },
      { icon: "🔍", tip: "Visit Aru Valley (11 km from Pahalgam) for a quieter, even more scenic alternative to the Betaab Valley." },
      { icon: "💰", tip: "Negotiate pony and taxi rates before starting. Fix prices in advance and use government-regulated operators where possible." },
      { icon: "🌿", tip: "Do not litter in the valleys — Pahalgam's natural beauty depends on responsible tourism. Carry a reusable bag." },
    ],
    faqs: [
      { q: "What is Betaab Valley?",                              a: "Betaab Valley is a scenic meadow about 15 km from Pahalgam town, named after the 1983 Bollywood film 'Betaab' starring Sunny Deol and Amrita Singh, which was shot here. It is open year-round." },
      { q: "How do I register for the Amarnath Yatra?",          a: "Amarnath Yatra registration opens every year in April on the official website (shriamarnathjishrine.com). A medical certificate is mandatory. We assist all our guests with registration." },
      { q: "Is Pahalgam safe for solo women travellers?",         a: "Yes. Pahalgam is considered one of Kashmir's safest tourist destinations with a strong police presence and very welcoming local population." },
      { q: "Can I visit Pahalgam in winter?",                     a: "Yes, but the road can get blocked by snow. Some hotels close in January. The valley looks extraordinarily beautiful under snow if you can handle cold temperatures of -10°C." },
      { q: "How far is Aru Valley from Pahalgam?",               a: "Aru Valley is 11 km from Pahalgam, reachable by road. It is a stunning alpine valley and the base for the Tarsar–Marsar trek. Quieter and less commercialised than Betaab Valley." },
    ],
    nearbyAttractions: [
      { name: "Betaab Valley",       distance: "15 km", desc: "Lush meadow made famous by Bollywood — pine trees, Lidder River, and stunning mountain backdrop." },
      { name: "Aru Valley",          distance: "11 km", desc: "Pristine alpine meadow perfect for camping and the base for multi-day high-altitude treks." },
      { name: "Chandanwari",         distance: "16 km", desc: "Starting point of the Amarnath Yatra. Stunning meadow ringed by glaciers — open May to October." },
      { name: "Baisaran",            distance: "5 km",  desc: "'Mini Switzerland' — a circular meadow ringed by dense pine forest, accessible only by foot or pony." },
      { name: "Sheshnag Lake",       distance: "25 km", desc: "A sacred alpine lake at 3,710 m on the Amarnath Yatra trail — shimmering and achingly beautiful." },
    ],
  },

  /* ═══════════════════════════════════════════════════════ SONAMARG */
  {
    slug: "sonamarg",
    name: "Sonamarg",
    location: "Ganderbal District, J&K",
    tagline: "The Meadow of Gold",
    description:
      "Shimmering glaciers, alpine meadows, the mighty Sindh River — Sonamarg is where Kashmir meets high-altitude adventure.",
    longDescription:
      "Sonamarg — 'Meadow of Gold' — earned its name from the way the sun lights up its golden meadows at dawn. Perched at 2,740 metres on the banks of the Sindh River, 87 km northeast of Srinagar, Sonamarg is the last major tourist destination before the Zojila Pass opens the gateway to Ladakh.\n\nThe star attraction is the stunning Thajiwas Glacier, a short trek from the main town, where you can walk on ancient ice and take in views almost too beautiful to be real. The glacier feeds the Sindh River, which roars through the valley with icy-blue intensity.\n\nSonamarg is also the starting point for some of Kashmir's most iconic high-altitude treks — to Vishansar Lake, Krishansar Lake, and the legendary Gangabal Twin Lakes.",
    history:
      "Sonamarg has served as a strategic and spiritual crossroads for millennia. The ancient Silk Road trade route connecting Kashmir to Central Asia passed through the Zojila Pass just above Sonamarg, making it a vital waystation for caravans carrying silk, spices and precious stones between India and the great trading cities of Samarkand and Kashgar.\n\nThe valley has also been a sacred space — the Hindus regard the Sindh River as holy and the glaciers as abodes of the gods. The Baltal route through Sonamarg is one of two pilgrimage routes to the Amarnath cave shrine.\n\nDuring the Dogra rule in the 19th century, Sonamarg became a strategic military post. In the 20th century, its development as a tourist destination was accelerated by its dramatic natural beauty and its position as the dramatic last stop before the 11,578-ft Zojila Pass — the gateway to Ladakh and the world beyond.",
    heroImage:
      "https://images.unsplash.com/photo-1561287437-c69a30664793?w=1920&q=80",
    images: [
      "https://images.unsplash.com/photo-1561287437-c69a30664793?w=800&q=80",
      "https://images.unsplash.com/photo-1634041837617-b43ba4bef0a1?w=800&q=80",
      "https://images.unsplash.com/photo-1643449415644-ba803f1cd03d?w=800&q=80",
      "https://images.unsplash.com/photo-1642781087094-0430c9390ca3?w=800&q=80",
      "https://images.unsplash.com/photo-1623996243194-fd281057d568?w=800&q=80",
      "https://images.unsplash.com/photo-1630898749795-be8eb5a48ea7?w=800&q=80",
    ],
    accentColor: "#059669",
    altitude: "2,740 m",
    temperature: "-15°C – 22°C",
    bestMonth: "May – Sep",
    distanceFromSrinagar: "87 km",
    badge: "Scenic",
    badgeColor: "bg-emerald-600 text-white",
    tours: 24,
    highlights: [
      "Thajiwas Glacier — walk on ancient, living ice",
      "Vishansar & Krishansar — twin alpine jewel lakes",
      "Gangabal Twin Lakes — one of Kashmir's finest treks",
      "Gateway to Ladakh via the dramatic Zojila Pass",
      "Sindh River — world-class fly fishing and riverside camping",
      "Baltal — alternative base camp for Amarnath Yatra",
    ],
    activities: [
      { name: "Glacier Trek",    icon: "🧊", desc: "Trek to Thajiwas Glacier and walk on ancient ice — a truly once-in-a-lifetime Himalayan experience." },
      { name: "Pony Ride",       icon: "🐴", desc: "Ride to the glacier and surrounding meadows on sturdy mountain ponies through breathtaking scenery." },
      { name: "Alpine Trekking", icon: "⛰️", desc: "Trek to Vishansar–Krishansar (5 days) or Gangabal Twin Lakes for world-class high-altitude adventure." },
      { name: "Fly Fishing",     icon: "🎣", desc: "The icy Sindh River is famous for brown trout — a dream for fishing enthusiasts in a pristine Himalayan setting." },
      { name: "Camping",         icon: "⛺", desc: "Camp beside the Sindh River under a sky bursting with stars — the most magical night in Kashmir." },
      { name: "Scenic Drive",    icon: "🚗", desc: "The drive along NH1 from Srinagar is stunning — carved through dramatic mountain gorges and pine forests." },
    ],
    seasons: [
      { name: "Spring",  months: "Apr – May", desc: "Snow melts, meadows turn vivid green. Glacier accessible with caution.",               icon: "🌸", rating: 4 },
      { name: "Summer",  months: "Jun – Sep", desc: "Best time to visit. All treks and activities fully open. Perfect weather.",           icon: "☀️", rating: 5 },
      { name: "Autumn",  months: "Oct",       desc: "Short but spectacular. Golden meadows and first snowfall on the peaks.",              icon: "🍂", rating: 4 },
      { name: "Winter",  months: "Nov – Mar", desc: "Road often closed due to heavy snow. Only for the truly adventurous.",               icon: "❄️", rating: 2 },
    ],
    howToReach: [
      { mode: "✈️ By Air",    desc: "Fly to Srinagar Airport (SXR), then drive 87 km (2.5 hours) on the scenic Srinagar–Leh Highway (NH1)." },
      { mode: "🚗 By Road",   desc: "Well-connected via NH1 from Srinagar. Taxis, shared cabs, and tourist buses are available from Srinagar." },
      { mode: "🚌 By Bus",    desc: "JKRTC runs seasonal buses from Srinagar to Sonamarg from May to October (road remains open)." },
    ],
    hotels: [
      { name: "The Glacier Retreat",    type: "4-star Resort",  price: "₹9,500/night",  stars: 4, desc: "Luxury tented and cottage resort right at the foot of the Thajiwas Glacier with stunning views." },
      { name: "Hotel Snowland",         type: "3-star Classic", price: "₹4,200/night",  stars: 3, desc: "Popular mid-range property with warm rooms, good food and helpful staff for trekking advice." },
      { name: "Tourist Bungalow J&K",   type: "Government",     price: "₹2,500/night",  stars: 2, desc: "JKTDC-run clean bungalow with basic facilities — budget-friendly and centrally located." },
      { name: "Riverside Camps",        type: "Luxury Camping", price: "₹5,500/night",  stars: 4, desc: "Premium Swiss tents with attached bathrooms on the Sindh riverbank — glamping at its finest." },
    ],
    cuisine: [
      { name: "Rogan Josh",        icon: "🍖", desc: "The definitive Kashmiri slow-cooked lamb — Sonamarg's dhabas prepare it with extra-fiery local chillies." },
      { name: "Trout Fry",         icon: "🐟", desc: "Freshly caught Sindh River brown trout, pan-fried with Kashmiri spices — a Sonamarg speciality." },
      { name: "Mutton Seekh",      icon: "🍢", desc: "Smoky charcoal-grilled mutton seekh kebabs with green chutney — popular in all Sonamarg dhabas." },
      { name: "Kahwa",             icon: "☕", desc: "Saffron and spiced green tea — the perfect warming drink after a long glacier trek." },
      { name: "Rajma Chawal",      icon: "🍛", desc: "Red kidney beans cooked in Kashmiri spices with steamed rice — a trekkers' staple and comfort food." },
      { name: "Kulcha Nihari",     icon: "🥘", desc: "Slow-cooked meat with baked kulcha bread — a hearty breakfast before a glacier hike." },
    ],
    tips: [
      { icon: "🎿", tip: "Snow slides are available at Thajiwas Glacier even in July — carry old clothes or a waterproof jacket." },
      { icon: "🏃", tip: "Altitude sickness can affect some visitors. Rest for the first few hours after arrival and drink plenty of water." },
      { icon: "🧭", tip: "For the Vishansar–Krishansar trek, hire a registered guide from the Sonamarg Tourism office. It is a 5-day route." },
      { icon: "🐟", tip: "Fishing permits for the Sindh River cost ₹200/day and are available from the J&K Fisheries Department office in Sonamarg." },
      { icon: "⛺", tip: "Book camping packages in advance for July–August when Sonamarg is packed with Amarnath Yatra pilgrims." },
      { icon: "🌅", tip: "The 'golden meadow' effect (after which Sonamarg is named) is best seen at sunrise — set your alarm for 5am!" },
    ],
    faqs: [
      { q: "What is the Thajiwas Glacier?",                          a: "Thajiwas is a 3.5 km glacier situated just 3 km from Sonamarg town. It feeds the Sindh River and can be reached by a gentle 1-hour trek or pony ride. It remains partially frozen until July." },
      { q: "Is Sonamarg road open all year?",                        a: "No. The Srinagar–Sonamarg road is usually open from May to October. Heavy snowfall from November to April often closes NH1 through the Zojila Pass area." },
      { q: "Can I do the Gangabal trek without experience?",          a: "The Gangabal trek is a moderate-to-challenging 7-day trek requiring basic fitness and proper gear. We recommend beginners go with a certified guide. We organise guided Gangabal treks with full camping support." },
      { q: "Is Sonamarg good for a family trip?",                     a: "Yes! Pony rides to the glacier, nature walks, and riverside picnics make it ideal for families. Children especially love the snow slides on the glacier in summer." },
      { q: "What is the temperature in summer at Sonamarg?",          a: "Day temperatures range from 18–22°C in July–August. Nights drop to 6–10°C even in peak summer. Always pack a warm jacket." },
    ],
    nearbyAttractions: [
      { name: "Thajiwas Glacier",     distance: "3 km",   desc: "Walk on ancient ice at 3,000 m — the most popular activity in Sonamarg, accessible by foot or pony." },
      { name: "Vishansar Lake",        distance: "24 km",  desc: "Stunning emerald alpine lake at 3,710 m on the Sonamarg–Naranag trekking route." },
      { name: "Krishansar Lake",       distance: "26 km",  desc: "Twin to Vishansar, set amid towering peaks — one of Kashmir's most beautiful high-altitude lakes." },
      { name: "Zojila Pass",           distance: "15 km",  desc: "The dramatic 11,578-ft mountain pass connecting Kashmir to Ladakh — stunning views in summer." },
      { name: "Baltal",                distance: "15 km",  desc: "Alternative base camp for the Amarnath Yatra — a wild, scenic valley at the foot of Zojila." },
    ],
  },

  /* ══════════════════════════════════════════════════════ YUSMARG */
  {
    slug: "yusmarg",
    name: "Yusmarg",
    location: "Budgam District, J&K",
    tagline: "The Untouched Meadow of Kashmir",
    description:
      "Pristine pine-ringed meadows, the musical Doodhganga River, and an almost-secret serenity — Yusmarg is Kashmir's best-kept treasure.",
    longDescription:
      "Yusmarg — meaning 'Meadow of Jesus' in Kashmiri — is a hidden gem nestled in the Pir Panjal range, 47 km southwest of Srinagar at 2,400 metres. Unlike its more famous siblings, Yusmarg remains blissfully unspoilt, drawing only those who seek peace over crowds.\n\nThe centrepiece of Yusmarg is the sparkling Doodhganga River (literally 'Milky Ganges'), whose glacial waters rush through lush alpine meadows fringed by towering Deodar and pine trees. In spring and summer, the meadow erupts in wildflowers of every colour — an artist's canvas come to life.\n\nYusmarg is also the gateway to the Sang-e-Safed glacier and the revered Nilnag Lake — two destinations barely touched by tourism, offering a sense of raw Himalayan wilderness that is increasingly hard to find anywhere in Kashmir.",
    history:
      "Yusmarg carries ancient spiritual significance — local legend holds that Jesus Christ visited this meadow during his travels through the East, lending the valley its name 'Meadow of Jesus' (Yus = Jesus, Marg = Meadow). While this tradition is not historically verified, it has woven itself deeply into the local cultural identity for centuries.\n\nThe valley was a favourite summer retreat of the Dogra rulers who governed Kashmir in the 19th and early 20th centuries. The British colonial officers also used it as a cool retreat during the harsh Indian summers.\n\nBecause of its slightly off-the-beaten-path location — requiring a dedicated detour off the main Srinagar–Jammu highway — Yusmarg never received the commercial tourism infrastructure that transformed Gulmarg and Pahalgam. This 'neglect' is precisely what has preserved its extraordinary natural beauty to this day.",
    heroImage:
      "https://images.unsplash.com/photo-1623612175509-30e97f5aa195?w=1920&q=80",
    images: [
      "https://images.unsplash.com/photo-1623612175509-30e97f5aa195?w=800&q=80",
      "https://images.unsplash.com/photo-1643449416258-5c8e7ec598b1?w=800&q=80",
      "https://images.unsplash.com/photo-1627894485200-b92fb4353967?w=800&q=80",
      "https://images.unsplash.com/photo-1552098933-a5ceb0e5dd91?w=800&q=80",
      "https://images.unsplash.com/photo-1568889753852-196c487a536e?w=800&q=80",
      "https://images.unsplash.com/photo-1621232082074-1a7750ecc557?w=800&q=80",
    ],
    accentColor: "#16A34A",
    altitude: "2,400 m",
    temperature: "2°C – 22°C",
    bestMonth: "May – Oct",
    distanceFromSrinagar: "47 km",
    badge: "Hidden Gem",
    badgeColor: "bg-green-600 text-white",
    tours: 18,
    highlights: [
      "Pristine alpine meadow with zero commercial crowds",
      "Doodhganga River — crystal-clear glacial stream",
      "Nilnag Lake — a secret high-altitude alpine lake",
      "Sang-e-Safed glacier trek for the adventurous",
      "Pine and Deodar forests perfect for nature walks",
      "Stunning sunrise views of the Pir Panjal range",
    ],
    activities: [
      { name: "Meadow Walks",    icon: "🚶", desc: "Stroll through vast flower-carpeted meadows with absolutely no crowds — pure solitude in the Himalayas." },
      { name: "Pony Rides",      icon: "🐴", desc: "Ride to Nilnag Lake and surrounding alpine pastures on sturdy mountain ponies." },
      { name: "Nilnag Lake Trek",icon: "🥾", desc: "A 6 km trek through dense pine forests to the serene Nilnag Lake — one of Kashmir's most peaceful spots." },
      { name: "River Fishing",   icon: "🎣", desc: "Fish for brown trout in the icy Doodhganga River — a relaxing half-day activity." },
      { name: "Camping",         icon: "⛺", desc: "Camp in the open meadow under a sky full of stars — no light pollution, no noise." },
      { name: "Photography",     icon: "📸", desc: "Every angle is a masterpiece — wildflowers, snow peaks, rivers, pine forests and empty meadows." },
    ],
    seasons: [
      { name: "Spring",  months: "Apr – May", desc: "Wildflowers cover the entire meadow. Magical colours and cool weather.",                    icon: "🌸", rating: 5 },
      { name: "Summer",  months: "Jun – Aug", desc: "Lush green grass, flowing river. Best for camping and trekking.",                           icon: "☀️", rating: 5 },
      { name: "Autumn",  months: "Sep – Oct", desc: "Chinar and pine trees turn golden. Very photogenic season.",                                icon: "🍂", rating: 4 },
      { name: "Winter",  months: "Nov – Mar", desc: "Covered in deep snow. Road may close. Extremely cold and quiet.",                           icon: "❄️", rating: 2 },
    ],
    howToReach: [
      { mode: "✈️ By Air",   desc: "Fly to Srinagar Airport (SXR), then drive 47 km southwest via the Yusmarg road. Takes about 1.5 hours by private cab." },
      { mode: "🚗 By Road",  desc: "From Srinagar, take the Yusmarg Road via Charar-e-Sharif. Private taxis and shared jeeps available. No direct bus service." },
      { mode: "🐎 On Horse", desc: "From the main meadow, hire ponies to reach Nilnag Lake, Sang-e-Safed glacier, and higher pastures." },
    ],
    hotels: [
      { name: "JKTDC Tourist Bungalow",  type: "Government",    price: "₹2,200/night", stars: 2, desc: "Clean, basic government-run bungalow right in the meadow — best budget option in Yusmarg." },
      { name: "Pine Wood Resort",        type: "3-star Resort",  price: "₹5,500/night", stars: 3, desc: "Cozy wooden cottages nestled in pine trees with meadow views and home-cooked Kashmiri meals." },
      { name: "Yusmarg Forest Camp",     type: "Luxury Tents",  price: "₹4,800/night", stars: 3, desc: "Premium canvas tents with attached baths on the meadow edge — glamping with Himalayan views." },
      { name: "Doodhganga Homestay",     type: "Homestay",      price: "₹1,800/night", stars: 2, desc: "Warm local family homestay by the river — authentic Kashmiri hospitality and home food." },
    ],
    cuisine: [
      { name: "Rogan Josh",     icon: "🍖", desc: "Slow-cooked lamb in Kashmiri spices — the signature Wazwan dish, found in every dhaba." },
      { name: "Dum Aloo",       icon: "🥔", desc: "Baby potatoes in rich spiced yoghurt gravy — a must-try vegetarian Kashmiri classic." },
      { name: "Trout Fry",      icon: "🐟", desc: "Freshly caught Doodhganga River trout, pan-fried with Kashmiri spices — a Yusmarg speciality." },
      { name: "Noon Chai",      icon: "🍵", desc: "Pink salted Kashmiri tea made in traditional samovars — the perfect warming cup in the meadow." },
      { name: "Modur Pulao",    icon: "🍚", desc: "Fragrant rice with dried fruits, nuts and saffron — festive and deeply satisfying." },
      { name: "Sheermal",       icon: "🥖", desc: "Saffron bread baked in tandoors — perfectly sweet and fluffy, great with kehwa." },
    ],
    tips: [
      { icon: "🌿", tip: "Yusmarg has very limited commercial services. Carry sufficient cash, snacks and water before heading there." },
      { icon: "🛡️", tip: "The road to Yusmarg is narrow and winding. Hire an experienced local driver rather than self-driving." },
      { icon: "🌅", tip: "Stay overnight to experience the meadow at dawn — misty, silent, and absolutely magical." },
      { icon: "🥾", tip: "For the Nilnag Lake trek, start early (6–7am). It is a 12 km round trip and takes a full day." },
      { icon: "🌨️", tip: "Yusmarg road can become slippery even in light rain. Check weather forecasts before travelling October–November." },
      { icon: "📵", tip: "Mobile network is very weak in Yusmarg. Download offline maps before you go." },
    ],
    faqs: [
      { q: "Why is Yusmarg called the 'Meadow of Jesus'?",    a: "The name derives from the Kashmiri words 'Yus' (Jesus) and 'Marg' (meadow). A local legend holds that Jesus Christ visited this valley during his travels through Kashmir and Central Asia, though this is a cultural tradition rather than a historical fact." },
      { q: "How far is Yusmarg from Srinagar?",               a: "Yusmarg is 47 km from Srinagar and takes approximately 1.5 hours by car. The road passes through the scenic Charar-e-Sharif town, home to a revered Sufi shrine." },
      { q: "Is Yusmarg suitable for families?",               a: "Absolutely. The flat meadow, gentle pony rides, and peaceful river make it ideal for families with children. There are no strenuous activities required to enjoy the valley." },
      { q: "Can I do a day trip to Yusmarg?",                 a: "Yes, Yusmarg is easily doable as a day trip from Srinagar. Leave by 8am, spend the day in the meadow, and return by evening. However, staying overnight transforms the experience." },
      { q: "Is Yusmarg less crowded than Gulmarg?",           a: "Significantly less crowded. Yusmarg sees perhaps 5–10% of the visitors that Gulmarg receives, which is precisely its greatest charm. You can have vast meadows almost entirely to yourself." },
    ],
    nearbyAttractions: [
      { name: "Nilnag Lake",         distance: "6 km",  desc: "A serene alpine lake ringed by pine forests — reachable by a 2-hour trek or pony ride from Yusmarg." },
      { name: "Charar-e-Sharif",     distance: "14 km", desc: "A revered Sufi shrine dedicated to Sheikh Nuruddin Wali, Kashmir's patron saint — a spiritual stopover." },
      { name: "Sang-e-Safed",        distance: "10 km", desc: "A pristine white glacier accessible only on foot or horseback — a rewarding full-day adventure." },
      { name: "Doodhganga River",    distance: "1 km",  desc: "The milky-white glacial river that cuts through Yusmarg meadow — perfect for fishing and riverside picnics." },
      { name: "Tosa Maidan",         distance: "30 km", desc: "A vast, secluded alpine meadow — one of Kashmir's largest and most remote, ideal for campers." },
    ],
  },

  /* ══════════════════════════════════════════════════ BETAAB VALLEY */
  {
    slug: "betaab-valley",
    name: "Betaab Valley",
    location: "Pahalgam, Anantnag District, J&K",
    tagline: "Where Bollywood Fell in Love with Kashmir",
    description:
      "Lush pine forests, a sparkling stream, snow-dusted peaks in the background — Betaab Valley is Kashmir at its most cinematically breathtaking.",
    longDescription:
      "Betaab Valley sits 15 km from Pahalgam town at an altitude of 2,400 metres, nestled between dense pine and fir forests with the crystal Lidder River rushing through its heart. Named after the 1983 Bollywood blockbuster film 'Betaab' starring Sunny Deol and Amrita Singh — which was shot almost entirely here — the valley has since become one of Kashmir's most iconic destinations.\n\nThe valley's beauty is almost theatrical: a wide, flat meadow carpeted in green grass and wildflowers, framed by snow-capped peaks on all sides and dense forest walls to the east and west. The Lidder River cuts through the meadow in elegant S-curves, its water so clear you can count pebbles on the riverbed.\n\nBeyond its cinematic fame, Betaab Valley is also the gateway to the Chandanwari snowfields and the first milestone on the sacred Amarnath Yatra pilgrimage route — making it a destination that blends natural beauty with deep spiritual significance.",
    history:
      "Before Bollywood discovered it, the valley was known as 'Hajan' among local shepherds who grazed their flocks in the lush meadows every summer. The valley has served as a high-altitude pasture for Kashmiri Gujjar and Bakarwal nomadic tribes for hundreds of years.\n\nThe 1983 film 'Betaab', directed by Rahul Rawail, transformed the valley's global visibility overnight. The film's iconic songs — including 'Jab Hum Jawan Honge' — were filmed against the valley's backdrop and became cultural milestones for a generation of Indian moviegoers.\n\nFollowing the film's success, the Jammu & Kashmir Tourism Department officially renamed the valley 'Betaab Valley' in honour of the film in 1984. Since then, dozens of Bollywood productions have used the valley as a filming location, cementing its status as Kashmir's 'Film Valley'. Local guides still point out the exact spots where famous film sequences were shot.",
    heroImage:
      "https://images.unsplash.com/photo-1646204892016-711ed35535ec?w=1920&q=80",
    images: [
      "https://images.unsplash.com/photo-1646204892016-711ed35535ec?w=800&q=80",
      "https://images.unsplash.com/photo-1641593758596-39b200b51e8d?w=800&q=80",
      "https://images.unsplash.com/photo-1661747340818-df15f186554e?w=800&q=80",
      "https://images.unsplash.com/photo-1706628416838-0325e29521ee?w=800&q=80",
      "https://images.unsplash.com/photo-1646204894165-95ed03d988ad?w=800&q=80",
      "https://plus.unsplash.com/premium_photo-1680260413569-7e28013a3d8a?w=800&q=80",
    ],
    accentColor: "#EC4899",
    altitude: "2,400 m",
    temperature: "0°C – 24°C",
    bestMonth: "Apr – Oct",
    distanceFromSrinagar: "111 km",
    badge: "Bollywood Icon",
    badgeColor: "bg-pink-500 text-white",
    tours: 22,
    highlights: [
      "Filming location for the iconic 1983 Bollywood film 'Betaab'",
      "Crystal-clear Lidder River flowing through green meadows",
      "Snow-capped Himalayan peaks visible from the meadow floor",
      "Gateway to Chandanwari snowfields (5 km further)",
      "Starting point of the sacred Amarnath Yatra route",
      "One of Kashmir's most photographed landscapes",
    ],
    activities: [
      { name: "Meadow Strolls",    icon: "🚶", desc: "Walk the wide, flat meadow along the Lidder River — perfect for couples and families." },
      { name: "River Crossing",    icon: "🌊", desc: "Cross the traditional wooden log bridges over the Lidder — a favourite photo opportunity." },
      { name: "Photography",       icon: "📸", desc: "Recreate iconic Bollywood shots against the pine-forest and snow-peak backdrop." },
      { name: "Pony Rides",        icon: "🐴", desc: "Ride to the far end of the meadow and up into the forest trails on horseback." },
      { name: "Chandanwari Visit", icon: "🏔️", desc: "Drive or trek 5 km further to Chandanwari's snowfields — snow available even in July." },
      { name: "Trout Fishing",     icon: "🎣", desc: "Fish for brown trout in the shallow, crystal-clear Lidder — rods and permits available in Pahalgam." },
    ],
    seasons: [
      { name: "Spring",  months: "Apr – May", desc: "Wildflowers bloom across the meadow. Crisp air, snow still on peaks. Magical.",              icon: "🌸", rating: 5 },
      { name: "Summer",  months: "Jun – Aug", desc: "Peak season. Amarnath Yatra. Vibrant green. All activities fully open.",                     icon: "☀️", rating: 5 },
      { name: "Autumn",  months: "Sep – Oct", desc: "Quieter, golden forests, fewer crowds. Best for photography.",                              icon: "🍂", rating: 4 },
      { name: "Winter",  months: "Nov – Mar", desc: "Deep snow, breathtaking but very cold. Road can close in January.",                         icon: "❄️", rating: 3 },
    ],
    howToReach: [
      { mode: "✈️ By Air",   desc: "Fly to Srinagar Airport (SXR), then drive 96 km to Pahalgam (2.5 hours), and a further 15 km to Betaab Valley." },
      { mode: "🚗 By Road",  desc: "From Pahalgam town, shared taxis and private cabs run regularly to Betaab Valley (₹300–600 return)." },
      { mode: "🐴 On Horse", desc: "Many visitors choose to ride from Pahalgam to Betaab Valley on horseback — a scenic 1.5-hour ride through the Lidder gorge." },
    ],
    hotels: [
      { name: "The Pine N Peak Resort",   type: "5-star Luxury",  price: "₹16,000/night", stars: 5, desc: "Pahalgam's finest resort, 10 min from Betaab Valley, with spa, riverside dining and panoramic mountain views." },
      { name: "Hotel Heevan Retreat",     type: "4-star Heritage",price: "₹8,500/night",  stars: 4, desc: "Swiss-chalet style property in pine forest — warm, beautifully furnished, close to the valley." },
      { name: "Forest Camp Betaab",       type: "Luxury Camping", price: "₹6,000/night",  stars: 4, desc: "Premium tents with attached baths right beside the Lidder River at the valley entrance." },
      { name: "Pahalgam Club Hotel",      type: "3-star Classic",  price: "₹3,800/night",  stars: 3, desc: "A beloved Pahalgam institution, centrally located with easy access to all valley attractions." },
    ],
    cuisine: [
      { name: "Yakhni Mutton",    icon: "🍲", desc: "Mutton in yoghurt-and-spice broth — light, fragrant, the pride of Pahalgam's kitchens." },
      { name: "Kashmiri Trout",   icon: "🐟", desc: "Freshly caught Lidder River trout grilled with local herbs and spices — a Pahalgam signature." },
      { name: "Rogan Josh",       icon: "🍖", desc: "The definitive slow-cooked lamb curry in aromatic Kashmiri red spices — unmissable." },
      { name: "Girda Bread",      icon: "🥖", desc: "Soft, sesame-topped Kashmiri flatbread baked in a tandoor — perfect with noon chai." },
      { name: "Phirni",           icon: "🍮", desc: "Chilled ground rice pudding with saffron and rose water set in earthen pots — Kashmir's favourite dessert." },
      { name: "Kehwa",            icon: "☕", desc: "Saffron and cardamom-spiced green tea — the perfect warm end to any valley day." },
    ],
    tips: [
      { icon: "🎬", tip: "Ask your guide or driver to point out the exact filming locations of the song 'Jab Hum Jawan Honge' — a fun Bollywood pilgrimage." },
      { icon: "🕐", tip: "Arrive early (before 9am) in peak season — by 11am the valley fills up with day-trippers from Pahalgam." },
      { icon: "🌊", tip: "Don't wade into the Lidder — the current is deceptively strong. Stick to the banks and bridges." },
      { icon: "🏔️", tip: "Continue 5 km beyond Betaab to Chandanwari for snowfields that remain open even in July–August." },
      { icon: "🍽️", tip: "Dhabas inside the valley serve basic meals. For quality dining, return to Pahalgam town." },
      { icon: "💰", tip: "Fix pony rates with the Pahalgam pony stand before starting — the official government rate is displayed at the stand." },
    ],
    faqs: [
      { q: "Why is it called Betaab Valley?",                     a: "The valley was named after the 1983 Bollywood film 'Betaab' starring Sunny Deol and Amrita Singh, which was shot here. The J&K Tourism Department officially renamed it Betaab Valley in 1984." },
      { q: "Can I reach Betaab Valley without a taxi?",           a: "Not easily. There's no public bus to the valley. From Pahalgam, shared taxis cost about ₹150–200 per person. Alternatively, you can walk/trek the 15 km from Pahalgam." },
      { q: "Is there an entry fee for Betaab Valley?",            a: "Yes, a nominal entry fee of ₹50–100 per person is charged at the valley entrance. Vehicles have a separate parking fee." },
      { q: "How long should I spend at Betaab Valley?",           a: "2–3 hours is enough for a leisurely meadow walk and photos. Combine with a visit to Chandanwari (5 km further) and Aru Valley (11 km from Pahalgam) to make a full day out." },
      { q: "Is Betaab Valley open in winter?",                    a: "The valley remains accessible from April to November. In winter (Dec–March), heavy snow often makes the road impassable. The meadow under snow is beautiful but requires a 4x4 vehicle." },
    ],
    nearbyAttractions: [
      { name: "Chandanwari",  distance: "5 km",   desc: "Snow slides and snowfields available even in summer — starting point of the Amarnath Yatra." },
      { name: "Pahalgam Town",distance: "15 km",  desc: "The main hub with hotels, restaurants, shops, and the famous Lidder River promenade." },
      { name: "Aru Valley",   distance: "11 km",  desc: "A quieter, more pristine alpine valley — excellent camping and the base for multi-day treks." },
      { name: "Baisaran",     distance: "20 km",  desc: "'Mini Switzerland' — a circular meadow ringed by pine forest, accessible only by foot or pony." },
      { name: "Sheshnag Lake",distance: "25 km",  desc: "Sacred alpine lake at 3,710 m on the Amarnath Yatra route — stunningly beautiful." },
    ],
  },


  /* ══════════════════════════════════════════════════ DOODHPATHRI */
  {
    slug: "doodhpathri",
    name: "Doodhpathri",
    location: "Budgam District, J&K",
    tagline: "The Valley of Milk",
    description:
      "Milky-white streams cascading through emerald meadows ringed by silver firs — Doodhpathri is Kashmir's most enchantingly named and most peacefully beautiful valley.",
    longDescription:
      "Doodhpathri — 'Valley of Milk' in Kashmiri — earns its poetic name from the milky-white frothy streams that rush through its emerald meadows, fed by the surrounding glaciers. Located 42 km west of Srinagar in the Budgam district at 2,730 metres, Doodhpathri is the perfect antidote to Kashmir's more crowded destinations.\n\nThe valley is an unbroken expanse of green — lush pastures that stretch for kilometres in every direction, grazed by flocks of sheep tended by nomadic Gujjar and Bakarwal shepherds who have used these meadows for centuries. Silver fir and pine trees ring the edges, their reflections shimmering in the milky streams below.\n\nIn summer, wildflowers cover every available inch of meadow — buttercups, forget-me-nots, purple clover and white daisies creating a patchwork of colour that photographers travel days to capture. The combination of milky waters, flower meadows, and nomadic shepherd life makes Doodhpathri one of the most authentically atmospheric places in the Kashmir Valley.",
    history:
      "Doodhpathri's name and its milky streams have given rise to one of Kashmir's most charming legends. According to local tradition, the great Sufi saint Sheikh Nuruddin Wali (Nund Rishi), Kashmir's patron saint, once passed through this valley. Thirsty, he struck his staff into the ground, and from the earth sprang a stream of milk — giving the valley its evocative name.\n\nHistorically, Doodhpathri served as a high-altitude summer grazing ground for the Gujjar and Bakarwal nomadic communities who migrated from the plains with their livestock each spring and returned before the winter snows. Their black tents, visible across the meadows in July and August, are one of the valley's most photographically compelling sights.\n\nBritish officials and Dogra rulers discovered the valley's beauty in the 19th century and used it as a hunting ground and summer retreat. The colonial-era forest rest houses, now managed by J&K Tourism, still stand in the valley.\n\nTourism infrastructure began developing in the 1990s but remains pleasingly minimal — no gondola, no ski resort, no crowded bazaar. Doodhpathri has resisted commercialisation, and that is precisely its greatest gift.",
    heroImage:
      "https://images.unsplash.com/photo-1634041837617-b43ba4bef0a1?w=1920&q=80",
    images: [
      "https://images.unsplash.com/photo-1634041837617-b43ba4bef0a1?w=800&q=80",
      "https://images.unsplash.com/photo-1642781087094-0430c9390ca3?w=800&q=80",
      "https://images.unsplash.com/photo-1623996243194-fd281057d568?w=800&q=80",
      "https://images.unsplash.com/photo-1561287437-589dfed82e17?w=800&q=80",
      "https://images.unsplash.com/photo-1643449415644-ba803f1cd03d?w=800&q=80",
      "https://images.unsplash.com/photo-1630898749795-be8eb5a48ea7?w=800&q=80",
    ],
    accentColor: "#7C3AED",
    altitude: "2,730 m",
    temperature: "0°C – 20°C",
    bestMonth: "May – Sep",
    distanceFromSrinagar: "42 km",
    badge: "Peaceful Escape",
    badgeColor: "bg-violet-600 text-white",
    tours: 12,
    highlights: [
      "Milky-white glacial streams through vast emerald meadows",
      "Completely crowd-free — one of Kashmir's most peaceful valleys",
      "Nomadic Gujjar shepherd camps — authentic traditional life",
      "Wildflower bloom in June–July — Kashmir's finest",
      "Silver fir forest walks and riverside meditation spots",
      "Stunning views of the Pir Panjal range from the meadow",
    ],
    activities: [
      { name: "Meadow Walks",       icon: "🚶", desc: "Wander through vast flower-filled meadows with only shepherd flocks and birdsong for company." },
      { name: "Stream Crossing",    icon: "💧", desc: "Wade through the milky-white shallow streams — cool, clear and irresistibly inviting." },
      { name: "Pony Rides",         icon: "🐴", desc: "Explore the far reaches of the valley on horseback, reaching viewpoints inaccessible on foot." },
      { name: "Camping",            icon: "⛺", desc: "Pitch a tent beside a stream under the stars — no light pollution, extraordinary night skies." },
      { name: "Shepherd Encounters",icon: "🐑", desc: "Meet the nomadic Gujjar and Bakarwal shepherds and learn about their ancient mountain lifestyle." },
      { name: "Photography",        icon: "📸", desc: "Milky streams, wildflower meadows, shepherd tents and snow peaks — a photographer's dream destination." },
    ],
    seasons: [
      { name: "Spring",  months: "Apr – May", desc: "Snow melts, streams run full force. Early wildflowers start to appear.",                     icon: "🌸", rating: 4 },
      { name: "Summer",  months: "Jun – Aug", desc: "Peak season. Wildflowers everywhere. Shepherds in valley. Perfect weather.",                  icon: "☀️", rating: 5 },
      { name: "Autumn",  months: "Sep – Oct", desc: "Golden meadows, quieter. Shepherds begin their descent. Crisp and clear.",                    icon: "🍂", rating: 4 },
      { name: "Winter",  months: "Nov – Mar", desc: "Heavy snow, road closed, valley inaccessible to most. For extreme adventurers only.",         icon: "❄️", rating: 1 },
    ],
    howToReach: [
      { mode: "✈️ By Air",   desc: "Fly to Srinagar Airport (SXR), then drive 42 km west via Charar-e-Sharif and Yusmarg road. Takes approximately 1.5 hours." },
      { mode: "🚗 By Road",  desc: "From Srinagar, hire a private taxi (₹1,500–2,000 return). No direct public bus service. The road is narrow but motorable May–October." },
      { mode: "🐴 On Horse", desc: "From the road head (approx 5 km before the main meadow), ponies are available for the meadow crossing and forest trails." },
    ],
    hotels: [
      { name: "JKTDC Forest Rest House", type: "Heritage Bungalow", price: "₹2,500/night", stars: 2, desc: "Colonial-era forest rest house right in the valley — basic but atmospheric, book through J&K Tourism." },
      { name: "Meadow Camp Doodhpathri", type: "Luxury Camping",    price: "₹5,000/night", stars: 3, desc: "Premium dome tents with beds, attached baths and a kitchen tent — glamping in a flower meadow." },
      { name: "Budgam Homestay",         type: "Village Homestay",  price: "₹1,500/night", stars: 2, desc: "Stay with a Kashmiri family in the nearby village — home-cooked food, warm hospitality." },
      { name: "Yusmarg Pine Resort",     type: "3-star Resort",     price: "₹5,500/night", stars: 3, desc: "15 km from Doodhpathri in nearby Yusmarg — the nearest proper hotel with full amenities." },
    ],
    cuisine: [
      { name: "Rogan Josh",         icon: "🍖", desc: "Slow-cooked lamb in Kashmiri spices — available at all local dhabas in the valley." },
      { name: "Dum Aloo",           icon: "🥔", desc: "Baby potatoes in spiced yoghurt gravy — the definitive Kashmiri vegetarian dish." },
      { name: "Fresh Dairy",        icon: "🥛", desc: "The Gujjar shepherds sell fresh milk, cream and traditional white butter — spectacularly good." },
      { name: "Shepherd's Bread",   icon: "🥖", desc: "Flatbread baked on open fire by the Gujjar shepherds — simple, smoky and unforgettable." },
      { name: "Noon Chai",          icon: "🍵", desc: "Pink salted Kashmiri tea — absolutely essential at this altitude to stay warm." },
      { name: "Wild Berry Jam",     icon: "🍓", desc: "Local women sell handmade jams from wild strawberries and raspberries gathered in the meadows." },
    ],
    tips: [
      { icon: "🌸", tip: "The best time to visit is late June–early July when both the wildflower bloom and nomadic shepherd camp are at their peak simultaneously." },
      { icon: "🚗", tip: "The road to Doodhpathri requires a sturdy vehicle — a Sumo or similar 4x4 taxi is recommended, especially after rain." },
      { icon: "🥾", tip: "Carry good walking shoes — the meadow is vast (3–4 km across) and the ground is uneven and often wet from the streams." },
      { icon: "🌨️", tip: "Weather can change very quickly at 2,730 m. Always carry a waterproof jacket regardless of the morning forecast." },
      { icon: "⛺", tip: "Book camping packages at least 2 weeks ahead in peak season (July–August) — camp slots are extremely limited." },
      { icon: "🐑", tip: "Respect the Gujjar shepherds and their flocks. Always ask permission before photographing people and their camps." },
    ],
    faqs: [
      { q: "Why are the streams in Doodhpathri white/milky?",    a: "The streams carry glacial silt — fine white powdered rock ground by the glaciers above — giving the water its characteristic milky-white appearance. The water is crystal clear when still but white when flowing fast." },
      { q: "Is Doodhpathri suitable for children?",             a: "Yes! The flat meadow, gentle streams, and pony rides make it excellent for children. Just keep them away from the faster-flowing stream sections." },
      { q: "Can I combine Doodhpathri and Yusmarg in one day?", a: "Yes. Both are in the Budgam district, 15 km apart. Start at Doodhpathri (9am–12pm), drive to Yusmarg for the afternoon, and return to Srinagar by evening. A 4x4 taxi is essential." },
      { q: "Is camping allowed in Doodhpathri meadow?",         a: "Yes, with a permit from the Forest Department. Our packages arrange all permits and provide fully equipped camping setups with cooking, bedding and guides." },
      { q: "Is there mobile network at Doodhpathri?",           a: "Very weak to no signal in the meadow itself. BSNL sometimes works. Download offline maps and inform your hotel/family before you go." },
    ],
    nearbyAttractions: [
      { name: "Yusmarg",          distance: "15 km",  desc: "The 'Meadow of Jesus' — another pristine, crowd-free valley. Combine both in a single day trip." },
      { name: "Charar-e-Sharif",  distance: "22 km",  desc: "The revered shrine of Sheikh Nuruddin Wali — Kashmir's patron saint — a spiritual and cultural landmark." },
      { name: "Tosa Maidan",      distance: "35 km",  desc: "One of Kashmir's largest and most remote alpine meadows — accessible only in summer by 4x4." },
      { name: "Budgam Wetlands",  distance: "20 km",  desc: "Important birdwatching wetlands on the western outskirts of Srinagar — great for an afternoon visit." },
      { name: "Doodhganga River", distance: "5 km",   desc: "The river fed by Doodhpathri's streams — follows the valley down to the plains, great for trout fishing." },
    ],
  },
];

export function getDestination(slug: string): Destination | undefined {
  return destinationData.find((d) => d.slug === slug);
}
