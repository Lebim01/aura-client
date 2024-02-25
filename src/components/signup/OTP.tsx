"use client";
import React, { useState, useEffect } from "react";
import OTPInputs from "./OTP/OTPInputs";
import ButtonCommon from "../common/ButtonCommon";
import { useRouter } from "next/router";
import axiosInstance from "@/services";
import useUserRegistrationStore from "@/store/userRegistrationStore";
import { signIn } from "next-auth/react";

const OTP = () => {
  const { userData } = useUserRegistrationStore();
  const [otp, setOtp] = useState("");
  const [disabled, setDisabled] = useState<boolean>(true);
  const router = useRouter();

  useEffect(() => {
    setDisabled(otp.trim().length === 4 ? false : true);
  }, [otp]);

  const register = async () => {
    try {
      setDisabled(true);
      await axiosInstance.post("/auth/register", {
        name: userData.username,
        lastname: " ",
        password: userData.pass,
        email: userData.mail,
        otp,
      });
      await signIn("credentials", {
        email: userData.mail,
        password: userData.pass,
      });
      router.push("/signup?step=success");
    } catch (err) {
      console.error(err);
    } finally {
      setDisabled(false);
    }
  };

  return (
    <div className="flex flex-col gap-y-[32px] justify-center items-center">
      <span className="font-[500] leading-[150%] text-center">
        Te hemos enviado un código de confirmación a tu correo electrónico{" "}
      </span>
      <OTPInputs value={otp} valueLength={4} onChange={setOtp} />
      <div className="flex flex-col gap-y-[16px] w-full">
        <ButtonCommon
          text="INGRESAR CÓDIGO"
          disabled={disabled}
          onClick={register}
        />
        <div className="flex justify-center items-center w-full rounded-[8px] h-[50px] bg-yellow-aura font-[800] text-[12px] leading-[150%] cursor-pointer text-brown-aura bg-white">
          <span className="text-[12px]">REENVIAR CÓDIGO</span>
        </div>
      </div>
    </div>
  );
};

export default OTP;
