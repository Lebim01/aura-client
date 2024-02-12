import React, { useState } from "react";
import Image from "next/image";
import { Actor } from "@/types/movies";

type Props = {
  actors: Actor[];
};

export default function Cast({ actors }: Props) {
  return (
    <div className="grid grid-cols-2 gap-[24px] px-[16px]">
      {actors &&
        actors.map((item: any, index: number) => {
          return (
            <div className="flex gap-x-[8px] items-center" key={index}>
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
                <span className="text-[12px]">{item.chatacter}</span>
              </div>
            </div>
          );
        })}
    </div>
  );
}
