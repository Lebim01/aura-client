"use client";
import React, { useEffect, useState } from "react";
import Input from "../common/InputRegister";
import Separator from "../common/Separator";
import ButtonCommon from "../common/ButtonCommon";
import useUserRegistrationStore from "@/store/userRegistrationStore";
import { useRouter } from "next/router";

const UserName = () => {
  const [disabled, setDisabled] = useState<boolean>(true);
  const { userData } = useUserRegistrationStore();
  const router = useRouter();

  useEffect(() => {
    setDisabled(userData.username.trim() !== "" ? false : true);
  }, [userData]);

  return (
    <div className="flex flex-col gap-y-[32px]">
      <Input
        icon="/icons/happy"
        placeholder="INGRESA TU NOMBRE DE USUARIO"
        name="username"
      />
      <div className="flex flex-col gap-y-[16px] w-full">
        <ButtonCommon
          text="SIGUIENTE"
          disabled={disabled}
          onClick={() => {
            router.push("/signup?step=success");
          }}
        />
        <div className="flex justify-center items-center w-full rounded-[8px] h-[50px] bg-yellow-aura font-[800] text-[12px] leading-[150%] cursor-pointer text-brown-aura bg-white">
          <span className="text-[12px]">SALTAR PASO</span>
        </div>
      </div>
      <Separator />
    </div>
  );
};

export default UserName;
