"use client";
import React from "react";
import ButtonCommon from "@/components/common/ButtonCommon";
import { useRouter } from "next/router";
import Image from "next/image";

const PassChanged = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col gap-y-[32px] w-full items-center">
      <Image src={"/success.gif"} alt="" width={82} height={82} />
      <span className="text-[20px] font-[700] leading-[120%] w-[80%] text-center">
        Contraseña cambiada con éxito
      </span>
      <ButtonCommon
        text="INGRESAR A AURA"
        disabled={false}
        onClick={() => {
          router.push("/login");
        }}
      />
    </div>
  );
};

export default PassChanged;
