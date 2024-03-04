import React, { ChangeEvent, useState } from "react";
import { classNamesCustom } from "@/utils/classes";

interface UserData {
  mail: "";
  pass: "";
  confirm_pass: "";
  day: "";
  month: "";
  year: "";
  username: "";
}

interface Props {
  icon?: string;
  placeholder: string;
  type?: string;
  name?: string;
  value: string;
  onChange?: (value: string) => void;
}

const InputCommon = ({ value, placeholder, type, name, onChange }: Props) => {
  const [focused, setFocused] = useState(false);
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    onChange && onChange(value);
  };

  return (
    <div className="relative w-full max-h-[51px] min-h-[51px]">
      <div className="pl-10 flex flex-col bg-inputs rounded-[8px] py-[8px] max-h-[51px] min-h-[51px] justify-center">
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
    </div>
  );
};

export default InputCommon;
