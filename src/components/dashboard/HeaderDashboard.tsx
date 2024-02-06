"use client";

import Image from "next/image";

const HeaderDashboard = () => {
  return (
    <div className="flex p-[16px] justify-between items-center w-ful">
      <label className="text-[16px] leading-[130%] font-[700]">
        Bienvenido, Marcos
      </label>
      <div className="w-fit border border-yellow-aura-accent rounded-full p-[4px]">
        <Image
          src={"/no-photo.png"}
          className="rounded-full"
          alt=""
          width={32}
          height={32}
        />
      </div>
    </div>
  );
};

export default HeaderDashboard;
