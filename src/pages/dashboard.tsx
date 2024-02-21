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

const tres_series = [
  "https://pub-bf9da7896edf4ee98e6d6dd8e72340c7.r2.dev/videos%2F3%20series%2F3%20Series%20que%20no%20habias%20visto.mp4",
  "https://pub-bf9da7896edf4ee98e6d6dd8e72340c7.r2.dev/videos%2F3%20series%2F3%20Series%20que%20no%20sabias%20que%20existian.mp4",
  "https://pub-bf9da7896edf4ee98e6d6dd8e72340c7.r2.dev/videos%2F3%20series%2FSabias%20que%20de%20Griselda.mp4",
];

const resenias = [
  "https://pub-bf9da7896edf4ee98e6d6dd8e72340c7.r2.dev/videos%2Frese%C3%B1as%2Fssstik.io_1708378327086.mp4",
  "https://pub-bf9da7896edf4ee98e6d6dd8e72340c7.r2.dev/videos%2Frese%C3%B1as%2F7aea3551-69c3-4a48-a7ba-9a5c2e0eac44.MP4",
  "https://pub-bf9da7896edf4ee98e6d6dd8e72340c7.r2.dev/videos%2Frese%C3%B1as%2F9a3b3dda-e4a0-45cd-83c2-5a06abb49b41.MP4",
  "https://pub-bf9da7896edf4ee98e6d6dd8e72340c7.r2.dev/videos%2Frese%C3%B1as%2Fedc5d3c6-3038-4ea4-8f2c-59dfc5e6c128.MP4",
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
        {/* <VideoCaroussel videos={tres_series} title="Tres series" id="2" /> */}
        <VideoCaroussel videos={resenias} title="Reseñas" id="3" />
      </div>
      <Footer />
    </DesktopLayout>
  );
}
