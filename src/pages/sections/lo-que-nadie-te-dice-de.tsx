"use client";
import React from "react";
import DesktopLayout from "@/components/common/DesktopLayout";
import VerticalMobileVideos from "@/components/discovery/VerticalMobileVideos";
import VerticalDesktopVideos from "@/components/discovery/VerticalDesktopVideos";
import { useWindowSize } from "@uidotdev/usehooks";

const ImageViewer = () => {
  const { width } = useWindowSize();

  return (
    <DesktopLayout>
      <div
        id="discovery-container"
        className="fixed md:relative w-full max-h-screen md:overflow-y-auto hidescroll"
      >
        {(width || 0) < 768 && (
          <div className="md:hidden">
            <VerticalMobileVideos apiUrl="/dashboard/section/lo-que-nadie-te-dice-de" />
          </div>
        )}
        {(width || 0) >= 768 && (
          <div className="hidden md:block">
            <VerticalDesktopVideos apiUrl="/dashboard/section/lo-que-nadie-te-dice-de" />
          </div>
        )}
      </div>
    </DesktopLayout>
  );
};

export default ImageViewer;
