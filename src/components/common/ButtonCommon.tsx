"use client";
import React from "react";
import { classNamesCustom } from "@/utils/classes";
interface Props {
  text: string;
  disabled: boolean;
  onClick: () => void;
}
const ButtonCommon = ({ text, disabled, onClick }: Props) => {
  return (
    <div
      className={classNamesCustom(
        `flex justify-center items-center w-full rounded-[8px] h-[50px] bg-yellow-aura text-[12px] leading-[150%] text-brown-aura cursor-pointer`,
        { "bg-green-opaque pointer-events-none": disabled },
        { "bg-bg-green-button": !disabled }
      )}
      onClick={() => onClick()}
    >
      <span className="text-[12px] font-[800]">{text}</span>
    </div>
  );
};

export default ButtonCommon;
