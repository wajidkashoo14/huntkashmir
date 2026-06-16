import type { Metadata } from "next";
import Navbar  from "@/components/Navbar";
import Footer  from "@/components/Footer";
import HotelsClient from "./HotelsClient";

const SITE_URL = "https://www.huntkashmir365.com";

export const metadata: Metadata = {
  title:       "Al Asha Retreat & Deodar Resort — Hunt Kashmir 365 Partner Hotels",
  description: "Stay at Al Asha Retreat in Srinagar or Deodar Resort in Pahalgam — handpicked partner hotels by Hunt Kashmir 365.",
  alternates:  { canonical: `${SITE_URL}/hotels` },
  openGraph: {
    title:       "Our Partner Hotels in Kashmir | Hunt Kashmir 365",
    description: "Al Asha Retreat (Srinagar) and Deodar Resort (Pahalgam) — handpicked by Hunt Kashmir 365.",
    url:         `${SITE_URL}/hotels`,
    type:        "website",
    images: [{ url: "/hotels/al-asha-retreat/1.jpeg", width: 1200, height: 630, alt: "Hunt Kashmir 365 Partner Hotels" }],
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
