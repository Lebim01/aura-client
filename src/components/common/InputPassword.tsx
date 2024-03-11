import { FC, ReactNode, useState } from "react";
import InputCommon from "./Input";
import { FaEye, FaRegEyeSlash } from "react-icons/fa";
import Image from "next/image";

interface Props {
  placeholder: string;
  name?: string;
  value: string;
  onChange?: (value: string) => void;
  LeftIcon?: string;
}

const InputPassword: FC<Props> = (props) => {
  const [show, setShow] = useState(false);
  return (
    <InputCommon
      {...props}
      type={show ? "text" : "password"}
      LeftIcon={
        <span className="absolute inset-y-6 left-0 flex items-center pl-[16px]">
          <Image src={`${props.LeftIcon}.svg`} width={16} height={16} alt="" />
        </span>
      }
      Icon={
        <div
          className="mx-[8px] hover:cursor-pointer hover:bg-neutral-800 hover:invert rounded-full h-[30px] w-[30px] min-h-[30px] min-w-[30px] flex items-center justify-center"
          onClick={() => setShow((s) => !s)}
        >
          {show ? (
            <FaEye
              style={{ minWidth: 20, minHeight: 20, height: 20, width: 20 }}
            />
          ) : (
            <FaRegEyeSlash
              style={{ minWidth: 20, minHeight: 20, height: 20, width: 20 }}
            />
          )}
        </div>
      }
    />
  );
};

export default InputPassword;
