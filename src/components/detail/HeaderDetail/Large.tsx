import React from "react";
import Image from "next/image";
import { Genre, Movie } from "@/types/movies";
import Link from "next/link";
import ButtonTrailer from "./ViewTrailer";
import Rating from "./Rating";

type Props = {
  movie: Movie;
  genres: Genre[];
};

export default function Large({ movie, genres }: Props) {
  const brackdrop_css = movie?.backdrop_path
    ? `, url(${movie?.backdrop_path})`
    : "";
  return (
    <div className="flex flex-col w-full relative px-[16px] pt-[16px]">
      <div className="w-full rounded-lg bg-gray-400 relative overflow-hidden min-h-[423px] md:min-h-[400px]">
        <div
          style={{
            backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0))${brackdrop_css}`,
          }}
          className="absolute inset-0 w-full h-full bg-cover bg-center"
        />
        <div className="absolute inset-0 flex flex-col justify-between">
          <div className="flex-grow"></div>
          <div className="p-[16px] md:pb-[48px]">
            <div className="flex flex-col gap-y-[16px]">
              <div className="flex flex-col gap-y-[8px] md:gap-y-[24px]">
                <div className="w-full flex gap-x-[8px] items-center md:items-start md:gap-x-[24px]">
                  <Image
                    width={80}
                    height={80}
                    src={movie?.poster_path}
                    alt=""
                    className="rounded-[4px] bg-white object-cover w-[56px] h-[56px] md:w-[80px] md:h-[80px] md:shadow-[0px_1px_11px_2px_#FBBC05E0]"
                  />
                  <div className="flex flex-col">
                    <span className="text-[14px] md:text-[32px] md:leading-none font-[600] leading-[150%]">
                      {movie?.original_title}
                    </span>
                    <span className="text-[12px] md:text-[16px] font-[600] leading-[150%] opacity-60 md:text-yellow-aura-accent">
                      {genres &&
                        genres.map((genre: any) => genre.name).join(", ")}
                    </span>
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
                  {movie?.overview}
                </span>
                <div className="w-full h-px bg-white bg-opacity-40 md:hidden"></div>
              </div>
              <div className="flex space-x-4">
                <Rating qualification={9.05} />
                <ButtonTrailer />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
