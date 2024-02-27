import Image from "next/image";
import { FC } from "react";

type Props = {
  open: () => void;
};

const ButtonTrailer: FC<Props> = (props) => {
  return (
    <>
      <div
        className="flex gap-x-[8px] w-full items-center justify-end md:justify-start hover:cursor-pointer group md:w-max"
        onClick={props.open}
      >
        <span className="font-[600] leading-[150%] text-[12px] group-hover:text-green-enlaces transition-all duration-500">
          Ver Trailer
        </span>
        <div className="rounded-full w-[32px] h-[32px] flex items-center justify-center bg-bg-trailer-button hover:bg-green-enlaces">
          <Image
            width={16}
            height={16}
            src="/icons/flat-arrow-right.svg"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default ButtonTrailer;
