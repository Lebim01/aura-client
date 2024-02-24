"use client";
import React, { Fragment, useState, useRef, useEffect } from "react";
import VideoControllerDashboard from "@/components/dashboard/VideoControllerDashboard";
import Video from "@/components/dashboard/Video";
import useIsMobile from "@/hooks/useIsMobile";
import { classNamesCustom } from "@/utils/classes";
import { CiCircleMore } from "react-icons/ci";
import Link from "next/link";

interface Props {
  videos: string[];
  title: string;
  sectionId: string;
}

const VideoCaroussel = ({ videos, title, sectionId }: Props) => {
  const isMobile = useIsMobile();

  const [showGradient, setShowGradient] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const checkScroll = () => {
    if (!scrollContainerRef.current) return;
    const { scrollWidth, scrollLeft, clientWidth } = scrollContainerRef.current;
    const scrollPercentage = (scrollLeft / (scrollWidth - clientWidth)) * 100;
    setShowGradient(scrollPercentage < 20);
  };

  useEffect(() => {
    const currentRef = scrollContainerRef.current;
    if (currentRef) {
      currentRef.addEventListener("scroll", checkScroll, { passive: true });
    }
    return () => {
      if (currentRef) {
        currentRef.removeEventListener("scroll", checkScroll);
      }
    };
  }, []);

  return (
    <div className="flex flex-col gap-y-[8px] relative md:min-w-[1056px]">
      {videos.length > 0 && (
        <>
          <div className="flex justify-between items-center px-[16px] z-50">
            <label className="text-[16px] font-[600] leading-[150%]">
              {title}
            </label>
            <Link href={"/sections/" + sectionId}>
              <button className="text-sm hover:underline">Ver todo</button>
            </Link>
          </div>
          <div
            ref={scrollContainerRef}
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
                  sectionId={sectionId}
                />
              </Fragment>
            ))}
            <div className="pl-10 pr-20">
              <Link href={"/sections/" + sectionId}>
                <button className="rounded-full bg-slate-900 p-8 h-[90px] w-[90px] flex flex-col space-y-4 items-center justify-center box-content hover:bg-slate-800">
                  <span>Ver Todo</span>
                  <CiCircleMore className="h-4 w-4" />
                </button>
              </Link>
            </div>
          </div>

          <div
            className={classNamesCustom(
              "absolute bottom-0 left-0 w-full h-[650px] pointer-events-none bg-bg-gradient-discovery-left hidden md:block transition-all duration-300",
              { "opacity-0": !showGradient },
              { "opacity-100": showGradient }
            )}
          ></div>
        </>
      )}
    </div>
  );
};

export default VideoCaroussel;
