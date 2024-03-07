import useSwipeVideos from "@/store/useSwipeVideos";
import { FC, Ref, useCallback, useEffect, useRef } from "react";
import { useIntersectionObserver } from "@uidotdev/usehooks";
import useUserInteraction from "@/hooks/useUserInteraction";

export type VideoProps = {
  videoUrl: string;
  videoOrientation: "vertical" | "horizontal";
  videoIndex: number;
  ref: Ref<any>;
  likes: number;
  like_me: boolean;
  id_video: string;
  comments: number;
};

type Props = {
  videoUrl: string;
  videoOrientation: "vertical" | "horizontal";
  videoIndex: number;
  Component: FC<VideoProps>;
  layout: "desktop" | "mobile";
  likes: number;
  like_me: boolean;
  id_video: string;
  comments: number;
};

const VideoController: FC<Props> = ({
  Component,
  videoIndex,
  videoUrl,
  videoOrientation,
  layout,
  likes,
  like_me,
  id_video,
  comments,
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
          videoEl.current.currentTime = 0;
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
    if (layout == "desktop") {
      playVideoIndex();
    }
  }, [swipeIndex, videoIndex, interacted]);

  return (
    <div ref={ref} className="w-full flex justify-center">
      <Component
        ref={onRenderVideo}
        videoUrl={videoUrl}
        videoOrientation={videoOrientation}
        videoIndex={videoIndex}
        likes={likes}
        like_me={like_me}
        id_video={id_video}
        comments={comments}
      />
    </div>
  );
};

export default VideoController;
