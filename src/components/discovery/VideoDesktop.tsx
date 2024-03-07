import {
  ForwardedRef,
  forwardRef,
  useState,
  useRef,
  useImperativeHandle,
  useEffect,
} from "react";
import canAutoPlay from "can-autoplay";
import { VideoProps } from "./VideoController";
import InfoReview from "./InfoReview";
import { classNamesCustom } from "@/utils/classes";
import { Stream, StreamPlayerApi } from "@cloudflare/stream-react";
import { MdHearingDisabled } from "react-icons/md";
import useVideoMute from "@/store/useVideoMute";

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
      canAutoPlay.video({ muted: false }).then(({ result }) => {
        if (result) {
          setMute(false);
        }
      });
    }, []);

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
          {muted && (
            <button
              className="absolute top-2 left-2 bg-bg-green-button z-10 p-2 rounded-sm flex items-center space-x-2"
              onClick={() => setMute(false)}
            >
              <MdHearingDisabled /> <span>Reactivar Sonido</span>
            </button>
          )}
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
          <div
            className="absolute h-full w-full top-0 left-0"
            onClick={togglePlay}
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
