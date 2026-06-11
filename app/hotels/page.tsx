import type { Metadata } from "next";
import Navbar  from "@/components/Navbar";
import Footer  from "@/components/Footer";
import HotelsClient from "./HotelsClient";

const SITE_URL = "https://www.huntkashmir365.com";

export const metadata: Metadata = {
  title:       "Our Partner Hotels in Kashmir — Hunt Kashmir 365",
  description: "Handpicked hotels, houseboats and resorts in Kashmir by Hunt Kashmir 365. Stay in the finest properties across Srinagar, Gulmarg, Pahalgam and Sonamarg.",
  alternates:  { canonical: `${SITE_URL}/hotels` },
  openGraph: {
    title:       "Our Partner Hotels in Kashmir | Hunt Kashmir 365",
    description: "Handpicked hotels, houseboats and resorts — Srinagar, Gulmarg, Pahalgam & Sonamarg.",
    url:         `${SITE_URL}/hotels`,
    type:        "website",
    images: [{ url: "https://images.unsplash.com/photo-1715457573748-8e8a70b2c1be?w=1200&q=80", width: 1200, height: 630, alt: "Kashmir Hotels" }],
  },
};

export default function HotelsPage() {
  return (
    <>
      <Navbar />
      <main>
        <HotelsClient />
      </main>
      <Footer />
    </>
  );
}
