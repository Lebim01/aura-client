"use client";

import Image from "next/image";
interface Props {
  icon: string;
  value: string;
}
const Platforms = ({ icon, value }: Props) => {
  return (
    <div className="w-full h-[78px] bg-black-18 flex justify-center rounded-[6px]">
      <Image src={icon} width={68} height={68} alt="" />
    </div>
  );
};

export default Platforms;
