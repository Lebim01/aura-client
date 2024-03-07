import {
  ForwardedRef,
  forwardRef,
  useEffect,
  useState,
  useRef,
  useImperativeHandle,
} from "react";
import useVideoMute from "@/store/useVideoMute";
import { VideoProps } from "./VideoController";
import InfoReview from "./InfoReview";
import { IoVolumeHighSharp, IoVolumeMute } from "react-icons/io5";
import { classNamesCustom } from "@/utils/classes";
import { Stream, StreamPlayerApi } from "@cloudflare/stream-react";

type Handler = {
  play: () => void;
  pause: () => void;
};

const VideoDesktop = forwardRef(
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
    ref: ForwardedRef<Handler>
  ) => {
    const streamRef = useRef<StreamPlayerApi | undefined>();
    const { muted, toggleMute } = useVideoMute();
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
      <div
        className={classNamesCustom(
          "relative rounded-lg overflow-hidden min-h-[60vh] w-full",
          videoOrientation == "vertical" && "w-[500px]",
          videoOrientation == "horizontal" && "py-[10%]"
        )}
      >
        {/* <VideoHeader /> */}
        <div className="relative">
          <Stream
            controls={videoOrientation == "horizontal"}
            src={videoUrl}
            streamRef={streamRef}
            className={classNamesCustom(
              "cursor-pointer",
              videoOrientation == "vertical" &&
                "aspect-tiktok min-w-[300px] h-full w-full",
              videoOrientation == "horizontal" &&
                "aspect-video min-w-[500px] w-auto h-auto"
            )}
            autoplay={videoIndex == 0}
            muted={muted}
            preload="metadata"
            loop
            responsive
          />
          {showIcon && (
            <div
              className="icon-fade-in-out absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[80px]"
              key={iconKey}
            >
              {muted ? <IoVolumeMute /> : <IoVolumeHighSharp />}
            </div>
          )}
          <div
            className="absolute h-full w-full top-0 left-0"
            onClick={toggleMute}
          ></div>
          <InfoReview
            className="bottom-4"
            index={videoIndex}
            likes={likes}
            like_me={like_me}
            id_video={id_video}
            comments={comments}
            url_video={videoUrl}
          />
        </div>
      </div>
    );
  }
);
VideoDesktop.displayName = "VideoDesktop";

export default VideoDesktop;
