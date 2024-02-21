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
        `flex justify-center items-center w-full rounded-[8px] h-[50px] text-[12px] leading-[150%] text-brown-aura cursor-pointer`,
        {
          "bg-bg-green-button pointer-events-none shadow-custom-green":
            disabled,
        },
        { "bg-yellow-aura-accent": !disabled }
      )}
      onClick={() => onClick()}
    >
      <span className="text-[12px] font-[800]">{text}</span>
    </div>
  );
};

export default ButtonCommon;
