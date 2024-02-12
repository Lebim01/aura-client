import Image from "next/image";
import InfoReview from "./InfoReview";
import { FC } from "react";
import useVideoMute from "@/store/useVideoMute";
import useSwipeVideos from "@/store/useSwipeVideos";

type Props = {
  video_url: string;
  videoIndex: number;
};

const VideoMobile: FC<Props> = ({ video_url, videoIndex }) => {
  const {
    position: { swipeIndex },
  } = useSwipeVideos();
  const { muted, toggleMute } = useVideoMute();

  return (
    <div
      className="image-slide bg-bg-gradient-discovery relative md:h-auto md:relative"
      style={{
        backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.7) 15%, rgba(0, 0, 0, 0) 30%)`,
        transform: `translateY(${(videoIndex - swipeIndex) * 100}%)`,
      }}
    >
      <video
        autoPlay
        loop
        muted={muted}
        playsInline
        className="object-cover h-custom-screen w-full min-w-[300px] min-h-[500px] md:h-auto"
        onClick={toggleMute}
      >
        <source src={video_url} type="video/mp4" />
        Tu navegador no soporta vídeos HTML5.
      </video>
      <div className="absolute inset-0 flex h-fit px-[16px]">
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
      </div>
      <InfoReview className="translateinfo inset-0" index={videoIndex} />
    </div>
  );
};

export default VideoMobile;
