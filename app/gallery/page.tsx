import type { Metadata } from "next";
import GalleryClient    from "./GalleryClient";

const SITE_URL = "https://www.huntkashmir365.com";
const pageUrl  = `${SITE_URL}/gallery`;

export const metadata: Metadata = {
  title:       "Kashmir Photo Gallery — Dal Lake, Gulmarg, Pahalgam, Sonamarg & More",
  description: "Browse 42+ stunning photos of Kashmir — Dal Lake houseboats, Gulmarg snowfields, Pahalgam valleys, Sonamarg glaciers, Yusmarg meadows, Betaab Valley & Doodhpathri. Get inspired for your Kashmir tour.",
  keywords: [
    "Kashmir photos",
    "Kashmir photography",
    "Dal Lake pictures",
    "Gulmarg snow photos",
    "Pahalgam valley pictures",
    "Kashmir travel photography",
    "Kashmir landscape photos",
    "Kashmir tourism gallery",
    "beautiful Kashmir images",
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    title:       "Kashmir Photo Gallery | Hunt Kashmir 365",
    description: "42+ stunning Kashmir photographs — Dal Lake, Gulmarg, Pahalgam, Sonamarg & more. Get inspired for your Kashmir trip.",
    url:         pageUrl,
    type:        "website",
    images: [{
      url:    "https://images.unsplash.com/photo-1715457573748-8e8a70b2c1be?w=1200&q=80",
      width:  1200,
      height: 630,
      alt:    "Kashmir Gallery — Hunt Kashmir 365",
    }],
  },
};

/* ── JSON-LD: ImageGallery ───────────────────────────────────────────────── */
const gallerySchema = {
  "@context":   "https://schema.org",
  "@type":      "ImageGallery",
  name:         "Kashmir Photo Gallery — Hunt Kashmir 365",
  description:  "Stunning photographs from top Kashmir destinations including Dal Lake, Gulmarg, Pahalgam, Sonamarg, Yusmarg, Betaab Valley and Doodhpathri.",
  url:          pageUrl,
  author:       { "@type": "Organization", name: "Hunt Kashmir 365", url: SITE_URL },
  about: [
    { "@type": "TouristAttraction", name: "Dal Lake, Srinagar" },
    { "@type": "TouristAttraction", name: "Gulmarg" },
    { "@type": "TouristAttraction", name: "Pahalgam" },
    { "@type": "TouristAttraction", name: "Sonamarg" },
    { "@type": "TouristAttraction", name: "Yusmarg" },
    { "@type": "TouristAttraction", name: "Betaab Valley" },
    { "@type": "TouristAttraction", name: "Doodhpathri" },
  ],
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home",    item: SITE_URL  },
      { "@type": "ListItem", position: 2, name: "Gallery", item: pageUrl   },
    ],
  },
};

export default function GalleryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(gallerySchema) }}
      />
      <GalleryClient />
    </>
  );
}
