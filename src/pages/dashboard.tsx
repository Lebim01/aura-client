"use client";
import React from "react";
import Footer from "@/components/common/Footer";
import DesktopLayout from "@/components/common/DesktopLayout";
import VideoCaroussel from "@/components/dashboard/components/Sections/VideoCaroussel";

const lo_que_nadie_te_dice = [
  "https://pub-bf9da7896edf4ee98e6d6dd8e72340c7.r2.dev/videos%2Flo_que_nadie_te_dice_de%2FGaby%20Meza.mov",
  "https://pub-bf9da7896edf4ee98e6d6dd8e72340c7.r2.dev/videos%2Flo_que_nadie_te_dice_de%2FHiromi%20Kamata.mov",
  "https://pub-bf9da7896edf4ee98e6d6dd8e72340c7.r2.dev/videos%2Flo_que_nadie_te_dice_de%2FDiana%20Su.mov",
  "https://pub-bf9da7896edf4ee98e6d6dd8e72340c7.r2.dev/videos%2Flo_que_nadie_te_dice_de%2FBilly%20Rovzar.mov",
  "https://pub-bf9da7896edf4ee98e6d6dd8e72340c7.r2.dev/videos%2Flo_que_nadie_te_dice_de%2FJesus%20Iglesias.mov",
  "https://pub-bf9da7896edf4ee98e6d6dd8e72340c7.r2.dev/videos%2Flo_que_nadie_te_dice_de%2FJavier%20Ibarreche.mov",
];

export default function Dashboard() {
  return (
    <DesktopLayout forceDisplay>
      <div className="flex flex-col gap-y-[16px] overflow-auto w-auto pb-[99px] md:py-[32px] relative">
        <VideoCaroussel
          videos={lo_que_nadie_te_dice}
          title="Lo que nadie te dice de..."
          id="1"
        />
        <VideoCaroussel
          videos={lo_que_nadie_te_dice}
          title="Lo que nadie te dice de..."
          id="2"
        />
        <VideoCaroussel
          videos={lo_que_nadie_te_dice}
          title="Lo que nadie te dice de..."
          id="3"
        />
        <VideoCaroussel
          videos={lo_que_nadie_te_dice}
          title="Lo que nadie te dice de..."
          id="4"
        />
        <div className="absolute bottom-0 left-0 w-full h-full pointer-events-none bg-bg-gradient-discovery-left hidden md:block"></div>
      </div>
      <Footer />
    </DesktopLayout>
  );
}
