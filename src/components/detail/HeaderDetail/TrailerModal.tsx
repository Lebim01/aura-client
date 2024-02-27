import classNames from "classnames";
import { FC, useMemo, useRef } from "react";
import { FaTimes } from "react-icons/fa";
import { useOnClickOutside } from "usehooks-ts";

type Props = {
  url?: string;
  open: boolean;
  close: () => void;
};

const TrailerModal: FC<Props> = (props) => {
  const ref = useRef(null);
  useOnClickOutside(ref, props.close);

  const id = useMemo(() => {
    if (!props.url) return "";
    if (props.url.includes("youtu.be")) {
      const url = new URL(props.url);
      return url.pathname.replace(/^\//, "");
    }
    if (props.url.includes("youtube.com/watch")) {
      const url = new URL(props.url);
      return url.searchParams.get("v");
    }
    return "";
  }, [props.url]);

  return (
    <div
      className={`fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-60 flex justify-center items-center backdrop-blur-md z-[999999999] ${
        props.open ? "animate-fadeAndScale" : ""
      }`}
      onClick={props.close}
    >
      <div className="rounded-[16px] relative transition-opacity duration-300 w-full md:w-[50%] px-[16px]">
        <div className="flex justify-end p-2">
          <FaTimes
            className="hover:cursor-pointer hover:scale-110"
            onClick={props.close}
          />
        </div>
        <div className="relative" style={{ paddingTop: "56.25%" }}>
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src={`https://www.youtube.com/embed/${id}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default TrailerModal;
