"use client";
import React from "react";
import Image from "next/image";

const PreviewReview = () => {
  return (
    <>
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
        Lorem ipsum dolor sit amet consectetur. Maecenas sit nisi a ac in amet
        nullam. Morbi aliquam cras sit quis pharetra integer. Lacus auctor
        suscipit in nulla.
      </span>
    </>
  );
};

export default PreviewReview;
