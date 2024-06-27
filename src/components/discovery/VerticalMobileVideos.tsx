import useSwipeVideos from "@/store/useSwipeVideos";
import { FC, Fragment, useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";
import VideoMobile from "./VideoMobile";
import Footer from "../common/Footer";
import Image from "next/image";
import VideoController from "./VideoController";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useVideos } from "@/context/VideosContext";
import { Video } from "@/types/video";

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

const VerticalSliderVideos: FC = () => {
  const { position, setSwipeIndex } = useSwipeVideos();
  const { videos, fetchMore, markWatched, hasMore } = useVideos();
  const { status } = useSession();
  const [showLegend, setShowLegend] = useState(false);

  const handlers = useSwipeable({
    onSwipedUp: () => {
      setSwipeIndex(Math.min(position.swipeIndex + 1, videos.length - 1));
      if (!hasMore && position.swipeIndex + 1 == videos.length)
        setShowLegend(true);
    },
    onSwipedDown: () => {
      setSwipeIndex(Math.max(position.swipeIndex - 1, 0));
    },
    trackMouse: true,
  });

  useEffect(() => {
    if (status == "authenticated") {
      if (
        position.swipeIndex >= 0 &&
        videos &&
        videos[position.swipeIndex]?.id
      ) {
        markWatched(videos[position.swipeIndex]?.id);
      }
    }
  }, [position.swipeIndex, status]);

  useEffect(() => {
    if (position.swipeIndex === videos.length - 1) {
      fetchMore();
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
      <div
        {...handlers}
        className={"overflow-hidden relative w-full h-screen z-10"}
      >
        {videos.map((video: Video, i: number) => (
          <Fragment key={video.id}>
            <VideoController
              Component={VideoMobile}
              videoUrl={video.hsl}
              videoOrientation={video.orientation ?? "vertical"}
              videoIndex={i}
              layout="mobile"
              likes={video.likes}
              comments={video.comments}
              like_me={video.like_me}
              id_video={video.id}
            />
          </Fragment>
        ))}
        {showLegend && videos.length - 1 == position.swipeIndex && (
          <div className="flex flex-col justify-center items-center space-y-4 absolute top-[100px] text-sm bg-neutral-600/70 py-4">
            <p>🎉 ¡Enhorabuena! 🎉</p>
            <p className="max-w-[450px] text-center">
              Has terminado de ver todo el contenido de esta sección, te
              invitamos a continuar explorando en nuestro catálogo de contenido
            </p>
            <Image
              className="w-[100px] h-auto"
              src="/logo_white.svg"
              width={120}
              height={100}
              alt="logo"
            />
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default VerticalSliderVideos;
