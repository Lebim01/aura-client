import Link from "next/link";
import { navigationOptions } from "./Footer";
import Image from "next/image";
import classNames from "classnames";
import { usePathname } from "next/navigation";
import { useState, useRef, LegacyRef } from "react";
import { classNamesCustom } from "@/utils/classes";

const DesktopNavigationButtons = () => {
  const [focused, setFocused] = useState(false);
  const ref = useRef<HTMLInputElement | null>(null);
  const pathname = usePathname();
  const [search, setSearch] = useState("");

  const setFocuseable = () => {
    ref.current?.focus();
    setFocused(true);
  };

  const setUnFocuseable = () => {
    setFocused(false);
    setSearch("");
    ref.current?.blur();
  };

  return (
    <div className="hidden md:flex flex-col gap-y-[24px] rounded-[12px] overflow-hidden bg-black-29 p-[16px]">
      {navigationOptions.map((item, index) => {
        return (
          <>
            {item.type === "button" ? (
              <div
                className={classNamesCustom(
                  "flex space-x-[16px] md:space-x-[8px] items-center text-[12px] rounded-[6px]",
                  {
                    "border border-yellow-aura-accent px-[16px] bg-black-0D shadow-[0px_0px_0px_3px_rgba(251,188,5,0.20)]":
                      focused,
                  }
                )}
                onClick={() => setFocuseable()}
              >
                <Image
                  src={pathname === item.url ? item.iconactive : item.icon}
                  alt=""
                  width={item.size}
                  height={item.size}
                />
                <input
                  className={classNames(
                    "border h-[48px] rounded-[6px] focus:outline-none bg-transparent  text-white border-none w-full flex items-center  placeholder:text-white placeholder:font-[500] placeholder:text-[12px] placeholder:leading-[12px] text-[12px]",
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
                  onBlur={() => {
                    setFocused(false);
                    setSearch("");
                  }}
                />
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
            ) : (
              <Link
                href={item.url}
                className="text-[12px] hover:bg-black-29/50"
                key={index}
              >
                <div className="flex space-x-[16px] md:space-x-[8px] items-center">
                  <Image
                    src={pathname === item.url ? item.iconactive : item.icon}
                    alt=""
                    width={item.size}
                    height={item.size}
                  />
                  <span
                    className={classNames("font-[500] leading-[150%]", {
                      "text-yellow-aura-accent ": pathname === item.url,
                      "text-white ": !(pathname === item.url),
                    })}
                  >
                    {item.title}
                  </span>
                </div>
              </Link>
            )}
          </>
        );
      })}
    </div>
  );
};

export default DesktopNavigationButtons;
