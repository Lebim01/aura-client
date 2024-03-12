"use client";
import React, { useState, Dispatch, SetStateAction } from "react";
import { useRouter } from "next/router";
import { classNamesCustom } from "@/utils/classes";

type Tabs = "credits" | "reviews" | "video";

interface Props {
  option: Tabs;
  setTab: Dispatch<SetStateAction<Tabs>>;
}

const options = [
  { label: "Ficha y Creditos", value: "credits" },
  //{ label: "Reseñas", value: "reviews" },
  { label: "Reseñas en vídeo", value: "video" },
];
export default function Tabs({ option, setTab }: Props) {
  return (
    <div className="flex gap-x-[16px] items-center md:px-[16px]">
      {options.map((item: any, index: number) => {
        return (
          <div
            className={classNamesCustom(
              "flex justify-center items-center h-[32px] w-fit bg-white rounded-[4px] px-[8px] text-[12px] hover:cursor-pointer select-none",
              { "bg-black": item.value !== option }
            )}
            onClick={() => setTab(item.value)}
            key={index}
          >
            <span
              className={classNamesCustom(
                "font-[600]",
                { "text-black": item.value === option },
                { "text-white": item.value !== option }
              )}
            >
              {item.label}
            </span>
          </div>
        );
      })}
    </div>
  );
}
