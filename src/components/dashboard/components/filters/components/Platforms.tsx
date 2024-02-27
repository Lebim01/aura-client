"use client";
import useFiltersRecommended from "@/store/useFiltersRecommended";
import { classNamesCustom } from "@/utils/classes";
import Image from "next/image";
import { useEffect } from "react";
interface Props {
  icon: string;
  value: string;
}
const Platforms = ({ icon, value }: Props) => {
  const { filters, setFilters } = useFiltersRecommended();
  const isActive = filters.platforms === value;

  const handleClick = () => {
    if (isActive) {
      setFilters({ ...filters, platforms: "" });
    } else {
      setFilters({ ...filters, platforms: value });
    }
  };

  return (
    <div
      className={classNamesCustom(
        "w-[78px] h-[78px] bg-black-18 flex justify-center rounded-[6px] md:hover:scale-105 transition-transform duration-200 ease-in-out cursor-pointer border border-border-search",
        {
          "border border-yellow-aura-accent shadow-[0px_0px_0px_3px_rgba(251,188,5,0.20)]":
            isActive,
        }
      )}
      onClick={handleClick}
    >
      <Image src={icon} width={68} height={68} alt="" />
    </div>
  );
};

export default Platforms;
