"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { classNamesCustom } from "@/utils/classes";
import useShowHideFooterStore from "@/store/showHideFooterStore";

export const navigationOptions = [
  {
    url: "/dashboard",
    title: "Inicio",
    icon: "/icons/home.svg",
    iconactive: "/icons/home-active.svg",
    size: 20,
    hide: false,
  },
  {
    url: "/search",
    title: "Buscar",
    icon: "/icons/search.svg",
    iconactive: "/icons/search-active.svg",
    size: 20,
    type: "button",
    hide: true,
  },
  {
    url: "/discovery",
    title: "Descubrir",
    icon: "/icons/discovery.svg",
    iconactive: "/icons/discovery-active.svg",
    size: 14,
    hide: false,
  },
  {
    url: "/convocatoria",
    title: "Premios Aura",
    icon: "/icons/paper.svg",
    iconactive: "/icons/paper-active.svg",
    size: 14,
    hide: false,
    hideMobile: true
  },
];
const Footer = () => {
  const router = useRouter();
  const { showHideFooter, toggleFooter } = useShowHideFooterStore();

  return (
    <div
      className={classNamesCustom(
        "md:hidden w-full p-[16px] fixed bottom-0 z-[50]",
        {
          hidden: showHideFooter,
        }
      )}
    >
      <div className="w-full bg-footer-dash px-[40px] py-[8px] rounded-[100px] flex items-center justify-between border border-footer-dash-border backdrop-blur-[7.5px]">
        {navigationOptions.map((item: any, index: number) => {
          return (
            <Link
              href={item.url}
              className="flex flex-col justify-center items-center text-center text-[12px]"
              key={index}
            >
              <Image
                src={router.pathname === item.url ? item.iconactive : item.icon}
                alt=""
                width={item.size}
                height={item.size}
              />
              <span
                className={classNamesCustom(
                  "font-[500] leading-[150%] w-full text-center",
                  {
                    "text-yellow-aura-accent ": router.pathname === item.url,
                  },
                  {
                    "text-white ": !router.pathname === item.url,
                  }
                )}
              >
                {item.title}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Footer;
