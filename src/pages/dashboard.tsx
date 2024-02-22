"use client";
import React from "react";
import Footer from "@/components/common/Footer";
import DesktopLayout from "@/components/common/DesktopLayout";
import VideoCaroussel from "@/components/dashboard/components/Sections/VideoCaroussel";
import useIsMobile from "@/hooks/useIsMobile";
import { lo_que_nadie_te_dice, resenias, tres_series } from "@/dataset/videos";

export default function Dashboard() {
  const isMobile = useIsMobile();
  return (
    <DesktopLayout forceDisplay>
      <div className="flex flex-col gap-y-[16px] overflow-auto w-auto pb-[99px] md:py-[32px] relative">
        <VideoCaroussel
          videos={lo_que_nadie_te_dice.slice(0, isMobile ? 2 : 3)}
          title="Lo que nadie te dice de..."
          sectionId="lo-que-nadie-te-dice-de"
        />
        <VideoCaroussel
          videos={tres_series}
          title="Tres series"
          sectionId="tres-series"
        />
        <VideoCaroussel
          videos={resenias.slice(0, isMobile ? 2 : 3)}
          title="Reseñas"
          sectionId="resenas"
        />
      </div>
      <Footer />
    </DesktopLayout>
  );
}
