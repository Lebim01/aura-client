import { FC, Fragment, useEffect } from "react";
import VideoController from "./VideoController";
import VideoDesktop from "./VideoDesktop";
import useVideos from "../../hooks/useVideos";
import useSwipeVideos from "@/store/useSwipeVideos";
import axiosInstance from "@/services";
import { useSession } from "next-auth/react";
import Image from "next/image";

type Props = {
  apiUrl: string;
};

const VerticalDesktopVideos: FC<Props> = (props) => {
  const { position } = useSwipeVideos();
  const { videos, fetchMore, markWatched, hasMore } = useVideos();
  const { status } = useSession();

  const markWatchedVideo = async (id: string) => {
    const videoIndex = videos.findIndex((video: any) => video.id === id);
    if (videoIndex !== -1 && videos[videoIndex].watched) {
      return;
    }
    try {
      await markWatched(id);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchMore(props.apiUrl);
  }, []);

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
      fetchMore(props.apiUrl);
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
    <div className="flex flex-col space-y-8 items-center py-4">
      {videos.map((video, i) => (
        <Fragment key={i}>
          <VideoController
            videoUrl={video.url}
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
