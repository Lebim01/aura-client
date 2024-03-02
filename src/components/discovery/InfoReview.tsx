"use client";

import Image from "next/image";
import Reactions from "./Reactions";
import PreviewReview from "../common/PreviewReview";
import Comments from "./Comments";
import { useState } from "react";
import useShowHideFooterStore from "@/store/showHideFooterStore";
import classNames from "classnames";
import useVideos from "../../hooks/useVideos";

interface Props {
  className?: string;
  index: number;
  likes: number;
  like_me: boolean;
  id_video: string;
  comments: number;
}

const InfoReview = ({
  index,
  className,
  likes,
  like_me,
  id_video,
  comments,
}: Props) => {
  const [showComments, setShowComments] = useState(false);
  const { toggleFooter } = useShowHideFooterStore();
  const { likeVideo, disLikeVideo } = useVideos();

  return (
    <>
      {showComments && (
        <Comments
          show={showComments}
          setShow={setShowComments}
          index={index}
          id_video={id_video}
        />
      )}
      <div
        className={classNames(
          "absolute flex h-fit px-[16px] flex-col justify-end transform w-full",
          className
        )}
      >
        <div className="flex gap-x-[16px] items-end flex-1">
          <div className="flex flex-col gap-y-[8px] flex-1">
            {/* <PreviewReview /> */}
          </div>
          <div className="flex flex-col gap-y-[24px]">
            <div
              className="flex flex-col w-full items-center gap-y-[4px]"
              onClick={() => {
                if (!like_me) {
                  likeVideo(id_video);
                } else {
                  disLikeVideo(id_video);
                }
              }}
            >
              <Image
                className="w-[30px] hover:cursor-pointer"
                width={30}
                height={30}
                src={like_me ? "/icons/hearth-red.svg" : "/icons/hearth.svg"}
                alt=""
              />
              <span className="text-[10px] leading-[130%]">{likes}</span>
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
              <span className="text-[10px] leading-[130%]">{comments}</span>
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
