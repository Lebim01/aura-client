"use client";

import Image from "next/image";
interface Props {
  icon: string;
  value: string;
}
const Platforms = ({ icon, value }: Props) => {
  return (
    <div className="w-[50px] h-[50px] bg-black-18 flex justify-center rounded-[6px]">
      <Image src={icon} width={42} height={42} alt="" />
    </div>
  );
};

export default Platforms;
