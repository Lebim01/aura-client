"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

interface Props {
  title: string;
}
const HeaderAuth = ({ title }: Props) => {
  const router = useRouter();
  return (
    <div className="flex flex-col gap-y-[24px] items-center">
      <Image src={"/logo_white.svg"} width={110} height={28} alt="" />
      <div className="flex flex-col gap-y-[16px] text-center w-full items-center justify-center">
        <span className="text-[20px] leading-[120%] text-white font-[700]">
          {title}
        </span>
        {router.query.step === "newpass" && (
          <span className="text-[18px] leading-[150%] w-[80%] text-center">
            Por favor crea una nueva contraseña
          </span>
        )}
      </div>
    </div>
  );
};

export default HeaderAuth;
