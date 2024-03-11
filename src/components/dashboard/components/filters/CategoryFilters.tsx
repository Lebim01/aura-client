import CategoryItem from "./components/CategoryItem";
import Platforms from "./components/Platforms";
import ButtonCommon from "@/components/common/ButtonCommon";
import Recommended from "./components/Recommended";
import { useState } from "react";
import useFiltersRecommended from "@/store/useFiltersRecommended";

const options = [
  {
    label: "Acción",
    value: "88a6f078-94d2-415b-9e34-c53371f0638d",
    img: "/categories/accion-min.jpg",
    style: {
      background:
        "linear-gradient(120.45deg, rgba(135, 0, 0, 0.788) 0.01%, rgba(25, 10, 5, 0.8) 100.84%)",
    },
  },
  {
    label: "Aventura",
    value: "788b8bbc-10ee-4aa5-8207-8f4b2baa5e4a",
    img: "/categories/aventura-min.jpg",
    style: {
      background:
        "linear-gradient(120.45deg, rgba(17, 153, 142, 0.788) 0.01%, rgba(56, 239, 125, 0.8) 100.84%)",
    },
  },
  {
    label: "Ciencia Ficción",
    value: "3865b9be-ab60-436a-84a1-ef7fda5abc88",
    img: "/categories/cienciaficcion-min.jpg",
    style: {
      background:
        "linear-gradient(90deg, rgba(166,164,92,0.788) 0%, rgba(83,71,21,0.8) 100%)",
    },
  },
  {
    label: "Comedia",
    value: "5c74c398-b060-4fc2-ba38-2ae381fdfc0e",
    img: "/categories/comedia-min.jpg",
    style: {
      background:
        "linear-gradient(90deg, rgba(249,177,141,0.788) 0%, rgba(249,177,141,0.8) 100%)",
    },
  },
  {
    label: "Documentales",
    value: "18c5299d-473e-44a2-9e9f-79f8dae23212",
    img: "/categories/documentales-min.jpg",
    style: {
      backgroundBlendMode: "color",
      background:
        "linear-gradient(90deg, rgba(247,245,239,0.788) 0%, rgba(224,220,205,0.8) 100%)",
    },
  },
  {
    label: "Drama",
    value: "80c69a86-b995-4267-a6b7-cd993e07b579",
    img: "/categories/drama-min.jpg",
    style: {
      background:
        "linear-gradient(90deg, rgba(50,144,209,0.9) 0%, rgba(50,144,209,0.8) 100%)",
    },
  },
  {
    label: "Fantasía",
    value: "30b91950-6a98-4bd4-be1c-d9e4fc930d5f",
    img: "/categories/fantasia-min.jpg",
    style: {
      background:
        "linear-gradient(90deg, rgba(162,81,166,0.788) 0%, rgba(162,81,166,0.8) 100%)",
    },
  },
  {
    label: "Musical",
    value: "b0cbfe5a-9bd6-4a35-9888-d555ae16444d",
    img: "/categories/musical-min.jpg",
    style: {
      background:
        "linear-gradient(90deg, rgba(40,91,137,0.9) 0%, rgba(51,222,224,0.9) 100%)",
    },
  },
  {
    label: "Romance",
    value: "15f4ce97-be2c-4633-9dd6-87e745fdfedc",
    img: "/categories/romance-min.jpg",
    style: {
      background:
        "linear-gradient(90deg, rgba(223,186,230,0.788) 0%, rgba(223,186,230,0.8) 100%)",
    },
  },
  {
    label: "Suspenso",
    value: "08b92c7a-ddb1-4dd5-8dd0-884fc7e549d5",
    img: "/categories/suspenso-min.jpg",
    style: {
      background:
        "linear-gradient(90deg, rgba(152,152,152,0.9) 0%, rgba(102,97,97,0.8) 100%)",
    },
  },
  {
    label: "Terror",
    value: "01fda2ce-40c2-41ba-8e57-9bc82e8dcbce",
    img: "/categories/terror-min.jpg",
    style: {
      background:
        "linear-gradient(90deg, rgba(56,56,56,0.9) 0%, rgba(32,26,26,0.8) 100%)",
    },
  },
];

const platforms = [
  {
    id: "3994a773-a7cb-4521-8c6a-9603843213c2",
    name: "netflix",
    logo_url: "/icons/netflix.svg",
  },
  {
    id: "f9d25f46-085d-48b7-bcf0-589d65a38b27",
    name: "hbo-max",
    logo_url: "/icons/hbomax.png",
  },
  {
    id: "4aaa0cf6-68c1-4e5e-bd70-00ee377059fa",
    name: "apple-tv",
    logo_url: "/icons/apple-tv.png",
  },
  {
    id: "7314cdc2-5242-4f64-af7d-f12752a9d915",
    name: "disney+",
    logo_url: "/icons/disney+.png",
  },
  {
    id: "f3ae6bb1-6142-49ee-bd00-0bc82b90929b",
    name: "star+",
    logo_url: "/icons/starplus.jpg",
  },
  {
    id: "2db6b8b5-4d5e-4b41-88c2-46aa67f16aa1",
    name: "vix",
    logo_url: "/icons/vix.png",
  },
  {
    id: "83991d40-7578-4a63-9083-3eb1cf880a3f",
    name: "prime-video",
    logo_url: "/icons/primevideo.png",
  },
  {
    id: "b0c10aa4-0a88-4741-a08b-04218167a23e",
    name: "paramount",
    logo_url: "/icons/paramount.png",
  },
];

const CategoryFilters = () => {
  const [showRecommended, setShowRecommended] = useState(false);
  const { filters } = useFiltersRecommended();

  return (
    <>
      {showRecommended && (
        <Recommended setShow={setShowRecommended} show={showRecommended} />
      )}

      <div className="flex flex-col gap-y-[12px] md:gap-y-[16px] rounded-[12px] md:bg-transparent bg-menus-mobile md:min-w-[326px] md:max-w-[326px] p-[16px] md:p-0">
        <div className="flex flex-col gap-y-[12px] md:gap-y-[37px]">
          <div className="flex flex-col gap-y-[12px]">
            <span className="font-[600] leading-[150%] text-[14px]">
              ¿Qué quieres ver hoy?
            </span>
            <div className="w-full flex justify-between">
              <div className="grid grid-cols-3 gap-[8px] w-full">
                {options.map((item: any, index: number) => {
                  return (
                    <CategoryItem
                      label={item.label}
                      value={item.value}
                      image={item.img}
                      bg={item.style}
                      key={index}
                    />
                  );
                })}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-y-[12px]">
            <span className="font-[600] leading-[150%] text-[14px]">
              Plataformas
            </span>
            <div className="flex justify-center items-center">
              <div className="grid grid-cols-4 gap-[8px] justify-center items-center">
                {platforms.map((item, index: number) => {
                  return (
                    <Platforms
                      icon={item.logo_url}
                      value={item.name}
                      key={index}
                    />
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
      </div>
    </>
  );
};

export default CategoryFilters;
