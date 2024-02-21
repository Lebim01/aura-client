"use client";
import React, { Fragment } from "react";
import VideoControllerDashboard from "@/components/discovery/VideoControllerDashboard";
import Video from "@/components/dashboard/Video";

interface Props {
  videos: string[];
  title: string;
  id: string;
}

const VideoCaroussel = ({ videos, title, id }: Props) => {
  return (
    <div className="flex flex-col gap-y-[8px]">
      <div className="flex justify-between items-center px-[16px] z-50">
        <label className="text-[16px] font-[600] leading-[150%]">{title}</label>
      </div>
      <div className="flex gap-x-[16px] items-center px-[16px] overflow-x-auto ">
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
    </div>
  );
};

export default VideoCaroussel;
