import { FC, ReactNode } from "react";
import HeaderDashboard from "../dashboard/HeaderDashboard";
import CategoryFilters from "../dashboard/components/filters/CategoryFilters";
import SearchInput from "../dashboard/components/filters/SearchInput";
import classNames from "classnames";
import DesktopNavigationButtons from "./DesktopNavigationButtons";
import ButtonLogout from "./ButtonLogout";
import Image from "next/image";
type Props = {
  forceDisplay?: boolean;
  children: ReactNode;
};

const DesktopLayout: FC<Props> = ({ children, forceDisplay }) => {
  return (
    <div className="flex flex-col md:flex-row gap-y-[16px] w-screen bg-black-0D overflow-y-auto hidescroll max-w-screen md:pr-[16px] overflow-x-hidden md:max-w-[1440px] md:justify-center md:mx-auto">
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
          className="py-[16px]"
        />

        <HeaderDashboard />
        <SearchInput />
        <DesktopNavigationButtons />
        <CategoryFilters />
        <ButtonLogout />
      </div>
      {children}
    </div>
  );
};

export default DesktopLayout;
