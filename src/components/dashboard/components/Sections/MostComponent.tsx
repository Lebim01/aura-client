"use client";
import Image from "next/image";
import Link from "next/link";
interface Props {
  text: string;
  hide_ver?: boolean;
}
const MostComponent = ({ text, hide_ver }: Props) => {
  return (
    <div className="flex justify-between items-center px-[16px] z-50 h-fit w-full">
      <label className="text-[16px] font-[600] leading-[150%]">{text}</label>
      {!hide_ver && (
        <Link href={"/discovery"} className="flex gap-x-[4px] items-center">
          <span className="text-[12px] leading-[150%]">Ver todo</span>

          <Image src={"/icons/arrow-right.svg"} alt="" width={16} height={16} />
        </Link>
      )}
    </div>
  );
};

export default MostComponent;
