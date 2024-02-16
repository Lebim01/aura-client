import Link from "next/link";
import { navigationOptions } from "./Footer";
import Image from "next/image";
import classNames from "classnames";
import { usePathname } from "next/navigation";
import InputSearch from "./InputSearch";

const DesktopNavigationButtons = () => {
  const pathname = usePathname();

  return (
    <div className="hidden md:flex flex-col gap-y-[24px] rounded-[12px] overflow-hidden bg-black-29 p-[16px]">
      {navigationOptions.map((item, index) => {
        return (
          <>
            {item.type === "button" && pathname === "/search" ? (
              <InputSearch
                icon={item.icon}
                iconactive={item.iconactive}
                url={item.url}
                size={item.size}
              />
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
