import { ForwardedRef, forwardRef, useEffect, useState, useRef } from "react";
import useVideoMute from "@/store/useVideoMute";
import { VideoProps } from "./VideoController";
import VideoHeader from "./VideoHeader";
import InfoReview from "./InfoReview";
import { IoVolumeHighSharp, IoVolumeMute } from "react-icons/io5";

const VideoDesktop = forwardRef(
  (
    { videoUrl, videoIndex, likes, like_me, id_video }: VideoProps,
    ref: ForwardedRef<HTMLVideoElement>
  ) => {
    const { muted, toggleMute } = useVideoMute();
    const [showIcon, setShowIcon] = useState(false);
    const [iconKey, setIconKey] = useState(0);
    const showIconTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
      setShowIcon(true);
      setIconKey((prevKey) => prevKey + 1);

      if (showIconTimeoutRef.current) {
        clearTimeout(showIconTimeoutRef.current);
      }
      showIconTimeoutRef.current = setTimeout(() => {
        setShowIcon(false);
      }, 2000);

      return () => {
        if (showIconTimeoutRef.current) {
          clearTimeout(showIconTimeoutRef.current);
        }
      };
    }, [muted]);

    return (
      <div className="relative rounded-lg overflow-hidden w-[500px] min-h-[60vh] aspect-tiktok">
        {/* <VideoHeader /> */}
        <video
          ref={ref}
          autoPlay={videoIndex == 0}
          loop
          muted={muted}
          playsInline
          className="object-cover min-w-[300px] min-h-50vh cursor-pointer"
          onClick={toggleMute}
        >
          <source src={videoUrl} type="video/mp4" />
          Tu navegador no soporta vídeos HTML5.
        </video>
        {showIcon && (
          <div
            className="icon-fade-in-out absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[80px]"
            key={iconKey}
          >
            {muted ? <IoVolumeMute /> : <IoVolumeHighSharp />}
          </div>
        )}
        <InfoReview
          className="bottom-4"
          index={videoIndex}
          likes={likes}
          like_me={like_me}
          id_video={id_video}
        />
      </div>
    );
  }
);
VideoDesktop.displayName = "VideoDesktop";

export default VideoDesktop;
