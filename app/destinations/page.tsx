import type { Metadata }         from "next";
import { destinationData }       from "@/lib/destinations";
import Link                      from "next/link";
import Navbar                    from "@/components/Navbar";
import Footer                    from "@/components/Footer";
import { MapPin, Mountain, Thermometer, Calendar, ArrowRight } from "lucide-react";

const SITE_URL = "https://www.huntkashmir365.com";
const pageUrl  = `${SITE_URL}/destinations`;

export const metadata: Metadata = {
  title:       "All Kashmir Destinations — Dal Lake, Gulmarg, Pahalgam, Sonamarg & More",
  description: "Explore all top Kashmir destinations with Hunt Kashmir 365. Dal Lake houseboats, Gulmarg gondola, Pahalgam valley, Sonamarg glaciers, Yusmarg meadows, Betaab Valley, Doodhpathri. Book your perfect Kashmir tour.",
  keywords: [
    "Kashmir destinations",
    "places to visit in Kashmir",
    "top tourist places Kashmir",
    "Dal Lake Srinagar",
    "Gulmarg tour",
    "Pahalgam tour",
    "Sonamarg tour",
    "Yusmarg tour",
    "Betaab Valley tour",
    "Doodhpathri tour",
    "Kashmir tourism 2025",
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    title:       "All Kashmir Destinations | Hunt Kashmir 365",
    description: "Discover every corner of Kashmir — Dal Lake, Gulmarg, Pahalgam, Sonamarg, Yusmarg, Betaab Valley & Doodhpathri.",
    url:         pageUrl,
    type:        "website",
    images: [{
      url:    "https://images.unsplash.com/photo-1715457573748-8e8a70b2c1be?w=1200&q=80",
      width:  1200,
      height: 630,
      alt:    "Kashmir Destinations — Hunt Kashmir 365",
    }],
  },
};

/* ── JSON-LD: BreadcrumbList + ItemList ─────────────────────────────────── */
const pageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home",         item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Destinations", item: pageUrl  },
      ],
    },
    {
      "@type":           "CollectionPage",
      "@id":             pageUrl,
      name:              "All Kashmir Destinations",
      description:       "Explore top Kashmir tourist destinations offered by Hunt Kashmir 365.",
      url:               pageUrl,
      isPartOf:          { "@id": `${SITE_URL}/#website` },
      mainEntity: {
        "@type":           "ItemList",
        name:              "Kashmir Tourist Destinations",
        numberOfItems:     destinationData.length,
        itemListElement:   destinationData.map((dest, idx) => ({
          "@type":    "ListItem",
          position:   idx + 1,
          name:       dest.name,
          url:        `${SITE_URL}/destinations/${dest.slug}`,
          image:      dest.heroImage,
          description: dest.description,
        })),
      },
    },
  ],
};

