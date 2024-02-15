"use client";
import React from "react";
import Image from "next/image";
import ButtonCommon from "../common/ButtonCommon";

const Welcome = () => {
  return (
    <div className="flex flex-col bg-brown-aura py-[40px] px-[16px] gap-y-[32px] w-full items-center rounded-[16px] backdrop-blur-md border border-border-container">
      <div className="flex flex-col gap-y-[24px] items-center">
        <Image src={"/logo_white.svg"} width={110} height={28} alt="" />
        <span className="text-[20px] leading-[120%] text-white font-[700]">
          Bienvenido Marcos
        </span>
      </div>
      <ButtonCommon text="CONTINUAR" disabled={false} onClick={() => {}} />
    </div>
  );
};

export default Welcome;
