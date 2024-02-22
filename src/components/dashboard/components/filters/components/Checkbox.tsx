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
      width={150}
      height={120}
      sizes="100vw"
      style={{ width: "100%", height: "auto" }}
      alt=""
    />
  );
};

export default Checkbox;
