"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Middle() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  return (
    <div className="flex flex-col w-full relative px-[16px] pt-[16px]">
      <div className="w-full rounded-lg bg-gray-400 relative overflow-hidden min-h-[291px]">
        <Image
          width={100}
          height={100}
          src=""
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col justify-between">
          <div className="flex-grow"></div>
          <div className="p-[16px]">
            <div className="flex flex-col gap-y-[16px]">
              <div className="flex flex-col gap-y-[8px] py-[16px]">
                <div className="w-full flex gap-x-[8px] items-center">
                  <Image
                    width={56}
                    height={56}
                    src=""
                    alt=""
                    className="rounded-[8px] bg-white"
                  />
                  <div className="flex flex-col">
                    <span className="text-[14px] font-[600] leading-[150%]">
                      Nombre de la entrega
                    </span>
                    <span className="text-[12px] font-[600] leading-[150%] opacity-60">
                      Tipo de genero
                    </span>
                  </div>
                </div>
                <span
                  className="text-[12px] leading-[130%] overflow-hidden block text-ellipsis max-h-[calc(2*1.3*12px)]"
                  style={{
                    display: "-webkit-box",
                    WebkitLineClamp: "2",
                    WebkitBoxOrient: "vertical",
                  }}
                >
                  Lorem ipsum dolor sit amet consectetur. Maecenas sit nisi a ac
                  in amet nullam. Morbi aliquam cras sit quis pharetra integer.
                  Lacus auctor suscipit in nulla.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
