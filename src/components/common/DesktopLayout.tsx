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

type Props = {
  forceDisplay?: boolean;
  children: ReactNode;
};

const DesktopLayout: FC<Props> = ({ children, forceDisplay }) => {
  const router = useRouter();
  const pathname = usePathname();
  const isMobile = useIsMobile();
  const { status } = useSession();
  const isLogged = status == "authenticated";
  const HIDE_URL = ["/profile"];
  const { showHideFilters } = useShowHideFilters();

  return (
    <div
      className={classNamesCustom(
        "flex flex-col md:flex-row gap-y-[16px] w-screen  max-w-screen overflow-x-hidden md:max-w-[1440px]  md:justify-center md:mx-auto md:pt-[24px] pt-[16px]",
        { "pt-0": ["/profile", "/discovery"].includes(router.pathname) }
      )}
    >
      <div
        className={classNames(
          "md:flex flex-col gap-y-[16px] md:gap-y-[8px] h-fit px-[16px] md:min-w-[384px] md:max-w-[384px] overflow-y-hidden md:overflow-y-auto md:h-screen  md:pb-[48px] hidescroll pt-[16px]",
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
          className="cursor-pointer hover:scale-110 duration-300 trasition-all"
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
        {router.pathname !== "/search" && showHideFilters && (
          <CategoryFilters />
        )}
        {isLogged && <ButtonLogout />}
      </div>
      {children}
    </div>
  );
};

export default DesktopLayout;
