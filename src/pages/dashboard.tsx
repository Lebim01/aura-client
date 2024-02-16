"use client";
import React from "react";
import Sections from "@/components/dashboard/Sections";
import Footer from "@/components/common/Footer";
import CarouselComments from "@/components/dashboard/components/Sections/CarouselComments";
import DesktopLayout from "@/components/common/DesktopLayout";

export default function Dashboard() {
  return (
    <DesktopLayout forceDisplay>
      <div className="flex flex-col gap-y-[24px] overflow-auto w-auto pb-[99px] md:py-[32px] relative">
        <Sections
          text="Lo más visto en México"
          endpoint="/dashboard/top-mexico"
        />
        <Sections text="Basados en tu Aura" endpoint="/dashboard/aura" />
        <Sections text="Reseñas" endpoint="/dashboard/top-mexico" />
        <CarouselComments text="Lo más comentado" />
        <div className="absolute bottom-0 left-0 w-full h-full pointer-events-none bg-bg-gradient-discovery-left hidden md:block"></div>
      </div>
      <Footer />
    </DesktopLayout>
  );
}
