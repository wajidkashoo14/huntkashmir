import { notFound }                     from "next/navigation";
import type { Metadata }                from "next";
import { destinationData, getDestination } from "@/lib/destinations";
import DestinationDetail                from "./DestinationDetail";

const SITE_URL = "https://www.huntkashmir365.com";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return destinationData.map((d) => ({ slug: d.slug }));
}

/* ── Rich metadata per destination ─────────────────────────────────────── */
export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const dest = getDestination(slug);
  if (!dest) return {};

  const pageUrl = `${SITE_URL}/destinations/${dest.slug}`;
  const title   = `${dest.name} Tour Packages — ${dest.tagline}`;

  return {
    title,
    description: `${dest.description} Book ${dest.name} tour packages with Hunt Kashmir 365. ${dest.altitude ? `Altitude: ${dest.altitude}.` : ""} Best time: ${dest.bestMonth}.`,
    keywords: [
      `${dest.name} tour`,
      `${dest.name} tour package`,
      `${dest.name} travel`,
      `${dest.name} Kashmir`,
      `things to do in ${dest.name}`,
      `${dest.name} trip cost`,
      `${dest.name} distance from Srinagar`,
      "Kashmir tour packages",
      "Hunt Kashmir 365",
    ],
    alternates:  { canonical: pageUrl },
    openGraph: {
      title,
      description: dest.description,
      url:         pageUrl,
      type:        "article",
      images: [{
        url:    dest.heroImage,
        width:  1200,
        height: 630,
        alt:    `${dest.name}, Kashmir — Hunt Kashmir 365`,
      }],
    },
    twitter: {
      card:        "summary_large_image",
      title,
      description: dest.description,
      images:      [dest.heroImage],
    },
  };
}

/* ── JSON-LD per destination ────────────────────────────────────────────── */
function buildDestinationSchema(dest: NonNullable<ReturnType<typeof getDestination>>) {
  const pageUrl = `${SITE_URL}/destinations/${dest.slug}`;

  const schema: object[] = [
    /* BreadcrumbList */
    {
      "@context": "https://schema.org",
      "@type":    "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home",         item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Destinations", item: `${SITE_URL}/destinations` },
        { "@type": "ListItem", position: 3, name: dest.name,      item: pageUrl },
      ],
    },
    /* TouristAttraction */
    {
      "@context":   "https://schema.org",
      "@type":      "TouristAttraction",
      name:         dest.name,
      url:          pageUrl,
      description:  dest.longDescription || dest.description,
      image:        [dest.heroImage, ...(dest.images?.slice(0, 3) ?? [])],
      touristType:  ["Family", "Couple", "Adventure"],
      geo: {
        "@type":          "GeoCoordinates",
        addressCountry:   "IN",
        addressRegion:    "Jammu & Kashmir",
      },
      containedInPlace: {
        "@type":          "State",
        name:             "Jammu & Kashmir",
        addressCountry:   "IN",
      },
      isAccessibleForFree: true,
      ...(dest.activities?.length
        ? { amenityFeature: dest.activities.map((a) => ({ "@type": "LocationFeatureSpecification", name: a.name, value: true })) }
        : {}),
    },
    /* TouristTrip offered by the agency */
    {
      "@context": "https://schema.org",
      "@type":    "TouristTrip",
      name:       `${dest.name} Tour Package`,
      description: `Guided tour to ${dest.name}, Kashmir. ${dest.tagline}.`,
      image:      dest.heroImage,
      provider: {
        "@type": "TravelAgency",
        name:    "Hunt Kashmir 365",
        url:     SITE_URL,
        telephone: "+91-9596041460",
      },
      touristType: ["Family", "Couple", "Adventure", "Honeymoon"],
      offers: {
        "@type":         "Offer",
        availability:    "https://schema.org/InStock",
        priceCurrency:   "INR",
        seller: { "@type": "TravelAgency", name: "Hunt Kashmir 365" },
      },
    },
  ];

  /* FAQPage — only if destination has faqs */
  if (dest.faqs?.length) {
    schema.push({
      "@context": "https://schema.org",
      "@type":    "FAQPage",
      mainEntity: dest.faqs.map((faq) => ({
        "@type":          "Question",
        name:             faq.q,
        acceptedAnswer:   { "@type": "Answer", text: faq.a },
      })),
    });
  }

  return schema;
}

export default async function DestinationPage({ params }: { params: Params }) {
  const { slug } = await params;
  const dest = getDestination(slug);
  if (!dest) notFound();

  const schemas = buildDestinationSchema(dest!);

  return (
    <>
      {schemas.map((s, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }}
        />
      ))}
      <DestinationDetail dest={dest!} allDestinations={destinationData} />
    </>
  );
}
