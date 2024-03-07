import React from "react";
import DesktopLayout from "@/components/common/DesktopLayout";
import VerticalMobileVideos from "@/components/discovery/VerticalMobileVideos";
import VerticalDesktopVideos from "@/components/discovery/VerticalDesktopVideos";
import { useWindowSize } from "@uidotdev/usehooks";
import AuthProvider from "@/components/common/ProtectAuth";
import { useSearchParams } from "next/navigation";

const ImageViewer = () => {
  const slug = "lo-que-nadie-te-dice-de";
  const { width } = useWindowSize();

  return (
    <AuthProvider>
      <DesktopLayout>
        <div
          id="discovery-container"
          className="fixed md:relative w-full max-h-screen md:overflow-y-auto hidescroll"
        >
          {(width || 0) < 768 && (
            <div className="md:hidden">
              <VerticalMobileVideos apiUrl={"/dashboard/section/" + slug} />
            </div>
          )}
          {(width || 0) >= 768 && (
            <div className="hidden md:block">
              <VerticalDesktopVideos apiUrl={"/dashboard/section/" + slug} />
            </div>
          )}
        </div>
      </DesktopLayout>
    </AuthProvider>
  );
};

export default ImageViewer;
