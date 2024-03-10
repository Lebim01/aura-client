"use client";
import Image from "next/image";
import Comments from "./Comments";
import { useState } from "react";
import useShowHideFooterStore from "@/store/showHideFooterStore";
import classNames from "classnames";
import { useSession } from "next-auth/react";
import useIsMobile from "@/hooks/useIsMobile";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useVideos } from "@/context/VideosContext";

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
  const { likeVideo, dislikeVideo } = useVideos();
  const { status } = useSession();
  const isLoggedIn = status == "authenticated";
  const isMobile = useIsMobile();
  const handleDownload = async () => {
    try {
      const link = document.createElement("a");
      link.href = `https://customer-fuwnvhure6hzod9h.cloudflarestream.com/${url_video}/downloads/default.mp4`;
      link.target = "_blank";
      link.click();
    } catch (error) {
      console.error("Download error:", error);
      alert("Error al descargar el video.");
    }
  };

  const handleShare = async () => {
    const baseUrl = `${window.location.protocol}//${window.location.host}${window.location.pathname}`;

    const shareUrl = `${baseUrl}?shared=${id_video}`;

    if (navigator.share && isMobile) {
      try {
        await navigator.share({
          url: shareUrl,
          title: "Écha un vistazo!",
          text: "Te podría interesar.",
        });
      } catch (error) {
        console.error("Error sharing:", error);
      }
    } else {
      try {
        await navigator.clipboard.writeText(shareUrl);
        console.log("URL copied to clipboard");
        toast.success("Enlace copiado al portapapeles con éxito!");
      } catch (error) {
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
      <ToastContainer theme="dark" />
      <div
        className={classNames(
          "absolute flex h-fit pr-[16px] flex-col justify-end transform w-min right-0",
          className
        )}
      >
        <div className="flex gap-x-[16px] items-end flex-1 inset-0">
          <div className="flex flex-col gap-y-[8px] flex-1">
            {/* <PreviewReview /> */}
          </div>
          <div className="flex flex-col gap-y-[24px]">
            {isLoggedIn && (
              <>
                {" "}
                <div
                  className="flex flex-col w-full items-center gap-y-[4px]"
                  onClick={() => {
                    if (!like_me) {
                      likeVideo(id_video);
                    } else {
                      dislikeVideo(id_video);
                    }
                  }}
                >
                  <Image
                    className="w-[30px] hover:cursor-pointer"
                    width={30}
                    height={30}
                    src={
                      like_me ? "/icons/hearth-red.svg" : "/icons/hearth.svg"
                    }
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
              </>
            )}
            <div
              className="flex flex-col w-full items-center gap-y-[4px] hover:cursor-pointer"
              onClick={handleDownload}
            >
              <Image
                className="w-[30px]"
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
