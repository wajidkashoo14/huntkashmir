import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/* ── Site-wide constants ─────────────────────────────────────────────────── */
export const SITE_URL = "https://www.huntkashmir365.com";
export const SITE_NAME = "Hunt Kashmir 365";
const OG_IMAGE =
  "https://images.unsplash.com/photo-1715457573748-8e8a70b2c1be?w=1200&q=80";

/* ── Root metadata ───────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default:
      "Hunt Kashmir 365 — #1 Kashmir Tour & Travel Agency | Dal Lake, Gulmarg, Pahalgam",
    template: "%s | Hunt Kashmir 365",
  },

  description:
    "Book premium Kashmir tour packages with Hunt Kashmir 365. Honeymoon, family, adventure & luxury tours to Dal Lake, Gulmarg, Pahalgam, Sonamarg & more. 15+ years experience · 50,000+ happy travelers · Call +91 95960 41460.",

  keywords: [
    "Kashmir tour packages",
    "Kashmir travel agency",
    "Dal Lake houseboat packages",
    "Gulmarg skiing tour",
    "Pahalgam honeymoon package",
    "Sonamarg glacier tour",
    "best Kashmir tour operator",
    "Kashmir trip 2025",
    "Srinagar tour packages",
    "Kashmir family tour",
    "Kashmir honeymoon packages",
    "Kashmir adventure tour",
    "Yusmarg tour",
    "Betaab Valley tour",
    "Doodhpathri tour",
    "Hunt Kashmir 365",
    "huntkashmir365",
    "Kashmir tourism",
    "houseboat Dal Lake",
    "Kashmir holiday packages from India",
  ],

  authors: [{ name: "Hunt Kashmir 365", url: SITE_URL }],
  creator: "Hunt Kashmir 365",
  publisher: "Hunt Kashmir 365",
  category: "travel",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "Hunt Kashmir 365 — #1 Kashmir Tour & Travel Agency",
    description:
      "50,000+ happy travelers. Premium Kashmir packages — Dal Lake, Gulmarg, Pahalgam & more. Call +91 95960 41460.",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Dal Lake, Srinagar — Hunt Kashmir 365 Tour Packages",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Hunt Kashmir 365 — Premium Kashmir Tour Packages",
    description:
      "Book your Kashmir dream trip. Dal Lake, Gulmarg, Pahalgam, Sonamarg & more. ✈️ 50,000+ happy travelers.",
    images: [OG_IMAGE],
  },

  alternates: { canonical: SITE_URL },

  other: {
    "geo.region": "IN-JK",
    "geo.placename": "Srinagar, Jammu & Kashmir, India",
    "geo.position": "34.0837;74.7973",
    ICBM: "34.0837, 74.7973",
  },

  verification: {
    // google: "YOUR_GOOGLE_SEARCH_CONSOLE_VERIFICATION_CODE",  // add after registering on Google Search Console
  },
};

/* ── LocalBusiness + TravelAgency JSON-LD ────────────────────────────────── */
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["TravelAgency", "LocalBusiness"],
      "@id": `${SITE_URL}/#organization`,
      name: "Hunt Kashmir 365",
      url: SITE_URL,
      logo: `${SITE_URL}/logo.png`,
      image: OG_IMAGE,
      description:
        "Premium Kashmir tour and travel agency based in Srinagar. Expert-crafted honeymoon, family, adventure, and luxury Kashmir tour packages since 2009.",
      telephone: "+91-9596041460",
      email: "huntkashmir365@gmail.com",
      foundingDate: "2009",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Gousia Complex, Khayam Chowk, Near Khyber Hospital",
        addressLocality: "Srinagar",
        addressRegion: "Jammu & Kashmir",
        postalCode: "190001",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 34.0837,
        longitude: 74.7973,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
          opens: "09:00",
          closes: "19:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Sunday"],
          opens: "10:00",
          closes: "16:00",
        },
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "5100",
        bestRating: "5",
        worstRating: "1",
      },
      priceRange: "₹₹₹",
      currenciesAccepted: "INR",
      paymentAccepted: "Cash, Credit Card, UPI, Bank Transfer",
      areaServed: { "@type": "State", name: "Jammu & Kashmir, India" },
      knowsAbout: [
        "Dal Lake houseboat tours",
        "Gulmarg skiing and gondola tours",
        "Pahalgam valley tours",
        "Sonamarg glacier tours",
        "Kashmir honeymoon packages",
        "Amarnath Yatra",
        "Kashmir adventure trekking",
        "Mughal garden tours Srinagar",
      ],
      sameAs: [
        "https://www.facebook.com/huntkashmir365",
        "https://www.instagram.com/_huntkashmir365_",
        "https://www.youtube.com/@huntkashmir365",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Hunt Kashmir 365",
      description: "Premium Kashmir tour packages and travel agency",
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "en-IN",
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${SITE_URL}/destinations?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en-IN"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://plus.unsplash.com" />
        <link rel="preconnect" href="https://videos.pexels.com" />
        <meta name="theme-color" content="#1B4332" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-[#0F1923]">
        {children}
        <WhatsAppButton />

        {/* ── Google Ads Base Tracking (Required Site-Wide) ─────────────── */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18329867340"
          strategy="afterInteractive"
        />
        <Script id="google-ads-base" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18329867340');
          `}
        </Script>
      </body>
    </html>
  );
}
