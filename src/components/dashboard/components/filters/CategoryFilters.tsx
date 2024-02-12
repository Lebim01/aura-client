"use client";

import Checkbox from "./components/Checkbox";
import Platforms from "./components/Platforms";
import ButtonCommon from "@/components/common/ButtonCommon";

const options = [
  { label: "Acción", value: "" },
  { label: "Aventura", value: "" },
  { label: "Ciencia Ficción", value: "" },
  { label: "Comedia", value: "" },
  { label: "Documentales", value: "" },
  { label: "Drama", value: "" },
  { label: "Fantasía", value: "" },
  { label: "Suspenso", value: "" },
  { label: "Terror", value: "" },
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
  return (
    <div className="w-full">
      <div className="flex flex-col p-[16px] gap-y-[12px] rounded-[12px] bg-black-29 md:w-max">
        <div className="flex flex-col gap-y-[12px]">
          <span className="font-[600] leading-[150%] text-[14px]">
            ¿Qué quieres ver hoy?
          </span>
          <div className="w-full flex justify-between">
            <div className="grid grid-cols-3 gap-4">
              {options.map((item: any, index: number) => {
                return (
                  <Checkbox label={item.label} value={item.value} key={index} />
                );
              })}
            </div>
          </div>
          <div className="w-full h-[1px] border border-white border-opacity-20 "></div>

          <span className="font-[600] leading-[150%] text-[14px]">
            Plataformas
          </span>

          <div className="flex justify-between">
            {platforms.map((item: any, index: number) => {
              return (
                <Platforms icon={item.icon} value={item.value} key={index} />
              );
            })}
          </div>
          <ButtonCommon text="BUSCAR" disabled={true} onClick={() => {}} />
        </div>
      </div>
    </div>
  );
};

export default CategoryFilters;
