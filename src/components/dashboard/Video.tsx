import { ForwardedRef, forwardRef, useEffect, useState, useRef } from "react";
import useVideoMute from "@/store/useVideoMute";
import { VideoProps } from "./VideoControllerDashboard";
import { IoVolumeHighSharp, IoVolumeMute } from "react-icons/io5";

const Video = forwardRef(
  (
    { videoUrl, videoIndex, sectionId }: VideoProps,
    ref: ForwardedRef<HTMLVideoElement>
  ) => {
    const {
      muted,
      toggleMute,
      setIndexVideo,
      indexVideo: indexVideoZustand,
      setSectionId,
      sectionId: sectionIdZustand,
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
        <video
          ref={ref}
          loop
          muted={muted}
          playsInline
          className="object-cover min-w-[300px] min-h-50vh cursor-pointer"
          onClick={() => {
            if (
              (videoIndex == indexVideoZustand &&
                sectionId == sectionIdZustand) ||
              muted
            ) {
              toggleMute();
            }
            setIndexVideo(videoIndex);
            setSectionId(sectionId);
          }}
          preload="metadata"
        >
          <source src={videoUrl + "#t=3"} type="video/mp4" />
          Tu navegador no soporta vídeos HTML5.
        </video>
        {showIcon && (
          <div
            className="icon-fade-in-out absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[80px]"
            key={iconKey}
          >
            {muted &&
              indexVideoZustand === videoIndex &&
              sectionId === sectionIdZustand && <IoVolumeMute />}
            {!muted &&
              indexVideoZustand === videoIndex &&
              sectionId === sectionIdZustand && <IoVolumeHighSharp />}
          </div>
        )}
      </div>
    );
  }
);
Video.displayName = "Video";

export default Video;
