"use client";
import React, { ChangeEvent } from "react";
import Image from "next/image";
import useUserRegistrationStore from "@/store/userRegistrationStore";

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
const Input = ({ icon, placeholder, type, name }: Props) => {
  const { userData, setUserField } = useUserRegistrationStore();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUserField(name, value);
  };

  return (
    <div className="relative  w-full h-[51px]">
      <span className="absolute inset-y-6 left-0 flex items-center pl-[16px]">
        <Image src={`${icon}.svg`} width={16} height={16} alt="" />
      </span>
      <input
        className="pl-10 border rounded-lg focus:outline-none  text-white bg-inputs border-none w-full h-full flex items-center px-[12px] placeholder:text-[12px] placeholder:text-white placeholder:opacity-50 placeholder:font-[600] placeholder:leading-[120%"
        placeholder={placeholder}
        value={userData[name]}
        onChange={handleChange}
        type={type || "text"}
        name={name}
      />
    </div>
  );
};

export default Input;
