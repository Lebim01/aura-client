import { FC, Fragment, useEffect } from "react";

import useSwipeVideos from "@/store/useSwipeVideos";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { sections } from "@/utils/sections";
import { useVideos } from "@/context/VideosContext";
import LoadingDots from "@/components/common/LoadingDots";
import VideoController from "@/components/discovery/VideoController";
import VideoDesktop from "@/components/discovery/VideoDesktop";

const VerticalDesktopVideos: FC = () => {
  const { position } = useSwipeVideos();
  const { videos, fetchMore, markWatched, hasMore, loading } = useVideos();
  const { status } = useSession();

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
    <div className="flex flex-col space-y-8 items-center md:pb-[100px]">
      {videos.map((video, i) => (
        <Fragment key={video.id}>
          <VideoController
            videoUrl={video.hsl}
            videoOrientation={
              sections.find((r) => r.slug == video.section)?.orientation ??
              "vertical"
            }
            videoIndex={i}
            Component={VideoDesktop}
            layout="desktop"
            likes={video.likes}
            like_me={video.like_me}
            id_video={video.id}
            comments={video.comments}
          />
          <div className="h-[1px] w-[600px] bg-gray-50 bg-opacity-20"></div>
        </Fragment>
      ))}
      {loading && <LoadingDots />}
      {!hasMore && (
        <div className="pb-[32px] flex flex-col justify-center items-center space-y-4">
          <p>🎉 ¡Enhorabuena! 🎉</p>
          <p className="max-w-[450px] text-center">
            Has terminado de ver todo el contenido de esta sección, te invitamos
            a continuar explorando en nuestro catálogo de contenido
          </p>
          <Image
            className="w-[150px] h-auto"
            src="/logo_white.svg"
            width={300}
            height={150}
            alt="logo"
          />
        </div>
      )}
    </div>
  );
};

export default VerticalDesktopVideos;
