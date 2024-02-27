import React, { Fragment } from "react";
import Image from "next/image";
import { Genre, Serie } from "@/types/series";
import ButtonTrailer from "./ViewTrailer";
import Rating from "./Rating";

type Props = {
  serie: Serie;
  genres: Genre[];
  openTrailer: () => void;
};

export default function Large({ serie, genres, ...props }: Props) {
  const brackdrop_css = serie?.backdrop_path
    ? `, url(${serie?.backdrop_path})`
    : "";

  return (
    <div className="flex flex-col gap-y-[8px] md:gap-y-[16px] px-[16px] py-[12px] bg-black bg-opacity-50 rounded-[16px]">
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
                className="relative flex flex-col items-center justify-center h-full text-center"
              >
                <Image
                  src={genre.image}
                  width={100}
                  height={100}
                  alt=""
                  className="md:block"
                />
                <span className="absolute text-white text-[10px]">
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
      <div className="flex space-x-4">
        <Rating qualification={9.05} />
        {serie.trailer && <ButtonTrailer open={props.openTrailer} />}
      </div>
    </div>
  );
}
