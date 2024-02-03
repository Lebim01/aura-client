"use client";
import React from "react";
import Image from "next/image";
interface Props {
  text: string;
  icon: string;
  background: string;
  textcolor: string;
}
const SocialButton = ({ text, icon, background, textcolor }: Props) => {
  return (
    <div
      className={`flex justify-center gap-x-[16px] items-center w-full rounded-[8px] h-[50px] font-[600] text-[16px] ${background} ${textcolor}`}
    >
      <Image src={icon} width={24} height={24} alt="" />
      <span>{text}</span>
    </div>
  );
};

export default SocialButton;
