import { NextResponse } from "next/server";

export const revalidate = 1800;

interface InstagramMediaItem {
  id: string;
  caption: string;
  media_type: string;
  media_url: string;
  thumbnail_url: string;
  permalink: string;
  timestamp: string;
}

interface ReelItem {
  id: string;
  caption: string;
  thumbnail_url: string;
  video_url: string;
  permalink: string;
  timestamp: string;
}

interface ReelsResponse {
  reels: ReelItem[];
  source: "instagram" | "fallback";
}

const FALLBACK_REELS: ReelItem[] = [
  {
    id: "reel_1",
    caption: "Golden hour on Dal Lake 🌅 — the shikara glides and time stands still. Kashmir is pure magic. #DalLake #Kashmir #HuntKashmir365",
    thumbnail_url: "https://images.unsplash.com/photo-1715457573748-8e8a70b2c1be?w=400&q=80",
    video_url: "https://videos.pexels.com/video-files/37975721/16114815_2560_1440_30fps.mp4",
    permalink: "https://www.instagram.com/_huntkashmir365_/",
    timestamp: new Date(Date.now() - 2 * 86400000).toISOString(),
  },
  {
    id: "reel_2",
    caption: "First snowfall of the season at Gulmarg ❄️ The slopes are calling! Book your winter escape with us. #Gulmarg #SnowKashmir #HuntKashmir365",
    thumbnail_url: "https://images.unsplash.com/photo-1621232082074-1a7750ecc557?w=400&q=80",
    video_url: "https://videos.pexels.com/video-files/3571264/3571264_640_360_30fps.mp4",
    permalink: "https://www.instagram.com/_huntkashmir365_/",
    timestamp: new Date(Date.now() - 5 * 86400000).toISOString(),
  },
  {
    id: "reel_3",
    caption: "Pahalgam — where the river sings and the mountains listen 🏔️ Every bend in the Lidder Valley is a postcard. #Pahalgam #LidderValley #KashmirTourism",
    thumbnail_url: "https://plus.unsplash.com/premium_photo-1680260413569-7e28013a3d8a?w=400&q=80",
    video_url: "https://videos.pexels.com/video-files/1448735/1448735_640_360_25fps.mp4",
    permalink: "https://www.instagram.com/_huntkashmir365_/",
    timestamp: new Date(Date.now() - 8 * 86400000).toISOString(),
  },
  {
    id: "reel_4",
    caption: "Sonamarg at dawn — the meadow of gold lives up to every word 🌄 Zero Point trek with our guests this morning. #Sonamarg #ZeroPoint #KashmirDiaries",
    thumbnail_url: "https://images.unsplash.com/photo-1561287437-c69a30664793?w=400&q=80",
    video_url: "https://videos.pexels.com/video-files/2516159/2516159_640_360_30fps.mp4",
    permalink: "https://www.instagram.com/_huntkashmir365_/",
    timestamp: new Date(Date.now() - 12 * 86400000).toISOString(),
  },
  {
    id: "reel_5",
    caption: "Doodhpathri — the undiscovered gem of Kashmir 🌿 Green meadows, crystal streams, total peace. Your hidden escape awaits! #Doodhpathri #HiddenKashmir",
    thumbnail_url: "https://images.unsplash.com/photo-1634041837617-b43ba4bef0a1?w=400&q=80",
    video_url: "https://videos.pexels.com/video-files/857136/857136_640_360_30fps.mp4",
    permalink: "https://www.instagram.com/_huntkashmir365_/",
    timestamp: new Date(Date.now() - 15 * 86400000).toISOString(),
  },
  {
    id: "reel_6",
    caption: "Betaab Valley named after a Bollywood classic, beautiful beyond any frame 🎬 Come see why filmmakers keep coming back to Kashmir. #BetaabValley #KashmirFilmCity",
    thumbnail_url: "https://images.unsplash.com/photo-1646204892016-711ed35535ec?w=400&q=80",
    video_url: "https://videos.pexels.com/video-files/2169880/2169880_640_360_30fps.mp4",
    permalink: "https://www.instagram.com/_huntkashmir365_/",
    timestamp: new Date(Date.now() - 18 * 86400000).toISOString(),
  },
];

export async function GET() {
  const token = process.env.INSTAGRAM_ACCESS_TOKEN;

  if (!token) {
    const response: ReelsResponse = {
      reels: FALLBACK_REELS,
      source: "fallback",
    };
    return NextResponse.json(response);
  }

  try {
    const url = `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp&limit=12&access_token=${token}`;
    const res = await fetch(url, { next: { revalidate: 1800 } });

    if (!res.ok) {
      throw new Error(`Instagram API responded with status ${res.status}`);
    }

    const data = (await res.json()) as { data?: InstagramMediaItem[]; error?: { message: string } };

    if (data.error) {
      throw new Error(data.error.message);
    }

    const reels: ReelItem[] = (data.data ?? [])
      .filter((item) => item.media_type === "VIDEO")
      .map((item) => ({
        id: item.id,
        caption: item.caption ?? "",
        thumbnail_url: item.thumbnail_url ?? "",
        video_url: item.media_url ?? "",
        permalink: item.permalink,
        timestamp: item.timestamp,
      }));

    const response: ReelsResponse = { reels, source: "instagram" };
    return NextResponse.json(response);
  } catch {
    const response: ReelsResponse = {
      reels: FALLBACK_REELS,
      source: "fallback",
    };
    return NextResponse.json(response);
  }
}
