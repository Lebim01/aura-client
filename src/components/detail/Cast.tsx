import React, { useState } from "react";
import Image from "next/image";
import { Actor } from "@/types/series";

type Props = {
  actors: Actor[];
};

export default function Cast({ actors }: Props) {
  return (
    <div className="grid grid-cols-2 gap-[24px] md:gap-[16px] px-[16px] md:w-max">
      {actors?.map((item, index: number) => {
        return (
          <div
            className="flex gap-x-[8px] items-center md:p-[8px] md:bg-black-29 md:rounded-[8px] md:min-w-[216px]"
            key={index}
          >
            <Image
              width={48}
              height={48}
              style={{ width: "40px", height: "40px" }}
              src={item?.image || "/no-photo.png"}
              alt=""
              className="bg-gray-400 rounded-full object-cover"
            />
            <div className="flex flex-col gap-y-[3px]">
              <span className="text-[12px] font-[600]">{item.name}</span>
              <span className="text-[12px]">{item.character}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
