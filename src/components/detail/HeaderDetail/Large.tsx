"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Large() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  return (
    <div className="flex flex-col w-full relative px-[16px] pt-[16px]">
      <div className="w-full rounded-lg bg-gray-400 relative overflow-hidden min-h-[423px]">
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
              <div className="flex flex-col gap-y-[8px]">
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
                <div className="w-full h-px bg-white bg-opacity-40"></div>
              </div>
              <div className="flex gap-x-[8px] w-full items-center justify-end">
                <span className="font-[600] leading-[150%] text-[12px]">
                  Ver Trailer
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
  );
}
