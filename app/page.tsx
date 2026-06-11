import type { Metadata } from "next";
import Navbar           from "@/components/Navbar";
import Hero             from "@/components/Hero";
import Stats            from "@/components/Stats";
import Destinations     from "@/components/Destinations";
import Packages         from "@/components/Packages";
import WhyChooseUs      from "@/components/WhyChooseUs";
import Gallery          from "@/components/Gallery";
import Testimonials     from "@/components/Testimonials";
import GoogleReviews    from "@/components/GoogleReviews";
import HappyCustomers   from "@/components/HappyCustomers";
import InstagramReels   from "@/components/InstagramReels";
import CTABanner        from "@/components/CTABanner";
import Contact          from "@/components/Contact";
import Footer           from "@/components/Footer";
import ParallaxDivider  from "@/components/ParallaxDivider";

const SITE_URL = "https://www.huntkashmir365.com";

export const metadata: Metadata = {
  title:       "Hunt Kashmir 365 — #1 Kashmir Tour & Travel Agency | Dal Lake, Gulmarg, Pahalgam",
  description: "Book premium Kashmir tour packages with Hunt Kashmir 365. Honeymoon, family & adventure tours to Dal Lake, Gulmarg, Pahalgam, Sonamarg & more. 15+ years · 50,000+ travelers. Free itinerary planning. Call +91 95960 41460.",
  alternates:  { canonical: SITE_URL },
  openGraph: {
    title:       "Hunt Kashmir 365 — Kashmir Tour Packages | Dal Lake, Gulmarg, Pahalgam",
    description: "Experience paradise on Earth. Customised Kashmir tour packages — honeymoon, family, adventure & luxury. Call +91 95960 41460.",
    url:         SITE_URL,
    type:        "website",
    images: [{
      url:    "https://images.unsplash.com/photo-1715457573748-8e8a70b2c1be?w=1200&q=80",
      width:  1200,
      height: 630,
      alt:    "Dal Lake at sunrise — Hunt Kashmir 365",
    }],
  },
};

/* ── JSON-LD: WebPage + FAQPage for the homepage ────────────────────────── */
const homepageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type":       "WebPage",
      "@id":         `${SITE_URL}/#webpage`,
      url:           SITE_URL,
      name:          "Hunt Kashmir 365 — Kashmir Tour Packages",
      isPartOf:      { "@id": `${SITE_URL}/#website` },
      about:         { "@id": `${SITE_URL}/#organization` },
      description:   "Book premium Kashmir tour packages. Dal Lake houseboats, Gulmarg skiing, Pahalgam valley, Sonamarg glaciers — all in one place.",
      breadcrumb: {
        "@type":           "BreadcrumbList",
        itemListElement: [{
          "@type":    "ListItem",
          position:   1,
          name:       "Home",
          item:       SITE_URL,
        }],
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type":          "Question",
          name:             "What is the best time to visit Kashmir?",
          acceptedAnswer: { "@type": "Answer", text: "The best time to visit Kashmir is from April to June (spring/summer) for pleasant weather and blooming flowers, and September to November (autumn) for stunning foliage. December to February is ideal for snow and skiing in Gulmarg." },
        },
        {
          "@type":          "Question",
          name:             "How many days are enough for a Kashmir trip?",
          acceptedAnswer: { "@type": "Answer", text: "5–7 days is ideal for a comprehensive Kashmir trip covering Srinagar (Dal Lake), Gulmarg, and Pahalgam. For a complete experience including Sonamarg and less-visited gems like Yusmarg and Doodhpathri, 9–10 days is recommended." },
        },
        {
          "@type":          "Question",
          name:             "What is the cost of a Kashmir tour package?",
          acceptedAnswer: { "@type": "Answer", text: "Kashmir tour package costs vary by duration, group size, and comfort level. Hunt Kashmir 365 offers customised packages tailored to your budget. Contact us at +91 95960 41460 or huntkashmir365@gmail.com for a free personalised quote." },
        },
        {
          "@type":          "Question",
          name:             "Is Kashmir safe for tourists?",
          acceptedAnswer: { "@type": "Answer", text: "Yes, Kashmir is very safe for tourists. The main tourist areas — Srinagar, Gulmarg, Pahalgam, and Sonamarg — are peaceful and welcoming. Hunt Kashmir 365 provides experienced local guides and 24/7 on-ground support for complete peace of mind." },
        },
        {
          "@type":          "Question",
          name:             "Does Hunt Kashmir 365 offer honeymoon packages?",
          acceptedAnswer: { "@type": "Answer", text: "Yes! Hunt Kashmir 365 specialises in romantic Kashmir honeymoon packages featuring luxury houseboats on Dal Lake, sunset shikara rides, Betaab Valley walks, and Gulmarg gondola rides. Contact us for a customised honeymoon itinerary." },
        },
      ],
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageSchema) }}
      />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Destinations />

        <ParallaxDivider
          image="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1600&q=80"
          quote="Kashmir is not just a place — it is a feeling that lives in your heart forever."
          author="Ancient Kashmiri Proverb"
        />

        <Packages />
        <WhyChooseUs />

        <ParallaxDivider
          image="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=80"
          quote="In every walk with nature, one receives far more than he seeks."
          author="John Muir"
          flip
        />

        <Gallery />
        <Testimonials />
        <HappyCustomers />
        <GoogleReviews />
        <InstagramReels />
        <CTABanner />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
