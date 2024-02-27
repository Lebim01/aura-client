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
import useShowHideFilters from "@/store/useShowHideFilters";

type Props = {
  forceDisplay?: boolean;
  children: ReactNode;
};

const DesktopLayout: FC<Props> = ({ children, forceDisplay }) => {
  const router = useRouter();
  const pathname = usePathname();
  const isMobile = useIsMobile();
  const HIDE_URL = ["/profile"];

  return (
    <div className="flex flex-col md:flex-row gap-y-[16px] w-screen  max-w-screen overflow-x-hidden md:max-w-[1440px]  md:justify-center md:mx-auto pt-[24px] ">
      <div
        className={classNames(
          "md:flex flex-col gap-y-[16px] md:gap-y-[8px] px-[16px] md:min-w-[384px] md:max-w-[384px] overflow-y-auto md:h-screen hidescroll",
          {
            hidden: !forceDisplay || HIDE_URL.includes(pathname),
            flex: forceDisplay,
          }
        )}
      >
        <Image
          src={"/logo_opaque.svg"}
          width={57}
          height={17}
          alt=""
          className="  cursor-pointer hover:scale-110 duration-300 trasition-all"
          onClick={() => router.push("/dashboard")}
        />

        <HeaderDashboard />
        {pathname !== "/search" && isMobile ? (
          <SearchInput />
        ) : (
          isMobile && (
            <InputSearch
              icon={"/icons/search.svg"}
              iconactive={"/icons/search-active.svg"}
              url={"/search"}
              size={20}
            />
          )
        )}

        <DesktopNavigationButtons />
        {router.pathname !== "/search" && <CategoryFilters />}
        <ButtonLogout />
      </div>
      {children}
    </div>
  );
};

export default DesktopLayout;
