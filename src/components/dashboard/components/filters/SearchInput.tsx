"use client";

import Image from "next/image";

const SearchInput = () => {
  return (
    <div className="w-full px-[16px] flex">
      <div className="flex w-full gap-x-[16px] bg-black-18  rounded-[8px] py-[8px] max-h-[44px] min-h-[48px] items-center">
        <span className="flex pl-[16px] min-w-[20px]">
          <Image src={`/icons/search.svg`} width={20} height={20} alt="" />
        </span>
        <div className="flex flex-col justify-center w-full h-full">
          <input
            className={
              "border rounded-[6px] focus:outline-none bg-black-18 text-white border-none w-full h-full flex items-center  placeholder:text-white placeholder:opacity-50 placeholder:font-[500] placeholder:text-[12px] placeholder:leading-[12px] text-[12px]"
            }
            placeholder={"¿Qué serie o película estás buscando?"}
            /*   value={value}
     onChange={onChange} */
            type={"text"}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchInput;
