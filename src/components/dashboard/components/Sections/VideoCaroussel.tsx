"use client";
import React, { Fragment } from "react";
import VideoControllerDashboard from "@/components/discovery/VideoControllerDashboard";
import Video from "@/components/dashboard/Video";
import useIsMobile from "@/hooks/useIsMobile";
import { classNamesCustom } from "@/utils/classes";
interface Props {
  videos: string[];
  title: string;
  id: string;
}

const VideoCaroussel = ({ videos, title, id }: Props) => {
  const isMobile = useIsMobile();
  return (
    <div className="flex flex-col gap-y-[8px] relative">
      <div className="flex justify-between items-center px-[16px] z-50">
        <label className="text-[16px] font-[600] leading-[150%]">{title}</label>
      </div>
      <div
        className={classNamesCustom(
          "flex gap-x-[16px] items-center px-[16px] overflow-x-auto",
          { "scrollnice pb-[8px]": !isMobile },
          { hidescroll: isMobile }
        )}
      >
        {videos.map((video, i) => (
          <Fragment key={i}>
            <VideoControllerDashboard
              videoUrl={video}
              videoIndex={i}
              Component={Video}
              layout="desktop"
              id={id}
            />
          </Fragment>
        ))}
      </div>
      <div className="absolute bottom-0 left-0 w-full h-full pointer-events-none bg-bg-gradient-discovery-left hidden md:block"></div>
    </div>
  );
};

export default VideoCaroussel;
