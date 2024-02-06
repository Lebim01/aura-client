"use client";

import Image from "next/image";
import Link from "next/link";

const ItemSections = () => {
  return (
    <div className="flex flex-col gap-y-[8px]">
      <Link href={"#"}>
        <Image
          src={""}
          width={146}
          height={223}
          alt=""
          className="bg-gray-400 rounded-[8px]"
        />
      </Link>
      <div className="flex flex-col">
        <span className="font-[600] leading-[150%] text-[14px]">
          Nombre de la entrega
        </span>
        <span className="text-[12px] font-[600] leading-[150%] opacity-60">
          Tipo de genero
        </span>
      </div>
    </div>
  );
};

export default ItemSections;
