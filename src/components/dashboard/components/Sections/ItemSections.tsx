"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const ItemSections = ({ props }: any) => {
  const router = useRouter()
  return (
    <div className="flex flex-col gap-y-[8px] max-w-[146px] min-w-[146px]" onClick={()=>router.push(`/detail/${props.slug}`)}>
      <Link href={"#"}>
        <Image
          src={props.poster_path}
          width={146}
          height={223}
          alt=""
          className="bg-gray-400 rounded-[8px]"
        />
      </Link>
      <div className="flex flex-col">
        <span className="font-[600] leading-[150%] text-[14px] truncate max-w-[100px]">
          {props.title}
        </span>
        <span className="text-[12px] font-[600] leading-[150%] opacity-60 truncate max-w-[100px]">
          {props.genres.map((genre: any) => genre.name).join(", ")}
          {/* {props.genres[0].name} */}
        </span>
      </div>
    </div>
  );
};

export default ItemSections;
