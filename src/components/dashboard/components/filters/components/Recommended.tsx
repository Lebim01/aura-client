"use client";

import Image from "next/image";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";

const data = [
  {
    imgSrc: "/path/to/image1.jpg",
    title: "Roma",
    description: "Drama",
  },
  {
    imgSrc: "/path/to/image2.jpg",
    title: "Otra Película 1 ",
    description: "Acción",
  },
  {
    imgSrc: "/path/to/image2.jpg",
    title: "Otra Película 2",
    description: "Acción",
  },
  {
    imgSrc: "/path/to/image2.jpg",
    title: "Otra Película 3",
    description: "Acción",
  },
];

interface Props {
  setShow: Dispatch<SetStateAction<boolean>>;
  show: boolean;
}

const Recommended = ({ setShow, show }: Props) => {
  const [index, setIndex] = useState(0);
  const { imgSrc, title, description } = data[index];

  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, []);

  const handlers = useSwipeable({
    onSwipedLeft: () => setIndex((i) => (i + 1) % data.length),
    onSwipedRight: () => setIndex((i) => (i - 1 + data.length) % data.length),
    trackMouse: true,
  });

  return (
    <div
      className={`fixed top-0 left-0 w-screen h-screen bg-black-29 bg-opacity-80 flex justify-center items-center backdrop-blur-md z-[999999999] ${
        show ? "animate-fadeAndScale" : ""
      }`}
    >
      <div
        className="bg-black-0D rounded-[16px] relative transition-opacity duration-300"
        {...handlers}
      >
        <div className="bg-recommended bg-contain  bg-no-repeat rounded-[16px]">
          <div className="pt-[48px] pb-[36px] px-[52px] flex flex-col gap-y-[32px]">
            <div className="flex flex-col gap-y-[10px]">
              <Image
                src={imgSrc}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "171px", height: "262px" }}
                alt=""
                className="bg-white rounded-[9px]"
              />
              <div className="flex flex-col">
                <span className="text-[16px] font-[600] leading-[150%]">
                  {title}
                </span>
                <span className="text-[14px] font-[600] leading-[150%] opacity-60">
                  {description}
                </span>
              </div>
            </div>
            <div className="flex gap-x-[9px] justify-center items-center">
              {data.map((_, idx) => (
                <div
                  key={idx}
                  className={`h-[8px] w-[8px] rounded-full ${
                    index === idx ? "bg-green-enlaces" : "bg-gray-400"
                  }`}
                  onClick={() => setIndex(idx)}
                />
              ))}
            </div>
          </div>
        </div>
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2  rounded-full  text-white flex items-center justify-center bg-bg-green-button h-[40px] w-[40px]"
          style={{ boxShadow: "0 0 3px 3px rgba(65, 255, 123, 0.5" }}
          onClick={() => {
            setShow(false);
          }}
        >
          <Image src={"/icons/x_black.svg"} width={24} height={24} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Recommended;
