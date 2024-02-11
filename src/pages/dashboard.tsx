"use client";
import React from "react";
import Sections from "@/components/dashboard/Sections";
import Footer from "@/components/common/Footer";
import CarouselComments from "@/components/dashboard/components/Sections/CarouselComments";
import DesktopLayout from "@/components/common/DesktopLayout";

export default function Dashboard() {
  return (
    <DesktopLayout forceDisplay>
      <div className="flex flex-col gap-y-[24px] overflow-auto w-full pb-[32px]">
        <Sections text="Lo más visto en México" endpoint="top-mexico" />
        <Sections text="Basados en tu Aura" endpoint="aura" />
        <Sections text="Reseñas" endpoint="top-mexico" />
        <CarouselComments text="Lo más comentado" />
      </div>
      <Footer />
    </DesktopLayout>
  );
}
