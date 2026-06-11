import React from "react";

interface Review {
  author_name: string;
  rating: number;
  text: string;
  relative_time_description: string;
  profile_photo_url: string;
  time: number;
}

interface ReviewsApiResponse {
  reviews: Review[];
  source: "google" | "fallback";
}

async function getReviews(): Promise<ReviewsApiResponse> {
  try {
    const baseUrl =
      process.env.NEXT_PUBLIC_SITE_URL ??
      (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");
    const res = await fetch(`${baseUrl}/api/reviews`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) throw new Error("Failed to fetch reviews");
    return res.json() as Promise<ReviewsApiResponse>;
  } catch {
    return { reviews: [], source: "fallback" };
  }
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill={i < rating ? "#C9A84C" : "#D1D5DB"}
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

function ReviewerAvatar({
  name,
  photoUrl,
}: {
  name: string;
  photoUrl: string;
}) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  if (photoUrl) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={photoUrl}
        alt={name}
        width={40}
        height={40}
        className="w-10 h-10 rounded-full object-cover flex-shrink-0"
      />
    );
  }

  return (
    <div
      className="w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center text-white text-sm font-semibold"
      style={{ backgroundColor: "#1B4332" }}
      aria-label={name}
    >
      {initials}
    </div>
  );
}

function GoogleLogoSmall() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Google"
    >
      <path fill="#4285F4" d="M44.5 20H24v8.5h11.7C34.2 33.9 29.6 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 5.1 29.6 3 24 3 12.4 3 3 12.4 3 24s9.4 21 21 21c10.5 0 20-7.6 20-21 0-1.4-.2-2.7-.5-4z" />
      <path fill="#34A853" d="M6.3 14.7l7 5.1C15 16.1 19.1 13 24 13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 5.1 29.6 3 24 3c-7.6 0-14.2 4.6-17.7 11.7z" />
      <path fill="#FBBC05" d="M24 45c5.5 0 10.5-1.9 14.3-5.1l-6.6-5.4C29.7 36.1 27 37 24 37c-5.6 0-10.3-3.1-11.7-7.5l-7 5.4C8.1 40.6 15.5 45 24 45z" />
      <path fill="#EA4335" d="M44.5 20H24v8.5h11.7c-.7 2.3-2.1 4.2-4 5.5l6.6 5.4C41.8 36.2 45 30.6 45 24c0-1.4-.2-2.7-.5-4z" />
    </svg>
  );
}

function GoogleLogoHeader() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Google"
    >
      <path fill="#4285F4" d="M44.5 20H24v8.5h11.7C34.2 33.9 29.6 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 5.1 29.6 3 24 3 12.4 3 3 12.4 3 24s9.4 21 21 21c10.5 0 20-7.6 20-21 0-1.4-.2-2.7-.5-4z" />
      <path fill="#34A853" d="M6.3 14.7l7 5.1C15 16.1 19.1 13 24 13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 5.1 29.6 3 24 3c-7.6 0-14.2 4.6-17.7 11.7z" />
      <path fill="#FBBC05" d="M24 45c5.5 0 10.5-1.9 14.3-5.1l-6.6-5.4C29.7 36.1 27 37 24 37c-5.6 0-10.3-3.1-11.7-7.5l-7 5.4C8.1 40.6 15.5 45 24 45z" />
      <path fill="#EA4335" d="M44.5 20H24v8.5h11.7c-.7 2.3-2.1 4.2-4 5.5l6.6 5.4C41.8 36.2 45 30.6 45 24c0-1.4-.2-2.7-.5-4z" />
    </svg>
  );
}

export default async function GoogleReviews() {
  const { reviews, source } = await getReviews();

  return (
    <section id="reviews" className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-2 mb-3">
            <GoogleLogoHeader />
            <h2
              className="text-3xl font-bold"
              style={{ color: "#1B4332" }}
            >
              What Google Says
            </h2>
          </div>
          <p className="text-gray-500 text-sm mt-1">
            Verified traveller reviews · Powered by Google
          </p>
        </div>

        {/* Cards */}
        {reviews.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {reviews.map((review, index) => (
              <article
                key={`${review.author_name}-${index}`}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 flex flex-col gap-3"
              >
                {/* Reviewer info */}
                <div className="flex items-center gap-3">
                  <ReviewerAvatar
                    name={review.author_name}
                    photoUrl={review.profile_photo_url}
                  />
                  <div className="min-w-0">
                    <p className="font-semibold text-gray-900 text-sm truncate">
                      {review.author_name}
                    </p>
                    <p className="text-xs text-gray-400">
                      {review.relative_time_description}
                    </p>
                  </div>
                </div>

                {/* Stars */}
                <StarRating rating={review.rating} />

                {/* Review text */}
                <p className="text-sm text-gray-600 leading-relaxed line-clamp-4 flex-1">
                  {review.text}
                </p>

                {/* Footer */}
                <div className="flex items-center gap-1.5 pt-1 border-t border-gray-50">
                  <GoogleLogoSmall />
                  <span className="text-xs text-gray-400">via Google</span>
                </div>
              </article>
            ))}
          </div>
        ) : (
          /* No reviews yet — show a Google review CTA card */
          <div className="flex flex-col items-center gap-6 py-6">
            <div className="flex flex-wrap justify-center gap-2">
              {[5, 5, 5, 5, 5].map((_, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 w-56 flex flex-col gap-3"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-9 h-9 rounded-full bg-gray-100 animate-pulse" />
                    <div className="flex-1 space-y-1.5">
                      <div className="h-2.5 bg-gray-100 rounded animate-pulse w-24" />
                      <div className="h-2 bg-gray-100 rounded animate-pulse w-16" />
                    </div>
                  </div>
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((__, j) => (
                      <svg key={j} width="14" height="14" viewBox="0 0 24 24" fill="#C9A84C" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                  <div className="space-y-1.5">
                    <div className="h-2 bg-gray-100 rounded animate-pulse" />
                    <div className="h-2 bg-gray-100 rounded animate-pulse w-4/5" />
                    <div className="h-2 bg-gray-100 rounded animate-pulse w-3/5" />
                  </div>
                </div>
              ))}
            </div>
            <p className="text-gray-400 text-sm text-center">
              Real Google reviews load automatically once the API is connected.
            </p>
          </div>
        )}

        {/* CTA */}
        <div className="text-center mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="https://www.google.com/search?q=Hunt+Kashmir+365+Srinagar+reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-[#1B4332] text-[#1B4332] font-semibold text-sm transition-all hover:bg-[#1B4332] hover:text-white"
          >
            <GoogleLogoSmall />
            See Our Reviews on Google
          </a>
          <a
            href="https://www.google.com/maps/search/Hunt+Kashmir+365+Srinagar"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1B4332] text-white font-semibold text-sm transition-all hover:bg-[#2D6A4F]"
          >
            <GoogleLogoSmall />
            Find Us on Google Maps
          </a>
        </div>
      </div>
    </section>
  );
}
