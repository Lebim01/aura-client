"use client";
import React from "react";
import HeaderDashboard from "@/components/dashboard/HeaderDashboard";
import Sections from "@/components/dashboard/Sections";
import Footer from "@/components/common/Footer";
import CarouselComments from "@/components/dashboard/components/Sections/CarouselComments";

export default function Dashboard() {
  return (
    <div className="flex flex-col  w-screen h-custom-screen bg-black-0D overflow-y-auto hidescroll">
      <HeaderDashboard />

      <div className="flex flex-col gap-y-[24px] ">
        <Sections />
        <Sections />
        <Sections />
        <CarouselComments />
        <Footer />
      </div>
    </div>
  );
}
