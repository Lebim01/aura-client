"use client";
import React from "react";
import Image from "next/image";

export default function Large({props}:any) {

  return (
    <div className="flex flex-col w-full relative px-[16px] pt-[16px]">
      <div className="w-full rounded-lg bg-gray-400 relative overflow-hidden min-h-[423px]">
        <div
          style={{
            width: "100%",
            height: "100%",
            backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0))${props?.movie?.backdrop_path ? `, url(${props?.movie?.backdrop_path})` : ""}`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="absolute inset-0 w-full h-full"
        />
        <div className="absolute inset-0 flex flex-col justify-between">
          <div className="flex-grow"></div>
          <div className="p-[16px]">
            <div className="flex flex-col gap-y-[16px]">
              <div className="flex flex-col gap-y-[8px]">
                <div className="w-full flex gap-x-[8px] items-center">
                  <Image
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "56px", height: "56px" }}
                    src={props?.movie?.poster_path}
                    alt=""
                    className="rounded-[4px] bg-white object-cover"
                  />
                  <div className="flex flex-col">
                    <span className="text-[14px] font-[600] leading-[150%]">
                      {props?.movie?.original_title}
                    </span>
                    <span className="text-[12px] font-[600] leading-[150%] opacity-60">
                      {props?.genres && props?.genres.map((genre: any) => genre.name).join(", ")}
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
                  {props?.movie?.overview}
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
