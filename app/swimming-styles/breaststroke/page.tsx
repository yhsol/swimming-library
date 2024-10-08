import { VideoCard } from "../../components/VideoCard";
import { breaststrokeVideos } from "../../data/videos";

export default function BreaststrokePage() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-semibold text-gray-900 mb-8">
        Breaststroke Videos
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {breaststrokeVideos.map((video, index) => (
          <VideoCard key={index} video={video} />
        ))}
      </div>
    </div>
  );
}
