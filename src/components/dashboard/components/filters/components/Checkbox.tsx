"use client";

import Image from "next/image";
interface Props {
  label: string;
  value: string;
  image: string;
}
const Checkbox = ({ label, value, image }: Props) => {
  return (
    <Image
      src={image}
      width={0}
      height={0}
      sizes="100vw"
      style={{ width: "100%", height: "auto" }}
      alt=""
      className="hover:scale-105 transition-transform duration-200 ease-in-out cursor-pointer "
    />
  );
};

export default Checkbox;
