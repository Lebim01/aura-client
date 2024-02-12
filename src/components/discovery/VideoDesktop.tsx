import { ForwardedRef, forwardRef } from "react";
import useVideoMute from "@/store/useVideoMute";
import { VideoProps } from "./VideoController";
import VideoHeader from "./VideoHeader";
import InfoReview from "./InfoReview";

const VideoDesktop = forwardRef(
  (
    { videoUrl, videoIndex }: VideoProps,
    ref: ForwardedRef<HTMLVideoElement>
  ) => {
    const { muted, toggleMute } = useVideoMute();

    return (
      <div className="relative rounded-lg overflow-hidden w-[500px] h-50vh">
        <VideoHeader />
        <video
          ref={ref}
          autoPlay={videoIndex == 0}
          loop
          muted={muted}
          playsInline
          className="object-cover min-w-[300px] min-h-50vh"
          onClick={toggleMute}
        >
          <source src={videoUrl} type="video/mp4" />
          Tu navegador no soporta vídeos HTML5.
        </video>

        <InfoReview className="bottom-4" index={videoIndex} />
      </div>
    );
  }
);
VideoDesktop.displayName = "VideoDesktop";

export default VideoDesktop;
