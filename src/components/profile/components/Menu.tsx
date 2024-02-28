"use client";
import Image from "next/image";
import {
  useEffect,
  useState,
  useRef,
  Dispatch,
  SetStateAction,
  useCallback,
} from "react";
import { useSwipeable } from "react-swipeable";
import { classNamesCustom } from "@/utils/classes";
import useShowHideFooterStore from "@/store/showHideFooterStore";
interface Props {
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
  index: number;
}

const Menu = ({ show, setShow, index }: Props) => {
  const [h, setH] = useState<boolean>(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [rows, setRows] = useState(1);
  const [text, setText] = useState("");
  const { showHideFooter, toggleFooter } = useShowHideFooterStore();

  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, []);

  const handlers = useSwipeable({
    onSwipedUp: (eventData) => {
      eventData.event.stopPropagation();
      setH(true);
    },
    onSwipedDown: (eventData) => {
      eventData.event.stopPropagation();
      setH(false);
    },
    trackMouse: true,
  });

  const handlersComments = useSwipeable({
    onSwipedUp: (eventData) => {
      eventData.event.stopPropagation();
    },
    onSwipedDown: (eventData) => {
      eventData.event.stopPropagation();
    },
    trackMouse: true,
  });

  const handlersMain = useSwipeable({
    onSwipedUp: (eventData) => {
      eventData.event.stopPropagation();
    },
    onSwipedDown: (eventData) => {
      eventData.event.stopPropagation();
    },
    trackMouse: true,
  });

  return (
    <div
      className={classNamesCustom(
        " items-end justify-end w-screen flex flex-col top-0 bg-black-1D backdrop-blur-sm bg-opacity-10 z-50 ",
        {
          "h-custom-screen transition-all duration-500 absolute": show,
        },
        { "transition-all duration-500 hidden": !show }
      )}
      {...handlersMain}
    >
      <div
        className="w-full flex-1"
        onClick={() => {
          setShow(false);
          toggleFooter(false);
        }}
        {...handlersComments}
      ></div>
      <div
        className={classNamesCustom(
          "w-full bg-black-0D rounded-t-[16px] px-[16px] py-[24px] flex flex-col gap-y-[24px] items-center swipe-up",
          { "h-full transition-all duration-500 rounded-t-none": h },
          { "h-[241px] transition-all duration-500": !h }
        )}
        {...handlers}
      >
        <div
          className="flex flex-col gap-y-[24px] w-full justify-center items-center"
          {...handlers}
        >
          <div
            className="flex justify-between items-center w-full"
            {...handlers}
          >
            <div className="w-full"></div>
            <div className="w-[100px] h-[3px] bg-white bg-opacity-40 rounded-[100px]"></div>
            <div className="w-full flex justify-end">
              <Image
                src={"/icons/x.svg"}
                alt=""
                width={20}
                height={20}
                className=""
                onClick={() => {
                  setShow(false);

                  toggleFooter(false);
                }}
              />
            </div>
          </div>
          <span
            className="text-[14px] font-[500] leading-[130%] w-full text-center"
            {...handlers}
          >
            Cambia tu foto perfil
          </span>
        </div>
        <div className="flex flex-col gap-y-[16px] justify-start w-full overflow-y-auto hidescroll flex-1 z-50">
          <div className="flex gap-x-[8px] items-center">
            <Image
              src={"/icons/gallery-green.svg"}
              alt=""
              width={20}
              height={20}
              className=""
            />
            <span className="text-[12px] font-[600] leading-[150%] capitalize">
              Subir foto
            </span>
          </div>

          <div className="flex gap-x-[8px] items-center">
            <Image
              src={"/icons/camera-green.svg"}
              alt=""
              width={20}
              height={20}
              className=""
            />
            <span className="text-[12px] font-[600] leading-[150%] capitalize">
              Tomar foto
            </span>
          </div>

          <div className="flex gap-x-[8px] items-center">
            <Image
              src={"/icons/trash-red.svg"}
              alt=""
              width={20}
              height={20}
              className=""
            />
            <span className="text-[12px] font-[600] leading-[150%] capitalize">
              Eliminar foto de perfil
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
