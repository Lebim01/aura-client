import React, { Fragment, useState, useRef, useEffect } from "react";
import VideoControllerDashboard from "@/components/dashboard/VideoControllerDashboard";
import Video from "@/components/dashboard/Video";
import useIsMobile from "@/hooks/useIsMobile";
import { classNamesCustom } from "@/utils/classes";
import Link from "next/link";
import Image from "next/image";

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

            <Link
              href={"/sections/" + sectionId}
              className="flex gap-x-[4px] items-center hover:underline"
            >
              <span className="text-[12px] leading-[150%] ">Ver todo</span>

              <Image
                src={"/icons/arrow-right.svg"}
                alt=""
                width={16}
                height={16}
              />
            </Link>
          </div>
          <div
            ref={scrollContainerRef}
            className={classNamesCustom(
              "",
              { "scrollnice pb-[8px]": !isMobile },
              { hidescroll: isMobile },
              {
                "grid grid-cols-1 md:grid-cols-3 gap-x-[16px] gap-y-[16px] px-[16px]":
                  videos.length < 3,
              },
              {
                "flex gap-x-[16px] items-center px-[16px] overflow-x-auto":
                  videos.length >= 3,
              }
            )}
          >
            {videos.map((video, i) => (
              <Fragment key={video}>
                <VideoControllerDashboard
                  videoUrl={video}
                  videoIndex={i}
                  Component={Video}
                  layout="desktop"
                  sectionId={sectionId}
                />
              </Fragment>
            ))}
          </div>

          {videos.length >= 3 && (
            <div
              className={classNamesCustom(
                "absolute bottom-0 left-0 w-full h-[650px] pointer-events-none bg-bg-gradient-discovery-left hidden md:block transition-all duration-300",
                { "opacity-0": !showGradient },
                { "opacity-100": showGradient }
              )}
            ></div>
          )}
        </>
      )}
    </div>
  );
};

export default VideoCaroussel;
