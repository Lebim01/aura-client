"use client";
import Image from "next/image";
import { useEffect, useState, useRef, Dispatch, SetStateAction } from "react";
import { useSwipeable } from "react-swipeable";
import { classNamesCustom } from "@/utils/classes";

interface Props {
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
  index: number;
}

const Comments = ({ show, setShow, index }: Props) => {
  const [h, setH] = useState<boolean>(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [rows, setRows] = useState(1);
  const [text, setText] = useState("");

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

      const element = scrollContainerRef.current;
      if (element) {
        const bottomReached =
          element.scrollHeight - element.scrollTop <= element.clientHeight;
        if (bottomReached) {
          setH(true);
        }
      }
    },
    onSwipedDown: (eventData) => {
      eventData.event.stopPropagation();

      const element = scrollContainerRef.current;
      if (element) {
        const topReached = element.scrollTop === 0;
        if (topReached) {
          setH(false);
        }
      }
    },
    trackMouse: true,
  });

  const handleChange = (e: any) => {
    const newText = e.target.value;
    setText(newText);

    const newRows = newText.split("\n").length || 1;
    setRows(newRows);
  };

  return (
    <div
      className={classNamesCustom(
        " items-end justify-end w-screen flex flex-col top-0 bg-[#1A1A1A] bg-opacity-10 z-50",
        {
          "h-custom-screen-comments transition-all duration-500 absolute": show,
        },
        { "transition-all duration-500 hidden": !show }
      )}
      {...handlersComments}
    >
      {/* div transparente para ocultar comentarios */}
      <div
        className="w-full flex-1"
        onClick={() => setShow(false)}
        {...handlersComments}
      ></div>
      <div
        className={classNamesCustom(
          "w-full  bg-[#343434] rounded-t-[16px] px-[16px] py-[24px] flex flex-col gap-y-[24px] items-center",
          { "h-full transition-all duration-500 rounded-t-none": h },
          { "h-[387px] transition-all duration-500": !h }
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
                onClick={() => setShow(false)}
              />
            </div>
          </div>
          <span
            className="text-[14px] font-[500] leading-[130%] w-full text-center"
            {...handlers}
          >
            Comentarios
          </span>
        </div>
        <div
          className="flex flex-col gap-y-[21px] justify-start w-full overflow-y-auto hidescroll flex-1"
          {...handlersComments}
        >
          <div className="flex gap-x-[8px] items-start">
            <Image
              src={""}
              alt=""
              width={24}
              height={24}
              className="bg-gray-400 rounded-full min-w-[24px] min-h-[24px]"
            />
            <div className="flex flex-col gap-y-[8px]">
              <div className="flex flex-col">
                <div className="flex gap-x-[4px]">
                  <span>Carlos Martínez</span>
                  <span>•</span>
                  <span>1d</span>
                </div>
                <span
                  className="text-[12px] leading-[130%] overflow-hidden block text-ellipsis max-h-[calc(2*1.3*12px)]"
                  style={{
                    display: "-webkit-box",
                    WebkitLineClamp: "2",
                    WebkitBoxOrient: "vertical",
                  }}
                >
                  Lorem ipsum dolor sit amet consectetur. Maecenas sit nisi a ac
                  in amet nullam. Morbi aliquam cras sit quis pharetra integer.
                  Lacus auctor suscipit in nulla.
                </span>
              </div>
              <span className="font-[700] text-[12px] leading-[120%]">
                Responder
              </span>
            </div>
          </div>
        </div>
        <div className="w-full flex items-center gap-x-[8px]">
          <div className="w-[32px] h-[32px]">
            <Image
              src={""}
              alt=""
              width={32}
              height={32}
              className="bg-gray-400 rounded-full min-w-[24px] min-h-[24px]"
            />
          </div>
          <div className="flex w-full px-[16px] py-[12px] border border-border-comment-input rounded-[6px] ">
            <textarea
              placeholder="Escribe algo..."
              rows={rows}
              className="w-full bg-transparent focus:ring-transparent focus:outline-none h-auto "
              value={text}
              onChange={handleChange}
              style={{ resize: "none" }}
            />
            <Image src={"/icons/happy.svg"} alt="" width={16} height={16} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
