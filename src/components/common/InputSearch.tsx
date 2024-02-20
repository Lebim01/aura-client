import Image from "next/image";
import classNames from "classnames";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { classNamesCustom } from "@/utils/classes";
import useFilters from "@/store/useFilters";
import useIsMobile from "@/hooks/useIsMobile";

interface Props {
  url: string;
  iconactive: string;
  icon: string;
  size: number;
}

const InputSearch = ({ url, iconactive, icon, size }: Props) => {
  const [focused, setFocused] = useState(false);
  const ref = useRef<HTMLInputElement | null>(null);
  const pathname = usePathname();
  const isMobile = useIsMobile();
  const [search, setSearch] = useState("");
  const { filters, setFilters } = useFilters();

  const setFocuseable = () => {
    ref.current?.focus();
    setFocused(true);
  };

  const setUnFocuseable = () => {
    setFocused(false);
    setSearch("");
    ref.current?.blur();
  };

  useEffect(() => {
    if (pathname === "/search") {
      ref.current?.focus();
      ref.current?.click();
    }
  }, [pathname]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFilters(search);
    }, 500);

    return () => clearTimeout(timer);
  }, [search]);

  useEffect(() => {
    if (filters) {
      setSearch(filters);
      console.log(filters);
    }
  }, [filters]);

  return (
    <div
      className={classNamesCustom(
        "flex space-x-[16px] md:space-x-[8px] items-center text-[12px] rounded-[6px]",
        {
          "border border-yellow-aura-accent px-[16px] bg-black-0D shadow-[0px_0px_0px_3px_rgba(251,188,5,0.20)] max-h-[46px] min-h-[46px]":
            focused,
        },
        {
          "flex border-transparent w-full bg-black-18 border  rounded-[8px] py-[8px] max-h-[46px] min-h-[46px] items-center pl-[16px] shadow-[0px_0px_0px_3px_rgba(0,0,0,0.0)]":
            !focused && isMobile,
        }
      )}
    >
      <Image
        src={pathname === url ? iconactive : icon}
        alt=""
        width={size}
        height={size}
        onClick={() => setFocuseable()}
      />
      <input
        className={classNames(
          "border h-[48px] rounded-[6px] focus:outline-none bg-transparent  text-white border-none w-full flex items-center  placeholder:text-yellow-aura-accent placeholder:font-[500] placeholder:text-[12px] placeholder:leading-[12px] text-[12px]",
          { "h-fit": !focused }
        )}
        placeholder={"¿Qué serie o película estás buscando?"}
        ref={ref}
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        type={"text"}
        onFocus={() => setFocused(true)}
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
  );
};

export default InputSearch;
