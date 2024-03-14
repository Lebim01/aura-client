"use client";

import Image from "next/image";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";
import { getRecommended } from "@/services/dashboard";
import useFiltersRecommended from "@/store/useFiltersRecommended";
import { classNamesCustom } from "@/utils/classes";
import { useRouter } from "next/router";

interface Props {
  setShow: Dispatch<SetStateAction<boolean>>;
  show: boolean;
}

const Recommended = ({ setShow, show }: Props) => {
  const [index, setIndex] = useState(0);
  const { filters, clearFilters } = useFiltersRecommended();
  const [data, setData] = useState<any>([]);
  const [animationClass, setAnimationClass] = useState("");
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, []);

  useEffect(() => {
    getRecommendations();
  }, []);

  const getRecommendations = async () => {
    try {
      const res = await getRecommended(filters);
      setData(res.data);
      setLoading(false);
      clearFilters();
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      setAnimationClass("fade-in");
      setIndex((i) => (i + 1) % data.length);
      setTimeout(() => setAnimationClass(""), 300);
    },
    onSwipedRight: () => {
      setAnimationClass("fade-in");
      setIndex((i) => (i - 1 + data.length) % data.length);
      setTimeout(() => setAnimationClass(""), 300);
    },
    trackMouse: true,
  });
  return (
    <div
      className={`fixed top-0 left-0 w-screen h-screen bg-black-29 bg-opacity-80 flex justify-center items-center backdrop-blur-[7.5px] z-[999999999] `}
    >
      <div
        className={`bg-black-0D rounded-[16px] relative transition-opacity duration-300 select-none hover:cursor-grab  ${
          show ? "animate-fadeAndScale" : ""
        }`}
        {...handlers}
      >
        <div
          className={`bg-recommended bg-contain bg-no-repeat rounded-[16px]`}
        >
          <div
            className={`pt-[48px] pb-[36px] px-[52px] flex flex-col gap-y-[32px] `}
          >
            {loading ? (
              <div
                key={index}
                className={classNamesCustom(
                  "flex flex-col gap-y-[8px] max-w-[171px] min-w-[171px] md:max-w-[171px] md:min-w-[171px] animate-pulse",
                  {
                    "hidden md:flex": index > 3,
                  }
                )}
              >
                <div className="bg-gray-300 rounded-[8px] w-[171px] h-[262px] md:w-[171px] md:h-[262px]"></div>
                <div className="flex flex-col gap-y-[4px]">
                  <div className="bg-gray-300 rounded h-[20px] w-[100px]"></div>
                </div>
              </div>
            ) : data.length > 0 ? (
              <div
                className={`flex flex-col gap-y-[10px] transition-opacity duration-500 ${animationClass}`}
                onClick={() => {
                  setShow(false);
                  router.push("/detail/[slug]", `/detail/${data[index].slug}`);
                  /*  window.location.reload(); */
                }}
              >
                <Image
                  key={data[index]?.poster_path}
                  src={data[index]?.poster_path}
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "171px", height: "262px" }}
                  alt=""
                  className="rounded-[9px] pointer-events-none object-cover"
                />
                <div className="flex flex-col">
                  <span className="text-[14px] md:text-[16px] font-[600] leading-[150%] opacity-60 ">
                    {data[index]?.genres &&
                      data[index]?.genres
                        .map((genre: any) => genre.name)
                        .join(", ")}
                  </span>
                </div>
              </div>
            ) : (
              <div className=" w-[172px] h-[262px] flex justify-center items-center text-center">
                Por el momento, en esta plataforma no hay ese género
              </div>
            )}

            <div className="flex gap-x-[9px] justify-center items-center">
              {data.map((_: any, idx: number) => (
                <div
                  key={idx}
                  className={`h-[8px] w-[8px] rounded-full cursor-pointer md:hover:scale-125 transition-transform duration-200 ease-in-out ${
                    index === idx ? "bg-green-enlaces" : "bg-gray-400"
                  }`}
                  onClick={() => setIndex(idx)}
                />
              ))}
            </div>
          </div>
        </div>
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2  rounded-full  text-white flex items-center justify-center bg-bg-green-button h-[40px] w-[40px] cursor-pointer"
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
