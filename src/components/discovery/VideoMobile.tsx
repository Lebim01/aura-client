import InfoReview from "./InfoReview";
import { ForwardedRef, forwardRef } from "react";
import useVideoMute from "@/store/useVideoMute";
import useSwipeVideos from "@/store/useSwipeVideos";
import { VideoProps } from "./VideoController";
import VideoHeader from "./VideoHeader";

const VideoMobile = forwardRef(
  (
    { videoUrl, videoIndex }: VideoProps,
    ref: ForwardedRef<HTMLVideoElement>
  ) => {
    const {
      position: { swipeIndex },
    } = useSwipeVideos();
    const { muted, toggleMute } = useVideoMute();

    return (
      <div
        className="image-slide bg-bg-gradient-discovery relative md:h-auto md:relative"
        style={{
          backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.7) 15%, rgba(0, 0, 0, 0) 30%)`,
          transform: `translateY(${(videoIndex - swipeIndex) * 100}%)`,
        }}
      >
        <VideoHeader />
        <video
          autoPlay={videoIndex == 0}
          ref={ref}
          loop
          muted={muted}
          playsInline
          className="object-cover h-custom-screen w-full min-w-[300px] min-h-[500px] md:h-auto"
          onClick={toggleMute}
        >
          <source src={videoUrl} type="video/mp4" />
          Tu navegador no soporta vídeos HTML5.
        </video>
        <InfoReview className="translateinfo inset-0" index={videoIndex} />
      </div>
    );
  }
);

VideoMobile.displayName = "VideoMobile";

export default VideoMobile;
