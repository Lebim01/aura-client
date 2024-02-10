"use client";
import React from "react";
import Image from "next/image";

export default function Sinopsis({props}:any) {

  return (
    <div className="flex flex-col gap-y-[24px] px-[16px]">
      <div className="flex flex-col gap-y-[8px]">
        <span className="text-[12px] font-[700]">Sinopsis</span>
        <span className="text-[12px] font-[300] leading-[140%]">
          {props?.movie?.overview}
        </span>
      </div>

      <div className="flex flex-col gap-y-[8px]">
        <span className="text-[12px] font-[700]">Guión</span>
        <span className="text-[12px] font-[300] leading-[140%]">
          Alfonso Cuarón
        </span>
      </div>

      <div className="flex flex-col gap-y-[8px]">
        <span className="text-[12px] font-[700]">Reparto principal</span>
        <span className="text-[12px] font-[300] leading-[140%]">
          {props?.actors && props?.actors.map((genre: any) => genre.name).join(", ")}
        </span>
      </div>

      <div className="flex flex-col gap-y-[16px] justify-start">
      <span className="text-[12px] font-[700]">
          ¿Dónde puedo ver esta producción?
        </span>
        {props?.platforms && props?.platforms.length === 0 ? 
        <span className="text-[12px] font-[300] leading-[140%]">
            Lo sentimos. No contamos con esta información.
          </span> :
          <div className="flex gap-x-[12px] flex-wrap gap-y-[12px]">
          {props.platforms.map((item:any, index:number)=>{
            return <Image
            key={index}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "fit-content", height: "48px" }}
            src={item.logo_url}
            alt=""
          /> 
          
          })}
          </div>

           }
      </div>
    </div>
  );
}
