import React, { ChangeEvent, ReactNode, useState } from "react";
import { classNamesCustom } from "@/utils/classes";

interface Props {
  placeholder: string;
  type?: string;
  name?: string;
  value: string;
  onChange?: (value: string) => void;
  LeftIcon?: ReactNode;
  Icon?: ReactNode;
}

const InputCommon = ({
  value,
  placeholder,
  type,
  name,
  onChange,
  Icon,
  LeftIcon,
}: Props) => {
  const [focused, setFocused] = useState(false);
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    onChange && onChange(value);
  };

  return (
    <div className="relative flex items-center w-full max-h-[51px] min-h-[51px] bg-inputs rounded-[8px]">
      {LeftIcon}
      <div className="pl-10 flex flex-col py-[8px] max-h-[51px] min-h-[51px] justify-center flex-1">
        {value !== "" && (
          <label className="text-[10px] font-[700] opacity-50 text-left">
            {placeholder}
          </label>
        )}
        <input
          className={classNamesCustom(
            "border rounded-lg focus:outline-none bg-inputs max-h-[51px] text-white border-none w-full h-full flex items-center  placeholder:text-white placeholder:opacity-50 placeholder:font-[600] placeholder:leading-[100%]",
            { "md:text-[16px]": value },
            { "md:text-[12px]": !value },
            { "h-[21px]": focused }
          )}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          type={type || "text"}
          name={name}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
      </div>

      {Icon}
    </div>
  );
};

export default InputCommon;
