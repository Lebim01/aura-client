"use client";

import Image from "next/image";
import Checkbox from "./components/Checkbox";
import Platforms from "./components/Platforms";
import ButtonCommon from "@/components/common/ButtonCommon";
import Recommended from "./components/Recommended";
import { useState, useEffect } from "react";
import useShowHideFilters from "@/store/useShowHideFilters";
import useIsMobile from "@/hooks/useIsMobile";

const options = [
  { label: "Acción", value: "", img: "/categories/accion.png" },
  { label: "Aventura", value: "", img: "/categories/aventura.png" },
  {
    label: "Ciencia Ficción",
    value: "",
    img: "/categories/cienciaficcion.png",
  },
  { label: "Comedia", value: "", img: "/categories/comedia.png" },
  {
    label: "Documentales",
    value: "",
    img: "/categories/documentales.png",
  },
  { label: "Drama", value: "", img: "/categories/drama.png" },
  { label: "Fantasía", value: "", img: "/categories/fantasia.png" },
  { label: "Suspenso", value: "", img: "/categories/suspenso.png" },
  { label: "Terror", value: "", img: "/categories/terror.png" },
];

const platforms = [
  { icon: "/icons/netflix.svg", value: "" },
  { icon: "/icons/primevideo.svg", value: "" },
  { icon: "/icons/disney.svg", value: "" },
  { icon: "/icons/paramount.svg", value: "" },
  { icon: "/icons/vix.svg", value: "" },
  { icon: "/icons/hbo.svg", value: "" },
];
const CategoryFilters = () => {
  const [showRecommended, setShowRecommended] = useState(false);
  const { showHideFilters } = useShowHideFilters();
  const [maxHeight, setMaxHeight] = useState("0px");
  const isMobile = useIsMobile();

  useEffect(() => {
    if (showHideFilters) {
      setMaxHeight(isMobile ? "540.75px" : "fit-content");
    } else {
      setMaxHeight("0px");
    }
  }, [showHideFilters, isMobile]);

  return (
    <div
      style={{
        maxHeight: maxHeight,
        overflow: "hidden",
        transition: "max-height 0.5s ease-in-out",
      }}
    >
      {showRecommended && (
        <Recommended setShow={setShowRecommended} show={showRecommended} />
      )}

      <div className="flex flex-col p-[16px] gap-y-[12px] md:gap-y-[16px] rounded-[12px] md:bg-menus bg-menus-mobile md:w-full">
        <div className="flex flex-col gap-y-[12px] md:gap-y-[16px]">
          <span className="font-[600] leading-[150%] text-[14px]">
            ¿Qué quieres ver hoy?
          </span>
          <div className="w-full flex justify-between">
            <div className="grid grid-cols-3 gap-[8px] w-full">
              {options.map((item: any, index: number) => {
                return (
                  <Checkbox
                    label={item.label}
                    value={item.value}
                    image={item.img}
                    key={index}
                  />
                );
              })}
            </div>
          </div>
          <div className="w-full h-[1px] border border-white border-opacity-20 "></div>

          <span className="font-[600] leading-[150%] text-[14px]">
            Plataformas
          </span>
          <div className="flex justify-center items-center">
            <div className="grid grid-cols-3 gap-[8px] justify-center items-center">
              {platforms.map((item: any, index: number) => {
                return (
                  <Platforms icon={item.icon} value={item.value} key={index} />
                );
              })}
            </div>
          </div>
          <ButtonCommon
            text="RECOMENDAR"
            disabled={false}
            onClick={() => {
              setShowRecommended(true);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default CategoryFilters;
