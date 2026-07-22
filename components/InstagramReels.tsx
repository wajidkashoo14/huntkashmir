import ReelsGrid from "./ReelsGrid";

// ─── Custom Unsplash loader ────────────────────────────────────────────────
const unsplashLoader = ({ src, width, quality }: { src: string; width: number; quality?: number }) => {
  const base = src.split("?")[0];
  return `${base}?w=${width}&q=${quality || 75}&auto=format&fit=crop`;
};

// ── Video data – removed all query parameters ──────────────────────────────
const KASHMIR_VIDEOS = [
  {
    id: "v1",
    title: "Dal Lake at Dawn",
    location: "Dal Lake, Srinagar",
    video_url: "https://videos.pexels.com/video-files/37975721/16114815_2560_1440_30fps.mp4",
    thumbnail_url: "https://images.unsplash.com/photo-1715457573748-8e8a70b2c1be",
  },
  {
    id: "v2",
    title: "Kashmir Valley from Above",
    location: "Kashmir Valley",
    video_url: "https://videos.pexels.com/video-files/36987211/15669304_2560_1440_30fps.mp4",
    thumbnail_url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4",
  },
  {
    id: "v3",
    title: "Gondola Ride in Snow",
    location: "Gulmarg",
    video_url: "https://videos.pexels.com/video-files/30172966/12938443_1080_1920_30fps.mp4",
    thumbnail_url: "https://images.unsplash.com/photo-1621232082074-1a7750ecc557",
  },
  {
    id: "v4",
    title: "Autumn on the River",
    location: "Pahalgam",
    video_url: "https://videos.pexels.com/video-files/34738616/14726245_2560_1440_30fps.mp4",
    thumbnail_url: "https://plus.unsplash.com/premium_photo-1680260413569-7e28013a3d8a",
  },
  {
    id: "v5",
    title: "Shikara on Dal Lake",
    location: "Dal Lake, Srinagar",
    video_url: "https://videos.pexels.com/video-files/33560296/14268461_2560_1440_30fps.mp4",
    thumbnail_url: "https://images.unsplash.com/photo-1561287437-c69a30664793",
  },
  {
    id: "v6",
    title: "Wooden Boats at Sunrise",
    location: "Dal Lake, Srinagar",
    video_url: "https://videos.pexels.com/video-files/34815542/14760491_2560_1440_60fps.mp4",
    thumbnail_url: "https://images.unsplash.com/photo-1634041837617-b43ba4bef0a1",
  },
];

function InstagramIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <radialGradient id="ig-reel-grad" cx="30%" cy="107%" r="150%">
          <stop offset="0%" stopColor="#ffd676" />
          <stop offset="25%" stopColor="#f9a844" />
          <stop offset="50%" stopColor="#f2683c" />
          <stop offset="75%" stopColor="#d9375e" />
          <stop offset="100%" stopColor="#833ab4" />
        </radialGradient>
      </defs>
      <rect width="48" height="48" rx="12" fill="url(#ig-reel-grad)" />
      <rect x="12" y="12" width="24" height="24" rx="7" fill="none" stroke="white" strokeWidth="2.5" />
      <circle cx="24" cy="24" r="6" fill="none" stroke="white" strokeWidth="2.5" />
      <circle cx="33.5" cy="14.5" r="1.5" fill="white" />
    </svg>
  );
}

export default function InstagramReels() {
  return (
    <section id="reels" className="py-16 px-4" style={{ backgroundColor: "#0F1923" }}>
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 mb-10">
          <div>
            <p className="text-[#C9A84C] text-sm font-semibold uppercase tracking-widest mb-1">
              Kashmir Through Our Lens
            </p>
            <h2 className="text-3xl font-bold text-white leading-tight">
              Feel Kashmir Before You Arrive
            </h2>
            <p className="text-gray-400 text-sm mt-1.5">
              Real landscapes · Real moments · No filters needed
            </p>
          </div>
          <a
            href="https://www.instagram.com/_huntkashmir365_/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-opacity hover:opacity-80 self-start sm:self-auto flex-shrink-0"
            style={{ background: "linear-gradient(135deg, #833ab4, #d9375e, #f9a844)" }}
          >
            <InstagramIcon size={20} />
            Follow @_huntkashmir365_
          </a>
        </div>

        {/* Video grid — ensure ReelsGrid uses next/image for thumbnails */}
        <ReelsGrid videos={KASHMIR_VIDEOS} />
      </div>
    </section>
  );
}