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
  url_video: string;
}

const InfoReview = ({
  index,
  className,
  likes,
  like_me,
  id_video,
  comments,
  url_video,
}: Props) => {
  const [showComments, setShowComments] = useState(false);
  const { toggleFooter } = useShowHideFooterStore();
  const { likeVideo, disLikeVideo } = useVideos();

  const handleDownload = async () => {
    try {
      const response = await fetch(url_video);
      if (!response.ok) throw new Error("Error!");
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "video.mp4";
      document.body.appendChild(a);
      a.click();

      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error("Download error:", error);
      alert("Error al descargar el video.");
    }
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          url: `${window.location.href}/${id_video}`,
          title: "Écha un vistazo!",
          text: "Te podría interesar.",
        });
      } catch (error) {
        console.error("Error sharing:", error);
      }
    } else {
      try {
        await navigator.clipboard.writeText(
          `${window.location.href}/${id_video}`
        );
        console.log("URL copied to clipboard");
      } catch (error) {
        alert(error);
        console.error("Error copying URL:", error);
      }
    }
  };

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
          "absolute flex h-fit pr-[16px] flex-col justify-end transform w-min right-0",
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
            <div
              className="flex flex-col w-full items-center gap-y-[4px]"
              onClick={handleDownload}
            >
              <Image
                className="w-[30px] hover:cursor-pointer"
                width={30}
                height={30}
                src="/icons/download.svg"
                alt=""
              />
              <span className="text-[10px] leading-[130%]">Descargar</span>
            </div>
            <div
              className="flex flex-col w-full items-center gap-y-[4px]"
              onClick={handleShare}
            >
              <Image
                className="w-[30px] hover:cursor-pointer"
                width={30}
                height={30}
                src="/icons/share.svg"
                alt=""
              />
              <span className="text-[10px] leading-[130%]">compartir</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoReview;
