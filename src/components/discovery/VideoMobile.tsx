import InfoReview from "./InfoReview";
import {
  ForwardedRef,
  forwardRef,
  useEffect,
  useState,
  useRef,
  MutableRefObject,
  useImperativeHandle,
} from "react";
import useVideoMute from "@/store/useVideoMute";
import useSwipeVideos from "@/store/useSwipeVideos";
import { VideoProps } from "./VideoController";
import { IoVolumeHighSharp, IoVolumeMute } from "react-icons/io5";
import { Stream } from "@cloudflare/stream-react";
import { classNamesCustom } from "@/utils/classes";
import type { StreamPlayerApi } from "@cloudflare/stream-react";

type Handler = {
  play: () => void;
  pause: () => void;
};

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
    ref: ForwardedRef<Handler>
  ) => {
    const {
      position: { swipeIndex },
    } = useSwipeVideos();
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

    const togglePlay = () => {
      if (streamRef.current?.paused) {
        streamRef.current?.play();
      } else {
        streamRef.current?.pause();
      }
    };

    useEffect(() => {
      if (swipeIndex == videoIndex) {
        streamRef.current?.play();
      } else {
        streamRef.current?.pause();
      }
    }, [swipeIndex, videoIndex]);

    return (
      <div
        className="image-slide bg-bg-gradient-discovery"
        style={{
          backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.7) 15%, rgba(0, 0, 0, 0) 30%)`,
          transform: `translateY(${(videoIndex - swipeIndex) * 100}%)`,
        }}
      >
        {/* <VideoHeader /> */}
        <Stream
          controls={false}
          src={videoUrl}
          streamRef={streamRef}
          className={classNamesCustom(
            "select-none",
            videoOrientation == "vertical" &&
              "h-full min-h-[500px] object-cover h-custom-screen w-full min-w-[300px]",
            videoOrientation == "horizontal" && "video-horizontal"
          )}
          autoplay={videoIndex == 0}
          muted={videoIndex != swipeIndex || muted}
          loop
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
          onClick={togglePlay}
        ></div>
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
