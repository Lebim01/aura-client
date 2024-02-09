"use client";
import React, { useEffect } from "react";
import HeaderDashboard from "@/components/dashboard/HeaderDashboard";
import Sections from "@/components/dashboard/Sections";
import Footer from "@/components/common/Footer";
import CarouselComments from "@/components/dashboard/components/Sections/CarouselComments";
import SearchInput from "@/components/dashboard/components/filters/SearchInput";
import CategoryFilters from "@/components/dashboard/components/filters/CategoryFilters";

export default function Dashboard() {
  return (
    <div className="flex flex-col gap-y-[16px] w-screen h-custom-screen bg-black-0D overflow-y-auto hidescroll">
      <div className="flex flex-col gap-y-[16px]">
        <HeaderDashboard />
        <SearchInput />
        <CategoryFilters />
      </div>
      <div className="flex flex-col gap-y-[24px] ">
        <Sections text="Lo más visto en México" endpoint="top-mexico" />
        <Sections text="Basados en tu Aura" endpoint="aura" />
        <Sections text="Reseñas" endpoint="top-mexico" />
        <CarouselComments text="Lo más comentado" />
        <Footer />
      </div>
    </div>
  );
}
