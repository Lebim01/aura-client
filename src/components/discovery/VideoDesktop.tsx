import Image from "next/image";
import InfoReview from "./InfoReview";
import { FC } from "react";
import useVideoMute from "@/store/useVideoMute";
import useSwipeVideos from "@/store/useSwipeVideos";

type Props = {
  video_url: string;
  videoIndex: number;
};

const VideoDesktop: FC<Props> = ({ video_url, videoIndex }) => {
  const { muted, toggleMute } = useVideoMute();

  return (
    <div className="relative rounded-lg overflow-hidden w-[500px]">
      <div className="absolute inset-0 flex h-fit px-[16px] w-full">
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

      <video
        autoPlay
        loop
        muted={muted}
        playsInline
        className="object-cover min-w-[300px] min-h-[500px] h-auto"
        onClick={toggleMute}
      >
        <source src={video_url} type="video/mp4" />
        Tu navegador no soporta vídeos HTML5.
      </video>

      <InfoReview className="bottom-4" index={videoIndex} />
    </div>
  );
};

export default VideoDesktop;
