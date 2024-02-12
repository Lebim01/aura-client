import useSwipeVideos from "@/store/useSwipeVideos";
import { FC, Ref, useCallback, useEffect, useRef } from "react";
import { useIntersectionObserver } from "@uidotdev/usehooks";
import useUserInteraction from "@/hooks/useUserInteraction";

export type VideoProps = {
  videoUrl: string;
  videoIndex: number;
  ref: Ref<HTMLVideoElement>;
};

type Props = {
  videoUrl: string;
  videoIndex: number;
  Component: FC<VideoProps>;
  layout: "desktop" | "mobile";
};

const VideoController: FC<Props> = ({
  Component,
  videoIndex,
  videoUrl,
  layout,
}) => {
  const interacted = useUserInteraction();
  const {
    setSwipeIndex,
    position: { swipeIndex },
  } = useSwipeVideos();
  const videoEl = useRef<null | HTMLVideoElement>(null);
  const [ref, entry] = useIntersectionObserver({
    threshold: 1,
    root: null,
    rootMargin: "0px",
  });

  useEffect(() => {
    if (layout == "desktop") {
      if (entry?.intersectionRatio == 1) {
        checkVideoIsInViewport();
      }
    }
  }, [entry?.intersectionRatio]);

  const checkVideoIsInViewport = () => {
    setSwipeIndex(videoIndex);
  };

  const playVideoIndex = () => {
    try {
      if (videoEl.current && interacted) {
        if (swipeIndex !== videoIndex) {
          videoEl.current.pause();
        }
        if (swipeIndex === videoIndex) {
          videoEl.current.play();
        }
      }
    } catch (err) {
      console.error("permission error");
    }
  };

  const onRenderVideo = useCallback((ref: HTMLVideoElement) => {
    videoEl.current = ref;
  }, []);

  useEffect(() => {
    playVideoIndex();
  }, [swipeIndex, videoIndex, interacted]);

  return (
    <div ref={ref}>
      <Component
        ref={onRenderVideo}
        videoUrl={videoUrl}
        videoIndex={videoIndex}
      />
    </div>
  );
};

export default VideoController;