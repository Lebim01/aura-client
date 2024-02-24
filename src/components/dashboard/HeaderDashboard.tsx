"use client";

import useFakeLogin from "@/store/useFakeLogin";
import Image from "next/image";
import { useRouter } from "next/router";

const HeaderDashboard = () => {
  const router = useRouter();
  const { isLoggedIn } = useFakeLogin();

  return (
    <div
      className="flex md:pt-[16px] justify-between items-center w-full md:p-[14px] md:bg-menus  md:rounded-[16px] hover:scale-105 transition-transform duration-200 ease-in-out cursor-pointer"
      onClick={() => {
        router.push(isLoggedIn ? "/profile" : "/login");
      }}
    >
      <label className="text-[16px] leading-[130%] font-[700] cursor-pointer">
        {isLoggedIn ? " Bienvenido, Marcos" : "Inicia sesión"}
      </label>
      <div className="flex gap-x-[8px]">
        {router.pathname !== "/search" && (
          <div className="rounded-full bg-bg-green-button flex items-center justify-center w-[40px] h-[40px] md:hidden">
            <Image
              src={"/icons/filter.svg"}
              className="rounded-full"
              alt=""
              width={20}
              height={20}
            />
          </div>
        )}
        <div
          className="w-fit border border-yellow-aura-accent rounded-full p-[4px] shadow-[0px_0px_0px_3px_rgba(251,188,5,0.20)]"
          onClick={() => {
            router.push(isLoggedIn ? "/profile" : "/login");
          }}
        >
          <Image
            src={"/no-photo.png"}
            className="rounded-full"
            alt=""
            width={32}
            height={32}
          />
        </div>
      </div>
    </div>
  );
};

export default HeaderDashboard;
