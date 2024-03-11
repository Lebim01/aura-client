import { FC, ReactNode } from "react";
import CategoryFilters from "../dashboard/components/filters/CategoryFilters";
import DesktopNavigationButtons from "./DesktopNavigationButtons";
import { usePathname } from "next/navigation";
import useIsMobile from "@/hooks/useIsMobile";
import NavHeader from "./NavHeader";
import NavHeaderMobile from "./NavHeaderMobile";

type Props = {
  children: ReactNode;
};

const DesktopLayout: FC<Props> = ({ children }) => {
  const pathname = usePathname();
  const isMobile = useIsMobile();

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
