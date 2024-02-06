"use client";
import Image from "next/image";
import Link from "next/link";

const MostComponent = () => {
  return (
    <div className="flex justify-between items-center px-[16px]">
      <label className="text-[16px] font-[600] leading-[150%]">
        Lo más visto en México
      </label>
      <Link href={""} className="flex gap-x-[4px] items-center">
        <span className="text-[12px] leading-[150%]">Ver todo</span>
        <Image src={"/icons/arrow-right.svg"} alt="" width={16} height={16} />
      </Link>
    </div>
  );
};

export default MostComponent;
