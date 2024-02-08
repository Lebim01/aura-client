"use client";

import Image from "next/image";
interface Props {
  label: string;
  value: string;
}
const Checkbox = ({ label, value }: Props) => {
  return (
    <div className="flex gap-x-[4px] items-center">
      <Image
        src={"/icons/checkbox_unchecked.svg"}
        width={16}
        height={16}
        alt=""
      />
      <span className="text-[12px] font-[500] leading-[12px]">{label}</span>
    </div>
  );
};

export default Checkbox;
