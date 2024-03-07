import InfoReview from "./InfoReview";
import {
  ForwardedRef,
  forwardRef,
  useEffect,
  useState,
  useRef,
  useImperativeHandle,
} from "react";
import { MdHearingDisabled } from "react-icons/md";
import useSwipeVideos from "@/store/useSwipeVideos";
import { VideoProps } from "./VideoController";
import canAutoPlay from "can-autoplay";
import { Stream } from "@cloudflare/stream-react";
import { classNamesCustom } from "@/utils/classes";
import type { StreamPlayerApi } from "@cloudflare/stream-react";
import useVideoMute from "@/store/useVideoMute";

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
    const { muted, setMute } = useVideoMute();
    const streamRef = useRef<StreamPlayerApi | undefined>();

    useImperativeHandle(ref, () => ({
      play: () => {
        streamRef.current?.play();
      },
      pause: () => {
        streamRef.current?.pause();
      },
    }));

    const togglePlay = () => {
      setMute(false);
      if (streamRef.current?.paused) {
        canAutoPlay.video().then(() => {
          streamRef.current?.play();
        });
      } else {
        streamRef.current?.pause();
      }
    };

    useEffect(() => {
      if (swipeIndex == videoIndex) {
        if (muted) {
          canAutoPlay.video({ muted: true }).then(({ result }) => {
            if (result) {
              setMute(false);
              streamRef.current?.play();
            } else {
              canAutoPlay.video({ muted: true }).then(({ result }) => {
                if (result) {
                  setMute(true);
                  streamRef.current?.play();
                }
              });
            }
          });
        } else {
          streamRef.current?.play();
        }
      } else {
        streamRef.current?.pause();
      }
    }, [swipeIndex, videoIndex, muted]);

    return (
      <div
        className="image-slide bg-bg-gradient-discovery"
        style={{
          backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.7) 15%, rgba(0, 0, 0, 0) 30%)`,
          transform: `translateY(${(videoIndex - swipeIndex) * 100}%)`,
        }}
      >
        {/* <VideoHeader /> */}
        {muted && (
          <button
            className="absolute top-2 left-2 bg-bg-green-button z-10 p-2 rounded-sm flex items-center space-x-2"
            onClick={() => setMute(false)}
          >
            <MdHearingDisabled /> <span>Reactivar Sonido</span>
          </button>
        )}
        <Stream
          loop
          controls={videoOrientation == "horizontal"}
          src={videoUrl}
          streamRef={streamRef}
          className={classNamesCustom(
            "select-none",
            videoOrientation == "vertical" &&
              "h-full min-h-[500px] object-cover h-custom-screen w-full min-w-[300px]",
            videoOrientation == "horizontal" && "video-horizontal"
          )}
          autoplay={videoIndex == 0}
          muted={muted || videoIndex != swipeIndex}
          responsive
          preload="metadata"
          poster={`https://customer-fuwnvhure6hzod9h.cloudflarestream.com/${videoUrl}/thumbnails/thumbnail.jpg?time=2s&height=600`}
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
