"use client";
import React, { useEffect, useState } from "react";
import DesktopLayout from "@/components/common/DesktopLayout";
import VerticalMobileVideos from "@/components/discovery/VerticalMobileVideos";
import VerticalDesktopVideos from "@/components/discovery/VerticalDesktopVideos";
import { useWindowSize } from "@uidotdev/usehooks";
import AuthProvider from "@/components/common/ProtectAuth";
import { useRouter } from "next/router";

const ImageViewer = () => {
  const { width } = useWindowSize();
  const router = useRouter();
  const [idVideo, setIdVideo] = useState("");

  useEffect(() => {
    if (router.query.shared) {
      setIdVideo(router.query.shared.toString());
    }
  }, [router]);

  return (
    <AuthProvider>
      <DesktopLayout>
        <div
          id="discovery-container"
          className="fixed md:relative w-full max-h-screen md:overflow-y-auto hidescroll"
        >
          {(width || 0) < 768 && (
            <div className="md:hidden">
              <VerticalMobileVideos
                apiUrl={`/dashboard/discovery?shared=${idVideo}`}
              />
            </div>
          )}
          {(width || 0) >= 768 && (
            <div className="hidden md:block">
              <VerticalDesktopVideos
                apiUrl={`/dashboard/discovery?shared=${idVideo}`}
              />
            </div>
          )}
        </div>
      </DesktopLayout>
    </AuthProvider>
  );
};

export default ImageViewer;
