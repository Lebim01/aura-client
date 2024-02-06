"use client";
import Image from "next/image";
import Reactions from "./Reactions";
import PreviewReview from "../common/PreviewReview";

const Comments = () => {
  return (
    <div className="fixed h-custom-screen-comments items-end justify-end w-screen flex top-0 bg-[#1A1A1A] bg-opacity-10 z-50">
      <div className="w-full h-[40vh] bg-[#343434] rounded-t-[16px] "></div>
    </div>
  );
};

export default Comments;
