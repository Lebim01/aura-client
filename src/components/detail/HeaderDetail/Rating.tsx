import Image from "next/image";
import { FC } from "react";

type Props = {
  qualification: number;
};

const Rating: FC<Props> = ({ qualification }) => {
  return (
    <div className="hidden md:flex md:items-center md:space-x-2">
      <Image height={20} width={20} alt="star-icon" src="/icons/star.svg" />
      <span className="text-[12px] leading-[15px] font-semibold">
        {qualification}
      </span>
    </div>
  );
};

export default Rating;
