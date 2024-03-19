import React from "react";
import Image from "next/image";
import { Actor, Serie, Platform, Crew } from "@/types/series";
import Link from "next/link";

type Props = {
  serie: Serie;
  actors: Actor[];
  crew: Crew[];
  platforms: Platform[];
};

export default function Sinopsis({ serie, actors, platforms, crew }: Props) {
  return (
    <div className="flex flex-col gap-y-[24px] md:px-[16px]">
      <div className="flex flex-col gap-y-[8px]">
        <span className="text-[12px] md:text-[16px] font-[700]">Sinopsis</span>
        <span className="text-[12px] md:text-[14px] font-[300] leading-[140%]">
          {serie?.overview}
        </span>
      </div>

      <div className="flex flex-wrap gap-y-[24px]">
        <div className="flex flex-col gap-y-[8px] w-full md:w-1/2">
          <span className="text-[12px] md:text-[16px] font-[700]">
            Dirección
          </span>
          <span className="text-[12px] md:text-[14px] font-[300] leading-[140%]">
            {crew
              ?.filter((r) => r.role == "Dirección")
              ?.map((r) => r.name)
              .join(", ") || "--"}
          </span>
        </div>

        <div className="flex flex-col gap-y-[8px] w-full md:w-1/2 md:pl-[32px]">
          <span className="text-[12px] md:text-[16px] font-[700]">Guión</span>
          <span className="text-[12px] md:text-[14px] font-[300] leading-[140%]">
            {crew
              ?.filter((r) => r.role == "Guión")
              ?.map((r) => r.name)
              .join(", ") || "--"}
          </span>
        </div>

        <div className="flex flex-col gap-y-[8px] w-full md:w-1/2">
          <span className="text-[12px] md:text-[16px] font-[700]">
            Reparto principal
          </span>
          <span className="text-[12px]md:text-[14px] font-[300] leading-[140%]">
            {actors?.map((actor) => actor.name).join(", ")}
          </span>
        </div>

        <div className="flex flex-col gap-y-[16px] justify-start w-full md:w-1/2 md:pl-[32px]">
          <span className="text-[12px] md:text-[16px] font-[700]">
            ¿Dónde puedo ver esta producción?
          </span>
          {platforms && platforms.length === 0 ? (
            <span className="text-[12px] font-[300] leading-[140%]">
              Lo sentimos. No contamos con esta información.
            </span>
          ) : (
            <div className="flex gap-x-[12px] flex-wrap gap-y-[12px]">
              {platforms?.map((item, index: number) => {
                return (
                  <Link href={item.link} key={index}>
                    <Image
                      width={48}
                      height={48}
                      style={{ width: "48px", height: "48px" }}
                      src={item?.logo_url || ""}
                      alt=""
                    />
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
