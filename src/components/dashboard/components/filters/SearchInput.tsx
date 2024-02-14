"use client";

import classNames from "classnames";
import Image from "next/image";
import { useState, useRef } from "react";
const SearchInput = () => {
  const ref = useRef<HTMLInputElement | null>(null);
  const [search, setSearch] = useState("");
  const [focused, setFocused] = useState(false);

  const setFocuseable = () => {
    ref.current?.focus();
    setFocused(true);
  };

  const setUnFocuseable = () => {
    ref.current?.blur();
    setFocused(false);
    setSearch("");
  };
  return (
    <div className="w-full flex md:hidden">
      <div
        className={classNames(
          "flex w-full gap-x-[16px] bg-black-18 border  rounded-[8px] py-[8px] max-h-[44px] min-h-[48px] items-center",
          {
            " border-yellow-aura-accent bg-black-0D shadow-[0px_0px_0px_3px_rgba(251,188,5,0.20)] pr-[16px]":
              focused,
          },

          {
            "border-transparent": !focused,
          }
        )}
      >
        <span className="flex pl-[16px] min-w-[20px]">
          <Image src={`/icons/search.svg`} width={20} height={20} alt="" />
        </span>
        <div className="flex flex-col justify-center w-full h-full">
          <input
            ref={ref}
            className={
              "border rounded-[6px] focus:outline-none bg-black-18 text-white border-none w-full h-full flex items-center  placeholder:text-white placeholder:opacity-50 placeholder:font-[500] placeholder:text-[12px] placeholder:leading-[12px] text-[12px]"
            }
            placeholder={"¿Qué serie o película estás buscando?"}
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            type={"text"}
            onFocus={() => setFocused(true)}
          />
        </div>
        <div
          className={classNames(
            "flex items-center justify-center w-[16px] h-[16px] bg-black-29 rounded-full cursor-pointer float-end",
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
