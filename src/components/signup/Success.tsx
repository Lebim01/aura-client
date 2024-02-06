"use client";
import React from "react";
import Image from "next/image";
import ButtonCommon from "../common/ButtonCommon";

const Success = () => {
  return (
    <div className="flex flex-col gap-y-[32px] justify-center items-center text-center">
      <Image src={"/success.gif"} alt="" width={82} height={82} />

      <span className="text-[20px] font-[700] leading-[120%]">
        Cuenta creada con éxito
      </span>
      <span className="text-[18px] font-[400] leading-[150%]">
        Bienvenido a nuestra plataforma! Ahora estás listo para disfrutar de una
        experiencia digital única. ¡Explora y saca el máximo provecho!
      </span>
      <ButtonCommon
        text="INGRESAR A AURA"
        disabled={false}
        onClick={() => {}}
      />
    </div>
  );
};

export default Success;
