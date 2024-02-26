"use client";

import classNames from "classnames";
import Image from "next/image";
import { useRouter } from "next/router";
import useFilters from "@/store/useFilters";
import { useState, useRef, useEffect } from "react";
import { classNamesCustom } from "@/utils/classes";
import useIsMobile from "@/hooks/useIsMobile";
import { filter } from "rxjs";

const SearchInput = () => {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const { filters, setFilters } = useFilters();
  const ref = useRef<HTMLInputElement | null>(null);
  const [focused, setFocused] = useState(false);
  const isMobile = useIsMobile();

  const setFocuseable = () => {
    ref.current?.focus();
    setFocused(true);
  };

  const setUnFocuseable = () => {
    setFocused(false);
    setSearch("");
    ref.current?.blur();
  };

  const handleKeyDown = (e: any) => {
    if (e.key === "Enter") {
      e.preventDefault();
      router.push("/search", undefined, { shallow: true });
    }
  };

  useEffect(() => {
    if (router.pathname === "/dashboard") {
      setFilters("");
    }
  }, [router]);

  return (
    <div
      className="w-full flex md:hidden"
      onClick={() => {
        /* router.push("/search", undefined, { shallow: true }); */
      }}
    >
      <div
        className={classNamesCustom(
          "flex space-x-[16px] md:space-x-[8px] items-center text-[12px] rounded-[6px] w-full",
          {
            "border border-yellow-aura-accent px-[16px] bg-search-mobile shadow-[0px_0px_0px_3px_rgba(251,188,5,0.20)] max-h-[46px] min-h-[46px] bg-black-18":
              focused,
          },
          {
            "flex border-border-search w-full bg-search-mobile border  rounded-[8px] py-[8px] max-h-[46px] min-h-[46px] items-center pl-[16px] shadow-[0px_0px_0px_3px_rgba(0,0,0,0.0)]":
              !focused && isMobile,
          }
        )}
      >
        <Image
          src={focused ? `/icons/search-active.svg` : `/icons/search.svg`}
          width={20}
          height={20}
          alt=""
        />
        <input
          className={classNames(
            "border h-[48px] rounded-[6px] focus:outline-none bg-transparent   text-white border-none w-full flex items-center  placeholder:font-[500] placeholder:text-[12px] placeholder:leading-[12px] text-[12px] placeholder:text-white placeholder:opacity-70",
            { "h-fit": !focused },
            { "placeholder:text-yellow-aura-accent": focused }
          )}
          placeholder={"¿Qué serie  estás buscando?"}
          ref={ref}
          value={filters}
          onChange={(e) => {
            setFilters(e.target.value);
          }}
          type={"text"}
          onFocus={() => setFocused(true)}
          onKeyDown={handleKeyDown}
        />
        <div
          className={classNames(
            "flex items-center justify-center w-[16px] h-[16px] bg-black-29 rounded-full cursor-pointer float-end z-[99999999999999999]",
            { hidden: !focused }
          )}
          onClick={() => setUnFocuseable()}
        >
          <Image src={"/icons/x.svg"} alt="" width={12} height={12} />
        </div>
      </div>
    </div>
  );
};

export default SearchInput;
