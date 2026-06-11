"use client";

import { useEffect, useRef, useState } from "react";

interface KashmirVideo {
  id: string;
  title: string;
  location: string;
  video_url: string;
  thumbnail_url: string;
}

function LocationPinIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
    </svg>
  );
}

function VideoCard({ video, sectionVisible }: { video: KashmirVideo; sectionVisible: boolean }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [playing, setPlaying] = useState(false);
  const [errored, setErrored] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const vid = videoRef.current;
    const card = cardRef.current;
    if (!vid || !card || errored) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && sectionVisible) {
          vid.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
        } else {
          vid.pause();
          setPlaying(false);
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(card);
    return () => observer.disconnect();
  }, [errored, sectionVisible]);

  // Pause all when section scrolls out
  useEffect(() => {
    if (!sectionVisible && videoRef.current) {
      videoRef.current.pause();
      setPlaying(false);
    }
  }, [sectionVisible]);

  return (
    <div ref={cardRef} className="group relative overflow-hidden rounded-2xl bg-gray-900" style={{ aspectRatio: "9/16" }}>

      {/* Video */}
      {!errored ? (
        <video
          ref={videoRef}
          src={video.video_url}
          poster={video.thumbnail_url}
          muted
          loop
          playsInline
          preload="metadata"
          onCanPlay={() => setLoaded(true)}
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          onError={() => setErrored(true)}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={video.thumbnail_url}
          alt={video.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
      )}

      {/* Loading shimmer */}
      {!loaded && !errored && (
        <div className="absolute inset-0 bg-gray-800 animate-pulse" />
      )}

      {/* Gradient overlay — stronger at bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      {/* Play pulse ring — shown when playing */}
      {playing && (
        <div className="absolute top-3 right-3">
          <span className="flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-60" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-white opacity-90" />
          </span>
        </div>
      )}

      {/* Bottom info */}
      <div className="absolute bottom-0 left-0 right-0 p-3">
        <p className="text-white font-semibold text-sm leading-tight drop-shadow">{video.title}</p>
        <p className="flex items-center gap-1 text-[#C9A84C] text-xs mt-0.5">
          <LocationPinIcon />
          {video.location}
        </p>
      </div>
    </div>
  );
}

export default function ReelsGrid({ videos }: { videos: KashmirVideo[] }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [sectionVisible, setSectionVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setSectionVisible(entry.isIntersecting),
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef}>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3">
        {videos.map((video) => (
          <VideoCard key={video.id} video={video} sectionVisible={sectionVisible} />
        ))}
      </div>

      {/* Footer CTA */}
      <div className="mt-8 text-center">
        <p className="text-gray-500 text-xs mb-4">
          Follow us on Instagram for daily Kashmir travel inspiration
        </p>
        <a
          href="https://www.instagram.com/_huntkashmir365_/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-gray-600 text-gray-300 text-sm font-medium hover:border-white hover:text-white transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <defs>
              <radialGradient id="ig-footer-grad" cx="30%" cy="107%" r="150%">
                <stop offset="0%" stopColor="#ffd676" />
                <stop offset="50%" stopColor="#f2683c" />
                <stop offset="100%" stopColor="#833ab4" />
              </radialGradient>
            </defs>
            <rect width="48" height="48" rx="12" fill="url(#ig-footer-grad)" />
            <rect x="12" y="12" width="24" height="24" rx="7" fill="none" stroke="white" strokeWidth="2.5" />
            <circle cx="24" cy="24" r="6" fill="none" stroke="white" strokeWidth="2.5" />
            <circle cx="33.5" cy="14.5" r="1.5" fill="white" />
          </svg>
          View More on Instagram
        </a>
      </div>
    </div>
  );
}
