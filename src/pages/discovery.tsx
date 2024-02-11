import React, { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import Image from "next/image";
import Footer from "@/components/common/Footer";
import InfoReview from "@/components/discovery/InfoReview";
import { useRouter } from "next/router";
import Video from "@/components/discovery/Video";
import DesktopLayout from "@/components/common/DesktopLayout";

const images = ["/bgaura.png", "/no-photo.png", "/pexels-photo-268533.webp"];

const videos = [
  "https://pub-bf9da7896edf4ee98e6d6dd8e72340c7.r2.dev/videos%2Fssstik.io_1707192444675.mp4",
  "https://pub-bf9da7896edf4ee98e6d6dd8e72340c7.r2.dev/videos%2Fssstik.io_1707192444675.mp4",
  "https://pub-bf9da7896edf4ee98e6d6dd8e72340c7.r2.dev/videos%2Fssstik.io_1707192444675.mp4",
];

const ImageViewer = () => {
  const [index, setIndex] = useState(0);
  const [muted, setMuted] = useState(true);
  const router = useRouter();
  const handlers = useSwipeable({
    onSwipedUp: () =>
      setIndex((currentIndex) => Math.min(currentIndex + 1, images.length - 1)),
    onSwipedDown: () =>
      setIndex((currentIndex) => Math.max(currentIndex - 1, 0)),
    trackMouse: true,
  });

  const toggleMute = () => {
    setMuted((m) => !m);
  };

  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;

    if (index > 0) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = originalStyle;
    }

    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, [index]);

  return (
    <DesktopLayout>
      <div className="fixed md:relative w-full">
        <div className="md:hidden flex items-center justify-between p-[16px] bg-black-0D">
          <div onClick={() => router.back()}>
            <Image
              src="/icons/flat-arrow-left-active.svg"
              alt="Volver"
              width={24}
              height={24}
            />
          </div>
          <h1 className="text-lg font-semibold">Descubrir</h1>
          <div style={{ width: 24, height: 24 }} />
        </div>
        <div
          {...handlers}
          className={"overflow-hidden relative w-full h-screen"}
        >
          {videos.map((video, i) => (
            <Video
              toggleMute={toggleMute}
              video_url={video}
              muted={muted}
              swapIndex={index}
              videoIndex={i}
              key={i}
            />
          ))}
        </div>
        <Footer />
      </div>
    </DesktopLayout>
  );
};

export default ImageViewer;
