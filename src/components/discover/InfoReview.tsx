"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

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
          <div className="w-full flex gap-x-[8px] items-center">
            <Image
              width={53}
              height={81}
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
            Lorem ipsum dolor sit amet consectetur. Maecenas sit nisi a ac in
            amet nullam. Morbi aliquam cras sit quis pharetra integer. Lacus
            auctor suscipit in nulla.
          </span>
        </div>
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
      </div>
    </div>
  );
};

export default InfoReview;
