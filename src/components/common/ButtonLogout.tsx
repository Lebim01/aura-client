"use client";
import React from "react";
import Image from "next/image";
import { signOut } from "next-auth/react";
import { useRouter } from "next/router";

const ButtonLogout = () => {
  const router = useRouter();
  return (
    <div
      className="md:flex w-fit items-center justify-center py-[12px] px-[16px] rounded-[8px] border border-white hidden cursor-pointer bg-bg-green-button transition-all duration-300"
      onClick={() => {
        signOut().then(() => {
          router.replace("/login");
        });
      }}
    >
      <span className="text-[12px] font-[800] leading-[150%] text-green-logout uppercase">
        Cerrar sesión
      </span>
    </div>
  );
};

export default ButtonLogout;
