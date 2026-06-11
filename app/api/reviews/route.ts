import { NextResponse } from "next/server";

export const revalidate = 3600;

interface GoogleReview {
  author_name: string;
  rating: number;
  text: string;
  relative_time_description: string;
  profile_photo_url: string;
  time: number;
}

interface ReviewsResponse {
  reviews: GoogleReview[];
  source: "google" | "fallback";
}

// No hardcoded fallback — show empty so the component renders the CTA instead of fake reviews
const FALLBACK_REVIEWS: GoogleReview[] = [];

export async function GET() {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    const response: ReviewsResponse = {
      reviews: FALLBACK_REVIEWS,
      source: "fallback",
    };
    return NextResponse.json(response);
  }

  try {
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews,rating,user_ratings_total&key=${apiKey}`;
    const res = await fetch(url, { next: { revalidate: 3600 } });

    if (!res.ok) {
      throw new Error(`Google API responded with status ${res.status}`);
    }

    const data = (await res.json()) as {
      result?: { reviews?: GoogleReview[] };
      status: string;
    };

    if (data.status !== "OK" || !data.result?.reviews) {
      throw new Error(`Google API error: ${data.status}`);
    }

    const response: ReviewsResponse = {
      reviews: data.result.reviews,
      source: "google",
    };
    return NextResponse.json(response);
  } catch {
    const response: ReviewsResponse = {
      reviews: FALLBACK_REVIEWS,
      source: "fallback",
    };
    return NextResponse.json(response);
  }
}
