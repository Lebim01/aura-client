"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { classNamesCustom } from "@/utils/classes";

const items = [
  {
    url: "/dashboard",
    title: "Inicio",
    icon: "/icons/home.svg",
    iconactive: "/icons/home-active.svg",
    size: 20,
  },
  {
    url: "/search",
    title: "Buscar",
    icon: "/icons/search.svg",
    iconactive: "/icons/search-active.svg",
    size: 20,
  },
  {
    url: "/discover",
    title: "Descubrir",
    icon: "/icons/discover.svg",
    iconactive: "/icons/discover-active.svg",
    size: 14,
  },
];
const Footer = () => {
  const router = useRouter();
  return (
    <div className="w-full p-[16px] sticky bottom-0 z-[50]">
      <div className="w-full bg-footer-dash px-[40px] py-[8px] rounded-[100px] flex items-center justify-between border border-footer-dash-border">
        {items.map((item: any, index: number) => {
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
