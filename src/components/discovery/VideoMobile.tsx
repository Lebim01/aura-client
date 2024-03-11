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
import { useSession } from "next-auth/react";
import HLSPlayer from "../common/HLSPlayer";

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
    const streamRef = useRef<any>();
    const [autoplayMuted, setAutoplayMuted] = useState(true);
    const { status } = useSession();
    const isLogged = status == "authenticated";

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
        playVideo();
      } else {
        streamRef.current?.pause();
      }
    };

    const playVideo = () => {
      if (autoplayMuted) {
        setAutoplayMuted(true);
        setTimeout(() => {
          streamRef.current?.play();
        }, 300);

        canAutoPlay.video({ muted: false }).then(({ result }) => {
          if (result) {
            setAutoplayMuted(false);
          }
        });
      } else {
        canAutoPlay.video({ muted: false }).then(({ result }) => {
          if (result) {
            setAutoplayMuted(false);
          } else {
            setAutoplayMuted(true);
            setTimeout(() => {
              streamRef.current?.play();
            }, 300);
          }
        });
      }
    };

    useEffect(() => {
      if (swipeIndex == videoIndex) {
        playVideo();
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
        {autoplayMuted && (
          <button
            className="absolute top-2 left-2 bg-bg-green-button z-10 p-2 rounded-sm flex items-center space-x-2"
            onClick={() => setAutoplayMuted(false)}
          >
            <MdHearingDisabled /> <span>Reactivar Sonido</span>
          </button>
        )}
        <HLSPlayer
          loop
          playsInline={true}
          controls={videoOrientation == "horizontal"}
          src={`https://customer-fuwnvhure6hzod9h.cloudflarestream.com/${videoUrl}`}
          ref={streamRef}
          className={classNamesCustom(
            "select-none h-full min-h-[500px] object-cover h-custom-screen w-full min-w-[300px]",
            videoOrientation == "horizontal" && "object-contain"
          )}
          manifest={`https://customer-fuwnvhure6hzod9h.cloudflarestream.com/${videoUrl}/manifest/video.m3u8`}
          poster={`https%3A%2F%2Fcustomer-fuwnvhure6hzod9h.cloudflarestream.com%2F${videoUrl}%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600`}
          muted={autoplayMuted}
        />
        <div
          className="absolute h-full w-full top-0 left-0"
          onClick={togglePlay}
        ></div>
        <InfoReview
          className={classNamesCustom("translateinfo inset-0", {
            translateinfologged: isLogged,
            translateinfounlogged: !isLogged,
          })}
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
