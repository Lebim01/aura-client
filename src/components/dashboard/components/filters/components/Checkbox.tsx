"use client";

import Image from "next/image";
import useFiltersRecommended from "@/store/useFiltersRecommended";
import { classNamesCustom } from "@/utils/classes";
import { useEffect } from "react";
interface Props {
  label: string;
  value: string;
  image: string;
}
const Checkbox = ({ label, value, image }: Props) => {
  const { filters, setFilters } = useFiltersRecommended();
  const isActive = filters.categories === value;

  const handleClick = () => {
    if (isActive) {
      setFilters({ ...filters, categories: "" });
    } else {
      setFilters({ ...filters, categories: value });
    }
  };

  return (
    <div
      className={classNamesCustom("rounded-[6px] border border-transparent", {
        "border border-yellow-aura-accent shadow-[0px_0px_0px_3px_rgba(251,188,5,0.20)]":
          isActive,
      })}
    >
      <Image
        src={image}
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
        alt=""
        className={classNamesCustom(
          "md:hover:scale-105 transition-transform duration-200 ease-in-out cursor-pointer select-none"
        )}
        onClick={handleClick}
      />
    </div>
  );
};

export default Checkbox;
