"use client";
import React, { useState, useEffect } from "react";
import OTPInputs from "./OTP/OTPInputs";
import ButtonCommon from "../common/ButtonCommon";
import { useRouter } from "next/router";
const OTP = () => {
  const [otp, setOtp] = useState("");
  const [disabled, setDisabled] = useState<boolean>(true);
  const router = useRouter();
  useEffect(() => {
    setDisabled(otp.trim().length === 4 ? false : true);
  }, [otp]);

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
          onClick={() => {
            router.push("/signup?step=username");
          }}
        />
        <div className="flex justify-center items-center w-full rounded-[8px] h-[50px] bg-yellow-aura font-[800] text-[12px] leading-[150%] cursor-pointer text-brown-aura bg-white">
          <span className="text-[12px]">REENVIAR CÓDIGO</span>
        </div>
      </div>
    </div>
  );
};

export default OTP;
