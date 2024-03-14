import {
  ForwardedRef,
  forwardRef,
  useRef,
  useImperativeHandle,
  useEffect,
  useState,
} from "react";
import canAutoPlay from "can-autoplay";
import { VideoProps } from "./VideoController";
import InfoReview from "./InfoReview";
import { classNamesCustom } from "@/utils/classes";
import { MdHearingDisabled } from "react-icons/md";
import useVideoMute from "@/store/useVideoMute";
import HLSPlayer from "../common/HLSPlayer";

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
    const { muted, setMute } = useVideoMute();
    const [autoplayMuted, setAutoplayMuted] = useState(true);
    const streamRef = useRef<any>();

    useImperativeHandle(ref, () => ({
      play: () => {
        playVideo();
      },
      pause: () => {
        streamRef.current?.pause();
      },
    }));

    const playVideo = () => {
      setTimeout(() => {
        streamRef.current?.play();
      }, 300);

      canAutoPlay.video({ muted: false }).then(({ result }) => {
        if (result) {
          setAutoplayMuted(false);
          streamRef.current?.play();
        } else {
          canAutoPlay.video({ muted: true }).then(({ result }) => {
            if (result) {
              setAutoplayMuted(true);
              streamRef.current?.play();
            }
          });
        }
      });
    };

    return (
      <div
        className={classNamesCustom(
          "relative rounded-lg overflow-hidden min-h-[60vh] max-h-[70vh] w-full",
          videoOrientation == "vertical" && "md:w-[500px]",
          videoOrientation == "horizontal" && "py-[50px]"
        )}
      >
        {/* <VideoHeader /> */}
        <div className="relative h-full w-full flex justify-center items-center">
          {autoplayMuted && (
            <button
              className={classNamesCustom(
                "absolute left-2 bg-bg-green-button z-10 p-2 rounded-sm flex items-center space-x-2",
                videoOrientation == "vertical" && "top-2",
                videoOrientation == "horizontal" && "top-0"
              )}
              onClick={() => setAutoplayMuted(false)}
            >
              <MdHearingDisabled /> <span>Reactivar Sonido</span>
            </button>
          )}
          <HLSPlayer
            loop
            playsInline
            webkit-playsinline="true"
            controls
            muted={autoplayMuted}
            ref={streamRef}
            className={classNamesCustom(
              "cursor-pointer object-contain",
              videoOrientation == "vertical" && "aspect-tiktok h-full w-full",
              videoOrientation == "horizontal" && "aspect-video w-auto h-auto"
            )}
            manifest={`https://customer-fuwnvhure6hzod9h.cloudflarestream.com/${videoUrl}/manifest/video.m3u8`}
            poster={`https://customer-fuwnvhure6hzod9h.cloudflarestream.com/${videoUrl}/thumbnails/thumbnail.jpg?time=1s&height=600`}
          />
          <InfoReview
            className={
              videoOrientation == "vertical" ? "bottom-[80px]" : "bottom-0"
            }
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
