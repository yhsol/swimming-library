import { butterflyVideos } from "@/app/data/videos";
import { VideoCard } from "../../components/VideoCard";

export default function ButterflyPage() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-semibold text-gray-900 mb-8">Butterfly</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {butterflyVideos.map((video, index) => (
          <VideoCard key={index} video={video} />
        ))}
      </div>
    </div>
  );
}
