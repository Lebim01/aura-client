"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Cast() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  return (
    <div className="grid grid-cols-2 gap-[24px] px-[16px]">
      <div className="flex gap-x-[8px]">
        <Image
          width={40}
          height={40}
          src=""
          alt=""
          className="bg-gray-400 rounded-full"
        />
        <div className="flex flex-col gap-y-[3px]">
          <span className="text-[12px] font-[600]">Nombre</span>
          <span className="text-[12px]">Rol en la producción</span>
        </div>
      </div>
      <div className="flex gap-x-[8px]">
        <Image
          width={40}
          height={40}
          src=""
          alt=""
          className="bg-gray-400 rounded-full"
        />
        <div className="flex flex-col gap-y-[3px]">
          <span className="text-[12px] font-[600]">Nombre</span>
          <span className="text-[12px]">Rol en la producción</span>
        </div>
      </div>
      <div className="flex gap-x-[8px]">
        <Image
          width={40}
          height={40}
          src=""
          alt=""
          className="bg-gray-400 rounded-full"
        />
        <div className="flex flex-col gap-y-[3px]">
          <span className="text-[12px] font-[600]">Nombre</span>
          <span className="text-[12px]">Rol en la producción</span>
        </div>
      </div>
      <div className="flex gap-x-[8px]">
        <Image
          width={40}
          height={40}
          src=""
          alt=""
          className="bg-gray-400 rounded-full"
        />
        <div className="flex flex-col gap-y-[3px]">
          <span className="text-[12px] font-[600]">Nombre</span>
          <span className="text-[12px]">Rol en la producción</span>
        </div>
      </div>
      <div className="flex gap-x-[8px]">
        <Image
          width={40}
          height={40}
          src=""
          alt=""
          className="bg-gray-400 rounded-full"
        />
        <div className="flex flex-col gap-y-[3px]">
          <span className="text-[12px] font-[600]">Nombre</span>
          <span className="text-[12px]">Rol en la producción</span>
        </div>
      </div>
      <div className="flex gap-x-[8px]">
        <Image
          width={40}
          height={40}
          src=""
          alt=""
          className="bg-gray-400 rounded-full"
        />
        <div className="flex flex-col gap-y-[3px]">
          <span className="text-[12px] font-[600]">Nombre</span>
          <span className="text-[12px]">Rol en la producción</span>
        </div>
      </div>
    </div>
  );
}
