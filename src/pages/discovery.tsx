import React from "react";
import DesktopLayout from "@/components/common/DesktopLayout";
import VerticalMobileVideos from "@/components/discovery/VerticalMobileVideos";
import VerticalDesktopVideos from "@/components/discovery/VerticalDesktopVideos";
import { useWindowSize } from "@uidotdev/usehooks";

const ImageViewer = () => {
  const { width } = useWindowSize();
  const isMobile = width ?? 0 < 768;

  return (
    <DesktopLayout>
      <div
        id="discovery-container"
        className="fixed md:relative w-full max-h-screen md:overflow-y-auto"
      >
        {isMobile && (
          <div className="md:hidden">
            <VerticalMobileVideos />
          </div>
        )}
        {!isMobile && (
          <div className="hidden md:block">
            <VerticalDesktopVideos />
          </div>
        )}
      </div>
    </DesktopLayout>
  );
};

export default ImageViewer;
