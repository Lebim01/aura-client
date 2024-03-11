import { FC, ReactNode } from "react";
import HeaderDashboard from "../dashboard/HeaderDashboard";
import CategoryFilters from "../dashboard/components/filters/CategoryFilters";
import SearchInput from "../dashboard/components/filters/SearchInput";
import InputSearch from "./InputSearch";
import classNames from "classnames";
import DesktopNavigationButtons from "./DesktopNavigationButtons";
import ButtonLogout from "./ButtonLogout";
import Image from "next/image";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";
import useIsMobile from "@/hooks/useIsMobile";
import { classNamesCustom } from "@/utils/classes";
import useShowHideFilters from "@/store/useShowHideFilters";
import { useSession } from "next-auth/react";
import NavHeader from "./NavHeader";
import NavHeaderMobile from "./NavHeaderMobile";

type Props = {
  forceDisplay?: boolean;
  children: ReactNode;
};

const DesktopLayout: FC<Props> = ({ children, forceDisplay }) => {
  const router = useRouter();
  const pathname = usePathname();
  const isMobile = useIsMobile();
  const { status } = useSession();
  const HIDE_URL = ["/profile"];
  const { showHideFilters } = useShowHideFilters();

  if (pathname == "/discovery" || pathname.startsWith("/section"))
    return children;

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
    <div className="flex flex-col  gap-y-[30px] overflow-hidden md:h-screen">
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
