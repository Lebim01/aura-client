import { FC, Fragment } from "react";
import VideoController from "./VideoController";
import VideoDesktop from "./VideoDesktop";
import useVideos from "../common/hooks/useVideos";

type Props = {
  apiUrl: string;
};

const VerticalDesktopVideos: FC<Props> = (props) => {
  const { videos } = useVideos(props.apiUrl);
  return (
    <div className="flex flex-col space-y-8 items-center py-4">
      {videos.map((video, i) => (
        <Fragment key={i}>
          <VideoController
            videoUrl={video}
            videoIndex={i}
            Component={VideoDesktop}
            layout="desktop"
          />
          <div className="h-[1px] w-[600px] bg-gray-50 bg-opacity-20"></div>
        </Fragment>
      ))}
    </div>
  );
};

export default VerticalDesktopVideos;
