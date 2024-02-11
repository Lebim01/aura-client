import Image from "next/image";
import InfoReview from "./InfoReview";
import { FC } from "react";

type Props = {
  muted: boolean;
  toggleMute: () => void;
  video_url: string;
  swapIndex: number;
  videoIndex: number;
};

const Video: FC<Props> = (props) => {
  return (
    <div
      className="image-slide bg-bg-gradient-discovery"
      style={{
        backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.7) 15%, rgba(0, 0, 0, 0) 30%)`,
        transform: `translateY(${(props.videoIndex - props.swapIndex) * 100}%)`,
      }}
    >
      <video
        autoPlay
        loop
        muted={props.muted}
        playsInline
        className="object-cover h-custom-screen w-full min-w-[300px]"
        onClick={props.toggleMute}
      >
        <source src={props.video_url} type="video/mp4" />
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
      <InfoReview index={props.videoIndex} />
    </div>
  );
};

export default Video;
