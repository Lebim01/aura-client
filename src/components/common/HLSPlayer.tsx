import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import Hls from "hls.js";

interface Props extends React.HTMLProps<HTMLVideoElement> {
  manifest: string;
}

const HLSPlayer = forwardRef<HTMLVideoElement, Props>(
  ({ manifest, ...props }, ref) => {
    const videoRef = useRef<HTMLVideoElement>(null);

    useImperativeHandle(ref, () => videoRef.current!);

    useEffect(() => {
      const src = manifest;
      const { current: video } = videoRef;
      if (!video) return;

      let hls: Hls | null;
      if (video.canPlayType("application/vnd.apple.mpegurl")) {
        // Safari
        video.src = src;
      } else if (Hls.isSupported()) {
        const hls = new Hls();
        hls.loadSource(src);
        hls.attachMedia(video);
      }

      return () => hls?.destroy();
    }, [manifest]);

    return <video {...props} ref={videoRef} />;
  }
);

HLSPlayer.displayName = "HLSPlayer";

export default HLSPlayer;
