import React from "react";
import DesktopLayout from "@/components/common/DesktopLayout";
import VerticalMobileVideos from "@/components/discovery/VerticalMobileVideos";
import VerticalDesktopVideos from "@/components/discovery/VerticalDesktopVideos";

const ImageViewer = () => {
  return (
    <DesktopLayout>
      <div
        id="discovery-container"
        className="fixed md:relative w-full max-h-screen md:overflow-y-auto"
      >
        <div className="md:hidden">
          <VerticalMobileVideos />
        </div>
        <div className="hidden md:block">
          <VerticalDesktopVideos />
        </div>
      </div>
    </DesktopLayout>
  );
};

export default ImageViewer;
