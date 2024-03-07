import InfoReview from "./InfoReview";
import { ForwardedRef, forwardRef, useEffect, useState, useRef } from "react";
import useVideoMute from "@/store/useVideoMute";
import useSwipeVideos from "@/store/useSwipeVideos";
import { VideoProps } from "./VideoController";
import { IoVolumeHighSharp, IoVolumeMute } from "react-icons/io5";
import { classNamesCustom } from "@/utils/classes";

const VideoMobile = forwardRef(
  (
    {
      videoUrl,
      videoOrientation,
      videoIndex,
      likes,
      like_me,
      id_video,
      comments,
    }: VideoProps,
    ref: ForwardedRef<HTMLVideoElement>
  ) => {
    const {
      position: { swipeIndex },
    } = useSwipeVideos();
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
      <div
        className="image-slide bg-bg-gradient-discovery md:h-auto"
        style={{
          backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.7) 15%, rgba(0, 0, 0, 0) 30%)`,
          transform: `translateY(${(videoIndex - swipeIndex) * 100}%)`,
        }}
      >
        {/* <VideoHeader /> */}
        <video
          autoPlay={videoIndex == 0}
          ref={ref}
          loop
          muted={muted}
          playsInline
          
          className={classNamesCustom(
            "",
            videoOrientation == "vertical" && "h-full min-h-[500px] object-cover h-custom-screen w-full min-w-[300px]",
            videoOrientation == "horizontal" && "video-horizontal"
          )}
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
          className="translateinfo inset-0"
          index={videoIndex}
          likes={likes}
          like_me={like_me}
          id_video={id_video}
          comments={comments}
          url_video={videoUrl}
        />
      </div>
    );
  }
);

VideoMobile.displayName = "VideoMobile";

export default VideoMobile;
