import { FC, ReactNode } from "react";
import HeaderDashboard from "../dashboard/HeaderDashboard";
import CategoryFilters from "../dashboard/components/filters/CategoryFilters";
import SearchInput from "../dashboard/components/filters/SearchInput";
import classNames from "classnames";

type Props = {
  forceDisplay?: boolean;
  children: ReactNode;
};

const DesktopLayout: FC<Props> = ({ children, forceDisplay }) => {
  return (
    <div className="flex flex-col md:flex-row gap-y-[16px] w-screen bg-black-0D overflow-y-auto hidescroll max-w-screen mix-w-screen md:pr-[16px] overflow-x-hidden">
      <div
        className={classNames("md:flex flex-col gap-y-[16px]", {
          hidden: !forceDisplay,
        })}
      >
        <HeaderDashboard />
        <SearchInput />
        <CategoryFilters />
      </div>
      {children}
    </div>
  );
};

export default DesktopLayout;
