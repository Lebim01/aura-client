import useSwipeVideos from "@/store/useSwipeVideos";
import { Fragment, useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";
import VideoMobile from "./VideoMobile";
import Footer from "../common/Footer";
import Image from "next/image";
import VideoController from "./VideoController";
import { useRouter } from "next/navigation";
import { api } from "@/hooks/axios";
/* const videos = [
  "https://pub-bf9da7896edf4ee98e6d6dd8e72340c7.r2.dev/videos%2Fssstik.io_1707711428317.mp4",
  "https://pub-bf9da7896edf4ee98e6d6dd8e72340c7.r2.dev/videos%2Fssstik.io_1707712602563.mp4",
  "https://pub-bf9da7896edf4ee98e6d6dd8e72340c7.r2.dev/videos%2Fssstik.io_1707713022169.mp4",
]; */

const HeaderMobile = () => {
  const { back } = useRouter();
  return (
    <div className="md:hidden flex items-center justify-between p-[16px] bg-black-0D">
      <div onClick={() => back()}>
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
  );
};

const VerticalSliderVideos = () => {
  const router = useRouter();
  const { position, setSwipeIndex } = useSwipeVideos();
  const [videos, setVideos] = useState<any>([]);

  const getVideos = async () => {
    try {
      const videos_result = await api.get(`/dashboard/discovery`);
      setVideos((prevVideos: any) => {
        return [...prevVideos, ...videos_result.data];
      });
    } catch (e) {
      console.log(e);
    }
  };

  const markWatched = async (id: string) => {
    const videoIndex = videos.findIndex((video: any) => video.id === id);
    if (videoIndex !== -1 && videos[videoIndex].watched) {
      return;
    }

    try {
      await api.post(`/dashboard/discovery-watched`, {
        id_video: id,
      });
      setVideos((prevVideos: any) =>
        prevVideos.map((video: any, index: number) =>
          index === videoIndex ? { ...video, watched: true } : video
        )
      );
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getVideos();
  }, []);

  const handlers = useSwipeable({
    onSwipedUp: () =>
      setSwipeIndex(Math.min(position.swipeIndex + 1, videos.length - 1)),
    onSwipedDown: () => setSwipeIndex(Math.max(position.swipeIndex - 1, 0)),
    trackMouse: true,
  });

  useEffect(() => {
    if (position.swipeIndex >= 0 && videos && videos[position.swipeIndex]?.id) {
      markWatched(videos[position.swipeIndex]?.id);
    }
  }, [position.swipeIndex, videos]);

  useEffect(() => {
    if (position.swipeIndex === videos.length - 1) {
      getVideos();
    }

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
      {/*<HeaderMobile />*/}
      <div {...handlers} className={"overflow-hidden relative w-full h-screen"}>
        {videos.map((video: any, i: number) => (
          <Fragment key={i}>
            <VideoController
              Component={VideoMobile}
              videoUrl={video.url}
              videoIndex={i}
              layout="mobile"
            />
          </Fragment>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default VerticalSliderVideos;
