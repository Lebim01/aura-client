import VideosContextProvider from "@/context/VideosContext";
import { Video } from "@/types/video";
import { FC } from "react";
import VerticalDesktopVideos from "./VerticalDesktopVideos";

type Props = {
  videos: Video[];
};

const VideoReviews: FC<Props> = (props) => {
  return (
    <VideosContextProvider initData={props.videos} url="/series/videos">
      <div
        id="discovery-container"
        className="relative w-full overflow-y-auto hidescroll"
      >
        <VerticalDesktopVideos />
      </div>
    </VideosContextProvider>
  );
};

export default VideoReviews;
