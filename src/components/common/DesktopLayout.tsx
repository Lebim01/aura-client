"use client";
import { FC, ReactNode } from "react";
import CategoryFilters from "../dashboard/components/filters/CategoryFilters";
import DesktopNavigationButtons from "./DesktopNavigationButtons";

import useIsMobile from "@/hooks/useIsMobile";
import NavHeader from "./NavHeader";
import NavHeaderMobile from "./NavHeaderMobile";
import { useRouter } from "next/router";

type Props = {
  children: ReactNode;
  isMobile: boolean;
};

const DesktopLayout: FC<Props> = ({ children, isMobile }) => {
  const router = useRouter();

  if (
    (isMobile && router.pathname == "/discovery") ||
    router.pathname.startsWith("/section")
  )
    return children;

  if (isMobile && router.pathname == "/profile") return children;

  if (isMobile) {
    return (
      <div className="flex flex-col">
        <div className="p-[16px]">
          <NavHeaderMobile />
          {children}
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-y-[30px] overflow-hidden md:h-screen">
      <NavHeader />
      <div className="flex flex-col-reverse md:flex-row items-start justify-between gap-x-[24px] md:px-[24px]">
        <DesktopNavigationButtons />
        {children}
        <CategoryFilters />
      </div>
    </div>
  );
};

export default DesktopLayout;
