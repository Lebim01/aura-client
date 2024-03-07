import {
  ForwardedRef,
  forwardRef,
  useEffect,
  useState,
  useRef,
  useImperativeHandle,
} from "react";
import useVideoMute from "@/store/useVideoMute";
import { VideoProps } from "./VideoControllerDashboard";
import { IoVolumeHighSharp, IoVolumeMute } from "react-icons/io5";
import { Stream, StreamPlayerApi } from "@cloudflare/stream-react";

type Handler = {
  play: () => void;
  pause: () => void;
};

const Video = forwardRef(
  (
    { videoUrl, videoIndex, sectionId }: VideoProps,
    ref: ForwardedRef<Handler>
  ) => {
    const streamRef = useRef<StreamPlayerApi | undefined>();
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

    useImperativeHandle(ref, () => ({
      play: () => {
        streamRef.current?.play();
      },
      pause: () => {
        streamRef.current?.pause();
      },
    }));

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
      <div className="rounded-lg relative overflow-hidden min-h-[60vh] flex flex-col md:min-w-[358px] aspect-tiktok">
        <Stream
          controls={false}
          src={videoUrl}
          streamRef={streamRef}
          className="object-cover aspect-tiktok cursor-pointer h-full w-full"
          muted={muted}
          preload="metadata"
          loop
        />
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
        <div
          className="absolute h-full w-full top-0 left-0"
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
        ></div>
      </div>
    );
  }
);
Video.displayName = "Video";

export default Video;
