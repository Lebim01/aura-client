import { classNamesCustom } from "@/utils/classes";
import { FC, ReactNode, useRef } from "react";
import { FaTimes } from "react-icons/fa";
import { useOnClickOutside } from "usehooks-ts";

type Props = {
  children: ReactNode;
  open: boolean;
  onClose: () => void;
  className?: string;
  title?: string;
};

const Modal: FC<Props> = (props) => {
  const ref = useRef(null);
  useOnClickOutside(ref, props.onClose);

  return (
    <div
      className={classNamesCustom(
        `fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-60 flex justify-center items-center backdrop-blur-md z-[999999999]`,
        props.open && "animate-fadeAndScale"
      )}
    >
      <div
        ref={ref}
        className={classNamesCustom(
          "rounded-[16px] relative transition-opacity duration-300 w-full md:w-[50%] px-[16px]",
          props.className
        )}
      >
        <div className="flex justify-between p-2">
          <span className="font-medium">{props.title}</span>
          <FaTimes
            className="hover:cursor-pointer hover:scale-110"
            onClick={props.onClose}
          />
        </div>

        {props.children}
      </div>
    </div>
  );
};

export default Modal;
