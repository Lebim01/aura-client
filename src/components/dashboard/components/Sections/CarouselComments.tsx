"use client";
import Image from "next/image";
import MostComponent from "./MostComponent";
import PreviewReview from "@/components/common/PreviewReview";

const CarouselComments = () => {
  return (
    <div className="flex flex-col  gap-y-[12px]">
      <MostComponent />
      <div className="flex flex-col w-full px-[16px] relative">
        <div className="w-full rounded-lg bg-gray-400 relative overflow-hidden min-h-[518px]">
          <Image
            width={100}
            height={100}
            src=""
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="flex flex-col w-full h-full relative">
            <div className="w-full pt-4 pb-2 px-4">
              <span className="text-[10px] font-[600] leading-[130%]">
                Reseña por Carlos Martínez
              </span>
              <div className="flex justify-between gap-2 mt-3">
                <div className="h-1 bg-white w-full" />
                <div className="h-1 bg-white w-full opacity-20" />
                <div className="h-1 bg-white w-full opacity-20" />
                <div className="h-1 bg-white w-full opacity-20" />
                <div className="h-1 bg-white w-full opacity-20" />
              </div>
            </div>
            <div className="p-[16px] flex items-end h-full w-full">
              <div className="flex flex-col gap-y-[16px]">
                <div className="flex flex-col gap-y-[8px]">
                  <PreviewReview />
                  <div className="w-[326px] h-px bg-white bg-opacity-40"></div>
                </div>
                <div className="flex gap-x-[8px] w-full items-center justify-end">
                  <span className="font-[600] leading-[150%] text-[12px]">
                    Reseñas de este título
                  </span>
                  <div className="rounded-full w-[32px] h-[32px] flex items-center justify-center bg-yellow-aura-accent shadow-[0px_0px_0px_3px_rgba(251,188,5,0.20)]">
                    <Image
                      width={16}
                      height={16}
                      src="/icons/flat-arrow-right.svg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselComments;
