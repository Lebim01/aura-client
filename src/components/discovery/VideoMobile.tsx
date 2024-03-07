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

    useImperativeHandle(ref, () => ({
      play: () => {
        streamRef.current?.play();
      },
      pause: () => {
        streamRef.current?.pause();
      },
    }));

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
          muted={videoIndex != swipeIndex || muted}
          loop
          preload="metadata"
        />
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
