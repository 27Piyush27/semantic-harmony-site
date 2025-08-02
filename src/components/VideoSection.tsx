import { useState } from "react";
import { Play, Pause } from "lucide-react";
import videoThumbnail from "@/assets/video-thumbnail.jpg";

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleVideo = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="video-container aspect-video relative">
            {/* Video thumbnail */}
            <img 
              src={videoThumbnail} 
              alt="Video thumbnail" 
              className="w-full h-full object-cover"
            />
            
            {/* Video overlay with play/pause button */}
            {!isPlaying && (
              <div className="video-overlay" onClick={toggleVideo}>
                <div className="bg-primary rounded-full p-6 shadow-button">
                  <Play className="w-12 h-12 text-white ml-1" fill="currentColor" />
                </div>
              </div>
            )}

            {/* Simulated video playing state */}
            {isPlaying && (
              <div 
                className="absolute inset-0 bg-black/50 flex items-center justify-center cursor-pointer" 
                onClick={toggleVideo}
              >
                <div className="bg-black/70 rounded-full p-4">
                  <Pause className="w-8 h-8 text-white" fill="currentColor" />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;