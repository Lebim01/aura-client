import Image from "next/image";
import classNames from "classnames";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect, FC } from "react";
import { classNamesCustom } from "@/utils/classes";
import useFilters from "@/store/useFilters";
import useIsMobile from "@/hooks/useIsMobile";
import { useRouter } from "next/router";

type Props = {
  className?: string;
};

const InputSearch: FC<Props> = (props) => {
  const [focused, setFocused] = useState(false);
  const ref = useRef<HTMLInputElement | null>(null);
  const pathname = usePathname();
  const isMobile = useIsMobile();
  const [search, setSearch] = useState("");
  const { filters, setFilters, clearFilters } = useFilters();
  const debounceTimerRef = useRef<NodeJS.Timeout | null>(null);
  const router = useRouter();

  const setFocuseable = () => {
    ref.current?.focus();
    setFocused(true);
  };

  const setUnFocuseable = () => {
    setFocused(false);
    setSearch("");
    clearFilters();
    ref.current?.blur();
  };

  useEffect(() => {
    if (pathname === "/search") {
      ref.current?.focus();
      ref.current?.click();
    }
  }, [pathname]);

  useEffect(() => {
    if (router.pathname === "/dashboard") {
      clearFilters();
    }
  }, [router]);

  const debounceSearch = (value: string) => {
    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
    }
    debounceTimerRef.current = setTimeout(() => {
      setFilters((prevFilters: any) => ({
        ...prevFilters,
        q: value,
      }));
    }, 500);
  };

  useEffect(() => {
    return () => {
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (filters) {
      setSearch(filters?.q?.toString() || "");
    }
  }, [filters]);

  return (
    <div
      className={classNamesCustom(
        "flex space-x-[16px] md:space-x-[8px] items-center text-[12px] rounded-[6px] w-full max-w-[1056px] max-h-[46px] min-h-[46px] bg-black-18  pl-[16px]",
        {
          "border border-yellow-aura-accent px-[16px] bg-black-18 shadow-[0px_0px_0px_3px_rgba(251,188,5,0.20)] ":
            focused,
        },
        {
          "flex border-transparent w-full bg-black-18 border rounded-[8px] py-[8px] items-center shadow-[0px_0px_0px_3px_rgba(0,0,0,0.0)]":
            !focused && isMobile,
        },
        props.className
      )}
      onClick={() => {
        if (router.pathname !== "/search") {
          router.push("/search", undefined, { shallow: true });
        }
      }}
    >
      <Image
        src={focused ? `/icons/search-active.svg` : `/icons/search.svg`}
        alt=""
        width={20}
        height={20}
        onClick={() => setFocuseable()}
      />
      <input
        className={classNames(
          "border h-[48px] rounded-[6px] focus:outline-none bg-transparent  text-white border-none w-full flex items-center placeholder:font-[500] placeholder:text-[14px] placeholder:leading-[12px] text-[14px]",
          { "h-fit": !focused }
        )}
        placeholder={"¿Qué serie estás buscando?"}
        ref={ref}
        value={search}
        onChange={(e) => {
          const value = e.target.value;
          setSearch(value);
          debounceSearch(value);
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
