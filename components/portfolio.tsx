"use client";
// ...existing code...

import React, { useEffect, useState } from "react";

// Replace with your YouTube Data API key
const YOUTUBE_API_KEY = "AIzaSyDzioK_gfvKylAcC2zL01Wp0QZyxRhZ5YQ";
// Channel ID for @mahriaconstructionrealestate
const CHANNEL_ID = "UCZN9YQMRSghgQsftwwmFjfQ"; // Replace with your real channel ID
const MAX_RESULTS = 3;

interface Video {
  id: string;
  title: string;
  thumbnail: string;
}

async function fetchYouTubeVideos(apiKey: string, channelId: string, maxResults: number): Promise<Video[]> {
  // Get uploads playlist ID
  const channelRes = await fetch(
    `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${channelId}&key=${apiKey}`
  );
  const channelData = await channelRes.json();
  const uploadsPlaylistId = channelData.items?.[0]?.contentDetails?.relatedPlaylists?.uploads;
  if (!uploadsPlaylistId) return [];

  // Get videos from uploads playlist
  const playlistRes = await fetch(
    `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${uploadsPlaylistId}&maxResults=${maxResults}&key=${apiKey}`
  );
  const playlistData = await playlistRes.json();
  return (
    playlistData.items?.map((item: any) => ({
      id: item.snippet.resourceId.videoId,
      title: item.snippet.title,
      thumbnail: item.snippet.thumbnails.medium.url,
    })) || []
  );
}

export default function Portfolio() {
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    setError("");
    fetchYouTubeVideos(YOUTUBE_API_KEY, CHANNEL_ID, MAX_RESULTS)
      .then(setVideos)
      .catch(() => setError("Failed to load videos."))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section id="portfolio" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Latest Videos</h2>
          <div className="w-16 h-1 bg-primary mx-auto"></div>
        </div>
        {loading ? (
          <div className="text-center text-gray-500">Loading videos...</div>
        ) : error ? (
          <div className="text-center text-red-500">{error}</div>
        ) : videos.length === 0 ? (
          <div className="text-center text-gray-500">No videos found.</div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video) => (
              <div
                key={video.id}
                className="group bg-card rounded-lg overflow-hidden border border-border hover:shadow-xl transition-shadow flex flex-col items-center"
              >
                <a
                  href={`https://www.youtube.com/watch?v=${video.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full"
                >
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-56 object-cover rounded mb-2"
                  />
                  <div className="font-semibold text-center text-lg mt-2">{video.title}</div>
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
