import { FC, Fragment, useEffect } from "react";
import VideoController from "./VideoController";
import VideoDesktop from "./VideoDesktop";
import useVideos from "../../hooks/useVideos";
import useSwipeVideos from "@/store/useSwipeVideos";
import axiosInstance from "@/services";
type Props = {
  apiUrl: string;
};

const VerticalDesktopVideos: FC<Props> = (props) => {
  const { position } = useSwipeVideos();
  const { videos, fetchMore, markWatched } = useVideos();

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
    if (position.swipeIndex >= 0 && videos && videos[position.swipeIndex]?.id) {
      markWatchedVideo(videos[position.swipeIndex]?.id);
    }
  }, [position.swipeIndex, videos]);

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
          />
          <div className="h-[1px] w-[600px] bg-gray-50 bg-opacity-20"></div>
        </Fragment>
      ))}
    </div>
  );
};

export default VerticalDesktopVideos;
