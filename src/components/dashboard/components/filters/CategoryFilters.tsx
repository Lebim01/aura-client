"use client";

import Image from "next/image";
import Checkbox from "./components/Checkbox";
import Platforms from "./components/Platforms";
import ButtonCommon from "@/components/common/ButtonCommon";
import Recommended from "./components/Recommended";
import { useState } from "react";
import useFiltersRecommended from "@/store/useFiltersRecommended";

const options = [
  {
    label: "Acción",
    value: "88a6f078-94d2-415b-9e34-c53371f0638d",
    img: "/categories/accion.png",
  },
  {
    label: "Aventura",
    value: "788b8bbc-10ee-4aa5-8207-8f4b2baa5e4a",
    img: "/categories/aventura.png",
  },
  {
    label: "Ciencia Ficción",
    value: "3865b9be-ab60-436a-84a1-ef7fda5abc88",
    img: "/categories/cienciaficcion.png",
  },
  {
    label: "Comedia",
    value: "5c74c398-b060-4fc2-ba38-2ae381fdfc0e",
    img: "/categories/comedia.png",
  },
  {
    label: "Documentales",
    value: "18c5299d-473e-44a2-9e9f-79f8dae23212",
    img: "/categories/documentales.png",
  },
  {
    label: "Drama",
    value: "80c69a86-b995-4267-a6b7-cd993e07b579",
    img: "/categories/drama.png",
  },
  {
    label: "Fantasía",
    value: "30b91950-6a98-4bd4-be1c-d9e4fc930d5f",
    img: "/categories/fantasia.png",
  },
  {
    label: "Suspenso",
    value: "08b92c7a-ddb1-4dd5-8dd0-884fc7e549d5",
    img: "/categories/suspenso.png",
  },
  {
    label: "Terror",
    value: "01fda2ce-40c2-41ba-8e57-9bc82e8dcbce",
    img: "/categories/terror.png",
  },
];

const platforms = [
  { icon: "/icons/netflix.svg", value: "netflix" },
  { icon: "/icons/hbo.svg", value: "hbo-max" },
  { icon: "/icons/apple-tv.png", value: "apple-tv" },
  { icon: "/icons/disney.svg", value: "disney+" },
  { icon: "/icons/starplus.jpg", value: "star+" },
  { icon: "/icons/vix.svg", value: "vix" },
];

const CategoryFilters = () => {
  const [showRecommended, setShowRecommended] = useState(false);
  const { filters } = useFiltersRecommended();

  return (
    <>
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
            disabled={!(filters && filters?.category && filters?.platform)}
            onClick={() => {
              setShowRecommended(true);
            }}
          />
        </div>
      </div>
    </>
  );
};

export default CategoryFilters;
