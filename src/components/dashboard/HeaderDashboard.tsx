"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/router";
import useShowHideFilters from "@/store/useShowHideFilters";
import { classNamesCustom } from "@/utils/classes";

const HeaderDashboard = () => {
  const router = useRouter();
  const { status, data } = useSession();
  const isLoggedIn = status == "authenticated";
  const { showHideFilters, toggleFilters } = useShowHideFilters();

  const goToProfile = () => {
    router.push(isLoggedIn ? "/profile" : "/login");
  };

  return (
    <div className="flex md:pt-[16px] justify-between items-center w-full md:p-[14px] md:bg-menus  md:rounded-[16px] md:hover:scale-105 transition-transform duration-200 ease-in-out cursor-pointer">
      <label
        className="text-[16px] leading-[130%] font-[700]"
        onClick={() => {
          goToProfile();
        }}
      >
        {isLoggedIn ? "Bienvenido, " + data?.user?.name || "" : "Inicia sesión"}
      </label>
      <div className="flex gap-x-[8px]">
        {router.pathname !== "/search" && (
          <div
            className={classNamesCustom(
              "rounded-full flex items-center justify-center w-[40px] h-[40px] md:hidden",
              { "bg-bg-green-button": showHideFilters },
              { "bg bg-green-opaque": !showHideFilters }
            )}
            onClick={() => {
              toggleFilters(!showHideFilters);
            }}
          >
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
