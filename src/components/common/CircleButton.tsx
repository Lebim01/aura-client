import { classNamesCustom } from "@/utils/classes";
import { CSSProperties, FC, ReactNode } from "react";

type Props = {
  className?: string;
  children: ReactNode;
  style?: CSSProperties;
};

const CircleButton: FC<Props> = (props) => {
  return (
    <div
      className={classNamesCustom(
        "h-[40px] w-[40px] rounded-full border flex items-center justify-center",
        props.className
      )}
      style={props.style}
    >
      {props.children}
    </div>
  );
};

export default CircleButton;
