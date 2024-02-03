"use client";
import React from "react";
import Image from "next/image";
import { TailSpin, FidgetSpinner, Circles } from "react-loader-spinner";
const Loader = () => {
  return (
    <div className="flex flex-col bg-brown-aura py-[40px] px-[24px] gap-y-[32px] w-full items-center rounded-[16px] backdrop-blur-md border border-border-container">
      <Image src={"/logo_white.svg"} width={110} height={28} alt="" />
      <TailSpin height="80" width="80" color="white" ariaLabel="loading" />
      <span className="text-[14px] text-center font-[500]">
        Haciendo el registro con cualquier Social Network que tengamos
        habilitado en aura.
      </span>
    </div>
  );
};

export default Loader;
