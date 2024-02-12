import Image from "next/image";

const ButtonTrailer = () => {
  return (
    <div className="flex gap-x-[8px] w-full items-center justify-end md:justify-start hover:cursor-pointer group md:w-max">
      <span className="font-[600] leading-[150%] text-[12px] group-hover:text-yellow-aura-accent">
        Ver Trailer
      </span>
      <div className="rounded-full w-[32px] h-[32px] flex items-center justify-center bg-yellow-aura-accent shadow-[0px_0px_0px_3px_rgba(251,188,5,0.20)]">
        <Image
          width={16}
          height={16}
          src="/icons/flat-arrow-right.svg"
          alt=""
        />
      </div>
    </div>
  );
};

export default ButtonTrailer;
