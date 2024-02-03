"use client";
import React, { useState } from "react";
import useUserRegistrationStore from "@/store/userRegistrationStore";

interface Props {
  type: string;
  name: string;
}

const options_: any = {
  Mes: [
    { value: "01", label: "Ene" },
    { value: "02", label: "Feb" },
    { value: "03", label: "Mar" },
    { value: "04", label: "Abr" },
    { value: "05", label: "May" },
    { value: "06", label: "Jun" },
    { value: "07", label: "Jul" },
    { value: "08", label: "Ago" },
    { value: "09", label: "Sep" },
    { value: "10", label: "Oct" },
    { value: "11", label: "Nov" },
    { value: "12", label: "Dic" },
  ],
  Dia: (() => {
    const days = [];
    for (let i = 1; i <= 31; i++) {
      const value = i < 10 ? `0${i}` : `${i}`;
      days.push({ value: value, label: `${i}` });
    }
    return days;
  })(),
  Año: (() => {
    const currentYear = new Date().getFullYear();
    const years = [];
    for (let year = currentYear; year >= 1900; year--) {
      years.push({ value: `${year}`, label: `${year}` });
    }
    return years;
  })(),
};

const Select = ({ type, name }: Props) => {
  const [value, setValue] = useState("");
  const [displayText, setDisplayText] = useState("");
  const [options, setoPtions] = useState<any>(options_[type]);
  const { setUserField } = useUserRegistrationStore();

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    setUserField(name, value);
    const selectedValue = event.target.value;
    setValue(selectedValue);
    const selectedOption = options.find(
      (option: any) => option.value === selectedValue
    );
    if (selectedOption) {
      setDisplayText(selectedOption.value);
    }
  };

  return (
    <div className="flex flex-col gap-y-[8px] w-full">
      {type}
      <select
        className="pl-[12px] pr-[4px] border rounded-lg focus:outline-none h-[48px] text-white bg-inputs border-none w-full flex items-center placeholder:text-[12px] placeholder:text-white placeholder:opacity-10 placeholder:font-[600] placeholder:leading-[120%"
        value={value}
        onChange={handleChange}
        name={name}
      >
        <option value="" disabled hidden>
          00
        </option>
        {options &&
          options.map((option: any) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
      </select>
    </div>
  );
};

export default Select;
