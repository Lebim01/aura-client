import Link from "next/link";
import { navigationOptions } from "./Footer";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Fragment } from "react";
import { classNamesCustom } from "@/utils/classes";

const DesktopNavigationButtons = () => {
  const pathname = usePathname();

  return (
    <div className="hidden md:flex flex-col md:space-y-2">
      <div className="flex-col flex gap-y-[16px] rounded-[12px] md:min-w-[280px] flex-1">
        {navigationOptions
          .filter((item) => item.hide === false || item.hide === undefined)
          .map((item, index) => (
            <Link
              href={item.url}
              className={classNamesCustom("text-[12px] cursor-pointer ")}
              key={index}
            >
              <div
                className={classNamesCustom(
                  "text-[12px] hover:scale-105 transition-transform duration-200 ease-in-out cursor-pointer p-[8px] rounded-[6px] flex items-center space-x-[8px]",
                )}
              >
                <Image
                  src={pathname === item.url ? item.iconactive : item.icon}
                  alt=""
                  width={item.size}
                  height={item.size}
                />
                <span className="font-[500] leading-[150%] text-white text-[14px]">
                  {item.title}
                </span>
              </div>
            </Link>
          ))}
      </div>
      <div>
        <Link
          href="/"
          className="text-xs text-neutral-300 underline"
        >
          Convocatoria
        </Link>
      </div>
      <div>
        <Link
          href="/terms-conditions"
          className="text-xs text-neutral-300 underline"
        >
          Términos y condiciones
        </Link>
      </div>
    </div>
  );
};

export default DesktopNavigationButtons;
