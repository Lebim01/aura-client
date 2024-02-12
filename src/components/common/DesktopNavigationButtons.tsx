import Link from "next/link";
import { navigationOptions } from "./Footer";
import Image from "next/image";
import classNames from "classnames";
import { usePathname } from "next/navigation";

const DesktopNavigationButtons = () => {
  const pathname = usePathname();
  return (
    <div className="flex flex-col rounded-[12px] overflow-hidden">
      {navigationOptions.map((item, index) => (
        <Link
          href={item.url}
          className="text-[12px] p-[16px] bg-black-29 hover:bg-black-29/50"
          key={index}
        >
          <div className="flex space-x-[16px] items-center">
            <Image
              src={pathname === item.url ? item.iconactive : item.icon}
              alt=""
              width={item.size}
              height={item.size}
            />
            <span
              className={classNames(
                "font-[500] leading-[150%]",
                {
                  "text-yellow-aura-accent ": pathname === item.url,
                  "text-white ": !(pathname === item.url),
                }
              )}
            >
              {item.title}
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default DesktopNavigationButtons;
