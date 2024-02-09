"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Sinopsis() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  return (
    <div className="flex flex-col gap-y-[24px] px-[16px]">
      <div className="flex flex-col gap-y-[8px]">
        <span className="text-[12px] font-[700]">Sinopsis</span>
        <span className="text-[12px] font-[300] leading-[140%]">
          Cleo es una de las dos empleadas domésticas que ayudan a Antonio y
          Sofía a cuidar de sus cuatro hijos en la Ciudad de México de los años
          setenta. Pronto surgen complicaciones cuando Antonio huye
          repentinamente con su amante y Cleo descubre que está embarazada.
          Cuando Sofía decide llevarse a los niños de vacaciones, invita a Cleo
          a una necesaria escapada para despejar su mente y estrechar lazos con
          la familia.
        </span>
      </div>

      <div className="flex flex-col gap-y-[8px]">
        <span className="text-[12px] font-[700]">Guión</span>
        <span className="text-[12px] font-[300] leading-[140%]">
          Alfonso Cuarón
        </span>
      </div>

      <div className="flex flex-col gap-y-[8px]">
        <span className="text-[12px] font-[700]">Reparto principal</span>
        <span className="text-[12px] font-[300] leading-[140%]">
          Yalitza Aparicio, Marina de Tavira, Diego Cortina
        </span>
      </div>

      <div className="flex flex-col gap-y-[16px] justify-start">
        <span className="text-[12px] font-[700]">
          Donde puedo ver esta producción
        </span>
        <Image
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "fit-content", height: "48px" }}
          src="/icons/netflix.svg"
          alt=""
        />
      </div>
    </div>
  );
}
