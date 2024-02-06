"use client";
import Image from "next/image";
import Reactions from "./Reactions";
import PreviewReview from "../common/PreviewReview";

const InfoReview = () => {
  return (
    <div className="absolute inset-0 flex h-custom-screen-footer px-[16px] flex-col">
      <div className="flex pt-[16px] gap-x-[16px] items-center">
        <Image
          width={32}
          height={32}
          src=""
          alt=""
          className="rounded-full bg-white"
        />
        <span className="text-[12px] leading-[150%]">Monica Martínez • 1h</span>
      </div>
      <div className="flex gap-x-[16px] items-end flex-1">
        <div className="flex flex-col gap-y-[8px] flex-1">
          <PreviewReview />
        </div>
        <Reactions />
      </div>
    </div>
  );
};

export default InfoReview;
