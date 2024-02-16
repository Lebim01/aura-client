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

type Props = {
  forceDisplay?: boolean;
  children: ReactNode;
};

const DesktopLayout: FC<Props> = ({ children, forceDisplay }) => {
  const router = useRouter();
  const pathname = usePathname();
  const isMobile = useIsMobile();

  return (
    <div className="flex flex-col md:flex-row gap-y-[16px] w-screen bg-black-0D overflow-y-auto hidescroll max-w-screen overflow-x-hidden md:max-w-[1440px] md:min-w-[1440px] md:justify-center md:mx-auto">
      <div
        className={classNames(
          "md:flex flex-col gap-y-[16px] px-[16px] md:py-[24px]",
          {
            hidden: !forceDisplay,
            flex: forceDisplay,
          }
        )}
      >
        <Image
          src={"/logo_opaque.svg"}
          width={88}
          height={17}
          alt=""
          className="md:py-[16px] pt-[16px] md:pt-0 cursor-pointer hover:scale-110 duration-300 trasition-all"
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
        <CategoryFilters />
        <ButtonLogout />
      </div>
      {children}
    </div>
  );
};

export default DesktopLayout;
