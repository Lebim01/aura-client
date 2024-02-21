import { ForwardedRef, forwardRef, useEffect, useState, useRef } from "react";
import useVideoMute from "@/store/useVideoMute";
import { VideoProps } from "../discovery/VideoControllerDashboard";
import VideoHeader from "../discovery/VideoHeader";
import InfoReview from "../discovery/InfoReview";
import { IoVolumeHighSharp, IoVolumeMute } from "react-icons/io5";

const Video = forwardRef(
  (
    { videoUrl, videoIndex, id }: VideoProps,
    ref: ForwardedRef<HTMLVideoElement>
  ) => {
    const {
      muted,
      toggleMute,
      setIndexVideo,
      indexVideo,
      setSectionId,
      sectionId,
    } = useVideoMute();
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
      <div className="rounded-lg  relative overflow-hidden min-h-[518px] flex flex-col md:min-w-[358px]">
        {/* <VideoHeader /> */}
        <video
          ref={ref}
          loop
          muted={muted}
          playsInline
          className="object-cover min-w-[300px] min-h-50vh"
          onClick={() => {
            toggleMute();
            setIndexVideo(videoIndex);
            setSectionId(id);
          }}
          preload="metadata"
        >
          <source src={videoUrl + "#t=0.1"} type="video/mp4" />
          Tu navegador no soporta vídeos HTML5.
        </video>
        {showIcon && (
          <div
            className="icon-fade-in-out absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[80px]"
            key={iconKey}
          >
            {muted && indexVideo === videoIndex && id === sectionId && (
              <IoVolumeMute />
            )}
            {!muted && indexVideo === videoIndex && id === sectionId && (
              <IoVolumeHighSharp />
            )}
          </div>
        )}
      </div>
    );
  }
);
Video.displayName = "Video";

export default Video;
