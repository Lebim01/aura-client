"use client";
import React from "react";
import Footer from "@/components/common/Footer";
import DesktopLayout from "@/components/common/DesktopLayout";
import VideoCaroussel from "@/components/dashboard/components/Sections/VideoCaroussel";
import useIsMobile from "@/hooks/useIsMobile";
import { prox } from "@/dataset/videos";
import AuthProvider from "@/components/common/ProtectAuth";

export default function Dashboard() {
  const isMobile = useIsMobile();
  return (
    <AuthProvider>
      <DesktopLayout forceDisplay>
        <div className="flex flex-col gap-y-[16px] overflow-y-auto md:h-screen w-auto pb-[99px] md:py-[32px] relative hidescroll ">
          <VideoCaroussel
            videos={prox.slice(0, isMobile ? 2 : 3)}
            title="Lo que nadie te dice de..."
            sectionId="lo-que-nadie-te-dice-de"
          />
          <VideoCaroussel
            videos={prox}
            title="Tres series"
            sectionId="tres-series"
          />
          <VideoCaroussel
            videos={prox.slice(0, isMobile ? 2 : 3)}
            title="Reseñas"
            sectionId="resenas"
          />
        </div>
        <Footer />
      </DesktopLayout>
    </AuthProvider>
  );
}
