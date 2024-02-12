import React from "react";
import Image from "next/image";
import { Genre, Movie } from "@/types/movies";

type Props = {
  movie: Movie;
  genres: Genre[];
};

export default function Middle({ movie, genres }: Props) {
  return (
    <div className="flex flex-col w-full relative px-[16px] pt-[16px]">
      <div className="w-full rounded-lg bg-gray-400 relative overflow-hidden min-h-[291px]">
        <div
          style={{
            width: "100%",
            height: "100%",
            backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0))${
              movie?.backdrop_path ? `, url(${movie?.backdrop_path})` : ""
            }`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="absolute inset-0 w-full h-full"
        />
        <div className="absolute inset-0 flex flex-col justify-between">
          <div className="flex-grow"></div>
          <div className="p-[16px]">
            <div className="flex flex-col gap-y-[16px]">
              <div className="flex flex-col gap-y-[8px] py-[16px]">
                <div className="w-full flex gap-x-[8px] items-center">
                  <Image
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "56px", height: "56px" }}
                    src={movie?.poster_path}
                    alt=""
                    className="rounded-[4px] bg-white object-cover"
                  />
                  <div className="flex flex-col">
                    <span className="text-[14px] font-[600] leading-[150%]">
                      {movie?.original_title}
                    </span>
                    <span className="text-[12px] font-[600] leading-[150%] opacity-60">
                      {genres?.map((genre) => genre.name).join(", ")}
                    </span>
                  </div>
                </div>
                <span
                  className="text-[12px] leading-[130%] overflow-hidden block text-ellipsis max-h-[calc(2*1.3*12px)]"
                  style={{
                    display: "-webkit-box",
                    WebkitLineClamp: "2",
                    WebkitBoxOrient: "vertical",
                  }}
                >
                  {movie?.overview}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
