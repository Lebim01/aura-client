import useSwipeVideos from "@/store/useSwipeVideos";
import { useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import VideoMobile from "./VideoMobile";
import Footer from "../common/Footer";
import { useRouter } from "next/router";
import Image from "next/image";

const videos = [
  "https://pub-bf9da7896edf4ee98e6d6dd8e72340c7.r2.dev/videos%2Fssstik.io_1707192444675.mp4",
  "https://pub-bf9da7896edf4ee98e6d6dd8e72340c7.r2.dev/videos%2Fssstik.io_1707192444675.mp4",
  "https://pub-bf9da7896edf4ee98e6d6dd8e72340c7.r2.dev/videos%2Fssstik.io_1707192444675.mp4",
];

const VerticalSliderVideos = () => {
  const router = useRouter();
  const { position, setSwipeIndex } = useSwipeVideos();

  const handlers = useSwipeable({
    onSwipedUp: () =>
      setSwipeIndex(Math.min(position.swipeIndex + 1, ["", "", ""].length - 1)),
    onSwipedDown: () => setSwipeIndex(Math.max(position.swipeIndex - 1, 0)),
    trackMouse: true,
  });

  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;

    if (position.swipeIndex > 0) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = originalStyle;
    }

    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, [position.swipeIndex]);

  return (
    <>
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
      <div {...handlers} className={"overflow-hidden relative w-full h-screen"}>
        {videos.map((video, i) => (
          <>
            <VideoMobile video_url={video} videoIndex={i} key={i} />
          </>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default VerticalSliderVideos;