export default function AllDestinationsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <Navbar />
      <main className="overflow-x-hidden bg-white">

        {/* ── Hero banner ─────────────────────────────────────────────── */}
        <section className="relative bg-[#1B4332] pt-28 pb-16 px-4 text-center overflow-hidden" aria-label="Destinations hero">
          <div
            className="absolute inset-0 opacity-20"
            style={{ backgroundImage: "url(https://images.unsplash.com/photo-1715457573748-8e8a70b2c1be?w=1600&q=60)", backgroundSize: "cover", backgroundPosition: "center" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1B4332]/70 to-[#0F1923]/80" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <span className="inline-block text-[#C9A84C] font-semibold text-xs sm:text-sm uppercase tracking-widest mb-4">
              Explore Kashmir
            </span>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight mb-5">
              All Kashmir Destinations
            </h1>
            <p className="text-white/75 text-base sm:text-lg leading-relaxed max-w-xl mx-auto">
              From mirror-calm lakes to snow-dusted glaciers — every corner of
              Kashmir is a memory waiting to happen.
            </p>
          </div>
          <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
            <svg viewBox="0 0 1440 50" fill="none" aria-hidden="true">
              <path d="M0 50V25C360 0 720 50 1080 25C1260 12 1380 38 1440 25V50H0Z" fill="white" />
            </svg>
          </div>
        </section>

        {/* ── Destination cards ────────────────────────────────────────── */}
        <section className="py-16 sm:py-20 px-4 bg-white" aria-label="Destination listing">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10">
              {destinationData.map((dest) => (
                <article key={dest.slug}>
                  <Link href={`/destinations/${dest.slug}`} className="group block h-full">
                    <div className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col h-full">
                      {/* Image */}
                      <div className="relative h-64 sm:h-72 overflow-hidden">
                        <img
                          src={dest.heroImage}
                          alt={`${dest.name}, Kashmir — ${dest.tagline}`}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          loading="lazy"
                          width={800}
                          height={450}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                        <span className={`absolute top-4 left-4 text-xs font-bold px-3 py-1.5 rounded-full ${dest.badgeColor}`}>
                          {dest.badge}
                        </span>
                        <span className="absolute top-4 right-4 bg-black/40 backdrop-blur-sm text-white text-xs px-2.5 py-1.5 rounded-full font-medium">
                          {dest.tours} Tours
                        </span>
                        <div className="absolute bottom-4 left-4">
                          <h2 className="text-white font-extrabold text-2xl sm:text-3xl leading-tight">{dest.name}</h2>
                          <p className="text-[#C9A84C] text-sm font-medium italic mt-0.5">&ldquo;{dest.tagline}&rdquo;</p>
                        </div>
                      </div>

                      {/* Body */}
                      <div className="p-6 flex-1 flex flex-col">
                        <p className="text-gray-600 text-sm leading-relaxed mb-5">{dest.description}</p>

                        <div className="grid grid-cols-3 gap-3 mb-6">
                          {[
                            { icon: <Mountain size={14} aria-hidden="true" />, label: "Altitude",  val: dest.altitude   },
                            { icon: <Thermometer size={14} aria-hidden="true" />, label: "Temp",   val: dest.temperature },
                            { icon: <Calendar size={14} aria-hidden="true" />,   label: "Best Time", val: dest.bestMonth },
                          ].map((s) => (
                            <div key={s.label} className="bg-[#F8F6F0] rounded-xl p-2.5 text-center">
                              <div className="flex items-center justify-center gap-1 text-[#1B4332] mb-1">
                                {s.icon}
                                <span className="text-[10px] font-semibold uppercase tracking-wider text-gray-400">{s.label}</span>
                              </div>
                              <p className="text-[#0F1923] font-bold text-xs leading-tight">{s.val}</p>
                            </div>
                          ))}
                        </div>

                        <ul className="space-y-1.5 mb-6 flex-1" aria-label={`${dest.name} highlights`}>
                          {dest.highlights.slice(0, 3).map((h: string) => (
                            <li key={h} className="flex items-start gap-2 text-sm text-gray-600">
                              <MapPin size={12} className="text-[#C9A84C] shrink-0 mt-0.5" aria-hidden="true" />
                              {h}
                            </li>
                          ))}
                        </ul>

                        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                          <div className="flex items-center gap-1.5 text-gray-500 text-xs">
                            <MapPin size={11} className="text-[#C9A84C]" aria-hidden="true" />
                            {dest.location}
                          </div>
                          <div className="flex items-center gap-1.5 text-[#1B4332] font-bold text-sm group-hover:text-[#C9A84C] transition-colors">
                            Explore <ArrowRight size={15} aria-hidden="true" className="group-hover:translate-x-1 transition-transform inline-block" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>

            <div className="mt-14 text-center">
              <p className="text-gray-500 mb-5 text-sm sm:text-base">Can&apos;t decide? Our Kashmir experts will build your perfect itinerary.</p>
              <Link href="/#contact" className="inline-flex items-center gap-2 bg-[#1B4332] text-white px-8 py-4 rounded-full font-bold text-sm sm:text-base hover:bg-[#2D6A4F] transition-colors shadow-lg">
                Talk to a Travel Expert <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
