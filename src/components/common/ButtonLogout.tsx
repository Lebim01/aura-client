"use client";
import React from "react";
import Image from "next/image";
import { signOut } from "next-auth/react";
import { useRouter } from "next/router";

const ButtonLogout = () => {
  const router = useRouter();
  return (
    <div
      className="md:flex w-full items-center justify-between py-[14px] px-[16px] rounded-[16px] border border-white hidden cursor-pointer hover:text-yellow-aura-accent hover:border-yellow-aura-accent transition-all duration-300"
      onClick={() => {
        signOut().then(() => {
          router.replace("/login");
        });
      }}
    >
      <span className="text-[12px] font-[600] leading-[130%]">
        Cerrar sesión
      </span>
      <Image src={"/icons/logout.svg"} alt="" width={18} height={18} />
    </div>
  );
};

export default ButtonLogout;
