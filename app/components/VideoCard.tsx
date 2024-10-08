"use client";

type Video = {
  id: string;
  platform: string;
};

import { useEffect } from "react";

const InstagramEmbed = ({ video }: { video: Video }) => {
  useEffect(() => {
    // Instagram embed 스크립트를 동적으로 추가
    const script = document.createElement("script");
    script.src = "//www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div
      className="instagram-post"
      dangerouslySetInnerHTML={{
        __html: video.id,
      }}
    />
  );
};

export const VideoCard = ({ video }: { video: Video }) => {
  const videoUrl = `https://www.youtube.com/embed/${video.id}`;
  const thumbnailUrl = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;

  if (video.platform === "youtube") {
    return (
      <div className="video-card bg-gray-100 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
        {/* <img src={thumbnailUrl} alt="Thumbnail" className="w-full" /> */}
        <iframe
          width="100%"
          height="200"
          src={videoUrl}
          title={`YouTube video ${video.id}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full"
        ></iframe>
      </div>
    );
  }

  if (video.platform === "instagram") {
    return (
      <div className="video-card bg-gray-100 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
        <InstagramEmbed video={video} />
      </div>
    );
  }

  return null;
};
