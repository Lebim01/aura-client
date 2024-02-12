import Image from "next/image";

const VideoHeader = () => {
  return (
    <div className="absolute inset-0 flex h-fit px-[16px]">
      <div className="flex pt-[16px] gap-x-[16px] items-center">
        <Image
          width={32}
          height={32}
          src="/assets/placeholder/avatar.jpg"
          alt=""
          className="rounded-full bg-white"
        />
        <span className="text-[12px] leading-[150%]">Monica Martínez • 1h</span>
      </div>
    </div>
  );
};
export default VideoHeader;
