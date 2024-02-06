"use client";
import React from "react";
import Image from "next/image";

const CheckEmail = () => {
  return (
    <div className="flex flex-col gap-y-[32px] w-full text-center items-center justify-center">
      <Image src={"/success.gif"} alt="" width={82} height={82} />
      <span className="text-[20px] font-[700] leading-[120%]">¡Gracias!</span>
      <span className="text-[18px] font-[500] leading-[150%] w-[80%]">
        Por favor revisa tu correo electrónico
      </span>
    </div>
  );
};

export default CheckEmail;
