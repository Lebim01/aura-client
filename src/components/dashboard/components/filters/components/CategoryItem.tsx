import Image from "next/image";
import useFiltersRecommended from "@/store/useFiltersRecommended";
import { classNamesCustom } from "@/utils/classes";
import { CSSProperties } from "react";

interface Props {
  label: string;
  value: string;
  image: string;
  bg?: CSSProperties;
}

const CategoryItem = ({ label, value, image, bg }: Props) => {
  const { filters, setFilters } = useFiltersRecommended();
  const isActive = filters.category === value;

  const handleClick = () => {
    if (isActive) {
      setFilters({ ...filters, category: "" });
    } else {
      setFilters({ ...filters, category: value });
    }
  };

  return (
    <div
      className={classNamesCustom(
        "rounded-[6px] border border-transparent md:hover:scale-105 transition-transform duration-200 ease-in-out cursor-pointer relative overflow-hidden select-none hover:cursor-pointer",
        {
          "border border-yellow-aura-accent shadow-[0px_0px_0px_3px_rgba(251,188,5,0.30)]":
            isActive,
        }
      )}
      onClick={handleClick}
    >
      <Image
        src={image}
        width={0}
        height={62}
        sizes="100vw"
        style={{ width: "100%", height: 62 }}
        alt=""
        className={classNamesCustom("select-none object-cover")}
      />
      <div className="absolute top-0 left-0 h-full w-full" style={bg}></div>
      <label className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-sm hover:cursor-pointer">
        {label}
      </label>
    </div>
  );
};

export default CategoryItem;
