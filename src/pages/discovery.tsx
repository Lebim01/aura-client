import React from "react";
import Image from "next/image";
import Footer from "@/components/common/Footer";
import { useRouter } from "next/router";
import DesktopLayout from "@/components/common/DesktopLayout";
import VerticalMobileVideos from "@/components/discovery/VerticalMobileVideos";
import VerticalDesktopVideos from "@/components/discovery/VerticalDesktopVideos";

const ImageViewer = () => {
  const router = useRouter();

  return (
    <DesktopLayout>
      <div className="fixed md:relative w-full">
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
