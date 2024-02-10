"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Cast({props}:any) {
  const [loading, setLoading] = useState(false);

  return (
    <div className="grid grid-cols-2 gap-[24px] px-[16px]">
     {props?.actors && props?.actors.map((item:any, index:number)=>{
      return  <div className="flex gap-x-[8px] items-center" key={index}>
                <Image
                  width={40}
                  height={40}
                  src=""
                  alt=""
                  className="bg-gray-400 rounded-full"
                />
                <div className="flex flex-col gap-y-[3px]">
                  <span className="text-[12px] font-[600]">{item.name}</span>
                  <span className="text-[12px]">{item.chatacter}</span>
                </div>
              </div>
     })}

    </div>
  );
}
