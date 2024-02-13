"use client";

import Image from "next/image";
import Reactions from "./Reactions";
import PreviewReview from "../common/PreviewReview";
import Comments from "./Comments";
import { useState } from "react";
import useShowHideFooterStore from "@/store/showHideFooterStore";
import classNames from "classnames";

interface Props {
  className?: string;
  index: number;
}

const InfoReview = ({ index, className }: Props) => {
  const [showComments, setShowComments] = useState(false);
  const { toggleFooter } = useShowHideFooterStore();

  return (
    <>
      {showComments && (
        <Comments show={showComments} setShow={setShowComments} index={index} />
      )}
      <div
        className={classNames(
          "absolute flex h-fit px-[16px] flex-col justify-end transform",
          className
        )}
      >
        <div className="flex gap-x-[16px] items-end flex-1">
          <div className="flex flex-col gap-y-[8px] flex-1">
            <PreviewReview />
          </div>
          <div className="flex flex-col gap-y-[24px]">
            <div className="flex flex-col w-full items-center gap-y-[4px]">
              <Image
                className="w-[30px] hover:cursor-pointer"
                width={30}
                height={30}
                src="/icons/hearth.svg"
                alt=""
              />
              <span className="text-[10px] leading-[130%]">222</span>
            </div>
            <div
              className="flex flex-col w-full items-center gap-y-[4px]"
              onClick={() => {
                setShowComments(true);
                toggleFooter(true);
              }}
            >
              <Image
                className="w-[30px] hover:cursor-pointer"
                width={30}
                height={30}
                src="/icons/globe.svg"
                alt=""
              />
              <span className="text-[10px] leading-[130%]">222</span>
            </div>
            <div className="flex flex-col w-full items-center gap-y-[4px]">
              <div className="w-[30px]">
                <Image width={30} height={30} src="/icons/share.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoReview;
