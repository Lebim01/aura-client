"use client";
import React, { useEffect, useState } from "react";
import Input from "../common/InputRegister";
import Separator from "../common/Separator";
import ButtonCommon from "../common/ButtonCommon";
import useUserRegistrationStore from "@/store/userRegistrationStore";
import { useRouter } from "next/router";
import axiosInstance from "@/services";

const UserName = () => {
  const [disabled, setDisabled] = useState<boolean>(true);
  const { userData } = useUserRegistrationStore();
  const router = useRouter();

  useEffect(() => {
    setDisabled(userData.username.trim() !== "" ? false : true);
  }, [userData]);

  const sendOTP = async () => {
    try {
      setDisabled(true);
      await axiosInstance.post("/auth/register", {
        name: userData.username,
        lastname: " ",
        password: userData.pass,
        email: userData.mail,
        birthdate: `${userData.year}-${userData.month}-${userData.day}`,
      });
      router.push("/signup?step=otp");
    } catch (err) {
      console.error(err);
    } finally {
      setDisabled(false);
    }
  };

  return (
    <div className="flex flex-col gap-y-[32px]">
      <Input
        icon="/icons/happy"
        placeholder="INGRESA TU NOMBRE"
        name="username"
      />

      <Separator />

      <ButtonCommon
        text="REGISTRARSE"
        disabled={disabled}
        onClick={() => {
          sendOTP();
        }}
      />
    </div>
  );
};

export default UserName;
