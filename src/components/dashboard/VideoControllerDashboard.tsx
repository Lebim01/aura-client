import useSwipeVideos from "@/store/useSwipeVideos";
import { FC, Ref, useCallback, useEffect, useRef } from "react";
import { useIntersectionObserver } from "@uidotdev/usehooks";
import useUserInteraction from "@/hooks/useUserInteraction";
import useVideoMute from "@/store/useVideoMute";
import useIsMobile from "@/hooks/useIsMobile";
export type VideoProps = {
  videoUrl: string;
  videoIndex: number;
  ref: Ref<HTMLVideoElement>;
  sectionId: string;
};

type Props = {
  videoUrl: string;
  videoIndex: number;
  Component: FC<VideoProps>;
  layout: "desktop" | "mobile";
  sectionId: string;
};

const VideoControllerDashboard: FC<Props> = ({
  Component,
  videoIndex,
  videoUrl,
  sectionId,
}) => {
  const interacted = useUserInteraction();
  const {
    muted,
    toggleMute,
    indexVideo: indexVideoZustand,
    sectionId: sectionIdZustand,
  } = useVideoMute();
  const isMobile = useIsMobile();
  const videoEl = useRef<null | HTMLVideoElement>(null);
  const [ref, entry] = useIntersectionObserver({
    threshold: 1,
    root: null,
    rootMargin: "0px",
  });

  const playVideoIndex = () => {
    if (isMobile) {
      try {
        if (videoEl.current && interacted) {
          if (entry?.intersectionRatio != 1) {
            videoEl.current.pause();
          }
          if (entry?.intersectionRatio == 1) {
            videoEl.current.play();
          }
        }
      } catch (err) {
        console.error("permission error");
      }
    } else {
      try {
        if (videoEl.current && interacted) {
          if (
            indexVideoZustand === videoIndex &&
            sectionId === sectionIdZustand
          ) {
            videoEl.current.play();
          } else {
            videoEl.current.pause();
          }
        }
      } catch (err) {
        console.error("permission error");
      }
    }
  };

  const onRenderVideo = useCallback((ref: HTMLVideoElement) => {
    videoEl.current = ref;
  }, []);

  useEffect(() => {
    playVideoIndex();
  }, [
    indexVideoZustand,
    sectionIdZustand,
    interacted,
    entry?.intersectionRatio,
    muted,
  ]);

  return (
    <div ref={ref} className="aspect-tiktok">
      <Component
        ref={onRenderVideo}
        videoUrl={videoUrl}
        videoIndex={videoIndex}
        sectionId={sectionId}
      />
    </div>
  );
};

export default VideoControllerDashboard;
