"use client";
import Image from "next/image";
import Reactions from "./Reactions";
import PreviewReview from "../common/PreviewReview";
import Comments from "./Comments";
import { useState } from "react";

const InfoReview = () => {
  const [showComments, setShowComments] = useState(false);

  return (
    <>
      {showComments && <Comments />}
      <div className="absolute inset-0 flex h-custom-screen-footer px-[16px] flex-col">
        <div className="flex pt-[16px] gap-x-[16px] items-center">
          <Image
            width={32}
            height={32}
            src=""
            alt=""
            className="rounded-full bg-white"
          />
          <span className="text-[12px] leading-[150%]">
            Monica Martínez • 1h
          </span>
        </div>
        <div className="flex gap-x-[16px] items-end flex-1">
          <div className="flex flex-col gap-y-[8px] flex-1">
            <PreviewReview />
          </div>
          <div className="flex flex-col gap-y-[24px]">
            <div className="flex flex-col w-full items-center gap-y-[4px]">
              <div className="w-[24px]">
                <Image width={24} height={24} src="/icons/hearth.svg" alt="" />
              </div>
              <span className="text-[10px] leading-[130%]">222</span>
            </div>
            <div
              className="flex flex-col w-full items-center gap-y-[4px]"
              onClick={() => setShowComments(true)}
            >
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
    </>
  );
};

export default InfoReview;
