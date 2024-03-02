import React from "react";
import Image from "next/image";
import { Genre, Serie } from "@/types/series";
import ButtonTrailer from "./ViewTrailer";
import Rating from "./Rating";
import { classNamesCustom } from "@/utils/classes";
import useIsMobile from "@/hooks/useIsMobile";
import Rate from "./Rate";
import useRatedByMe from "@/hooks/useRatedByMe";

type Props = {
  serie: Serie;
  genres: Genre[];
  openTrailer: () => void;
};

export default function Large({ serie, genres, ...props }: Props) {
  const isMobile = useIsMobile();
  const rated_by_me = useRatedByMe(serie.id);

  return (
    <div className="px-[16px]">
      <div
        className={classNamesCustom(
          "flex flex-col gap-y-[16px] px-[16px] py-[12px]  md:bg-black md:bg-opacity-50 rounded-[16px]",
          { "bg-bg-gradient-detail-card": isMobile }
        )}
      >
        <div className="w-full flex gap-x-[8px] items-center md:gap-x-[24px]">
          <Image
            width={80}
            height={80}
            src={serie?.poster_path}
            alt=""
            className="rounded-[4px] bg-white object-cover w-[56px] h-[56px] md:w-[80px] md:h-[80px] md:shadow-[0px_1px_11px_2px_#FBBC05E0]"
          />
          <div className="flex flex-col md:flex-row md:items-center md:gap-x-[8px]">
            <span className="text-[14px] md:text-[32px] md:leading-none font-[600] leading-[150%]">
              {serie?.title}
            </span>
            <span className="text-[12px] md:text-[16px] font-[600] leading-[150%] opacity-60 md:text-yellow-aura-accent md:hidden ">
              {genres
                .filter((g) => g.image != "")
                .map((genre) => genre.name)
                .join(", ")}
            </span>
            {genres
              ?.filter((r) => r.image != "")
              .map((genre, index) => (
                <div
                  key={index}
                  className="relative  flex-col items-center justify-center h-full text-center md:flex hidden"
                >
                  <Image src={genre.image} width={100} height={100} alt="" />
                  <span className="absolute text-white text-[14px]">
                    {genre.name}
                  </span>
                </div>
              ))}
          </div>
        </div>
        <span
          className="text-[12px] md:text-[14px] md:max-w-[50%] md:leading-[21px] leading-[130%] overflow-hidden block text-ellipsis"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: "2",
            WebkitBoxOrient: "vertical",
          }}
        >
          {serie?.overview}
        </span>
        <Rating qualification={serie.rating} />
        <div className="md:flex-row flex gap-y-[16px] md:gap-y-0 flex-col md:gap-x-[24px] mt-[8px] md:mt-0">
          <Rate qualification={rated_by_me} id={serie.id} />

          {serie.trailer && <ButtonTrailer open={props.openTrailer} />}
        </div>
      </div>
    </div>
  );
}
