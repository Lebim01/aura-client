"use client";

import Image from "next/image";
import Checkbox from "./components/Checkbox";
import Platforms from "./components/Platforms";
import ButtonCommon from "@/components/common/ButtonCommon";
import Recommended from "./components/Recommended";
import { useState, useEffect, useRef } from "react";
import useShowHideFilters from "@/store/useShowHideFilters";
import useIsMobile from "@/hooks/useIsMobile";

const options = [
  { label: "Acción", value: "accion", img: "/categories/accion.png" },
  { label: "Aventura", value: "aventura", img: "/categories/aventura.png" },
  {
    label: "Ciencia Ficción",
    value: "cienciaficcion",
    img: "/categories/cienciaficcion.png",
  },
  { label: "Comedia", value: "Comedia", img: "/categories/comedia.png" },
  {
    label: "Documentales",
    value: "documentales",
    img: "/categories/documentales.png",
  },
  { label: "Drama", value: "drama", img: "/categories/drama.png" },
  { label: "Fantasía", value: "fantasia", img: "/categories/fantasia.png" },
  { label: "Suspenso", value: "suspenso", img: "/categories/suspenso.png" },
  { label: "Terror", value: "terror", img: "/categories/terror.png" },
];

const platforms = [
  { icon: "/icons/netflix.svg", value: "netflix" },
  { icon: "/icons/primevideo.svg", value: "primevideo" },
  { icon: "/icons/disney.svg", value: "disney" },
  { icon: "/icons/paramount.svg", value: "paramount" },
  { icon: "/icons/vix.svg", value: "vix" },
  { icon: "/icons/hbo.svg", value: "hbo" },
];

const CategoryFilters = () => {
  const [showRecommended, setShowRecommended] = useState(false);
  const { showHideFilters } = useShowHideFilters();
  const isMobile = useIsMobile();
  const containerRef = useRef<any>(null);

  useEffect(() => {
    if (showHideFilters && containerRef.current && isMobile) {
      setTimeout(() => {
        const height = containerRef.current.scrollHeight;
        containerRef.current.style.maxHeight = `${height}px`;
      }, 100);
    } else {
      containerRef.current.style.maxHeight = "0px";
    }
  }, [showHideFilters, isMobile]);

  return (
    <div>
      {showRecommended && (
        <Recommended setShow={setShowRecommended} show={showRecommended} />
      )}
      {/* Desktop */}
      <div className="md:flex flex-col p-[16px] gap-y-[12px] md:gap-y-[16px] rounded-[12px] md:bg-menus bg-menus-mobile md:w-full hidden">
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
      {/* Mobile */}
      <div
        ref={containerRef}
        style={{
          transition: "max-height 0.5s ease-in-out",
          overflowY: "hidden",
        }}
        className="md:hidden"
      >
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
                    <Platforms
                      icon={item.icon}
                      value={item.value}
                      key={index}
                    />
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
    </div>
  );
};

export default CategoryFilters;
