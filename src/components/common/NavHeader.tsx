"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import SearchInput from "../dashboard/components/filters/SearchInput";
import HeaderDashboard from "../dashboard/HeaderDashboard";
import InputSearch from "./InputSearch";
const NavHeader = () => {
  const router = useRouter();
  return (
    <div className="flex items-center justify-between py-[16px] bg-black bg-opacity-70 backdrop-blur-[7.2px] px-[16px] gap-x-[16px]">
      <div className="md:min-w-[280px]">
        <Image
          src={"/logo_white.svg"}
          width={80}
          height={17}
          alt=""
          className="cursor-pointer hover:scale-110 duration-300 trasition-all"
          onClick={() => router.push("/dashboard")}
        />
      </div>

      <InputSearch />
      <HeaderDashboard />
    </div>
  );
};

export default NavHeader;
