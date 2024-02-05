"use client";
import React, { ChangeEvent, useState } from "react";
import Image from "next/image";
import useUserRegistrationStore from "@/store/userRegistrationStore";
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
  icon: string;
  placeholder: string;
  type?: string;
  name: keyof UserData;
  onChange?: () => void;
}
const InputRegister = ({ icon, placeholder, type, name }: Props) => {
  const { userData, setUserField } = useUserRegistrationStore();
  const [value, setValue] = useState<string>("");
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUserField(name, value);
    setValue(value);
  };

  return (
    <div className="relative  w-full max-h-[51px]  min-h-[51px]">
      <span className="absolute inset-y-6 left-0 flex items-center pl-[16px]">
        <Image src={`${icon}.svg`} width={16} height={16} alt="" />
      </span>
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
            { "md:text-[12px]": !value }
          )}
          placeholder={placeholder}
          value={userData[name]}
          onChange={handleChange}
          type={type || "text"}
          name={name}
        />
      </div>
    </div>
  );
};

export default InputRegister;
