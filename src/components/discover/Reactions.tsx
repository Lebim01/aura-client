"use client";
import Image from "next/image";

const Reactions = () => {
  return (
    <div className="flex flex-col gap-y-[24px]">
      <div className="flex flex-col w-full items-center gap-y-[4px]">
        <div className="w-[24px]">
          <Image width={24} height={24} src="/icons/hearth.svg" alt="" />
        </div>
        <span className="text-[10px] leading-[130%]">222</span>
      </div>
      <div className="flex flex-col w-full items-center gap-y-[4px]">
        <div className="w-[24px]">
          <Image width={24} height={24} src="/icons/globe.svg" alt="" />
        </div>
        <span className="text-[10px] leading-[130%]">222</span>
      </div>
      <div className="flex flex-col w-full items-center gap-y-[4px]">
        <div className="w-[24px]">
          <Image width={24} height={24} src="/icons/share.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Reactions;
