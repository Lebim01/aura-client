"use client";

import Image from "next/image";

const HeaderDashboard = () => {
  return (
    <div className="flex pt-[16px] justify-between items-center w-full md:p-[14px] md:bg-black-29 md:rounded-[16px]">
      <label className="text-[16px] leading-[130%] font-[700]">
        Bienvenido, Marcos
      </label>
      <div className="flex gap-x-[8px]">
        <div className="rounded-full bg-yellow-aura-accent flex items-center justify-center w-[40px] h-[40px] md:hidden">
          <Image
            src={"/icons/filter.svg"}
            className="rounded-full"
            alt=""
            width={20}
            height={20}
          />
        </div>
        <div className="w-fit border border-yellow-aura-accent rounded-full p-[4px] shadow-[0px_0px_0px_3px_rgba(251,188,5,0.20)]">
          <Image
            src={"/no-photo.png"}
            className="rounded-full"
            alt=""
            width={32}
            height={32}
          />
        </div>
      </div>
    </div>
  );
};

export default HeaderDashboard;
