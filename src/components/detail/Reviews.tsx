"use client";
import React, { useState, Dispatch, SetStateAction } from "react";
import { useRouter } from "next/router";
import { classNamesCustom } from "@/utils/classes";
import Image from "next/image";

export default function Reviews() {
  return (
    <div className="flex flex-col gap-y-[32px] px-[16px]">
      <div className="flex flex-col gap-y-[8px]">
        <div className="flex items-center justify-between">
          <div className="flex gap-x-[8px] items-center">
            <Image
              width={32}
              height={32}
              src=""
              alt=""
              className="rounded-full bg-white"
            />
            <span className="text-[14px] font-[700]">Marcos Leva</span>
          </div>
          <div className="flex gap-x-[8px] items-center">
            <Image
              width={20}
              height={20}
              src="/icons/star.svg"
              alt=""
              className=""
            />
            <div className="text-[12px] font-[600]">8/10</div>
          </div>
        </div>
        <span className="text-[12px] leading-[140%]">
          Lorem ipsum dolor sit amet consectetur. Diam elementum et eu felis
          bibendum proin nulla id. Purus malesuada odio donec vel ut
          pellentesque neque neque. Tortor nunc amet urna scelerisque facilisis.
          Urna in nullam vestibulum massa.
        </span>
        <div className="flex gap-x-[2px] items-center">
          <span className="text-[12px] font-[700]">Ver más</span>
          <Image
            width={16}
            height={16}
            src="/icons/arrow-down.svg"
            alt=""
            className=""
          />
        </div>
      </div>
    </div>
  );
}
