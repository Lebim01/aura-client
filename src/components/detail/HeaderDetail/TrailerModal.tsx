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
    <div>
      <div
        ref={ref}
        className={classNames(
          "absolute left-1/2 -translate-x-1/2 z-10 transition-all duration-[600ms]",
          {
            "-top-full": !props.open,
            "top-1/4": props.open,
          }
        )}
      >
        <div className="flex justify-end p-2">
          <FaTimes
            className="hover:cursor-pointer hover:scale-110"
            onClick={props.close}
          />
        </div>
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${id}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default TrailerModal;
